(function(){
  const STORAGE_KEY = 'scan_caisse_items_v1';
  let items = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  let html5QrCode = null;
  let scanning = false;
  let pendingCode = null;

  const itemsList = document.getElementById('itemsList');
  const emptyState = document.getElementById('emptyState');
  const itemCount = document.getElementById('itemCount');
  const qtyCount = document.getElementById('qtyCount');
  const grandTotal = document.getElementById('grandTotal');
  const statusLine = document.getElementById('statusLine');

  function fmt(n){
    return n.toLocaleString('fr-FR', {minimumFractionDigits:2, maximumFractionDigits:2}) + ' €';
  }

  function save(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  function render(){
    itemsList.innerHTML = '';
    if(items.length === 0){
      emptyState.style.display = 'block';
    } else {
      emptyState.style.display = 'none';
    }
    let totalQty = 0, total = 0;
    items.forEach((item, idx) => {
      totalQty += item.qty;
      total += item.qty * item.price;
      const row = document.createElement('div');
      row.className = 'row-item';
      row.innerHTML = `
        <div>
          <div class="pname">${escapeHtml(item.name)}</div>
          <div class="pcode">${escapeHtml(item.code)}</div>
        </div>
        <input type="number" step="0.01" min="0" value="${item.price}" data-idx="${idx}" data-field="price">
        <input type="number" min="1" value="${item.qty}" data-idx="${idx}" data-field="qty">
        <div class="sub">${fmt(item.qty * item.price)}</div>
        <button class="del" data-idx="${idx}" title="Supprimer">✕</button>
      `;
      itemsList.appendChild(row);
    });
    itemCount.textContent = items.length;
    qtyCount.textContent = totalQty;
    grandTotal.textContent = fmt(total);
    save();
  }

  function escapeHtml(str){
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  itemsList.addEventListener('input', (e) => {
    const idx = e.target.getAttribute('data-idx');
    const field = e.target.getAttribute('data-field');
    if(idx === null) return;
    let val = parseFloat(e.target.value);
    if(isNaN(val) || val < 0) val = field === 'qty' ? 1 : 0;
    items[idx][field] = val;
    render();
  });

  itemsList.addEventListener('click', (e) => {
    if(e.target.classList.contains('del')){
      const idx = e.target.getAttribute('data-idx');
      items.splice(idx, 1);
      render();
    }
  });

  // --- Ajout d'article (fusion si code existe déjà) ---
  function addItem(code, name, price, qty){
    const existing = items.find(i => i.code === code);
    if(existing){
      existing.qty += qty;
    } else {
      items.push({code, name, price, qty});
    }
    render();
  }

  // --- Modal ---
  const modalOverlay = document.getElementById('modalOverlay');
  const modalCode = document.getElementById('modalCode');
  const modalName = document.getElementById('modalName');
  const modalPrice = document.getElementById('modalPrice');
  const modalQty = document.getElementById('modalQty');

  function openModal(code, prefillName){
    pendingCode = code;
    modalCode.textContent = code;
    modalName.value = prefillName || '';
    modalPrice.value = '';
    modalQty.value = 1;
    modalOverlay.style.display = 'flex';
    setTimeout(() => modalName.focus(), 50);
  }
  function closeModal(){
    modalOverlay.style.display = 'none';
    pendingCode = null;
  }
  document.getElementById('modalCancel').addEventListener('click', closeModal);
  document.getElementById('modalConfirm').addEventListener('click', () => {
    const name = modalName.value.trim() || 'Produit sans nom';
    const price = parseFloat(modalPrice.value) || 0;
    const qty = parseInt(modalQty.value) || 1;
    addItem(pendingCode, name, price, qty);
    closeModal();
    statusLine.textContent = 'Article ajouté : ' + name;
    statusLine.classList.add('ok');
  });

  // --- Recherche produit via Open Food Facts (best effort) ---
  async function lookupProduct(code){
    try{
      const res = await fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`);
      const data = await res.json();
      if(data.status === 1 && data.product){
        return data.product.product_name || data.product.generic_name || '';
      }
    }catch(e){ /* pas de réseau ou produit introuvable, on ignore */ }
    return '';
  }

  async function handleScan(code){
    statusLine.classList.remove('ok');
    statusLine.textContent = 'Code détecté : ' + code + '…';
    playBeep();
    const name = await lookupProduct(code);
    openModal(code, name);
  }

  function playBeep(){
    try{
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.value = 880;
      osc.connect(gain);
      gain.connect(ctx.destination);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    }catch(e){}
  }

  // --- Caméra / Scanner ---
  const startBtn = document.getElementById('startBtn');
  const stopBtn = document.getElementById('stopBtn');

  function setError(msg){
    statusLine.classList.remove('ok');
    statusLine.style.color = 'var(--ribbon)';
    statusLine.textContent = msg;
  }

  async function startScanning(){
    if(scanning) return;
    statusLine.style.color = '';
    statusLine.classList.remove('ok');

    // 1. La librairie a-t-elle bien chargé (bloquée par le réseau, adblocker, etc.) ?
    if(typeof Html5Qrcode === 'undefined'){
      setError('Le module de scan n\'a pas pu se charger (pas de connexion internet ou script bloqué). Rechargez la page une fois connecté.');
      return;
    }

    // 2. Contexte sécurisé requis par les navigateurs pour la caméra
    const isSecure = window.isSecureContext || location.hostname === 'localhost' || location.protocol === 'file:';
    if(!window.isSecureContext && location.protocol !== 'file:'){
      setError('La caméra exige une page en HTTPS. Ouvrez cette appli via une adresse https:// ou localhost.');
      return;
    }

    // 3. L'API caméra existe-t-elle dans ce navigateur ?
    if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
      setError('Ce navigateur ne permet pas l\'accès à la caméra sur cette page (essayez Chrome ou Safari à jour).');
      return;
    }

    statusLine.textContent = 'Recherche des caméras…';

    let cameras = [];
    try{
      cameras = await Html5Qrcode.getCameras();
    }catch(err){
      // getCameras échoue typiquement si la permission est refusée
      setError('Accès caméra refusé. Autorisez la caméra pour ce site dans les réglages du navigateur, puis rechargez la page.');
      console.error(err);
      return;
    }

    if(!cameras || cameras.length === 0){
      setError('Aucune caméra détectée sur cet appareil.');
      return;
    }

    statusLine.textContent = 'Activation de la caméra…';
    html5QrCode = new Html5Qrcode('reader');

    // Préfère la caméra arrière si son libellé le suggère, sinon la dernière de la liste (souvent la arrière sur mobile)
    const backCam = cameras.find(c => /back|rear|environment/i.test(c.label)) || cameras[cameras.length - 1];

    const qrboxFn = (viewfinderWidth, viewfinderHeight) => {
      const w = Math.floor(Math.min(viewfinderWidth, viewfinderHeight) * 0.75);
      return { width: w, height: Math.floor(w * 0.55) };
    };

    const tryStart = (cameraConfig) => html5QrCode.start(
      cameraConfig,
      { fps: 10, qrbox: qrboxFn },
      (decodedText) => {
        if(modalOverlay.style.display === 'flex') return;
        handleScan(decodedText);
      },
      () => { /* erreurs de frame ignorées, normal pendant le scan */ }
    );

    try{
      await tryStart({ facingMode: { exact: 'environment' } });
    }catch(err1){
      console.warn('facingMode exact a échoué, on retente avec l\'ID de caméra', err1);
      try{
        await tryStart(backCam.id);
      }catch(err2){
        console.error(err2);
        const name = (err2 && err2.name) || '';
        if(name === 'NotAllowedError'){
          setError('Vous avez refusé l\'accès à la caméra. Autorisez-la dans les réglages du site puis rechargez.');
        } else if(name === 'NotReadableError'){
          setError('La caméra est déjà utilisée par une autre application. Fermez-la et réessayez.');
        } else {
          setError('Impossible de démarrer la caméra : ' + (err2.message || err2));
        }
        return;
      }
    }

    scanning = true;
    startBtn.style.display = 'none';
    stopBtn.style.display = 'block';
    statusLine.textContent = 'Caméra active — visez un code-barres.';
  }

  async function stopScanning(){
    if(html5QrCode && scanning){
      await html5QrCode.stop();
      html5QrCode.clear();
    }
    scanning = false;
    startBtn.style.display = 'block';
    stopBtn.style.display = 'none';
    statusLine.textContent = 'Scan arrêté.';
  }

  startBtn.addEventListener('click', startScanning);
  stopBtn.addEventListener('click', stopScanning);

  // --- Saisie manuelle ---
  document.getElementById('manualBtn').addEventListener('click', () => {
    const input = document.getElementById('manualCode');
    const code = input.value.trim();
    if(code){
      handleScan(code);
      input.value = '';
    }
  });
  document.getElementById('manualCode').addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
      document.getElementById('manualBtn').click();
    }
  });

  // --- Export CSV ---
  document.getElementById('exportBtn').addEventListener('click', () => {
    if(items.length === 0){
      statusLine.textContent = 'Aucun article à exporter.';
      return;
    }
    let csv = 'Code-barres;Produit;Prix unitaire;Quantité;Sous-total\n';
    let total = 0;
    items.forEach(i => {
      const sub = i.price * i.qty;
      total += sub;
      csv += `${i.code};${i.name};${i.price.toFixed(2)};${i.qty};${sub.toFixed(2)}\n`;
    });
    csv += `;;;Total;${total.toFixed(2)}\n`;
    const blob = new Blob(['\uFEFF' + csv], {type:'text/csv;charset=utf-8;'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ticket-caisse.csv';
    a.click();
    URL.revokeObjectURL(url);
  });

  // --- Réinitialisation ---
  document.getElementById('resetBtn').addEventListener('click', () => {
    if(items.length === 0) return;
    if(confirm('Vider tout le panier ?')){
      items = [];
      render();
      statusLine.textContent = 'Panier réinitialisé.';
      statusLine.classList.remove('ok');
    }
  });

  render();
})();

/* PhoneStock performance module — local-file compatible */
(function exposePerformanceModule(global) {
  const externalScriptPromises = new Map();

  function loadExternalScript(key, src, globalName) {
    if (global[globalName]) return Promise.resolve(global[globalName]);
    if (externalScriptPromises.has(key)) return externalScriptPromises.get(key);
    const promise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => global[globalName]
        ? resolve(global[globalName])
        : reject(new Error(`${key} indisponible`));
      script.onerror = () => reject(new Error(`Chargement impossible : ${key}`));
      document.head.appendChild(script);
    });
    externalScriptPromises.set(key, promise);
    return promise;
  }

  function createIdIndexes(state, types) {
    const indexes = Object.fromEntries(types.map(type => [type, { source: null, map: new Map() }]));
    return type => {
      const index = indexes[type];
      const source = state[type] || [];
      if (index.source !== source) {
        index.source = source;
        index.map = new Map(source.map(item => [item.id, item]));
      }
      return index.map;
    };
  }

  function createComputedCache() {
    const cache = new Map();
    return {
      clear: () => cache.clear(),
      get: (key, factory) => {
        if (!cache.has(key)) cache.set(key, factory());
        return cache.get(key);
      },
    };
  }

  function ensureLibraries() {
    return {
      xlsx: () => loadExternalScript('xlsx', 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js', 'XLSX'),
      pdf: () => loadExternalScript('jspdf', 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js', 'jspdf'),
      scanner: () => loadExternalScript('scanner', 'https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js', 'Html5Qrcode'),
    };
  }

  global.PhoneStockPerformance = { createComputedCache, createIdIndexes, ensureLibraries, loadExternalScript };
})(window);

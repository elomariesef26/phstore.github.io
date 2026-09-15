/* ============================================================
   PhoneStock — gestion boutique téléphones & accessoires
   ============================================================ */

const ICONS = {
  dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>`,
  box: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>`,
  layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 5-9 5-9-5 9-5z"/><path d="M3 12l9 5 9-5"/><path d="M3 17l9 5 9-5"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
  history: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/><path d="M12 7v5l4 2"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L8 18l-4 1 1-4z"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v5M14 11v5"/><path d="M9 6V4h6v2"/></svg>`,
  archive: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>`,
  empty: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`,
  printer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 11.5a8.5 8.5 0 01-12.6 7.4L3 20l1.2-4.7A8.5 8.5 0 1120.5 11.5z"/><path d="M8.5 8.5c.3-.5.7-.5 1-.1l1 1.4c.2.3.2.6 0 .8l-.5.6c.8 1.3 1.8 2.2 3.1 3l.6-.5c.2-.2.5-.2.8 0l1.4 1c.4.3.4.7-.1 1-1 .6-2 .5-3-.1-2.1-1.2-3.7-2.7-4.8-4.7-.6-1.1-.7-1.9-.1-2.4z"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012 4.2 2 2 0 014 2h3a2 2 0 012 1.7c.1.9.3 1.7.6 2.5a2 2 0 01-.5 2.1L7.8 9.6a16 16 0 006.6 6.6l1.3-1.3a2 2 0 012.1-.5c.8.3 1.6.5 2.5.6A2 2 0 0122 16.9z"/></svg>`,
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  wallet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7H5a2 2 0 010-4h14v4"/><path d="M3 5v14a2 2 0 002 2h16v-5"/><path d="M18 12a2 2 0 000 4h4v-4z"/></svg>`,
  fileText: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  scan: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 012-2h2"/><path d="M17 3h2a2 2 0 012 2v2"/><path d="M21 17v2a2 2 0 01-2 2h-2"/><path d="M7 21H5a2 2 0 01-2-2v-2"/><line x1="7" y1="8" x2="7" y2="16"/><line x1="11" y1="8" x2="11" y2="16"/><line x1="14" y1="8" x2="14" y2="16"/><line x1="17" y1="8" x2="17" y2="16"/></svg>`,
  };
const { createComputedCache, createIdIndexes, ensureLibraries } = window.PhoneStockPerformance;
const libraries = ensureLibraries();
const ensureXlsxLoaded = libraries.xlsx;
const ensurePdfLoaded = libraries.pdf;
const ensureScannerLoaded = libraries.scanner;

/* ---------------- Interface bilingue ---------------- */
const PHONESTOCK_LOCALES = window.PhoneStockLocales || { meta: { defaultLocale: 'fr', direction: { fr: 'ltr', ar: 'rtl' } }, fr: {}, ar: {} };
function currentLocale() { return state?.language === 'ar' ? 'ar' : 'fr'; }
function confirmLocalized(message) {
  return nativeConfirm(translateMessage(message));
}
function t(key, vars = {}) {
  let value = PHONESTOCK_LOCALES[currentLocale()]?.[key] || PHONESTOCK_LOCALES.fr?.[key] || key;
  Object.entries(vars).forEach(([name, replacement]) => { value = value.replaceAll(`{${name}}`, String(replacement)); });
  return value;
}
function setLanguage(language) {
  state.language = language === 'ar' ? 'ar' : 'fr';
  try { localStorage.setItem('phonestock-language', state.language); } catch (e) {}
  applyLanguage();
  render();
}
const RUNTIME_PHRASES_AR = {
  'N Bon': 'رقم السند',
  'Vendre': 'بيع',
  'Récapitulatif des recharges rechargées': 'ملخص عمليات إعادة الشحن',
  'Recharge rechargée': 'إعادة شحن',
  'Aucune recharge rechargée': 'لا توجد عمليات إعادة شحن',
  'Générer un bon depuis les ventes': 'إنشاء سند من المبيعات',
  'Le rapport PDF inclut les ventes, achats et encaissements de la période sélectionnée. Le net correspond aux ventes moins les achats ; les encaissements sont présentés séparément.': 'يتضمن تقرير PDF المبيعات والمشتريات والتحصيلات للفترة المحددة. الصافي يساوي المبيعات ناقص المشتريات؛ وتُعرض التحصيلات بشكل منفصل.',
  'Aucune vente disponible dans la période sélectionnée pour générer un bon d’achat.': 'لا توجد مبيعات متاحة في الفترة المحددة لإنشاء سند شراء.',
  'Achat validé depuis un bon': 'شراء مُعتمد من سند',
  'Modification service': 'تعديل خدمة',
  'Équipement modifié': 'تم تعديل المعدة',
  'Vente de recharge': 'بيع تعبئة',
  'Recharge de compte': 'تعبئة حساب',
  'Modification vente de recharge': 'تعديل بيع تعبئة',
  'Recharge vendue': 'تم بيع التعبئة',
  'Création compte rechargeable': 'إنشاء حساب قابل لإعادة الشحن',
  'Création compte vendeur': 'إنشاء حساب بائع',
  'Modification compte vendeur': 'تعديل حساب بائع',
  'Vente de service enregistrée': 'تم تسجيل بيع خدمة',
  'Modification vente de service': 'تعديل بيع خدمة',
  'Ajout service': 'إضافة خدمة',
  'Suppression service': 'حذف خدمة',
  'Bon d’achat préparé': 'سند شراء مُعد',
  'Bons d’achat préparés': 'سندات الشراء المعدة',
  'Bon d’achat préparé': 'سند الشراء المعد',
  'Bon d’achat supprimé': 'تم حذف سند الشراء',
  'Supprimer ce bon d’achat préparé ?': 'هل تريد حذف سند الشراء المعد؟',
  'Enregistrer l’achat ': 'تسجيل الشراء ',
  ' et ajouter ': ' وإضافة ',
  ' ligne(s) au stock ?': ' سطر إلى المخزون؟',
  'Erreur de sauvegarde': 'خطأ في الحفظ',
  'Échec de sauvegarde': 'فشل الحفظ',
  'Échec de suppression': 'فشل الحذف',
  'Impossible de': 'تعذر',
  'Action réservée à l’administrateur': 'الإجراء مخصص للمسؤول',
  'Action non autorisée': 'الإجراء غير مسموح به',
  'Le nom du produit est requis': 'اسم المنتج مطلوب',
  'Le nom du fournisseur est requis': 'اسم المورد مطلوب',
  'Le nom du client est requis': 'اسم العميل مطلوب',
  'Le nom du service est requis': 'اسم الخدمة مطلوب',
  'Stock insuffisant': 'المخزون غير كافٍ',
  'Le stock a changé.': 'تغير المخزون.',
  'Vérifiez le panier puis réessayez.': 'تحقق من السلة ثم أعد المحاولة.',
  'Vérifiez les lignes puis réessayez.': 'تحقق من الأسطر ثم أعد المحاولة.',
  'Produit introuvable': 'المنتج غير موجود',
  'Vente introuvable': 'البيع غير موجود',
  'Client introuvable': 'العميل غير موجود',
  'Fournisseur introuvable': 'المورد غير موجود',
  'produit(s) ajouté(s)': 'منتج/منتجات تمت إضافتها',
  'équipement(s) enregistré(s)': 'معدات تمت إضافتها',
  'dépense(s) enregistrée(s)': 'مصروف/مصروفات تم تسجيلها',
  'Vente encaissée': 'تم تحصيل البيع',
  'Vente en lot enregistrée': 'تم تسجيل البيع بالجملة',
  'Vente modifiée': 'تم تعديل البيع',
  'Vente supprimée': 'تم حذف البيع',
  'stock restitué': 'تمت استعادة المخزون',
  'stock recalculé': 'تمت إعادة حساب المخزون',
  'Sélectionnez au moins': 'حدد على الأقل',
  'Ajoutez au moins': 'أضف على الأقل',
  'Un client doit être sélectionné': 'يجب اختيار عميل',
  'Cette action est irréversible': 'لا يمكن التراجع عن هذا الإجراء',
  'Supprimer': 'حذف',
  'Modifier': 'تعديل',
  'Enregistrer': 'حفظ',
  'Ajouter': 'إضافة',
  'Fermer': 'إغلاق',
  'Annuler': 'إلغاء',
  'Oui': 'نعم',
  'Non': 'لا',
  'Ventes clients': 'مبيعات العملاء',
  'Réapprovisionnements': 'إعادة التزويد',
  'Factures': 'الفواتير',
  'Ventes du': 'مبيعات من',
  'au': 'إلى',
  'Période utilisée à la génération': 'الفترة المستخدمة في الإنشاء',
  'Générer un bon depuis les ventes': 'إنشاء سند من المبيعات',
  'Imprimer le bon': 'طباعة السند',
  'Télécharger en PDF': 'تنزيل بصيغة PDF',
  'Envoyer par WhatsApp': 'إرسال عبر واتساب',
  'Envoyer par e-mail': 'إرسال عبر البريد الإلكتروني',
  'Supprimer le bon': 'حذف السند',
  'Saisir en lot': 'إدخال بالجملة',
  'Exclusions': 'الاستثناءات',
  'Choisissez les sections, catégories et fournisseurs inclus dans le rapport.': 'اختر الأقسام والفئات والموردين المضمنين في التقرير.',
  'Catégories personnalisées': 'الفئات المخصصة',
  'Dépenses': 'المصروفات',
  'Capital de départ': 'رأس المال الابتدائي',
  'Configurez le capital initial de la boutique.': 'اضبط رأس المال الأولي للمتجر.',
  'Capital initial (DH)': 'رأس المال الأولي (درهم)',
  'Enregistrer le capital': 'حفظ رأس المال',
  'Marge des recharges': 'هامش عمليات الشحن',
  'Cette marge est appliquée automatiquement à chaque vente de recharge et enregistrée séparément dans la vente.': 'يتم تطبيق هذا الهامش تلقائياً على كل عملية بيع شحن وتسجيله بشكل منفصل في البيع.',
  'Taux de marge (%)': 'نسبة الهامش (%)',
  'Enregistrer le taux': 'حفظ النسبة',
  'Équipements': 'المعدات',
  'Système': 'النظام',
  'Comptes rechargeables': 'الحسابات القابلة لإعادة الشحن',
  'Opérateur / fournisseur': 'المشغل / المورد',
  'Solde': 'الرصيد',
  'Créer le compte': 'إنشاء الحساب',
  'Recharger un compte': 'إعادة شحن حساب',
  'Montant déposé / rechargé (DH)': 'المبلغ المودع / المشحون (درهم)',
  'Enregistrer la recharge': 'حفظ عملية الشحن',
  'Vendre une recharge': 'بيع شحن',
  'Montant vendu (DH)': 'المبلغ المباع (درهم)',
  'Marge calculée :': 'الهامش المحسوب:',
  'Nouvelle dépense': 'مصروف جديد',
  'Nouvel équipement': 'معدات جديدة',
  'Description': 'الوصف',
  'Bénéficiaire': 'المستفيد',
  'Paiement': 'الدفع',
  'Espèces': 'نقداً',
  'Carte': 'بطاقة',
  'Mobile money': 'الدفع عبر الهاتف',
  'Vente': 'بيع',
  'Articles': 'العناصر',
  'Vendeur': 'البائع',
  'Statut': 'الحالة',
  'Payé': 'مدفوع',
  'Partiel': 'جزئي',
  'Impayé': 'غير مدفوع',
  'Tous les statuts': 'كل الحالات',
  'Bon N°': 'رقم السند',
  'Bon d’achat': 'سند الشراء',
  'Nouveau bon': 'سند جديد',
  'Nouvelle vente': 'بيع جديد',
  'Modifier la vente': 'تعديل البيع',
  'Client de passage': 'عميل عابر',
  'Client introuvable pour cette facture': 'العميل غير موجود لهذه الفاتورة',
  'Facture': 'فاتورة',
  'Numéro de facture': 'رقم الفاتورة',
  'Émettre la facture': 'إصدار الفاتورة',
  'Aperçu': 'معاينة',
  'Imprimer': 'طباعة',
  'Télécharger': 'تنزيل',
  'Partager': 'مشاركة',
  'Historique': 'السجل',
  'Opérations': 'العمليات',
  'Profil': 'الملف الشخصي',
  'Identité': 'الهوية',
  'Vendeurs': 'البائعون',
  'Sauvegarde': 'النسخ الاحتياطي',
  'Apparence': 'المظهر',
  'Thème': 'السمة',
  'Mode de paiement': 'طريقة الدفع',
  'Code P': 'رمز P',
  'Code-barres': 'الرمز الشريطي',
  'Scanner le code produit': 'مسح رمز المنتج',
  'Scanner le Code P': 'مسح رمز P',
  'Ajouter ou supprimer une catégorie': 'إضافة أو حذف فئة',
  'Fermer la gestion des catégories': 'إغلاق إدارة الفئات',
  'Une erreur est survenue': 'حدث خطأ',
  'Le seuil de stock doit être un entier positif ou nul': 'يجب أن يكون حد المخزون عدداً صحيحاً موجباً أو صفراً',
  'Cette catégorie existe déjà': 'هذه الفئة موجودة بالفعل',
  'Ce service est lié à une vente et ne peut pas être supprimé': 'هذه الخدمة مرتبطة بعملية بيع ولا يمكن حذفها',
  'Ce compte est lié à une vente et ne peut pas être supprimé': 'هذا الحساب مرتبط بعملية بيع ولا يمكن حذفه',
  'Ce fournisseur est lié à des achats. Conservez-le pour préserver l’historique.': 'هذا المورد مرتبط بمشتريات. احتفظ به للحفاظ على السجل.',
  'Ce produit est lié à l’historique. Archivez-le ou conservez-le au lieu de le supprimer.': 'هذا المنتج مرتبط بالسجل. قم بأرشفته أو احتفظ به بدلاً من حذفه.',
  'Nom, prix et coût valides requis': 'الاسم والسعر والتكلفة مطلوبة بشكل صحيح',
  'Prix de vente invalide': 'سعر البيع غير صالح',
  'Taux de marge enregistré': 'تم حفظ نسبة الهامش',
  'Aucun résultat pour ces filtres.': 'لا توجد نتائج لهذه المرشحات.',
  'Enregistrez vos réceptions de marchandise pour suivre vos coûts.': 'سجل استلامات البضائع لمتابعة تكاليفك.',
  'Ajoutez vos fournisseurs pour les lier à vos achats.': 'أضف مورديك لربطهم بمشترياتك.',
  'Bibliothèque Excel indisponible — vérifiez votre connexion.': 'مكتبة Excel غير متاحة — تحقق من اتصالك.',
  'Classeur Excel importé avec succès': 'تم استيراد ملف Excel بنجاح',
  'Impossible de lire ce classeur Excel.': 'تعذر قراءة ملف Excel هذا.',
  'Réinitialisation': 'إعادة ضبط',
  'Achats et stock supprimés': 'تم حذف المشتريات والمخزون',
  'Ventes, paiements et factures supprimés': 'تم حذف المبيعات والمدفوعات والفواتير',
  'Ventes et paiements supprimés': 'تم حذف المبيعات والمدفوعات'
  ,'Privilèges par module': 'الصلاحيات حسب الوحدة'
  ,'Visualiser': 'عرض'
  ,'Créer': 'إنشاء'
  ,'Voir les prix d’achat et marges (Produits)': 'عرض أسعار الشراء والهوامش (المنتجات)'
  ,'Utilisateur': 'المستخدم'
  ,'Action': 'الإجراء'
  ,'Détails': 'التفاصيل'
  ,'Télécharger la sauvegarde': 'تنزيل النسخة الاحتياطية'
  ,'Choisir un fichier de sauvegarde': 'اختيار ملف النسخة الاحتياطية'
  ,'Télécharger le classeur Excel': 'تنزيل ملف Excel'
  ,'Choisir un classeur Excel': 'اختيار ملف Excel'
  ,'Vider le stockage du site': 'مسح تخزين الموقع'
  ,'Scanner un code-barres': 'مسح رمز شريطي'
  ,'Niveau de zoom': 'مستوى التكبير'
  ,'Quantité à ajouter par scan': 'الكمية المضافة لكل عملية مسح'
  ,'Ou saisir le code manuellement': 'أو أدخل الرمز يدوياً'
  ,'Code-barres / Code P': 'الرمز الشريطي / رمز P'
  ,'Valider': 'اعتماد'
  ,'Produits scannés dans cette session': 'المنتجات التي تم مسحها في هذه الجلسة'
  ,'Le nom et le sous-nom sont obligatoires.': 'الاسم والعنوان الفرعي مطلوبان.'
  ,'Le téléphone de l’entreprise doit contenir 10 chiffres.': 'يجب أن يحتوي هاتف الشركة على 10 أرقام.'
  ,"L’e-mail de l’entreprise est invalide.": 'البريد الإلكتروني للشركة غير صالح.'
  ,'Identité enregistrée': 'تم حفظ الهوية'
  ,'Identité de l’application modifiée': 'تم تعديل هوية التطبيق'
  ,'Télécharger la sauvegarde': 'تنزيل النسخة الاحتياطية'
  ,'Restaurer une sauvegarde': 'استعادة نسخة احتياطية'
  ,'Importer': 'استيراد'
  ,'Exporter': 'تصدير'
  ,'Déconnexion': 'تسجيل الخروج'
  ,'Gestion des équipements': 'إدارة المعدات'
  ,'Gestion des dépenses courantes': 'إدارة المصروفات الجارية'
  ,'Rapports': 'التقارير'
  ,'Paramètres': 'الإعدادات'
  ,'Tableau de bord': 'لوحة التحكم'
  ,'Produits': 'المنتجات'
  ,'Achats': 'المشتريات'
  ,'Ventes': 'المبيعات'
  ,'Stock': 'المخزون'
  ,'Clients': 'العملاء'
  ,'Fournisseurs': 'الموردون'
  ,'Services': 'الخدمات'
  ,'Finances': 'المالية'
  ,'Historique des opérations': 'سجل العمليات'
  ,'Réglages': 'الإعدادات'
  ,'Réglage disponible après activation': 'الإعداد متاح بعد التفعيل'
  ,'Réglage du zoom de la caméra': 'ضبط تكبير الكاميرا'
  ,'Aucune catégorie': 'لا توجد فئات'
  ,'Aucun fournisseur': 'لا يوجد موردون'
  ,'Aucun client': 'لا يوجد عملاء'
  ,'Aucun paiement': 'لا توجد دفعات'
  ,'Aucune facture': 'لا توجد فواتير'
  ,'Aucun service': 'لا توجد خدمات'
  ,'Aucune dépense': 'لا توجد مصروفات'
  ,'Aucun équipement': 'لا توجد معدات'
  ,'Aucune opération': 'لا توجد عمليات'
  ,'Aucun résultat': 'لا توجد نتائج'
};
Object.assign(RUNTIME_PHRASES_AR, {
  'Caisse': 'الصندوق',
  'Recharges': 'التعبئة',
  'Achat': 'شراء',
  'Achats': 'المشتريات',
  'Nouvel achat': 'شراء جديد',
  'Modifier l’achat': 'تعديل الشراء',
  "Modifier l'achat": 'تعديل الشراء',
  'Produit': 'المنتج',
  'Panier vide': 'السلة فارغة',
  'Cliquez sur un produit pour l’ajouter.': 'انقر على منتج لإضافته إلى السلة.',
  "Cliquez sur un produit pour l'ajouter.": 'انقر على منتج لإضافته إلى السلة.',
  'Nouveau compte': 'حساب جديد',
  'Nouveau compte rechargeable': 'حساب تعبئة جديد',
  'Compte rechargeable': 'حساب تعبئة',
  'Nouveau compte vendeur': 'حساب بائع جديد',
  'Ventes': 'المبيعات',
  'Réapprovisionnement': 'إعادة التزويد',
  '0 bons préparés': '0 سندات مُعدة',
  'achats enregistrés': 'مشتريات مسجلة',
  'Aucune facture générée': 'لا توجد فواتير مولدة',
  'Les factures générées depuis une fiche client apparaîtront ici.': 'ستظهر هنا الفواتير المولدة من بطاقة العميل.',
  'Choisissez un client et une période, puis cliquez sur "Afficher les bons".': 'اختر عميلاً وفترة، ثم انقر على "عرض السندات".',
  'Afficher les bons': 'عرض السندات',
  'Imprimer la facture': 'طباعة الفاتورة',
  'Nouvelle dépense': 'مصروف جديد',
  'Enregistrer la dépense': 'حفظ المصروف',
  'Modifier mes identifiants': 'تعديل بيانات الدخول',
  'Nom affiché': 'الاسم المعروض',
  'Nouveau mot de passe (laisser vide pour ne pas changer)': 'كلمة المرور الجديدة (اتركها فارغة لعدم تغييرها)',
  'Personnalisez le nom, le sous-nom et l’icône affichés dans PhoneStock et lors de l’installation comme application.': 'خصص الاسم والعنوان الفرعي والأيقونة المعروضة في PhoneStock وعند تثبيته كتطبيق.',
  "Personnalisez le nom, le sous-nom et l’icône affichés dans PhoneStock et lors de l’installation comme application.": 'خصص الاسم والعنوان الفرعي والأيقونة المعروضة في PhoneStock وعند تثبيته كتطبيق.',
  'Logo de l’entreprise / icône de l’application': 'شعار الشركة / أيقونة التطبيق',
  'Aucun fichier n’a été sélectionné': 'لم يتم اختيار أي ملف',
  "Aucun fichier n'a été sélectionné": 'لم يتم اختيار أي ملف',
  'Choisir un fichier': 'اختيار ملف',
  'Rétablir par défaut': 'استعادة الإعداد الافتراضي',
  'produits : voir · clients : voir · paiements : voir, créer, modifier': 'المنتجات: عرض · العملاء: عرض · المدفوعات: عرض وإنشاء وتعديل',
  'opérations enregistrées': 'العمليات المسجلة',
  'Suppression vente': 'حذف بيع',
  'Connexion': 'تسجيل الدخول',
  'Restauration': 'الاستعادة',
  'Export Excel': 'تصدير Excel',
  'Achat modifié': 'تم تعديل الشراء',
  'Modification vente': 'تعديل البيع',
  'Suppression catégorie': 'حذف الفئة',
  'Télécharge un fichier contenant les produits, les achats et lots FIFO, les quantités restantes, les clients, les ventes, paiements et comptes.': 'نزّل ملفاً يحتوي على المنتجات والمشتريات ودفعات FIFO والكميات المتبقية والعملاء والمبيعات والمدفوعات والحسابات.',
  '⚠️ Remplace toutes les données actuelles par celles du fichier sélectionné, y compris les achats et les quantités de stock.': '⚠️ سيستبدل جميع البيانات الحالية ببيانات الملف المحدد، بما في ذلك المشتريات وكميات المخزون.',
  'Choisir le fichier de sauvegarde': 'اختيار ملف النسخة الاحتياطية',
  'Exporter en classeur Excel (.xlsx)': 'تصدير إلى مصنف Excel (.xlsx)',
  'Télécharge un classeur avec feuilles liées : Tableau de bord, Catégories, Stock & prix, Produits, Clients et Ventes.': 'نزّل مصنفاً بأوراق مترابطة: لوحة التحكم والفئات والمخزون والأسعار والمنتجات والعملاء والمبيعات.',
  'Télécharger le fichier Excel': 'تنزيل ملف Excel',
  'Importer un classeur Excel (.xlsx)': 'استيراد مصنف Excel (.xlsx)',
  '⚠️ Remplace les produits, le stock/prix et les clients actuels par le contenu des feuilles « Produits », « Stock & prix » et « Clients » du fichier choisi. Les photos ne sont pas conservées lors d’un import Excel.': '⚠️ سيستبدل المنتجات والمخزون والأسعار والعملاء الحاليين بمحتوى أوراق «المنتجات» و«المخزون والأسعار» و«العملاء» من الملف المحدد. لا يتم الاحتفاظ بالصور عند الاستيراد من Excel.',
  'Choisir le fichier Excel': 'اختيار ملف Excel',
  'Zone dangereuse': 'منطقة خطرة',
  'Vide le stockage de ce navigateur pour repartir sur une base vide. Vous choisirez précisément quoi supprimer dans la fenêtre de confirmation.': 'يمسح تخزين هذا المتصفح للبدء من قاعدة فارغة. ستختار بدقة ما تريد حذفه في نافذة التأكيد.',
  'Comptez les produits réellement présents puis validez les écarts. Les corrections sont journalisées et ne réécrivent pas les ventes passées.': 'احسب المنتجات الموجودة فعلياً ثم اعتمد الفروقات. يتم تسجيل التصحيحات ولا تعيد كتابة المبيعات السابقة.',
  'Valider l’inventaire': 'اعتماد الجرد',
  "Valider l'inventaire": 'اعتماد الجرد',
  'Stock système': 'المخزون المسجل بالنظام',
  'Rapports des opérations': 'تقارير العمليات',
  'Les ventes, achats et encaissements de la période choisie. Le net correspond aux ventes moins les achats.': 'المبيعات والمشتريات والتحصيلات خلال الفترة المختارة. الصافي يساوي المبيعات ناقص المشتريات.',
  'Mensuel': 'شهري',
  'Période personnalisée': 'فترة مخصصة',
  'Télécharger le rapport Excel': 'تنزيل تقرير Excel',
  'Télécharger le rapport PDF': 'تنزيل تقرير PDF',
  'opérations': 'عمليات',
  'unités': 'وحدات',
  'Net ventes − achats': 'صافي المبيعات − المشتريات',
  'Encaissements clients': 'تحصيلات العملاء',
  'Affichés séparément, hors calcul du net': 'تُعرض بشكل منفصل ولا تدخل في حساب الصافي',
  'Résultat de trésorerie commerciale avant autres charges': 'نتيجة الخزينة التجارية قبل المصروفات الأخرى',
  'Les marges sont calculées après remise. Les achats de stock et les équipements sont présentés séparément du bénéfice estimé.': 'تُحسب الهوامش بعد الخصم. وتُعرض مشتريات المخزون والمعدات بشكل منفصل عن الربح التقديري.',
  'Activité et revenus': 'النشاط والإيرادات',
  'Produits vendus': 'المنتجات المباعة',
  'Ventes de produits': 'مبيعات المنتجات',
  'Prix achat des produits vendus': 'سعر شراء المنتجات المباعة',
  'Remises accordées': 'الخصومات الممنوحة',
  'Marge produits': 'هامش المنتجات',
  'Recharges vendues': 'التعبئة المباعة',
  'Marge recharges': 'هامش التعبئة',
  'Charges et investissements': 'المصروفات والاستثمارات',
  'Bénéfice estimé': 'الربح التقديري',
  'Achats stock': 'مشتريات المخزون',
  'Équipements acquis': 'المعدات المقتناة',
  'Solde des recharges immobilisé': 'رصيد التعبئة المجمد',
  'Capital configuré': 'رأس المال المضبوط',
  'Reste du capital après calcul': 'المتبقي من رأس المال بعد الحساب',
  'Stock restant — prix d’achat': 'المخزون المتبقي — سعر الشراء',
  'Le reste du capital = capital configuré − (stock restant au prix d’achat + prix d’achat des produits vendus + équipements acquis + solde des recharges immobilisé + recharges vendues).': 'المتبقي من رأس المال = رأس المال المضبوط − (المخزون المتبقي بسعر الشراء + سعر شراء المنتجات المباعة + المعدات المقتناة + رصيد التعبئة المجمد + التعبئة المباعة).',
  'Configurez le capital initial de la boutique. Exemple : 60 000 DH. Il est utilisé dans le rapport financier pour calculer le reste du capital.': 'اضبط رأس المال الأولي للمتجر. مثال: 60,000 درهم. يُستخدم في التقرير المالي لحساب المتبقي من رأس المال.',
  'clients': 'عملاء',
  'Dépenses courantes': 'المصروفات الجارية',
  'Administration': 'الإدارة',
  'Téléphones et accessoires': 'الهواتف والإكسسوارات',
  'Téléphones & accessoires': 'الهواتف والإكسسوارات',
  'Données de la boutique': 'بيانات المتجر',
  'Personnalisation': 'التخصيص',
  'Logo': 'الشعار',
  'Choisir une image': 'اختيار صورة',
  'Supprimer l’image': 'حذف الصورة',
  'Préférences': 'التفضيلات',
  'Langue': 'اللغة',
  'Changer le mot de passe': 'تغيير كلمة المرور',
  'Ancien mot de passe': 'كلمة المرور القديمة',
  'Nouveau mot de passe': 'كلمة المرور الجديدة',
  'Répéter le mot de passe': 'تكرار كلمة المرور',
  'Mettre à jour le profil': 'تحديث الملف الشخصي',
  'Gestion des utilisateurs': 'إدارة المستخدمين',
  'Ajouter un vendeur': 'إضافة بائع',
  'Modifier le vendeur': 'تعديل البائع',
  'Supprimer le vendeur': 'حذف البائع',
  'Créer un utilisateur': 'إنشاء مستخدم',
  'Modifier un utilisateur': 'تعديل مستخدم',
  'Sauvegarder les données': 'حفظ البيانات',
  'Restaurer les données': 'استعادة البيانات',
  'Télécharger le fichier de sauvegarde': 'تنزيل ملف النسخة الاحتياطية',
  'Importer les données': 'استيراد البيانات',
  'Exporter les données': 'تصدير البيانات',
  'Quantité système': 'كمية النظام',
  'Quantité comptée': 'الكمية المعدودة',
  'Écart': 'الفرق',
  'Appliquer les corrections': 'تطبيق التصحيحات',
  'Accès réservé': 'الوصول محجوز',
  'Accès réservé à l’administrateur': 'الوصول مخصص للمسؤول',
  'Accès réservé à l’administrateur.': 'الوصول مخصص للمسؤول.',
  'Les achats et prix d’achat sont visibles uniquement par un administrateur.': 'المشتريات وأسعار الشراء مرئية للمسؤول فقط.',
  'Aucun enregistrement': 'لا توجد سجلات',
  'Les enregistrements apparaîtront ici.': 'ستظهر السجلات هنا.',
  'Réinitialiser': 'إعادة ضبط',
  'Du': 'من',
  'Au': 'إلى',
  'Actions': 'الإجراءات',
  'Désignation': 'التسمية',
  'Nombre': 'العدد',
  'Coût': 'التكلفة',
  'Marge': 'الهامش',
  'Prix de vente': 'سعر البيع',
  'Prix d’achat': 'سعر الشراء',
  "Prix d'achat": 'سعر الشراء',
  'Quantité': 'الكمية',
  'Unités': 'الوحدات',
  'Enregistrement': 'السجل',
  'enregistrement': 'سجل',
  'enregistrements': 'سجلات',
  'Équipements & dépenses': 'المعدات والمصروفات',
  'Ces sorties de trésorerie ne sont pas des achats de stock et n’apparaissent pas dans la Caisse.': 'هذه المصروفات النقدية ليست مشتريات مخزون ولا تظهر في الصندوق.',
  'Seuil d’alerte stock bas': 'حد تنبيه انخفاض المخزون',
  "Seuil d'alerte stock bas": 'حد تنبيه انخفاض المخزون',
  'Produit archivé (non disponible à la caisse)': 'منتج مؤرشف (غير متاح في الصندوق)',
  'Stock initial (optionnel)': 'المخزون الأولي (اختياري)',
  'Prix d’achat (DH)': 'سعر الشراء (درهم)',
  "Prix d'achat (DH)": 'سعر الشراء (درهم)',
  'Fournisseur (optionnel)': 'المورد (اختياري)',
  'Date d’achat': 'تاريخ الشراء',
  "Date d'achat": 'تاريخ الشراء',
  'Heure d’achat': 'وقت الشراء',
  "Heure d'achat": 'وقت الشراء',
  'Enregistrer le stock initial comme équipement (ne pas l’ajouter au stock)': 'حفظ المخزون الأولي كمعدات (عدم إضافته إلى المخزون)',
  "Enregistrer le stock initial comme équipement (ne pas l’ajouter au stock)": 'حفظ المخزون الأولي كمعدات (عدم إضافته إلى المخزون)',
  'Enregistrer les produits': 'حفظ المنتجات',
  "Enregistrer l'achat": 'حفظ الشراء',
  'Catégories': 'الفئات',
  'Produits': 'المنتجات',
  'Panier': 'السلة',
  'Paiement': 'الدفع',
  'Masquer le paiement': 'إخفاء الدفع',
  'Sous-total': 'المجموع الفرعي',
  'Réduction (DH)': 'التخفيض (درهم)',
  'Total': 'الإجمالي',
  'Code client': 'رمز العميل',
  'Client de passage': 'عميل عابر',
  'Montant payé': 'المبلغ المدفوع',
  'Encaisser la vente': 'تحصيل البيع',
  'Boutique téléphones & accessoires': 'متجر الهواتف والإكسسوارات',
  'Merci de votre confiance !': 'شكراً لثقتكم!',
  'Toutes les catégories': 'كل الفئات',
  'Catalogue des services': 'دليل الخدمات',
  'Les services sont vendus sans créer de produit et sans modifier le stock.': 'تُباع الخدمات دون إنشاء منتج ودون تعديل المخزون.',
  'Ajoutez vos prestations de réparation, configuration ou impression.': 'أضف خدمات الإصلاح أو الإعداد أو الطباعة.',
  'Récapitulatif des services vendus': 'ملخص الخدمات المباعة',
  'Aucun service vendu': 'لا توجد خدمات مباعة',
  'Les ventes de services apparaîtront ici.': 'ستظهر مبيعات الخدمات هنا.',
  'Solde disponible': 'الرصيد المتاح',
  'Ajoutez des montants disponibles, puis vendez tout ou partie du solde.': 'أضف مبالغ متاحة، ثم بع كل الرصيد أو جزءاً منه.',
  'Marge actuelle': 'الهامش الحالي',
  'Aucun compte rechargeable': 'لا يوجد حساب قابل لإعادة الشحن',
  'Créez un compte téléphonique, opérateur ou portefeuille électronique.': 'أنشئ حساباً هاتفياً أو حساب مشغل أو محفظة إلكترونية.',
  'Récapitulatif des recharges vendues': 'ملخص عمليات الشحن المباعة',
  'Aucune recharge vendue': 'لا توجد عمليات شحن مباعة',
  'Les ventes de recharge apparaîtront ici.': 'ستظهر مبيعات الشحن هنا.',
  'Nom du compte': 'اسم الحساب',
  'Type': 'النوع',
  'Note': 'ملاحظة',
  'Nom du service': 'اسم الخدمة',
  'Coût éventuel (DH)': 'التكلفة المحتملة (درهم)',
  'Facture par période': 'الفاتورة حسب الفترة',
  'Ventes': 'المبيعات',
  'Matériel et équipements utilisés par la boutique.': 'المعدات والتجهيزات المستخدمة في المتجر.',
  'Équipements enregistrés': 'المعدات المسجلة',
  'Aucun équipement': 'لا توجد معدات',
  'Aucun équipement ne correspond aux filtres.': 'لا توجد معدات تطابق المرشحات.',
  'Nouvel équipement': 'معدات جديدة',
  'Ordinateur, mobilier, imprimante ou matériel utilisé par la boutique.': 'حاسوب أو أثاث أو طابعة أو معدات مستخدمة في المتجر.',
  'Référence / note': 'المرجع / الملاحظة',
  'Enregistrer l’équipement': 'حفظ المعدات',
  "Enregistrer l'équipement": 'حفظ المعدات',
  'Loyer, Internet, électricité, salaires, transport et autres charges.': 'الإيجار والإنترنت والكهرباء والرواتب والنقل والمصاريف الأخرى.',
  'Recherche et filtres': 'البحث والمرشحات',
  'Filtrez par texte et par période': 'صفِّ حسب النص والفترة',
  'Dépenses courantes enregistrées': 'المصروفات الجارية المسجلة',
  'Aucune dépense': 'لا توجد مصروفات',
  'Aucune dépense ne correspond aux filtres.': 'لا توجد مصروفات تطابق المرشحات.',
  'Nouvelle dépense': 'مصروف جديد',
  'Dépenses courantes': 'المصروفات الجارية',
  'Enregistrer les dépenses': 'حفظ المصروفات',
  'Administrateur': 'المسؤول',
  'Mon profil': 'ملفي الشخصي',
  'Identité de l’application': 'هوية التطبيق',
  'Comptes vendeurs': 'حسابات البائعين',
  "Historique d'opérations": 'سجل العمليات',
  'Inventaire physique': 'الجرد الفعلي',
  'Configuration': 'التهيئة',
  'Capital': 'رأس المال',
  'Fournisseurs': 'الموردون',
  'Clients': 'العملاء',
  'Identité': 'الهوية',
  'Nom de l’application': 'اسم التطبيق',
  'Sous-nom': 'العنوان الفرعي',
  'Nom de l’entreprise': 'اسم الشركة',
  'Adresse': 'العنوان',
  'Téléphone': 'الهاتف',
  'E-mail': 'البريد الإلكتروني',
  'Identifiant entreprise': 'معرّف الشركة',
  'Enregistrer l’identité': 'حفظ الهوية',
  'Nom': 'الاسم',
  'Identifiant': 'المعرّف',
  'Mot de passe': 'كلمة المرور',
  'Confirmer le mot de passe': 'تأكيد كلمة المرور',
  'Privilèges': 'الصلاحيات',
  'Voir les coûts': 'عرض التكاليف',
  'Autorisé': 'مسموح',
  'Non autorisé': 'غير مسموح',
  'Exporter en Excel (.xlsx)': 'تصدير إلى Excel (.xlsx)',
  'Date opération': 'تاريخ العملية',
  'Sauvegarde exportée': 'تم تصدير النسخة الاحتياطية',
  'Restaurer': 'استعادة',
  'Vider le stockage du site': 'مسح تخزين الموقع',
  'Capital de départ': 'رأس المال الابتدائي',
  'Enregistrer le capital': 'حفظ رأس المال',
  'Enregistrer le taux': 'حفظ النسبة',
  'Résultats': 'النتائج',
  'résultat': 'نتيجة',
  'résultats': 'نتائج',
  'service': 'خدمة',
  'services': 'خدمات',
  'vente': 'بيع',
  'ventes': 'مبيعات',
  'équipement': 'معدات',
  'équipements': 'معدات',
  'dépense': 'مصروف',
  'dépenses': 'مصروفات',
  'enregistré': 'مسجل',
  'enregistrée': 'مسجلة',
  'enregistrés': 'مسجلة',
  'enregistrées': 'مسجلة',
  'prestations': 'خدمات',
  'vendu': 'مباع',
  'vendue': 'مباعة',
  'vendus': 'مباعة',
  'vendues': 'مباعة',
  'Total :': 'الإجمالي:',
  'Marge :': 'الهامش:',
  '0 résultats': '0 نتيجة',
  '0 prestations': '0 خدمة',
  '0 ventes': '0 مبيعات',
  '0 services': '0 خدمات',
  '0 équipements': '0 معدات',
  '0 dépenses': '0 مصروفات',
  'Marge unitaire': 'الهامش لكل وحدة',
  'Marge après remise :': 'الهامش بعد الخصم:',
  'Remise :': 'الخصم:',
  'Saisir des équipements en lot': 'إدخال المعدات بالجملة',
  'Ajoutez plusieurs équipements puis enregistrez-les en une seule fois. Les lignes sans désignation ou sans montant seront ignorées.': 'أضف عدة معدات ثم احفظها دفعة واحدة. سيتم تجاهل الأسطر التي لا تحتوي على تسمية أو مبلغ.',
  'Enregistrer les équipements': 'حفظ المعدات',
  'Saisir des dépenses en lot': 'إدخال المصروفات بالجملة',
  'Ajoutez plusieurs dépenses courantes puis enregistrez-les en une seule fois. Les lignes sans description ou sans montant seront ignorées.': 'أضف عدة مصروفات جارية ثم احفظها دفعة واحدة. سيتم تجاهل الأسطر التي لا تحتوي على وصف أو مبلغ.',
  'Chiffre d’affaires': 'رقم المعاملات',
  "Chiffre d'affaires": 'رقم المعاملات',
  'Chiffre d’affaires du': 'رقم معاملات',
  "Chiffre d'affaires du": 'رقم معاملات',
  'Valeur du stock': 'قيمة المخزون',
  'unités en stock': 'وحدات في المخزون',
  'Alertes de stock bas': 'تنبيهات انخفاض المخزون',
  'Produits à réapprovisionner': 'منتجات تحتاج إلى إعادة التزويد',
  'Importation': 'الاستيراد',
  'Synthèse financière de la période': 'الملخص المالي للفترة',
  'Prix d’achat des produits vendus': 'سعر شراء المنتجات المباعة',
  "Prix d'achat des produits vendus": 'سعر شراء المنتجات المباعة',
  'Achats de stock': 'مشتريات المخزون',
  'Ventes détaillées': 'المبيعات التفصيلية',
  'Remise': 'الخصم',
  'Net': 'الصافي',
  'Lignes valides': 'الأسطر الصحيحة',
  'Total équipements': 'إجمالي المعدات',
  'Total dépenses': 'إجمالي المصروفات',
  'Ajouter une ligne': 'إضافة سطر',
  'Date': 'التاريخ',
  'Montant': 'المبلغ',
  'Montant (DH)': 'المبلغ (درهم)',
  'Fournisseur': 'المورد',
  'Paiement': 'الدفع',
  'Mode de paiement': 'طريقة الدفع',
  'Description': 'الوصف',
  'Bénéficiaire': 'المستفيد',
  'Désignation': 'التسمية',
  'Optionnel': 'اختياري',
  'Rechercher un équipement...': 'البحث عن معدات...',
  'Rechercher une dépense...': 'البحث عن مصروف...',
  'Ex. Imprimante': 'مثال: طابعة',
  'Ex. Imprimante thermique': 'مثال: طابعة حرارية',
  'Ex. Abonnement Internet septembre': 'مثال: اشتراك الإنترنت لشهر سبتمبر',
  'Ex. Électricité': 'مثال: الكهرباء',
  'Ex. Smartphones reconditionnés': 'مثال: هواتف مجددة',
  'Ex. Remplacement écran iPhone 13': 'مثال: استبدال شاشة iPhone 13',
  'Détails de la prestation': 'تفاصيل الخدمة',
  'Laisser vide pour paiement complet': 'اتركه فارغاً للدفع الكامل',
  'Choisir un produit': 'اختيار منتج',
  'Tous les fournisseurs': 'كل الموردين',
  'Tous les vendeurs': 'كل البائعين',
  'Tous les produits': 'كل المنتجات',
  'Tous les clients': 'كل العملاء',
  'Aucun bon spécifique': 'لا يوجد سند محدد',
  'Tous les statuts': 'كل الحالات',
  'Journalier': 'يومي',
  'Hebdomadaire': 'أسبوعي',
  'Annuel': 'سنوي',
  'Carte bancaire': 'بطاقة بنكية',
  'Virement': 'تحويل بنكي',
  'Chèque': 'شيك',
  'Autre': 'أخرى',
  'Non spécifié': 'غير محدد',
  'Saisir le Code P ou code-barres': 'أدخل رمز P أو الرمز الشريطي',
  'Saisir ou scanner le Code P': 'أدخل رمز P أو امسحه',
  'Auto si vide': 'تلقائي إذا كان فارغاً',
  'Nouvelle catégorie': 'فئة جديدة',
  'Nom de la catégorie': 'اسم الفئة',
  'Nom du fournisseur': 'اسم المورد',
  'Nom du client': 'اسم العميل',
  'Notes optionnelles': 'ملاحظات اختيارية',
  'Rechercher par nom, téléphone, email ou identifiant…': 'البحث بالاسم أو الهاتف أو البريد الإلكتروني أو المعرّف...',
  'Rechercher une vente, client ou produit…': 'البحث عن بيع أو عميل أو منتج...',
  'Rechercher un compte ou opérateur…': 'البحث عن حساب أو مشغل...',
  'Ex. Solde Orange Money': 'مثال: رصيد Orange Money',
  'Ex. Orange, Inwi, PayPal': 'مثال: Orange أو Inwi أو PayPal',
  'Numéro de transaction': 'رقم المعاملة',
  'Unités en stock': 'وحدات في المخزون',
  'Récapitulatif des recharges vendues': 'ملخص عمليات التعبئة المباعة',
  'Aucune recharge vendue': 'لا توجد عملية تعبئة مباعة',
  'Les ventes de recharge apparaîtront ici.': 'ستظهر مبيعات التعبئة هنا.',
  'Recharge': 'تعبئة',
  'Rechargé': 'تمت التعبئة',
  'Bon généré à partir des quantités vendues': 'سند مولد بناءً على الكميات المباعة',
  'Nombre de ventes': 'عدد المبيعات',
  'Choisir un fichier': 'اختيار ملف',
  'Aperçu de l’icône': 'معاينة الأيقونة',
  "Aperçu de l'icône": 'معاينة الأيقونة',
  'Voir les prix d’achat et marges (Produits)': 'عرض أسعار الشراء والهوامش (المنتجات)',
  "Voir les prix d'achat et marges (Produits)": 'عرض أسعار الشراء والهوامش (المنتجات)',
  'paiements': 'المدفوعات',
  'Produits : voir · Clients : voir · Paiements : voir, créer, modifier': 'المنتجات: عرض · العملاء: عرض · المدفوعات: عرض وإنشاء وتعديل',
  'produits : voir · clients : voir · paiements : voir, créer, modifier': 'المنتجات: عرض · العملاء: عرض · المدفوعات: عرض وإنشاء وتعديل',
  'Situation du stock': 'حالة المخزون',
  'État actuel du stock disponible, valorisé au prix d’achat et au prix de vente prévu. Cette vue ne modifie pas la consommation FIFO.': 'الحالة الحالية للمخزون المتاح، مقدّرة بسعر الشراء وسعر البيع المتوقع. لا يغير هذا العرض استهلاك FIFO.',
  'Produits en stock': 'المنتجات في المخزون',
  'Lots': 'الدفعات',
  'Valeur au prix d’achat': 'القيمة بسعر الشراء',
  'Valeur achat': 'قيمة الشراء',
  'Exporter le rapport Excel': 'تصدير تقرير Excel',
  'Période marge :': 'فترة الهامش:',
  'Aujourd’hui': 'اليوم',
  'marges': 'هوامش',
  'Coût d’achat FIFO': 'تكلفة الشراء حسب FIFO',
  'Taux de marge': 'نسبة الهامش',
  'Transactions': 'المعاملات',
  'Évolution par jour': 'التطور حسب اليوم',
  'CA net': 'صافي رقم المعاملات',
  'Performance par produit': 'أداء المنتجات',
  'Taux': 'النسبة',
  'Le rapport PDF inclut les ventes, achats et paiements de la période sélectionnée. Le net commercial est calculé par la formule ventes − achats ; les paiements sont présentés séparément.': 'يتضمن تقرير PDF المبيعات والمشتريات والمدفوعات للفترة المحددة. يُحسب الصافي التجاري وفق المعادلة: المبيعات − المشتريات؛ وتُعرض المدفوعات بشكل منفصل.',
  'Nouvelle dépense courante': 'مصروف جديد',
  'Modifier la dépense courante': 'تعديل المصروف الجاري',
  'Enregistrer la dépense': 'حفظ المصروف',
  'Aucune icône personnalisée': 'لا توجد أيقونة مخصصة',
  'DH': 'درهم',
  'Achats': 'المشتريات',
  'achats': 'المشتريات',
  'TOTAL': 'الإجمالي',
  'Total': 'الإجمالي',
  'Rapports des opérations': 'تقارير العمليات',
  'Les ventes, achats et encaissements de la période choisie. Le net correspond aux ventes moins les achats.': 'المبيعات والمشتريات والتحصيلات خلال الفترة المختارة. الصافي يساوي المبيعات ناقص المشتريات.',
  'Cochez les éléments à inclure dans l’affichage et les exports détaillés. Décochez un élément pour l’exclure.': 'حدد العناصر المراد تضمينها في العرض والتصديرات التفصيلية. أزل تحديد العنصر لاستبعاده.',
  "Cochez les éléments à inclure dans l'affichage et les exports détaillés. Décochez un élément pour l'exclure.": 'حدد العناصر المراد تضمينها في العرض والتصديرات التفصيلية. أزل تحديد العنصر لاستبعاده.',
  'Synthèse financière': 'الملخص المالي',
  'Indicateurs de période': 'مؤشرات الفترة',
  'Achats détaillés': 'المشتريات التفصيلية',
  'Rechercher': 'البحث',
  'Rechercher un produit, une catégorie ou Code P…': 'البحث عن منتج أو فئة أو رمز P...',
  'Rechercher un produit, marque, modèle ou Code P…': 'البحث عن منتج أو علامة تجارية أو طراز أو رمز P...',
  'Rechercher un achat, produit ou Code P…': 'البحث عن شراء أو منتج أو رمز P...',
  'Rechercher un produit, catégorie ou Code P…': 'البحث عن منتج أو فئة أو رمز P...',
  'Rechercher un service ou une catégorie…': 'البحث عن خدمة أو فئة...',
  'Rechercher une vente, client ou produit…': 'البحث عن بيع أو عميل أو منتج...',
  'Rechercher un compte ou opérateur…': 'البحث عن حساب أو مشغل...',
  'N° bon exact(s), séparés par une virgule': 'أرقام السندات الدقيقة مفصولة بفاصلة',
  'Référence bon de livraison…': 'مرجع سند التسليم...',
  'Saisir ou scanner le Code P': 'أدخل أو امسح رمز P',
  'Saisir le Code P ou code-barres': 'أدخل رمز P أو الرمز الشريطي',
  'Code-barres / Code P': 'الرمز الشريطي / رمز P',
  'Code P exact': 'رمز P الدقيق',
  'Code P / code': 'رمز P / الرمز',
  'Code P / code produit': 'رمز P / رمز المنتج',
  'Choisir un produit': 'اختيار منتج',
  'Choisir une catégorie': 'اختيار فئة',
  'Choisir un client': 'اختيار عميل',
  'Sélectionner un client': 'اختيار عميل',
  'Tous les fournisseurs': 'كل الموردين',
  'Tous les vendeurs': 'كل البائعين',
  'Tous les produits': 'كل المنتجات',
  'Tous les clients': 'كل العملاء',
  'Toutes les catégories': 'كل الفئات',
  'Tous les statuts': 'كل الحالات',
  'Espèces': 'نقداً',
  'Carte': 'بطاقة',
  'Carte bancaire': 'بطاقة بنكية',
  'Mobile money': 'دفع إلكتروني',
  'Virement': 'تحويل بنكي',
  'Chèque': 'شيك',
  'Autre': 'أخرى',
  'Journalier': 'يومي',
  'Hebdomadaire': 'أسبوعي',
  'Mensuel': 'شهري',
  'Annuel': 'سنوي',
  'Période personnalisée': 'فترة مخصصة',
  'Non spécifié': 'غير محدد',
  'Aucun bon spécifique': 'لا يوجد سند محدد',
  'Laisser vide pour paiement complet': 'اتركه فارغاً للدفع الكامل',
  'Auto si vide': 'تلقائي إذا كان فارغاً',
  'Optionnel': 'اختياري',
  'Ex. Solde Orange Money': 'مثال: رصيد Orange Money',
  'Ex. Orange, Inwi, PayPal': 'مثال: Orange أو Inwi أو PayPal',
  'Nom complet': 'الاسم الكامل',
  'Identifiant client': 'معرّف العميل',
  'Nom du fournisseur': 'اسم المورد',
  'Nom de la catégorie': 'اسم الفئة',
  'Nom du client': 'اسم العميل',
  'Notes optionnelles': 'ملاحظات اختيارية',
  'Prix achat': 'سعر الشراء',
  'Prix vente': 'سعر البيع',
  'Qté': 'الكمية',
  'N Bon': 'رقم السند',
  'Produits reçus': 'المنتجات المستلمة',
  'Produits vendus': 'المنتجات المباعة',
  'Réduction (DH)': 'التخفيض (درهم)',
  'Montant reçu (DH)': 'المبلغ المستلم (درهم)',
  'Montant déposé / rechargé (DH)': 'المبلغ المودع / المُعبّأ (درهم)',
  'Montant vendu (DH)': 'المبلغ المباع (درهم)',
  'Lier à un bon (optionnel)': 'ربط بسند (اختياري)',
  'Produits scannés dans cette session': 'المنتجات الممسوحة في هذه الجلسة',
  'Quantité à ajouter par scan': 'الكمية المضافة عند المسح',
  'Ou saisir le code manuellement': 'أو أدخل الرمز يدوياً',
  'Rechercher par nom, téléphone, email ou identifiant…': 'البحث بالاسم أو الهاتف أو البريد الإلكتروني أو المعرّف...',
  'Rechercher un produit, une catégorie ou Code P...': 'البحث عن منتج أو فئة أو رمز P...',
  'Rechercher un produit, marque, modèle ou Code P...': 'البحث عن منتج أو علامة تجارية أو طراز أو رمز P...',
  'Rechercher un achat, produit ou Code P...': 'البحث عن شراء أو منتج أو رمز P...',
  'Votre nom': 'اسمك',
  'Mot de passe': 'كلمة المرور',
  'Confirmer le mot de passe': 'تأكيد كلمة المرور',
  'Nom du produit': 'اسم المنتج',
  'Marque': 'العلامة التجارية',
  'Modèle': 'الطراز',
  'Nouvelle catégorie': 'فئة جديدة',
  'Photo du produit': 'صورة المنتج',
  'Modèle / variante': 'الطراز / الصنف',
  'Code produit': 'رمز المنتج',
  'Prix de vente (DH)': 'سعر البيع (درهم)',
  'Prix d’achat (DH)': 'سعر الشراء (درهم)',
  "Prix d'achat (DH)": 'سعر الشراء (درهم)',
  'Prix de vente': 'سعر البيع',
  'Fournisseur (optionnel)': 'المورد (اختياري)',
  'Date d’achat': 'تاريخ الشراء',
  "Date d'achat": 'تاريخ الشراء',
  'Heure d’achat': 'وقت الشراء',
  "Heure d'achat": 'وقت الشراء',
  'Téléphone': 'الهاتف',
  'Email': 'البريد الإلكتروني',
  'Adresse': 'العنوان',
  'Notes': 'ملاحظات',
  'Note (optionnel)': 'ملاحظة (اختياري)',
  'Opérateur / fournisseur': 'المشغل / المورد',
  'Client': 'العميل',
  'Montant payé': 'المبلغ المدفوع',
  'Description / note': 'الوصف / الملاحظة',
  'Identifiant fiscal ou ICE (optionnel)': 'المعرّف الضريبي أو ICE (اختياري)',
  'Privilèges par module': 'الصلاحيات حسب الوحدة',
  'Nom de l’application': 'اسم التطبيق',
  'Sous-nom': 'العنوان الفرعي',
  'Nom de l’entreprise': 'اسم الشركة',
  'Logo de l’entreprise / icône de l’application': 'شعار الشركة / أيقونة التطبيق',
  'Rechercher ${isEquipment ? \'un équipement\' : \'une dépense\'}...': 'البحث عن معدات أو مصروف...',
  'Espèces, virement…': 'نقداً أو تحويلاً...',
  'BA-0001': 'BA-0001',
  'FR-0001': 'FR-0001',
  'CL-0001': 'CL-0001',
  'Nom': 'الاسم',
  'Identifiant': 'المعرّف',
  'admin': 'مسؤول',
  'Adresse': 'العنوان'
});
let TRANSLATION_PAIRS_CACHE = null;
let TRANSLATION_ENGINE_CACHE = new Map();
function translationPairs() {
  if (TRANSLATION_PAIRS_CACHE) return TRANSLATION_PAIRS_CACHE;
  const pairs = Object.entries(PHONESTOCK_LOCALES.fr || {})
    .map(([key, value]) => [String(value), PHONESTOCK_LOCALES.ar?.[key] || value]);
  pairs.push(...Object.entries(RUNTIME_PHRASES_AR));
  TRANSLATION_PAIRS_CACHE = pairs.filter(([fr, ar]) => fr && ar && fr !== ar).sort((a, b) => b[0].length - a[0].length);
  return TRANSLATION_PAIRS_CACHE;
}
function translateArabicFragment(value) {
  const source = String(value ?? '');
  if (!source || currentLocale() !== 'ar') return source;
  const cached = TRANSLATION_ENGINE_CACHE.get(source);
  if (cached !== undefined) return cached;
  const translated = translationPairs().reduce((result, [fr, ar]) => {
    const escaped = fr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (/^[\p{L}\p{N}À-ÿ]+$/u.test(fr) && fr.length <= 4) {
      return result.replace(new RegExp(`(?<![\\p{L}\\p{N}À-ÿ])${escaped}(?![\\p{L}\\p{N}À-ÿ])`, 'gu'), ar);
    }
    return result.split(fr).join(ar);
  }, source);
  if (TRANSLATION_ENGINE_CACHE.size > 4000) TRANSLATION_ENGINE_CACHE.clear();
  TRANSLATION_ENGINE_CACHE.set(source, translated);
  return translated;
}
function applyLanguage() {
  const locale = currentLocale();
  document.documentElement.lang = locale;
  document.documentElement.dir = PHONESTOCK_LOCALES.meta?.direction?.[locale] || (locale === 'ar' ? 'rtl' : 'ltr');
  document.body.classList.toggle('rtl', locale === 'ar');
}
function translateRenderedInterface(root = document) {
  const locale = currentLocale();
  if (locale === 'fr') return;
  const attrs = ['placeholder', 'title', 'aria-label', 'data-label', 'alt'];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.nodeValue.trim()) node.nodeValue = translateArabicFragment(node.nodeValue);
      continue;
    }
    attrs.forEach(attribute => {
      const value = node.getAttribute(attribute);
      if (value) node.setAttribute(attribute, translateArabicFragment(value));
    });
  }
}
function languageSelectorHTML() {
  const label = currentLocale() === 'ar' ? 'اللغة' : 'Langue';
  return `<label class="language-switcher" title="${label}"><span>${label}</span><select id="languageSelector" aria-label="${label}"><option value="fr" ${currentLocale() === 'fr' ? 'selected' : ''}>Français</option><option value="ar" ${currentLocale() === 'ar' ? 'selected' : ''}>العربية</option></select></label>`;
}
function bindLanguageSelector() {
  const languageSelector = document.getElementById('languageSelector');
  if (languageSelector) languageSelector.addEventListener('change', event => setLanguage(event.target.value));
}

/* ---------------- Utilities ---------------- */
function uid(prefix) { return prefix + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
function money(n) { return (Number(n) || 0).toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
function esc(s) { return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function safeImageSrc(value) {
  const src = String(value || '');
  return /^(data:image\/(?:png|jpe?g|webp|gif);base64,|https:\/\/)/i.test(src) ? src : '';
}
// Keeps only digits and a single decimal point — used for text inputs that
// stand in for numeric fields (type="number" blocks cursor/selection APIs
// in real browsers, which breaks in-place editing).
function sanitizeDecimal(raw) {
  let cleaned = String(raw).replace(/[^0-9.]/g, '');
  const firstDot = cleaned.indexOf('.');
  if (firstDot !== -1) cleaned = cleaned.slice(0, firstDot + 1) + cleaned.slice(firstDot + 1).replace(/\./g, '');
  return cleaned;
}
function sanitizeDigits(raw, maxLength = 10) {
  return String(raw ?? '').replace(/\D/g, '').slice(0, maxLength);
}
function isValidPhone(value) {
  return /^\d{10}$/.test(String(value || ''));
}
function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(value || '').trim());
}
function normalizeSearchText(value) {
  return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, '');
}
function bindInputGuards() {
  document.querySelectorAll('input[type="number"], input[inputmode="decimal"], input[data-digits-only]').forEach(input => {
    if (input.dataset.guardBound === '1') return;
    input.dataset.guardBound = '1';
    input.addEventListener('keydown', event => {
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      const blocked = input.dataset.digitsOnly === '1' ? /[^0-9]/.test(event.key) : (input.type === 'number' && /[eE+\-]/.test(event.key));
      if (blocked && !['Backspace', 'Delete', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) event.preventDefault();
    });
    input.addEventListener('input', () => {
      const next = input.dataset.digitsOnly === '1' ? sanitizeDigits(input.value, Number(input.maxLength) || 10) : sanitizeDecimal(input.value);
      if (input.value !== next) input.value = next;
    });
  });
  document.querySelectorAll('input[type="email"]').forEach(input => {
    if (input.dataset.emailGuardBound === '1') return;
    input.dataset.emailGuardBound = '1';
    input.addEventListener('input', () => { input.setCustomValidity(input.value && !isValidEmail(input.value) ? 'Saisissez une adresse au format email@email.com.' : ''); });
  });
}
function normalizeCodePart(value) {
  return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().replace(/[^A-Z0-9]+/g, ' ').trim();
}
function makeCodeToken(value, maxLength) {
  return normalizeCodePart(value).replace(/\s+/g, '').slice(0, maxLength);
}
function generateProductCode(name, brand = '', model = '') {
  const brandToken = makeCodeToken(brand, 5);
  const nameToken = makeCodeToken(name, 8);
  const modelToken = makeCodeToken(model, 8);
  const base = [brandToken, nameToken, modelToken].filter(Boolean).join('-') || 'PRODUIT';
  let candidate = base; let suffix = 2;
  const used = new Set(state.products.map(product => String(product.sku || '').trim().toUpperCase()).filter(Boolean));
  while (used.has(candidate.toUpperCase())) candidate = `${base}-${suffix++}`;
  return candidate;
}
function refreshAutoProductCode() {
  const sku = document.getElementById('f_sku');
  if (!sku || state.editingProduct !== 'new' || sku.dataset.autoCode === '0') return;
  const name = document.getElementById('f_name')?.value || '';
  const brand = document.getElementById('f_brand')?.value || '';
  const model = document.getElementById('f_model')?.value || '';
  const generated = generateProductCode(name, brand, model);
  if (generated && (sku.value === '' || sku.dataset.autoCode === '1')) {
    sku.value = generated;
    sku.dataset.autoCode = '1';
  }
}
function bindAutoProductCode() {
  const sku = document.getElementById('f_sku');
  if (!sku || sku.dataset.autoCodeBound === '1') return;
  sku.dataset.autoCodeBound = '1';
  sku.dataset.autoCode = sku.value.trim() ? '0' : '1';
  ['f_name', 'f_brand', 'f_model'].forEach(id => document.getElementById(id)?.addEventListener('input', refreshAutoProductCode));
  sku.addEventListener('input', () => { sku.dataset.autoCode = sku.value.trim() ? '0' : '1'; });
  refreshAutoProductCode();
}
function fmtDate(d) { return new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }); }
function fmtDateTime(d) {
  if (!d) return '—';
  const raw = String(d);
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return new Date(`${raw}T12:00:00`).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const parsed = new Date(d);
  if (Number.isNaN(parsed.getTime())) return raw;
  return parsed.toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}
function localDateInputValue(value = new Date()) {
  const date = value instanceof Date ? new Date(value.getTime()) : new Date(value || Date.now());
  if (Number.isNaN(date.getTime())) return new Date().toISOString().slice(0, 10);
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}
function localTimeInputValue(value = new Date()) {
  const date = value instanceof Date ? new Date(value.getTime()) : new Date(value || Date.now());
  if (Number.isNaN(date.getTime())) return '00:00';
  return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
}
function localIsoFromParts(dateValue, timeValue) {
  const date = String(dateValue || localDateInputValue());
  const time = String(timeValue || localTimeInputValue());
  const parsed = new Date(`${date}T${time}:00`);
  return Number.isNaN(parsed.getTime()) ? new Date().toISOString() : parsed.toISOString();
}

function translateMessage(message) {
  if (currentLocale() === 'fr') return message;
  return translationPairs()
    .reduce((result, [fr, ar]) => {
      const escaped = fr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if (/^[\p{L}\p{N}À-ÿ]+$/u.test(fr) && fr.length <= 4) {
        return result.replace(new RegExp(`(?<![\\p{L}\\p{N}À-ÿ])${escaped}(?![\\p{L}\\p{N}À-ÿ])`, 'gu'), ar);
      }
      return result.split(fr).join(ar);
    }, String(message));
}
const nativeConfirm = window.confirm.bind(window);
window.confirm = message => nativeConfirm(translateMessage(message));
function toast(msg) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = translateMessage(msg);
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2600);
}

// Simple non-cryptographic hash — sufficient to avoid storing plain-text
// passwords in this lightweight, client-side tool. Not bank-grade security.
function hashPassword(pw) {
  let h = 5381;
  const s = 'ps_salt_' + pw;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h) + s.charCodeAt(i);
  return 'h' + (h >>> 0).toString(36);
}

const EQUIPMENT_CATEGORIES = ['Informatique', 'Mobilier', 'Matériel de réparation', 'Sécurité', 'Téléphonie professionnelle', 'Autre'];
const EXPENSE_CATEGORIES = ['Loyer', 'Internet', 'Électricité', 'Eau', 'Salaires', 'Transport', 'Téléphone', 'Entretien', 'Publicité', 'Frais bancaires', 'Impôts et taxes', 'Autre'];
 function getEquipmentCategories() { return Array.from(new Set([...(state.equipmentCategories || [])])).sort((a,b) => a.localeCompare(b, 'fr')); }
 function getExpenseCategories() { return Array.from(new Set([...(state.expenseCategories || [])])).sort((a,b) => a.localeCompare(b, 'fr')); }
const CATEGORIES = ['Smartphones', 'Accessoires', 'Pièces détachées', 'Verres trempés 9D', 'Supports téléphone', 'Supports voiture', 'Coques, films & câbles', 'Accessoires photo & vlogging', 'Écouteurs & Audio', 'Coques téléphone', 'Kits pochette + verre'];
const SERVICE_CATEGORIES = ['Réparation', 'Remplacement écran', 'Installation logiciel', 'Configuration téléphone', 'Transfert de données', 'Déblocage / diagnostic', 'Impression / photocopie', 'Autres services'];
const RECHARGE_TYPES = ['Compte téléphonique', 'Compte opérateur', 'Portefeuille électronique', 'Avance de trésorerie', 'Crédit fournisseur / prépayé', 'Autre'];
function getServiceCategories() { return Array.from(new Set([...(state.serviceCategories || []), ...(state.services || []).map(s => s.category).filter(Boolean)])).sort((a,b) => a.localeCompare(b, 'fr')); }
function getCategories() {
  return Array.from(new Set([...(state.categories || []), ...(state.products || []).map(product => product.category).filter(Boolean)])).sort((a, b) => a.localeCompare(b, 'fr'));
}
function renderInlineCategoryManager() {
  return getCategories().sort((a, b) => a.localeCompare(b, 'fr')).map(category => {
    const used = state.products.some(product => product.category === category);
    return `<div class="inline-category-row"><div class="category-name">${esc(category)}</div><div class="category-actions">${used ? '<span class="muted">Utilisée</span>' : `<button type="button" class="btn btn-sm btn-danger" data-inline-delete-category="${esc(category)}">Supprimer</button>`}</div></div>`;
  }).join('');
}
function renderBulkCategoryManager() {
  return getCategories().sort((a, b) => a.localeCompare(b, 'fr')).map(category => {
    const used = state.products.some(product => product.category === category);
    return `<div class="inline-category-row"><div class="category-name">${esc(category)}</div><div class="category-actions">${used ? '<span class="muted">Utilisée</span>' : `<button type="button" class="btn btn-sm btn-danger" data-bulk-delete-category="${esc(category)}">Supprimer</button>`}</div></div>`;
  }).join('');
}
function refreshInlineCategoryManager() {
  const list = document.getElementById('inlineCategoryList');
  if (list) list.innerHTML = renderInlineCategoryManager();
}
const PRIV_MODULES = ['products', 'clients', 'payments'];
const PRIV_ACTIONS = ['view', 'create', 'edit', 'delete'];
const DEFAULT_PRIVILEGES = {
  products: { view: true, create: false, edit: false, delete: false, viewCosts: false },
  clients: { view: true, create: false, edit: false, delete: false },
  payments: { view: true, create: false, edit: false, delete: false },
};
const ADMIN_PRIVILEGES = {
  products: { view: true, create: true, edit: true, delete: true, viewCosts: true },
  clients: { view: true, create: true, edit: true, delete: true },
  payments: { view: true, create: true, edit: true, delete: true },
  manageUsers: true,
};
function clonePrivileges(p) { return JSON.parse(JSON.stringify(p)); }
// Upgrades accounts created under the old flat privilege model
// (manageProducts/manageClients/managePayments/viewCosts) to the new
// per-module view/create/edit/delete structure.
function migrateUserPrivileges(u) {
  if (u.role === 'admin') { u.privileges = clonePrivileges(ADMIN_PRIVILEGES); return; }
  const p = u.privileges || {};
  if (p.products && typeof p.products === 'object') return; // already migrated
  u.privileges = {
    products: { view: true, create: !!p.manageProducts, edit: !!p.manageProducts, delete: !!p.manageProducts, viewCosts: !!p.viewCosts },
    clients: { view: true, create: !!p.manageClients, edit: !!p.manageClients, delete: !!p.manageClients },
    payments: { view: true, create: !!p.managePayments, edit: !!p.managePayments, delete: !!p.managePayments },
  };
}

const state = {
  view: 'dashboard',
  theme: 'dark',
  language: (() => { try { return localStorage.getItem('phonestock-language') === 'ar' ? 'ar' : 'fr'; } catch (e) { return 'fr'; } })(),
  branding: { name: 'PhoneStock', subtitle: 'Gestion boutique', icon: '', companyName: '', companyAddress: '', companyPhone: '', companyEmail: '', companyId: '' },
  loaded: false,
  products: [],
  categories: [...CATEGORIES],
  clients: [],
  sales: [],
  users: [],
  payments: [],
  oplog: [],
  suppliers: [],
  purchases: [],
  invoices: [],
  equipmentPurchases: [],
  expenses: [],
  equipmentCategories: [...EQUIPMENT_CATEGORIES],
  expenseCategories: [...EXPENSE_CATEGORIES],
  services: [],
  serviceCategories: [...SERVICE_CATEGORIES],
  rechargeAccounts: [],
  rechargeMarginRate: 6.5,
  capitalAmount: 0,
  rechargeAccountModalOpen: false,
  rechargeDepositModalOpen: false,
  rechargeSaleModalOpen: false,
  rechargeAccountSearch: '',
  categoryManagerOpen: false,
  categoryManagerType: null,
  serviceSaleModalOpen: false,
  editingService: null,
  session: null, // {userId}
  authError: '',
  authView: null, // 'setup' | 'login' when not logged in
  posCart: [],
  posSearch: '',
  posPayment: 'Espèces',
  posClientId: '',
  posCategory: 'Tous',
  posPaidOverride: null,
  posDiscount: '',
  posPaymentOpen: false,
  posClientCodeInput: '',
  bulkSaleModalOpen: false,
  bulkSaleLines: null,
  bulkSaleClientId: '',
  bulkSaleDate: '',
  bulkSaleTime: '',
  bulkSalePayment: 'Espèces',
  bulkSalePaid: '',
  bulkSaleDiscount: '',
  bulkSaleScanLineId: null,
  purchaseQuickAddLineId: null,
  editingSale: null,
  productSearch: '',
  stockSearch: '',
  supplierSearch: '',
  purchaseSearch: '',
  salesSearch: '',
  generatedDocuments: [],
  productSort: { key: 'name', dir: 'asc' },
  stockSort: { key: 'date', dir: 'desc' },
  purchaseSort: { key: 'date', dir: 'desc' },
  supplierSort: { key: 'name', dir: 'asc' },
  clientSort: { key: 'name', dir: 'asc' },
  clientSearch: '',
  editingProduct: null,
  bulkProductModalOpen: false,
  bulkProductLines: null,
  bulkPurchaseSupplierId: '',
  bulkPurchaseDate: '',
  bulkPurchaseTime: '',
  bulkPurchaseBonNumber: '',
  bulkExpenseModalOpen: false,
  bulkExpenseLines: null,
  bulkEquipmentModalOpen: false,
  bulkEquipmentLines: null,
  productPhotoDraft: undefined,
  editingClient: null,
  editingUser: null,
  paymentClientId: null,
  editingPayment: null,
  ledgerClientId: null,
  showInvoicedBons: false,
  invoiceDraft: null,
  settingsTab: 'profil',
  inventorySearch: '',
  historyTab: 'ventes',
  historySalesPage: 1,
  historyPurchasesPage: 1,
  dashboardSalesFrom: localDateInputValue(),
  dashboardSalesTo: localDateInputValue(),
  dashboardChartMetric: 'count',
  purchasesTab: 'registre',
  editingSupplier: null,
  editingPurchase: null,
  purchaseDraftLines: null,
  purchaseDraftSupplierId: '',
  purchaseDraftDate: '',
  purchaseDraftTime: '',
  purchaseDraftNote: '',
  purchaseDraftBonNumber: '',
  purchaseScanLineId: null,
  purchaseDraftMode: 'purchase',
  purchaseDraftSourceSaleIds: [],
  purchaseDraftSourceProductIds: [],
  replenishmentBons: [],
  replenishmentConsumedSaleIds: [],
  replenishmentConsumedProductIds: [],
  replenishmentSalesFilters: { from: '', to: '' },
  editingReplenishmentBon: null,
  purchaseFilters: { supplierId: '', bonNumber: '', from: '', to: '' },
  historyFilters: { status: 'Tous', sellerId: '', clientId: '', from: '', to: '' },
  reportFilters: { from: '', to: '', sellerId: '', productId: '', excludeSaleCategories: [], excludePurchaseCategories: [], excludePurchaseSuppliers: [], sections: { summary: true, stats: true, sales: true, purchases: true, payments: true, stock: true, productPerformance: true, dailyEvolution: true } },
  reportExclusionsOpen: false,
  operationReportPeriod: 'month',
  operationReportMonth: localDateInputValue().slice(0, 7),
  operationReportFrom: '',
  operationReportTo: '',
  sidebarOpen: false,
  showClearStorageModal: false,
  operationBusy: false,
  financeModal: null,
  equipmentSearch: '',
  equipmentFrom: '',
  equipmentTo: '',
  expenseSearch: '',
  expenseFrom: '',
  expenseTo: '',
};
const indexedById = createIdIndexes(state, ['products', 'clients', 'suppliers']);
function productById(id) { return indexedById('products').get(id); }
function clientById(id) { return indexedById('clients').get(id); }
function supplierById(id) { return indexedById('suppliers').get(id); }
const computedCache = createComputedCache();
function clearComputedCache() { computedCache.clear(); }
function cachedComputed(key, factory) { return computedCache.get(key, factory); }
function currentUser() {
  if (!state.session) return null;
  return state.users.find(u => u.id === state.session.userId) || null;
}
function isAdmin() {
  const u = currentUser();
  return !!u && u.role === 'admin';
}
// hasPriv('products','edit') — module + action level check.
function hasPriv(module, action) {
  const u = currentUser();
  if (!u) return false;
  if (module === 'reports' || action === 'viewCosts') return u.role === 'admin';
  if (u.role === 'admin') return true;
  return !!(u.privileges && u.privileges[module] && u.privileges[module][action]);
}
function validNonNegativeNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) && n >= 0;
}
function validPositiveInteger(value) {
  return Number.isInteger(Number(value)) && Number(value) > 0;
}
function productHasSales(productId) {
  return state.sales.some(s => (s.items || []).some(it => it.productId === productId));
}
function productHasPurchases(productId) {
  return state.purchases.some(p => (p.items || []).some(it => it.productId === productId));
}
function clientHasRecords(clientId) {
  return state.sales.some(s => s.clientId === clientId) || state.payments.some(p => p.clientId === clientId) || state.invoices.some(i => i.clientId === clientId);
}
function supplierHasPurchases(supplierId) {
  return state.purchases.some(p => p.supplierId === supplierId);
}

/* ---------------- Storage layer ---------------- */
// Prefer window.storage (available inside Claude.ai — shared across everyone
// with the link). When running standalone (the downloaded ZIP/HTML, opened
// via file:// or hosted elsewhere), window.storage doesn't exist, so we use
// a real local database (IndexedDB) built into the browser to keep every
// change saved on that device. localStorage is kept only as a last-resort
// fallback (and to auto-migrate any data saved by older versions of this
// app) for browsers/contexts where IndexedDB itself is unavailable.
const LOCAL_STORAGE_PREFIX = 'phonestock:';
const IDB_NAME = 'phonestock-db';
const IDB_STORE = 'kv';
const DATA_SCHEMA_VERSION = 2;
let idbOpenPromise = null;

function hasNativeStorage() {
  return typeof window !== 'undefined' && window.storage && typeof window.storage.get === 'function';
}
function openLocalDatabase() {
  if (idbOpenPromise) return idbOpenPromise;
  idbOpenPromise = new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') { reject(new Error('IndexedDB indisponible')); return; }
    const req = indexedDB.open(IDB_NAME, 1);
    req.onupgradeneeded = () => { req.result.createObjectStore(IDB_STORE); };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return idbOpenPromise;
}
function idbGet(key) {
  return openLocalDatabase().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, 'readonly');
    const req = tx.objectStore(IDB_STORE).get(key);
    req.onsuccess = () => resolve(req.result === undefined ? null : req.result);
    req.onerror = () => reject(req.error);
  }));
}
function idbSet(key, value) {
  return openLocalDatabase().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, 'readwrite');
    tx.objectStore(IDB_STORE).put(value, key);
    tx.oncomplete = () => resolve(true);
    tx.onerror = () => reject(tx.error);
  }));
}
function idbDelete(key) {
  return openLocalDatabase().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, 'readwrite');
    tx.objectStore(IDB_STORE).delete(key);
    tx.oncomplete = () => resolve(true);
    tx.onerror = () => reject(tx.error);
  }));
}

async function safeGet(key, shared) {
  try {
    if (hasNativeStorage()) return await window.storage.get(key, shared);
    try {
      const idbVal = await idbGet(LOCAL_STORAGE_PREFIX + key);
      if (idbVal !== null) return { key, value: idbVal, shared };
    } catch (e) { /* IndexedDB unavailable — fall through to localStorage */ }
    // Legacy/fallback read — also self-heals by copying the value into the
    // local database so future reads no longer need this fallback.
    const raw = localStorage.getItem(LOCAL_STORAGE_PREFIX + key);
    if (raw === null) return null;
    idbSet(LOCAL_STORAGE_PREFIX + key, raw).catch(() => {});
    return { key, value: raw, shared };
  } catch (e) { return null; }
}
async function safeSet(key, value, shared) {
  try {
    if (hasNativeStorage()) return await window.storage.set(key, value, shared);
    try { await idbSet(LOCAL_STORAGE_PREFIX + key, value); return { key, value, shared }; }
    catch (e) { localStorage.setItem(LOCAL_STORAGE_PREFIX + key, value); return { key, value, shared }; }
  } catch (e) {
    console.error(e);
    toast('Erreur de sauvegarde (stockage plein ou navigation privée ?)');
    return null;
  }
}
function persistReportFilters() {
  return safeSet('shop:report-filters', JSON.stringify(state.reportFilters), false);
}
async function safeDelete(key, shared) {
  try {
    if (hasNativeStorage()) return await window.storage.delete(key, shared);
    try { await idbDelete(LOCAL_STORAGE_PREFIX + key); } catch (e) {}
    localStorage.removeItem(LOCAL_STORAGE_PREFIX + key);
    return { key, deleted: true, shared };
  } catch (e) { return null; }
}

const pendingSaves = new Map();
const pendingSaveWaiters = new Map();
let pendingSaveTimer = null;
function queuedSave(key, valueFactory, shared = true) {
  pendingSaves.set(key, { valueFactory, shared });
  const promise = new Promise(resolve => {
    const waiters = pendingSaveWaiters.get(key) || [];
    waiters.push(resolve);
    pendingSaveWaiters.set(key, waiters);
  });
  if (!pendingSaveTimer) pendingSaveTimer = setTimeout(flushPendingSaves, 120);
  return promise;
}
async function flushPendingSaves() {
  if (pendingSaveTimer) { clearTimeout(pendingSaveTimer); pendingSaveTimer = null; }
  const batch = Array.from(pendingSaves.entries());
  pendingSaves.clear();
  if (!batch.length) return [];
  const results = await Promise.all(batch.map(async ([key, job]) => {
    let result = null;
    try { result = await safeSet(key, JSON.stringify(job.valueFactory()), job.shared); }
    catch (e) { console.error('Erreur de sauvegarde groupée', key, e); }
    const waiters = pendingSaveWaiters.get(key) || [];
    pendingSaveWaiters.delete(key);
    waiters.forEach(resolve => resolve(result));
    return result;
  }));
  if (pendingSaves.size && !pendingSaveTimer) pendingSaveTimer = setTimeout(flushPendingSaves, 120);
  return results;
}
async function saveProducts() { clearComputedCache(); return queuedSave('shop:products', () => state.products, true); }
async function saveCategories() { return queuedSave('shop:categories', () => state.categories, true); }
async function saveClients() { clearComputedCache(); return queuedSave('shop:clients', () => state.clients, true); }
async function saveSales() { clearComputedCache(); return queuedSave('shop:sales', () => state.sales, true); }
async function saveUsers() { return queuedSave('shop:users', () => state.users, true); }
async function savePayments() { return queuedSave('shop:payments', () => state.payments, true); }
async function saveOplog() { return queuedSave('shop:oplog', () => state.oplog, true); }
async function saveSuppliers() { clearComputedCache(); return queuedSave('shop:suppliers', () => state.suppliers, true); }
async function savePurchases() { invalidateStockIndex(); clearComputedCache(); return queuedSave('shop:purchases', () => state.purchases, true); }
async function saveReplenishmentBons() { return queuedSave('shop:replenishment-bons', () => state.replenishmentBons, true); }
async function saveReplenishmentConsumedSales() { return queuedSave('shop:replenishment-consumed-sales', () => state.replenishmentConsumedSaleIds, true); }
async function saveInvoices() { return queuedSave('shop:invoices', () => state.invoices, true); }
async function saveEquipmentPurchases() { clearComputedCache(); return queuedSave('shop:equipment-purchases', () => state.equipmentPurchases, true); }
async function saveExpenses() { return queuedSave('shop:expenses', () => state.expenses, true); }
async function saveEquipmentCategories() { return queuedSave('shop:equipment-categories', () => state.equipmentCategories, true); }
async function saveExpenseCategories() { return queuedSave('shop:expense-categories', () => state.expenseCategories, true); }
async function saveServices() { return queuedSave('shop:services', () => state.services, true); }
async function saveServiceCategories() { return queuedSave('shop:service-categories', () => state.serviceCategories, true); }
async function saveRechargeAccounts() { return queuedSave('shop:recharge-accounts', () => state.rechargeAccounts, true); }
async function saveRechargeMarginRate() { return safeSet('shop:recharge-margin-rate', String(state.rechargeMarginRate), false); }
async function saveCapitalAmount() { return safeSet('shop:capital-amount', String(state.capitalAmount), false); }

async function logOperation(action, details) {
  const u = currentUser();
  state.oplog.push({
    id: uid('log'), date: new Date().toISOString(),
    userId: u ? u.id : null, username: u ? u.username : 'système',
    action, details: details || '',
  });
  if (state.oplog.length > 2000) state.oplog = state.oplog.slice(-2000);
  await saveOplog();
}

function seedProducts() {
  return [];
}
// Creates the initial purchase lot for each seeded product, since stock and
// prices now live on purchase lots rather than directly on the product.
function seedPurchasesFor(products) {
  return [];
}
function seedClients() {
  return [];
}
function nextClientCode() {
  let max = 0;
  state.clients.forEach(c => { const m = /^CL-(\d+)$/.exec(c.clientCode || ''); if (m) max = Math.max(max, parseInt(m[1], 10)); });
  return 'CL-' + String(max + 1).padStart(4, '0');
}
function nextSupplierCode() {
  let max = 0;
  state.suppliers.forEach(s => { const m = /^FR-(\d+)$/.exec(s.code || ''); if (m) max = Math.max(max, parseInt(m[1], 10)); });
  return 'FR-' + String(max + 1).padStart(4, '0');
}
function nextSaleNumber() {
  let max = 0;
  state.sales.forEach(s => { if (s.number) max = Math.max(max, s.number); });
  return max + 1;
}
function nextPurchaseBonNumber() {
  let max = 0;
  state.purchases.forEach(pu => { const m = /^BA-(\d+)$/.exec(String(pu.bonNumber || '')); if (m) max = Math.max(max, parseInt(m[1], 10)); });
  return 'BA-' + String(max + 1).padStart(4, '0');
}
function nextInvoiceNumber() {
  let max = 0;
  state.invoices.forEach(i => { if (i.number) max = Math.max(max, i.number); });
  return max + 1;
}

/* ---------------- Stock lots (purchase-based) ----------------
   Stock and prices are no longer fixed on the product: every purchase
   line item is a "lot" (supplier, date, quantity, purchase price, sale
   price). A product's current stock is the sum of remaining quantities
   across all its lots; the price offered at checkout is the sale price
   of its OLDEST lot still in stock (first in, first out). */
let stockLotsIndex = null;
let stockTotalsIndex = null;
function invalidateStockIndex() { stockLotsIndex = null; stockTotalsIndex = null; }
function ensureStockLotsIndex() {
  if (stockLotsIndex) return stockLotsIndex;
  stockLotsIndex = new Map();
  stockTotalsIndex = new Map();
  state.purchases.forEach(pu => {
    (pu.items || []).forEach(it => {
      if (!it.productId) return;
      const lots = stockLotsIndex.get(it.productId) || [];
      lots.push({
        purchaseId: pu.id, date: pu.date, supplierId: pu.supplierId,
        productId: it.productId, name: it.name, qty: it.qty,
        unitCost: it.unitCost || 0, unitPrice: it.unitPrice || 0,
        qtyRemaining: it.qtyRemaining != null ? it.qtyRemaining : it.qty,
        itemRef: it,
      });
      stockLotsIndex.set(it.productId, lots);
    });
  });
  stockLotsIndex.forEach(lots => lots.sort((a, b) => new Date(a.date) - new Date(b.date)));
  stockLotsIndex.forEach((lots, productId) => stockTotalsIndex.set(productId, lots.reduce((sum, lot) => sum + Math.max(0, Number(lot.qtyRemaining) || 0), 0)));
  return stockLotsIndex;
}
function productLots(productId) { return ensureStockLotsIndex().get(productId) || []; }
function productStock(productId) {
  ensureStockLotsIndex(); return stockTotalsIndex.get(productId) || 0;
}
// The price PhoneStock offers at checkout: the sale price of the oldest
// lot that still has stock (so older inventory sells through first).
function productSellPrice(productId) {
  const inStock = productLots(productId).filter(l => l.qtyRemaining > 0);
  if (inStock.length) return inStock[0].unitPrice;
  const all = productLots(productId);
  return all.length ? all[all.length - 1].unitPrice : 0;
}
// Weighted-average purchase cost across all lots (used for Excel export reporting).
function productAvgCost(productId) {
  const lots = productLots(productId);
  if (!lots.length) return 0;
  const totalQty = lots.reduce((s, l) => s + (l.qty || 0), 0);
  if (!totalQty) return lots[lots.length - 1].unitCost || 0;
  const totalCost = lots.reduce((s, l) => s + (l.qty || 0) * (l.unitCost || 0), 0);
  return totalCost / totalQty;
}
// Deducts qty from the oldest lots first (FIFO) and returns the weighted
// average purchase cost of the units actually consumed — used to record
// accurate margins on the sale without the product needing its own price.
function consumeStockFIFO(productId, qty) {
  invalidateStockIndex();
  const requested = Number(qty);
  if (!Number.isInteger(requested) || requested <= 0) return null;
  const lots = productLots(productId).filter(l => Number(l.qtyRemaining) > 0);
  const available = lots.reduce((sum, lot) => sum + Math.max(0, Number(lot.qtyRemaining) || 0), 0);
  if (available < requested) return null;
  let remaining = requested;
  let totalCost = 0;
  for (const lot of lots) {
    if (remaining <= 0) break;
    const take = Math.min(Number(lot.qtyRemaining) || 0, remaining);
    lot.itemRef.qtyRemaining = (Number(lot.itemRef.qtyRemaining) || 0) - take;
    totalCost += take * (Number(lot.unitCost) || 0);
    remaining -= take;
  }
  invalidateStockIndex();
  return totalCost / requested;
}
// Restitue le stock d’une vente supprimée ou modifiée dans les lots existants.
// Les anciennes ventes ne conservaient pas l’identifiant du lot : on restitue
// donc dans les lots les plus anciens sans dépasser leur quantité d’origine.
function restoreStockForSaleItems(items) {
  invalidateStockIndex();
  for (const item of (items || [])) {
    const requested = Number(item.qty);
    if (item.isService || item.serviceId || item.isRecharge || item.rechargeAccountId) continue;
    if (!item.productId || !Number.isInteger(requested) || requested <= 0) return false;
    let remaining = requested;
    for (const lot of productLots(item.productId)) {
      if (remaining <= 0) break;
      const originalQty = Math.max(0, Number(lot.qty) || 0);
      const currentRemaining = Math.max(0, Number(lot.itemRef.qtyRemaining) || 0);
      const capacity = Math.max(0, originalQty - currentRemaining);
      if (!capacity) continue;
      const restored = Math.min(capacity, remaining);
      lot.itemRef.qtyRemaining = currentRemaining + restored;
      remaining -= restored;
    }
    if (remaining > 0) return false;
  }
  invalidateStockIndex();
  return true;
}

function totalStockValue() {
  let total = 0;
  state.purchases.forEach(pu => (pu.items || []).forEach(it => {
    const rem = Number(it.qtyRemaining != null ? it.qtyRemaining : it.qty) || 0;
    total += Math.max(0, rem) * (Number(it.unitCost) || 0);
  }));
  return total;
}
// Upgrades purchase records saved before lot tracking existed (adds
// qtyRemaining/unitPrice), and preserves any stock a product had directly
// on it before this feature by creating a one-off migration lot for the
// difference — so nobody's existing inventory silently disappears.
function migrateStockLots() {
  let changed = false;
  state.purchases.forEach(pu => {
    (pu.items || []).forEach(it => {
      if (it.qtyRemaining == null) { it.qtyRemaining = it.qty; changed = true; }
      if (it.unitPrice == null) { it.unitPrice = 0; changed = true; }
    });
  });
  state.products.forEach(p => {
    const legacyStock = typeof p.stock === 'number' ? p.stock : 0;
    if (legacyStock <= 0) return;
    const lotStock = productStock(p.id);
    if (legacyStock > lotStock) {
      const diff = legacyStock - lotStock;
      state.purchases.push({
        id: uid('pu'), date: '2024-01-01T00:00:00.000Z', supplierId: null,
        items: [{ productId: p.id, name: p.name, qty: diff, unitCost: p.costPrice || 0, unitPrice: p.sellPrice || 0, qtyRemaining: diff }],
        total: diff * (p.costPrice || 0), note: 'Migration : stock existant avant la gestion par lots',
      });
      changed = true;
    }
    delete p.stock; delete p.costPrice; delete p.sellPrice;
  });
  if (changed) savePurchases();
  return changed;
}

/* ---------------- Derived helpers ---------------- */
function stockStatus(p) {
  const stock = productStock(p.id);
  if (stock <= 0) return 'danger';
  if (stock <= p.lowStock) return 'warn';
  return 'ok';
}
function lowStockProducts() { return state.products.filter(p => productStock(p.id) <= p.lowStock); }
function todaySales() {
  const today = new Date().toDateString();
  return state.sales.filter(s => new Date(s.date).toDateString() === today);
}
function dashboardSales() {
  const from = state.dashboardSalesFrom || localDateInputValue();
  const to = state.dashboardSalesTo || from;
  return state.sales.filter(s => { const date = localDateInputValue(s.date); return date >= from && date <= to; });
}
function revenueOf(sales) { return sales.reduce((sum, s) => sum + s.total, 0); }
function paymentShortLabel(payment) {
  const value = String(payment || '').trim();
  return value ? value.charAt(0).toUpperCase() : '—';
}
function marginOf(sales) {
  let m = 0;
  sales.forEach(s => s.items.forEach(it => { m += (it.price - (it.unitCost || 0)) * it.qty; }));
  return m;
}
function dashboardSalesSummary(sales) {
  const productKeys = new Set(); let units = 0; let discount = 0; let margin = 0;
  sales.forEach(sale => {
    const items = (sale.items || []).filter(item => Number(item.qty) > 0);
    const grossSubtotal = Number(sale.subtotal) || items.reduce((sum, item) => sum + (Number(item.price) || 0) * (Number(item.qty) || 0), 0);
    const saleDiscount = Math.max(0, Number(sale.discount) || 0);
    discount += saleDiscount;
    items.forEach(item => {
      const qty = Number(item.qty) || 0; const gross = (Number(item.price) || 0) * qty;
      const allocatedDiscount = grossSubtotal > 0 ? saleDiscount * gross / grossSubtotal : 0;
      units += qty; margin += gross - allocatedDiscount - ((Number(item.unitCost) || 0) * qty);
      if (!item.isRecharge && !item.isService && !item.serviceId) productKeys.add(item.productId || `name:${item.name || 'Produit'}`);
    });
  });
  return { units, products: productKeys.size, discount, margin };
}
function bestSellers(limit = 5, sales = state.sales) {
  const map = {};
  sales.forEach(s => s.items.forEach(it => { map[it.productId] = (map[it.productId] || 0) + it.qty; }));
  return Object.entries(map)
    .map(([id, qty]) => ({ product: state.products.find(p => p.id === id), qty }))
    .filter(x => x.product).sort((a, b) => b.qty - a.qty).slice(0, limit);
}
function dashboardDailySeries(sales, metric) {
  const map = new Map();
  sales.forEach(sale => {
    const day = localDateInputValue(sale.date);
    const value = metric === 'count' ? 1 : metric === 'margin' ? marginOf([sale]) : Number(sale.total) || 0;
    map.set(day, (map.get(day) || 0) + value);
  });
  const from = state.dashboardSalesFrom || localDateInputValue();
  const to = state.dashboardSalesTo || from;
  const start = new Date(`${from}T12:00:00`); const end = new Date(`${to}T12:00:00`);
  const series = [];
  for (let d = new Date(start); d <= end && series.length < 93; d.setDate(d.getDate() + 1)) {
    const day = localDateInputValue(d); series.push({ day, value: map.get(day) || 0 });
  }
  return series;
}
function effectivePaidAmount(sale) {
  if (!sale.clientId) return sale.paidAmount;
  // Allocate the client's journal payments (recorded after checkout) across
  // their sales in chronological order, so a sale's status reflects any
  // later payment even though the payment itself isn't tied to one bon.
  const sales = clientSales(sale.clientId).slice().sort((a, b) => new Date(a.date) - new Date(b.date));
  let extra = clientPayments(sale.clientId).reduce((s, p) => s + p.amount, 0);
  let result = sale.paidAmount;
  for (const s of sales) {
    const remaining = Math.max(0, s.total - s.paidAmount);
    const applied = Math.min(remaining, extra);
    extra -= applied;
    if (s.id === sale.id) { result = s.paidAmount + applied; break; }
  }
  return result;
}
function saleStatus(s) {
  const paid = effectivePaidAmount(s);
  if (paid >= s.total - 0.009) return 'Payé';
  if (paid > 0) return 'Partiel';
  return 'Impayé';
}
function clientSales(clientId) { return state.sales.filter(s => s.clientId === clientId); }
function clientPayments(clientId) { return state.payments.filter(p => p.clientId === clientId); }
function clientBalance(clientId) {
  const sales = clientSales(clientId);
  const totalDue = sales.reduce((s, x) => s + x.total, 0);
  const paidAtSale = sales.reduce((s, x) => s + (x.paidAmount || 0), 0);
  const extraPayments = clientPayments(clientId).reduce((s, x) => s + x.amount, 0);
  return totalDue - paidAtSale - extraPayments;
}

/* ---------------- Auth ---------------- */
async function setupAdmin(username, name, password) {
  const user = {
    id: uid('u'), username: username.trim(), name: name.trim() || username.trim(),
    passwordHash: hashPassword(password), role: 'admin', privileges: clonePrivileges(ADMIN_PRIVILEGES),
  };
  state.users.push(user);
  await saveUsers();
  state.session = { userId: user.id };
  await safeSet('shop:session', JSON.stringify(state.session), false);
  await logOperation('Création compte admin', `Compte "${user.username}" créé`);
  state.authError = '';
  render();
}

async function login(username, password) {
  const u = state.users.find(x => x.username.toLowerCase() === username.trim().toLowerCase());
  if (!u || u.passwordHash !== hashPassword(password)) {
    state.authError = 'Identifiant ou mot de passe incorrect.';
    render();
    return;
  }
  state.session = { userId: u.id };
  await safeSet('shop:session', JSON.stringify(state.session), false);
  state.authError = '';
  await logOperation('Connexion', `${u.username} s'est connecté`);
  render();
}

async function logout() {
  const u = currentUser();
  if (u) await logOperation('Déconnexion', `${u.username} s'est déconnecté`);
  state.session = null;
  await safeDelete('shop:session', false);
  render();
}

/* ---------------- Init ---------------- */
// Parses a stored entry safely — one corrupted or unexpected value must
// never cascade and wipe out other, perfectly valid data (especially the
// user accounts, whose loss would wrongly show the "create admin" screen).
function parseOrDefault(entry, fallback) {
  if (!entry) return fallback;
  if (entry.value && typeof entry.value === 'object') return entry.value;
  try { return JSON.parse(entry.value); }
  catch (e) { console.error('Erreur de lecture des données stockées:', e); return fallback; }
}

async function loadAll() {
  try {
    const [p, cat, c, s, u, pay, log, t, brandingStored, sess, sup, pur, inv, generatedDocs, reportFiltersStored, replenishmentBonsStored, replenishmentConsumedStored, replenishmentConsumedProductsStored, replenishmentSalesFiltersStored, equipmentPurchasesStored, expensesStored, servicesStored, serviceCategoriesStored, equipmentCategoriesStored, expenseCategoriesStored, rechargeAccountsStored, rechargeMarginRateStored, capitalAmountStored] = await Promise.all([
      safeGet('shop:products', true), safeGet('shop:categories', true), safeGet('shop:clients', true), safeGet('shop:sales', true),
      safeGet('shop:users', true), safeGet('shop:payments', true), safeGet('shop:oplog', true),
      safeGet('shop:theme-pref', false), safeGet('shop:branding', false), safeGet('shop:session', false),
      safeGet('shop:suppliers', true), safeGet('shop:purchases', true), safeGet('shop:invoices', true), safeGet('shop:generated-documents', true), safeGet('shop:report-filters', false), safeGet('shop:replenishment-bons', true), safeGet('shop:replenishment-consumed-sales', true), safeGet('shop:replenishment-consumed-products', true), safeGet('shop:replenishment-sales-filters', false), safeGet('shop:equipment-purchases', true), safeGet('shop:expenses', true), safeGet('shop:services', true), safeGet('shop:service-categories', true), safeGet('shop:equipment-categories', true), safeGet('shop:expense-categories', true), safeGet('shop:recharge-accounts', true), safeGet('shop:recharge-margin-rate', false), safeGet('shop:capital-amount', false),
    ]);
    const isFreshProducts = !p;
    state.products = parseOrDefault(p, null) || seedProducts();
    state.categories = Array.from(new Set([...(parseOrDefault(cat, []) || []), ...CATEGORIES, ...state.products.map(product => product.category).filter(Boolean)]));
    state.clients = parseOrDefault(c, null) || seedClients();
    state.sales = parseOrDefault(s, []);
    state.users = parseOrDefault(u, []);
    state.users.forEach(migrateUserPrivileges);
    state.payments = parseOrDefault(pay, []);
    state.oplog = parseOrDefault(log, []);
    state.suppliers = parseOrDefault(sup, []);
    state.purchases = parseOrDefault(pur, null) || (isFreshProducts ? seedPurchasesFor(state.products) : []);
    state.invoices = parseOrDefault(inv, []);
    state.equipmentPurchases = parseOrDefault(equipmentPurchasesStored, []) || [];
    state.expenses = parseOrDefault(expensesStored, []) || [];
    state.services = parseOrDefault(servicesStored, []) || [];
    state.serviceCategories = parseOrDefault(serviceCategoriesStored, null) || [...SERVICE_CATEGORIES];
    state.serviceCategories = Array.from(new Set([...state.serviceCategories, ...state.services.map(s => s.category).filter(Boolean)]));
    state.equipmentCategories = parseOrDefault(equipmentCategoriesStored, null) || [...EQUIPMENT_CATEGORIES];
    state.expenseCategories = parseOrDefault(expenseCategoriesStored, null) || [...EXPENSE_CATEGORIES];
    state.rechargeAccounts = parseOrDefault(rechargeAccountsStored, []) || [];
    state.rechargeMarginRate = Math.max(0, Number(rechargeMarginRateStored?.value ?? 6.5) || 0);
    state.capitalAmount = Math.max(0, Number(capitalAmountStored?.value ?? 0) || 0);
    state.generatedDocuments = parseOrDefault(generatedDocs, []) || [];
    state.replenishmentBons = parseOrDefault(replenishmentBonsStored, []) || [];
    state.replenishmentConsumedSaleIds = parseOrDefault(replenishmentConsumedStored, []) || [];
    state.replenishmentConsumedProductIds = parseOrDefault(replenishmentConsumedProductsStored, []) || [];
    const storedReplenishmentSalesFilters = parseOrDefault(replenishmentSalesFiltersStored, null);
    if (storedReplenishmentSalesFilters && typeof storedReplenishmentSalesFilters === 'object') state.replenishmentSalesFilters = { ...state.replenishmentSalesFilters, ...storedReplenishmentSalesFilters };
    const storedReportFilters = parseOrDefault(reportFiltersStored, null);
    if (storedReportFilters && typeof storedReportFilters === 'object') state.reportFilters = { ...state.reportFilters, ...storedReportFilters };
    state.reportFilters.excludeSaleCategories ||= [];
    state.reportFilters.excludePurchaseCategories ||= [];
    state.reportFilters.excludePurchaseSuppliers ||= [];
    state.theme = t && (t.value === 'light' || t.value === 'dark') ? t.value : 'dark';
    const loadedBranding = parseOrDefault(brandingStored, null);
    if (loadedBranding && typeof loadedBranding === 'object') state.branding = { ...state.branding, ...loadedBranding };
    state.branding = { name: 'PhoneStock', subtitle: 'Gestion boutique', icon: '', companyName: '', companyAddress: '', companyPhone: '', companyEmail: '', companyId: '', ...state.branding };
    migrateSaleNumbers();
    migratePurchaseBonNumbers();
    migrateClientCodes();
    migrateStockLots();
    if (!p) await saveProducts();
    if (!cat) await saveCategories();
    if (!c) await saveClients();
    if (!pur) await savePurchases();
    if (sess) {
      const parsed = parseOrDefault(sess, null);
      if (parsed && state.users.find(x => x.id === parsed.userId)) state.session = parsed;
    }
    console.info('[PhoneStock] Stockage :', hasNativeStorage() ? 'Claude.ai (partagé)' : (typeof indexedDB !== 'undefined' ? 'base de données locale (IndexedDB)' : 'localStorage') + ' — origine : ' + location.origin,
      '· Comptes trouvés :', state.users.length);
  } catch (e) {
    console.error('load error', e);
    if (!state.products.length) state.products = seedProducts();
    if (!state.clients.length) state.clients = seedClients();
  }
  applyTheme();
  state.loaded = true;
  render();
}
// Assigns readable, sequential bon numbers to any sale that predates this feature.
function migrateSaleNumbers() {
  let changed = false;
  const sorted = [...state.sales].sort((a, b) => new Date(a.date) - new Date(b.date));
  let n = 0;
  sorted.forEach(s => { if (s.number) n = Math.max(n, s.number); });
  sorted.forEach(s => { if (!s.number) { n++; s.number = n; changed = true; } });
  if (changed) saveSales();
}
function migratePurchaseBonNumbers() {
  let changed = false;
  const sorted = [...state.purchases].sort((a, b) => new Date(a.date) - new Date(b.date));
  let n = 0;
  sorted.forEach(pu => { const m = /^BA-(\d+)$/.exec(String(pu.bonNumber || '')); if (m) n = Math.max(n, parseInt(m[1], 10)); });
  sorted.forEach(pu => { if (!pu.bonNumber) { n++; pu.bonNumber = 'BA-' + String(n).padStart(4, '0'); changed = true; } });
  if (changed) savePurchases();
}
// Assigns a readable client code (CL-0001…) to any client that predates this feature.
function migrateClientCodes() {
  let changed = false;
  let max = 0;
  state.clients.forEach(c => { const m = /^CL-(\d+)$/.exec(c.clientCode || ''); if (m) max = Math.max(max, parseInt(m[1], 10)); });
  state.clients.forEach(c => { if (!c.clientCode) { max++; c.clientCode = 'CL-' + String(max).padStart(4, '0'); changed = true; } });
  if (changed) saveClients();
}
function getAppName() { return String(state.branding?.name || 'PhoneStock').trim() || 'PhoneStock'; }
function getAppSubtitle() { return String(state.branding?.subtitle || 'Gestion boutique').trim() || 'Gestion boutique'; }
function getAppMark() { return safeImageSrc(state.branding?.icon) ? `<img src="${esc(safeImageSrc(state.branding.icon))}" alt="" class="brand-icon">` : esc(getAppName().slice(0, 2).toUpperCase()); }
function applyAppBranding() {
  document.title = `${getAppName()} — ${getAppSubtitle()}`;
  let link = document.querySelector('link[rel="manifest"]');
  if (!link) { link = document.createElement('link'); link.rel = 'manifest'; document.head.appendChild(link); }
  const icon = safeImageSrc(state.branding?.icon) || '';
  const favicon = document.getElementById('appFavicon'); if (favicon && icon) favicon.href = icon;
  const appleIcon = document.getElementById('appAppleIcon'); if (appleIcon && icon) appleIcon.href = icon;
  link.href = 'data:application/manifest+json,' + encodeURIComponent(JSON.stringify({ name: getAppName(), short_name: getAppName(), start_url: './', display: 'standalone', background_color: '#0b0d10', theme_color: '#0b0d10', icons: icon ? [{ src: icon, sizes: '512x512', type: 'image/png', purpose: 'any maskable' }] : [] }));
}
function applyTheme() { document.body.classList.toggle('theme-light', state.theme === 'light'); }
async function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme();
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.title = state.theme === 'dark' ? 'Mode clair' : 'Mode sombre';
    themeToggle.innerHTML = ICONS[state.theme === 'dark' ? 'sun' : 'moon'];
  }
  await safeSet('shop:theme-pref', state.theme, false);
}

/* ---------------- Navigation ---------------- */
const NAV = [
  { id: 'dashboard', label: 'Tableau de bord', icon: 'dashboard' },
  { id: 'products', label: 'Produits', icon: 'box' },
  { id: 'purchases', label: 'Achats', icon: 'download' },
  { id: 'stock', label: 'Stock', icon: 'layers' },
  { id: 'pos', label: 'Caisse', icon: 'cart' },
  { id: 'services', label: 'Services', icon: 'settings' },
  { id: 'recharges', label: 'Recharges', icon: 'wallet' },
  { id: 'history', label: 'Ventes', icon: 'history' },
  { id: 'equipment', label: 'Équipements', icon: 'box' },
  { id: 'expenses', label: 'Dépenses courantes', icon: 'fileText' },
  { id: 'settings', label: 'Administration', icon: 'settings' },
];

function getVisibleNav() {
  return NAV.filter(n => {
    if (n.id === 'reports') return isAdmin();
    if (n.id === 'purchases') return isAdmin();
    if (n.id === 'suppliers' || n.id === 'products' || n.id === 'stock') return hasPriv('products', 'view');
    if (n.id === 'clients') return hasPriv('clients', 'view');
    return true;
  });
}

function setView(v) {
  if (v === state.view) { state.sidebarOpen = false; render(); return; }
  try { history.pushState({ view: v }, '', `#${encodeURIComponent(v)}`); } catch (e) {}
  state.view = v; state.sidebarOpen = false; refreshViewShell();
}
function bindBrowserNavigation() {
  if (window.__phoneStockHistoryBound) return;
  window.__phoneStockHistoryBound = true;
  const validViews = new Set(NAV.map(item => item.id));
  const hashView = decodeURIComponent(location.hash.replace(/^#/, ''));
  if (hashView && validViews.has(hashView)) state.view = hashView;
  else { try { history.replaceState({ view: state.view }, '', `${location.pathname}${location.search}#${state.view}`); } catch (e) {} }
  window.addEventListener('popstate', event => {
    const fromState = event.state && event.state.view;
    const fromHash = decodeURIComponent(location.hash.replace(/^#/, ''));
    const nextView = validViews.has(fromState) ? fromState : (validViews.has(fromHash) ? fromHash : 'dashboard');
    state.view = nextView; state.sidebarOpen = false; refreshViewShell();
  });
}

function refreshViewShell() {
  const root = document.getElementById('root');
  const content = document.getElementById('content');
  if (!root || !content || !state.loaded || !currentUser()) { render(); return; }
  const visibleNav = getVisibleNav();
  if (!visibleNav.find(item => item.id === state.view)) { state.view = visibleNav[0]?.id || 'dashboard'; }
  root.querySelector('.sidebar')?.classList.remove('open');
  root.querySelector('.sidebar-backdrop')?.remove();
  root.querySelectorAll('[data-nav]').forEach(button => button.classList.toggle('active', button.dataset.nav === state.view));
  const title = root.querySelector('.topbar h1');
  if (title) title.textContent = NAV.find(item => item.id === state.view)?.label || '';
  const actions = root.querySelector('.topbar-actions');
  if (actions) {
    actions.innerHTML = `${topbarAction()}${languageSelectorHTML()}<button class="btn btn-sm icon-btn theme-toggle" id="themeToggle" title="${state.theme === 'dark' ? 'Mode clair' : 'Mode sombre'}">${ICONS[state.theme === 'dark' ? 'sun' : 'moon']}</button>`;
    applyLanguage();
    translateRenderedInterface(actions);
    bindLanguageSelector();
  }
  refreshContent();
}

/* ---------------- Root render ---------------- */
function render() {
  applyAppBranding();
  const root = document.getElementById('root');
  if (!state.loaded) {
    root.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100vh;color:var(--muted);font-family:var(--font-mono);font-size:13px;">Chargement…</div>`;
    applyLanguage();
    translateRenderedInterface(root);
    bindLanguageSelector();
    return;
  }
  if (state.users.length === 0) { root.innerHTML = renderSetup(); applyLanguage(); translateRenderedInterface(root); bindLanguageSelector(); bindAuthEvents(); return; }
  if (!currentUser()) { root.innerHTML = renderLogin(); applyLanguage(); translateRenderedInterface(root); bindLanguageSelector(); bindAuthEvents(); return; }

  const visibleNav = getVisibleNav();
  if (!visibleNav.find(n => n.id === state.view)) { state.view = visibleNav[0] ? visibleNav[0].id : 'dashboard'; }
  const low = lowStockProducts();
  const u = currentUser();
  root.innerHTML = `
    ${state.sidebarOpen ? `<div class="sidebar-backdrop" id="sidebarBackdrop"></div>` : ''}
    <div class="sidebar ${state.sidebarOpen ? 'open' : ''}">
      <div class="brand">
        <div class="brand-mark">${getAppMark()}</div>
        <div>
          <div class="brand-name">${esc(getAppName())}</div>
          <div class="brand-sub">${esc(getAppSubtitle())}</div>
        </div>
      </div>
      <nav class="navlist">
        ${visibleNav.map(n => `
          <button class="navitem ${state.view === n.id ? 'active' : ''}" data-nav="${n.id}">
            ${ICONS[n.icon]}
            <span>${n.label}</span>
            ${n.id === 'stock' && low.length && hasPriv('products', 'view') ? `<span class="nav-badge">${low.length}</span>` : ''}
          </button>
        `).join('')}
      </nav>
      <div class="sidebar-footer">
        <div class="user-chip">
          <div class="user-avatar">${esc(u.name || u.username).slice(0, 1).toUpperCase()}</div>
          <div class="user-meta">
            <div class="uname">${esc(u.name || u.username)}</div>
            <div class="urole">${u.role === 'admin' ? 'Administrateur' : 'Vendeur'}</div>
          </div>
        </div>
        <button class="navitem" id="logoutBtn">${ICONS.logout}<span>Déconnexion</span></button>
      </div>
    </div>
    <main>
      <div class="topbar">
        <div style="display:flex;align-items:center;gap:12px;">
          <button class="menu-toggle" id="menuToggle">${ICONS.menu}</button>
          <div>
            <h1>${NAV.find(n => n.id === state.view).label}</h1>
            <div class="sub">${new Date().toLocaleDateString(currentLocale() === 'ar' ? 'ar-MA' : 'fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</div>
          </div>
        </div>
        <div class="topbar-actions">
          ${topbarAction()}
          ${languageSelectorHTML()}
          <button class="btn btn-sm icon-btn theme-toggle" id="themeToggle" title="${state.theme === 'dark' ? 'Mode clair' : 'Mode sombre'}">
            ${ICONS[state.theme === 'dark' ? 'sun' : 'moon']}
          </button>
        </div>
      </div>
      <div class="content" id="content">${renderView()}</div>
    </main>
    ${state.editingProduct ? renderProductModal() : ''}
    ${state.bulkProductModalOpen ? renderBulkProductModal() : ''}
    ${state.bulkExpenseModalOpen ? renderBulkExpenseModal() : ''}
    ${state.bulkEquipmentModalOpen ? renderBulkEquipmentModal() : ''}
    ${state.bulkSaleModalOpen ? renderBulkSaleModal() : ''}
    ${state.editingClient ? renderClientModal() : ''}
    ${state.editingUser ? renderUserModal() : ''}
    ${(state.paymentClientId || state.editingPayment) ? renderPaymentModal() : ''}
    ${state.receiptSale ? renderReceiptModal() : ''}
    ${state.editingSale ? renderSaleEditModal() : ''}
    ${state.categoryManagerOpen ? renderCategoryManagerModal() : ''}
    ${state.serviceSaleModalOpen ? renderServiceSaleModal() : ''}
    ${state.rechargeAccountModalOpen ? renderRechargeAccountModal() : ''}
    ${state.rechargeDepositModalOpen ? renderRechargeDepositModal() : ''}
    ${state.rechargeSaleModalOpen ? renderRechargeSaleModal() : ''}
    ${state.editingService ? renderServiceModal() : ''}
    ${state.invoiceDraft !== null ? renderInvoiceModal() : ''}
    ${state.editingSupplier ? renderSupplierModal() : ''}
    ${state.editingPurchase && !state.editingProduct ? renderPurchaseModal() : ''}
    ${state.showClearStorageModal ? renderClearStorageModal() : ''}
  `;
  applyLanguage();
  translateRenderedInterface(root);
  bindLanguageSelector();
  bindEvents();
}

function storageDiagnosticLine() {
  const mode = hasNativeStorage()
    ? 'Claude.ai (stockage partagé)'
    : (typeof indexedDB !== 'undefined' ? 'base de données locale (IndexedDB)' : 'stockage local (localStorage)') + ' — ' + location.origin;
  return `<div class="muted" style="font-size:10.5px;text-align:center;margin-top:16px;font-family:var(--font-mono);">Stockage : ${esc(mode)}</div>`;
}

function themeToggleFloating() {
  return `<button class="btn btn-sm icon-btn theme-toggle-floating" id="themeToggle" title="${state.theme === 'dark' ? 'Mode clair' : 'Mode sombre'}" style="position:fixed;top:16px;right:16px;z-index:10;">${ICONS[state.theme === 'dark' ? 'sun' : 'moon']}</button>`;
}

function renderSetup() {
  return `
  ${themeToggleFloating()}
  <div style="position:fixed;top:16px;left:16px;z-index:10;">${languageSelectorHTML()}</div>
  <div class="auth-wrap">
    <div class="auth-card">
      <div class="auth-logo">
        <div class="brand-mark">PS</div>
        <h1>Bienvenue sur PhoneStock</h1>
        <p>Créez le compte administrateur pour démarrer</p>
      </div>
      ${state.authError ? `<div class="auth-error">${esc(state.authError)}</div>` : ''}
      <div class="field"><label>Votre nom</label><input id="su_name" placeholder="Nom complet"></div>
      <div class="field"><label>Identifiant</label><input id="su_username" placeholder="admin"></div>
      <div class="field"><label>Mot de passe</label><input id="su_pass" type="password" placeholder="••••••••"></div>
      <div class="field"><label>Confirmer le mot de passe</label><input id="su_pass2" type="password" placeholder="••••••••"></div>
      <button class="btn btn-primary" id="setupSubmit" style="width:100%;justify-content:center;padding:11px 0;margin-top:6px;">Créer le compte administrateur</button>
      ${storageDiagnosticLine()}
    </div>
  </div>`;
}

function renderLogin() {
  return `
  ${themeToggleFloating()}
  <div style="position:fixed;top:16px;left:16px;z-index:10;">${languageSelectorHTML()}</div>
  <div class="auth-wrap">
    <div class="auth-card">
      <div class="auth-logo">
        <div class="brand-mark">PS</div>
        <h1>PhoneStock</h1>
        <p>Connectez-vous pour accéder à la boutique</p>
      </div>
      ${state.authError ? `<div class="auth-error">${esc(state.authError)}</div>` : ''}
      <div class="field"><label>Identifiant</label><input id="li_username" placeholder="Identifiant"></div>
      <div class="field"><label>Mot de passe</label><input id="li_pass" type="password" placeholder="••••••••"></div>
      <button class="btn btn-primary" id="loginSubmit" style="width:100%;justify-content:center;padding:11px 0;margin-top:6px;">Se connecter</button>
      ${storageDiagnosticLine()}
    </div>
  </div>`;
}

function bindAuthEvents() {
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  const setupSubmit = document.getElementById('setupSubmit');
  if (setupSubmit) setupSubmit.addEventListener('click', async () => {
    const name = document.getElementById('su_name').value;
    const username = document.getElementById('su_username').value.trim();
    const pass = document.getElementById('su_pass').value;
    const pass2 = document.getElementById('su_pass2').value;
    if (!username || !pass) { state.authError = 'Identifiant et mot de passe requis.'; render(); return; }
    if (pass !== pass2) { state.authError = 'Les mots de passe ne correspondent pas.'; render(); return; }
    if (pass.length < 4) { state.authError = 'Le mot de passe doit contenir au moins 4 caractères.'; render(); return; }
    await setupAdmin(username, name, pass);
  });
  const loginSubmit = document.getElementById('loginSubmit');
  if (loginSubmit) {
    const doLogin = () => login(document.getElementById('li_username').value, document.getElementById('li_pass').value);
    loginSubmit.addEventListener('click', doLogin);
    const passField = document.getElementById('li_pass');
    if (passField) passField.addEventListener('keydown', (e) => { if (e.key === 'Enter') doLogin(); });
  }
}

function topbarAction() {
  if (state.view === 'products' && hasPriv('products', 'create')) return `<button class="btn" id="scanProductBtn">${ICONS.scan}Scanner</button><button class="btn" id="bulkProductsBtn">${ICONS.plus}Saisir en lot</button><button class="btn btn-primary" id="addProductBtn">${ICONS.plus}Nouveau produit</button>`;
  if (state.view === 'suppliers' && hasPriv('products', 'create')) return `<button class="btn btn-primary" id="addSupplierBtn">${ICONS.plus}Nouveau fournisseur</button>`;
  if (state.view === 'purchases' && isAdmin() && hasPriv('products', 'create')) return `<button class="btn btn-primary" id="addPurchaseBtn">${ICONS.plus}Nouvel achat</button>`;
  if (state.view === 'services') return `<button class="btn btn-primary" id="addServiceBtn">${ICONS.plus}Nouveau service</button>`;
  if (state.view === 'recharges') return `<button class="btn btn-primary" id="addRechargeAccountBtn">${ICONS.plus}Nouveau compte</button>`;
  if (state.view === 'equipment') return `<span class="muted">Gestion des équipements</span>`;
  if (state.view === 'expenses') return `<span class="muted">Gestion des dépenses courantes</span>`;
  if (state.view === 'pos') return `<input class="search-input topbar-search" id="posSearch" placeholder="Rechercher un produit, une catégorie ou Code P…" value="${esc(state.posSearch)}"><button class="btn" id="scanPosBtn">${ICONS.scan}Scanner</button><button class="btn" id="bulkSaleBtn">${ICONS.plus}Saisir en lot</button>`;
  if (state.view === 'clients' && hasPriv('clients', 'create')) return `<button class="btn btn-primary" id="addClientBtn">${ICONS.plus}Nouveau client</button>`;
  if (state.view === 'history') return `<button class="btn" id="openInvoiceBtn">${ICONS.fileText}Facture par période</button>`;
  return '';
}

function renderView() {
  switch (state.view) {
    case 'dashboard': return renderDashboard();
    case 'suppliers': return renderSuppliers();
    case 'products': return renderProducts();
    case 'stock': return renderStock();
    case 'purchases': return renderPurchases();
    case 'pos': return renderPOS();
    case 'services': return renderServices();
    case 'recharges': return renderRecharges();
    case 'equipment': return financeViewFrom('equipment');
    case 'expenses': return financeViewFrom('expenses');
    case 'clients': return state.ledgerClientId ? renderClientLedger() : renderClients();
    case 'history': return renderHistory();
    case 'reports': return renderMarginReports();
    case 'settings': return renderSettings();
    default: return '';
  }
}

/* ---------------- Dashboard ---------------- */
function renderDashboard() {
  const dashboardFrom = state.dashboardSalesFrom || localDateInputValue();
  const dashboardTo = state.dashboardSalesTo || dashboardFrom;
  const ts = dashboardSales();
  const dashboardSummary = dashboardSalesSummary(ts);
  const low = lowStockProducts();
  const best = bestSellers(5, ts);
  const todayProductSales = new Map();
  ts.forEach(sale => (sale.items || []).forEach(item => {
    const product = state.products.find(p => p.id === item.productId);
    const key = item.productId || `name:${item.name || 'Produit'}`;
    const current = todayProductSales.get(key) || { product, name: item.name || product?.name || 'Produit', category: product?.category || '—', qty: 0, total: 0 };
    const qty = Number(item.qty) || 0;
    current.qty += qty;
    current.total += qty * (Number(item.price) || 0);
    todayProductSales.set(key, current);
  }));
  const todaySalesRows = [...todayProductSales.values()].sort((a, b) => b.total - a.total);
  const stockValue = totalStockValue();
  const totalUnits = state.products.reduce((s, p) => s + productStock(p.id), 0);
  const canViewCosts = hasPriv('products', 'viewCosts');
  const chartMetric = state.dashboardChartMetric || 'count';
  const chartSeries = dashboardDailySeries(ts, chartMetric);
  const chartMax = Math.max(1, ...chartSeries.map(point => point.value));
  const chartLabel = chartMetric === 'count' ? 'Nombre de ventes' : chartMetric === 'revenue' ? "Chiffre d'affaires" : 'Marge';

  return `
    <div class="card dashboard-period-card"><div><strong>Période du tableau de bord</strong><span class="muted">Choisissez les ventes à analyser</span></div><div class="dashboard-period-controls"><label>Du <input type="date" id="dashboardSalesFrom" value="${esc(dashboardFrom)}"></label><label>Au <input type="date" id="dashboardSalesTo" value="${esc(dashboardTo)}"></label></div></div>
    <div class="grid dash-stats" style="margin-bottom:20px;">
      <div class="card stat-card">
        <div class="stat-label">Ventes du ${fmtDate(`${dashboardFrom}T12:00:00`)}${dashboardFrom !== dashboardTo ? ` au ${fmtDate(`${dashboardTo}T12:00:00`)}` : ''}</div>
        <div class="stat-value lcd">${ts.length}</div>
        <div class="stat-delta">${dashboardSummary.units} unité${dashboardSummary.units !== 1 ? 's' : ''} · ${dashboardSummary.products} produit${dashboardSummary.products !== 1 ? 's' : ''}</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">Chiffre d'affaires du ${fmtDate(`${dashboardFrom}T12:00:00`)}${dashboardFrom !== dashboardTo ? ` au ${fmtDate(`${dashboardTo}T12:00:00`)}` : ''}</div>
        <div class="stat-value lcd">${money(revenueOf(ts))} <span style="font-size:13px;color:var(--muted)">DH</span></div>
        <div class="stat-delta">${canViewCosts ? `Marge après remise : ${money(dashboardSummary.margin)} DH<br>` : ''}Remise : ${money(dashboardSummary.discount)} DH</div>
      </div>
      ${canViewCosts ? `
      <div class="card stat-card">
        <div class="stat-label">Valeur du stock</div>
        <div class="stat-value">${money(stockValue)} <span style="font-size:13px;color:var(--muted)">DH</span></div>
        <div class="stat-delta">${totalUnits} unités en stock</div>
      </div>` : `
      <div class="card stat-card">
        <div class="stat-label">Unités en stock</div>
        <div class="stat-value">${totalUnits}</div>
        <div class="stat-delta">tous produits confondus</div>
      </div>`}
      <button type="button" class="card stat-card dashboard-low-stock-card" id="dashboardLowStockBtn" title="Ouvrir les Réapprovisionnements">
        <div class="stat-label">Alertes stock bas</div>
        <div class="stat-value" style="color:${low.length ? 'var(--danger)' : 'var(--text)'}">${low.length}</div>
        <div class="stat-delta">produit${low.length !== 1 ? 's' : ''} à réapprovisionner</div>
      </button>
    </div>

    <div class="grid dash-main dashboard-sales-best-grid" style="align-items:start;margin-bottom:20px;"><div class="card dashboard-today-sales" style="padding:18px;">
      <div style="font-family:var(--font-display);font-weight:700;font-size:14.5px;margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;">
        <span>Ventes de la période</span><span class="muted mono" style="font-size:12px;">${todaySalesRows.length} produit${todaySalesRows.length !== 1 ? 's' : ''} · ${money(revenueOf(ts))} DH</span>
      </div>
      ${todaySalesRows.length === 0 ? `<div class="empty-state" style="padding:24px 0;"><div class="title">Aucune vente sur cette période</div><div>Les produits vendus du ${fmtDate(`${dashboardFrom}T12:00:00`)} au ${fmtDate(`${dashboardTo}T12:00:00`)} apparaîtront ici.</div></div>` : `
      <table class="rcard">
        <thead><tr><th>Produit</th><th>Catégorie</th><th style="text-align:right;">Qté vendue</th><th style="text-align:right;">Total</th></tr></thead>
        <tbody>${todaySalesRows.map(row => `<tr><td data-label="Produit"><strong>${esc(row.name)}</strong></td><td data-label="Catégorie" class="muted">${esc(row.category)}</td><td data-label="Qté vendue" class="mono" style="text-align:right;">${row.qty}</td><td data-label="Total" class="price" style="text-align:right;">${money(row.total)} DH</td></tr>`).join('')}</tbody>
        <tfoot><tr><th colspan="2" style="text-align:right;">Total période</th><th style="text-align:right;">${todaySalesRows.reduce((sum, row) => sum + row.qty, 0)}</th><th style="text-align:right;">${money(revenueOf(ts))} DH</th></tr></tfoot>
      </table>`}
    </div>

      <div class="card" style="padding:18px;">
        <div style="font-family:var(--font-display);font-weight:700;font-size:14.5px;margin-bottom:14px;">Meilleures ventes</div>
        ${best.length === 0 ? `<div class="empty-state" style="padding:24px 0;"><div class="title">Pas encore de ventes</div><div>Les produits les plus vendus apparaîtront ici.</div></div>` : `
        <table class="rcard">
          <thead><tr><th>Produit</th><th>Catégorie</th><th style="text-align:right;">Quantité vendue</th></tr></thead>
          <tbody>
            ${best.map(b => `
              <tr>
                <td data-label="Produit"><strong>${esc(b.product.name)}</strong> <span class="muted">${esc(b.product.model)}</span></td>
                <td data-label="Catégorie" class="muted">${esc(b.product.category)}</td>
                <td data-label="Qté vendue" class="mono">${b.qty}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>`}
      </div>

      <div class="card" style="padding:18px;">
        <div style="font-family:var(--font-display);font-weight:700;font-size:14.5px;margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;">
          <span>Stock bas</span>
          ${low.length ? `<span class="pill pill-danger">${low.length}</span>` : ''}
        </div>
        ${low.length === 0 ? `<div class="empty-state" style="padding:24px 0;"><div class="title">Tout est en ordre</div><div>Aucun produit sous le seuil d'alerte.</div></div>` : `
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${low.map(p => `
            <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:9px;border-bottom:1px solid var(--border);">
              <div>
                <div style="font-size:13px;font-weight:600;">${esc(p.name)}</div>
                <div class="muted" style="font-size:11.5px;">${esc(p.model)}</div>
              </div>
              <span class="pill ${stockStatus(p) === 'danger' ? 'pill-danger' : 'pill-warn'}">${productStock(p.id)} restant${productStock(p.id) !== 1 ? 's' : ''}</span>
            </div>
          `).join('')}
        </div>`}
      </div>
    </div>
    <div class="card dashboard-chart-card"><div class="dashboard-chart-header"><div><strong>Évolution des ventes par jour</strong><span class="muted">${chartLabel} · ${fmtDate(`${dashboardFrom}T12:00:00`)} au ${fmtDate(`${dashboardTo}T12:00:00`)}</span></div><div class="dashboard-chart-buttons"><button type="button" class="btn btn-sm ${chartMetric === 'count' ? 'btn-primary' : ''}" data-dashboard-chart="count">Nb de vente</button><button type="button" class="btn btn-sm ${chartMetric === 'revenue' ? 'btn-primary' : ''}" data-dashboard-chart="revenue">Chiffre d'affaire</button><button type="button" class="btn btn-sm ${chartMetric === 'margin' ? 'btn-primary' : ''}" data-dashboard-chart="margin">Marge</button></div></div><div class="dashboard-chart" role="img" aria-label="${esc(chartLabel)} par jour">${chartSeries.map(point => `<div class="dashboard-bar-wrap" title="${fmtDate(`${point.day}T12:00:00`)} : ${chartMetric === 'count' ? point.value : money(point.value) + ' DH'}"><div class="dashboard-bar" style="height:${Math.max(3, point.value / chartMax * 100)}%"></div><span>${new Date(`${point.day}T12:00:00`).toLocaleDateString('fr-FR',{day:'2-digit',month:'2-digit'})}</span></div>`).join('')}</div></div>
  `;
}

/* ---------------- Products ---------------- */

function compareSortValues(a, b, direction = 'asc') {
  const dir = direction === 'desc' ? -1 : 1;
  if (typeof a === 'number' && typeof b === 'number') return (a - b) * dir;
  const na = Number(a); const nb = Number(b);
  if (Number.isFinite(na) && Number.isFinite(nb) && String(a).trim() !== '' && String(b).trim() !== '') return (na - nb) * dir;
  return String(a ?? '').localeCompare(String(b ?? ''), 'fr', { numeric: true, sensitivity: 'base' }) * dir;
}
function sortIndicator(sort, key) {
  return sort.key === key ? (sort.dir === 'asc' ? ' ▲' : ' ▼') : '';
}
function sortButton(label, target, key, sort) {
  return `<button type="button" class="sort-btn" data-sort-target="${target}" data-sort-key="${key}" title="Trier ${esc(label)}">${esc(label)}${sortIndicator(sort, key)}</button>`;
}
function applyProductSort(list) {
  const sort = state.productSort || { key: 'name', dir: 'asc' };
  return [...list].sort((a, b) => {
    const value = key => key === 'name' ? a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' }) :
      key === 'category' ? String(a.category || '').localeCompare(String(b.category || ''), 'fr', { sensitivity: 'base' }) :
      key === 'sku' ? String(a.sku || '').localeCompare(String(b.sku || ''), 'fr', { numeric: true, sensitivity: 'base' }) :
      productStock(a.id) - productStock(b.id);
    const result = value(sort.key);
    return (sort.dir === 'desc' ? -1 : 1) * (typeof result === 'number' ? result : result);
  });
}
function applyStockSort(rows) {
  const sort = state.stockSort || { key: 'date', dir: 'desc' };
  return [...rows].sort((a, b) => {
    let av; let bv;
    if (sort.key === 'name') { av = a.name; bv = b.name; }
    else if (sort.key === 'category') { av = a.category; bv = b.category; }
    else if (sort.key === 'sku') { av = a.sku; bv = b.sku; }
    else if (sort.key === 'qty') { av = a.qty; bv = b.qty; }
    else if (sort.key === 'unitCost') { av = a.unitCost; bv = b.unitCost; }
    else if (sort.key === 'unitPrice') { av = a.unitPrice; bv = b.unitPrice; }
    else if (sort.key === 'stock') { av = a.stockCurrent; bv = b.stockCurrent; }
    else if (sort.key === 'margin') { av = a.unitPrice - a.unitCost; bv = b.unitPrice - b.unitCost; }
    else { av = new Date(a.date).getTime(); bv = new Date(b.date).getTime(); }
    return compareSortValues(av, bv, sort.dir);
  });
}

function renderProducts() {
  const q = normalizeSearchText(state.productSearch);
  const filtered = state.products.filter(p => {
    const name = normalizeSearchText(p.name);
    const brand = normalizeSearchText(p.brand);
    const model = normalizeSearchText(p.model);
    const sku = normalizeSearchText(p.sku);
    return !q || name.includes(q) || brand.includes(q) || model.includes(q) || sku.includes(q);
  });
  const list = applyProductSort(filtered);
  const sort = state.productSort || { key: 'name', dir: 'asc' };
  const canEdit = hasPriv('products', 'edit');
  const canDelete = hasPriv('products', 'delete');
  const showActionsCol = canEdit || canDelete;
  return `
    <div class="toolbar">
      <input class="search-input" id="productSearch" placeholder="Rechercher un produit, marque, modèle ou Code P…" value="${esc(state.productSearch)}">
      <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;">
        ${isAdmin() ? '<button class="btn btn-sm" id="exportProductsBtn">Exporter Excel</button>' : ''}
        <button class="btn btn-sm" id="importProductsBtn">Importer Excel</button>
        <input type="file" id="productsExcelFile" accept=".xlsx,.xls" hidden>
        <div class="muted mono" style="font-size:12px;">${list.length} produit${list.length !== 1 ? 's' : ''}</div>
      </div>
    </div>
    <div class="card">
      ${list.length === 0 ? emptyState('box', 'Aucun produit', 'Ajoutez votre premier produit pour commencer.') : `
      <table class="rcard">
        <thead><tr>
          <th>${sortButton('Produit', 'products', 'name', sort)}</th><th>${sortButton('Catégorie', 'products', 'category', sort)}</th><th>${sortButton('Code P', 'products', 'sku', sort)}</th>
          <th style="text-align:right;">${sortButton('Stock', 'products', 'stock', sort)}</th>${showActionsCol ? '<th></th>' : ''}
        </tr></thead>
        <tbody>
          ${list.map(p => `
            <tr>
              <td data-label="Produit" ${p.archived ? 'style="opacity:.6;"' : ''}>
                <div style="display:flex;align-items:center;gap:9px;">
                  ${safeImageSrc(p.photo) ? `<img class="product-thumb" src="${esc(safeImageSrc(p.photo))}" alt="">` : `<div class="product-thumb-placeholder">${ICONS.box}</div>`}
                  <div><strong>${esc(p.name)}</strong>${p.archived ? '<span class="pill pill-warn" style="margin-left:6px;">Archivé</span>' : ''}<div class="muted" style="font-size:11.5px;">${esc(p.brand)} · ${esc(p.model)}</div></div>
                </div>
              </td>
              <td data-label="Catégorie" class="muted">${esc(p.category)}</td>
              <td data-label="Code P" class="mono muted">${esc(p.sku)}</td>
              <td data-label="Stock"><span class="pill ${stockStatus(p) === 'ok' ? 'pill-ok' : stockStatus(p) === 'warn' ? 'pill-warn' : 'pill-danger'}">${productStock(p.id)}</span></td>
              ${showActionsCol ? `<td data-label="" class="row-actions">
                ${canEdit ? `<button type="button" class="btn btn-sm icon-btn" data-edit-product="${p.id}" title="Modifier le produit" aria-label="Modifier le produit">${ICONS.edit}</button>` : ''}
                ${canEdit ? `<button type="button" class="btn btn-sm icon-btn" data-toggle-archive-product="${p.id}" title="${p.archived ? 'Réactiver' : 'Archiver'} le produit" aria-label="${p.archived ? 'Réactiver' : 'Archiver'} le produit">${ICONS.archive}</button>` : ''}
                ${canDelete ? `<button type="button" class="btn btn-sm icon-btn btn-danger" data-delete-product="${p.id}" title="Supprimer le produit" aria-label="Supprimer le produit">${ICONS.trash}</button>` : ''}
              </td>` : ''}
            </tr>
          `).join('')}
        </tbody>
      </table>`}
    </div>
  `;
}

function emptyState(icon, title, sub) {
  return `<div class="empty-state">${ICONS[icon] || ICONS.empty}<div class="title">${title}</div><div>${sub}</div></div>`;
}

// Resizes/compresses a chosen photo to a small JPEG data URL before storing
// it — keeps the local database compact even with many product photos.
function compressImageFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const maxDim = 480;
        let { width, height } = img;
        if (width > height && width > maxDim) { height = Math.round(height * (maxDim / width)); width = maxDim; }
        else if (height > maxDim) { width = Math.round(width * (maxDim / height)); height = maxDim; }
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        canvas.getContext('2d').drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', 0.72));
      };
      img.onerror = () => reject(new Error('image invalide'));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(new Error('lecture impossible'));
    reader.readAsDataURL(file);
  });
}

// Rebuilds only the photo preview + action buttons inside the product
// modal — never a full render(), so whatever the person has already typed
// into the other fields (name, price, stock…) is never lost.
function refreshPhotoPreview() {
  const preview = document.querySelector('#productModalOverlay .product-photo-preview');
  const actions = document.querySelector('#productModalOverlay .product-photo-actions');
  if (!preview || !actions) return;
  const photoData = state.productPhotoDraft;
  preview.innerHTML = safeImageSrc(photoData) ? `<img src="${esc(safeImageSrc(photoData))}" alt="">` : `<div class="product-photo-placeholder">${ICONS.box}</div>`;
  actions.innerHTML = `
    <button type="button" class="btn btn-sm" id="takePhotoBtn">${ICONS.scan}Prendre une photo</button>
    <button type="button" class="btn btn-sm" id="choosePhotoBtn">Choisir un fichier</button>
    ${photoData ? `<button type="button" class="btn btn-sm btn-danger" id="removePhotoBtn">Supprimer</button>` : ''}
    <input type="file" accept="image/*" capture="environment" id="f_photo_camera" style="display:none;">
    <input type="file" accept="image/*" id="f_photo_file" style="display:none;">
  `;
  bindPhotoPickerEvents();
}

function bindPhotoPickerEvents() {
  const takeBtn = document.getElementById('takePhotoBtn');
  const chooseBtn = document.getElementById('choosePhotoBtn');
  const removeBtn = document.getElementById('removePhotoBtn');
  const cameraInput = document.getElementById('f_photo_camera');
  const fileInput = document.getElementById('f_photo_file');
  if (takeBtn && cameraInput) takeBtn.addEventListener('click', () => cameraInput.click());
  if (chooseBtn && fileInput) chooseBtn.addEventListener('click', () => fileInput.click());
  if (removeBtn) removeBtn.addEventListener('click', () => { state.productPhotoDraft = null; refreshPhotoPreview(); });
  [cameraInput, fileInput].forEach(inp => {
    if (!inp) return;
    inp.addEventListener('change', async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      try {
        state.productPhotoDraft = await compressImageFile(file);
        refreshPhotoPreview();
      } catch (err) { console.error(err); toast("Impossible de charger cette image"); }
    });
  });
}

function updateBulkProductSummary() {
  const lines = state.bulkProductLines || [];
  let valid = 0, units = 0, cost = 0, sale = 0;
  lines.forEach(line => {
    const qty = Math.max(0, parseInt(document.querySelector(`[data-line="${line.id}"][data-bulk="qty"]`)?.value ?? line.qty, 10) || 0);
    const buy = Math.max(0, parseFloat(document.querySelector(`[data-line="${line.id}"][data-bulk="cost"]`)?.value ?? line.cost) || 0);
    const sell = Math.max(0, parseFloat(document.querySelector(`[data-line="${line.id}"][data-bulk="sell"]`)?.value ?? line.sell) || 0);
    if (qty > 0) valid += 1;
    units += qty; cost += qty * buy; sale += qty * sell;
  });
  const values = { bulkSummaryLines: valid, bulkSummaryQty: units, bulkSummaryCost: `${money(cost)} DH`, bulkSummarySale: `${money(sale)} DH`, bulkSummaryMargin: `${money(sale-cost)} DH` };
  Object.entries(values).forEach(([id,value]) => { const el=document.getElementById(id); if(el) el.textContent=value; });
}
function renderBulkProductModal() {
  const lines = state.bulkProductLines || [{id:uid('bp'),name:'',brand:'',model:'',category:'Accessoires',sku:'',qty:'',cost:'',sell:''}];
  const supplierId = state.bulkPurchaseSupplierId || '';
  const date = state.bulkPurchaseDate || localDateInputValue();
  const time = state.bulkPurchaseTime || localTimeInputValue();
  const bon = state.bulkPurchaseBonNumber || '';
  const cats = getCategories();
  return `<div class="modal-overlay" role="dialog" aria-modal="true" id="bulkProductModalOverlay"><div class="modal bulk-product-modal"><h2>Saisir des produits en lot</h2><div class="bulk-purchase-meta"><div class="field"><label>Fournisseur</label><select id="bulk_supplier"><option value="">Non spécifié</option>${state.suppliers.map(s=>`<option value="${s.id}" ${supplierId===s.id?'selected':''}>${esc(s.name)}</option>`).join('')}</select></div><div class="field"><label>Date</label><input id="bulk_date" type="date" value="${date}"></div><div class="field"><label>Heure</label><input id="bulk_time" type="time" value="${time}"></div><div class="field"><label>N Bon</label><input id="bulk_bon" maxlength="40" placeholder="BA-0001" value="${esc(bon)}"></div></div><div class="field"><label>Produits reçus</label><div id="bulkProductLines">${lines.map(l=>`<div class="bulk-product-line" data-bulk-line="${l.id}"><div class="field"><label>Nom du produit</label><input data-bulk="name" data-line="${l.id}" value="${esc(l.name)}" placeholder="Nom"></div><div class="field"><label>Marque</label><input data-bulk="brand" data-line="${l.id}" value="${esc(l.brand)}" placeholder="Marque"></div><div class="field"><label>Modèle</label><input data-bulk="model" data-line="${l.id}" value="${esc(l.model)}" placeholder="Modèle"></div><div class="field"><label>Catégorie</label><div class="category-select-inline"><select data-bulk="category" data-line="${l.id}">${cats.map(c=>`<option ${l.category===c?'selected':''}>${esc(c)}</option>`).join('')}</select><button type="button" class="btn btn-sm category-plus-btn" data-bulk-add-category="${l.id}" title="Ajouter une catégorie" aria-label="Ajouter une catégorie">+</button></div></div><div class="field"><label>Code produit</label><div class="product-code-scan"><input data-bulk="sku" data-line="${l.id}" value="${esc(l.sku)}" placeholder="Auto si vide"><button type="button" class="btn btn-sm icon-btn" data-bulk-scan-code="${l.id}" title="Scanner le code produit" aria-label="Scanner le code produit">${ICONS.scan}</button></div></div><div class="field"><label>Qté</label><input data-bulk="qty" data-line="${l.id}" type="number" min="0" step="1" value="${esc(l.qty)}"></div><div class="field"><label>Prix achat</label><input data-bulk="cost" data-line="${l.id}" type="number" min="0" step="0.01" value="${esc(l.cost)}"></div><div class="field"><label>Prix vente</label><input data-bulk="sell" data-line="${l.id}" type="number" min="0" step="0.01" value="${esc(l.sell)}"></div><div class="bulk-line-equipment"><label>Équipement</label><label class="checkbox-row"><input type="checkbox" data-bulk="asEquipment" data-line="${l.id}" ${l.asEquipment ? "checked" : ""}> Oui</label></div><button type="button" class="btn btn-sm btn-danger" data-remove-bulk="${l.id}" title="Supprimer la ligne" aria-label="Supprimer la ligne">✕</button></div>`).join('')}</div><div class="inline-category-manager bulk-category-manager" id="bulkCategoryManager" hidden><div class="inline-category-add"><input id="bulkCategoryName" maxlength="60" placeholder="Nouvelle catégorie"><button type="button" class="btn btn-sm btn-primary" id="bulkSaveCategoryBtn">Ajouter</button><button type="button" class="btn btn-sm" id="bulkCloseCategoryBtn" title="Fermer la gestion des catégories">Fermer</button></div><div class="inline-category-list" id="bulkCategoryList">${renderBulkCategoryManager()}</div></div><button class="btn btn-sm" id="addBulkProductLine">${ICONS.plus}Ajouter une ligne</button></div><div class="bulk-summary" id="bulkProductSummary" aria-live="polite"><div><span>Lignes valides</span><strong id="bulkSummaryLines">0</strong></div><div><span>Unités reçues</span><strong id="bulkSummaryQty">0</strong></div><div><span>Total achat</span><strong id="bulkSummaryCost">0,00 DH</strong></div><div><span>Valeur de vente</span><strong id="bulkSummarySale">0,00 DH</strong></div><div><span>Marge estimée</span><strong id="bulkSummaryMargin">0,00 DH</strong></div></div><div class="muted bulk-equipment-help">Chaque ligne cochée « Équipement » sera enregistrée dans Équipements et ne sera pas ajoutée au stock. Les autres lignes seront enregistrées normalement dans le stock.</div><div class="modal-actions"><button class="btn" id="cancelBulkProductModal">Annuler</button><button class="btn btn-primary" id="saveBulkProductsModal">Enregistrer les produits</button></div></div></div>`;
}

function renderProductModal() {
  const isNew = state.editingProduct === 'new';
  const p = isNew ? { name: '', brand: '', model: '', category: 'Smartphones', sku: '', lowStock: 3, photo: null, archived: false, ...(state.productDraft || {}) } : state.editingProduct;
  const categoryOptions = getCategories();
  const photoData = safeImageSrc(state.productPhotoDraft !== undefined ? state.productPhotoDraft : (p.photo || null));
  return `
  <div class="modal-overlay" role="dialog" aria-modal="true" id="productModalOverlay">
    <div class="modal product-modal">
      <h2>${isNew ? 'Nouveau produit' : 'Modifier le produit'}</h2>
      <div class="field">
        <label>Photo du produit</label>
        <div class="product-photo-picker">
          <div class="product-photo-preview">
            ${photoData ? `<img src="${photoData}" alt="">` : `<div class="product-photo-placeholder">${ICONS.box}</div>`}
          </div>
          <div class="product-photo-actions">
            <button type="button" class="btn btn-sm" id="takePhotoBtn">${ICONS.scan}Prendre une photo</button>
            <button type="button" class="btn btn-sm" id="choosePhotoBtn">Choisir un fichier</button>
            ${photoData ? `<button type="button" class="btn btn-sm btn-danger" id="removePhotoBtn">Supprimer</button>` : ''}
            <input type="file" accept="image/*" capture="environment" id="f_photo_camera" style="display:none;">
            <input type="file" accept="image/*" id="f_photo_file" style="display:none;">
          </div>
        </div>
      </div>
      <div class="field"><label>Nom du produit</label><input id="f_name" value="${esc(p.name)}" placeholder="iPhone 14, Coque silicone…"></div>
      <div class="field-row">
        <div class="field"><label>Marque</label><input id="f_brand" value="${esc(p.brand)}" placeholder="Apple, Samsung…"></div>
        <div class="field"><label>Modèle / variante</label><input id="f_model" value="${esc(p.model)}" placeholder="128 Go, Noir…"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Catégorie</label>
          <div class="category-select-inline"><select id="f_category">${categoryOptions.map(c => `<option ${p.category === c ? 'selected' : ''}>${esc(c)}</option>`).join('')}</select><button type="button" class="btn btn-sm category-plus-btn" id="inlineAddCategoryBtn" title="Ajouter ou supprimer une catégorie" aria-label="Gérer les catégories">+</button></div>
          <div class="inline-category-manager" id="inlineCategoryManager" hidden>
            <div class="inline-category-add"><input id="inlineCategoryName" maxlength="60" placeholder="Nouvelle catégorie"><button type="button" class="btn btn-sm btn-primary" id="inlineSaveCategoryBtn">Ajouter</button><button type="button" class="btn btn-sm" id="inlineCloseCategoryBtn" title="Fermer la gestion des catégories">Fermer</button></div>
            <div class="inline-category-list" id="inlineCategoryList">${renderInlineCategoryManager()}</div>
          </div>
        </div>
        <div class="field"><label>Code P / code produit</label><div class="product-code-scan"><input id="f_sku" value="${esc(p.sku)}" placeholder="Saisir ou scanner le Code P"><button type="button" class="btn btn-sm icon-btn" id="scanProductCodeBtn" title="Scanner le Code P" aria-label="Scanner le Code P">${ICONS.scan}</button></div><div class="muted" style="font-size:10.5px;margin-top:4px;">Si vous laissez ce champ vide, un Code P unique sera créé à partir du nom, de la marque et du modèle.</div></div>
      </div>
      <div class="field"><label>Seuil d'alerte stock bas</label><input id="f_low" type="number" min="0" step="1" value="${p.lowStock}" style="max-width:180px;"></div>
      <label class="checkbox-row"><input type="checkbox" id="f_archived" ${p.archived ? 'checked' : ''}> Produit archivé (non disponible à la caisse)</label>
      ${!isNew ? `
      <div class="muted" style="font-size:12px;margin:4px 0 14px 0;">Stock actuel : <strong style="color:var(--text)">${productStock(p.id)}</strong> unité${productStock(p.id) !== 1 ? 's' : ''} — le prix d'achat, le prix de vente et le stock se gèrent désormais via <strong>Achats → Registre des achats</strong> (chaque réception constitue un lot).</div>
      ` : `
      <div class="field" style="margin-top:4px;"><label style="font-size:13px;">Stock initial (optionnel)</label></div>
      <div class="muted" style="font-size:11.5px;margin:-6px 0 10px 0;">Laissez la quantité à 0 si vous préférez ajouter le stock plus tard, depuis Achats.</div>
      <div class="field-row">
        <div class="field"><label>Quantité</label><input id="f_stock" type="number" min="0" step="1" value="${esc(p.stock || '0')}"></div>
        <div class="field"><label>N Bon</label><input id="f_purchase_bon" placeholder="BA-0001" maxlength="40" value="${esc(p.purchaseBon || '')}"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Prix d'achat (DH)</label><input id="f_cost" type="number" min="0" step="0.01" value="${esc(p.cost || '')}"></div>
        <div class="field"><label>Prix de vente (DH)</label><input id="f_sell" type="number" min="0" step="0.01" value="${esc(p.sell || '')}"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Fournisseur (optionnel)</label>
          <div class="category-select-inline"><select id="f_supplier">
            <option value="">Non spécifié</option>
            ${state.suppliers.map(s => `<option value="${s.id}" ${state.productDraftSupplierId === s.id ? 'selected' : ''}>${esc(s.name)}</option>`).join('')}
          </select><button type="button" class="btn btn-sm category-plus-btn" id="inlineAddSupplierBtn" title="Ajouter un fournisseur" aria-label="Ajouter un fournisseur">+</button></div>
        </div>
        <div class="field"><label>Date d'achat</label><input id="f_purchase_date" type="date" value="${esc(p.purchaseDate || localDateInputValue())}"></div>
        <div class="field"><label>Heure d'achat</label><input id="f_purchase_time" type="time" value="${esc(p.purchaseTime || localTimeInputValue())}"></div>
      </div>
      <div class="muted" style="font-size:11.5px;margin:-8px 0 12px 0;">Si la quantité est supérieure à 0, ce premier lot sera automatiquement récapitulé dans le registre des achats.</div>
      ${!state.purchaseQuickAddLineId ? `<label class="checkbox-row"><input type="checkbox" id="f_as_equipment"> Enregistrer le stock initial comme équipement (ne pas l’ajouter au stock)</label>` : ''}
      `}
      <div class="modal-actions">
        <button class="btn" id="cancelProductModal">Annuler</button>
        <button class="btn btn-primary" id="saveProductModal">${isNew ? 'Ajouter' : 'Enregistrer'}</button>
      </div>
    </div>
  </div>`;
}

/* ---------------- Stock ---------------- */
/* ---------------- Achats (Fournisseurs + Registre) ---------------- */
function renderPurchases() {
  return renderPurchaseRegister();
}

function applyPurchaseSort(list) {
  const sort = state.purchaseSort || { key: 'date', dir: 'desc' };
  return [...list].sort((a, b) => {
    let av; let bv;
    if (sort.key === 'bon') { av = a.bonNumber || a.id; bv = b.bonNumber || b.id; }
    else if (sort.key === 'date') { av = new Date(a.date).getTime() || 0; bv = new Date(b.date).getTime() || 0; }
    else if (sort.key === 'supplier') { av = state.suppliers.find(s => s.id === a.supplierId)?.name || ''; bv = state.suppliers.find(s => s.id === b.supplierId)?.name || ''; }
    else if (sort.key === 'products') { av = (a.items || []).map(item => item.name || '').join(', '); bv = (b.items || []).map(item => item.name || '').join(', '); }
    else { av = Number(a.total) || 0; bv = Number(b.total) || 0; }
    return compareSortValues(av, bv, sort.dir);
  });
}

function purchaseBonMatches(query, purchase) {
  const values = [purchase?.bonNumber, ...(purchase?.items || []).map(item => item.bonNumber)].filter(Boolean);
  return values.some(value => exactBonNumberMatch(query, value));
}

function exactBonNumberMatch(query, value) {
  const rawQuery = normalizeSearchText(query);
  const rawValue = normalizeSearchText(value);
  if (!rawQuery || !rawValue) return false;
  if (rawQuery === rawValue) return true;
  const queryDigits = rawQuery.replace(/^ba[-_]?/, '');
  const valueDigits = rawValue.replace(/^ba[-_]?/, '');
  if (/^\d+$/.test(queryDigits) && /^\d+$/.test(valueDigits)) return String(Number(queryDigits)) === String(Number(valueDigits));
  return false;
}

function purchaseCanBeMutated(purchase) {
  return (purchase?.items || []).every(item => (Number(item.qtyRemaining) || 0) >= (Number(item.qty) || 0));
}
function renderPreparedPurchaseBons(canEdit, canDelete) {
  const bons = [...(state.replenishmentBons || [])].sort((a, b) => new Date(b.date) - new Date(a.date));
  if (!bons.length) return '';
  return `<div class="card prepared-purchase-bons" style="margin-bottom:18px;"><div style="padding:18px 18px 0;font-family:var(--font-display);font-weight:700;font-size:14.5px;">Bons d’achat préparés</div><table class="rcard"><thead><tr><th>N Bon</th><th>Date</th><th>Fournisseur</th><th>Produits</th><th>Total</th><th>Actions</th></tr></thead><tbody>${bons.map(bon => {
    const supplier = state.suppliers.find(s => s.id === bon.supplierId);
    const products = (bon.items || []).map(item => `${Number(item.qty) || 0}× ${esc(item.name || 'Produit')}`).join(', ');
    return `<tr><td data-label="N Bon" class="mono"><strong>${esc(bon.bonNumber || bon.id)}</strong></td><td data-label="Date" class="mono muted">${fmtDateTime(bon.date)}</td><td data-label="Fournisseur">${supplier ? esc(supplier.name) : '<span class="muted">Non spécifié</span>'}</td><td data-label="Produits">${products || '—'}</td><td data-label="Total" class="price">${money(bon.total)} DH</td><td data-label="Actions"><div class="replenishment-action-row replenishment-action-row-primary"><button class="btn btn-sm icon-btn" data-print-replenishment="${bon.id}" title="Imprimer le bon" aria-label="Imprimer le bon">${ICONS.printer}</button><button class="btn btn-sm icon-btn" data-pdf-replenishment="${bon.id}" title="Télécharger en PDF" aria-label="Télécharger en PDF">PDF</button><button class="btn btn-sm icon-btn" data-share-replenishment-whatsapp="${bon.id}" title="Envoyer par WhatsApp" aria-label="Envoyer par WhatsApp">${ICONS.whatsapp}</button><button class="btn btn-sm icon-btn" data-share-replenishment-email="${bon.id}" title="Envoyer par e-mail" aria-label="Envoyer par e-mail">${ICONS.mail}</button>${canEdit ? `<button class="btn btn-sm icon-btn" data-edit-replenishment="${bon.id}" title="Modifier le bon" aria-label="Modifier le bon">${ICONS.edit}</button>` : ''}</div><div class="replenishment-action-row replenishment-action-row-secondary">${hasPriv('products', 'create') ? `<button class="btn btn-sm" data-validate-replenishment="${bon.id}">Enregistrer l’achat</button>` : ''}${canDelete ? `<button class="btn btn-sm icon-btn btn-danger" data-delete-replenishment="${bon.id}" title="Supprimer le bon" aria-label="Supprimer le bon">${ICONS.trash}</button>` : ''}</div></td></tr>`;
  }).join('')}</tbody></table></div>`;
}
function renderPurchaseRegister() {
  if (!isAdmin()) return emptyState('empty', 'Accès réservé', 'Les achats et prix d’achat sont visibles uniquement par un administrateur.');
  const canCreate = hasPriv('products', 'create');
  const canEdit = hasPriv('products', 'edit');
  const canDelete = hasPriv('products', 'delete');
  const f = state.purchaseFilters;
  const sort = state.purchaseSort || { key: 'date', dir: 'desc' };
  const purchaseQ=normalizeSearchText(state.purchaseSearch);
  let sorted = [...state.purchases];
  if (purchaseQ) sorted=sorted.filter(pu=>[pu.id,pu.bonNumber,pu.note,...(pu.items||[]).flatMap(i=>[i.name,i.sku,i.bonNumber])].some(v=>normalizeSearchText(v).includes(purchaseQ)));
  if (f.supplierId) sorted = sorted.filter(pu => pu.supplierId === f.supplierId);
  if (f.bonNumber) { const bonQueries = String(f.bonNumber).split(',').map(v => v.trim()).filter(Boolean); sorted = sorted.filter(pu => bonQueries.some(query => purchaseBonMatches(query, pu))); }
  if (f.from) { const fromD = new Date(f.from); sorted = sorted.filter(pu => new Date(pu.date) >= fromD); }
  if (f.to) { const toD = new Date(f.to); toD.setHours(23, 59, 59, 999); sorted = sorted.filter(pu => new Date(pu.date) <= toD); }
  sorted = applyPurchaseSort(sorted);
  const totalFiltered = sorted.reduce((s, pu) => s + pu.total, 0);
  const isFiltered = f.supplierId || f.bonNumber || f.from || f.to;
  return `
    <div class="toolbar">
      <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;"><input class="search-input" id="purchaseSearch" placeholder="Rechercher un achat, produit ou Code P…" value="${esc(state.purchaseSearch)}">
        <select id="pf_supplier" class="search-input" style="min-width:160px;">
          <option value="">Tous les fournisseurs</option>
          ${state.suppliers.map(s => `<option value="${s.id}" ${f.supplierId === s.id ? 'selected' : ''}>${esc(s.name)}</option>`).join('')}
        </select>
        <input class="search-input" id="pf_bon" placeholder="N° bon exact(s), séparés par une virgule" value="${esc(f.bonNumber || '')}">
        <input type="date" id="pf_from" value="${f.from || ''}" title="Du">
        <input type="date" id="pf_to" value="${f.to || ''}" title="Au">
        ${isFiltered ? `<button class="btn btn-sm" id="pf_clear">Réinitialiser</button>` : ''}
      </div>
      <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;">
        ${canCreate ? `<button class="btn btn-sm btn-primary" id="generatePurchaseFromSalesBtn">Générer un bon depuis les ventes</button>` : ''}
        <button class="btn btn-sm" id="exportPurchasesBtn">Exporter Excel</button>
        ${canCreate ? `<button class="btn btn-sm" id="importPurchasesBtn">Importer Excel</button><input type="file" id="purchasesExcelFile" accept=".xlsx,.xls" hidden>` : ''}
      </div>
    </div>
    ${renderPreparedPurchaseBons(canEdit, canDelete)}
    <div class="muted mono" style="font-size:12px;margin-bottom:12px;">${sorted.length} achat${sorted.length !== 1 ? 's' : ''}${isFiltered ? ' (filtré)' : ''} · Total : ${money(totalFiltered)} DH</div>
    <div class="card">
      ${sorted.length === 0 ? emptyState('cart', 'Aucun achat', isFiltered ? 'Aucun résultat pour ces filtres.' : 'Enregistrez vos réceptions de marchandise pour suivre vos coûts.') : `
      <table class="rcard">
        <thead><tr><th>${sortButton('N Bon', 'purchases', 'bon', sort)}</th><th>${sortButton('Date', 'purchases', 'date', sort)}</th><th>${sortButton('Fournisseur', 'purchases', 'supplier', sort)}</th><th>${sortButton('Produits', 'purchases', 'products', sort)}</th><th style="text-align:right;">${sortButton('Coût total', 'purchases', 'total', sort)}</th><th>Actions</th></tr></thead>
        <tbody>
          ${sorted.map(pu => {
            const sup = state.suppliers.find(s => s.id === pu.supplierId);
            return `
            <tr>
              <td data-label="N Bon" class="mono"><strong>${esc(pu.bonNumber || pu.id)}</strong></td>
              <td data-label="Date" class="mono muted">${fmtDateTime(pu.date)}</td>
              <td data-label="Fournisseur">${sup ? esc(sup.name) : '<span class="muted">Non spécifié</span>'}</td>
              <td data-label="Produits">${pu.items.map(it => `${it.qty}× ${esc(it.name)}`).join(', ')}</td>
              <td data-label="Coût total" class="price">${money(pu.total)}</td>
              <td data-label="Actions" class="row-actions">${canEdit ? `<button type="button" class="btn btn-sm icon-btn" data-edit-purchase="${pu.id}" title="Modifier l’achat" aria-label="Modifier l’achat">${ICONS.edit}</button>` : ''}${canDelete ? `<button type="button" class="btn btn-sm icon-btn btn-danger" data-delete-purchase="${pu.id}" title="Supprimer l’achat" aria-label="Supprimer l’achat">${ICONS.trash}</button>` : ''}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>`}
    </div>
  `;
}

function applySupplierSort(list) {
  const sort = state.supplierSort || { key: 'name', dir: 'asc' };
  return [...list].sort((a, b) => {
    let av; let bv;
    if (sort.key === 'code') { av = a.code || ''; bv = b.code || ''; }
    else if (sort.key === 'phone') { av = a.phone || ''; bv = b.phone || ''; }
    else if (sort.key === 'email') { av = a.email || ''; bv = b.email || ''; }
    else { av = a.name || ''; bv = b.name || ''; }
    return compareSortValues(av, bv, sort.dir);
  });
}

function renderSuppliers() {
  const supplierQ=normalizeSearchText(state.supplierSearch);
  const visibleSuppliers=state.suppliers.filter(x=>!supplierQ || [x.code,x.name,x.phone,x.email,x.address,x.notes].some(v=>normalizeSearchText(v).includes(supplierQ)));
  const list = applySupplierSort(visibleSuppliers);
  const sort = state.supplierSort || { key: 'name', dir: 'asc' };
  const canCreate = hasPriv('products', 'create');
  const canEdit = hasPriv('products', 'edit');
  const canDelete = hasPriv('products', 'delete');
  return `
    <div class="toolbar"><div class="muted mono" style="font-size:12px;">${state.suppliers.length} fournisseur${state.suppliers.length !== 1 ? 's' : ''}</div>
    </div>
    <div class="card">
      ${visibleSuppliers.length === 0 ? emptyState('users', 'Aucun fournisseur', 'Ajoutez vos fournisseurs pour les lier à vos achats.') : `
      <table class="rcard">
        <thead><tr><th>${sortButton('ID', 'suppliers', 'code', sort)}</th><th>${sortButton('Nom', 'suppliers', 'name', sort)}</th><th>${sortButton('Téléphone', 'suppliers', 'phone', sort)}</th><th>${sortButton('Email', 'suppliers', 'email', sort)}</th><th></th></tr></thead>
        <tbody>
          ${list.map(s => `
            <tr>
              <td data-label="ID" class="mono muted">${esc(s.code)}</td>
              <td data-label="Nom"><strong>${esc(s.name)}</strong>${s.notes ? `<div class="muted" style="font-size:11.5px;">${esc(s.notes)}</div>` : ''}</td>
              <td data-label="Téléphone" class="mono">${esc(s.phone) || '—'}</td>
              <td data-label="Email" class="muted">${esc(s.email) || '—'}</td>
              <td data-label="">
                ${canEdit ? `<button type="button" class="btn btn-sm icon-btn" data-edit-supplier="${s.id}" title="Modifier le fournisseur" aria-label="Modifier le fournisseur">${ICONS.edit}</button>` : ''}
                ${canDelete ? `<button type="button" class="btn btn-sm icon-btn btn-danger" data-delete-supplier="${s.id}" title="Supprimer le fournisseur" aria-label="Supprimer le fournisseur">${ICONS.trash}</button>` : ''}
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>`}
    </div>
  `;
}

function renderSupplierModal() {
  const isNew = state.editingSupplier === 'new';
  const s = isNew ? { code: nextSupplierCode(), name: '', phone: '', email: '', address: '', notes: '' } : state.editingSupplier;
  return `
  <div class="modal-overlay" role="dialog" aria-modal="true" id="supplierModalOverlay">
    <div class="modal">
      <h2>${isNew ? 'Nouveau fournisseur' : 'Modifier le fournisseur'}</h2>
      <div class="field-row">
        <div class="field"><label>Nom</label><input id="sup_name" value="${esc(s.name)}" placeholder="Nom du fournisseur"></div>
        <div class="field"><label>Identifiant</label><input id="sup_code" value="${esc(s.code)}" placeholder="FR-0001"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Téléphone</label><input id="sup_phone" type="tel" inputmode="numeric" maxlength="10" pattern="[0-9]{10}" data-digits-only="1" value="${esc(s.phone)}" placeholder="0612345678"></div>
        <div class="field"><label>Email</label><input id="sup_email" type="email" autocomplete="email" value="${esc(s.email)}" placeholder="email@email.com"></div>
      </div>
      <div class="field"><label>Adresse</label><input id="sup_address" value="${esc(s.address || '')}" placeholder="Adresse"></div>
      <div class="field"><label>Notes</label><textarea id="sup_notes" rows="2">${esc(s.notes)}</textarea></div>
      <div class="modal-actions">
        <button class="btn" id="cancelSupplierModal">Annuler</button>
        <button class="btn btn-primary" id="saveSupplierModal">${isNew ? 'Ajouter' : 'Enregistrer'}</button>
      </div>
    </div>
  </div>`;
}

function updatePurchaseSummary() {
  const lines = state.purchaseDraftLines || [];
  let validLines = 0; let totalQty = 0; let totalCost = 0; let totalSale = 0;
  lines.forEach(line => {
    const qty = Number.parseInt(document.getElementById(`pl_qty_${line.id}`)?.value ?? line.qty, 10);
    const cost = Number.parseFloat(document.getElementById(`pl_cost_${line.id}`)?.value ?? line.unitCost);
    const price = Number.parseFloat(document.getElementById(`pl_price_${line.id}`)?.value ?? line.unitPrice);
    const safeQty = Number.isFinite(qty) && qty > 0 ? qty : 0;
    const safeCost = Number.isFinite(cost) && cost >= 0 ? cost : 0;
    const safePrice = Number.isFinite(price) && price >= 0 ? price : 0;
    const lineCost = safeQty * safeCost;
    const lineSale = safeQty * safePrice;
    if (safeQty > 0) { validLines += 1; totalQty += safeQty; }
    totalCost += lineCost; totalSale += lineSale;
    const lineTotal = document.getElementById(`pl_total_${line.id}`);
    if (lineTotal) lineTotal.textContent = `${money(lineCost)} DH`;
  });
  const values = {
    purchaseSummaryLines: validLines,
    purchaseSummaryQty: totalQty,
    purchaseSummaryCost: `${money(totalCost)} DH`,
    purchaseSummarySale: `${money(totalSale)} DH`,
    purchaseSummaryMargin: `${money(totalSale - totalCost)} DH`,
  };
  Object.entries(values).forEach(([id, value]) => { const el = document.getElementById(id); if (el) el.textContent = value; });
}

function sortProductsAlphabetically(products) {
  return [...(products || [])].sort((a, b) => {
    const left = `${a.name || ''} ${a.model || ''}`.trim();
    const right = `${b.name || ''} ${b.model || ''}`.trim();
    return left.localeCompare(right, 'fr', { sensitivity: 'base', numeric: true });
  });
}

function renderPurchaseModal() {
  const existingPurchase = state.editingPurchase && state.editingPurchase !== 'new' ? state.editingPurchase : null;
  const isReplenishmentDraft = state.purchaseDraftMode === 'replenishment';
  const lines = state.purchaseDraftLines || (existingPurchase ? (existingPurchase.items || []).map((item, index) => {
    const product = state.products.find(p => p.id === item.productId);
    return { id: item.id || `${existingPurchase.id}_${index}`, productId: item.productId || '', sku: item.sku || product?.sku || '', qty: item.qty || '', unitCost: item.unitCost ?? '', unitPrice: item.unitPrice ?? '' };
  }) : [{ id: uid('pl'), productId: '', sku: '', qty: '', unitCost: '', unitPrice: '' }]);
  const draftSupplierId = state.purchaseDraftSupplierId || '';
  const draftDate = state.purchaseDraftDate || localDateInputValue();
  const draftTime = state.purchaseDraftTime || localTimeInputValue();
  const draftNote = state.purchaseDraftNote || '';
  const draftBonNumber = state.purchaseDraftBonNumber || (existingPurchase?.bonNumber || '');
  return `
  <div class="modal-overlay" role="dialog" aria-modal="true" id="purchaseModalOverlay">
    <div class="modal modal-wide purchase-modal">
      <h2>${isReplenishmentDraft ? (state.editingReplenishmentBon ? 'Modifier le bon de commande' : 'Nouveau bon de commande') : (existingPurchase ? 'Modifier l’achat' : 'Nouvel achat')}</h2>
      <div class="field-row">
        <div class="field"><label>Fournisseur</label>
          <select id="pu_supplier">
            <option value="">Non spécifié</option>
            ${state.suppliers.map(s => `<option value="${s.id}" ${draftSupplierId === s.id ? 'selected' : ''}>${esc(s.name)}</option>`).join('')}
          </select>
        </div>
        <div class="field"><label>Date</label><input id="pu_date" type="date" value="${draftDate}"></div>
        <div class="field"><label>Heure</label><input id="pu_time" type="time" value="${draftTime}"></div>
        <div class="field"><label>N Bon</label><input id="pu_bon" maxlength="40" placeholder="BA-0001" value="${esc(draftBonNumber)}"></div>
      </div>
      <div class="field"><label>Produits reçus</label>
        <div id="purchaseLines">
          ${lines.map(l => `
            <div class="purchase-line-grid">
              <button type="button" class="btn btn-sm icon-btn purchase-line-scan-btn" data-scan-purchase-line="${l.id}" title="Scanner le code" aria-label="Scanner le code">${ICONS.scan}</button>
              <div class="field purchase-line-code-field"><label>Code P / code</label><input id="pl_sku_${l.id}" data-purchase-sku="${l.id}" placeholder="Saisir le Code P ou code-barres" value="${esc(l.sku || '')}"></div>
              <div class="field"><label>Produit</label><div class="purchase-product-select-row"><select id="pl_product_${l.id}" data-purchase-product="${l.id}">
                <option value="">Choisir un produit</option>
                ${sortProductsAlphabetically(state.products).map(p => `<option value="${p.id}" ${l.productId === p.id ? 'selected' : ''}>${esc(p.name)} — ${esc(p.model)}</option>`).join('')}
              </select><button type="button" class="btn btn-sm category-plus-btn purchase-product-plus" data-quick-add-product="${l.id}" title="Nouveau produit" aria-label="Créer un nouveau produit">+</button></div></div>
              <div class="field"><label>Qté</label><input id="pl_qty_${l.id}" type="number" min="1" step="1" placeholder="Qté" value="${l.qty}"></div>
              <div class="field"><label>Prix achat</label><input id="pl_cost_${l.id}" type="number" min="0" step="0.01" placeholder="Prix achat" value="${l.unitCost}"></div>
              <div class="field"><label>Prix vente</label><input id="pl_price_${l.id}" type="number" min="0" step="0.01" placeholder="Prix vente" value="${l.unitPrice}"></div>
              ${!isReplenishmentDraft ? `<div class="purchase-line-equipment"><label>Équipement</label><label class="checkbox-row"><input type="checkbox" id="pl_equipment_${l.id}" ${l.asEquipment ? 'checked' : ''}> Oui</label></div>` : ''}
              <div class="purchase-line-total"><span>Montant achat</span><strong id="pl_total_${l.id}">0,00 DH</strong></div>
              <button type="button" class="btn btn-sm btn-danger" data-remove-line="${l.id}" style="height:38px;">✕</button>
            </div>
          `).join('')}
        </div>
        <button class="btn btn-sm" id="addPurchaseLine">${ICONS.plus}Ajouter une ligne</button>
      </div>
      <div class="purchase-summary" id="purchaseSummary" aria-live="polite">
        <div><span>Lignes valides</span><strong id="purchaseSummaryLines">0</strong></div>
        <div><span>Unités reçues</span><strong id="purchaseSummaryQty">0</strong></div>
        <div><span>Total achat</span><strong id="purchaseSummaryCost">0,00 DH</strong></div>
        <div><span>Valeur de vente</span><strong id="purchaseSummarySale">0,00 DH</strong></div>
        <div><span>Marge estimée</span><strong id="purchaseSummaryMargin">0,00 DH</strong></div>
      </div>
      <div class="field"><label>Note (optionnel)</label><input id="pu_note" placeholder="Référence bon de livraison…" value="${esc(draftNote)}"></div>
      <div class="muted purchase-equipment-help">Chaque ligne cochée « Équipement » sera enregistrée dans Équipements et ne sera pas ajoutée au stock. Les autres lignes seront enregistrées normalement dans le stock.</div>
      <div class="modal-actions">
        <button class="btn" id="cancelPurchaseModal">Annuler</button>
        <button class="btn btn-primary" id="savePurchaseModal">${isReplenishmentDraft ? 'Enregistrer le bon de commande' : "Enregistrer l'achat"}</button>
      </div>
    </div>
  </div>`;
}

function renderStock() {
  const canViewCosts = hasPriv('products', 'viewCosts');
  const canEdit = isAdmin() && hasPriv('products', 'edit');
  const canDelete = isAdmin() && hasPriv('products', 'delete');
  let rows = [];
  state.purchases.forEach(pu => {
    (pu.items || []).forEach((it, itemIndex) => {
      const product = state.products.find(pp => pp.id === it.productId);
      rows.push({
        purchaseId: pu.id, itemIndex, date: pu.date, supplierId: pu.supplierId, productId: it.productId, name: it.name || product?.name || 'Produit', category: product?.category || '', sku: it.sku || product?.sku || '',
        qty: Number(it.qty) || 0, qtyRemaining: Number(it.qtyRemaining) || 0, unitCost: Number(it.unitCost) || 0, unitPrice: Number(it.unitPrice) || 0, stockCurrent: productStock(it.productId),
      });
    });
  });
  const q = normalizeSearchText(state.stockSearch);
  rows = rows.filter(row => !q || [row.name, row.category, row.sku].some(value => normalizeSearchText(value).includes(q)));
  rows = applyStockSort(rows);
  const sort = state.stockSort || { key: 'date', dir: 'desc' };
  const stockHeaders = [
    ['Produit', 'name'], ['Catégorie', 'category'], ['Code P', 'sku'], ['Date d’achat', 'date'], ['Quantité', 'qty'],
    ...(canViewCosts ? [['Prix d’achat', 'unitCost']] : []), ['Prix de vente', 'unitPrice'], ['Stock actuel', 'stock'], ...(canViewCosts ? [['Marge unitaire', 'margin']] : []),
  ];
  return `
    <div class="toolbar">
      <input class="search-input" id="stockSearch" placeholder="Rechercher un produit, catégorie ou Code P…" value="${esc(state.stockSearch)}">
      <div class="muted mono" style="font-size:12px;">${rows.length} lot${rows.length !== 1 ? 's' : ''}</div>
      <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;">
        ${canViewCosts ? '<button class="btn btn-sm" id="exportStockBtn">Exporter Excel</button><button class="btn btn-sm" id="importStockBtn">Importer Excel</button>' : ''}
        <input type="file" id="stockExcelFile" accept=".xlsx,.xls" hidden>
      </div>
    </div>
    <div class="card">
      ${rows.length === 0 ? emptyState('layers', 'Aucun lot en stock', 'Enregistrez un achat (Achats → Registre) pour voir apparaître le stock ici.') : `
      <table class="rcard stock-table">
        <thead><tr>
          ${stockHeaders.map(([label, key]) => `<th${['qty','unitCost','unitPrice','stock','margin'].includes(key) ? ' style="text-align:right;"' : ''}>${sortButton(label, 'stock', key, sort)}</th>`).join('')}
          <th>Actions</th>
        </tr></thead>
        <tbody>
          ${rows.map(r => {
            const sup = state.suppliers.find(s => s.id === r.supplierId);
            const p = state.products.find(pp => pp.id === r.productId);
            const status = p ? stockStatus(p) : (r.stockCurrent <= 0 ? 'danger' : 'ok');
            return `
            <tr>
              <td data-label="Produit"><strong>${esc(r.name)}</strong></td>
              <td data-label="Catégorie" class="muted">${esc(r.category || '—')}</td>
              <td data-label="Code P" class="mono muted">${esc(r.sku || '—')}</td>
              <td data-label="Date d’achat" class="mono muted">${fmtDateTime(r.date)}</td>
              <td data-label="Quantité" class="mono stock-number">${r.qty}</td>
              ${canViewCosts ? `<td data-label="Prix d’achat" class="mono stock-number">${money(r.unitCost)}</td>` : ''}
              <td data-label="Prix de vente" class="price stock-number">${money(r.unitPrice)}</td>
              <td data-label="Stock actuel" class="stock-number"><span class="pill ${status === 'ok' ? 'pill-ok' : status === 'warn' ? 'pill-warn' : 'pill-danger'}">${r.stockCurrent}</span></td>
              ${canViewCosts ? `<td data-label="Marge unitaire" class="price stock-number">${money(r.unitPrice - r.unitCost)}</td>` : ''}
              <td data-label="Actions"><div class="row-actions">${canEdit ? `<button type="button" class="btn btn-sm icon-btn" data-edit-stock="${r.purchaseId}:${r.itemIndex}" title="Modifier le lot" aria-label="Modifier le lot">${ICONS.edit}</button>` : ''}${canDelete ? `<button type="button" class="btn btn-sm icon-btn btn-danger" data-delete-stock="${r.purchaseId}:${r.itemIndex}" title="Supprimer le lot" aria-label="Supprimer le lot">${ICONS.trash}</button>` : ''}</div></td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>`}
    </div>
  `;
}
function openPurchaseFromSales() {
  const salesFilter = state.replenishmentSalesFilters || { from: '', to: '' };
  const fromTime = salesFilter.from ? new Date(`${salesFilter.from}T00:00:00`).getTime() : -Infinity;
  const toTime = salesFilter.to ? new Date(`${salesFilter.to}T23:59:59.999`).getTime() : Infinity;
  if (fromTime > toTime) { toast('La date de début doit précéder la date de fin.'); return; }
  const productsById = new Map(state.products.map(product => [product.id, product]));
  const coveredProductIds = new Set([...(state.replenishmentConsumedProductIds || []), ...(state.replenishmentBons || []).flatMap(bon => bon.sourceProductIds || (bon.items || []).map(item => item.productId))].filter(Boolean));
  const soldQuantities = new Map();
  state.sales.filter(sale => { const time = new Date(sale.date).getTime(); return time >= fromTime && time <= toTime; }).forEach(sale => (sale.items || []).forEach(item => {
    const qty = Math.max(0, parseInt(item.qty, 10) || 0);
    if (item.productId && qty > 0 && !coveredProductIds.has(item.productId)) soldQuantities.set(item.productId, (soldQuantities.get(item.productId) || 0) + qty);
  }));
  const lines = [...soldQuantities.entries()].map(([productId, qty]) => {
    const product = productsById.get(productId);
    if (!product) return null;
    return { id: uid('pl'), productId, sku: product.sku || '', bonNumber: '', qty, unitCost: productAvgCost(product.id) || '', unitPrice: productSellPrice(product.id) || '' };
  }).filter(Boolean).sort((a, b) => String(productsById.get(a.productId)?.name || '').localeCompare(String(productsById.get(b.productId)?.name || ''), 'fr', { sensitivity: 'base' }));
  if (!lines.length) { toast('Aucune vente disponible dans la période sélectionnée pour générer un bon d’achat.'); return; }
  state.editingPurchase = 'new'; state.editingReplenishmentBon = null; state.purchaseDraftMode = 'replenishment'; state.purchaseDraftSourceProductIds = lines.map(line => line.productId); state.purchaseDraftSourceSaleIds = []; state.purchaseDraftLines = lines;
  state.purchaseDraftSupplierId = ''; state.purchaseDraftDate = localDateInputValue(); state.purchaseDraftTime = localTimeInputValue();
  state.purchaseDraftBonNumber = nextPurchaseBonNumber(); state.purchaseDraftNote = 'Bon généré à partir des quantités vendues'; state.purchaseScanLineId = null;
  render();
}
/* ---------------- Recharges de comptes ---------------- */
function rechargeBalance(account) { return Math.max(0, Number(account?.balance) || 0); }
function renderRechargeSalesSummary() {
  const rows = [];
  state.sales.forEach(sale => (sale.items || []).forEach((item, itemIndex) => {
    if (!item.isRecharge) return;
    rows.push({ saleId: sale.id, itemIndex, date: sale.date, account: item.name || 'Recharge', amount: Number(item.price) || 0, margin: Number(item.rechargeMargin) || ((Number(item.price) || 0) - (Number(item.unitCost) || 0)), payment: sale.payment || '—' });
  }));
  rows.sort((a, b) => new Date(b.date) - new Date(a.date));
  const total = rows.reduce((sum, row) => sum + row.amount, 0); const margin = rows.reduce((sum, row) => sum + row.margin, 0);
  return `<div class="card module-summary-card"><div class="section-title">Récapitulatif des recharges vendues</div><div class="muted module-summary-meta">${rows.length} vente${rows.length !== 1 ? 's' : ''} · Total : ${money(total)} DH · Marge : ${money(margin)} DH</div>${rows.length ? `<table class="rcard"><thead><tr><th>Date</th><th>Compte</th><th>Montant</th><th>Marge</th><th>Paiement</th><th></th></tr></thead><tbody>${rows.map(row => `<tr><td data-label="Date" class="mono muted">${fmtDateTime(row.date)}</td><td data-label="Compte">${esc(row.account)}</td><td data-label="Montant" class="price">${money(row.amount)} DH</td><td data-label="Marge" class="price">${money(row.margin)} DH</td><td data-label="Paiement">${esc(row.payment)}</td><td data-label="Actions"><div class="row-actions"><button class="btn btn-sm icon-btn" data-edit-recharge-sale="${row.saleId}" title="Modifier" aria-label="Modifier">${ICONS.edit}</button><button class="btn btn-sm icon-btn btn-danger" data-delete-recharge-sale="${row.saleId}" title="Supprimer" aria-label="Supprimer">${ICONS.trash}</button></div></td></tr>`).join('')}</tbody></table>` : emptyState('wallet', 'Aucune recharge vendue', 'Les ventes de recharge apparaîtront ici.')}</div>`;
}
function renderRechargeDepositsSummary() {
  const rows = [];
  state.rechargeAccounts.forEach(account => (account.deposits || []).forEach(deposit => rows.push({ id: deposit.id, accountId: account.id, date: deposit.date, account: account.name, amount: Number(deposit.amount) || 0, note: deposit.note || '—' })));
  rows.sort((a, b) => new Date(b.date) - new Date(a.date));
  const total = rows.reduce((sum, row) => sum + row.amount, 0);
  return `<div class="card module-summary-card"><div class="section-title">Récapitulatif des recharges rechargées</div><div class="muted module-summary-meta">${rows.length} recharge${rows.length !== 1 ? 's' : ''} · Total : ${money(total)} DH</div>${rows.length ? `<table class="rcard"><thead><tr><th>Date</th><th>Compte</th><th>Montant</th><th>Note</th><th></th></tr></thead><tbody>${rows.map(row => `<tr><td data-label="Date" class="mono muted">${fmtDateTime(row.date)}</td><td data-label="Compte">${esc(row.account)}</td><td data-label="Montant" class="price">${money(row.amount)} DH</td><td data-label="Note">${esc(row.note)}</td><td data-label="Actions"><div class="row-actions"><button class="btn btn-sm icon-btn" data-edit-recharge-deposit="${row.accountId}:${row.id}" title="Modifier" aria-label="Modifier">${ICONS.edit}</button><button class="btn btn-sm icon-btn btn-danger" data-delete-recharge-deposit="${row.accountId}:${row.id}" title="Supprimer" aria-label="Supprimer">${ICONS.trash}</button></div></td></tr>`).join('')}</tbody></table>` : emptyState('wallet', 'Aucune recharge rechargée', 'Les recharges déposées apparaîtront ici.')}</div>`;
}
function renderRecharges() {
  const q = normalizeSearchText(state.rechargeAccountSearch || '');
  const accounts = state.rechargeAccounts.filter(a => !q || [a.name, a.type, a.provider, a.note].some(v => normalizeSearchText(v).includes(q)));
  const total = accounts.reduce((sum,a) => sum + rechargeBalance(a), 0);
  return `<div class="toolbar">${moduleExcelActions('Recharges', 'Recharges')}<input class="search-input" id="rechargeAccountSearch" placeholder="Rechercher un compte ou opérateur…" value="${esc(state.rechargeAccountSearch || '')}"><div class="muted mono">Solde disponible : ${money(total)} DH</div></div><div class="card" style="padding:18px;"><div class="section-title">Comptes rechargeables</div><div class="muted" style="font-size:12px;margin:4px 0 14px;">Ajoutez des montants disponibles, puis vendez tout ou partie du solde. Marge actuelle : <strong>${money(state.rechargeMarginRate)}%</strong>.</div>${accounts.length ? `<table class="rcard"><thead><tr><th>Compte</th><th>Type</th><th>Opérateur / fournisseur</th><th>Solde</th><th></th></tr></thead><tbody>${accounts.map(a => `<tr><td data-label="Compte"><strong>${esc(a.name)}</strong>${a.note ? `<div class="muted">${esc(a.note)}</div>` : ''}</td><td data-label="Type"><span class="pill pill-ok">${esc(a.type)}</span></td><td data-label="Opérateur / fournisseur">${esc(a.provider || '—')}</td><td data-label="Solde" class="price">${money(rechargeBalance(a))} DH</td><td data-label=""><div class="row-actions"><button class="btn btn-sm" data-deposit-recharge="${a.id}">Recharger</button><button class="btn btn-sm btn-primary" data-sell-recharge="${a.id}" ${rechargeBalance(a) <= 0 ? 'disabled' : ''}>Vendre</button><button class="btn btn-sm icon-btn btn-danger" data-delete-recharge="${a.id}" title="Supprimer">${ICONS.trash}</button></div></td></tr>`).join('')}</tbody></table>` : emptyState('wallet', 'Aucun compte rechargeable', 'Créez un compte téléphonique, opérateur ou portefeuille électronique.')}</div>${renderRechargeSalesSummary()}${renderRechargeDepositsSummary()}`;
}
function renderRechargeAccountModal() { return `<div class="modal-overlay" role="dialog" aria-modal="true"><div class="modal"><h2>Nouveau compte rechargeable</h2><div class="field"><label>Nom du compte</label><input id="recharge_account_name" placeholder="Ex. Solde Orange Money"></div><div class="field"><label>Type</label><select id="recharge_account_type">${RECHARGE_TYPES.map(t => `<option>${esc(t)}</option>`).join('')}</select></div><div class="field"><label>Opérateur / fournisseur</label><input id="recharge_account_provider" placeholder="Ex. Orange, Inwi, PayPal"></div><div class="field"><label>Note</label><textarea id="recharge_account_note" rows="2"></textarea></div><div class="modal-actions"><button class="btn" id="cancelRechargeAccount">Annuler</button><button class="btn btn-primary" id="saveRechargeAccount">Créer le compte</button></div></div></div>`; }
function renderRechargeDepositModal() { const d=state.rechargeDepositModalOpen; const a=state.rechargeAccounts.find(x=>x.id===d?.accountId); const deposit=d?.depositId ? (a?.deposits || []).find(x=>x.id===d.depositId) : null; if(!a)return ''; return `<div class="modal-overlay" role="dialog" aria-modal="true"><div class="modal"><h2>${deposit ? 'Modifier la recharge' : 'Recharger un compte'}</h2><p class="muted">${esc(a.name)} · Solde actuel : ${money(rechargeBalance(a))} DH</p><div class="field"><label>Montant déposé / rechargé (DH)</label><input id="recharge_deposit_amount" type="text" inputmode="decimal" placeholder="1000" value="${deposit ? esc(deposit.amount) : ''}"></div><div class="field"><label>Date</label><input id="recharge_deposit_date" type="date" value="${deposit ? esc(localDateInputValue(deposit.date)) : localDateInputValue()}"></div><div class="field"><label>Note</label><textarea id="recharge_deposit_note" rows="2">${deposit ? esc(deposit.note || '') : ''}</textarea></div><div class="modal-actions"><button class="btn" id="cancelRechargeDeposit">Annuler</button><button class="btn btn-primary" id="saveRechargeDeposit">${deposit ? 'Enregistrer les modifications' : 'Enregistrer la recharge'}</button></div></div></div>`; }
function renderRechargeSaleModal() { const a=state.rechargeAccounts.find(x=>x.id===state.rechargeSaleModalOpen?.accountId); if(!a)return ''; const d=state.rechargeSaleModalOpen; return `<div class="modal-overlay" role="dialog" aria-modal="true"><div class="modal"><h2>Vendre une recharge</h2><p class="muted">${esc(a.name)} · Solde disponible : <strong>${money(rechargeBalance(a))} DH</strong></p><div class="field"><label>Montant vendu (DH)</label><input id="recharge_sale_amount" type="text" inputmode="decimal" value="${esc(d.amount ?? '')}" placeholder="400"></div><div class="field-row"><div class="field"><label>Date</label><input id="recharge_sale_date" type="date" value="${esc(d.date || localDateInputValue())}"></div><div class="field"><label>Heure</label><input id="recharge_sale_time" type="time" value="${esc(d.time || localTimeInputValue())}"></div></div><div class="field"><label>Client</label><select id="recharge_sale_client"><option value="">Client de passage</option>${state.clients.map(c=>`<option value="${c.id}">${esc(c.name)} (${esc(c.clientCode||'')})</option>`).join('')}</select></div><div class="field"><label>Mode de paiement</label><select id="recharge_sale_payment"><option>Espèces</option><option>Carte</option><option>Mobile money</option></select></div><div class="field"><label>Note</label><textarea id="recharge_sale_note" rows="2">${esc(d.note || '')}</textarea></div><p class="muted">Marge calculée : <strong id="rechargeSaleMarginPreview">0,00 DH</strong> (${money(state.rechargeMarginRate)}%)</p><div class="modal-actions"><button class="btn" id="cancelRechargeSale">Annuler</button><button class="btn btn-primary" id="saveRechargeSale">Enregistrer la vente</button></div></div></div>`; }
function refreshRechargeSaleMargin() { const amount=Number.parseFloat(document.getElementById('recharge_sale_amount')?.value)||0; const el=document.getElementById('rechargeSaleMarginPreview'); if(el)el.textContent=`${money(amount*state.rechargeMarginRate/100)} DH`; }

function categoryManagerData(type) {
  if (type === 'service') return { title: 'Catégories de services', categories: getServiceCategories(), system: SERVICE_CATEGORIES, used: value => state.services.some(item => item.category === value), field: 'serviceCategories', save: saveServiceCategories };
  if (type === 'equipment') return { title: 'Catégories d’équipements', categories: getEquipmentCategories(), system: EQUIPMENT_CATEGORIES, used: value => state.equipmentPurchases.some(item => item.category === value), field: 'equipmentCategories', save: saveEquipmentCategories };
  return { title: 'Catégories de dépenses courantes', categories: getExpenseCategories(), system: EXPENSE_CATEGORIES, used: value => state.expenses.some(item => item.category === value), field: 'expenseCategories', save: saveExpenseCategories };
}
function renderCategoryManagerModal() {
  const type = state.categoryManagerType; if (!state.categoryManagerOpen || !type) return '';
  const data = categoryManagerData(type);
  return `<div class="modal-overlay category-manager-overlay" role="dialog" aria-modal="true"><div class="modal"><h2>${data.title}</h2><div class="field"><label>Nouvelle catégorie</label><div class="category-select-with-add"><input id="categoryManagerName" maxlength="80" placeholder="Nom de la catégorie"><button type="button" class="btn btn-primary" id="saveCategoryManagerBtn">${ICONS.plus}Ajouter</button></div></div><div class="category-manager-list">${data.categories.map(category => `<div class="category-row"><span>${esc(category)}</span><span class="muted">${data.system.includes(category) ? 'Système' : ''}</span>${data.used(category) ? '<span class="muted">Utilisée</span>' : `<button type="button" class="btn btn-sm btn-danger" data-category-manager-delete="${esc(category)}">Supprimer</button>`}</div>`).join('')}</div><div class="modal-actions"><button class="btn" id="closeCategoryManagerBtn">Fermer</button></div></div></div>`;
}
/* ---------------- Import / export Excel des modules ---------------- */
function moduleExcelActions(prefix, label) {
  return `<div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;"><button class="btn btn-sm" id="export${prefix}Btn">${ICONS.download}Exporter Excel</button><input type="file" id="import${prefix}File" accept=".xlsx,.xls" style="display:none"><button class="btn btn-sm" id="import${prefix}Btn">${ICONS.upload}Importer Excel</button></div>`;
}
function exportServicesXLSX() {
  downloadExcelRows(state.services.map(item => ({ Nom: item.name, Catégorie: item.category, 'Prix de vente (DH)': item.price, 'Coût (DH)': item.cost, Description: item.description || '' })), `phonestock-services-${localDateInputValue()}.xlsx`, 'Services');
}
async function importServicesXLSX(file) {
  try { if (typeof XLSX === 'undefined') { toast('Bibliothèque Excel indisponible.'); return; } const rows=excelRowsFromSheet(await parseExcelFile(file), 'Services'); if (!rows.length) { toast('La feuille Services est vide.'); return; }
    const invalid=rows.find(r=>!String(r.Nom||'').trim()||excelNumber(r['Prix de vente (DH)'])==null||excelNumber(r['Prix de vente (DH)'])<0||excelNumber(r['Coût (DH)'],0)<0); if(invalid){toast('Service invalide : nom, prix de vente et coût requis.');return;}
    if(!confirmLocalized(`Importer ${rows.length} service(s) ?`))return; const added=[]; for(const r of rows){const category=String(r.Catégorie||'Autres services').trim()||'Autres services';if(!getServiceCategories().includes(category)){state.serviceCategories.push(category);await saveServiceCategories();} added.push({id:uid('svc'),name:String(r.Nom).trim(),category,price:excelNumber(r['Prix de vente (DH)'],0),cost:excelNumber(r['Coût (DH)'],0),description:String(r.Description||'').trim()});} state.services.push(...added);if(await saveServices()===null){toast('Échec de sauvegarde des services importés.');return;}await logOperation('Import Excel services',`${added.length} service(s)`);toast('Services importés');render();
  } catch(e){console.error(e);toast('Impossible de lire le fichier Services.');}
}
function exportFinanceModuleXLSX(mode) {
  const items = mode === 'equipment' ? state.equipmentPurchases : state.expenses;
  const rows = items.map(item => mode === 'equipment' ? ({ Date:item.date, Désignation:item.name, Catégorie:item.category, Montant:item.amount, Fournisseur:item.supplier||'', Paiement:item.payment||'', Note:item.note||'' }) : ({ Date:item.date, Catégorie:item.category, Description:item.description, Montant:item.amount, Bénéficiaire:item.payee||'', Paiement:item.payment||'', Note:item.note||'' }));
  downloadExcelRows(rows, `phonestock-${mode === 'equipment' ? 'equipements' : 'depenses'}-${localDateInputValue()}.xlsx`, mode === 'equipment' ? 'Equipements' : 'Depenses');
}
async function importFinanceModuleXLSX(mode, file) {
  try { if(typeof XLSX==='undefined'){toast('Bibliothèque Excel indisponible.');return;} const rows=excelRowsFromSheet(await parseExcelFile(file));if(!rows.length){toast('La feuille Excel est vide.');return;}
    const invalid=rows.find(r=>!String(mode==='equipment'?r.Désignation:r.Description||'').trim()||excelNumber(r.Montant)==null||excelNumber(r.Montant)<=0);if(invalid){toast('Ligne invalide : désignation/description et montant positif requis.');return;}if(!confirmLocalized(`Importer ${rows.length} enregistrement(s) ?`))return;
    const cats=mode==='equipment'?getEquipmentCategories():getExpenseCategories();const target=mode==='equipment'?state.equipmentPurchases:state.expenses;const added=[];for(const r of rows){const category=String(r.Catégorie||'Autre').trim()||'Autre';if(!cats.includes(category)){if(mode==='equipment')state.equipmentCategories.push(category);else state.expenseCategories.push(category);await (mode==='equipment'?saveEquipmentCategories():saveExpenseCategories());}if(mode==='equipment')added.push({id:uid('eq'),date:excelDate(r.Date,localDateInputValue()).slice(0,10),name:String(r.Désignation).trim(),category,amount:excelNumber(r.Montant,0),supplier:String(r.Fournisseur||'').trim(),payment:String(r.Paiement||'Espèces'),note:String(r.Note||'').trim()});else added.push({id:uid('ex'),date:excelDate(r.Date,localDateInputValue()).slice(0,10),category,description:String(r.Description).trim(),amount:excelNumber(r.Montant,0),payee:String(r.Bénéficiaire||'').trim(),payment:String(r.Paiement||'Espèces'),note:String(r.Note||'').trim()});}target.push(...added);const result=await (mode==='equipment'?saveEquipmentPurchases():saveExpenses());if(result===null){toast('Échec de sauvegarde des données importées.');return;}await logOperation(`Import Excel ${mode==='equipment'?'équipements':'dépenses'}`,`${added.length} enregistrement(s)`);toast('Données importées');render();
  }catch(e){console.error(e);toast('Impossible de lire le fichier Excel.');}
}
function exportRechargesXLSX(){downloadExcelRows(state.rechargeAccounts.map(a=>({Nom:a.name,Type:a.type,'Opérateur / fournisseur':a.provider||'',Solde:rechargeBalance(a),Note:a.note||''})),`phonestock-recharges-${localDateInputValue()}.xlsx`,'Recharges');}
async function importRechargesXLSX(file){try{if(typeof XLSX==='undefined'){toast('Bibliothèque Excel indisponible.');return;}const rows=excelRowsFromSheet(await parseExcelFile(file),'Recharges');if(!rows.length){toast('La feuille Recharges est vide.');return;}const invalid=rows.find(r=>!String(r.Nom||'').trim()||excelNumber(r.Solde,0)<0);if(invalid){toast('Recharge invalide : nom et solde positif ou nul requis.');return;}if(!confirmLocalized(`Importer ${rows.length} compte(s) rechargeable(s) ?`))return;const added=rows.map(r=>({id:uid('ra'),name:String(r.Nom).trim(),type:String(r.Type||'Autre'),provider:String(r['Opérateur / fournisseur']||'').trim(),balance:excelNumber(r.Solde,0),note:String(r.Note||'').trim(),deposits:[]}));state.rechargeAccounts.push(...added);if(await saveRechargeAccounts()===null){toast('Échec de sauvegarde des recharges importées.');return;}await logOperation('Import Excel recharges',`${added.length} compte(s)`);toast('Recharges importées');render();}catch(e){console.error(e);toast('Impossible de lire le fichier Recharges.');}}

/* ---------------- Services non stockés ---------------- */
function renderServiceSalesSummary() {
  const rows = [];
  state.sales.forEach(sale => (sale.items || []).forEach((item, itemIndex) => {
    if (!(item.isService || item.serviceId)) return;
    const service = state.services.find(value => value.id === item.serviceId);
    const qty = Number(item.qty) || 0; const revenue = (Number(item.price) || 0) * qty; const cost = (Number(item.unitCost) || Number(service?.cost) || 0) * qty;
    rows.push({ saleId: sale.id, itemIndex, date: sale.date, service: item.name || service?.name || 'Service', category: item.category || service?.category || '—', qty, revenue, margin: revenue - cost });
  }));
  rows.sort((a, b) => new Date(b.date) - new Date(a.date));
  const totalQty = rows.reduce((sum, row) => sum + row.qty, 0); const totalRevenue = rows.reduce((sum, row) => sum + row.revenue, 0); const totalMargin = rows.reduce((sum, row) => sum + row.margin, 0);
  return `<div class="card module-summary-card"><div class="section-title">Récapitulatif des services vendus</div><div class="muted module-summary-meta">${totalQty} prestation${totalQty !== 1 ? 's' : ''} · Total : ${money(totalRevenue)} DH · Marge : ${money(totalMargin)} DH</div>${rows.length ? `<table class="rcard"><thead><tr><th>Date</th><th>Service</th><th>Catégorie</th><th>Qté</th><th>Total</th><th>Marge</th><th></th></tr></thead><tbody>${rows.map(row => `<tr><td data-label="Date" class="mono muted">${fmtDateTime(row.date)}</td><td data-label="Service"><strong>${esc(row.service)}</strong></td><td data-label="Catégorie">${esc(row.category)}</td><td data-label="Qté" class="mono">${row.qty}</td><td data-label="Total" class="price">${money(row.revenue)} DH</td><td data-label="Marge" class="price">${money(row.margin)} DH</td><td data-label="Actions"><div class="row-actions"><button class="btn btn-sm icon-btn" data-edit-service-sale="${row.saleId}" data-edit-service-item="${row.itemIndex}" title="Modifier" aria-label="Modifier">${ICONS.edit}</button><button class="btn btn-sm icon-btn btn-danger" data-delete-service-sale="${row.saleId}" title="Supprimer" aria-label="Supprimer">${ICONS.trash}</button></div></td></tr>`).join('')}</tbody></table>` : emptyState('settings', 'Aucun service vendu', 'Les ventes de services apparaîtront ici.')}</div>`;
}
function renderServices() {
  const q = normalizeSearchText(state.serviceSearch || '');
  const categoryFilter = state.serviceCategoryFilter || '';
  const rows = state.services.filter(service => (!q || [service.name, service.category, service.description].some(v => normalizeSearchText(v).includes(q))) && (!categoryFilter || service.category === categoryFilter)).sort((a,b) => a.name.localeCompare(b.name, 'fr'));
  return `<div class="toolbar"><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;"><input class="search-input" id="serviceSearch" placeholder="Rechercher un service ou une catégorie…" value="${esc(state.serviceSearch || '')}"><select class="search-input" id="serviceCategoryFilter"><option value="">Toutes les catégories</option>${getServiceCategories().map(c => `<option value="${esc(c)}" ${state.serviceCategoryFilter === c ? 'selected' : ''}>${esc(c)}</option>`).join('')}</select>${q || categoryFilter ? '<button class="btn btn-sm" id="clearServiceFilters">Réinitialiser</button>' : ''}</div><div class="muted mono">${rows.length} service${rows.length !== 1 ? 's' : ''}</div>${moduleExcelActions('Services', 'Services')}</div>
  <div class="card" style="padding:18px;margin-bottom:18px;"><div class="section-title">Catalogue des services</div><div class="muted" style="font-size:12px;margin:4px 0 14px;">Les services sont vendus sans créer de produit et sans modifier le stock.</div>
  ${rows.length ? `<table class="rcard"><thead><tr><th>Service</th><th>Catégorie</th><th>Prix de vente</th><th>Coût</th><th>Marge</th><th></th></tr></thead><tbody>${rows.map(service => `<tr><td data-label="Service"><strong>${esc(service.name)}</strong>${service.description ? `<div class="muted">${esc(service.description)}</div>` : ''}</td><td data-label="Catégorie"><span class="pill pill-ok">${esc(service.category)}</span></td><td data-label="Prix de vente" class="price">${money(service.price)} DH</td><td data-label="Coût" class="mono">${money(service.cost)} DH</td><td data-label="Marge" class="price" style="color:var(--success)">${money(service.price-service.cost)} DH</td><td data-label=""><div class="row-actions"><button class="btn btn-sm btn-primary" data-sell-service="${service.id}">Vendre</button><button class="btn btn-sm icon-btn" data-edit-service="${service.id}" title="Modifier">${ICONS.edit}</button><button class="btn btn-sm icon-btn btn-danger" data-delete-service="${service.id}" title="Supprimer">${ICONS.trash}</button></div></td></tr>`).join('')}</tbody></table>` : emptyState('settings', 'Aucun service', 'Ajoutez vos prestations de réparation, configuration ou impression.')}</div>${renderServiceSalesSummary()}`;
}
function renderServiceModal() {
  const service = state.editingService === 'new' ? null : state.editingService;
  const category = service?.category || getServiceCategories()[0] || 'Autres services';
  return `<div class="modal-overlay" role="dialog" aria-modal="true"><div class="modal"><h2>${service ? 'Modifier le service' : 'Nouveau service'}</h2><div class="field"><label>Nom du service</label><input id="service_name" maxlength="120" value="${esc(service?.name || '')}" placeholder="Ex. Remplacement écran iPhone 13"></div><div class="field"><label>Catégorie</label><div class="category-select-with-add"><select id="service_category">${getServiceCategories().map(c => `<option ${c === category ? 'selected' : ''}>${esc(c)}</option>`).join('')}</select><button type="button" class="btn btn-sm icon-btn" id="addServiceCategoryBtn" title="Ajouter ou supprimer une catégorie" aria-label="Ajouter ou supprimer une catégorie">${ICONS.plus}</button></div></div><div class="field-row"><div class="field"><label>Prix de vente (DH)</label><input id="service_price" type="text" inputmode="decimal" value="${esc(service?.price ?? '')}"></div><div class="field"><label>Coût éventuel (DH)</label><input id="service_cost" type="text" inputmode="decimal" value="${esc(service?.cost ?? 0)}"></div></div><div class="field"><label>Description / note</label><textarea id="service_description" rows="3" maxlength="500" placeholder="Détails de la prestation">${esc(service?.description || '')}</textarea></div><div class="modal-actions"><button class="btn" id="cancelServiceModal">Annuler</button><button class="btn btn-primary" id="saveServiceModal">Enregistrer</button></div></div></div>`;
}
function renderServiceSaleModal() {
  const service = state.services.find(s => s.id === state.serviceSaleModalOpen?.serviceId);
  if (!service) return '';
  const d = state.serviceSaleModalOpen;
  return `<div class="modal-overlay" role="dialog" aria-modal="true"><div class="modal"><h2>Vendre un service</h2><p class="muted" style="margin-top:4px;margin-bottom:14px;">${esc(service.name)} · ${esc(service.category)}</p><div class="field"><label>Prix de vente (DH)</label><input id="service_sale_price" type="text" inputmode="decimal" value="${esc(d.price ?? service.price)}"></div><div class="field-row"><div class="field"><label>Date</label><input id="service_sale_date" type="date" value="${esc(d.date || localDateInputValue())}"></div><div class="field"><label>Heure</label><input id="service_sale_time" type="time" value="${esc(d.time || localTimeInputValue())}"></div></div><div class="field"><label>Client</label><select id="service_sale_client"><option value="">Client de passage</option>${state.clients.map(c => `<option value="${c.id}" ${d.clientId === c.id ? 'selected' : ''}>${esc(c.name)} (${esc(c.clientCode || '')})</option>`).join('')}</select></div><div class="field"><label>Mode de paiement</label><select id="service_sale_payment"><option ${d.payment === 'Espèces' ? 'selected' : ''}>Espèces</option><option ${d.payment === 'Carte' ? 'selected' : ''}>Carte</option><option ${d.payment === 'Mobile money' ? 'selected' : ''}>Mobile money</option></select></div><div class="field"><label>Description / note</label><textarea id="service_sale_note" rows="3" maxlength="500">${esc(d.note || service.description || '')}</textarea></div><div class="modal-actions"><button class="btn" id="cancelServiceSale">Annuler</button><button class="btn btn-primary" id="saveServiceSale">Enregistrer la vente</button></div></div></div>`;
}

/* ---------------- POS / Caisse ---------------- */
/* Increments (or creates) a cart line and moves it to the top of the list,
   so the most recently added/touched product is always visible without
   scrolling. The price is captured once, from the oldest lot still in
   stock (FIFO), so it doesn't shift mid-sale if stock data changes. */
function bumpCartLine(productId, delta, maxQty, unitPrice) {
  const existing = state.posCart.find(l => l.productId === productId);
  let qty = existing ? existing.qty + delta : delta;
  qty = Math.max(1, Math.min(qty, maxQty));
  const price = existing ? existing.price : (unitPrice != null ? unitPrice : productSellPrice(productId));
  state.posCart = state.posCart.filter(l => l.productId !== productId);
  state.posCart.unshift({ productId, qty, price });
}

function estimateCartFifoCost(cartLines) {
  let totalCost = 0; let coveredUnits = 0;
  cartLines.forEach(line => {
    let remaining = Math.max(0, Number.parseInt(line.qty, 10) || 0);
    const lots = productLots(line.p.id).filter(l => Number(l.qtyRemaining) > 0);
    for (const lot of lots) {
      if (remaining <= 0) break;
      const take = Math.min(Number(lot.qtyRemaining) || 0, remaining);
      totalCost += take * (Number(lot.unitCost) || 0);
      coveredUnits += take; remaining -= take;
    }
  });
  return { totalCost, coveredUnits };
}

function renderBulkSaleModal() {
  const lines = state.bulkSaleLines || [{ id: uid('bl'), productId: '', sku: '', qty: '', unitPrice: '' }];
  const clientId = state.bulkSaleClientId || '';
  const date = state.bulkSaleDate || localDateInputValue();
  const time = state.bulkSaleTime || localTimeInputValue();
  const payment = state.bulkSalePayment || 'Espèces';
  return `<div class="modal-overlay" role="dialog" aria-modal="true" id="bulkSaleModalOverlay"><div class="modal modal-wide bulk-sale-modal">
    <h2>Saisir une vente en lot</h2>
    <p class="muted" style="font-size:12px;margin-top:4px;margin-bottom:12px;">Les lignes sont enregistrées dans une seule vente et le stock est contrôlé selon la règle FIFO.</p>
    <div class="bulk-sale-meta">
      <div class="field"><label>Client</label><select id="bulk_sale_client"><option value="">Client de passage</option>${state.clients.map(c => `<option value="${c.id}" ${clientId === c.id ? 'selected' : ''}>${esc(c.name)} (${esc(c.clientCode || '')})</option>`).join('')}</select></div>
      <div class="field"><label>Date</label><input id="bulk_sale_date" type="date" value="${date}"></div>
      <div class="field"><label>Heure</label><input id="bulk_sale_time" type="time" value="${time}"></div>
      <div class="field"><label>Mode de paiement</label><select id="bulk_sale_payment"><option value="Espèces" ${payment === 'Espèces' ? 'selected' : ''}>Espèces</option><option value="Carte" ${payment === 'Carte' ? 'selected' : ''}>Carte bancaire</option><option value="Mobile money" ${payment === 'Mobile money' ? 'selected' : ''}>Mobile money</option></select></div>
    </div>
    <div class="field"><label>Produits vendus</label><div id="bulkSaleLines">${lines.map(line => `<div class="purchase-line-grid bulk-sale-line"><button type="button" class="btn btn-sm icon-btn purchase-line-scan-btn" data-scan-bulk-sale-line="${line.id}" title="Scanner le code" aria-label="Scanner le code">${ICONS.scan}</button><div class="field purchase-line-code-field"><label>Code P / code</label><input id="bl_sku_${line.id}" data-bulk-sale-sku="${line.id}" placeholder="Code P exact" value="${esc(line.sku || '')}"></div><div class="field"><label>Produit</label><select id="bl_product_${line.id}" data-bulk-sale-product="${line.id}"><option value="">Choisir un produit</option>${state.products.filter(p => !p.archived).map(p => `<option value="${p.id}" ${line.productId === p.id ? 'selected' : ''}>${esc(p.name)} — ${esc(p.model)}</option>`).join('')}</select></div><div class="field"><label>Qté</label><input id="bl_qty_${line.id}" data-bulk-sale-field="qty" data-line="${line.id}" type="number" min="1" step="1" value="${esc(line.qty)}"></div><div class="field"><label>Prix vente</label><input id="bl_price_${line.id}" data-bulk-sale-field="unitPrice" data-line="${line.id}" type="number" min="0" step="0.01" value="${esc(line.unitPrice)}"></div><div class="purchase-line-total"><span>Montant</span><strong id="bl_total_${line.id}">0,00 DH</strong></div><button type="button" class="btn btn-sm btn-danger" data-remove-bulk-sale-line="${line.id}" style="height:38px;">✕</button></div>`).join('')}</div><button class="btn btn-sm" id="addBulkSaleLine">${ICONS.plus}Ajouter une ligne</button></div>
    <div class="bulk-summary" id="bulkSaleSummary" aria-live="polite"><div><span>Lignes valides</span><strong id="bulkSaleSummaryLines">0</strong></div><div><span>Unités</span><strong id="bulkSaleSummaryQty">0</strong></div><div><span>Total brut</span><strong id="bulkSaleSummaryGross">0,00 DH</strong></div><div><span>Réduction</span><strong id="bulkSaleSummaryDiscount">0,00 DH</strong></div><div><span>Total à payer</span><strong id="bulkSaleSummaryTotal">0,00 DH</strong></div></div>
    <div class="bulk-sale-payment-row"><div class="field"><label>Réduction (DH)</label><input id="bulk_sale_discount" type="text" inputmode="decimal" data-decimal-input="1" value="${esc(state.bulkSaleDiscount || '')}" placeholder="0"></div><div class="field"><label>Montant payé</label><input id="bulk_sale_paid" type="text" inputmode="decimal" data-decimal-input="1" value="${esc(state.bulkSalePaid || '')}" placeholder="Laisser vide pour paiement complet"></div></div>
    <div class="modal-actions"><button class="btn" id="cancelBulkSaleModal">Annuler</button><button class="btn btn-primary" id="saveBulkSaleModal">Enregistrer la vente</button></div>
  </div></div>`;
}

function updateBulkSaleSummary() {
  const lines = state.bulkSaleLines || [];
  let valid = 0; let units = 0; let gross = 0;
  lines.forEach(line => {
    const qty = Math.max(0, parseInt(document.getElementById(`bl_qty_${line.id}`)?.value ?? line.qty, 10) || 0);
    const price = Math.max(0, parseFloat(document.getElementById(`bl_price_${line.id}`)?.value ?? line.unitPrice) || 0);
    if (line.productId && qty > 0) valid += 1;
    units += qty; gross += qty * price;
    const total = document.getElementById(`bl_total_${line.id}`); if (total) total.textContent = `${money(qty * price)} DH`;
  });
  const discount = Math.max(0, Math.min(parseFloat(state.bulkSaleDiscount) || 0, gross));
  const values = { bulkSaleSummaryLines: valid, bulkSaleSummaryQty: units, bulkSaleSummaryGross: `${money(gross)} DH`, bulkSaleSummaryDiscount: `${money(discount)} DH`, bulkSaleSummaryTotal: `${money(gross - discount)} DH` };
  Object.entries(values).forEach(([id, value]) => { const el = document.getElementById(id); if (el) el.textContent = value; });
}

function syncBulkSaleDraftFromDOM() {
  if (!state.bulkSaleLines) return;
  state.bulkSaleClientId = document.getElementById('bulk_sale_client')?.value || '';
  state.bulkSaleDate = document.getElementById('bulk_sale_date')?.value || localDateInputValue();
  state.bulkSaleTime = document.getElementById('bulk_sale_time')?.value || localTimeInputValue();
  state.bulkSalePayment = document.getElementById('bulk_sale_payment')?.value || 'Espèces';
  state.bulkSaleDiscount = document.getElementById('bulk_sale_discount')?.value || '';
  state.bulkSalePaid = document.getElementById('bulk_sale_paid')?.value || '';
  state.bulkSaleLines.forEach(line => {
    const sku = document.getElementById(`bl_sku_${line.id}`); const product = document.getElementById(`bl_product_${line.id}`); const qty = document.getElementById(`bl_qty_${line.id}`); const price = document.getElementById(`bl_price_${line.id}`);
    if (sku) line.sku = sku.value.trim();
    if (line.sku) { const match = findProductBySku(line.sku); line.productId = match && !match.archived ? match.id : ''; if (product) product.value = line.productId; }
    else if (product) line.productId = product.value;
    if (qty) line.qty = qty.value; if (price) line.unitPrice = price.value;
  });
  updateBulkSaleSummary();
}
function resetBulkSaleDraft() { state.bulkSaleModalOpen = false; state.bulkSaleLines = null; state.bulkSaleClientId = ''; state.bulkSaleDate = ''; state.bulkSaleTime = ''; state.bulkSalePayment = 'Espèces'; state.bulkSalePaid = ''; state.bulkSaleDiscount = ''; state.bulkSaleScanLineId = null; }

function renderPOS() {
  const q = normalizeSearchText(state.posSearch);
  const cat = state.posCategory;
  const list = state.products.filter(p =>
    !p.archived &&
    (cat === 'Tous' || p.category === cat) &&
    (!q || [p.name, p.brand, p.model, p.category, p.sku].some(v => normalizeSearchText(v).includes(q)))
  );
  const cartLines = state.posCart.map(line => {
    const p = state.products.find(pp => pp.id === line.productId);
    return p ? { p, qty: line.qty, price: line.price } : null;
  }).filter(Boolean);
  const subtotal = cartLines.reduce((sum, line) => sum + line.price * line.qty, 0);
  const discountNum = Math.max(0, Math.min(parseFloat(state.posDiscount) || 0, subtotal));
  const total = subtotal - discountNum;
  const paidNum = state.posPaidOverride === null ? total : (parseFloat(state.posPaidOverride) || 0);
  const paidDisplay = state.posPaidOverride === null ? String(total) : state.posPaidOverride;
  const codeQuery = state.posClientCodeInput.trim().toLowerCase();
  const matchedClient = codeQuery ? state.clients.find(c => (c.clientCode || '').toLowerCase() === codeQuery) : null;
  const categories = ['Tous', ...getCategories()].sort((a,b) => a === 'Tous' ? -1 : b === 'Tous' ? 1 : normalizeSearchText(a).localeCompare(normalizeSearchText(b), 'fr'));
  const sortedList = [...list].sort((a,b) => normalizeSearchText(a.name).localeCompare(normalizeSearchText(b.name), 'fr'));
  return `
    <div class="pos-layout" aria-label="Caisse">
      <aside class="pos-categories-zone">
        <div class="pos-zone-heading">Catégories</div>
        <div class="pos-categories-scroll">
          ${categories.map(c => `<button class="btn btn-sm pos-category-btn ${cat === c ? 'btn-primary' : ''}" data-pos-cat="${esc(c)}">${esc(c)}</button>`).join('')}
        </div>
      </aside>
      <section class="pos-products-zone">
        <div class="pos-zone-heading">Produits <span class="muted mono">${list.length}</span></div>
        <div class="pos-products-scroll">
          <div class="pos-grid">
            ${sortedList.map(p => {
              const stock = productStock(p.id);
              const price = productSellPrice(p.id);
              return `<button class="pos-product" data-add-cart="${p.id}" ${stock <= 0 ? 'disabled style="opacity:.45;cursor:not-allowed;"' : ''}>
                ${safeImageSrc(p.photo) ? `<img class="photo" src="${esc(safeImageSrc(p.photo))}" alt="">` : `<div class="photo-placeholder">${ICONS.box}</div>`}
                <div class="name">${esc(p.name)}</div>
                <div class="meta">${esc(p.brand)} · ${esc(p.model)}<br><span class="mono">${esc(p.sku)}</span></div>
                <div class="foot"><span class="price">${money(price)} DH</span><span class="muted mono" style="font-size:10.5px;"><span class="stockdot" style="background:${stockStatus(p) === 'ok' ? 'var(--accent)' : stockStatus(p) === 'warn' ? 'var(--accent-2)' : 'var(--danger)'}"></span>${stock}</span></div>
              </button>`;
            }).join('') || `<div style="grid-column:1/-1;">${emptyState('box', 'Aucun résultat', 'Essayez un autre nom, catégorie ou code produit.')}</div>`}
          </div>
        </div>
      </section>
      <aside class="pos-right-zone">
        <div class="cart-panel">
          <div class="cart-header"><h3>Panier <span class="cart-header-metrics" aria-label="Nombre d’articles et montant"><span class="cart-count">${cartLines.reduce((sum, l) => sum + l.qty, 0)}</span><span class="cart-header-separator">·</span><span class="cart-header-total">${money(total)} DH</span></span></h3>${cartLines.length ? `<button class="btn btn-sm btn-danger" id="clearCart">Vider</button>` : ''}</div>
          <div class="cart-items">
            ${cartLines.length === 0 ? emptyState('cart', 'Panier vide', 'Cliquez sur un produit pour l’ajouter.') : cartLines.map(l => `<div class="cart-item"><div class="cart-item-top"><span>${esc(l.p.name)}</span><span class="price">${money(l.price * l.qty)}</span></div><div class="cart-item-controls"><div class="qty-ctrl"><button data-cart-dec="${l.p.id}">−</button><span>${l.qty}</span><button data-cart-inc="${l.p.id}" ${l.qty >= productStock(l.p.id) ? 'disabled' : ''}>+</button></div><button class="btn btn-sm btn-danger" data-cart-remove="${l.p.id}" style="padding:3px 8px;">✕</button></div></div>`).join('')}
          </div>
        </div>
        <button class="btn btn-primary pos-payment-toggle" id="togglePaymentPanel" type="button" ${cartLines.length === 0 ? 'disabled' : ''}>${state.posPaymentOpen ? 'Masquer le paiement' : 'Paiement'}</button>
        ${state.posPaymentOpen && cartLines.length > 0 ? `<div class="checkout-panel">
          <div class="cart-total-row"><span class="label">Sous-total</span><span class="mono">${money(subtotal)} DH</span></div>
          <div class="paid-row"><label>Réduction (DH)</label><input type="text" inputmode="decimal" autocomplete="off" data-decimal-input="1" id="posDiscount" value="${esc(state.posDiscount)}" placeholder="0"></div>
          <div class="cart-total-row"><span class="label">Total</span><span class="lcd-total">${money(total)} DH</span></div>
          <select class="pay-select" id="paymentMethod"><option value="Espèces" ${state.posPayment === 'Espèces' ? 'selected' : ''}>Espèces</option><option value="Carte" ${state.posPayment === 'Carte' ? 'selected' : ''}>Carte bancaire</option><option value="Mobile money" ${state.posPayment === 'Mobile money' ? 'selected' : ''}>Mobile money</option></select>
          <div class="paid-row"><label>Code client</label><input type="text" id="posClientCode" value="${esc(state.posClientCodeInput)}" placeholder="CL-0001"></div>
          ${matchedClient ? `<div class="muted" style="font-size:11.5px;margin:4px 0 8px 0;color:var(--accent);">→ ${esc(matchedClient.name)}</div>` : (codeQuery.length >= 2 ? `<div style="font-size:11.5px;margin:4px 0 8px 0;color:var(--danger);">Aucun client avec ce code</div>` : '')}
          <select class="pay-select" id="posClient"><option value="" ${state.posClientId === '' ? 'selected' : ''}>Client de passage</option>${state.clients.map(c => `<option value="${c.id}" ${state.posClientId === c.id ? 'selected' : ''}>${esc(c.name)} (${esc(c.clientCode || '')})</option>`).join('')}</select>
          <div class="paid-row" style="margin-bottom:0;"><label>Montant payé</label><input type="text" inputmode="decimal" autocomplete="off" data-decimal-input="1" id="posPaidAmount" value="${esc(paidDisplay)}"></div>
          ${paidNum < total ? `<div class="muted" style="font-size:11.5px;margin-top:6px;">Reste dû : <strong style="color:var(--danger)">${money(total - paidNum)} DH</strong> — nécessite un client identifié</div>` : (paidNum > total ? `<div class="muted" style="font-size:11.5px;margin-top:6px;">Monnaie à rendre : <strong style="color:var(--accent)">${money(paidNum - total)} DH</strong></div>` : '')}
          <button class="btn btn-primary" id="checkoutBtn" style="width:100%;justify-content:center;padding:12px 0;font-size:14px;margin-top:10px;" ${state.operationBusy ? 'disabled' : ''}>Encaisser la vente</button>
        </div>` : ''}
      </aside>
    </div>`;
}
/* ---------------- Margin reports ---------------- */
function reportSalesForPeriod() {
  const f = state.reportFilters || {};
  let sales = [...state.sales];
  if (f.from) { const from = new Date(`${f.from}T00:00:00`); sales = sales.filter(s => new Date(s.date) >= from); }
  if (f.to) { const to = new Date(`${f.to}T23:59:59.999`); sales = sales.filter(s => new Date(s.date) <= to); }
  if (f.sellerId) sales = sales.filter(s => s.sellerId === f.sellerId);
  if (f.productId) sales = sales.filter(s => (s.items || []).some(it => it.productId === f.productId));
  return sales.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function buildMarginReportData() {
  const sales = reportSalesForPeriod();
  const products = new Map(); const days = new Map();
  let revenueGross = 0; let discounts = 0; let revenueNet = 0; let totalCost = 0; let units = 0;
  sales.forEach(sale => {
    const items = (sale.items || []).filter(it => Number(it.qty) > 0);
    const grossSubtotal = Number(sale.subtotal) || items.reduce((sum, it) => sum + (Number(it.price) || 0) * (Number(it.qty) || 0), 0);
    const saleDiscount = Math.max(0, Number(sale.discount) || 0);
    let saleCost = 0; let saleUnits = 0; let saleGross = 0;
    items.forEach(item => {
      const qty = Number(item.qty) || 0; const gross = (Number(item.price) || 0) * qty;
      const cost = (Number(item.unitCost) || 0) * qty;
      const allocatedDiscount = grossSubtotal > 0 ? saleDiscount * gross / grossSubtotal : 0;
      const net = Math.max(0, gross - allocatedDiscount);
      const product = state.products.find(p => p.id === item.productId);
      const key = item.productId || `unknown:${item.name || 'Produit'}`;
      const row = products.get(key) || { sku: product?.sku || '', product: item.name || product?.name || 'Produit supprimé', units: 0, gross: 0, discount: 0, net: 0, cost: 0 };
      row.units += qty; row.gross += gross; row.discount += allocatedDiscount; row.net += net; row.cost += cost; products.set(key, row);
      saleUnits += qty; saleGross += gross; saleCost += cost;
    });
    const saleNet = Number(sale.total) || Math.max(0, saleGross - saleDiscount);
    revenueGross += saleGross; discounts += saleDiscount; revenueNet += saleNet; totalCost += saleCost; units += saleUnits;
    const dayKey = String(sale.date || '').slice(0, 10) || 'inconnue';
    const day = days.get(dayKey) || { date: dayKey, sales: 0, units: 0, revenue: 0, cost: 0, margin: 0 };
    day.sales += 1; day.units += saleUnits; day.revenue += saleNet; day.cost += saleCost; day.margin += saleNet - saleCost; days.set(dayKey, day);
  });
  const productRows = [...products.values()].map(row => ({ ...row, margin: row.net - row.cost, marginRate: row.net > 0 ? ((row.net - row.cost) / row.net) * 100 : 0 })).sort((a, b) => b.margin - a.margin);
  const dayRows = [...days.values()].sort((a, b) => a.date.localeCompare(b.date)).map(row => ({ ...row, marginRate: row.revenue > 0 ? (row.margin / row.revenue) * 100 : 0 }));
  const revenue = revenueNet; const margin = revenue - totalCost;
  const detailRows = sales.map(sale => {
    const cost = (sale.items || []).reduce((sum, it) => sum + (Number(it.qty) || 0) * (Number(it.unitCost) || 0), 0);
    const total = Number(sale.total) || 0; const client = state.clients.find(c => c.id === sale.clientId);
    return { number: sale.number || '', date: fmtDateTime(sale.date), seller: sale.sellerName || '', client: client?.name || 'Client de passage', units: (sale.items || []).reduce((sum, it) => sum + (Number(it.qty) || 0), 0), revenue: total, cost, margin: total - cost, payment: sale.payment || '', status: saleStatus(sale) };
  });
  return { sales, revenueGross, discounts, revenue, totalCost, margin, marginRate: revenue > 0 ? (margin / revenue) * 100 : 0, units, productRows, dayRows, detailRows };
}


function operationReportRange() {
  const period = state.operationReportPeriod || 'month';
  const today = new Date();
  const dayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const endOfDay = date => new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
  let start = new Date(dayStart);
  let end = endOfDay(dayStart);
  if (period === 'week') {
    start.setDate(start.getDate() - 6);
  } else if (period === 'month') {
    const monthValue = /^\d{4}-\d{2}$/.test(state.operationReportMonth || '') ? state.operationReportMonth : localDateInputValue(today).slice(0, 7);
    const [year, month] = monthValue.split('-').map(Number);
    start = new Date(year, month - 1, 1);
    end = endOfDay(new Date(year, month, 0));
  } else if (period === 'year') {
    start = new Date(today.getFullYear(), 0, 1);
    end = endOfDay(new Date(today.getFullYear(), 11, 31));
  } else if (period === 'custom') {
    const from = state.operationReportFrom || localDateInputValue(new Date(today.getFullYear(), today.getMonth(), 1));
    const to = state.operationReportTo || localDateInputValue(today);
    start = new Date(`${from}T00:00:00`);
    end = new Date(`${to}T23:59:59.999`);
  }
  return { period, from: localDateInputValue(start), to: localDateInputValue(end), start, end };
}

function buildOperationsReportData() {
  const range = operationReportRange();
  const reportFilters = state.reportFilters || {};
  const excludedSaleCategories = new Set(reportFilters.excludeSaleCategories || []);
  const excludedPurchaseCategories = new Set(reportFilters.excludePurchaseCategories || []);
  const excludedPurchaseSuppliers = new Set(reportFilters.excludePurchaseSuppliers || []);
  const productCategory = item => item.isRecharge ? 'Recharges' : (item.isService || item.serviceId ? (item.category || state.services.find(service => service.id === item.serviceId)?.category || 'Services') : (state.products.find(p => p.id === item.productId)?.category || ''));
  const inRange = entry => {
    const date = new Date(entry.date);
    return !Number.isNaN(date.getTime()) && date >= range.start && date <= range.end;
  };
  const sales = state.sales.filter(inRange).filter(sale => (sale.items || []).some(item => !excludedSaleCategories.has(productCategory(item)))).sort((a, b) => new Date(b.date) - new Date(a.date));
  const purchases = state.purchases.filter(inRange).filter(purchase => !excludedPurchaseSuppliers.has(purchase.supplierId || '') && (purchase.items || []).some(item => !excludedPurchaseCategories.has(productCategory(item)))).sort((a, b) => new Date(b.date) - new Date(a.date));
  const payments = state.payments.filter(inRange).sort((a, b) => new Date(b.date) - new Date(a.date));
  const saleRows = []; const purchaseRows = []; const paymentRows = []; const rows = [];
  let salesAmount = 0, salesGross = 0, salesDiscount = 0, salesCost = 0, salesMargin = 0;
  let purchasesAmount = 0, purchaseProjectedSale = 0, purchasePotentialMargin = 0, paymentsAmount = 0, salesUnits = 0, purchaseUnits = 0;
  sales.forEach(sale => {
    const items = (sale.items || []).filter(item => Number(item.qty) > 0);
    const includedItems = items.filter(item => !excludedSaleCategories.has(productCategory(item)));
    const grossSubtotal = Number(sale.subtotal) || items.reduce((sum, item) => sum + (Number(item.price) || 0) * (Number(item.qty) || 0), 0);
    const discount = Math.max(0, Number(sale.discount) || 0);
    const client = state.clients.find(c => c.id === sale.clientId);
    let saleGross = 0; let saleCost = 0; let saleNet = 0; let saleMargin = 0; let saleUnits = 0;
    includedItems.forEach(item => {
      const product = state.products.find(p => p.id === item.productId);
      const qty = Number(item.qty) || 0; const buy = Number(item.unitCost) || 0; const sell = Number(item.price) || 0;
      const gross = qty * sell; const allocatedDiscount = grossSubtotal > 0 ? discount * gross / grossSubtotal : 0;
      const net = Math.max(0, gross - allocatedDiscount); const cost = qty * buy; const margin = net - cost;
      saleGross += gross; saleCost += cost; saleNet += net; saleMargin += margin; saleUnits += qty;
      saleRows.push({ date: sale.date, type: 'VENTE', ref: `Bon #${sale.number || sale.id || '—'}`, product: item.name || product?.name || 'Produit supprimé', sku: product?.sku || item.sku || '', category: product?.category || '', party: client?.name || 'Client de passage', seller: sale.sellerName || '', qty, unitCost: buy, unitPrice: sell, gross, discount: allocatedDiscount, net, cost, unitMargin: sell - buy, margin, marginRate: net > 0 ? margin / net * 100 : 0 });
    });
    const includedDiscount = includedItems.reduce((sum, item) => {
      const gross = (Number(item.price) || 0) * (Number(item.qty) || 0);
      return sum + (grossSubtotal > 0 ? discount * gross / grossSubtotal : 0);
    }, 0);
    const amount = Number(sale.total); const netAmount = excludedSaleCategories.size ? saleNet : (Number.isFinite(amount) ? amount : saleNet);
    salesAmount += netAmount; salesGross += saleGross; salesDiscount += excludedSaleCategories.size ? includedDiscount : discount; salesCost += saleCost; salesMargin += netAmount - saleCost; salesUnits += saleUnits;
    rows.push({ date: sale.date, type: 'VENTE', ref: `Bon #${sale.number || sale.id || '—'}`, description: includedItems.map(item => `${item.qty}× ${item.name || 'Produit'}`).join(', ') || 'Vente', party: client?.name || 'Client de passage', units: saleUnits, amount: netAmount, incoming: netAmount, outgoing: 0, impact: netAmount });
  });
  purchases.forEach(purchase => {
    const supplier = state.suppliers.find(s => s.id === purchase.supplierId);
    let purchaseAmount = 0; let projectedSale = 0; let units = 0;
    const includedItems = (purchase.items || []).filter(item => !excludedPurchaseCategories.has(productCategory(item)));
    includedItems.forEach(item => {
      const product = state.products.find(p => p.id === item.productId);
      const qty = Number(item.qty) || 0; const buy = Number(item.unitCost) || 0; const sell = Number(item.unitPrice) || 0;
      const totalPurchase = qty * buy; const saleValue = qty * sell; const potentialMargin = saleValue - totalPurchase;
      purchaseAmount += totalPurchase; projectedSale += saleValue; units += qty;
      purchaseRows.push({ date: purchase.date, type: 'ACHAT', ref: `Achat ${String(purchase.id || '').slice(-8)}`, product: item.name || product?.name || 'Produit supprimé', sku: product?.sku || item.sku || '', category: product?.category || '', party: supplier?.name || 'Fournisseur non spécifié', qty, unitCost: buy, unitPrice: sell, totalPurchase, saleValue, potentialMargin, marginRate: saleValue > 0 ? potentialMargin / saleValue * 100 : 0 });
    });
    purchasesAmount += purchaseAmount; purchaseProjectedSale += projectedSale; purchasePotentialMargin += projectedSale - purchaseAmount; purchaseUnits += units;
    rows.push({ date: purchase.date, type: 'ACHAT', ref: `Achat ${String(purchase.id || '').slice(-8)}`, description: (purchase.items || []).map(item => `${item.qty}× ${item.name || 'Produit'}`).join(', ') || 'Achat', party: supplier?.name || 'Fournisseur non spécifié', units, amount: purchaseAmount, incoming: 0, outgoing: purchaseAmount, impact: -purchaseAmount });
  });
  payments.forEach(payment => {
    const amount = Number(payment.amount) || 0; const client = state.clients.find(c => c.id === payment.clientId);
    paymentsAmount += amount;
    paymentRows.push({ date: payment.date, type: 'PAIEMENT', ref: `Règlement ${String(payment.id || '').slice(-8)}`, party: client?.name || 'Client', amount, note: payment.note || 'Encaissement client' });
    rows.push({ date: payment.date, type: 'PAIEMENT', ref: `Règlement ${String(payment.id || '').slice(-8)}`, description: payment.note || 'Encaissement client', party: client?.name || 'Client', units: '—', amount, incoming: amount, outgoing: 0, impact: 0 });
  });
  rows.sort((a, b) => new Date(b.date) - new Date(a.date));
  return { range, rows, saleRows, purchaseRows, paymentRows, sales, purchases, payments, salesAmount, salesGross, salesDiscount, salesCost, salesMargin, purchasesAmount, purchaseProjectedSale, purchasePotentialMargin, paymentsAmount, net: salesAmount - purchasesAmount, salesUnits, purchaseUnits };
}

function buildPeriodFinancialSummary(range, stockData) {
  const inRange = entry => {
    const date = new Date(entry?.date);
    return !Number.isNaN(date.getTime()) && date >= range.start && date <= range.end;
  };
  const summary = {
    productUnits: 0, productSales: 0, productCost: 0, productDiscount: 0, productMargin: 0,
    rechargeUnits: 0, rechargeSales: 0, rechargeCost: 0, rechargeMargin: 0,
    serviceUnits: 0, serviceSales: 0, serviceCost: 0, serviceMargin: 0,
    currentExpenses: 0, stockPurchases: 0, equipmentPurchases: 0,
  };
  state.sales.filter(inRange).forEach(sale => {
    const items = (sale.items || []).filter(item => Number(item.qty) > 0);
    const grossSubtotal = Number(sale.subtotal) || items.reduce((sum, item) => sum + (Number(item.price) || 0) * (Number(item.qty) || 0), 0);
    const discount = Math.max(0, Number(sale.discount) || 0);
    items.forEach(item => {
      const qty = Number(item.qty) || 0;
      const gross = (Number(item.price) || 0) * qty;
      const allocatedDiscount = grossSubtotal > 0 ? discount * gross / grossSubtotal : 0;
      const net = Math.max(0, gross - allocatedDiscount);
      const cost = (Number(item.unitCost) || 0) * qty;
      const margin = net - cost;
      if (item.isRecharge) {
        summary.rechargeUnits += qty; summary.rechargeSales += net; summary.rechargeCost += cost; summary.rechargeMargin += margin;
      } else if (item.isService || item.serviceId) {
        summary.serviceUnits += qty; summary.serviceSales += net; summary.serviceCost += cost; summary.serviceMargin += margin;
      } else {
        summary.productUnits += qty; summary.productSales += net; summary.productCost += cost; summary.productDiscount += allocatedDiscount; summary.productMargin += margin;
      }
    });
  });
  summary.currentExpenses = state.expenses.filter(inRange).reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
  summary.rechargeBalance = state.rechargeAccounts.reduce((sum, account) => sum + Math.max(0, Number(account.balance) || 0), 0);
  summary.stockPurchases = state.purchases.filter(inRange).reduce((sum, purchase) => sum + (Number(purchase.total) || (purchase.items || []).reduce((total, item) => total + (Number(item.qty) || 0) * (Number(item.unitCost) || 0), 0)), 0);
  summary.equipmentPurchases = state.equipmentPurchases.filter(inRange).reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
  summary.stockRemainingCost = Number(stockData?.totalCostValue) || 0;
  summary.capitalAmount = Math.max(0, Number(state.capitalAmount) || 0);
  summary.capitalCommitted = summary.stockRemainingCost + summary.productCost + summary.equipmentPurchases + summary.rechargeBalance + summary.rechargeSales;
  summary.remainingCapital = summary.capitalAmount - summary.capitalCommitted;
  summary.estimatedProfit = summary.productMargin + summary.rechargeMargin + summary.serviceMargin - summary.currentExpenses;
  return summary;
}


function buildStockSituationData() {
  const rows = state.products.map(product => {
    const lots = productLots(product.id).filter(lot => Number(lot.qtyRemaining) > 0);
    const quantity = lots.reduce((sum, lot) => sum + (Number(lot.qtyRemaining) || 0), 0);
    const costValue = lots.reduce((sum, lot) => sum + (Number(lot.qtyRemaining) || 0) * (Number(lot.unitCost) || 0), 0);
    const saleValue = lots.reduce((sum, lot) => sum + (Number(lot.qtyRemaining) || 0) * (Number(lot.unitPrice) || 0), 0);
    return { product: product.name || 'Produit', category: product.category || '', sku: product.sku || '', quantity, costValue, saleValue, potentialMargin: saleValue - costValue, lots: lots.length };
  }).sort((a, b) => a.product.localeCompare(b.product, 'fr', { sensitivity: 'base' }));
  return {
    rows,
    totalProducts: rows.filter(row => row.quantity > 0).length,
    totalQuantity: rows.reduce((sum, row) => sum + row.quantity, 0),
    totalCostValue: rows.reduce((sum, row) => sum + row.costValue, 0),
    totalSaleValue: rows.reduce((sum, row) => sum + row.saleValue, 0),
    totalPotentialMargin: rows.reduce((sum, row) => sum + row.potentialMargin, 0),
  };
}
function exportStockSituationXLSX() {
  if (typeof XLSX === 'undefined') { toast('Bibliothèque Excel indisponible — vérifiez votre connexion.'); return; }
  const data = buildStockSituationData();
  const rows = data.rows.map(row => ({ Produit: row.product, Catégorie: row.category, 'Code P': row.sku, 'Stock actuel': row.quantity, Lots: row.lots, 'Valeur au prix achat (DH)': row.costValue }));
  rows.push({ Produit: 'TOTAL', 'Stock actuel': data.totalQuantity, 'Valeur au prix achat (DH)': data.totalCostValue });
  const ws = XLSX.utils.json_to_sheet(rows); ws['!cols'] = [28, 24, 20, 14, 10, 24].map(w => ({ wch: w }));
  const wb = XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb, ws, 'Situation stock');
  XLSX.writeFile(wb, `phonestock-situation-stock-${localDateInputValue()}.xlsx`); toast('Situation du stock exportée en Excel');
}
function exportStockSituationPDF() {
  if (!window.jspdf || !window.jspdf.jsPDF) { toast('Bibliothèque PDF indisponible — vérifiez votre connexion.'); return; }
  const data = buildStockSituationData();
  const doc = new window.jspdf.jsPDF({ unit: 'mm', format: 'a4', orientation: 'landscape' });
  const margin = 10; let y = 14;
  doc.setFont('helvetica', 'bold'); doc.setFontSize(15); doc.text('PhoneStock - Situation du stock', margin, y); y += 7;
  doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.text(`Généré le ${fmtDateTime(new Date())}`, margin, y); y += 8;
  doc.setFontSize(9); doc.text(`Produits en stock : ${data.totalProducts} · Quantité totale : ${data.totalQuantity} · Valeur achat : ${money(data.totalCostValue)} DH`, margin, y); y += 8;
  const xs = [margin, 65, 112, 143, 163, 183]; const headers = ['Produit', 'Catégorie', 'Code P', 'Stock', 'Lots', 'Valeur achat'];
  const drawHeader = () => { doc.setFillColor(228, 234, 238); doc.rect(margin, y - 4, 277, 7, 'F'); doc.setFont('helvetica', 'bold'); doc.setFontSize(7); headers.forEach((h, i) => doc.text(h, xs[i], y)); y += 6; doc.setFont('helvetica', 'normal'); doc.setFontSize(7); };
  drawHeader();
  data.rows.forEach(row => { if (y > 190) { doc.addPage(); y = 14; drawHeader(); } doc.text(doc.splitTextToSize(row.product, 53), xs[0], y); doc.text(doc.splitTextToSize(row.category, 45), xs[1], y); doc.text(doc.splitTextToSize(row.sku, 29), xs[2], y); doc.text(String(row.quantity), xs[3], y); doc.text(String(row.lots), xs[4], y); doc.text(`${money(row.costValue)} DH`, xs[5], y); y += 6; });
  doc.setFont('helvetica', 'bold'); doc.text('TOTAL', xs[0], y + 2); doc.text(String(data.totalQuantity), xs[3], y + 2); doc.text(`${money(data.totalCostValue)} DH`, xs[5], y + 2);
  doc.save(`phonestock-situation-stock-${localDateInputValue()}.pdf`); toast('Situation du stock exportée en PDF');
}

function operationPeriodLabel(period) {
  return ({ day: 'Journalier', week: 'Hebdomadaire', month: 'Mensuel', year: 'Annuel', custom: 'Période personnalisée' }[period] || 'Mensuel');
}
function exportOperationsReportPDF() {
  if (!window.jspdf || !window.jspdf.jsPDF) { toast('Bibliothèque PDF indisponible — vérifiez votre connexion.'); return; }
  const data = buildOperationsReportData();
  const stockData = buildStockSituationData();
  const financial = buildPeriodFinancialSummary(data.range, stockData);
  const purchaseBonRows = buildPurchaseBonSummary(data.range, !!state.reportFilters?.includeEquipmentInPurchaseBons);
  const doc = new window.jspdf.jsPDF({ unit: 'mm', format: 'a4', orientation: 'landscape' });
  const margin = 10; const pageWidth = 297; const right = pageWidth - margin;
  const periodText = `${fmtDate(`${data.range.from}T00:00:00`)} -> ${fmtDate(`${data.range.to}T00:00:00`)}`;
  let y = 14;
  const header = title => { doc.setFont('helvetica', 'bold'); doc.setFontSize(15); doc.text(title, margin, y); y += 7; doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.text(`${operationPeriodLabel(data.range.period)} · ${periodText} · Généré le ${fmtDateTime(new Date())}`, margin, y); y += 7; };
  const section = title => { if (y > 185) { doc.addPage(); y = 14; } doc.setFont('helvetica', 'bold'); doc.setFontSize(10); doc.text(title, margin, y); y += 5; };
  const table = (headers, rows, widths, totalRow = null) => {
    const xs = []; let x = margin; widths.forEach(w => { xs.push(x); x += w; });
    const drawHead = () => { doc.setFillColor(228, 234, 238); doc.rect(margin, y - 4, right - margin, 7, 'F'); doc.setFont('helvetica', 'bold'); doc.setFontSize(6.8); headers.forEach((h, i) => doc.text(h, xs[i], y)); y += 6; doc.setFont('helvetica', 'normal'); doc.setFontSize(6.6); };
    drawHead();
    rows.forEach(row => { const cells = row.map((cell, i) => doc.splitTextToSize(String(cell ?? ''), widths[i] - 2)); const h = Math.max(6, ...cells.map(c => c.length * 3)); if (y + h > 195) { doc.addPage(); y = 14; header('PhoneStock — Rapport des opérations'); section(headers.join(' · ')); drawHead(); } cells.forEach((cell, i) => doc.text(cell, xs[i], y)); y += h; });
    if (totalRow) { doc.setFont('helvetica', 'bold'); doc.setFillColor(242, 245, 246); doc.rect(margin, y - 3, right - margin, 7, 'F'); totalRow.forEach((cell, i) => doc.text(String(cell ?? ''), xs[i], y)); y += 8; doc.setFont('helvetica', 'normal'); }
  };
  header('PhoneStock — Rapport des opérations');
  section('Synthèse financière');
  doc.setFont('helvetica', 'normal'); doc.setFontSize(8);
  doc.text(`Ventes nettes : ${money(data.salesAmount)} DH`, margin, y); doc.text(`Achats : ${money(data.purchasesAmount)} DH`, 62, y); doc.text(`Net ventes - achats : ${money(data.net)} DH`, 112, y); doc.text(`Marge ventes : ${money(data.salesMargin)} DH`, 178, y); doc.text(`Remises : ${money(data.salesDiscount)} DH`, 235, y); y += 9;
  doc.text(`Marge produits : ${money(financial.productMargin)} DH`, margin, y); doc.text(`Marge recharges : ${money(financial.rechargeMargin)} DH`, 62, y); doc.text(`Marge services : ${money(financial.serviceMargin)} DH`, 112, y); doc.text(`Dépenses courantes : ${money(financial.currentExpenses)} DH`, 178, y); doc.text(`Bénéfice estimé : ${money(financial.estimatedProfit)} DH`, 235, y); y += 9;
  doc.text(`Achats de stock : ${money(financial.stockPurchases)} DH`, margin, y); doc.text(`Équipements : ${money(financial.equipmentPurchases)} DH`, 82, y); doc.text(`Solde recharges : ${money(financial.rechargeBalance)} DH`, 150, y); doc.text(`Reste capital : ${money(financial.remainingCapital)} DH`, 225, y); y += 9;
  section('Détail des ventes');
  table(['Date', 'Produit / Code P', 'Qté', 'Prix achat', 'Prix vente', 'Remise', 'Net', 'Coût', 'Marge'], data.saleRows.map(r => [fmtDateTime(r.date), `${r.product} / ${r.sku}`, r.qty, `${money(r.unitCost)} DH`, `${money(r.unitPrice)} DH`, `${money(r.discount)} DH`, `${money(r.net)} DH`, `${money(r.cost)} DH`, `${money(r.margin)} DH`]), [25, 54, 12, 22, 22, 22, 22, 22, 22], ['TOTAL', '', data.salesUnits, '', '', `${money(data.salesDiscount)} DH`, `${money(data.salesAmount)} DH`, `${money(data.salesCost)} DH`, `${money(data.salesMargin)} DH`]);
  section('Détail des achats');
  table(['Date', 'Produit / Code P', 'Qté', 'Prix achat', 'Prix vente prévu', 'Total achat', 'Valeur vente', 'Marge potentielle'], data.purchaseRows.map(r => [fmtDateTime(r.date), `${r.product} / ${r.sku}`, r.qty, `${money(r.unitCost)} DH`, `${money(r.unitPrice)} DH`, `${money(r.totalPurchase)} DH`, `${money(r.saleValue)} DH`, `${money(r.potentialMargin)} DH`]), [25, 62, 12, 24, 28, 28, 28, 28], ['TOTAL', '', data.purchaseUnits, '', '', `${money(data.purchasesAmount)} DH`, `${money(data.purchaseProjectedSale)} DH`, `${money(data.purchasePotentialMargin)} DH`]);
  section('Synthèse des bons d’achat');
  table(['N Bon', 'Date', 'Fournisseur', 'Coût total'], purchaseBonRows.map(r => [r.bonNumber, fmtDateTime(r.date), r.supplier || 'Non spécifié', `${money(r.total)} DH`]), [32, 35, 92, 35], ['TOTAL', '', '', `${money(purchaseBonRows.reduce((sum, r) => sum + r.total, 0))} DH`]);
  section('Paiements clients');
  table(['Date', 'Référence', 'Client', 'Note', 'Montant'], data.paymentRows.map(r => [fmtDateTime(r.date), r.ref, r.party, r.note, `${money(r.amount)} DH`]), [30, 35, 55, 100, 30], ['TOTAL', '', '', '', `${money(data.paymentsAmount)} DH`]);
  section('Situation du stock');
  table(['Produit', 'Catégorie / Code P', 'Stock', 'Lots', 'Valeur achat'], stockData.rows.map(r => [r.product, `${r.category} / ${r.sku}`, r.quantity, r.lots, `${money(r.costValue)} DH`]), [65, 75, 22, 18, 45], ['TOTAL', '', stockData.totalQuantity, '', `${money(stockData.totalCostValue)} DH`]);
  doc.setFont('helvetica', 'italic'); doc.setFontSize(7.5); doc.text('Le net commercial est calculé comme ventes nettes - achats. La marge des ventes est calculée avec le coût réel FIFO enregistré. Les paiements sont affichés séparément.', margin, 202, { maxWidth: right - margin });
  doc.save(`phonestock-rapport-operations-${data.range.from}-${data.range.to}.pdf`); toast('Rapport PDF téléchargé');
}

function reportSectionEnabled(key) { return state.reportFilters?.sections?.[key] !== false; }
function buildPurchaseBonSummary(range, includeEquipment = false) {
  const start = range?.start?.getTime?.() ?? -Infinity;
  const end = range?.end?.getTime?.() ?? Infinity;
  const rows = new Map();
  const inRange = date => { const time = new Date(date || '').getTime(); return Number.isFinite(time) && time >= start && time <= end; };
  const ensure = (key, data = {}) => {
    if (!rows.has(key)) rows.set(key, { bonNumber: data.bonNumber || key, date: data.date || '', supplier: data.supplier || '', costTotal: 0, equipmentTotal: 0 });
    const row = rows.get(key);
    if (!row.date && data.date) row.date = data.date;
    if (!row.supplier && data.supplier) row.supplier = data.supplier;
    return row;
  };
  state.purchases.forEach(purchase => {
    if (!inRange(purchase.date)) return;
    const supplier = state.suppliers.find(item => item.id === purchase.supplierId)?.name || '';
    const row = ensure(purchase.bonNumber || purchase.id, { bonNumber: purchase.bonNumber || purchase.id, date: purchase.date, supplier });
    row.costTotal += (Number(purchase.total) || (purchase.items || []).reduce((sum, item) => sum + (Number(item.qty) || 0) * (Number(item.unitCost) || 0), 0));
  });
  if (includeEquipment) state.equipmentPurchases.forEach(equipment => {
    const source = equipment.source?.type === 'purchase' ? equipment.source : null;
    if (!source || !source.bonNumber || !inRange(equipment.date)) return;
    const row = ensure(source.bonNumber, { bonNumber: source.bonNumber, date: equipment.date, supplier: equipment.supplier || '' });
    row.equipmentTotal += Number(equipment.amount) || ((Number(source.quantity) || 0) * (Number(source.unitCost) || 0));
  });
  return [...rows.values()].map(row => ({ ...row, total: row.costTotal + (includeEquipment ? row.equipmentTotal : 0) })).sort((a, b) => new Date(b.date) - new Date(a.date) || String(a.bonNumber).localeCompare(String(b.bonNumber), 'fr', { numeric: true }));
}
function renderReportExclusionsModal() {
  if (!state.reportExclusionsOpen) return '';
  const f = state.reportFilters || {}; const sections = f.sections || {};
  const choices = [
    ['summary', 'Synthèse financière'], ['stats', 'Indicateurs de période'], ['sales', 'Ventes détaillées'],
    ['purchases', 'Achats détaillés'], ['purchaseBons', 'Synthèse des bons d’achat'], ['payments', 'Paiements clients'], ['stock', 'Situation du stock'],
    ['productPerformance', 'Performance par produit'], ['dailyEvolution', 'Évolution par jour']
  ];
  return `<div class="modal-overlay report-exclusions-overlay" role="dialog" aria-modal="true"><div class="modal report-exclusions-modal"><button class="btn modal-close" id="closeReportExclusions" aria-label="Fermer">${ICONS.close}</button><h2>Exclusions des rapports détaillés</h2><p class="muted">Cochez les éléments à inclure dans l’affichage et les exports détaillés. Décochez un élément pour l’exclure.</p><div class="report-exclusion-sections"><strong>Éléments du rapport</strong>${choices.map(([key,label]) => `<label><input type="checkbox" data-report-section-toggle="${key}" ${sections[key] !== false ? 'checked' : ''}>${label}</label>`).join('')}</div><div class="report-category-exclusion-grid"><fieldset><legend>Catégories de ventes à exclure</legend>${getCategories().sort((a,b)=>a.localeCompare(b,'fr')).map(category => `<label><input type="checkbox" data-report-exclude-sale="${esc(category)}" ${f.excludeSaleCategories.includes(category) ? 'checked' : ''}>${esc(category)}</label>`).join('') || '<span class="muted">Aucune catégorie</span>'}</fieldset><fieldset><legend>Catégories d’achats à exclure</legend>${getCategories().sort((a,b)=>a.localeCompare(b,'fr')).map(category => `<label><input type="checkbox" data-report-exclude-purchase="${esc(category)}" ${f.excludePurchaseCategories.includes(category) ? 'checked' : ''}>${esc(category)}</label>`).join('') || '<span class="muted">Aucune catégorie</span>'}</fieldset><fieldset><legend>Fournisseurs des achats à exclure</legend>${state.suppliers.slice().sort((a,b)=>a.name.localeCompare(b.name,'fr')).map(supplier => `<label><input type="checkbox" data-report-exclude-supplier="${esc(supplier.id)}" ${f.excludePurchaseSuppliers.includes(supplier.id) ? 'checked' : ''}>${esc(supplier.name)}</label>`).join('') || '<span class="muted">Aucun fournisseur</span>'}</fieldset></div><div class="modal-actions"><button class="btn" id="resetReportExclusions">Tout inclure</button><button class="btn btn-primary" id="closeReportExclusionsBottom">Appliquer</button></div></div></div>`;
}
function renderMarginReports() {
  const f = state.reportFilters || (state.reportFilters = { from: '', to: '', sellerId: '', productId: '', excludeSaleCategories: [], excludePurchaseCategories: [], excludePurchaseSuppliers: [] });
  f.excludeSaleCategories ||= []; f.excludePurchaseCategories ||= []; f.excludePurchaseSuppliers ||= [];
  const reportCacheKey = JSON.stringify({ view: 'reports', filters: f, operationPeriod: state.operationReportPeriod, operationMonth: state.operationReportMonth, operationFrom: state.operationReportFrom, operationTo: state.operationReportTo, sales: state.sales.length, purchases: state.purchases.length, equipment: state.equipmentPurchases.length });
  const data = cachedComputed(`${reportCacheKey}:margin`, buildMarginReportData);
  const operations = cachedComputed(`${reportCacheKey}:operations`, buildOperationsReportData);
  const stockData = cachedComputed(`${reportCacheKey}:stock`, buildStockSituationData);
  const financial = cachedComputed(`${reportCacheKey}:financial`, () => buildPeriodFinancialSummary(operations.range, stockData));
  const purchaseBonRows = buildPurchaseBonSummary(operations.range, !!f.includeEquipmentInPurchaseBons);
  const sellers = [...new Map(state.sales.filter(s => s.sellerId).map(s => [s.sellerId, s.sellerName])).entries()];
  const hasFilters = f.from || f.to || f.sellerId || f.productId;
  const period = `${f.from ? fmtDate(`${f.from}T00:00:00`) : 'Début'} → ${f.to ? fmtDate(`${f.to}T00:00:00`) : 'Aujourd’hui'}`;
  const customPeriod = operations.range.period === 'custom';
  return `
    <div class="card report-operations-card" style="padding:18px;margin-bottom:18px;">
      <div class="section-title">Rapports des opérations</div>
      <div class="muted" style="font-size:12px;margin:4px 0 14px 0;">Ventes, achats et encaissements de la période choisie. Le net correspond aux ventes moins les achats.</div>
      <div class="toolbar" style="margin-bottom:14px;">
        <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">
          <select id="or_period" class="search-input" title="Périodicité du rapport">
            <option value="day" ${operations.range.period === 'day' ? 'selected' : ''}>Journalier</option>
            <option value="week" ${operations.range.period === 'week' ? 'selected' : ''}>Hebdomadaire</option>
            <option value="month" ${operations.range.period === 'month' ? 'selected' : ''}>Mensuel</option>
            <option value="year" ${operations.range.period === 'year' ? 'selected' : ''}>Annuel</option>
            <option value="custom" ${customPeriod ? 'selected' : ''}>Période personnalisée</option>
          </select>
          ${operations.range.period === 'month' ? `<label class="report-period-field">Mois <input type="month" id="or_month" value="${esc(state.operationReportMonth || localDateInputValue().slice(0, 7))}" title="Choisir le mois"></label>` : ''}
          ${customPeriod ? `<input type="date" id="or_from" value="${esc(operations.range.from)}" title="Début de la période"><input type="date" id="or_to" value="${esc(operations.range.to)}" title="Fin de la période">` : ''}
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;"><button class="btn btn-primary" id="exportOperationsPDF">${ICONS.download}Télécharger le rapport PDF</button><button class="btn" id="exportOperationsXLSX">${ICONS.download}Télécharger le rapport Excel</button></div>
      </div>
      <div class="report-exclusions-toolbar"><button class="btn btn-sm" id="openReportExclusions">${ICONS.settings}Exclusions</button><span class="muted">Choisissez les sections, catégories et fournisseurs inclus dans le rapport.</span></div>${renderReportExclusionsModal()}
      <nav class="report-section-menu" id="reportSectionMenu" aria-label="Navigation du rapport"><strong>Sections du rapport</strong><a href="#report-sales">Ventes détaillées</a><a href="#report-purchases">Achats détaillés</a><a href="#report-purchase-bons">Synthèse des bons d’achat</a><a href="#report-stock">Situation du stock</a><a href="#report-product-performance">Performance par produit</a><a href="#report-daily-evolution">Évolution par jour</a></nav>
      <div class="muted mono" style="font-size:12px;margin-bottom:12px;">${operationPeriodLabel(operations.range.period)} : ${fmtDate(`${operations.range.from}T00:00:00`)} → ${fmtDate(`${operations.range.to}T00:00:00`)} · ${operations.rows.length} opération${operations.rows.length !== 1 ? 's' : ''}</div>
      <div class="card report-financial-summary ${reportSectionEnabled('summary') ? '' : 'report-section-hidden'}" style="padding:18px;margin-bottom:16px;">
        <div class="section-title">Synthèse financière de la période</div>
        <div class="muted" style="font-size:12px;margin:4px 0 14px 0;">Les marges sont calculées après remise. Les achats de stock et les équipements sont présentés séparément du bénéfice estimé.</div>
        <div class="report-summary-columns">
          <div><h4>Activité et revenus</h4><dl class="report-summary-list">
            <div><dt>Produits vendus</dt><dd>${financial.productUnits} unité${financial.productUnits !== 1 ? 's' : ''}</dd></div>
            <div><dt>Ventes de produits</dt><dd>${money(financial.productSales)} DH</dd></div>
            <div><dt>Prix d’achat des produits vendus</dt><dd>${money(financial.productCost)} DH</dd></div>
            <div><dt>Remises accordées</dt><dd>${money(financial.productDiscount)} DH</dd></div>
            <div><dt>Marge produits</dt><dd class="positive">${money(financial.productMargin)} DH</dd></div>
            <div><dt>Recharges vendues</dt><dd>${money(financial.rechargeSales)} DH</dd></div>
            <div><dt>Marge recharges</dt><dd class="positive">${money(financial.rechargeMargin)} DH</dd></div>
            <div><dt>Services vendus</dt><dd>${money(financial.serviceSales)} DH</dd></div>
            <div><dt>Marge services</dt><dd class="positive">${money(financial.serviceMargin)} DH</dd></div>
          </dl></div>
          <div><h4>Charges et investissements</h4><dl class="report-summary-list">
            <div><dt>Dépenses courantes</dt><dd class="negative">${money(financial.currentExpenses)} DH</dd></div>
            <div><dt><strong>Bénéfice estimé</strong></dt><dd class="${financial.estimatedProfit >= 0 ? 'positive' : 'negative'}"><strong>${money(financial.estimatedProfit)} DH</strong></dd></div>
            <div><dt>Achats de stock</dt><dd>${money(financial.stockPurchases)} DH</dd></div>
            <div><dt>Équipements acquis</dt><dd>${money(financial.equipmentPurchases)} DH</dd></div>
            <div><dt>Solde des recharges immobilisé</dt><dd class="negative">${money(financial.rechargeBalance)} DH</dd></div>
            <div><dt>Capital configuré</dt><dd>${money(financial.capitalAmount)} DH</dd></div>
            <div><dt><strong>Reste du capital après calcul</strong></dt><dd class="${financial.remainingCapital >= 0 ? 'positive' : 'negative'}"><strong>${money(financial.remainingCapital)} DH</strong></dd></div>
            <div><dt>Stock restant — prix d’achat</dt><dd>${money(financial.stockRemainingCost)} DH</dd></div>
          </dl></div>
        </div>
        <div class="report-summary-note">Le reste du capital = capital configuré − (stock restant au prix d’achat + prix d’achat des produits vendus + équipements acquis + solde des recharges immobilisé + recharges vendues).</div>
      </div>
      <div class="grid dash-stats ${reportSectionEnabled('stats') ? '' : 'report-section-hidden'}" style="margin-bottom:16px;">
        <div class="card stat-card"><div class="stat-label">Total ventes</div><div class="stat-value lcd">${money(operations.salesAmount)} <span style="font-size:13px;color:var(--muted)">DH</span></div><div class="stat-delta">${operations.sales.length} vente${operations.sales.length !== 1 ? 's' : ''} · ${operations.salesUnits} unité${operations.salesUnits !== 1 ? 's' : ''}</div></div>
        <div class="card stat-card"><div class="stat-label">Total achats</div><div class="stat-value">${money(operations.purchasesAmount)} <span style="font-size:13px;color:var(--muted)">DH</span></div><div class="stat-delta">${operations.purchases.length} achat${operations.purchases.length !== 1 ? 's' : ''} · ${operations.purchaseUnits} unité${operations.purchaseUnits !== 1 ? 's' : ''}</div></div>
        <div class="card stat-card"><div class="stat-label">Net ventes − achats</div><div class="stat-value" style="color:${operations.net >= 0 ? 'var(--success)' : 'var(--danger)'}">${money(operations.net)} <span style="font-size:13px;color:var(--muted)">DH</span></div><div class="stat-delta">Résultat de trésorerie commerciale avant autres charges</div></div>
        <div class="card stat-card"><div class="stat-label">Encaissements clients</div><div class="stat-value">${money(operations.paymentsAmount)} <span style="font-size:13px;color:var(--muted)">DH</span></div><div class="stat-delta">Affichés séparément, hors calcul du net</div></div>
      </div>
      ${operations.saleRows.length ? `<div id="report-sales" class="report-section ${reportSectionEnabled('sales') ? '' : 'report-section-hidden'}"><div class="section-title">Ventes détaillées <a class="report-back-to-menu" href="#reportSectionMenu" aria-label="Revenir au menu du rapport" title="Revenir au menu du rapport">↑</a></div><div style="overflow-x:auto;"><table class="rcard report-detail-table"><thead><tr><th>Date</th><th>Produit / Code P</th><th>Catégorie</th><th>Qté</th><th>Prix achat</th><th>Prix vente</th><th>Remise</th><th>Net</th><th>Coût</th><th>Marge</th></tr></thead><tbody>${operations.saleRows.map(row => `<tr><td data-label="Date" class="mono muted">${fmtDateTime(row.date)}</td><td data-label="Produit / Code P"><strong>${esc(row.product)}</strong><div class="muted mono" style="font-size:10px;">${esc(row.sku)}</div></td><td data-label="Catégorie" class="muted">${esc(row.category || '—')}</td><td data-label="Qté" class="mono">${row.qty}</td><td data-label="Prix achat" class="mono">${money(row.unitCost)} DH</td><td data-label="Prix vente" class="price">${money(row.unitPrice)} DH</td><td data-label="Remise" class="mono">${money(row.discount)} DH</td><td data-label="Net" class="price">${money(row.net)} DH</td><td data-label="Coût" class="mono">${money(row.cost)} DH</td><td data-label="Marge" class="price" style="color:var(--success)">${money(row.margin)} DH</td></tr>`).join('')}<tr class="report-total-row"><td data-label="Total"><strong>TOTAL VENTES</strong></td><td></td><td></td><td data-label="Qté"><strong>${operations.salesUnits}</strong></td><td></td><td></td><td data-label="Remise"><strong>${money(operations.salesDiscount)} DH</strong></td><td data-label="Net"><strong>${money(operations.salesAmount)} DH</strong></td><td data-label="Coût"><strong>${money(operations.salesCost)} DH</strong></td><td data-label="Marge"><strong>${money(operations.salesMargin)} DH</strong></td></tr></tbody></table></div></div>` : emptyState('history', 'Aucune vente', 'Aucune vente sur cette période.')}
      ${operations.purchaseRows.length ? `<div id="report-purchases" class="report-section ${reportSectionEnabled('purchases') ? '' : 'report-section-hidden'}"><div class="section-title">Achats détaillés <a class="report-back-to-menu" href="#reportSectionMenu" aria-label="Revenir au menu du rapport" title="Revenir au menu du rapport">↑</a></div><div style="overflow-x:auto;"><table class="rcard report-detail-table"><thead><tr><th>Date</th><th>Produit / Code P</th><th>Catégorie</th><th>Qté</th><th>Prix achat</th><th>Prix vente prévu</th><th>Total achat</th><th>Valeur vente</th><th>Marge potentielle</th></tr></thead><tbody>${operations.purchaseRows.map(row => `<tr><td data-label="Date" class="mono muted">${fmtDateTime(row.date)}</td><td data-label="Produit / Code P"><strong>${esc(row.product)}</strong><div class="muted mono" style="font-size:10px;">${esc(row.sku)}</div></td><td data-label="Catégorie" class="muted">${esc(row.category || '—')}</td><td data-label="Qté" class="mono">${row.qty}</td><td data-label="Prix achat" class="mono">${money(row.unitCost)} DH</td><td data-label="Prix vente prévu" class="price">${money(row.unitPrice)} DH</td><td data-label="Total achat" class="mono">${money(row.totalPurchase)} DH</td><td data-label="Valeur vente" class="price">${money(row.saleValue)} DH</td><td data-label="Marge potentielle" class="price" style="color:var(--success)">${money(row.potentialMargin)} DH</td></tr>`).join('')}<tr class="report-total-row"><td data-label="Total"><strong>TOTAL ACHATS</strong></td><td></td><td></td><td data-label="Qté"><strong>${operations.purchaseUnits}</strong></td><td></td><td></td><td data-label="Total achat"><strong>${money(operations.purchasesAmount)} DH</strong></td><td data-label="Valeur vente"><strong>${money(operations.purchaseProjectedSale)} DH</strong></td><td data-label="Marge potentielle"><strong>${money(operations.purchasePotentialMargin)} DH</strong></td></tr></tbody></table></div></div>` : emptyState('cart', 'Aucun achat', 'Aucun achat sur cette période.')}
      <div id="report-purchase-bons" class="report-section ${reportSectionEnabled('purchaseBons') ? '' : 'report-section-hidden'}"><div class="section-title">Synthèse des bons d’achat <a class="report-back-to-menu" href="#reportSectionMenu" aria-label="Revenir au menu du rapport" title="Revenir au menu du rapport">↑</a></div><label class="checkbox-row" style="margin:4px 0 10px;"><input type="checkbox" id="includeEquipmentInPurchaseBons" ${f.includeEquipmentInPurchaseBons ? 'checked' : ''}> Ajouter au coût total le montant des produits enregistrés comme équipements issus de chaque bon</label>${purchaseBonRows.length ? `<div style="overflow-x:auto;"><table class="rcard report-detail-table"><thead><tr><th>N Bon</th><th>Date</th><th>Fournisseur</th><th style="text-align:right;">Coût total</th></tr></thead><tbody>${purchaseBonRows.map(row => `<tr><td data-label="N Bon" class="mono"><strong>${esc(row.bonNumber)}</strong></td><td data-label="Date" class="mono muted">${fmtDateTime(row.date)}</td><td data-label="Fournisseur">${esc(row.supplier || 'Non spécifié')}</td><td data-label="Coût total" class="price">${money(row.total)} DH</td></tr>`).join('')}<tr class="report-total-row"><td data-label="Total"><strong>TOTAL</strong></td><td></td><td></td><td data-label="Coût total" class="price"><strong>${money(purchaseBonRows.reduce((sum, row) => sum + row.total, 0))} DH</strong></td></tr></tbody></table></div>` : emptyState('cart', 'Aucun bon d’achat', 'Aucun bon sur cette période.')}</div>
      ${operations.paymentRows.length ? `<div class="report-section ${reportSectionEnabled('payments') ? '' : 'report-section-hidden'}"><div class="section-title">Paiements clients</div><div style="overflow-x:auto;"><table class="rcard"><thead><tr><th>Date</th><th>Référence</th><th>Client</th><th>Note</th><th style="text-align:right;">Montant</th></tr></thead><tbody>${operations.paymentRows.map(row => `<tr><td data-label="Date" class="mono muted">${fmtDateTime(row.date)}</td><td data-label="Référence" class="mono">${esc(row.ref)}</td><td data-label="Client">${esc(row.party)}</td><td data-label="Note" class="muted">${esc(row.note)}</td><td data-label="Montant" class="price">${money(row.amount)} DH</td></tr>`).join('')}<tr class="report-total-row"><td><strong>TOTAL PAIEMENTS</strong></td><td></td><td></td><td></td><td data-label="Montant"><strong>${money(operations.paymentsAmount)} DH</strong></td></tr></tbody></table></div></div>` : ''}
    </div>
    <div id="report-stock" class="card report-stock-card ${reportSectionEnabled('stock') ? '' : 'report-section-hidden'}" style="padding:18px;margin-bottom:18px;">
      <div class="section-title">Situation du stock <a class="report-back-to-menu" href="#reportSectionMenu" aria-label="Revenir au menu du rapport" title="Revenir au menu du rapport">↑</a></div>
      <div class="muted" style="font-size:12px;margin:4px 0 14px 0;">État actuel du stock disponible, valorisé au prix d’achat et au prix de vente prévu. Cette vue ne modifie pas la consommation FIFO.</div>
      <div class="toolbar" style="margin-bottom:14px;"><div class="muted mono" style="font-size:12px;">${stockData.totalProducts} produit${stockData.totalProducts !== 1 ? 's' : ''} en stock · ${stockData.totalQuantity} unité${stockData.totalQuantity !== 1 ? 's' : ''}</div><div style="display:flex;gap:6px;flex-wrap:wrap;"><button class="btn btn-sm" id="exportStockSituationPDF">${ICONS.download}PDF stock</button><button class="btn btn-sm" id="exportStockSituationXLSX">${ICONS.download}Excel stock</button></div></div>
      <div class="grid dash-stats" style="margin-bottom:14px;"><div class="card stat-card"><div class="stat-label">Valeur au prix d’achat</div><div class="stat-value">${money(stockData.totalCostValue)} <span style="font-size:13px;color:var(--muted)">DH</span></div></div></div>
      ${stockData.rows.length ? `<div style="overflow-x:auto;"><table class="rcard report-detail-table"><thead><tr><th>Produit</th><th>Catégorie</th><th>Code P</th><th>Stock actuel</th><th>Lots</th><th>Valeur achat</th></tr></thead><tbody>${stockData.rows.map(row => `<tr><td data-label="Produit"><strong>${esc(row.product)}</strong></td><td data-label="Catégorie" class="muted">${esc(row.category || '—')}</td><td data-label="Code P" class="mono muted">${esc(row.sku || '—')}</td><td data-label="Stock actuel" class="mono">${row.quantity}</td><td data-label="Lots" class="mono">${row.lots}</td><td data-label="Valeur achat" class="mono">${money(row.costValue)} DH</td></tr>`).join('')}<tr class="report-total-row"><td><strong>TOTAL STOCK</strong></td><td></td><td></td><td data-label="Stock actuel"><strong>${stockData.totalQuantity}</strong></td><td></td><td data-label="Valeur achat"><strong>${money(stockData.totalCostValue)} DH</strong></td></tr></tbody></table></div>` : emptyState('layers', 'Stock vide', 'Aucun produit ne dispose actuellement d’un stock disponible.')}
    </div>
    <div class="toolbar">
      <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">
        <input type="date" id="mr_from" value="${esc(f.from || '')}" title="Date de début">
        <input type="date" id="mr_to" value="${esc(f.to || '')}" title="Date de fin">
        <select id="mr_seller" class="search-input"><option value="">Tous les vendeurs</option>${sellers.map(([id, name]) => `<option value="${id}" ${f.sellerId === id ? 'selected' : ''}>${esc(name)}</option>`).join('')}</select>
        <select id="mr_product" class="search-input"><option value="">Tous les produits</option>${state.products.map(p => `<option value="${p.id}" ${f.productId === p.id ? 'selected' : ''}>${esc(p.name)} — ${esc(p.sku)}</option>`).join('')}</select>
        ${hasFilters ? '<button class="btn btn-sm" id="mr_clear">Réinitialiser</button>' : ''}
      </div>
      <button class="btn" id="exportMarginReportBtn">${ICONS.download}Exporter le rapport Excel</button>
    </div>
    <div class="muted mono" style="font-size:12px;margin-bottom:12px;">Période marge : ${period} · ${data.sales.length} vente${data.sales.length !== 1 ? 's' : ''}</div>
    <div class="grid dash-stats" style="margin-bottom:18px;">
      <div class="card stat-card"><div class="stat-label">Chiffre d’affaires net</div><div class="stat-value lcd">${money(data.revenue)} <span style="font-size:13px;color:var(--muted)">DH</span></div><div class="stat-delta">Remises : ${money(data.discounts)} DH</div></div>
      <div class="card stat-card"><div class="stat-label">Coût d’achat FIFO</div><div class="stat-value">${money(data.totalCost)} <span style="font-size:13px;color:var(--muted)">DH</span></div><div class="stat-delta">${data.units} unité${data.units !== 1 ? 's' : ''} vendue${data.units !== 1 ? 's' : ''}</div></div>
      <div class="card stat-card"><div class="stat-label">Marge estimée</div><div class="stat-value" style="color:var(--success)">${money(data.margin)} <span style="font-size:13px;color:var(--muted)">DH</span></div><div class="stat-delta">Taux de marge : ${data.marginRate.toFixed(1)} %</div></div>
      <div class="card stat-card"><div class="stat-label">Transactions</div><div class="stat-value">${data.sales.length}</div><div class="stat-delta">${data.productRows.length} produit${data.productRows.length !== 1 ? 's' : ''} vendu${data.productRows.length !== 1 ? 's' : ''}</div></div>
    </div>
    <div class="grid" style="grid-template-columns:1.25fr 1fr;align-items:start;">
      <div id="report-product-performance" class="card ${reportSectionEnabled('productPerformance') ? '' : 'report-section-hidden'}" style="padding:18px;"><div class="section-title">Performance par produit <a class="report-back-to-menu" href="#reportSectionMenu" aria-label="Revenir au menu du rapport" title="Revenir au menu du rapport">↑</a></div>${data.productRows.length ? `<table class="rcard"><thead><tr><th>Produit</th><th>Unités</th><th>CA net</th><th>Coût</th><th>Marge</th><th>Taux</th></tr></thead><tbody>${data.productRows.map(r => `<tr><td data-label="Produit"><strong>${esc(r.product)}</strong><div class="muted mono" style="font-size:10.5px;">${esc(r.sku)}</div></td><td data-label="Unités" class="mono">${r.units}</td><td data-label="CA net" class="price">${money(r.net)}</td><td data-label="Coût" class="mono">${money(r.cost)}</td><td data-label="Marge" class="price" style="color:var(--success)">${money(r.margin)}</td><td data-label="Taux" class="mono">${r.marginRate.toFixed(1)}%</td></tr>`).join('')}</tbody></table>` : emptyState('history', 'Aucune vente', 'Modifiez la période ou les filtres.')}</div>
      <div id="report-daily-evolution" class="card ${reportSectionEnabled('dailyEvolution') ? '' : 'report-section-hidden'}" style="padding:18px;"><div class="section-title">Évolution par jour <a class="report-back-to-menu" href="#reportSectionMenu" aria-label="Revenir au menu du rapport" title="Revenir au menu du rapport">↑</a></div>${data.dayRows.length ? `<table class="rcard"><thead><tr><th>Date</th><th>Ventes</th><th>CA net</th><th>Marge</th></tr></thead><tbody>${data.dayRows.map(r => `<tr><td data-label="Date" class="mono">${r.date === 'inconnue' ? 'Inconnue' : fmtDate(`${r.date}T00:00:00`)}</td><td data-label="Ventes" class="mono">${r.sales} · ${r.units} unité${r.units !== 1 ? 's' : ''}</td><td data-label="CA net" class="price">${money(r.revenue)}</td><td data-label="Marge" class="price" style="color:var(--success)">${money(r.margin)}</td></tr>`).join('')}</tbody></table>` : emptyState('history', 'Aucune donnée', 'Les ventes apparaîtront ici.')}</div>
    </div>
    <div class="muted" style="font-size:11.5px;margin-top:12px;">Le rapport PDF inclut les ventes, achats et encaissements de la période sélectionnée. Le net correspond aux ventes moins les achats ; les encaissements sont présentés séparément.</div>
  `;
}

function exportMarginReportXLSX() {
  if (typeof XLSX === 'undefined') { toast('Bibliothèque Excel indisponible — vérifiez votre connexion.'); return; }
  const data = buildMarginReportData(); const operations = buildOperationsReportData(); const stock = buildStockSituationData(); const financial = buildPeriodFinancialSummary(operations.range, stock); const f = state.reportFilters || {}; const wb = XLSX.utils.book_new();
  const addSheet = (name, rows, widths) => { const ws = XLSX.utils.json_to_sheet(rows || []); ws['!cols'] = widths.map(w => ({ wch: w })); XLSX.utils.book_append_sheet(wb, ws, name); };
  const addIf = (key, name, rows, widths) => { if (reportSectionEnabled(key)) addSheet(name, rows, widths); };
  addIf('summary', 'Synthèse', [{ Période: `${f.from || 'Début'} → ${f.to || 'Aujourd’hui'}`, Ventes: data.sales.length, Unités: data.units, 'Remises (DH)': data.discounts, 'CA net (DH)': data.revenue, 'Coût FIFO (DH)': data.totalCost, 'Marge (DH)': data.margin, 'Taux marge (%)': data.marginRate }], [26, 14, 12, 16, 16, 16, 16, 16, 16]);
  addIf('stats', 'Synthèse opérations', [{ Période: `${operations.range.from} → ${operations.range.to}`, 'Total ventes (DH)': operations.salesAmount, 'Total achats (DH)': operations.purchasesAmount, 'Total remises (DH)': operations.salesDiscount, 'Coût ventes (DH)': operations.salesCost, 'Marge ventes (DH)': operations.salesMargin, 'Net ventes - achats (DH)': operations.net, 'Paiements (DH)': operations.paymentsAmount }], [24, 18, 18, 18, 18, 18, 22, 18]);
  addIf('summary', 'Synthèse financière', [{ Période: `${operations.range.from} → ${operations.range.to}`, 'Capital configuré (DH)': financial.capitalAmount, 'Solde recharges (DH)': financial.rechargeBalance, 'Reste du capital (DH)': financial.remainingCapital, 'Produits vendus (unités)': financial.productUnits, 'Ventes produits (DH)': financial.productSales, 'Prix achat produits vendus (DH)': financial.productCost, 'Remises produits (DH)': financial.productDiscount, 'Marge produits (DH)': financial.productMargin, 'Recharges vendues (DH)': financial.rechargeSales, 'Marge recharges (DH)': financial.rechargeMargin, 'Services vendus (DH)': financial.serviceSales, 'Marge services (DH)': financial.serviceMargin, 'Dépenses courantes (DH)': financial.currentExpenses, 'Bénéfice estimé (DH)': financial.estimatedProfit, 'Achats stock (DH)': financial.stockPurchases, 'Équipements (DH)': financial.equipmentPurchases, 'Stock restant au prix achat (DH)': financial.stockRemainingCost }], [24, 18, 18, 22, 18, 18, 18, 18, 18, 18, 20, 18, 18, 18, 24]);
  addIf('productPerformance', 'Par produit', data.productRows.map(r => ({ 'Code P': r.sku, Produit: r.product, Unités: r.units, 'Remises allouées (DH)': r.discount, 'CA net (DH)': r.net, 'Coût FIFO (DH)': r.cost, 'Marge (DH)': r.margin, 'Taux marge (%)': r.marginRate })), [20, 32, 12, 16, 20, 16, 16, 16, 16]);
  addIf('dailyEvolution', 'Par jour', data.dayRows.map(r => ({ Date: r.date, Ventes: r.sales, Unités: r.units, 'CA net (DH)': r.revenue, 'Coût FIFO (DH)': r.cost, 'Marge (DH)': r.margin, 'Taux marge (%)': r.marginRate })), [16, 12, 12, 16, 16, 16, 16]);
  addIf('sales', 'Détail ventes', operations.saleRows.map(r => ({ Date: fmtDateTime(r.date), Référence: r.ref, Produit: r.product, 'Code P': r.sku, Catégorie: r.category, Quantité: r.qty, 'Prix achat unitaire (DH)': r.unitCost, 'Prix vente unitaire (DH)': r.unitPrice, 'Remise (DH)': r.discount, 'Montant net (DH)': r.net, 'Coût total (DH)': r.cost, 'Marge unitaire (DH)': r.unitMargin, 'Marge totale (DH)': r.margin, 'Taux marge (%)': r.marginRate, Client: r.party, Vendeur: r.seller })), [20, 15, 28, 18, 20, 12, 20, 22, 18, 16, 18, 18, 18, 18, 16, 24, 22]);
  addIf('purchases', 'Détail achats', operations.purchaseRows.map(r => ({ Date: fmtDateTime(r.date), Référence: r.ref, Produit: r.product, SKU: r.sku, Catégorie: r.category, Fournisseur: r.party, Quantité: r.qty, 'Prix achat unitaire (DH)': r.unitCost, 'Prix vente unitaire prévu (DH)': r.unitPrice, 'Total achat (DH)': r.totalPurchase, 'Valeur vente prévue (DH)': r.saleValue, 'Marge potentielle (DH)': r.potentialMargin, 'Taux marge (%)': r.marginRate })), [20, 15, 28, 18, 20, 24, 12, 20, 25, 18, 24, 22, 16]);
  const purchaseBonRows = buildPurchaseBonSummary(operations.range, !!f.includeEquipmentInPurchaseBons);
  addIf('purchaseBons', 'Synthèse bons', [...purchaseBonRows.map(r => ({ 'N Bon': r.bonNumber, Date: fmtDateTime(r.date), Fournisseur: r.supplier || 'Non spécifié', 'Coût total (DH)': r.total })), { 'N Bon': 'TOTAL', 'Coût total (DH)': purchaseBonRows.reduce((sum, r) => sum + r.total, 0) }], [18, 20, 28, 20]);
  addIf('payments', 'Paiements', operations.paymentRows.map(r => ({ Date: fmtDateTime(r.date), Référence: r.ref, Client: r.party, Note: r.note, 'Montant (DH)': r.amount })), [20, 18, 26, 40, 18]);
  const stockRows = stock.rows.map(r => ({ Produit: r.product, Catégorie: r.category, SKU: r.sku, 'Stock actuel': r.quantity, Lots: r.lots, 'Valeur prix achat (DH)': r.costValue, 'Valeur prix vente (DH)': r.saleValue, 'Marge potentielle (DH)': r.potentialMargin }));
  stockRows.push({ Produit: 'TOTAL', 'Stock actuel': stock.totalQuantity, 'Valeur prix achat (DH)': stock.totalCostValue, 'Valeur prix vente (DH)': stock.totalSaleValue, 'Marge potentielle (DH)': stock.totalPotentialMargin });
  addIf('stock', 'Situation stock', stockRows, [28, 24, 20, 14, 10, 22, 22, 24]);
  XLSX.writeFile(wb, `phonestock-rapport-marges-${new Date().toISOString().slice(0, 10)}.xlsx`); toast('Rapport Excel exporté');
}

/* ---------------- Clients ---------------- */
function applyClientSort(list) {
  const sort = state.clientSort || { key: 'name', dir: 'asc' };
  return [...list].sort((a, b) => {
    let av; let bv;
    if (sort.key === 'code') { av = a.clientCode || ''; bv = b.clientCode || ''; }
    else if (sort.key === 'phone') { av = a.phone || ''; bv = b.phone || ''; }
    else if (sort.key === 'purchases') { av = clientSales(a.id).length; bv = clientSales(b.id).length; }
    else if (sort.key === 'balance') { av = clientBalance(a.id); bv = clientBalance(b.id); }
    else { av = a.name || ''; bv = b.name || ''; }
    return compareSortValues(av, bv, sort.dir);
  });
}

function renderClients() {
  const canEdit = hasPriv('clients', 'edit');
  const canDelete = hasPriv('clients', 'delete');
  const canViewPayments = hasPriv('payments', 'view');
  const q = normalizeSearchText(state.clientSearch);
  const filtered = state.clients.filter(c =>
    !q || normalizeSearchText(c.name).includes(q) || normalizeSearchText(c.phone).includes(q) ||
    normalizeSearchText(c.email).includes(q) || normalizeSearchText(c.clientCode).includes(q)
  );
  const list = applyClientSort(filtered);
  const sort = state.clientSort || { key: 'name', dir: 'asc' };
  return `
    <div class="toolbar">
      <input class="search-input" id="clientSearch" placeholder="Rechercher par nom, téléphone, email ou identifiant…" value="${esc(state.clientSearch)}">
      <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;">
        <button class="btn btn-sm" id="exportClientsBtn">Exporter Excel</button>
        <button class="btn btn-sm" id="importClientsBtn">Importer Excel</button>
        <input type="file" id="clientsExcelFile" accept=".xlsx,.xls" hidden>
        <div class="muted mono" style="font-size:12px;">${list.length} client${list.length !== 1 ? 's' : ''}</div>
      </div>
    </div>
    <div class="card">
      ${list.length === 0 ? emptyState('users', state.clients.length === 0 ? 'Aucun client' : 'Aucun résultat', state.clients.length === 0 ? 'Ajoutez votre premier client.' : 'Essayez un autre terme de recherche.') : `
      <table class="rcard">
        <thead><tr><th>${sortButton('ID', 'clients', 'code', sort)}</th><th>${sortButton('Nom', 'clients', 'name', sort)}</th><th>${sortButton('Téléphone', 'clients', 'phone', sort)}</th><th style="text-align:right;">${sortButton('Achats', 'clients', 'purchases', sort)}</th>${canViewPayments ? `<th style="text-align:right;">${sortButton('Solde dû', 'clients', 'balance', sort)}</th>` : ''}<th></th></tr></thead>
        <tbody>
          ${list.map(c => {
            const purchases = clientSales(c.id);
            const balance = clientBalance(c.id);
            return `
            <tr>
              <td data-label="ID" class="mono muted">${esc(c.clientCode || '—')}</td>
              <td data-label="Nom"><strong>${esc(c.name)}</strong>${c.notes ? `<div class="muted" style="font-size:11.5px;">${esc(c.notes)}</div>` : ''}</td>
              <td data-label="Téléphone" class="mono">${esc(c.phone) || '—'}</td>
              <td data-label="Achats" class="mono">${purchases.length} · ${money(revenueOf(purchases))} DH</td>
              ${canViewPayments ? `<td data-label="Solde dû">${balance > 0.009 ? `<span class="pill pill-danger">${money(balance)} DH</span>` : `<span class="pill pill-ok">Soldé</span>`}</td>` : ''}
              <td data-label="">
                <button type="button" class="btn btn-sm icon-btn" data-view-ledger="${c.id}" title="Voir les détails du client" aria-label="Voir les détails du client">${ICONS.fileText}</button>
                ${canEdit ? `<button type="button" class="btn btn-sm icon-btn" data-edit-client="${c.id}" title="Modifier le client" aria-label="Modifier le client">${ICONS.edit}</button>` : ''}
                ${canDelete ? `<button type="button" class="btn btn-sm icon-btn btn-danger" data-delete-client="${c.id}" title="Supprimer le client" aria-label="Supprimer le client">${ICONS.trash}</button>` : ''}
              </td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>`}
    </div>
  `;
}

function invoicedSaleIds() {
  const set = new Set();
  state.invoices.forEach(inv => inv.saleIds.forEach(id => set.add(id)));
  return set;
}

function renderClientLedger() {
  const c = state.clients.find(x => x.id === state.ledgerClientId);
  if (!c) { state.ledgerClientId = null; return renderClients(); }
  const allSales = [...clientSales(c.id)].sort((a, b) => new Date(b.date) - new Date(a.date));
  const invoicedIds = invoicedSaleIds();
  const showInvoiced = !!state.showInvoicedBons;
  const sales = showInvoiced ? allSales : allSales.filter(s => !invoicedIds.has(s.id));
  const hiddenCount = allSales.length - sales.length;
  const payments = [...clientPayments(c.id)].sort((a, b) => new Date(b.date) - new Date(a.date));
  const balance = clientBalance(c.id);
  const canViewPayments = hasPriv('payments', 'view');
  const canCreatePay = hasPriv('payments', 'create');
  const canEditPay = hasPriv('payments', 'edit');
  const canDeletePay = hasPriv('payments', 'delete');
  return `
    <button class="btn btn-sm" id="backToClients" style="margin-bottom:16px;">← Retour aux clients</button>
    <div class="grid" style="grid-template-columns:1fr 1fr 1fr;margin-bottom:20px;">
      <div class="card stat-card"><div class="stat-label">Client</div><div style="font-family:var(--font-display);font-weight:700;font-size:16px;margin-top:8px;">${esc(c.name)}</div><div class="stat-delta mono">${esc(c.clientCode || '')}${c.phone ? ' · ' + esc(c.phone) : ''}</div></div>
      <div class="card stat-card"><div class="stat-label">Total achats</div><div class="stat-value">${allSales.length}</div><div class="stat-delta">${money(revenueOf(allSales))} DH</div></div>
      ${canViewPayments ? `
      <div class="card stat-card"><div class="stat-label">Solde dû</div><div class="stat-value" style="color:${balance > 0.009 ? 'var(--danger)' : 'var(--accent)'}">${money(balance)} <span style="font-size:13px;color:var(--muted)">DH</span></div>
        ${canCreatePay ? `<button class="btn btn-sm btn-primary" id="addPaymentBtn" style="margin-top:8px;">${ICONS.wallet}Enregistrer un paiement</button>` : ''}
      </div>` : '<div></div>'}
    </div>
    <div class="grid" style="grid-template-columns:${canViewPayments ? '1.3fr 1fr' : '1fr'};align-items:start;">
      <div class="card" style="padding:18px;">
        <div style="font-family:var(--font-display);font-weight:700;font-size:14.5px;margin-bottom:6px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
          <span>Bons non facturés</span>
          ${sales.length > 0 ? `<button class="btn btn-sm" id="genInvoiceFromSelection">${ICONS.fileText}Générer une facture</button>` : ''}
        </div>
        ${hiddenCount > 0 ? `
        <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--muted);margin-bottom:12px;cursor:pointer;">
          <input type="checkbox" id="toggleShowInvoiced" ${showInvoiced ? 'checked' : ''}>
          Afficher aussi les ${hiddenCount} bon${hiddenCount !== 1 ? 's' : ''} déjà facturé${hiddenCount !== 1 ? 's' : ''}
        </label>` : ''}
        ${sales.length === 0 ? emptyState('cart', hiddenCount > 0 ? 'Tous les bons sont déjà facturés' : 'Aucun achat', hiddenCount > 0 ? 'Cochez la case ci-dessus pour les revoir.' : 'Les ventes de ce client apparaîtront ici.') : `
        <table class="rcard">
          <thead><tr><th style="width:26px;"><input type="checkbox" id="selectAllBons"></th><th>N°</th><th>Date</th><th>Articles</th><th style="text-align:right;">Total</th><th>Statut</th><th></th></tr></thead>
          <tbody>
            ${sales.map(s => {
              const isInvoiced = invoicedIds.has(s.id);
              return `
              <tr ${isInvoiced ? 'style="opacity:.6;"' : ''}>
                <td data-label=""><input type="checkbox" class="bon-check" value="${s.id}" ${isInvoiced ? 'disabled' : ''}></td>
                <td data-label="N°" class="mono">#${s.number || '—'}</td>
                <td data-label="Date" class="mono muted">${fmtDateTime(s.date)}</td>
                <td data-label="Articles">${s.items.map(it => `${it.qty}× ${esc(it.name)}`).join(', ')}</td>
                <td data-label="Total" class="price">${money(s.total)}</td>
                <td data-label="Statut">${isInvoiced ? `<span class="pill pill-warn">Facturé</span>` : `<span class="pill ${saleStatus(s) === 'Payé' ? 'pill-ok' : saleStatus(s) === 'Partiel' ? 'pill-warn' : 'pill-danger'}">${saleStatus(s)}</span>`}</td>
                <td data-label=""><button class="btn btn-sm" data-print-sale="${s.id}">${ICONS.printer}Bon</button><button class="btn btn-sm" data-print-delivery="${s.id}" title="Bon de livraison">${ICONS.printer}BL</button><button class="btn btn-sm" data-share-delivery-whatsapp="${s.id}" title="Envoyer par WhatsApp">WA</button><button class="btn btn-sm" data-share-delivery-email="${s.id}" title="Envoyer par e-mail">E-mail</button></td>
              </tr>
            `; }).join('')}
          </tbody>
        </table>
        <div class="muted" style="font-size:11.5px;margin-top:8px;">Cochez un ou plusieurs bons puis cliquez sur "Générer une facture" pour les regrouper.</div>
        `}
      </div>
      ${canViewPayments ? `
      <div class="card" style="padding:18px;">
        <div style="font-family:var(--font-display);font-weight:700;font-size:14.5px;margin-bottom:14px;">Journal de paiement</div>
        ${payments.length === 0 ? emptyState('wallet', 'Aucun paiement enregistré', 'Les règlements apparaîtront ici.') : `
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${payments.map(p => {
            const linkedSale = p.saleId ? state.sales.find(s => s.id === p.saleId) : null;
            return `
            <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:9px;border-bottom:1px solid var(--border);gap:8px;">
              <div>
                <div style="font-size:13px;font-weight:600;">${money(p.amount)} DH ${linkedSale ? `<span class="pill pill-ok" style="margin-left:4px;">Bon #${linkedSale.number || '?'}</span>` : ''}</div>
                <div class="muted" style="font-size:11.5px;">${fmtDate(p.date)}${p.note ? ' · ' + esc(p.note) : ''}</div>
              </div>
              <div style="display:flex;gap:4px;flex-shrink:0;">
                ${canEditPay ? `<button type="button" class="btn btn-sm icon-btn" data-edit-payment="${p.id}" title="Modifier le paiement" aria-label="Modifier le paiement">${ICONS.edit}</button>` : ''}
                ${canDeletePay ? `<button type="button" class="btn btn-sm icon-btn btn-danger" data-delete-payment="${p.id}" title="Supprimer le paiement" aria-label="Supprimer le paiement">${ICONS.trash}</button>` : ''}
              </div>
            </div>
          `; }).join('')}
        </div>`}
      </div>` : ''}
    </div>
  `;
}

function renderPaymentModal() {
  const isEdit = !!state.editingPayment;
  const clientId = isEdit ? state.editingPayment.clientId : state.paymentClientId;
  const c = state.clients.find(x => x.id === clientId);
  if (!c) return '';
  const balance = clientBalance(c.id);
  const amount = isEdit ? state.editingPayment.amount : (balance > 0 ? balance.toFixed(2) : '');
  const date = isEdit ? state.editingPayment.date.slice(0, 10) : new Date().toISOString().slice(0, 10);
  const note = isEdit ? (state.editingPayment.note || '') : '';
  const selectedSaleId = isEdit ? (state.editingPayment.saleId || '') : '';
  const bons = [...clientSales(c.id)].sort((a, b) => new Date(b.date) - new Date(a.date));
  return `
  <div class="modal-overlay" role="dialog" aria-modal="true" id="paymentModalOverlay">
    <div class="modal">
      <h2>${isEdit ? 'Modifier le paiement' : 'Enregistrer un paiement'}</h2>
      <div class="muted" style="font-size:12.5px;margin-bottom:14px;">Client : <strong style="color:var(--text)">${esc(c.name)}</strong> · Solde dû actuel : <strong style="color:var(--danger)">${money(balance)} DH</strong></div>
      <div class="field"><label>Montant reçu (DH)</label><input id="pay_amount" type="number" min="0" step="0.01" value="${amount}"></div>
      <div class="field"><label>Date</label><input id="pay_date" type="date" value="${date}"></div>
      <div class="field"><label>Lier à un bon (optionnel)</label>
        <select id="pay_sale">
          <option value="">Aucun bon spécifique</option>
          ${bons.map(s => `<option value="${s.id}" ${selectedSaleId === s.id ? 'selected' : ''}>Bon #${s.number || '?'} — ${fmtDate(s.date)} — ${money(s.total)} DH</option>`).join('')}
        </select>
      </div>
      <div class="field"><label>Note (optionnel)</label><input id="pay_note" value="${esc(note)}" placeholder="Espèces, virement…"></div>
      <div class="modal-actions">
        <button class="btn" id="cancelPaymentModal">Annuler</button>
        <button class="btn btn-primary" id="savePaymentModal">${isEdit ? 'Enregistrer' : 'Enregistrer'}</button>
      </div>
    </div>
  </div>`;
}

function renderClientModal() {
  const isNew = state.editingClient === 'new';
  const c = isNew ? { clientCode: nextClientCode(), name: '', phone: '', email: '', notes: '' } : state.editingClient;
  return `
  <div class="modal-overlay" role="dialog" aria-modal="true" id="clientModalOverlay">
    <div class="modal">
      <h2>${isNew ? 'Nouveau client' : 'Modifier le client'}</h2>
      <div class="field-row">
        <div class="field"><label>Nom complet</label><input id="c_name" value="${esc(c.name)}" placeholder="Nom du client"></div>
        <div class="field"><label>Identifiant client</label><input id="c_code" value="${esc(c.clientCode || '')}" placeholder="CL-0001"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Téléphone</label><input id="c_phone" type="tel" inputmode="numeric" maxlength="10" pattern="[0-9]{10}" data-digits-only="1" value="${esc(c.phone)}" placeholder="0612345678"></div>
        <div class="field"><label>Email</label><input id="c_email" type="email" autocomplete="email" value="${esc(c.email)}" placeholder="email@email.com"></div>
      </div>
      <div class="field"><label>Notes</label><textarea id="c_notes" rows="2" placeholder="Notes optionnelles">${esc(c.notes)}</textarea></div>
      <div class="modal-actions">
        <button class="btn" id="cancelClientModal">Annuler</button>
        <button class="btn btn-primary" id="saveClientModal">${isNew ? 'Ajouter' : 'Enregistrer'}</button>
      </div>
    </div>
  </div>`;
}

/* ---------------- Sales history ---------------- */
function renderHistory() {
  return `
    <div class="settings-tabs">
      <button class="settings-tab ${state.historyTab === 'ventes' ? 'active' : ''}" data-history-tab="ventes">Ventes clients</button>
      <button class="settings-tab ${state.historyTab === 'achats' ? 'active' : ''}" data-history-tab="achats">Réapprovisionnements</button>
      <button class="settings-tab ${state.historyTab === 'factures' ? 'active' : ''}" data-history-tab="factures">Factures</button>
    </div>
    ${state.historyTab === 'factures' ? renderInvoiceHistory() : state.historyTab === 'achats' ? renderPurchaseHistory() : renderSalesHistory()}
  `;
}

function renderPurchaseHistory() {
  const purchases = [...state.purchases].sort((a, b) => new Date(b.date) - new Date(a.date));
  const suppliersIndex = indexedById('suppliers');
  const bons = [...(state.replenishmentBons || [])].sort((a, b) => new Date(b.date) - new Date(a.date));
  const replenishmentSalesFilters = state.replenishmentSalesFilters || { from: '', to: '' };
  const total = purchases.reduce((sum, purchase) => sum + (Number(purchase.total) || 0), 0);
  const purchasePageSize = 40; const purchasePageCount = Math.max(1, Math.ceil(purchases.length / purchasePageSize));
  const purchasePage = Math.min(Math.max(1, Number(state.historyPurchasesPage) || 1), purchasePageCount); state.historyPurchasesPage = purchasePage;
  const visiblePurchases = purchases.slice((purchasePage - 1) * purchasePageSize, purchasePage * purchasePageSize);
  return `
    <div class="toolbar"><div class="muted mono" style="font-size:12px;">${bons.length} bon${bons.length !== 1 ? 's' : ''} préparé${bons.length !== 1 ? 's' : ''} · ${purchases.length} achat${purchases.length !== 1 ? 's' : ''} enregistré${purchases.length !== 1 ? 's' : ''}</div><div class="replenishment-sales-filter"><label>Ventes du <input type="date" id="replenishmentSalesFrom" value="${esc(replenishmentSalesFilters.from)}"></label><label>au <input type="date" id="replenishmentSalesTo" value="${esc(replenishmentSalesFilters.to)}"></label><span class="pill pill-warn">Période utilisée à la génération</span>${isAdmin() && hasPriv('products', 'create') ? '<button class="btn btn-sm btn-primary" id="generatePurchaseFromSalesBtn">Générer un bon depuis les ventes</button>' : ''}</div></div>
    ${bons.length ? `<div class="card" style="margin-bottom:18px;"><div style="padding:18px 18px 0;font-family:var(--font-display);font-weight:700;font-size:14.5px;">Bons d’achat préparés</div><table class="rcard"><thead><tr><th>N Bon</th><th>Date</th><th>Fournisseur</th><th>Produits</th><th>Total</th><th>Actions</th></tr></thead><tbody>${bons.map(bon => { const supplier = state.suppliers.find(s => s.id === bon.supplierId); const products = (bon.items || []).map(item => `${Number(item.qty) || 0}× ${esc(item.name || 'Produit')}`).join(', '); return `<tr><td data-label="N Bon" class="mono"><strong>${esc(bon.bonNumber || bon.id)}</strong></td><td data-label="Date" class="mono muted">${fmtDateTime(bon.date)}</td><td data-label="Fournisseur">${supplier ? esc(supplier.name) : '<span class="muted">Non spécifié</span>'}</td><td data-label="Produits">${products || '—'}</td><td data-label="Total" class="price">${money(bon.total)} DH</td><td data-label="Actions"><div class="replenishment-action-row replenishment-action-row-primary"><button class="btn btn-sm icon-btn" data-print-replenishment="${bon.id}" title="Imprimer le bon" aria-label="Imprimer le bon">${ICONS.printer}</button><button class="btn btn-sm icon-btn" data-pdf-replenishment="${bon.id}" title="Télécharger en PDF" aria-label="Télécharger en PDF">PDF</button><button class="btn btn-sm icon-btn" data-share-replenishment-whatsapp="${bon.id}" title="Envoyer par WhatsApp" aria-label="Envoyer par WhatsApp">${ICONS.whatsapp}</button><button class="btn btn-sm icon-btn" data-share-replenishment-email="${bon.id}" title="Envoyer par e-mail" aria-label="Envoyer par e-mail">${ICONS.mail}</button>${hasPriv('products', 'edit') ? `<button class="btn btn-sm icon-btn" data-edit-replenishment="${bon.id}" title="Modifier le bon" aria-label="Modifier le bon">${ICONS.edit}</button>` : ''}</div><div class="replenishment-action-row replenishment-action-row-secondary">${hasPriv('products', 'create') ? `<button class="btn btn-sm" data-validate-replenishment="${bon.id}">Enregistrer l’achat</button>` : ''}${hasPriv('products', 'delete') ? `<button class="btn btn-sm icon-btn btn-danger" data-delete-replenishment="${bon.id}" title="Supprimer le bon" aria-label="Supprimer le bon">${ICONS.trash}</button>` : ''}</div></td></tr>`; }).join('')}</tbody></table></div>` : ''}
    <div class="card">
      ${purchases.length ? '<div style="padding:18px 18px 0;font-family:var(--font-display);font-weight:700;font-size:14.5px;">Achats enregistrés</div>' : ''}
      ${purchases.length === 0 ? emptyState('download', 'Aucun achat de stock', 'Les réceptions enregistrées dans Achats apparaîtront ici.') : `<table class="rcard"><thead><tr><th>Date</th><th>Fournisseur</th><th>Produits reçus</th><th>Unités</th><th>Total achat</th><th>Type</th></tr></thead><tbody>${visiblePurchases.map(purchase => {
        const supplier = suppliersIndex.get(purchase.supplierId);
        const units = (purchase.items || []).reduce((sum, item) => sum + (Number(item.qty) || 0), 0);
        const products = (purchase.items || []).map(item => `${Number(item.qty) || 0}× ${esc(item.name || 'Produit')}`).join(', ');
        return `<tr><td data-label="Date" class="mono muted">${fmtDateTime(purchase.date)}</td><td data-label="Fournisseur">${supplier ? esc(supplier.name) : '<span class="muted">Non spécifié</span>'}</td><td data-label="Produits reçus">${products || '—'}</td><td data-label="Unités" class="mono">${units}</td><td data-label="Total achat" class="price">${money(purchase.total)} DH</td><td data-label="Type"><span class="pill pill-ok">Achat enregistré</span></td></tr>`;
      }).join('')}</tbody></table>`}
    </div>
    ${purchasePageCount > 1 ? `<div class="history-pagination"><button class="btn btn-sm" data-history-page="purchases" data-page-direction="prev" ${purchasePage <= 1 ? 'disabled' : ''}>Précédent</button><span class="muted mono">Page ${purchasePage} / ${purchasePageCount}</span><button class="btn btn-sm" data-history-page="purchases" data-page-direction="next" ${purchasePage >= purchasePageCount ? 'disabled' : ''}>Suivant</button></div>` : ''}
    <div class="muted" style="font-size:11.5px;margin-top:12px;">Cet écran est séparé des ventes aux clients : les achats augmentent le stock, tandis que les ventes diminuent le stock.</div>
  `;
}

function renderSalesHistory() {
  const salesQ=normalizeSearchText(state.salesSearch);
  const f = state.historyFilters;
  const sellers = [...new Map(state.sales.filter(s => s.sellerId).map(s => [s.sellerId, s.sellerName])).entries()];
  const clientsIndex = indexedById('clients');
  let sorted = [...state.sales];
  if (salesQ) sorted=sorted.filter(x=>[x.id,x.number,x.sellerName,x.payment,...(x.items||[]).flatMap(i=>[i.name,i.sku])].some(v=>normalizeSearchText(v).includes(salesQ)));
  if (f.status !== 'Tous') sorted = sorted.filter(s => saleStatus(s) === f.status);
  if (f.sellerId) sorted = sorted.filter(s => s.sellerId === f.sellerId);
  if (f.clientId) sorted = sorted.filter(s => s.clientId === f.clientId);
  if (f.from) { const fromD = new Date(f.from); sorted = sorted.filter(s => new Date(s.date) >= fromD); }
  if (f.to) { const toD = new Date(f.to); toD.setHours(23, 59, 59, 999); sorted = sorted.filter(s => new Date(s.date) <= toD); }
  sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
  const totalFiltered = sorted.reduce((s, x) => s + x.total, 0);
  const pageSize = 40; const pageCount = Math.max(1, Math.ceil(sorted.length / pageSize));
  const page = Math.min(Math.max(1, Number(state.historySalesPage) || 1), pageCount); state.historySalesPage = page;
  const visibleSales = sorted.slice((page - 1) * pageSize, page * pageSize);
  const isFiltered = f.status !== 'Tous' || f.sellerId || f.clientId || f.from || f.to;
  return `
    <div class="toolbar">
      <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;"><input class="search-input" id="salesSearch" placeholder="Rechercher une vente, client ou produit…" value="${esc(state.salesSearch)}">
        <select id="hf_status" class="search-input" style="min-width:120px;">
          ${['Tous', 'Payé', 'Partiel', 'Impayé'].map(v => `<option value="${v}" ${f.status === v ? 'selected' : ''}>${v === 'Tous' ? 'Tous les statuts' : v}</option>`).join('')}
        </select>
        <select id="hf_seller" class="search-input" style="min-width:140px;">
          <option value="">Tous les vendeurs</option>
          ${sellers.map(([id, name]) => `<option value="${id}" ${f.sellerId === id ? 'selected' : ''}>${esc(name)}</option>`).join('')}
        </select>
        <select id="hf_client" class="search-input" style="min-width:140px;">
          <option value="">Tous les clients</option>
          ${state.clients.map(c => `<option value="${c.id}" ${f.clientId === c.id ? 'selected' : ''}>${esc(c.name)}</option>`).join('')}
        </select>
        <input type="date" id="hf_from" value="${f.from || ''}" title="Du">
        <input type="date" id="hf_to" value="${f.to || ''}" title="Au">
        ${isFiltered ? `<button class="btn btn-sm" id="hf_clear">Réinitialiser</button>` : ''}
      </div>
      <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;">
        <button class="btn btn-sm" id="exportHistoryBtn">Exporter Excel</button>
        <button class="btn btn-sm" id="importHistoryBtn">Importer Excel</button>
        <input type="file" id="historyExcelFile" accept=".xlsx,.xls" hidden>
      </div>
    </div>
    <div class="muted mono" style="font-size:12px;margin-bottom:12px;">${sorted.length} vente${sorted.length !== 1 ? 's' : ''}${isFiltered ? ' (filtré)' : ''} · Total : ${money(totalFiltered)} DH</div>
    <div class="card">
      ${sorted.length === 0 ? emptyState('history', 'Aucune vente', isFiltered ? 'Aucun résultat pour ces filtres.' : 'Les ventes réalisées à la caisse apparaîtront ici.') : `
      <table class="rcard">
        <thead><tr><th>N°</th><th class="sales-date-column">Date</th><th>Articles</th><th>Client</th><th>Vendeur</th><th class="sales-payment-column" title="Mode de paiement">P</th><th>Statut</th><th style="text-align:right;">Total</th><th></th></tr></thead>
        <tbody>
          ${visibleSales.map(s => {
            const client = clientsIndex.get(s.clientId);
            return `
            <tr>
              <td data-label="N°" class="mono">#${s.number || '—'}</td>
              <td data-label="Date" class="mono muted sales-date-column">${fmtDateTime(s.date)}</td>
              <td data-label="Articles">${s.items.map(it => `${it.qty}× ${esc(it.name)}`).join(', ')}</td>
              <td data-label="Client">${client ? esc(client.name) : '<span class="muted">Client de passage</span>'}</td>
              <td data-label="Vendeur" class="muted">${esc(s.sellerName || '—')}</td>
              <td data-label="P" class="muted sales-payment-column" title="${esc(s.payment || 'Mode inconnu')}">${esc(paymentShortLabel(s.payment))}</td>
              <td data-label="Statut"><span class="pill ${saleStatus(s) === 'Payé' ? 'pill-ok' : saleStatus(s) === 'Partiel' ? 'pill-warn' : 'pill-danger'}">${saleStatus(s)}</span></td>
              <td data-label="Total" class="price">${money(s.total)}</td>
              <td data-label=""><div class="row-actions"><button class="btn btn-sm icon-btn" data-print-sale="${s.id}" title="Imprimer le reçu" aria-label="Imprimer le reçu">${ICONS.printer}</button><button class="btn btn-sm icon-btn" data-print-delivery="${s.id}" title="Bon de livraison" aria-label="Imprimer le bon de livraison">${ICONS.printer}</button><button class="btn btn-sm icon-btn" data-share-delivery-whatsapp="${s.id}" title="Envoyer par WhatsApp" aria-label="Envoyer par WhatsApp">${ICONS.whatsapp}</button><button class="btn btn-sm icon-btn" data-share-delivery-email="${s.id}" title="Envoyer par e-mail" aria-label="Envoyer par e-mail">${ICONS.mail}</button>${isAdmin() ? `<button class="btn btn-sm icon-btn" data-edit-sale="${s.id}" title="Modifier la vente" aria-label="Modifier la vente">${ICONS.edit}</button><button class="btn btn-sm btn-danger icon-btn" data-delete-sale="${s.id}" title="Supprimer la vente" aria-label="Supprimer la vente">${ICONS.trash}</button>` : ''}</div></td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>${pageCount > 1 ? `<div class="history-pagination"><button class="btn btn-sm" data-history-page="sales" data-page-direction="prev" ${page <= 1 ? 'disabled' : ''}>Précédent</button><span class="muted mono">Page ${page} / ${pageCount}</span><button class="btn btn-sm" data-history-page="sales" data-page-direction="next" ${page >= pageCount ? 'disabled' : ''}>Suivant</button></div>` : ''}`}
    </div>
  `;
}

function renderInvoiceHistory() {
  const sorted = [...state.invoices].sort((a, b) => new Date(b.date) - new Date(a.date));
  return `
    <div class="card">
      ${sorted.length === 0 ? emptyState('fileText', 'Aucune facture générée', 'Les factures générées depuis une fiche client apparaîtront ici.') : `
      <table class="rcard">
        <thead><tr><th>N°</th><th>Émise le</th><th>Client</th><th style="text-align:right;">Bons inclus</th><th style="text-align:right;">Total</th><th style="text-align:right;">Reste dû</th><th></th></tr></thead>
        <tbody>
          ${sorted.map(inv => {
            const client = state.clients.find(c => c.id === inv.clientId);
            return `
            <tr>
              <td data-label="N°" class="mono">FAC-${String(inv.number).padStart(4, '0')}</td>
              <td data-label="Émise le" class="mono muted">${fmtDateTime(inv.date)}</td>
              <td data-label="Client">${client ? esc(client.name) : '<span class="muted">Client supprimé</span>'}</td>
              <td data-label="Bons inclus" class="mono">${inv.saleIds.length}</td>
              <td data-label="Total" class="price">${money(inv.total)}</td>
              <td data-label="Reste dû" class="mono">${money(inv.total - inv.paid)}</td>
              <td data-label=""><button class="btn btn-sm" data-reprint-invoice="${inv.id}">${ICONS.printer}Réimprimer</button></td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>`}
    </div>
  `;
}

function renderSaleEditModal() {
  const sale = state.editingSale;
  if (!sale) return '';
  const lines = (sale.items || []).map((item, index) => {
    const product = state.products.find(p => p.id === item.productId);
    return { id: item.id || `${sale.id}_${index}`, productId: item.productId || '', sku: item.sku || product?.sku || '', qty: item.qty ?? '', unitPrice: item.price ?? '' };
  });
  const clientId = sale.clientId || '';
  const date = localDateInputValue(sale.date); const time = localTimeInputValue(sale.date);
  return `<div class="modal-overlay" role="dialog" aria-modal="true" id="saleEditModalOverlay"><div class="modal modal-wide bulk-sale-modal">
    <h2>Modifier la vente N°${esc(sale.number || '—')}</h2>
    <p class="muted" style="font-size:12px;margin-top:4px;margin-bottom:12px;">Le stock de la vente actuelle sera restitué puis recalculé avant l’enregistrement.</p>
    <div class="bulk-sale-meta"><div class="field"><label>Client</label><select id="edit_sale_client"><option value="">Client de passage</option>${state.clients.map(c => `<option value="${c.id}" ${clientId === c.id ? 'selected' : ''}>${esc(c.name)} (${esc(c.clientCode || '')})</option>`).join('')}</select></div><div class="field"><label>Date</label><input id="edit_sale_date" type="date" value="${date}"></div><div class="field"><label>Heure</label><input id="edit_sale_time" type="time" value="${time}"></div><div class="field"><label>Mode de paiement</label><select id="edit_sale_payment"><option value="Espèces" ${sale.payment === 'Espèces' ? 'selected' : ''}>Espèces</option><option value="Carte" ${sale.payment === 'Carte' ? 'selected' : ''}>Carte bancaire</option><option value="Mobile money" ${sale.payment === 'Mobile money' ? 'selected' : ''}>Mobile money</option></select></div></div>
    <div class="field"><label>Produits vendus</label><div id="editSaleLines">${lines.map(line => `<div class="purchase-line-grid bulk-sale-line"><div class="field purchase-line-code-field"><label>Code P / code</label><input id="es_sku_${line.id}" data-edit-sale-sku="${line.id}" value="${esc(line.sku)}" placeholder="Code P exact"></div><div class="field"><label>Produit</label><select id="es_product_${line.id}" data-edit-sale-product="${line.id}"><option value="">Choisir un produit</option>${state.products.filter(p => !p.archived || p.id === line.productId).map(p => `<option value="${p.id}" ${line.productId === p.id ? 'selected' : ''}>${esc(p.name)} — ${esc(p.model)}</option>`).join('')}</select></div><div class="field"><label>Qté</label><input id="es_qty_${line.id}" data-edit-sale-field="qty" data-line="${line.id}" type="number" min="1" step="1" value="${esc(line.qty)}"></div><div class="field"><label>Prix vente</label><input id="es_price_${line.id}" data-edit-sale-field="unitPrice" data-line="${line.id}" type="number" min="0" step="0.01" value="${esc(line.unitPrice)}"></div><div class="purchase-line-total"><span>Montant</span><strong>${money((Number(line.qty) || 0) * (Number(line.unitPrice) || 0))} DH</strong></div></div>`).join('')}</div></div>
    <div class="bulk-sale-payment-row"><div class="field"><label>Réduction (DH)</label><input id="edit_sale_discount" type="text" inputmode="decimal" data-decimal-input="1" value="${esc(sale.discount || '')}"></div><div class="field"><label>Montant payé</label><input id="edit_sale_paid" type="text" inputmode="decimal" data-decimal-input="1" value="${esc(sale.paidAmount ?? '')}"></div></div>
    <div class="modal-actions"><button class="btn" id="cancelEditSale">Annuler</button><button class="btn btn-primary" id="saveEditSale">Enregistrer les modifications</button></div>
  </div></div>`;
}

/* ---------------- Print: Bon (receipt) ---------------- */
function renderReceiptModal() {
  const s = state.receiptSale;
  if (!s) return '';
  const client = state.clients.find(c => c.id === s.clientId);
  return `
  <div class="modal-overlay" role="dialog" aria-modal="true" id="receiptModalOverlay">
    <div class="modal">
      <h2>Vente encaissée</h2>
      <div class="receipt-preview" style="background:var(--surface-2);border-radius:10px;padding:16px;margin-bottom:16px;">
        ${buildReceiptHTML(s, client)}
      </div>
      <div class="modal-actions">
        <button class="btn" id="closeReceiptModal">Fermer</button>
        <button class="btn btn-primary" id="printReceiptBtn">${ICONS.printer}Imprimer le bon</button>
      </div>
    </div>
  </div>`;
}

function buildReceiptHTML(s, client) {
  return `
    <div class="receipt">
      <h2>${esc(getAppName())}</h2>
      <div class="center">${esc(getAppSubtitle())}</div>
      <hr>
      <div>Date : ${fmtDateTime(s.date)}</div>
      <div>Bon N° : ${s.number ? '#' + s.number : esc(s.id)}</div>
      <div>Client : ${client ? esc(client.name) + (client.clientCode ? ' (' + esc(client.clientCode) + ')' : '') : 'Client de passage'}</div>
      <div>Vendeur : ${esc(s.sellerName || '—')}</div>
      <hr>
      <table>
        ${s.items.map(it => `<tr><td>${it.qty}× ${esc(it.name)}</td><td style="text-align:right;">${money(it.price * it.qty)}</td></tr>`).join('')}
      </table>
      <hr>
      <table>
        ${s.discount > 0 ? `
        <tr><td>Sous-total</td><td style="text-align:right;">${money(s.subtotal)} DH</td></tr>
        <tr><td>Réduction</td><td style="text-align:right;">− ${money(s.discount)} DH</td></tr>
        ` : ''}
        <tr><td><strong>TOTAL</strong></td><td style="text-align:right;"><strong>${money(s.total)} DH</strong></td></tr>
        <tr><td>Payé</td><td style="text-align:right;">${money(s.paidAmount)} DH</td></tr>
        ${s.paidAmount < s.total ? `<tr><td>Reste dû</td><td style="text-align:right;">${money(s.total - s.paidAmount)} DH</td></tr>` : ''}
      </table>
      <hr>
      <div>Paiement : ${esc(s.payment)}</div>
      <div class="center" style="margin-top:8px;">Merci de votre confiance !</div>
    </div>
  `;
}

function printHTML(html) {
  const area = document.getElementById('printArea');
  area.innerHTML = html;
  setTimeout(() => window.print(), 50);
}

/* ---------------- Print: Facture par période ---------------- */
function invoiceSalesFor(d) {
  if (d.saleIds && d.saleIds.length) {
    return d.saleIds.map(id => state.sales.find(s => s.id === id)).filter(Boolean).sort((a, b) => new Date(a.date) - new Date(b.date));
  }
  if (d.clientId && d.from && d.to) {
    const fromD = new Date(d.from); const toD = new Date(d.to); toD.setHours(23, 59, 59, 999);
    return clientSales(d.clientId).filter(s => { const dt = new Date(s.date); return dt >= fromD && dt <= toD; })
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  }
  return [];
}

function renderInvoiceModal() {
  const d = state.invoiceDraft;
  const client = state.clients.find(c => c.id === d.clientId);
  const sales = client ? invoiceSalesFor(d) : [];
  const isSelection = !!(d.saleIds && d.saleIds.length);
  const total = sales.reduce((s, x) => s + x.total, 0);
  const paid = sales.reduce((s, x) => s + effectivePaidAmount(x), 0);
  const canShow = client && sales.length > 0;
  return `
  <div class="modal-overlay" role="dialog" aria-modal="true" id="invoiceModalOverlay">
    <div class="modal modal-wide">
      <h2>${isSelection ? `Facture — ${sales.length} bon${sales.length !== 1 ? 's' : ''} sélectionné${sales.length !== 1 ? 's' : ''}` : 'Facture par période'}</h2>
      ${isSelection ? `
        <div class="muted" style="font-size:12.5px;margin-bottom:14px;">Client : <strong style="color:var(--text)">${esc(client.name)}</strong></div>
      ` : `
      <div class="field-row">
        <div class="field"><label>Client</label>
          <select id="inv_client">
            <option value="">Sélectionner un client</option>
            ${state.clients.map(c => `<option value="${c.id}" ${d.clientId === c.id ? 'selected' : ''}>${esc(c.name)}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="field-row">
        <div class="field"><label>Du</label><input id="inv_from" type="date" value="${d.from || ''}"></div>
        <div class="field"><label>Au</label><input id="inv_to" type="date" value="${d.to || ''}"></div>
      </div>
      <button class="btn btn-sm" id="inv_apply" style="margin-bottom:16px;">Afficher les bons</button>
      `}
      ${canShow ? `
        <div style="background:var(--surface-2);border-radius:10px;padding:14px;max-height:280px;overflow-y:auto;">
          <table style="width:100%;font-size:12.5px;">
            <thead><tr><th style="text-align:left;">Date</th><th style="text-align:left;">Articles</th><th style="text-align:right;">Total</th></tr></thead>
            <tbody>
              ${sales.map(s => `<tr><td>${fmtDate(s.date)}</td><td>${s.items.map(it => `${it.qty}× ${esc(it.name)}`).join(', ')}</td><td style="text-align:right;">${money(s.total)}</td></tr>`).join('')}
            </tbody>
          </table>
          <div style="margin-top:10px;text-align:right;font-size:13px;">
            <div>Total : <strong class="price">${money(total)} DH</strong></div>
            <div class="muted">Payé : ${money(paid)} DH · Reste dû : ${money(total - paid)} DH</div>
          </div>
        </div>
      ` : (isSelection ? '' : `<div class="muted" style="font-size:12.5px;">Choisissez un client et une période, puis cliquez sur "Afficher les bons".</div>`)}
      <div class="modal-actions">
        <button class="btn" id="closeInvoiceModal">Fermer</button>
        <button class="btn btn-primary" id="printInvoiceBtn" ${!canShow ? 'disabled' : ''}>${ICONS.printer}Imprimer la facture</button>
      </div>
    </div>
  </div>`;
}

function buildInvoiceHTML(client, sales, from, to) {
  const total = sales.reduce((s, x) => s + x.total, 0);
  const paid = sales.reduce((s, x) => s + effectivePaidAmount(x), 0);
  const periodLabel = from && to ? `<div>Période : du ${fmtDate(from)} au ${fmtDate(to)}</div>` : `<div>${sales.length} bon${sales.length !== 1 ? 's' : ''} sélectionné${sales.length !== 1 ? 's' : ''}</div>`;
  return `
    <div class="invoice-doc">
      <h2>Facture — ${esc(getAppName())}</h2>
      <div>Client : <strong>${esc(client.name)}</strong> ${client.phone ? '· ' + esc(client.phone) : ''}</div>
      ${periodLabel}
      <div>Émise le : ${fmtDate(new Date())}</div>
      <table>
        <thead><tr><th>Date</th><th>Articles</th><th>Statut</th><th style="text-align:right;">Total</th></tr></thead>
        <tbody>
          ${sales.map(s => `<tr><td>${fmtDate(s.date)}</td><td>${s.items.map(it => `${it.qty}× ${esc(it.name)}`).join(', ')}</td><td>${saleStatus(s)}</td><td style="text-align:right;">${money(s.total)} DH</td></tr>`).join('')}
        </tbody>
      </table>
      <div style="margin-top:16px;text-align:right;">
        <div style="font-size:16px;"><strong>Total : ${money(total)} DH</strong></div>
        <div>Payé : ${money(paid)} DH</div>
        <div>Reste dû : ${money(total - paid)} DH</div>
      </div>
    </div>
  `;
}

async function recordGeneratedDocument(kind, record, channel='print') {
  const entry={id:uid('doc'),kind,recordId:record.id,number:kind==='purchase' ? (record.bonNumber || record.id) : (record.number || record.id),date:new Date().toISOString(),channel,clientId:record.clientId||null};
  state.generatedDocuments=Array.isArray(state.generatedDocuments)?state.generatedDocuments:[]; state.generatedDocuments.unshift(entry); state.generatedDocuments=state.generatedDocuments.slice(0,500);
  await safeSet('shop:generated-documents',state.generatedDocuments,true);
}
function renderGeneratedDocuments() {
  const docs=state.generatedDocuments||[]; return `<div class="toolbar"><div class="muted">${docs.length} document${docs.length!==1?'s':''} généré${docs.length!==1?'s':''}</div></div><div class="card"><table class="rcard"><thead><tr><th>Date</th><th>Type</th><th>N°</th><th>Destinataire</th><th>Canal</th><th>Actions</th></tr></thead><tbody>${docs.length?docs.map(d=>{const rec=d.kind==='purchase'?state.purchases.find(x=>x.id===d.recordId):state.sales.find(x=>x.id===d.recordId);const person=d.kind==='purchase'?state.suppliers.find(x=>x.id===rec?.supplierId):state.clients.find(x=>x.id===rec?.clientId);return `<tr><td data-label="Date" class="mono muted">${fmtDateTime(d.date)}</td><td data-label="Type">${d.kind==='purchase'?'Bon d’achat':'Bon de livraison'}</td><td data-label="N°" class="mono">${esc(d.number)}</td><td data-label="Destinataire">${esc(person?.name||'—')}</td><td data-label="Canal" class="muted">${esc(d.channel)}</td><td data-label="Actions" class="row-actions">${rec?`<button class="btn btn-sm" data-redo-doc="${d.id}">${ICONS.printer}Réimprimer</button><button class="btn btn-sm" data-pdf-doc="${d.id}">PDF</button>`:'Document introuvable'}</td></tr>`}).join(''):`<tr><td colspan="6">${emptyState('history','Aucun bon généré','Les bons imprimés, téléchargés ou partagés apparaîtront ici.')}</td></tr>`}</tbody></table></div>`;
}
function companyHeaderHTML() {
  const b = state.branding || {};
  return `<div class="document-company-header">${safeImageSrc(b.icon) ? `<img src="${esc(b.icon)}" alt="Logo">` : `<div class="document-logo-fallback">${esc(getAppName().slice(0,2).toUpperCase())}</div>`}<div><h1>${esc(b.companyName || getAppName())}</h1><div>${esc(getAppSubtitle())}</div>${b.companyAddress ? `<div>${esc(b.companyAddress)}</div>` : ''}${b.companyPhone ? `<div>Tél. : ${esc(b.companyPhone)}</div>` : ''}${b.companyEmail ? `<div>${esc(b.companyEmail)}</div>` : ''}${b.companyId ? `<div>Identifiant : ${esc(b.companyId)}</div>` : ''}</div></div>`;
}
function documentTextLines(title, lines) { const b=state.branding||{}; return [b.companyName || getAppName(), getAppSubtitle(), b.companyAddress || '', b.companyPhone ? `Tél. : ${b.companyPhone}` : '', b.companyEmail || '', b.companyId ? `Identifiant : ${b.companyId}` : '', '', title, ...lines].filter(Boolean); }
function downloadBonPDF(kind, record) {
  const jsPDFCtor = window.jspdf?.jsPDF || window.jspdf?.default;
  if (!jsPDFCtor) { toast('Bibliothèque PDF indisponible.'); return; }
  const isPurchase = kind === 'purchase'; const supplier = isPurchase ? state.suppliers.find(x=>x.id===record.supplierId) : null; const client = !isPurchase ? state.clients.find(x=>x.id===record.clientId) : null;
  const title = isPurchase ? 'BON D’ACHAT' : 'BON DE LIVRAISON';
  const doc=new jsPDFCtor({unit:'mm',format:'a4'}); const pageWidth=210; const margin=18; const bottom=278; let pageNumber=1; let y=18;
  const header=()=>{ const b=state.branding||{}; if(safeImageSrc(b.icon)){try{doc.addImage(b.icon,'PNG',pageWidth-margin-22,14,22,22);}catch(e){}} doc.setFont('helvetica','bold'); doc.setFontSize(16); doc.text(String(b.companyName||getAppName()),margin,y); y+=6; doc.setFont('helvetica','normal'); doc.setFontSize(9); [getAppSubtitle(),b.companyAddress,b.companyPhone?`Tél. : ${b.companyPhone}`:'',b.companyEmail,b.companyId?`Identifiant : ${b.companyId}`:''].filter(Boolean).forEach(line=>{doc.text(String(line),margin,y);y+=4;}); y+=4; doc.setFont('helvetica','bold'); doc.setFontSize(14); doc.text(title,margin,y); y+=7; doc.setFont('helvetica','normal'); doc.setFontSize(9); doc.text(`${isPurchase?'N Bon':'N°'} : ${record.bonNumber||record.number||record.id}`,margin,y); doc.text(`Date : ${fmtDateTime(record.date)}`,105,y); y+=5; doc.text(`${isPurchase?'Fournisseur':'Client'} : ${supplier?.name||client?.name||'Non spécifié'}`,margin,y); y+=8; };
  const newPage=()=>{doc.setFontSize(8);doc.setFont('helvetica','normal');doc.text(`Page ${pageNumber}`,pageWidth-margin,287,{align:'right'});doc.addPage();pageNumber+=1;y=18;header();};
  const columns=isPurchase?[['Produit',18,62],['Code P',82,32],['Qté',118,14],['Prix achat',137,25],['Total',166,26]]:[['Produit',18,72],['Qté',94,18],['Prix unitaire',116,28],['Remise',148,22],['Total',174,18]];
  const tableHeader=()=>{doc.setFillColor(238,242,241);doc.rect(margin,y-4,pageWidth-2*margin,8,'F');doc.setFont('helvetica','bold');doc.setFontSize(8);columns.forEach(([label,x])=>doc.text(label,x,y));y+=7;doc.setFont('helvetica','normal');};
  header(); tableHeader();
  (record.items||[]).forEach(item=>{const nameLines=doc.splitTextToSize(String(item.name||'Produit'),isPurchase?58:68);const codeLines=isPurchase?doc.splitTextToSize(String(item.sku||'—'),30):[];const rowHeight=Math.max(nameLines.length,codeLines.length,1)*4.2+4;if(y+rowHeight>bottom)newPage(),tableHeader();nameLines.forEach((line,i)=>doc.text(line,18,y+i*4.2));if(isPurchase){codeLines.forEach((line,i)=>doc.text(line,82,y+i*4.2));doc.text(String(item.qty||0),118,y);doc.text(`${money(item.unitCost)} DH`,137,y);doc.text(`${money((Number(item.qty)||0)*(Number(item.unitCost)||0))} DH`,166,y);}else{doc.text(String(item.qty||0),94,y);doc.text(`${money(item.price)} DH`,116,y);doc.text('0,00 DH',148,y);doc.text(`${money((Number(item.qty)||0)*(Number(item.price)||0))} DH`,174,y);}y+=rowHeight;doc.setDrawColor(220,224,223);doc.line(margin,y-2,pageWidth-margin,y-2);});
  if(y+28>bottom)newPage(); doc.setFont('helvetica','bold');doc.setFontSize(10);doc.text(isPurchase?'TOTAL ACHAT :':'TOTAL :',140,y+7);doc.text(`${money(record.total||0)} DH`,pageWidth-margin,y+7,{align:'right'});doc.setFontSize(8);doc.setFont('helvetica','normal');doc.text(`Page ${pageNumber}`,pageWidth-margin,287,{align:'right'});
  doc.save(`${isPurchase?'bon-achat':'bon-livraison'}-${isPurchase ? (record.bonNumber || record.id) : (record.number || record.id)}.pdf`);
}
function shareBon(kind, record, channel) {
  const isPurchase=kind==='purchase'; const recipient=isPurchase ? state.suppliers.find(x=>x.id===record.supplierId) : state.clients.find(x=>x.id===record.clientId); const label=isPurchase?'bon d’achat':'bon de livraison';
  const number=isPurchase ? (record.bonNumber || record.id) : (record.number || record.id);
  const text=`Bonjour${recipient?.name ? ' '+recipient.name : ''}, veuillez trouver votre ${label} ${number} de ${getAppName()}. Montant total : ${money(record.total)} DH. Le PDF a été téléchargé et peut être joint à ce message.`;
  if(channel==='whatsapp'){ const phone=(recipient?.phone||'').replace(/\D/g,''); if(!phone){toast(`Aucun téléphone valide pour ce ${isPurchase ? 'fournisseur' : 'client'}.`);return;} window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`,'_blank','noopener'); }
  else { const email=recipient?.email||''; if(!email){toast(`Aucun e-mail enregistré pour ce ${isPurchase ? 'fournisseur' : 'client'}.`);return;} window.location.href=`mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(label+' '+number)}&body=${encodeURIComponent(text)}`; }
  downloadBonPDF(kind,record);
}
function buildPurchaseOrderHTML(purchase) { const supplier=state.suppliers.find(s=>s.id===purchase.supplierId); return `<div class="invoice-doc">${companyHeaderHTML()}<h2>Bon d’achat — ${esc(getAppName())}</h2><p>N Bon ${esc(purchase.bonNumber || purchase.id)} · Date : ${fmtDateTime(purchase.date)}</p><p>Fournisseur : <strong>${esc(supplier?.name || 'Non spécifié')}</strong></p><table><thead><tr><th>Produit</th><th>Code P</th><th>Qté</th><th>Prix achat</th><th>Total</th></tr></thead><tbody>${(purchase.items||[]).map(i=>`<tr><td>${esc(i.name)}</td><td>${esc(i.sku||'—')}</td><td>${i.qty}</td><td>${money(i.unitCost)} DH</td><td>${money((Number(i.qty)||0)*(Number(i.unitCost)||0))} DH</td></tr>`).join('')}</tbody></table><p style="text-align:right"><strong>Total : ${money(purchase.total)} DH</strong></p></div>`; }
function buildDeliveryNoteHTML(sale) {
  const client = state.clients.find(c => c.id === sale.clientId);
  const items = sale.items || [];
  const grossSubtotal = Number(sale.subtotal) || items.reduce((sum, item) => sum + (Number(item.price) || 0) * (Number(item.qty) || 0), 0);
  const discountTotal = Math.max(0, Number(sale.discount) || 0);
  const total = Number(sale.total) || Math.max(0, grossSubtotal - discountTotal);
  return `<div class="invoice-doc">${companyHeaderHTML()}<h2>Bon de livraison — ${esc(getAppName())}</h2><p>N° ${esc(sale.number || sale.id)} · Date : ${fmtDateTime(sale.date)}</p><p>Client : <strong>${esc(client?.name || 'Client comptant')}</strong></p><table><thead><tr><th>PRODUIT</th><th>QTÉ</th><th>Prix unitaire</th><th>Remise</th><th>Total</th></tr></thead><tbody>${items.map(item => { const qty = Number(item.qty) || 0; const unitPrice = Number(item.price) || 0; const lineGross = qty * unitPrice; const lineDiscount = grossSubtotal > 0 ? discountTotal * lineGross / grossSubtotal : 0; return `<tr><td>${esc(item.name || 'Produit')}</td><td>${qty}</td><td>${money(unitPrice)} DH</td><td>${money(lineDiscount)} DH</td><td>${money(Math.max(0, lineGross - lineDiscount))} DH</td></tr>`; }).join('')}<tr><td colspan="4" style="text-align:right">Sous-total</td><td>${money(grossSubtotal)} DH</td></tr><tr><td colspan="4" style="text-align:right">Réduction</td><td>${money(discountTotal)} DH</td></tr><tr><td colspan="4" style="text-align:right"><strong>TOTAL</strong></td><td><strong>${money(total)} DH</strong></td></tr><tr><td colspan="4" style="text-align:right">Payé</td><td>${money(effectivePaidAmount(sale))} DH</td></tr><tr><td colspan="4" style="text-align:right">Reste dû</td><td>${money(Math.max(0, total - effectivePaidAmount(sale)))} DH</td></tr><tr><td colspan="4" style="text-align:right">Paiement :</td><td>${esc(sale.payment || 'Espèces')}</td></tr></tbody></table></div>`;
}
/* ---------------- Settings ---------------- */
function renderPhysicalInventory() {
  if (!isAdmin()) return emptyState('empty', 'Accès réservé', 'L’inventaire physique est réservé à un administrateur.');
  const rows = [...state.products].sort((a, b) => String(a.name || '').localeCompare(String(b.name || ''), 'fr', { sensitivity: 'base' }));
  return `
    <div class="toolbar"><div><strong>Inventaire physique</strong><div class="muted" style="font-size:12px;margin-top:4px;">Comptez les produits réellement présents puis validez les écarts. Les corrections sont journalisées et ne réécrivent pas les ventes passées.</div></div><button class="btn btn-primary" id="savePhysicalInventoryBtn">${ICONS.check || ICONS.archive}Valider l’inventaire</button></div>
    <div class="card"><table class="rcard inventory-table"><thead><tr><th>Produit</th><th>Code P</th><th>Stock système</th><th>Quantité comptée</th><th>Écart</th></tr></thead><tbody>
      ${rows.length ? rows.map(product => { const systemQty = productStock(product.id); return `<tr><td data-label="Produit"><strong>${esc(product.name)}</strong></td><td data-label="Code P" class="mono muted">${esc(product.sku || '—')}</td><td data-label="Stock système" class="mono">${systemQty}</td><td data-label="Quantité comptée"><input class="inventory-qty-input" type="number" min="0" step="1" value="${systemQty}" data-inventory-qty="${product.id}" data-system-qty="${systemQty}"></td><td data-label="Écart" class="mono"><span data-inventory-diff="${product.id}">0</span></td></tr>`; }).join('') : `<tr><td colspan="5">${emptyState('box', 'Aucun produit', 'Ajoutez un produit avant de réaliser un inventaire.')}</td></tr>`}
    </tbody></table></div>`;
}

async function savePhysicalInventory() {
  if (!isAdmin()) { toast('Action non autorisée'); return; }
  const inputs = [...document.querySelectorAll('[data-inventory-qty]')];
  const changes = [];
  for (const input of inputs) {
    const product = state.products.find(p => p.id === input.dataset.inventoryQty);
    const target = Number(input.value);
    const systemQty = Number(input.dataset.systemQty);
    if (!product || !Number.isInteger(target) || target < 0) { toast('Chaque quantité comptée doit être un entier positif ou nul'); return; }
    if (target !== systemQty) changes.push({ product, systemQty, target, diff: target - systemQty });
  }
  if (!changes.length) { toast('Aucun écart à corriger'); return; }
  if (!confirmLocalized(`Appliquer ${changes.length} correction(s) d’inventaire physique ?`)) return;
  const previousPurchases = JSON.parse(JSON.stringify(state.purchases));
  try {
    for (const change of changes) {
      if (change.diff > 0) {
        const unitCost = productAvgCost(change.product.id);
        const unitPrice = productSellPrice(change.product.id);
        state.purchases.push({ id: uid('pu'), date: new Date().toISOString(), supplierId: null, items: [{ productId: change.product.id, name: change.product.name, qty: change.diff, unitCost, unitPrice, qtyRemaining: change.diff }], total: change.diff * unitCost, note: 'Ajustement inventaire physique (entrée)' });
      } else {
        let remaining = -change.diff;
        const lots = productLots(change.product.id).filter(lot => Number(lot.qtyRemaining) > 0).sort((a, b) => new Date(b.date) - new Date(a.date));
        for (const lot of lots) {
          if (remaining <= 0) break;
          const take = Math.min(Number(lot.itemRef.qtyRemaining) || 0, remaining);
          lot.itemRef.qtyRemaining = (Number(lot.itemRef.qtyRemaining) || 0) - take;
          remaining -= take;
        }
        if (remaining > 0) throw new Error(`Stock insuffisant pour ${change.product.name}`);
      }
    }
    const result = await savePurchases();
    if (result === null) throw new Error('Échec de sauvegarde');
    await logOperation('Inventaire physique', changes.map(c => `${c.product.name}: ${c.systemQty} → ${c.target}`).join(' · '));
    toast('Inventaire physique enregistré');
    render();
  } catch (error) {
    state.purchases = previousPurchases;
    await savePurchases();
    console.error(error);
    toast('Échec de l’inventaire : aucune correction n’a été conservée');
  }
}

function renderSettings() {
  const admin = isAdmin();
  const tabs = admin
    ? [{ id: 'profil', label: 'Mon profil' }, { id: 'identite', label: 'Identité de l’application' }, { id: 'vendeurs', label: 'Comptes vendeurs' }, { id: 'historique', label: "Historique d'opérations" }, { id: 'sauvegarde', label: 'Sauvegarde' }, { id: 'inventaire', label: 'Inventaire physique' }, { id: 'reports', label: 'Rapports' }, { id: 'configuration', label: 'Configuration' }, { id: 'suppliers', label: 'Fournisseurs' }, { id: 'clients', label: 'Clients' }]
    : [{ id: 'profil', label: 'Mon profil' }];
  const tab = tabs.find(t => t.id === state.settingsTab) ? state.settingsTab : 'profil';
  return `
    <div class="settings-tabs">
      ${tabs.map(t => `<button class="settings-tab ${tab === t.id ? 'active' : ''}" data-settings-tab="${t.id}">${t.label}</button>`).join('')}
    </div>
    ${tab === 'profil' ? renderSettingsProfil() : ''}
    ${tab === 'identite' && admin ? renderSettingsIdentite() : ''}
    ${tab === 'vendeurs' && admin ? renderSettingsVendeurs() : ''}
    ${tab === 'historique' && admin ? renderSettingsHistorique() : ''}
    ${tab === 'sauvegarde' && admin ? renderSettingsSauvegarde() : ''}
    ${tab === 'inventaire' && admin ? renderPhysicalInventory() : ''}
    ${tab === 'reports' && admin ? renderMarginReports() : ''}
    ${tab === 'configuration' && admin ? `<div class="settings-config-grid"><div><h3>Capital</h3>${renderCapitalSettings()}</div><div><h3>Recharges</h3>${renderRechargeSettings()}</div></div>` : ''}
    ${tab === 'suppliers' && admin ? renderSuppliers() : ''}
    ${tab === 'clients' && admin ? renderClients() : ''}
  `;
}

function renderCapitalSettings() { return `<div class="card" style="padding:18px;max-width:620px;"><h3>Capital de départ</h3><p class="muted">Configurez le capital initial de la boutique. Exemple : 60 000 DH. Il est utilisé dans le rapport financier pour calculer le reste du capital.</p><div class="field"><label>Capital initial (DH)</label><input id="capitalAmount" type="text" inputmode="decimal" value="${esc(state.capitalAmount)}" placeholder="60000"></div><button class="btn btn-primary" id="saveCapitalAmount">Enregistrer le capital</button></div>`; }
function renderRechargeSettings() { return `<div class="card" style="padding:18px;max-width:620px;"><h3>Marge des recharges</h3><p class="muted">Cette marge est appliquée automatiquement à chaque vente de recharge et enregistrée séparément dans la vente.</p><div class="field"><label>Taux de marge (%)</label><input id="rechargeMarginRate" type="text" inputmode="decimal" value="${esc(state.rechargeMarginRate)}"></div><button class="btn btn-primary" id="saveRechargeMarginRate">Enregistrer le taux</button></div>`; }
function financeViewFrom(mode) {
  return renderFinanceModule(mode);
}
function financeModuleViewFrom(mode) {
  return renderFinanceModule(mode);
}
function financeModuleFormHTML(mode) {
  const html = renderSettingsFinances();
  const marker = mode === 'equipment' ? 'finance-equipment-form' : 'finance-expense-form';
  const match = html.match(new RegExp(`<!-- ${marker}:start -->([\\s\\S]*?)<!-- ${marker}:end -->`));
  return match ? match[1] : '';
}
function financeModuleRows(mode) {
  const isEquipment = mode === 'equipment';
  const search = normalizeSearchText(isEquipment ? state.equipmentSearch : state.expenseSearch);
  const from = isEquipment ? state.equipmentFrom : state.expenseFrom;
  const to = isEquipment ? state.equipmentTo : state.expenseTo;
  const source = isEquipment ? state.equipmentPurchases : state.expenses;
  const filtered = source.filter(item => {
    const haystack = normalizeSearchText(isEquipment ? [item.name, item.category, item.supplier, item.payment, item.note].join(' ') : [item.description, item.category, item.payee, item.payment, item.note].join(' '));
    const date = localDateInputValue(item.date);
    return (!search || haystack.includes(search)) && (!from || date >= from) && (!to || date <= to);
  }).sort((a,b)=>new Date(b.date)-new Date(a.date));
  return { filtered, total: filtered.reduce((sum,item)=>sum+(Number(item.amount)||0),0) };
}
function renderFinanceFilters(mode) {
  const isEquipment = mode === 'equipment';
  const prefix = isEquipment ? 'equipment' : 'expense';
  const search = isEquipment ? state.equipmentSearch : state.expenseSearch;
  const from = isEquipment ? state.equipmentFrom : state.expenseFrom;
  const to = isEquipment ? state.equipmentTo : state.expenseTo;
  return `<div class="finance-filters card"><div class="finance-filter-title"><strong>Recherche et filtres</strong><span class="muted">Filtrez par texte et par période</span></div><div class="finance-filter-grid"><input class="search-input" id="${prefix}Search" value="${esc(search)}" placeholder="Rechercher ${isEquipment ? 'un équipement' : 'une dépense'}..." aria-label="Rechercher"><label>Du <input type="date" id="${prefix}From" value="${esc(from)}"></label><label>Au <input type="date" id="${prefix}To" value="${esc(to)}"></label><button class="btn btn-sm" data-clear-finance-filter="${mode}">Réinitialiser</button></div></div>`;
}
function renderFinanceModule(mode) {
  const isEquipment = mode === 'equipment';
  const title = isEquipment ? 'Équipements' : 'Dépenses courantes';
  const actionLabel = isEquipment ? 'Nouvel équipement' : 'Nouvelle dépense';
  const result = financeModuleRows(mode);
  const source = isEquipment ? state.equipmentPurchases : state.expenses;
  const form = financeModuleFormHTML(mode);
  const rows = isEquipment ? result.filtered.map(item => `<tr><td data-label="N Bon" class="mono">${esc(item.bonNumber || item.source?.bonNumber || '—')}</td><td data-label="Date et heure" class="mono muted">${fmtDateTime(item.date)}</td><td data-label="Désignation"><strong>${esc(item.name)}</strong>${item.note ? `<div class="muted">${esc(item.note)}</div>` : ''}</td><td data-label="Catégorie">${esc(item.category)}</td><td data-label="Fournisseur">${esc(item.supplier || '—')}</td><td data-label="Montant" class="price">${money(item.amount)} DH</td><td data-label="Paiement">${esc(item.payment)}</td><td data-label="Actions"><button class="btn btn-sm icon-btn" data-edit-equipment="${item.id}" title="Modifier" aria-label="Modifier">${ICONS.edit}</button><button class="btn btn-sm icon-btn btn-danger" data-delete-equipment="${item.id}" title="Supprimer l’équipement" aria-label="Supprimer l’équipement">${ICONS.trash}</button></td></tr>`).join('') : result.filtered.map(item => `<tr><td data-label="Date" class="mono muted">${fmtDate(item.date)}</td><td data-label="Catégorie">${esc(item.category)}</td><td data-label="Description"><strong>${esc(item.description)}</strong>${item.note ? `<div class="muted">${esc(item.note)}</div>` : ''}</td><td data-label="Bénéficiaire">${esc(item.payee || '—')}</td><td data-label="Montant" class="price">${money(item.amount)} DH</td><td data-label="Paiement">${esc(item.payment)}</td><td data-label="Actions"><button class="btn btn-sm icon-btn" data-edit-expense="${item.id}" title="Modifier" aria-label="Modifier">${ICONS.edit}</button><button class="btn btn-sm icon-btn btn-danger" data-delete-expense="${item.id}" title="Supprimer la dépense" aria-label="Supprimer la dépense">${ICONS.trash}</button></td></tr>`).join('');
  const empty = isEquipment ? emptyState('box','Aucun équipement','Aucun équipement ne correspond aux filtres.') : emptyState('fileText','Aucune dépense','Aucune dépense ne correspond aux filtres.');
  return `<div class="finance-page finance-module-page"><div class="toolbar">${moduleExcelActions(isEquipment ? 'Equipements' : 'Depenses', title)}<div><strong>${title}</strong><div class="muted" style="font-size:12px;margin-top:4px;">${isEquipment ? 'Matériel et équipements utilisés par la boutique.' : 'Loyer, Internet, électricité, salaires, transport et autres charges.'}</div></div><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end;"><button class="btn btn-primary" data-open-finance-form="${mode}">${ICONS.plus}${actionLabel}</button>${isEquipment ? '<button class="btn" id="openBulkEquipmentBtn">Saisir en lot</button>' : '<button class="btn" id="openBulkExpenseBtn">Saisir en lot</button>'}</div></div>${renderFinanceFilters(mode)}<div class="card finance-list-card"><div class="finance-list-heading"><h3>${title} enregistrés</h3><span class="muted mono">${result.filtered.length} résultat${result.filtered.length !== 1 ? 's' : ''} · ${money(result.total)} DH</span></div>${result.filtered.length ? `<table class="rcard"><thead>${isEquipment ? '<tr><th>N Bon</th><th>Date et heure</th><th>Désignation</th><th>Catégorie</th><th>Fournisseur</th><th>Montant</th><th>Paiement</th><th></th></tr>' : '<tr><th>Date</th><th>Catégorie</th><th>Description</th><th>Bénéficiaire</th><th>Montant</th><th>Paiement</th><th></th></tr>'}</thead><tbody>${rows}</tbody></table>` : empty}</div>${state.financeModal === mode ? `<div class="modal-overlay" role="dialog" aria-modal="true" data-finance-modal="${mode}"><div class="modal finance-form-modal"><button class="btn modal-close" data-close-finance-form="${mode}" aria-label="Fermer">${ICONS.close}</button>${form}</div></div>` : ''}</div>`;
}
function renderFinanceCategorySummary(items, title, emptyIcon, emptyTitle) {
  const groups = new Map();
  items.forEach(item => { const key = item.category || 'Autre'; const current = groups.get(key) || { count: 0, total: 0 }; current.count += 1; current.total += Number(item.amount) || 0; groups.set(key, current); });
  const rows = [...groups.entries()].sort((a, b) => b[1].total - a[1].total); const total = rows.reduce((sum, [, value]) => sum + value.total, 0);
  return `<div class="card module-summary-card"><div class="section-title">${title}</div><div class="muted module-summary-meta">${items.length} enregistrement${items.length !== 1 ? 's' : ''} · Total : ${money(total)} DH</div>${rows.length ? `<table class="rcard"><thead><tr><th>Catégorie</th><th>Nombre</th><th>Total</th></tr></thead><tbody>${rows.map(([category, value]) => `<tr><td data-label="Catégorie"><strong>${esc(category)}</strong></td><td data-label="Nombre" class="mono">${value.count}</td><td data-label="Total" class="price">${money(value.total)} DH</td></tr>`).join('')}</tbody></table>` : emptyState(emptyIcon, emptyTitle, 'Les enregistrements apparaîtront ici.')}</div>`;
}
function renderFinanceCategoryManager() { return `<div class="card finance-list-card"><h3>Catégories personnalisées</h3><div class="grid"><div><strong>Équipements</strong>${getEquipmentCategories().map(c => `<div class="category-row"><span>${esc(c)}</span>${EQUIPMENT_CATEGORIES.includes(c) ? '<span class="muted">Système</span>' : `<button class="btn btn-sm btn-danger" data-delete-equipment-category="${esc(c)}">Supprimer</button>`}</div>`).join('')}</div><div><strong>Dépenses</strong>${getExpenseCategories().map(c => `<div class="category-row"><span>${esc(c)}</span>${EXPENSE_CATEGORIES.includes(c) ? '<span class="muted">Système</span>' : `<button class="btn btn-sm btn-danger" data-delete-expense-category="${esc(c)}">Supprimer</button>`}</div>`).join('')}</div></div></div>`; }
function renderBulkExpenseModal() {
  const lines = state.bulkExpenseLines || [{ id: uid('be'), date: localDateInputValue(), category: 'Autre', description: '', amount: '', payee: '', payment: 'Espèces', note: '' }];
  const cats = getExpenseCategories();
  return `<div class="modal-overlay" role="dialog" aria-modal="true" id="bulkExpenseModalOverlay"><div class="modal modal-wide bulk-sale-modal"><h2>Saisir des dépenses en lot</h2><p class="muted" style="font-size:12px;margin-top:4px;margin-bottom:12px;">Ajoutez plusieurs dépenses courantes puis enregistrez-les en une seule fois. Les lignes sans description ou sans montant seront ignorées.</p><div id="bulkExpenseLines">${lines.map(line => `<div class="bulk-expense-line" data-bulk-expense-line="${line.id}"><div class="field"><label>Date</label><input data-bulk-expense="date" data-line="${line.id}" type="date" value="${esc(line.date || localDateInputValue())}"></div><div class="field"><label>Catégorie</label><select data-bulk-expense="category" data-line="${line.id}">${cats.map(c => `<option value="${esc(c)}" ${line.category === c ? 'selected' : ''}>${esc(c)}</option>`).join('')}</select></div><div class="field"><label>Description</label><input data-bulk-expense="description" data-line="${line.id}" maxlength="160" value="${esc(line.description)}" placeholder="Ex. Électricité"></div><div class="field"><label>Montant (DH)</label><input data-bulk-expense="amount" data-line="${line.id}" type="number" min="0" step="0.01" value="${esc(line.amount)}"></div><div class="field"><label>Bénéficiaire</label><input data-bulk-expense="payee" data-line="${line.id}" maxlength="120" value="${esc(line.payee)}" placeholder="Optionnel"></div><div class="field"><label>Paiement</label><select data-bulk-expense="payment" data-line="${line.id}">${['Espèces','Carte','Virement','Chèque','Autre'].map(p => `<option ${line.payment === p ? 'selected' : ''}>${p}</option>`).join('')}</select></div><div class="field"><label>Note</label><input data-bulk-expense="note" data-line="${line.id}" maxlength="240" value="${esc(line.note)}" placeholder="Optionnel"></div><button type="button" class="btn btn-sm btn-danger" data-remove-bulk-expense="${line.id}" title="Supprimer la ligne" aria-label="Supprimer la ligne">✕</button></div>`).join('')}</div><button class="btn btn-sm" id="addBulkExpenseLine">${ICONS.plus}Ajouter une ligne</button><div class="bulk-summary" aria-live="polite"><div><span>Lignes valides</span><strong id="bulkExpenseSummaryLines">0</strong></div><div><span>Total dépenses</span><strong id="bulkExpenseSummaryTotal">0,00 DH</strong></div></div><div class="modal-actions"><button class="btn" id="cancelBulkExpenseModal">Annuler</button><button class="btn btn-primary" id="saveBulkExpensesModal">Enregistrer les dépenses</button></div></div></div>`;
}
function renderBulkEquipmentModal() {
  const lines = state.bulkEquipmentLines || [{ id: uid('bq'), date: localDateInputValue(), bonNumber: '', category: 'Autre', name: '', amount: '', supplier: '', payment: 'Espèces', note: '' }];
  const cats = getEquipmentCategories();
  return `<div class="modal-overlay" role="dialog" aria-modal="true" id="bulkEquipmentModalOverlay"><div class="modal modal-wide bulk-sale-modal"><h2>Saisir des équipements en lot</h2><p class="muted" style="font-size:12px;margin-top:4px;margin-bottom:12px;">Ajoutez plusieurs équipements puis enregistrez-les en une seule fois. Les lignes sans désignation ou sans montant seront ignorées.</p><div id="bulkEquipmentLines">${lines.map(line => `<div class="bulk-equipment-line" data-bulk-equipment-line="${line.id}"><div class="field"><label>N Bon</label><input data-bulk-equipment="bonNumber" data-line="${line.id}" maxlength="60" value="${esc(line.bonNumber || '')}" placeholder="Optionnel"></div><div class="field"><label>Date</label><input data-bulk-equipment="date" data-line="${line.id}" type="date" value="${esc(line.date || localDateInputValue())}"></div><div class="field"><label>Catégorie</label><select data-bulk-equipment="category" data-line="${line.id}">${cats.map(c => `<option value="${esc(c)}" ${line.category === c ? 'selected' : ''}>${esc(c)}</option>`).join('')}</select></div><div class="field"><label>Désignation</label><input data-bulk-equipment="name" data-line="${line.id}" maxlength="120" value="${esc(line.name)}" placeholder="Ex. Imprimante"></div><div class="field"><label>Montant (DH)</label><input data-bulk-equipment="amount" data-line="${line.id}" type="number" min="0" step="0.01" value="${esc(line.amount)}"></div><div class="field"><label>Fournisseur</label><input data-bulk-equipment="supplier" data-line="${line.id}" maxlength="120" value="${esc(line.supplier)}" placeholder="Optionnel"></div><div class="field"><label>Paiement</label><select data-bulk-equipment="payment" data-line="${line.id}">${['Espèces','Carte','Virement','Chèque','Autre'].map(p => `<option ${line.payment === p ? 'selected' : ''}>${p}</option>`).join('')}</select></div><div class="field"><label>Référence / note</label><input data-bulk-equipment="note" data-line="${line.id}" maxlength="240" value="${esc(line.note)}" placeholder="Optionnel"></div><button type="button" class="btn btn-sm btn-danger" data-remove-bulk-equipment="${line.id}" title="Supprimer la ligne" aria-label="Supprimer la ligne">✕</button></div>`).join('')}</div><button class="btn btn-sm" id="addBulkEquipmentLine">${ICONS.plus}Ajouter une ligne</button><div class="bulk-summary" aria-live="polite"><div><span>Lignes valides</span><strong id="bulkEquipmentSummaryLines">0</strong></div><div><span>Total équipements</span><strong id="bulkEquipmentSummaryTotal">0,00 DH</strong></div></div><div class="modal-actions"><button class="btn" id="cancelBulkEquipmentModal">Annuler</button><button class="btn btn-primary" id="saveBulkEquipmentsModal">Enregistrer les équipements</button></div></div></div>`;
}
function renderSettingsFinances() {
  const equipmentTotal = state.equipmentPurchases.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
  const expenseTotal = state.expenses.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
  const optionList = (items, selected) => items.map(item => `<option value="${esc(item)}" ${item === selected ? 'selected' : ''}>${esc(item)}</option>`).join('');
  const editingEquipment = state.financeEditing?.mode === 'equipment' ? state.financeEditing.item : null;
  const editingExpense = state.financeEditing?.mode === 'expense' ? state.financeEditing.item : null;
  const equipmentCategory = editingEquipment?.category || 'Autre'; const expenseCategory = editingExpense?.category || 'Autre';
  return `<div class="finance-page">
    <div class="toolbar"><div><strong>Équipements & dépenses</strong><div class="muted" style="font-size:12px;margin-top:4px;">Ces sorties de trésorerie ne sont pas des achats de stock et n’apparaissent pas dans la Caisse.</div></div></div>
    <div class="grid finance-form-grid">
      <!-- finance-equipment-form:start --><div class="card finance-form-card"><h3>${editingEquipment ? 'Modifier l’équipement' : 'Nouvel équipement'}</h3><p class="muted">Ordinateur, mobilier, imprimante ou matériel utilisé par la boutique.</p>
        <div class="field"><label>N Bon</label><input id="equipmentBonNumber" maxlength="60" value="${esc(editingEquipment?.bonNumber || editingEquipment?.source?.bonNumber || '')}" placeholder="Optionnel"></div>
        <div class="field"><label>Désignation</label><input id="equipmentName" maxlength="120" value="${esc(editingEquipment?.name || '')}" placeholder="Ex. Imprimante thermique"></div>
        <div class="field-row"><div class="field"><label>Catégorie</label><div class="category-select-with-add"><select id="equipmentCategory">${optionList(getEquipmentCategories(), equipmentCategory)}</select><button type="button" class="btn btn-sm icon-btn" id="addEquipmentCategoryBtn" title="Ajouter une catégorie" aria-label="Ajouter une catégorie">${ICONS.plus}</button></div></div><div class="field"><label>Date</label><input id="equipmentDate" type="date" value="${esc(editingEquipment?.date ? localDateInputValue(editingEquipment.date) : localDateInputValue())}"></div></div>
        <div class="field-row"><div class="field"><label>Montant (DH)</label><input id="equipmentAmount" type="number" min="0" step="0.01" inputmode="decimal" value="${esc(editingEquipment?.amount ?? '')}"></div><div class="field"><label>Fournisseur</label><input id="equipmentSupplier" maxlength="120" value="${esc(editingEquipment?.supplier || '')}"></div></div>
        <div class="field-row"><div class="field"><label>Mode de paiement</label><select id="equipmentPayment"><option>Espèces</option><option>Carte</option><option>Virement</option><option>Chèque</option><option>Autre</option></select></div><div class="field"><label>Référence / note</label><input id="equipmentNote" maxlength="240" value="${esc(editingEquipment?.note || '')}"></div></div>
        <button class="btn btn-primary" id="saveEquipmentBtn">${ICONS.plus}Enregistrer l’équipement</button>
      </div><!-- finance-equipment-form:end -->
      <!-- finance-expense-form:start --><div class="card finance-form-card"><h3>${editingExpense ? 'Modifier la dépense courante' : 'Nouvelle dépense courante'}</h3><p class="muted">Loyer, Internet, électricité, salaires, transport et autres charges.</p>
        <div class="field"><label>Description</label><input id="expenseDescription" maxlength="160" value="${esc(editingExpense?.description || '')}" placeholder="Ex. Abonnement Internet septembre"></div>
        <div class="field-row"><div class="field"><label>Catégorie</label><div class="category-select-with-add"><select id="expenseCategory">${optionList(getExpenseCategories(), expenseCategory)}</select><button type="button" class="btn btn-sm icon-btn" id="addExpenseCategoryBtn" title="Ajouter une catégorie" aria-label="Ajouter une catégorie">${ICONS.plus}</button></div></div><div class="field"><label>Date</label><input id="expenseDate" type="date" value="${esc(editingExpense?.date || localDateInputValue())}"></div></div>
        <div class="field-row"><div class="field"><label>Montant (DH)</label><input id="expenseAmount" type="number" min="0" step="0.01" inputmode="decimal" value="${esc(editingExpense?.amount ?? '')}"></div><div class="field"><label>Bénéficiaire</label><input id="expensePayee" maxlength="120" value="${esc(editingExpense?.payee || '')}"></div></div>
        <div class="field-row"><div class="field"><label>Mode de paiement</label><select id="expensePayment"><option>Espèces</option><option>Carte</option><option>Virement</option><option>Chèque</option><option>Autre</option></select></div><div class="field"><label>Référence / note</label><input id="expenseNote" maxlength="240" value="${esc(editingExpense?.note || '')}"></div></div>
        <button class="btn btn-primary" id="saveExpenseBtn">${ICONS.plus}Enregistrer la dépense</button>
      </div><!-- finance-expense-form:end -->
    </div>
    <div class="grid finance-summary-grid"><div class="card stat-card"><div class="stat-label">Équipements</div><div class="stat-value lcd">${money(equipmentTotal)} <span>DH</span></div><div class="stat-delta">${state.equipmentPurchases.length} enregistrement(s)</div></div><div class="card stat-card"><div class="stat-label">Dépenses courantes</div><div class="stat-value lcd">${money(expenseTotal)} <span>DH</span></div><div class="stat-delta">${state.expenses.length} enregistrement(s)</div></div><div class="card stat-card"><div class="stat-label">Total des sorties</div><div class="stat-value lcd">${money(equipmentTotal + expenseTotal)} <span>DH</span></div><div class="stat-delta">hors achats de stock</div></div></div>
    <!-- finance-equipment-list:start --><div class="card finance-list-card"><h3>Équipements enregistrés</h3>${state.equipmentPurchases.length ? `<table class="rcard"><thead><tr><th>Date</th><th>Désignation</th><th>Catégorie</th><th>Fournisseur</th><th>Montant</th><th>Paiement</th><th></th></tr></thead><tbody>${[...state.equipmentPurchases].sort((a,b)=>new Date(b.date)-new Date(a.date)).map(item=>`<tr><td data-label="Date" class="mono muted">${fmtDate(item.date)}</td><td data-label="Désignation"><strong>${esc(item.name)}</strong>${item.note ? `<div class="muted">${esc(item.note)}</div>` : ''}</td><td data-label="Catégorie">${esc(item.category)}</td><td data-label="Fournisseur">${esc(item.supplier || '—')}</td><td data-label="Montant" class="price">${money(item.amount)} DH</td><td data-label="Paiement">${esc(item.payment)}</td><td data-label="Actions"><button class="btn btn-sm icon-btn" data-edit-equipment="${item.id}" title="Modifier" aria-label="Modifier">${ICONS.edit}</button><button class="btn btn-sm icon-btn btn-danger" data-delete-equipment="${item.id}" title="Supprimer l’équipement" aria-label="Supprimer l’équipement">${ICONS.trash}</button></td></tr>`).join('')}</tbody></table>` : emptyState('box','Aucun équipement','Les équipements de la boutique apparaîtront ici.')}</div><!-- finance-equipment-list:end -->
    <!-- finance-expense-list:start --><div class="card finance-list-card"><h3>Dépenses courantes enregistrées</h3>${state.expenses.length ? `<table class="rcard"><thead><tr><th>Date</th><th>Catégorie</th><th>Description</th><th>Bénéficiaire</th><th>Montant</th><th>Paiement</th><th></th></tr></thead><tbody>${[...state.expenses].sort((a,b)=>new Date(b.date)-new Date(a.date)).map(item=>`<tr><td data-label="Date" class="mono muted">${fmtDate(item.date)}</td><td data-label="Catégorie">${esc(item.category)}</td><td data-label="Description"><strong>${esc(item.description)}</strong>${item.note ? `<div class="muted">${esc(item.note)}</div>` : ''}</td><td data-label="Bénéficiaire">${esc(item.payee || '—')}</td><td data-label="Montant" class="price">${money(item.amount)} DH</td><td data-label="Paiement">${esc(item.payment)}</td><td data-label="Actions"><button class="btn btn-sm icon-btn" data-edit-expense="${item.id}" title="Modifier" aria-label="Modifier">${ICONS.edit}</button><button class="btn btn-sm icon-btn btn-danger" data-delete-expense="${item.id}" title="Supprimer la dépense" aria-label="Supprimer la dépense">${ICONS.trash}</button></td></tr>`).join('')}</tbody></table>` : emptyState('fileText','Aucune dépense','Les dépenses courantes apparaîtront ici.')}</div><!-- finance-expense-list:end -->
  </div>`;
}

function renderSettingsIdentite() {
  const b = state.branding || { name: 'PhoneStock', subtitle: 'Gestion boutique', icon: '' };
  return `<div class="card branding-settings" style="padding:20px;max-width:680px;">
    <h3>Identité de l’application</h3><p class="muted">Personnalisez le nom, le sous-nom et l’icône affichés dans PhoneStock et lors de l’installation comme application.</p>
    <div class="field-row"><div class="field"><label>Nom de l’application</label><input id="appBrandName" maxlength="50" value="${esc(b.name || '')}"></div><div class="field"><label>Sous-nom</label><input id="appBrandSubtitle" maxlength="80" value="${esc(b.subtitle || '')}"></div></div>
    <div class="field-row"><div class="field"><label>Nom de l’entreprise</label><input id="companyName" maxlength="100" value="${esc(b.companyName || "")}"></div><div class="field"><label>Téléphone</label><input id="companyPhone" inputmode="tel" maxlength="10" value="${esc(b.companyPhone || "")}"></div></div><div class="field-row"><div class="field"><label>Adresse</label><input id="companyAddress" maxlength="160" value="${esc(b.companyAddress || "")}"></div><div class="field"><label>E-mail</label><input id="companyEmail" type="email" value="${esc(b.companyEmail || "")}"></div></div><div class="field"><label>Identifiant fiscal ou ICE (optionnel)</label><input id="companyId" maxlength="60" value="${esc(b.companyId || "")}"></div>
    <div class="field"><label>Logo de l’entreprise / icône de l’application</label><input id="appBrandIcon" type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml"><div class="branding-preview">${safeImageSrc(b.icon) ? `<img src="${esc(b.icon)}" alt="Aperçu de l’icône">` : '<span class="muted">Aucune icône personnalisée</span>'}</div></div>
    <div class="modal-actions"><button class="btn" id="resetBrandingBtn">Rétablir par défaut</button><button class="btn btn-primary" id="saveBrandingBtn">Enregistrer l’identité</button></div>
  </div>`;
}
function renderSettingsProfil() {
  const u = currentUser();
  return `
    <div class="card" style="padding:20px;max-width:420px;">
      <div style="font-family:var(--font-display);font-weight:700;font-size:14.5px;margin-bottom:16px;">Modifier mes identifiants</div>
      <div class="field"><label>Nom affiché</label><input id="prof_name" value="${esc(u.name)}"></div>
      <div class="field"><label>Identifiant</label><input id="prof_username" value="${esc(u.username)}"></div>
      <div class="field"><label>Nouveau mot de passe (laisser vide pour ne pas changer)</label><input id="prof_pass" type="password" placeholder="••••••••"></div>
      <button class="btn btn-primary" id="saveProfileBtn" style="margin-top:6px;">Enregistrer</button>
    </div>
  `;
}

function renderSettingsCategories() {
  return `
    <div class="toolbar"><div class="muted" style="font-size:12px;">Ajoutez des catégories disponibles dans Produits et Caisse.</div></div>
    <div class="card" style="padding:18px;max-width:680px;">
      <div style="display:flex;gap:8px;align-items:end;flex-wrap:wrap;margin-bottom:16px;">
        <div class="field" style="flex:1;min-width:220px;margin-bottom:0;"><label>Nouvelle catégorie</label><input id="newCategoryName" maxlength="60" placeholder="Ex. Smartphones reconditionnés"></div>
        <button class="btn btn-primary" id="addCategoryBtn">${ICONS.plus}Ajouter</button>
      </div>
      <div class="category-list">
        ${getCategories().map(category => `<div class="category-row"><div class="category-name">${esc(category)}</div><div class="category-actions">${state.products.some(product => product.category === category) ? '<span class="muted">Utilisée</span>' : `<button class="btn btn-sm btn-danger" data-delete-category="${esc(category)}">Supprimer</button>`}</div></div>`).join('')}
      </div>
    </div>`;
}

function renderSettingsVendeurs() {
  const vendeurs = state.users.filter(u => u.role !== 'admin');
  return `
    <div class="toolbar"><div></div><button class="btn btn-primary" id="addUserBtn">${ICONS.plus}Nouveau compte vendeur</button></div>
    <div class="card">
      ${vendeurs.length === 0 ? emptyState('users', 'Aucun vendeur', 'Créez un compte pour votre équipe.') : `
      <table class="rcard">
        <thead><tr><th>Nom</th><th>Identifiant</th><th>Privilèges</th><th></th></tr></thead>
        <tbody>
          ${vendeurs.map(v => `
            <tr>
              <td data-label="Nom"><strong>${esc(v.name)}</strong></td>
              <td data-label="Identifiant" class="mono">${esc(v.username)}</td>
              <td data-label="Privilèges" class="muted" style="font-size:12px;">${privilegeSummary(v.privileges)}</td>
              <td data-label="">
                <button type="button" class="btn btn-sm icon-btn" data-edit-user="${v.id}" title="Modifier le compte vendeur" aria-label="Modifier le compte vendeur">${ICONS.edit}</button>
                <button type="button" class="btn btn-sm icon-btn btn-danger" data-delete-user="${v.id}" title="Supprimer le compte vendeur" aria-label="Supprimer le compte vendeur">${ICONS.trash}</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>`}
    </div>
  `;
}
function privilegeSummary(p) {
  if (!p || !p.products) return '—';
  const labels = { products: 'Produits', clients: 'Clients', payments: 'Paiements' };
  const actionLabels = { view: 'voir', create: 'créer', edit: 'modifier', delete: 'supprimer' };
  const parts = Object.keys(labels).map(mod => {
    const m = p[mod]; if (!m) return null;
    const acts = PRIV_ACTIONS.filter(a => m[a]).map(a => actionLabels[a]);
    return acts.length ? `${labels[mod]} : ${acts.join(', ')}` : null;
  }).filter(Boolean);
  return parts.length ? parts.join(' · ') : 'Aucun accès';
}

function permRow(moduleKey, moduleLabel, priv) {
  const m = priv[moduleKey] || {};
  return `
    <tr>
      <td style="padding:7px 6px 7px 0;font-weight:600;">${moduleLabel}</td>
      ${PRIV_ACTIONS.map(a => `<td style="text-align:center;padding:7px 4px;"><input type="checkbox" id="priv_${moduleKey}_${a}" ${m[a] ? 'checked' : ''}></td>`).join('')}
    </tr>`;
}

function renderUserModal() {
  const isNew = state.editingUser === 'new';
  const u = isNew ? { name: '', username: '', privileges: clonePrivileges(DEFAULT_PRIVILEGES) } : state.editingUser;
  const priv = u.privileges && u.privileges.products ? u.privileges : clonePrivileges(DEFAULT_PRIVILEGES);
  return `
  <div class="modal-overlay" role="dialog" aria-modal="true" id="userModalOverlay">
    <div class="modal modal-wide">
      <h2>${isNew ? 'Nouveau compte vendeur' : 'Modifier le compte'}</h2>
      <div class="field-row">
        <div class="field"><label>Nom complet</label><input id="u_name" value="${esc(u.name)}"></div>
        <div class="field"><label>Identifiant</label><input id="u_username" value="${esc(u.username)}"></div>
      </div>
      <div class="field"><label>${isNew ? 'Mot de passe' : 'Nouveau mot de passe (laisser vide pour ne pas changer)'}</label><input id="u_pass" type="password" placeholder="••••••••"></div>
      <div class="field">
        <label>Privilèges par module</label>
        <div style="overflow-x:auto;">
        <table style="width:100%;font-size:12px;border-collapse:collapse;min-width:340px;">
          <thead><tr>
            <th style="text-align:left;padding:6px 6px 6px 0;"></th>
            <th style="padding:6px 4px;font-weight:600;color:var(--muted);">Visualiser</th>
            <th style="padding:6px 4px;font-weight:600;color:var(--muted);">Créer</th>
            <th style="padding:6px 4px;font-weight:600;color:var(--muted);">Modifier</th>
            <th style="padding:6px 4px;font-weight:600;color:var(--muted);">Supprimer</th>
          </tr></thead>
          <tbody>
            ${permRow('products', 'Produits', priv)}
            ${permRow('clients', 'Clients', priv)}
            ${permRow('payments', 'Paiements', priv)}
          </tbody>
        </table>
        </div>
        <div class="checkbox-row" style="margin-top:8px;">
          <input type="checkbox" id="priv_products_costs" ${priv.products && priv.products.viewCosts ? 'checked' : ''}>
          <label for="priv_products_costs" style="margin:0;">Voir les prix d'achat et marges (Produits)</label>
        </div>
      </div>
      <div class="modal-actions">
        <button class="btn" id="cancelUserModal">Annuler</button>
        <button class="btn btn-primary" id="saveUserModal">${isNew ? 'Créer le compte' : 'Enregistrer'}</button>
      </div>
    </div>
  </div>`;
}

function renderSettingsHistorique() {
  const sorted = [...state.oplog].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 500);
  return `
    <div class="toolbar"><div class="muted mono" style="font-size:12px;">${state.oplog.length} opération${state.oplog.length !== 1 ? 's' : ''} enregistrée${state.oplog.length !== 1 ? 's' : ''}</div>
      <button class="btn" id="exportOplogBtn">${ICONS.download}Exporter en Excel (.xlsx)</button>
    </div>
    <div class="card">
      ${sorted.length === 0 ? emptyState('history', 'Aucune opération', "L'historique des actions apparaîtra ici.") : `
      <table class="rcard">
        <thead><tr><th>Date</th><th>Utilisateur</th><th>Action</th><th>Détails</th></tr></thead>
        <tbody>
          ${sorted.map(l => `
            <tr>
              <td data-label="Date" class="mono muted">${fmtDateTime(l.date)}</td>
              <td data-label="Utilisateur">${esc(l.username)}</td>
              <td data-label="Action"><strong>${esc(l.action)}</strong></td>
              <td data-label="Détails" class="muted">${esc(l.details)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>`}
    </div>
  `;
}

function renderSettingsSauvegarde() {
  return `
    <div class="grid" style="grid-template-columns:1fr 1fr;max-width:700px;">
      <div class="card" style="padding:20px;">
        <div style="font-family:var(--font-display);font-weight:700;font-size:14.5px;margin-bottom:8px;">Sauvegarder les données</div>
        <div class="muted" style="font-size:12.5px;margin-bottom:14px;">Télécharge un fichier contenant les produits, les achats et lots FIFO, les quantités restantes, les clients, les ventes, paiements et comptes.</div>
        <button class="btn btn-primary" id="backupBtn">${ICONS.download}Télécharger la sauvegarde</button>
      </div>
      <div class="card" style="padding:20px;">
        <div style="font-family:var(--font-display);font-weight:700;font-size:14.5px;margin-bottom:8px;">Restaurer les données</div>
        <div class="muted" style="font-size:12.5px;margin-bottom:14px;">⚠️ Remplace toutes les données actuelles par celles du fichier sélectionné, y compris les achats et les quantités de stock.</div>
        <input type="file" id="restoreFile" accept="application/json" style="display:none;">
        <button class="btn" id="restoreBtn">${ICONS.upload}Choisir un fichier de sauvegarde</button>
      </div>
      <div class="card" style="padding:20px;">
        <div style="font-family:var(--font-display);font-weight:700;font-size:14.5px;margin-bottom:8px;">Exporter en classeur Excel (.xlsx)</div>
        <div class="muted" style="font-size:12.5px;margin-bottom:14px;">Télécharge un classeur avec feuilles liées : Tableau de bord, Catégories, Stock &amp; Prix, Produits, Clients et Ventes.</div>
        <button class="btn btn-primary" id="exportExcelBtn">${ICONS.download}Télécharger le classeur Excel</button>
      </div>
      <div class="card" style="padding:20px;">
        <div style="font-family:var(--font-display);font-weight:700;font-size:14.5px;margin-bottom:8px;">Importer un classeur Excel (.xlsx)</div>
        <div class="muted" style="font-size:12.5px;margin-bottom:14px;">⚠️ Remplace les produits, le stock/prix et les clients actuels par le contenu des feuilles « Produits », « Stock &amp; Prix » et « Clients » du fichier choisi. Les photos ne sont pas conservées lors d'un import Excel.</div>
        <input type="file" id="importExcelFile" accept=".xlsx,.xls" style="display:none;">
        <button class="btn" id="importExcelBtn">${ICONS.upload}Choisir un classeur Excel</button>
      </div>
      <div class="card" style="padding:20px;border-color:var(--danger-dim);">
        <div style="font-family:var(--font-display);font-weight:700;font-size:14.5px;margin-bottom:8px;color:var(--danger);">Zone dangereuse</div>
        <div class="muted" style="font-size:12.5px;margin-bottom:14px;">Vide le stockage de ce navigateur pour repartir sur une base vide. Vous choisirez précisément quoi supprimer dans la fenêtre de confirmation.</div>
        <button class="btn btn-danger" id="openClearStorageBtn">Vider le stockage du site</button>
      </div>
    </div>
  `;
}

/* ---------------- Export / Backup ---------------- */
function excelRowsFromSheet(fileWorkbook, sheetName) {
  const ws = sheetName && fileWorkbook.Sheets[sheetName] ? fileWorkbook.Sheets[sheetName] : fileWorkbook.Sheets[fileWorkbook.SheetNames[0]];
  return ws ? XLSX.utils.sheet_to_json(ws, { defval: '' }) : [];
}
function excelNumber(value, fallback = null) {
  if (value === '' || value == null) return fallback;
  if (typeof value === 'number') return Number.isFinite(value) ? value : fallback;
  const raw = String(value).trim().replace(/\u00a0/g, '').replace(/\s/g, '');
  const normalized = raw.includes(',') && raw.includes('.') ? raw.replace(/\./g, '').replace(',', '.') : raw.replace(',', '.');
  const n = Number(normalized);
  return Number.isFinite(n) ? n : fallback;
}
function excelDate(value, fallback = new Date().toISOString()) {
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value.toISOString();
  if (typeof value === 'number' && XLSX && XLSX.SSF) {
    const d = XLSX.SSF.parse_date_code(value);
    if (d) return new Date(Date.UTC(d.y, d.m - 1, d.d, d.H || 0, d.M || 0, d.S || 0)).toISOString();
  }
  const parsed = value ? new Date(value) : null;
  return parsed && !Number.isNaN(parsed.getTime()) ? parsed.toISOString() : fallback;
}
function excelBool(value) {
  return ['true', '1', 'oui', 'yes', 'vrai', 'archivé', 'archive'].includes(String(value || '').trim().toLowerCase());
}
function downloadExcelRows(rows, filename, sheetName) {
  if (typeof XLSX === 'undefined') { toast('Bibliothèque Excel indisponible — vérifiez votre connexion.'); return false; }
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(rows || []);
  XLSX.utils.book_append_sheet(wb, ws, sheetName || 'Données');
  XLSX.writeFile(wb, filename);
  return true;
}
function protectExcelWorksheet(ws, unlockedRanges = []) {
  if (!ws) return;
  unlockedRanges.forEach(range => {
    const match = String(range).match(/^([A-Z]+)(\d+):([A-Z]+)(\d+)$/);
    if (!match) return;
    const start = XLSX.utils.decode_cell(`${match[1]}${match[2]}`);
    const end = XLSX.utils.decode_cell(`${match[3]}${match[4]}`);
    for (let r = start.r; r <= end.r; r++) for (let c = start.c; c <= end.c; c++) {
      const address = XLSX.utils.encode_cell({ r, c });
      ws[address] = ws[address] || { t: 'z', v: null };
      ws[address].s = { ...(ws[address].s || {}), protection: { locked: false } };
    }
  });
  ws['!protect'] = { selectLocked: true, selectUnlocked: true, formatCells: false, formatColumns: false, formatRows: false, insertColumns: false, insertRows: false, deleteColumns: false, deleteRows: false, sort: false, autoFilter: false, pivotTables: false };
}
function parseExcelFile(file) {
  return file.arrayBuffer().then(buf => XLSX.read(buf, { type: 'array' }));
}
function findProductBySku(sku) {
  const normalized = String(sku || '').trim().toLowerCase();
  return state.products.find(p => String(p.sku || '').trim().toLowerCase() === normalized);
}
function findSupplierByImport(code, name) {
  const normalizedCode = String(code || '').trim().toLowerCase();
  const normalizedName = String(name || '').trim().toLowerCase();
  return state.suppliers.find(s => (normalizedCode && String(s.code || '').toLowerCase() === normalizedCode) ||
    (normalizedName && String(s.name || '').toLowerCase() === normalizedName)) || null;
}
function findClientByImport(code, name) {
  const normalizedCode = String(code || '').trim().toLowerCase();
  const normalizedName = String(name || '').trim().toLowerCase();
  return state.clients.find(c => (normalizedCode && String(c.clientCode || '').toLowerCase() === normalizedCode) ||
    (normalizedName && String(c.name || '').toLowerCase() === normalizedName)) || null;
}
function exportProductsXLSX() {
  const rows = state.products.map(p => ({
    SKU: p.sku || '', 'Nom du produit': p.name || '', Marque: p.brand || '', 'Modèle / Compatibilité': p.model || '',
    Catégorie: p.category || '', 'Seuil stock bas': Number(p.lowStock) || 0, Archivé: p.archived ? 'Oui' : 'Non', 'Stock actuel': productStock(p.id),
  }));
  downloadExcelRows(rows, `phonestock-produits-${new Date().toISOString().slice(0, 10)}.xlsx`, 'Produits');
}
async function importProductsXLSX(file) {
  try {
    if (typeof XLSX === 'undefined') { toast('Bibliothèque Excel indisponible.'); return; }
    const rows = excelRowsFromSheet(await parseExcelFile(file));
    if (!rows.length) { toast('La feuille Produits est vide.'); return; }
    const skus = rows.map(r => String(r.SKU || '').trim()).filter(Boolean);
    const duplicates = skus.map(s => s.toLowerCase()).filter((s, i, a) => a.indexOf(s) !== i);
    if (duplicates.length) { toast(`SKU en double : ${duplicates[0]}`); return; }
    const invalid = rows.find(r => !String(r.SKU || '').trim() || !String(r['Nom du produit'] || '').trim() ||
      (r['Seuil stock bas'] !== '' && (!Number.isInteger(excelNumber(r['Seuil stock bas'])) || excelNumber(r['Seuil stock bas']) < 0)));
    if (invalid) { toast('Chaque produit doit avoir un SKU, un nom et un seuil entier valide.'); return; }
    const bySku = new Map(state.products.map(p => [String(p.sku || '').trim().toLowerCase(), p]));
    const imported = rows.map(r => {
      const sku = String(r.SKU).trim(); const old = bySku.get(sku.toLowerCase());
      return { ...(old || { id: uid('p'), photo: null }), name: String(r['Nom du produit']).trim(), brand: String(r.Marque || '').trim(),
        model: String(r['Modèle / Compatibilité'] || '').trim(), category: String(r.Catégorie || 'Autre').trim(), sku,
        lowStock: excelNumber(r['Seuil stock bas'], old ? Number(old.lowStock) || 0 : 0), archived: r.Archivé === '' ? !!(old && old.archived) : excelBool(r.Archivé),
      };
    });
    if (!confirmLocalized(`Importer ${imported.length} produit(s) ? Les SKU existants seront mis à jour, le stock actuel ne sera pas modifié.`)) return;
    const importedSkus = new Set(imported.map(p => p.sku.toLowerCase()));
    state.products = [...state.products.filter(p => !importedSkus.has(String(p.sku || '').trim().toLowerCase())), ...imported];
    const result = await saveProducts();
    if (result === null) { toast('Échec de sauvegarde des produits importés.'); return; }
    await logOperation('Import Excel produits', `${imported.length} produit(s)`); toast('Produits importés avec succès'); render();
  } catch (e) { console.error(e); toast('Impossible de lire ce fichier Produits.'); }
}
function exportStockXLSX() {
  const rows = [];
  state.purchases.forEach(pu => (pu.items || []).forEach(it => {
    const p = state.products.find(x => x.id === it.productId); const sup = state.suppliers.find(x => x.id === pu.supplierId);
    rows.push({ SKU: p ? p.sku : '', 'Nom du produit': it.name || (p && p.name) || '', 'Date achat': fmtDate(pu.date), 'Quantité à ajouter': Number(it.qty) || 0,
      'Quantité restante du lot': Number(it.qtyRemaining == null ? it.qty : it.qtyRemaining) || 0, "Prix d'achat (DH)": Number(it.unitCost) || 0,
      'Prix de vente (DH)': Number(it.unitPrice) || 0, 'Code fournisseur': sup ? sup.code : '', Fournisseur: sup ? sup.name : '' });
  }));
  downloadExcelRows(rows, `phonestock-stock-${new Date().toISOString().slice(0, 10)}.xlsx`, 'Stock');
}
async function importStockXLSX(file) {
  try {
    if (typeof XLSX === 'undefined') { toast('Bibliothèque Excel indisponible.'); return; }
    const rows = excelRowsFromSheet(await parseExcelFile(file));
    if (!rows.length) { toast('La feuille Stock est vide.'); return; }
    const invalid = rows.find(r => !findProductBySku(r.SKU) || !Number.isInteger(excelNumber(r['Quantité à ajouter'] ?? r['Quantité du lot'] ?? r.Quantité)) || excelNumber(r['Quantité à ajouter'] ?? r['Quantité du lot'] ?? r.Quantité) <= 0 ||
      excelNumber(r["Prix d'achat (DH)"], 0) < 0 || excelNumber(r['Prix de vente (DH)'], 0) < 0);
    if (invalid) { toast('Stock invalide : SKU inconnu, quantité entière positive ou prix incorrect.'); return; }
    const items = rows.map(r => { const p = findProductBySku(r.SKU); const qty = excelNumber(r['Quantité à ajouter'] ?? r['Quantité du lot'] ?? r.Quantité); return {
      productId: p.id, name: p.name, qty, unitCost: excelNumber(r["Prix d'achat (DH)"], 0), unitPrice: excelNumber(r['Prix de vente (DH)'], productSellPrice(p.id) || 0), qtyRemaining: qty,
    }; });
    if (!confirmLocalized(`Ajouter ${items.reduce((s, x) => s + x.qty, 0)} unité(s) au stock ? L’import crée un nouveau lot et ne remplace pas le stock actuel.`)) return;
    state.purchases.push({ id: uid('pu'), date: excelDate(rows[0]['Date achat'] || rows[0].Date), supplierId: findSupplierByImport(rows[0]['Code fournisseur'], rows[0].Fournisseur)?.id || null,
      items, total: items.reduce((s, x) => s + x.qty * x.unitCost, 0), note: 'Import Stock Excel' });
    const result = await savePurchases(); if (result === null) { toast('Échec de sauvegarde du stock importé.'); return; }
    await logOperation('Import Excel stock', `${items.length} ligne(s)`); toast('Stock importé avec succès'); render();
  } catch (e) { console.error(e); toast('Impossible de lire ce fichier Stock.'); }
}
function exportPurchasesXLSX() {
  const rows = [];
  state.purchases.forEach(pu => (pu.items || []).forEach(it => { const p = state.products.find(x => x.id === it.productId); const sup = state.suppliers.find(x => x.id === pu.supplierId);
    rows.push({ 'ID achat': pu.id, 'N Bon': pu.bonNumber || '', Date: pu.date || '', 'Date affichée': fmtDateTime(pu.date), 'Code fournisseur': sup ? sup.code : '', Fournisseur: sup ? sup.name : '', SKU: p ? p.sku : (it.sku || ''), 'Nom du produit': it.name || (p && p.name) || '', Quantité: Number(it.qty) || 0, 'Quantité restante': Number(it.qtyRemaining == null ? it.qty : it.qtyRemaining) || 0, "Prix d'achat (DH)": Number(it.unitCost) || 0, 'Prix de vente (DH)': Number(it.unitPrice) || 0, 'ID ligne': it.id || '', Note: pu.note || '' });
  }));
  downloadExcelRows(rows, `phonestock-achats-${new Date().toISOString().slice(0, 10)}.xlsx`, 'Achats');
}
async function importPurchasesXLSX(file) {
  try {
    if (typeof XLSX === 'undefined') { toast('Bibliothèque Excel indisponible.'); return; }
    const rows = excelRowsFromSheet(await parseExcelFile(file)); if (!rows.length) { toast('La feuille Achats est vide.'); return; }
    const invalid = rows.find(r => !findProductBySku(r.SKU) || !Number.isInteger(excelNumber(r.Quantité)) || excelNumber(r.Quantité) <= 0 || excelNumber(r["Prix d'achat (DH)"], 0) < 0 || excelNumber(r['Prix de vente (DH)'], 0) < 0);
    if (invalid) { toast('Achat invalide : SKU inconnu, quantité entière positive ou prix incorrect.'); return; }
    const groups = new Map(); rows.forEach(r => { const key = String(r['ID achat'] || r['N Bon'] || `import-${r.Date || 'now'}`).trim(); if (!groups.has(key)) groups.set(key, []); groups.get(key).push(r); });
    const purchases = [...groups.entries()].map(([key, group]) => { const first = group[0]; const items = group.map(r => { const p = findProductBySku(r.SKU); return { id: String(r['ID ligne'] || '').trim() || uid('pli'), productId: p.id, name: p.name, sku: p.sku || '', bonNumber: String(r['N Bon'] || first['N Bon'] || '').trim(), qty: excelNumber(r.Quantité), unitCost: excelNumber(r["Prix d'achat (DH)"], 0), unitPrice: excelNumber(r['Prix de vente (DH)'], productSellPrice(p.id) || 0), qtyRemaining: excelNumber(r['Quantité restante'], excelNumber(r.Quantité)) }; });
      return { id: key.startsWith('pu_') ? key : uid('pu'), bonNumber: String(first['N Bon'] || '').trim() || nextPurchaseBonNumber(), date: excelDate(first.Date || first['Date affichée']), supplierId: findSupplierByImport(first['Code fournisseur'], first.Fournisseur)?.id || null, items, total: items.reduce((s, x) => s + x.qty * x.unitCost, 0), note: first.Note || `Import Excel (${key})` }; });
    if (!confirmLocalized(`Importer ${purchases.length} achat(s) et ${rows.length} ligne(s) de stock ? Ces achats augmenteront le stock actuel.`)) return;
    state.purchases.push(...purchases); const result = await savePurchases(); if (result === null) { toast('Échec de sauvegarde des achats importés.'); return; }
    await logOperation('Import Excel achats', `${purchases.length} achat(s)`); toast('Achats importés avec succès'); render();
  } catch (e) { console.error(e); toast('Impossible de lire ce fichier Achats.'); }
}
function exportClientsXLSX() {
  downloadExcelRows(state.clients.map(c => ({ 'Code client': c.clientCode || '', Nom: c.name || '', Téléphone: c.phone || '', Email: c.email || '', Notes: c.notes || '', 'Nombre de ventes': clientSales(c.id).length, 'Solde dû (DH)': clientBalance(c.id) })), `phonestock-clients-${new Date().toISOString().slice(0, 10)}.xlsx`, 'Clients');
}
async function importClientsXLSX(file) {
  try {
    if (typeof XLSX === 'undefined') { toast('Bibliothèque Excel indisponible.'); return; }
    const rows = excelRowsFromSheet(await parseExcelFile(file)); if (!rows.length) { toast('La feuille Clients est vide.'); return; }
    const codes = rows.map(r => String(r['Code client'] || '').trim()).filter(Boolean); const duplicates = codes.map(s => s.toLowerCase()).filter((s, i, a) => a.indexOf(s) !== i);
    if (duplicates.length) { toast(`Code client en double : ${duplicates[0]}`); return; }
    if (rows.some(r => !String(r.Nom || '').trim())) { toast('Chaque client doit avoir un nom.'); return; }
    const byCode = new Map(state.clients.filter(c => c.clientCode).map(c => [String(c.clientCode).toLowerCase(), c]));
    const imported = rows.map(r => { const code = String(r['Code client'] || '').trim() || nextClientCode(); const old = byCode.get(code.toLowerCase()); return { ...(old || { id: uid('c') }), clientCode: code, name: String(r.Nom).trim(), phone: String(r.Téléphone || '').trim(), email: String(r.Email || '').trim(), notes: String(r.Notes || '').trim() }; });
    if (!confirmLocalized(`Importer ${imported.length} client(s) ? Les codes existants seront mis à jour, les ventes et paiements seront conservés.`)) return;
    const importedCodes = new Set(imported.map(c => c.clientCode.toLowerCase())); state.clients = [...state.clients.filter(c => !importedCodes.has(String(c.clientCode || '').toLowerCase())), ...imported];
    const result = await saveClients(); if (result === null) { toast('Échec de sauvegarde des clients importés.'); return; }
    await logOperation('Import Excel clients', `${imported.length} client(s)`); toast('Clients importés avec succès'); render();
  } catch (e) { console.error(e); toast('Impossible de lire ce fichier Clients.'); }
}
function filteredSalesForHistoryExport() {
  const f = state.historyFilters; let sales = [...state.sales];
  if (f.status !== 'Tous') sales = sales.filter(s => saleStatus(s) === f.status);
  if (f.sellerId) sales = sales.filter(s => s.sellerId === f.sellerId);
  if (f.clientId) sales = sales.filter(s => s.clientId === f.clientId);
  if (f.from) sales = sales.filter(s => new Date(s.date) >= new Date(f.from));
  if (f.to) { const d = new Date(f.to); d.setHours(23, 59, 59, 999); sales = sales.filter(s => new Date(s.date) <= d); }
  return sales.sort((a, b) => new Date(b.date) - new Date(a.date));
}
function exportHistoryXLSX() {
  const rows = []; filteredSalesForHistoryExport().forEach(s => { const c = state.clients.find(x => x.id === s.clientId); (s.items || []).forEach(it => { const p = state.products.find(x => x.id === it.productId);
    rows.push({ 'ID vente': s.id, 'N° vente': s.number || '', Date: fmtDateTime(s.date), 'Code client': c ? c.clientCode : '', Client: c ? c.name : 'Client de passage', 'Vendeur': s.sellerName || '', Paiement: s.payment || '', Statut: saleStatus(s), SKU: p ? p.sku : '', Produit: it.name || (p && p.name) || '', Quantité: Number(it.qty) || 0, 'Prix unitaire (DH)': Number(it.price) || 0, 'Coût unitaire (DH)': Number(it.unitCost) || 0, 'Sous-total': Number(s.subtotal) || 0, 'Remise (DH)': Number(s.discount) || 0, Total: Number(s.total) || 0, 'Payé (DH)': Number(s.paidAmount) || 0 });
  }); });
  downloadExcelRows(rows, `phonestock-historique-ventes-${new Date().toISOString().slice(0, 10)}.xlsx`, 'Historique ventes');
}
async function importHistoryXLSX(file) {
  try {
    if (typeof XLSX === 'undefined') { toast('Bibliothèque Excel indisponible.'); return; }
    const rows = excelRowsFromSheet(await parseExcelFile(file)); if (!rows.length) { toast('La feuille Historique ventes est vide.'); return; }
    const invalid = rows.find(r => !findProductBySku(r.SKU) || !Number.isInteger(excelNumber(r.Quantité)) || excelNumber(r.Quantité) <= 0 || excelNumber(r['Prix unitaire (DH)'], 0) < 0);
    if (invalid) { toast('Vente invalide : SKU inconnu, quantité entière positive ou prix unitaire incorrect.'); return; }
    const groups = new Map(); rows.forEach(r => { const key = String(r['ID vente'] || r['N° vente'] || `${r.Date}-${r.Client || ''}`).trim(); if (!groups.has(key)) groups.set(key, []); groups.get(key).push(r); });
    const imported = []; let number = nextSaleNumber();
    for (const [, group] of groups) { const first = group[0]; const client = findClientByImport(first['Code client'], first.Client); const items = group.map(r => { const p = findProductBySku(r.SKU); return { productId: p.id, name: p.name, qty: excelNumber(r.Quantité), price: excelNumber(r['Prix unitaire (DH)'], 0), unitCost: excelNumber(r['Coût unitaire (DH)'], 0) }; });
      const subtotal = excelNumber(first.Sous-total, items.reduce((s, x) => s + x.qty * x.price, 0)); const discount = Math.max(0, excelNumber(first['Remise (DH)'], 0)); const total = Math.max(0, excelNumber(first.Total, subtotal - discount));
      imported.push({ id: uid('s'), number: number++, date: excelDate(first.Date), items, subtotal, discount, total, payment: String(first.Paiement || 'Espèces'), clientId: client ? client.id : null, paidAmount: Math.max(0, Math.min(total, excelNumber(first['Payé (DH)'], 0))), sellerId: null, sellerName: String(first.Vendeur || 'Import Excel'), source: 'Import Excel' }); }
    if (!confirmLocalized(`Importer ${imported.length} vente(s) historique(s) ? Le stock et les paiements ne seront pas modifiés.`)) return;
    state.sales.push(...imported); const result = await saveSales(); if (result === null) { toast('Échec de sauvegarde de l’historique importé.'); return; }
    await logOperation('Import Excel historique', `${imported.length} vente(s)`); toast('Historique des ventes importé'); render();
  } catch (e) { console.error(e); toast('Impossible de lire ce fichier Historique ventes.'); }
}
function exportOplogXLSX() {
  if (typeof XLSX === 'undefined') { toast("Bibliothèque Excel indisponible — vérifiez votre connexion."); return; }
  const rows = [...state.oplog].sort((a, b) => new Date(b.date) - new Date(a.date)).map(l => ({
    Date: fmtDateTime(l.date), Utilisateur: l.username, Action: l.action, Détails: l.details,
  }));
  const ws = XLSX.utils.json_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Historique');
  XLSX.writeFile(wb, `phonestock-historique-${new Date().toISOString().slice(0, 10)}.xlsx`);
}

function buildBackupPayload() {
  // Stock is derived from purchase lots, but keep a snapshot on each product
  // too. This makes the JSON self-describing and lets older/incomplete
  // backups rebuild their initial lots during restoration.
  const productsWithStockSnapshot = state.products.map(product => ({
    ...product,
    stock: productStock(product.id),
    costPrice: productAvgCost(product.id),
    sellPrice: productSellPrice(product.id),
  }));
  return {
    schemaVersion: DATA_SCHEMA_VERSION,
    exportedAt: new Date().toISOString(),
    products: productsWithStockSnapshot,
    categories: getCategories(),
    clients: state.clients,
    sales: state.sales,
    users: state.users,
    payments: state.payments,
    oplog: state.oplog,
    suppliers: state.suppliers,
    purchases: state.purchases,
    replenishmentBons: state.replenishmentBons,
    replenishmentConsumedSaleIds: state.replenishmentConsumedSaleIds,
    replenishmentConsumedProductIds: state.replenishmentConsumedProductIds,
    invoices: state.invoices,
    equipmentPurchases: state.equipmentPurchases,
    expenses: state.expenses,
    equipmentCategories: state.equipmentCategories,
    expenseCategories: state.expenseCategories,
    services: state.services,
    serviceCategories: state.serviceCategories,
    rechargeAccounts: state.rechargeAccounts,
    rechargeMarginRate: state.rechargeMarginRate,
    capitalAmount: state.capitalAmount,
    generatedDocuments: state.generatedDocuments,
    theme: state.theme,
    branding: state.branding,
    settings: { capitalAmount: state.capitalAmount, theme: state.theme, operationReportPeriod: state.operationReportPeriod, operationReportMonth: state.operationReportMonth, operationReportFrom: state.operationReportFrom, operationReportTo: state.operationReportTo, reportFilters: state.reportFilters, purchaseFilters: state.purchaseFilters, historyFilters: state.historyFilters, replenishmentSalesFilters: state.replenishmentSalesFilters, productSort: state.productSort, stockSort: state.stockSort, stockSearch: state.stockSearch, supplierSearch: state.supplierSearch, purchaseSearch: state.purchaseSearch, salesSearch: state.salesSearch, posCategory: state.posCategory },
  };
}
function downloadBackup(payload = buildBackupPayload(), filename = null) {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename || `phonestock-sauvegarde-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function isValidBackup(data) {
  const required = ['products', 'clients'];
  const optionalArrays = ['categories', 'sales', 'users', 'payments', 'oplog', 'suppliers', 'purchases', 'replenishmentBons', 'replenishmentConsumedSaleIds', 'replenishmentConsumedProductIds', 'invoices', 'equipmentPurchases', 'expenses', 'services', 'serviceCategories', 'equipmentCategories', 'expenseCategories', 'rechargeAccounts'];
  const optionalNumbers = ['rechargeMarginRate'];
  return data && typeof data === 'object' && required.every(key => Array.isArray(data[key])) &&
    optionalArrays.every(key => data[key] == null || Array.isArray(data[key])) &&
    optionalNumbers.every(key => data[key] == null || ((typeof data[key] === 'number' || typeof data[key] === 'string') && String(data[key]).trim() !== '' && Number.isFinite(Number(data[key]))));
}
function normalizeBackupData(data) {
  const normalizedPurchases = Array.isArray(data.purchases) ? data.purchases.map(purchase => ({
    ...purchase,
    items: Array.isArray(purchase.items) ? purchase.items.map(item => {
      const linkedProduct = (Array.isArray(data.products) ? data.products : []).find(product =>
        product.id === item.productId ||
        (item.sku && String(product.sku || '').toLowerCase() === String(item.sku).toLowerCase()) ||
        (item.name && String(product.name || '').toLowerCase() === String(item.name).toLowerCase())
      );
      const productId = item.productId || linkedProduct?.id || '';
      const qty = Math.max(0, Number(item.qty ?? item.quantity ?? item.qtyRemaining) || 0);
      const remainingRaw = item.qtyRemaining == null ? qty : Number(item.qtyRemaining);
      return {
        ...item,
        productId,
        name: item.name || linkedProduct?.name || '',
        qty,
        qtyRemaining: Number.isFinite(remainingRaw) ? Math.max(0, Math.min(qty, remainingRaw)) : qty,
        unitCost: Math.max(0, Number(item.unitCost ?? item.costPrice) || 0),
        unitPrice: Math.max(0, Number(item.unitPrice ?? item.sellPrice) || 0),
      };
    }).filter(item => item.productId && item.qty > 0) : [],
  })).filter(purchase => purchase.items.length > 0) : [];
  return {
    ...data,
    categories: Array.isArray(data.categories) ? Array.from(new Set([...data.categories, ...CATEGORIES])) : getCategories(),
    sales: Array.isArray(data.sales) ? data.sales : [],
    users: Array.isArray(data.users) ? data.users : state.users,
    payments: Array.isArray(data.payments) ? data.payments : [],
    oplog: Array.isArray(data.oplog) ? data.oplog : [],
    suppliers: Array.isArray(data.suppliers) ? data.suppliers : [],
    purchases: normalizedPurchases,
    replenishmentBons: Array.isArray(data.replenishmentBons) ? data.replenishmentBons : [],
    replenishmentConsumedSaleIds: Array.isArray(data.replenishmentConsumedSaleIds) ? data.replenishmentConsumedSaleIds : [],
    replenishmentConsumedProductIds: Array.isArray(data.replenishmentConsumedProductIds) ? data.replenishmentConsumedProductIds : [],
    invoices: Array.isArray(data.invoices) ? data.invoices : [],
    equipmentPurchases: Array.isArray(data.equipmentPurchases) ? data.equipmentPurchases : [],
    expenses: Array.isArray(data.expenses) ? data.expenses : [],
    equipmentCategories: Array.isArray(data.equipmentCategories) ? data.equipmentCategories : [...EQUIPMENT_CATEGORIES],
    expenseCategories: Array.isArray(data.expenseCategories) ? data.expenseCategories : [...EXPENSE_CATEGORIES],
    services: Array.isArray(data.services) ? data.services : [],
    serviceCategories: Array.isArray(data.serviceCategories) ? data.serviceCategories : [...SERVICE_CATEGORIES],
    rechargeAccounts: Array.isArray(data.rechargeAccounts) ? data.rechargeAccounts : [],
    rechargeMarginRate: data.rechargeMarginRate == null ? 6.5 : Math.max(0, Number(data.rechargeMarginRate)),
    capitalAmount: data.capitalAmount == null ? 0 : Math.max(0, Number(data.capitalAmount)),
    settings: data.settings && typeof data.settings === 'object' ? data.settings : {},
  };
}

async function restoreFromFile(file) {
  let previous = null;
  try {
    const text = await file.text();
    const data = normalizeBackupData(JSON.parse(text));
    if (!isValidBackup(data)) {
      toast('Fichier de sauvegarde invalide ou incomplet.');
      return;
    }
    if (data.schemaVersion && data.schemaVersion > DATA_SCHEMA_VERSION) {
      toast('Cette sauvegarde provient d’une version plus récente.');
      return;
    }
    const counts = ['products', 'clients', 'sales', 'users', 'payments', 'suppliers', 'purchases', 'invoices']
      .map(key => `${data[key].length} ${key}`).join(', ');
    if (!confirmLocalized(`Cette restauration remplacera les données actuelles (${counts}). Une sauvegarde de sécurité sera téléchargée avant l’opération. Continuer ?`)) return;
    downloadBackup(buildBackupPayload(), `phonestock-avant-restauration-${new Date().toISOString().slice(0, 10)}.json`);
    previous = {
      products: state.products, categories: state.categories, clients: state.clients, sales: state.sales, users: state.users,
      payments: state.payments, oplog: state.oplog, suppliers: state.suppliers,
      purchases: state.purchases, invoices: state.invoices, equipmentPurchases: state.equipmentPurchases, expenses: state.expenses, equipmentCategories: state.equipmentCategories, expenseCategories: state.expenseCategories, services: state.services, serviceCategories: state.serviceCategories, rechargeAccounts: state.rechargeAccounts, rechargeMarginRate: state.rechargeMarginRate, generatedDocuments: state.generatedDocuments,
      replenishmentBons: state.replenishmentBons,
      replenishmentConsumedSaleIds: state.replenishmentConsumedSaleIds,
      replenishmentConsumedProductIds: state.replenishmentConsumedProductIds,
      branding: state.branding, theme: state.theme, reportFilters: state.reportFilters, capitalAmount: state.capitalAmount,
    };
    const restoreKeys = ['shop:capital-amount', 'shop:products', 'shop:categories', 'shop:clients', 'shop:sales', 'shop:users', 'shop:payments', 'shop:oplog', 'shop:suppliers', 'shop:purchases', 'shop:replenishment-bons', 'shop:replenishment-consumed-sales', 'shop:replenishment-consumed-products', 'shop:invoices', 'shop:equipment-purchases', 'shop:expenses', 'shop:services', 'shop:service-categories', 'shop:equipment-categories', 'shop:expense-categories', 'shop:recharge-accounts', 'shop:recharge-margin-rate', 'shop:generated-documents', 'shop:report-filters', 'shop:branding', 'shop:theme-pref', 'shop:session'];
    for (const key of restoreKeys) {
      const shared = !['shop:branding', 'shop:theme-pref', 'shop:session', 'shop:report-filters'].includes(key);
      if (await safeDelete(key, shared) === null) throw new Error(`Impossible de vider la clé ${key}`);
    }
    const next = {
      generatedDocuments: Array.isArray(data.generatedDocuments) ? data.generatedDocuments : [],
      products: data.products, categories: data.categories || getCategories(), clients: data.clients, sales: data.sales,
      users: data.users, payments: data.payments, oplog: data.oplog,
      suppliers: data.suppliers, purchases: data.purchases, invoices: data.invoices, equipmentPurchases: data.equipmentPurchases || [], expenses: data.expenses || [], capitalAmount: data.capitalAmount == null ? Math.max(0, Number(data.settings?.capitalAmount) || 0) : Math.max(0, Number(data.capitalAmount)), equipmentCategories: data.equipmentCategories || [...EQUIPMENT_CATEGORIES], expenseCategories: data.expenseCategories || [...EXPENSE_CATEGORIES], services: data.services || [], serviceCategories: data.serviceCategories || [...SERVICE_CATEGORIES], rechargeAccounts: data.rechargeAccounts || [], rechargeMarginRate: data.rechargeMarginRate == null ? 6.5 : Math.max(0, Number(data.rechargeMarginRate)),
      replenishmentBons: data.replenishmentBons || [],
      replenishmentConsumedSaleIds: data.replenishmentConsumedSaleIds || [],
      replenishmentConsumedProductIds: data.replenishmentConsumedProductIds || [],
    };
    Object.assign(state, next);
    const settings = data.settings || {};
    state.branding = { name: 'PhoneStock', subtitle: 'Gestion boutique', icon: '', companyName: '', companyAddress: '', companyPhone: '', companyEmail: '', companyId: '', ...(data.branding && typeof data.branding === 'object' ? data.branding : {}) };
    state.theme = settings.theme === 'light' || settings.theme === 'dark' ? settings.theme : (data.theme === 'light' || data.theme === 'dark' ? data.theme : state.theme);
    if (settings.capitalAmount != null && data.capitalAmount == null) state.capitalAmount = Math.max(0, Number(settings.capitalAmount) || 0);
    if (settings.operationReportPeriod) state.operationReportPeriod = settings.operationReportPeriod;
    if (settings.operationReportMonth) state.operationReportMonth = settings.operationReportMonth;
    if (settings.operationReportFrom != null) state.operationReportFrom = settings.operationReportFrom;
    if (settings.operationReportTo != null) state.operationReportTo = settings.operationReportTo;
    state.reportFilters = settings.reportFilters && typeof settings.reportFilters === 'object' ? settings.reportFilters : { excludeSaleCategories: [], excludePurchaseCategories: [], excludePurchaseSuppliers: [] };
    state.reportFilters.sections = { summary: true, stats: true, sales: true, purchases: true, payments: true, stock: true, productPerformance: true, dailyEvolution: true, ...(state.reportFilters.sections || {}) };
    state.reportFilters.excludeSaleCategories = state.reportFilters.excludeSaleCategories || [];
    state.reportFilters.excludePurchaseCategories = state.reportFilters.excludePurchaseCategories || [];
    state.reportFilters.excludePurchaseSuppliers = state.reportFilters.excludePurchaseSuppliers || [];
    if (settings.purchaseFilters) state.purchaseFilters = { ...state.purchaseFilters, ...settings.purchaseFilters };
    if (settings.historyFilters) state.historyFilters = { ...state.historyFilters, ...settings.historyFilters };
    if (settings.replenishmentSalesFilters) state.replenishmentSalesFilters = { ...state.replenishmentSalesFilters, ...settings.replenishmentSalesFilters };
    if (settings.productSort && typeof settings.productSort === 'object') state.productSort = { ...state.productSort, ...settings.productSort };
    if (settings.stockSort && typeof settings.stockSort === 'object') state.stockSort = { ...state.stockSort, ...settings.stockSort };
    if (typeof settings.stockSearch === 'string') state.stockSearch = settings.stockSearch;
    if (typeof settings.supplierSearch === 'string') state.supplierSearch = settings.supplierSearch;
    if (typeof settings.purchaseSearch === 'string') state.purchaseSearch = settings.purchaseSearch;
    if (typeof settings.salesSearch === 'string') state.salesSearch = settings.salesSearch;
    if (typeof settings.posCategory === 'string') state.posCategory = settings.posCategory;
    applyTheme();
    state.users.forEach(migrateUserPrivileges);
    migrateSaleNumbers();
    migratePurchaseBonNumbers();
    migrateClientCodes();
    migrateStockLots();
    const results = await Promise.all([
      saveProducts(), saveCategories(), saveClients(), saveSales(), saveUsers(), savePayments(),
      saveOplog(), saveSuppliers(), savePurchases(), saveServices(), saveServiceCategories(), saveEquipmentCategories(), saveExpenseCategories(), saveRechargeAccounts(), saveRechargeMarginRate(), saveReplenishmentBons(), saveReplenishmentConsumedSales(), safeSet('shop:replenishment-consumed-products', JSON.stringify(state.replenishmentConsumedProductIds || []), true), saveInvoices(), saveEquipmentPurchases(), saveExpenses(), saveCapitalAmount(), safeSet('shop:generated-documents', JSON.stringify(state.generatedDocuments), true), safeSet('shop:report-filters', JSON.stringify(state.reportFilters), false), safeSet('shop:theme-pref', state.theme, false), safeSet('shop:branding', JSON.stringify(state.branding), false),
    ]);
    if (results.some(result => result === null)) throw new Error('Échec d’écriture de la sauvegarde');
    await logOperation('Restauration', 'Données complètes restaurées depuis un fichier JSON');
    toast('Données restaurées avec succès');
    state.session = null;
    await safeDelete('shop:session', false);
    render();
  } catch (e) {
    console.error(e);
    if (previous) {
      Object.assign(state, previous);
      try {
        await Promise.all([saveProducts(), saveCategories(), saveClients(), saveSales(), saveUsers(), savePayments(), saveOplog(), saveSuppliers(), savePurchases(), saveServices(), saveServiceCategories(), saveRechargeAccounts(), saveRechargeMarginRate(), saveReplenishmentBons(), saveReplenishmentConsumedSales(), safeSet('shop:replenishment-consumed-products', JSON.stringify(state.replenishmentConsumedProductIds || []), true), saveInvoices(), saveEquipmentPurchases(), saveExpenses(), safeSet('shop:generated-documents', JSON.stringify(state.generatedDocuments || []), true), safeSet('shop:report-filters', JSON.stringify(state.reportFilters || {}), false), safeSet('shop:theme-pref', state.theme, false), safeSet('shop:branding', JSON.stringify(state.branding || {}), false)]);
      } catch (rollbackError) { console.error('Échec du retour arrière', rollbackError); }
    }
    toast('Restauration échouée : les données précédentes ont été conservées.');
  }
}

/* ---------------- Excel workbook export / import (linked module sheets) ---------------- */
const XLSX_CATEGORIES_FALLBACK = () => {
  return getCategories();
};

function exportExcelWorkbook() {
  if (typeof XLSX === 'undefined') { toast("Bibliothèque Excel indisponible — vérifiez votre connexion."); return; }
  const products = state.products;
  const categories = XLSX_CATEGORIES_FALLBACK();
  const wb = XLSX.utils.book_new();

  const titleRows = (title, subtitle) => [[title], [subtitle], []];

  /* ---- Stock & Prix ---- */
  const stkAOA = titleRows(
    'Stock & Prix (par référence SKU)',
    "Quantité, prix d'achat et prix de vente actuels — modifiable puis ré-importable dans l'application"
  );
  stkAOA.push(["SKU", "Produit (lié)", "Quantité en stock", "Prix d'achat (DH)", "Prix de vente (DH)", "Valeur stock (achat)", "Marge unitaire (DH)"]);
  const stkFirstRow = stkAOA.length + 1; // 1-based row of first data row
  products.forEach(p => {
    const qty = productStock(p.id);
    const cost = productAvgCost(p.id);
    const price = productSellPrice(p.id);
    stkAOA.push([p.sku, null, qty, cost || null, price || null, null, null]);
  });
  const wsStk = XLSX.utils.aoa_to_sheet(stkAOA);
  products.forEach((p, i) => {
    const r = stkFirstRow + i;
    wsStk[`B${r}`] = { t: 's', f: `IFERROR(INDEX(Produits!$B$5:$B$10000,MATCH(A${r},Produits!$A$5:$A$10000,0)),"")`, v: p.name };
    wsStk[`F${r}`] = { t: 'n', f: `IF(D${r}="","",C${r}*D${r})`, v: (productAvgCost(p.id) || 0) * productStock(p.id) };
    wsStk[`G${r}`] = { t: 'n', f: `IF(D${r}="","",E${r}-D${r})`, v: (productSellPrice(p.id) || 0) - (productAvgCost(p.id) || 0) };
  });
  wsStk['!cols'] = [{ wch: 22 }, { wch: 34 }, { wch: 16 }, { wch: 16 }, { wch: 16 }, { wch: 18 }, { wch: 16 }];
  protectExcelWorksheet(wsStk, [`A${stkFirstRow}:A${stkFirstRow + products.length - 1}`, `C${stkFirstRow}:E${stkFirstRow + products.length - 1}`]);
  XLSX.utils.book_append_sheet(wb, wsStk, 'Stock & Prix');

  /* ---- Produits ---- */
  const prodAOA = titleRows(
    'Fiche Produits',
    "Catalogue des produits — Prix d'achat/vente et quantité sont recherchés automatiquement dans « Stock & Prix » via le SKU"
  );
  prodAOA.push(["SKU", "Nom du produit", "Marque", "Modèle / Compatibilité", "Catégorie", "Seuil stock bas",
    "Prix d'achat (lié)", "Qté en stock (lié)", "Valeur stock achat (lié)", "Valeur stock vente (lié)", "Marge unitaire (lié)"]);
  const prodFirstRow = prodAOA.length + 1;
  products.forEach(p => {
    prodAOA.push([p.sku, p.name, p.brand || '', p.model || '', p.category || '', p.lowStock != null ? p.lowStock : 3,
      null, null, null, null, null]);
  });
  const wsProd = XLSX.utils.aoa_to_sheet(prodAOA);
  products.forEach((p, i) => {
    const r = prodFirstRow + i;
    const cost = productAvgCost(p.id), qty = productStock(p.id), price = productSellPrice(p.id);
    wsProd[`G${r}`] = { t: 'n', f: `IFERROR(INDEX('Stock & Prix'!$D$5:$D$10000,MATCH(A${r},'Stock & Prix'!$A$5:$A$10000,0)),"")`, v: cost || '' };
    wsProd[`H${r}`] = { t: 'n', f: `IFERROR(INDEX('Stock & Prix'!$C$5:$C$10000,MATCH(A${r},'Stock & Prix'!$A$5:$A$10000,0)),"")`, v: qty };
    wsProd[`I${r}`] = { t: 'n', f: `IF(OR(G${r}="",H${r}=""),"",G${r}*H${r})`, v: (cost || 0) * qty };
    wsProd[`J${r}`] = { t: 'n', f: `IFERROR(INDEX('Stock & Prix'!$E$5:$E$10000,MATCH(A${r},'Stock & Prix'!$A$5:$A$10000,0))*H${r},"")`, v: (price || 0) * qty };
    wsProd[`K${r}`] = { t: 'n', f: `IFERROR(INDEX('Stock & Prix'!$G$5:$G$10000,MATCH(A${r},'Stock & Prix'!$A$5:$A$10000,0)),"")`, v: (price || 0) - (cost || 0) };
  });
  wsProd['!cols'] = [{ wch: 22 }, { wch: 34 }, { wch: 12 }, { wch: 40 }, { wch: 24 }, { wch: 14 }, { wch: 16 }, { wch: 14 }, { wch: 18 }, { wch: 18 }, { wch: 16 }];
  protectExcelWorksheet(wsProd, [`A${prodFirstRow}:F${prodFirstRow + products.length - 1}`]);
  XLSX.utils.book_append_sheet(wb, wsProd, 'Produits');

  /* ---- Catégories ---- */
  const catAOA = titleRows('Catégories de produits', "La colonne « Nb produits » se met à jour automatiquement depuis la feuille Produits");
  catAOA.push(["Catégorie", "Nb produits"]);
  const catFirstRow = catAOA.length + 1;
  categories.forEach(c => catAOA.push([c, null]));
  const wsCat = XLSX.utils.aoa_to_sheet(catAOA);
  categories.forEach((c, i) => {
    const r = catFirstRow + i;
    wsCat[`B${r}`] = { t: 'n', f: `COUNTIF(Produits!$E$5:$E$10000,A${r})`, v: products.filter(p => p.category === c).length };
  });
  wsCat['!cols'] = [{ wch: 30 }, { wch: 14 }];
  protectExcelWorksheet(wsCat, [`A${catFirstRow}:A${catFirstRow + categories.length - 1}`]);
  XLSX.utils.book_append_sheet(wb, wsCat, 'Catégories');

  /* ---- Clients ---- */
  const cliAOA = titleRows('Clients', 'Base clients de la boutique');
  cliAOA.push(["Code client", "Nom", "Téléphone", "Email", "Notes"]);
  state.clients.forEach(c => cliAOA.push([c.clientCode || '', c.name || '', c.phone || '', c.email || '', c.notes || '']));
  const wsCli = XLSX.utils.aoa_to_sheet(cliAOA);
  wsCli['!cols'] = [{ wch: 16 }, { wch: 28 }, { wch: 18 }, { wch: 26 }, { wch: 30 }];
  XLSX.utils.book_append_sheet(wb, wsCli, 'Clients');

  /* ---- Ventes (journal, valeurs figées) ---- */
  const venAOA = titleRows('Ventes', 'Journal des ventes enregistrées dans l\'application (export figé, non relié)');
  venAOA.push(["Date", "SKU vendu", "Produit", "Quantité vendue", "Prix de vente unitaire", "Total", "Client"]);
  [...state.sales].sort((a, b) => new Date(a.date) - new Date(b.date)).forEach(s => {
    const client = state.clients.find(c => c.id === s.clientId);
    (s.items || []).forEach(it => {
      const prod = state.products.find(pp => pp.id === it.productId);
      venAOA.push([fmtDateTime(s.date), prod ? prod.sku : '', it.name || '', it.qty, it.price, (it.qty || 0) * (it.price || 0), client ? client.name : '']);
    });
  });
  const wsVen = XLSX.utils.aoa_to_sheet(venAOA);
  wsVen['!cols'] = [{ wch: 18 }, { wch: 20 }, { wch: 34 }, { wch: 16 }, { wch: 20 }, { wch: 16 }, { wch: 20 }];
  XLSX.utils.book_append_sheet(wb, wsVen, 'Ventes');

  /* ---- Achats / lots : données complètes et réimportables ---- */
  const achAOA = titleRows('Achats et lots', 'Chaque ligne conserve son achat, son lot, sa date/heure ISO, son N Bon et sa quantité restante');
  achAOA.push(['ID achat', 'N Bon', 'Date opération ISO', 'Code fournisseur', 'Fournisseur', 'SKU', 'Produit', 'Quantité', 'Quantité restante', "Prix d'achat (DH)", 'Prix de vente (DH)', 'ID ligne', 'Note']);
  [...state.purchases].sort((a,b) => new Date(a.date)-new Date(b.date)).forEach(pu => (pu.items || []).forEach(it => {
    const prod = products.find(x => x.id === it.productId); const sup = state.suppliers.find(x => x.id === pu.supplierId);
    achAOA.push([pu.id, pu.bonNumber || '', pu.date || '', sup?.code || '', sup?.name || '', prod?.sku || it.sku || '', it.name || prod?.name || '', Number(it.qty)||0, Number(it.qtyRemaining == null ? it.qty : it.qtyRemaining)||0, Number(it.unitCost)||0, Number(it.unitPrice)||0, it.id || '', pu.note || '']);
  }));
  const wsAch = XLSX.utils.aoa_to_sheet(achAOA); wsAch['!cols'] = [18,14,28,18,24,22,34,12,18,20,20,18,34].map(wch => ({wch}));
  XLSX.utils.book_append_sheet(wb, wsAch, 'Achats');

  /* ---- Tableau de bord ---- */
  const dashAOA = titleRows('Tableau de bord — Boutique Téléphone', 'Vue d\'ensemble calculée automatiquement à partir des feuilles Produits et Stock & Prix');
  dashAOA.push(["Indicateur", "Valeur"]);
  const totalQty = products.reduce((s, p) => s + productStock(p.id), 0);
  const totalValAchat = products.reduce((s, p) => s + productAvgCost(p.id) * productStock(p.id), 0);
  const totalValVente = products.reduce((s, p) => s + productSellPrice(p.id) * productStock(p.id), 0);
  dashAOA.push(["Nombre total de produits", null]);
  dashAOA.push(["Nombre de catégories", null]);
  dashAOA.push(["Quantité totale en stock (unités)", null]);
  dashAOA.push(["Valeur totale du stock (Prix d'achat)", null]);
  dashAOA.push(["Valeur totale du stock (Prix de vente)", null]);
  dashAOA.push(["Marge potentielle totale", null]);
  dashAOA.push([]);
  dashAOA.push(["Répartition par catégorie"]);
  dashAOA.push(["Catégorie", "Nb produits", "Qté en stock", "Valeur stock (achat)"]);
  const catTableFirstRow = dashAOA.length + 1;
  categories.forEach(c => dashAOA.push([c, null, null, null]));
  const wsDash = XLSX.utils.aoa_to_sheet(dashAOA);
  wsDash['B4'] = { t: 'n', f: 'COUNTA(Produits!A5:A10000)', v: products.length };
  wsDash['B5'] = { t: 'n', f: 'COUNTA(Catégories!A5:A100)', v: categories.length };
  wsDash['B6'] = { t: 'n', f: 'SUM(Produits!H5:H10000)', v: totalQty };
  wsDash['B7'] = { t: 'n', f: 'SUM(Produits!I5:I10000)', v: totalValAchat };
  wsDash['B8'] = { t: 'n', f: 'SUM(Produits!J5:J10000)', v: totalValVente };
  wsDash['B9'] = { t: 'n', f: 'B8-B7', v: totalValVente - totalValAchat };
  categories.forEach((c, i) => {
    const r = catTableFirstRow + i;
    const catProducts = products.filter(p => p.category === c);
    const catQty = catProducts.reduce((s, p) => s + productStock(p.id), 0);
    const catVal = catProducts.reduce((s, p) => s + productAvgCost(p.id) * productStock(p.id), 0);
    wsDash[`A${r}`] = { t: 's', f: `Catégories!A${catFirstRow + i}`, v: c };
    wsDash[`B${r}`] = { t: 'n', f: `COUNTIF(Produits!$E$5:$E$10000,A${r})`, v: catProducts.length };
    wsDash[`C${r}`] = { t: 'n', f: `SUMIF(Produits!$E$5:$E$10000,A${r},Produits!$H$5:$H$10000)`, v: catQty };
    wsDash[`D${r}`] = { t: 'n', f: `SUMIF(Produits!$E$5:$E$10000,A${r},Produits!$I$5:$I$10000)`, v: catVal };
  });
  wsDash['!cols'] = [{ wch: 34 }, { wch: 16 }, { wch: 14 }, { wch: 20 }];
  protectExcelWorksheet(wsDash);
  XLSX.utils.book_append_sheet(wb, wsDash, 'Tableau de bord', true);
  // Move dashboard first
  wb.SheetNames = ['Tableau de bord', ...wb.SheetNames.filter(n => n !== 'Tableau de bord')];

  XLSX.writeFile(wb, `phonestock-classeur-${new Date().toISOString().slice(0, 10)}.xlsx`, { cellStyles: true });
}

function sheetRowsFromHeader(ws) {
  if (!ws) return [];
  // Header is on row 4 (index 3); data starts row 5 (index 4)
  return XLSX.utils.sheet_to_json(ws, { range: 3, defval: '' });
}

async function importExcelWorkbook(file) {
  if (typeof XLSX === 'undefined') { toast("Bibliothèque Excel indisponible — vérifiez votre connexion."); return; }
  try {
    const buf = await file.arrayBuffer();
    const wb = XLSX.read(buf, { type: 'array' });
    const wsProd = wb.Sheets['Produits'];
    if (!wsProd) { toast('Feuille « Produits » introuvable dans ce classeur.'); return; }
    const prodRows = sheetRowsFromHeader(wsProd);
    const stkRows = sheetRowsFromHeader(wb.Sheets['Stock & Prix']);
    const cliRows = sheetRowsFromHeader(wb.Sheets['Clients']);
    const achRows = sheetRowsFromHeader(wb.Sheets['Achats']);
    const invalidProductRow = prodRows.find(r => !String(r['SKU'] || '').trim() || !String(r['Nom du produit'] || '').trim() ||
      (r['Seuil stock bas'] !== '' && (!Number.isInteger(excelNumber(r['Seuil stock bas'])) || excelNumber(r['Seuil stock bas']) < 0)));
    if (invalidProductRow) { toast('La feuille « Produits » contient un SKU, un nom ou un seuil invalide.'); return; }

    const duplicateSkus = prodRows.map(r => String(r['SKU'] || '').trim().toLowerCase()).filter((sku, index, list) => sku && list.indexOf(sku) !== index);
    if (duplicateSkus.length) { toast(`SKU en double dans le fichier : ${duplicateSkus[0]}`); return; }
    const invalidStockRow = stkRows.find(r => {
      const qty = excelNumber(r['Quantité en stock']);
      const cost = excelNumber(r["Prix d'achat (DH)"], 0);
      const price = excelNumber(r['Prix de vente (DH)'], 0);
      return (r['Quantité en stock'] !== '' && (qty == null || qty < 0 || !Number.isInteger(qty))) || cost < 0 || price < 0;
    });
    if (invalidStockRow) { toast('Quantité ou prix invalide dans la feuille « Stock & Prix ».'); return; }
    const stkBySku = {};
    stkRows.forEach(r => {
      const sku = String(r['SKU'] || '').trim().toLowerCase();
      if (!sku) return;
      stkBySku[sku] = {
        qty: excelNumber(r['Quantité en stock'], 0),
        cost: excelNumber(r["Prix d'achat (DH)"]),
        price: excelNumber(r['Prix de vente (DH)']),
      };
    });

    const newProducts = [];
    const purchaseItems = [];
    const oldProductsBySku = new Map(state.products.filter(p => p.sku).map(p => [String(p.sku).trim().toLowerCase(), p]));
    prodRows.forEach(r => {
      const sku = String(r['SKU'] || '').trim();
      if (!sku) return;
      const id = uid('p');
      const oldProduct = oldProductsBySku.get(sku.toLowerCase());
      newProducts.push({
        id, name: String(r['Nom du produit'] || ''), brand: String(r['Marque'] || ''),
        model: String(r['Modèle / Compatibilité'] || ''), category: String(r['Catégorie'] || ''),
        sku, lowStock: r['Seuil stock bas'] !== '' ? Number(r['Seuil stock bas']) : 3,
        photo: oldProduct ? safeImageSrc(oldProduct.photo) || null : null,
        archived: !!(oldProduct && oldProduct.archived),
      });
      const fromStk = stkBySku[sku.toLowerCase()];
      const qty = fromStk ? fromStk.qty : excelNumber(r['Qté en stock (lié)'], 0);
      const cost = fromStk && fromStk.cost != null ? fromStk.cost : excelNumber(r["Prix d'achat (lié)"], 0);
      const price = fromStk && fromStk.price != null ? fromStk.price
        : (qty ? excelNumber(r['Valeur stock vente (lié)'], 0) / qty : 0) || cost * 2;
      if (qty > 0 || cost || price) {
        purchaseItems.push({ productId: id, name: newProducts[newProducts.length - 1].name, qty: qty || 0, unitCost: cost || 0, unitPrice: price || 0, qtyRemaining: qty || 0 });
      }
    });

    const newClients = cliRows
      .filter(r => String(r['Code client'] || r['Nom'] || '').trim())
      .map(r => ({
        id: uid('c'), clientCode: String(r['Code client'] || '') || nextClientCode(),
        name: String(r['Nom'] || ''), phone: String(r['Téléphone'] || ''),
        email: String(r['Email'] || ''), notes: String(r['Notes'] || ''),
      }));

    if (!confirmLocalized(`Importer ${newProducts.length} produit(s) et ${newClients.length} client(s) depuis ce classeur ? Cela remplace le catalogue produits, le stock/prix et les clients actuels. Les photos existantes seront perdues.`)) return;

    state.products = newProducts;
    state.clients = newClients;
    if (achRows.length) {
      const groups = new Map();
      achRows.forEach(r => { const key = String(r['ID achat'] || r['N Bon'] || `import-${r['Date opération ISO'] || 'now'}`).trim(); if (!groups.has(key)) groups.set(key, []); groups.get(key).push(r); });
      state.purchases = [...groups.entries()].map(([key, group]) => {
        const first = group[0];
        const items = group.map(r => { const prod = newProducts.find(x => x.sku.toLowerCase() === String(r.SKU || '').trim().toLowerCase()); const qty = Number(r.Quantité) || 0; return { id: String(r['ID ligne'] || '').trim() || uid('pli'), productId: prod?.id || '', name: String(r.Produit || prod?.name || ''), sku: prod?.sku || String(r.SKU || ''), bonNumber: String(r['N Bon'] || first['N Bon'] || '').trim(), qty, qtyRemaining: Math.max(0, Math.min(qty, Number(r['Quantité restante'] == null || r['Quantité restante'] === '' ? qty : r['Quantité restante']) || 0)), unitCost: Number(r["Prix d'achat (DH)"]) || 0, unitPrice: Number(r['Prix de vente (DH)']) || 0 }; }).filter(it => it.productId && it.qty > 0);
        return { id: key.startsWith('pu_') ? key : uid('pu'), bonNumber: String(first['N Bon'] || '').trim() || nextPurchaseBonNumber(), date: excelDate(first['Date opération ISO'] || first.Date), supplierId: findSupplierByImport(first['Code fournisseur'], first.Fournisseur)?.id || null, items, total: items.reduce((sum,it) => sum + it.qty * it.unitCost, 0), note: String(first.Note || 'Import depuis classeur Excel') };
      }).filter(pu => pu.items.length);
    } else {
      state.purchases = purchaseItems.length ? [{ id: uid('pu'), bonNumber: nextPurchaseBonNumber(), date: new Date().toISOString(), supplierId: null, items: purchaseItems, total: purchaseItems.reduce((s, it) => s + it.qty * it.unitCost, 0), note: 'Import depuis classeur Excel' }] : [];
    }
    const saveResults = await Promise.all([saveProducts(), saveClients(), savePurchases()]);
    if (saveResults.some(result => result === null)) throw new Error('Échec d’écriture des données importées');
    await logOperation('Import Excel', `${newProducts.length} produit(s), ${newClients.length} client(s)`);
    toast('Classeur Excel importé avec succès');
    render();
  } catch (e) {
    console.error(e);
    toast("Impossible de lire ce classeur Excel.");
  }
}

/* ---------------- Vider le stockage du site ---------------- */
function renderClearStorageModal() {
  return `
  <div class="modal-overlay" role="dialog" aria-modal="true" id="clearStorageModalOverlay">
    <div class="modal">
      <h2>Vider le stockage du site</h2>
      <p class="muted" style="font-size:13px;line-height:1.5;margin-bottom:16px;">
        Cette action est <strong>irréversible</strong>. Choisissez précisément ce que vous souhaitez supprimer :
      </p>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <button class="btn btn-danger" id="clearPurchasesStockBtn" style="justify-content:flex-start;text-align:left;width:100%;">
          Supprimer les achats &amp; remettre le stock à zéro
        </button>
        <button class="btn btn-danger" id="clearSalesBtn" style="justify-content:flex-start;text-align:left;width:100%;">
          Supprimer les ventes &amp; paiements
        </button>
        <button class="btn btn-danger" id="clearAllStorageBtn" style="justify-content:flex-start;text-align:left;width:100%;">
          Tout vider (produits, stock, achats, ventes, clients, fournisseurs, utilisateurs...)
        </button>
      </div>
      <div class="modal-actions" style="margin-top:18px;">
        <button class="btn" id="cancelClearStorageModal">Annuler</button>
      </div>
    </div>
  </div>`;
}

async function clearPurchasesAndStock() {
  if (!confirmLocalized('Supprimer tous les achats et remettre le stock de tous les produits à zéro ? Cette action est irréversible.')) return;
  state.purchases = [];
  await savePurchases();
  await logOperation('Réinitialisation', 'Achats et stock supprimés');
  state.showClearStorageModal = false;
  toast('Achats et stock supprimés');
  render();
}

async function clearSalesAndPayments() {
  if (!confirmLocalized('Supprimer toutes les ventes et tous les paiements ? Cette action est irréversible.')) return;
  state.sales = [];
  state.payments = [];
  state.invoices = [];
  await Promise.all([saveSales(), savePayments(), saveInvoices()]);
  await logOperation('Réinitialisation', 'Ventes, paiements et factures supprimés');
  state.showClearStorageModal = false;
  toast('Ventes et paiements supprimés');
  render();
}

async function clearAllStorage() {
  if (!confirmLocalized('Vider TOUT le stockage du site (produits, stock, achats, ventes, clients, fournisseurs, utilisateurs, historique...) ? Cette action est irréversible et la page va se recharger.')) return;
  const keys = ['shop:capital-amount', 'shop:products', 'shop:clients', 'shop:sales', 'shop:users', 'shop:payments', 'shop:oplog',
    'shop:suppliers', 'shop:purchases', 'shop:invoices', 'shop:equipment-purchases', 'shop:expenses', 'shop:services', 'shop:service-categories', 'shop:recharge-accounts', 'shop:recharge-margin-rate', 'shop:generated-documents', 'shop:session', 'shop:theme-pref'];
  for (const key of keys) {
    const shared = (key === 'shop:session' || key === 'shop:theme-pref') ? false : true;
    try { await safeDelete(key, shared); } catch (e) { /* ignore */ }
  }
  // Best-effort: also drop the whole local IndexedDB database and any
  // legacy localStorage keys, in case some data was written outside the
  // key list above (e.g. by an older version of the app).
  try {
    if (typeof indexedDB !== 'undefined' && indexedDB.deleteDatabase) {
      idbOpenPromise = null;
      indexedDB.deleteDatabase(IDB_NAME);
    }
  } catch (e) { /* ignore */ }
  try {
    Object.keys(localStorage).forEach(k => { if (k.startsWith(LOCAL_STORAGE_PREFIX)) localStorage.removeItem(k); });
  } catch (e) { /* ignore */ }
  toast('Stockage vidé — rechargement…');
  setTimeout(() => location.reload(), 400);
}

/* ---------------- Events ---------------- */
const inputDebounceTimers = Object.create(null);
function bindDebouncedInput(element, key, handler, delay = 180) {
  if (!element) return;
  const eventName = 'input';
  const marker = `psBound${eventName.charAt(0).toUpperCase()}${eventName.slice(1)}${key}`;
  if (element.dataset[marker] === '1') return;
  element.dataset[marker] = '1';
  element.addEventListener(eventName, event => {
    clearTimeout(inputDebounceTimers[key]);
    inputDebounceTimers[key] = setTimeout(() => handler(event), delay);
  });
}
function bindOnce(element, eventName, handler) {
  if (!element) return;
  const marker = `psBound${eventName.charAt(0).toUpperCase()}${eventName.slice(1)}`;
  if (element.dataset[marker] === '1') return;
  element.dataset[marker] = '1';
  element.addEventListener(eventName, handler);
}
function bindGlobalDelegatedEvents() {
  if (window.__phoneStockDelegationBound) return;
  window.__phoneStockDelegationBound = true;
  document.addEventListener('click', event => {
    const target = event.target.closest('[data-nav], [data-sort-target], [data-history-tab], [data-purchases-tab], [data-dashboard-chart], [data-history-page], #generatePurchaseFromSalesBtn, .report-section-menu a, .report-back-to-menu');
    if (!target) return;
    if (target.id === 'generatePurchaseFromSalesBtn') { event.preventDefault(); openPurchaseFromSales(); return; }
    if (target.matches('.report-section-menu a, .report-back-to-menu')) {
      event.preventDefault();
      document.getElementById(String(target.getAttribute('href') || '').replace(/^#/, ''))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    if (target.dataset.nav) { setView(target.dataset.nav); return; }
    if (target.dataset.sortTarget) {
      const stateKeys = { products: 'productSort', stock: 'stockSort', purchases: 'purchaseSort', suppliers: 'supplierSort', clients: 'clientSort' };
      const stateKey = stateKeys[target.dataset.sortTarget];
      if (!stateKey) return;
      const key = target.dataset.sortKey; const current = state[stateKey] || { key, dir: 'asc' };
      state[stateKey] = { key, dir: current.key === key && current.dir === 'asc' ? 'desc' : 'asc' };
      refreshContent(); return;
    }
    if (target.dataset.historyTab) { state.historyTab = target.dataset.historyTab; refreshContent(); return; }
    if (target.dataset.purchasesTab) { state.purchasesTab = target.dataset.purchasesTab; refreshContent(); return; }
    if (target.dataset.dashboardChart) { state.dashboardChartMetric = target.dataset.dashboardChart; refreshContent(); }
    if (target.dataset.historyPage === 'sales') { state.historySalesPage = Math.max(1, (Number(state.historySalesPage) || 1) + (target.dataset.pageDirection === 'next' ? 1 : -1)); refreshContent(); return; }
    if (target.dataset.historyPage === 'purchases') { state.historyPurchasesPage = Math.max(1, (Number(state.historyPurchasesPage) || 1) + (target.dataset.pageDirection === 'next' ? 1 : -1)); refreshContent(); }
  });
  document.addEventListener('change', event => {
    const target = event.target;
    if (target.matches('[data-report-section-toggle]')) { state.reportFilters.sections[target.dataset.reportSectionToggle] = target.checked; persistReportFilters(); refreshContent(); return; }
    if (target.id === 'includeEquipmentInPurchaseBons') { state.reportFilters.includeEquipmentInPurchaseBons = target.checked; persistReportFilters(); refreshContent(); return; }
    const categoryKey = target.dataset.reportExcludeSale ? 'excludeSaleCategories' : target.dataset.reportExcludePurchase ? 'excludePurchaseCategories' : target.dataset.reportExcludeSupplier ? 'excludePurchaseSuppliers' : null;
    const categoryValue = target.dataset.reportExcludeSale || target.dataset.reportExcludePurchase || target.dataset.reportExcludeSupplier;
    if (categoryKey && categoryValue) { const values = new Set(state.reportFilters[categoryKey] || []); target.checked ? values.add(categoryValue) : values.delete(categoryValue); state.reportFilters[categoryKey] = [...values]; persistReportFilters(); refreshContent(); }
  });
}
function bindModuleExcelEvents() {
  const bind = (buttonId, exporter) => {
    const button = document.getElementById(buttonId);
    bindOnce(button, 'click', async () => { try { await ensureXlsxLoaded(); exporter(); } catch (e) { toast('Bibliothèque Excel indisponible.'); } });
  };
  bind('exportProductsBtn', exportProductsXLSX);
  bind('exportStockBtn', exportStockXLSX);
  bind('exportPurchasesBtn', exportPurchasesXLSX);
  bind('exportClientsBtn', exportClientsXLSX);
  bind('exportHistoryBtn', exportHistoryXLSX);
  bind('exportServicesBtn', exportServicesXLSX); bind('exportEquipementsBtn', () => exportFinanceModuleXLSX('equipment')); bind('exportDepensesBtn', () => exportFinanceModuleXLSX('expense')); bind('exportRechargesBtn', exportRechargesXLSX);
  const importOnly = (buttonId, inputId, importer) => {
    const button = document.getElementById(buttonId); const input = document.getElementById(inputId);
    if (button && input) { bindOnce(button, 'click', () => { input.value = ''; input.click(); }); bindOnce(input, 'change', async e => { const file = e.target.files && e.target.files[0]; if (file) { try { await ensureXlsxLoaded(); await importer(file); } catch (error) { toast('Bibliothèque Excel indisponible.'); } } }); }
  };
  importOnly('importProductsBtn', 'productsExcelFile', importProductsXLSX);
  importOnly('importStockBtn', 'stockExcelFile', importStockXLSX);
  importOnly('importPurchasesBtn', 'purchasesExcelFile', importPurchasesXLSX);
  importOnly('importClientsBtn', 'clientsExcelFile', importClientsXLSX);
  importOnly('importHistoryBtn', 'historyExcelFile', importHistoryXLSX);
  importOnly('importServicesBtn', 'importServicesFile', importServicesXLSX); importOnly('importEquipementsBtn', 'importEquipementsFile', file => importFinanceModuleXLSX('equipment', file)); importOnly('importDepensesBtn', 'importDepensesFile', file => importFinanceModuleXLSX('expense', file)); importOnly('importRechargesBtn', 'importRechargesFile', importRechargesXLSX);
}
function closeTopModal() {
  if (scannerContext) { closeScanner(); return; }
  if (state.categoryManagerOpen) { state.categoryManagerOpen = false; state.categoryManagerType = null; }
  else if (state.receiptSale) state.receiptSale = null;
  else if (state.editingSale) state.editingSale = null;
  else if (state.bulkSaleModalOpen) resetBulkSaleDraft();
  else if (state.bulkExpenseModalOpen) { state.bulkExpenseModalOpen = false; state.bulkExpenseLines = null; }
  else if (state.bulkEquipmentModalOpen) { state.bulkEquipmentModalOpen = false; state.bulkEquipmentLines = null; }
  else if (state.invoiceDraft !== null) state.invoiceDraft = null;
  else if (state.editingProduct) { state.editingProduct = null; state.productPhotoDraft = undefined; }
  else if (state.bulkProductModalOpen) { state.bulkProductModalOpen = false; state.bulkProductLines = null; state.bulkPurchaseSupplierId=''; state.bulkPurchaseDate=''; state.bulkPurchaseTime=''; state.bulkPurchaseBonNumber=''; }
  else if (state.editingClient) state.editingClient = null;
  else if (state.editingUser) state.editingUser = null;
  else if (state.editingPayment || state.paymentClientId) { state.editingPayment = null; state.paymentClientId = null; }
  else if (state.editingSupplier) state.editingSupplier = null;
  else if (state.editingPurchase) { state.editingPurchase = null; state.purchaseDraftLines = null; state.purchaseDraftTime = ''; }
  else if (state.editingService) state.editingService = null;
  else if (state.rechargeAccountModalOpen) state.rechargeAccountModalOpen = false;
  else if (state.rechargeDepositModalOpen) state.rechargeDepositModalOpen = false;
  else if (state.rechargeSaleModalOpen) state.rechargeSaleModalOpen = false;
  else if (state.showClearStorageModal) state.showClearStorageModal = false;
  else return;
  render();
}
function bindModalCloseButtons() {
  document.querySelectorAll('.modal-overlay .modal').forEach(modal => {
    if (modal.querySelector('[data-close-modal]')) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'modal-close icon-btn';
    button.setAttribute('data-close-modal', '');
    button.setAttribute('aria-label', 'Fermer la fenêtre');
    button.title = 'Fermer';
    button.innerHTML = ICONS.close;
    modal.prepend(button);
    button.addEventListener('click', closeTopModal);
  });
}
function bindEvents() {
  bindGlobalDelegatedEvents();
  const rechargeSearch = document.getElementById('rechargeAccountSearch'); bindDebouncedInput(rechargeSearch, 'rechargeAccountSearch', e => { state.rechargeAccountSearch=e.target.value; refreshContent(); });
  const addRechargeAccountBtn = document.getElementById('addRechargeAccountBtn'); if(addRechargeAccountBtn) addRechargeAccountBtn.addEventListener('click',()=>{state.rechargeAccountModalOpen=true;render();});
  const cancelRechargeAccount=document.getElementById('cancelRechargeAccount'); if(cancelRechargeAccount) cancelRechargeAccount.addEventListener('click',()=>{state.rechargeAccountModalOpen=false;render();});
  const saveRechargeAccount=document.getElementById('saveRechargeAccount'); if(saveRechargeAccount) saveRechargeAccount.addEventListener('click',async()=>{const name=document.getElementById('recharge_account_name').value.trim();if(!name){toast('Le nom du compte est requis');return;}const account={id:uid('ra'),name,type:document.getElementById('recharge_account_type').value,provider:document.getElementById('recharge_account_provider').value.trim(),note:document.getElementById('recharge_account_note').value.trim(),balance:0,deposits:[]};state.rechargeAccounts.push(account);if(await saveRechargeAccounts()===null){state.rechargeAccounts=state.rechargeAccounts.filter(a=>a.id!==account.id);toast('Échec de sauvegarde');return;}state.rechargeAccountModalOpen=false;await logOperation('Création compte rechargeable',name);render();});
  document.querySelectorAll('[data-delete-recharge]').forEach(el=>el.addEventListener('click',async()=>{const a=state.rechargeAccounts.find(x=>x.id===el.dataset.deleteRecharge);if(!a)return;if(state.sales.some(s=>s.rechargeAccountId===a.id)){toast('Ce compte est lié à une vente et ne peut pas être supprimé');return;}if(!confirmLocalized(`Supprimer le compte « ${a.name} » ?`))return;state.rechargeAccounts=state.rechargeAccounts.filter(x=>x.id!==a.id);await saveRechargeAccounts();render();}));
  document.querySelectorAll('[data-deposit-recharge]').forEach(el=>el.addEventListener('click',()=>{state.rechargeDepositModalOpen={accountId:el.dataset.depositRecharge};render();}));
  document.querySelectorAll('[data-edit-recharge-deposit]').forEach(el=>el.addEventListener('click',()=>{const [accountId,depositId]=el.dataset.editRechargeDeposit.split(':');const a=state.rechargeAccounts.find(x=>x.id===accountId);if(a&&(a.deposits||[]).some(x=>x.id===depositId)){state.rechargeDepositModalOpen={accountId,depositId};render();}}));
  document.querySelectorAll('[data-delete-recharge-deposit]').forEach(el=>el.addEventListener('click',async()=>{const [accountId,depositId]=el.dataset.deleteRechargeDeposit.split(':');const a=state.rechargeAccounts.find(x=>x.id===accountId);const index=a?.deposits?.findIndex(x=>x.id===depositId) ?? -1;const deposit=index>=0?a.deposits[index]:null;if(!a||!deposit)return;if(!confirmLocalized(`Supprimer la recharge de ${money(deposit.amount)} DH du compte « ${a.name} » ?`))return;if(rechargeBalance(a)<(Number(deposit.amount)||0)){toast('Cette recharge a déjà été utilisée et ne peut pas être supprimée');return;}const previous=JSON.parse(JSON.stringify(a));a.balance=rechargeBalance(a)-(Number(deposit.amount)||0);a.deposits.splice(index,1);if(a.lastDeposit?.id===deposit.id)a.lastDeposit=a.deposits[a.deposits.length-1]||null;if(await saveRechargeAccounts()===null){Object.assign(a,previous);toast('Échec de sauvegarde');return;}await logOperation('Suppression recharge de compte',`${a.name} · ${money(deposit.amount)} DH`);render();}));
  const cancelRechargeDeposit=document.getElementById('cancelRechargeDeposit');if(cancelRechargeDeposit)cancelRechargeDeposit.addEventListener('click',()=>{state.rechargeDepositModalOpen=false;render();});
  const saveRechargeDeposit=document.getElementById('saveRechargeDeposit');if(saveRechargeDeposit)saveRechargeDeposit.addEventListener('click',async()=>{const d=state.rechargeDepositModalOpen,a=state.rechargeAccounts.find(x=>x.id===d?.accountId),amount=Number.parseFloat(document.getElementById('recharge_deposit_amount').value);if(!a||!(validNonNegativeNumber(amount)&&amount>0)){toast('Saisissez un montant positif');return;}const date=document.getElementById('recharge_deposit_date').value,note=document.getElementById('recharge_deposit_note').value.trim();if(d.depositId){const deposit=(a.deposits||[]).find(x=>x.id===d.depositId);if(!deposit){toast('Recharge introuvable');return;}const oldAmount=Number(deposit.amount)||0;if(rechargeBalance(a)-oldAmount+amount<0){toast('Le nouveau montant dépasse le solde déjà disponible');return;}const previous=JSON.parse(JSON.stringify(a));a.balance=rechargeBalance(a)-oldAmount+amount;Object.assign(deposit,{amount,date,note});a.lastDeposit=a.lastDeposit?.id===deposit.id?deposit:a.lastDeposit;if(await saveRechargeAccounts()===null){Object.assign(a,previous);toast('Échec de sauvegarde');return;}state.rechargeDepositModalOpen=false;await logOperation('Modification recharge de compte',`${a.name} · ${money(amount)} DH`);render();return;}a.balance=rechargeBalance(a)+amount;const deposit={id:uid('rd'),amount,date,note};a.deposits=[...(a.deposits||[]),deposit];a.lastDeposit=deposit;if(await saveRechargeAccounts()===null){a.balance-=amount;toast('Échec de sauvegarde');return;}state.rechargeDepositModalOpen=false;await logOperation('Recharge de compte',`${a.name} · ${money(amount)} DH`);render();});
  document.querySelectorAll('[data-sell-recharge]').forEach(el=>el.addEventListener('click',()=>{state.rechargeSaleModalOpen={accountId:el.dataset.sellRecharge,note:''};render();}));
  const cancelRechargeSale=document.getElementById('cancelRechargeSale');if(cancelRechargeSale)cancelRechargeSale.addEventListener('click',()=>{state.rechargeSaleModalOpen=false;render();});
  const rechargeSaleAmount=document.getElementById('recharge_sale_amount');if(rechargeSaleAmount){rechargeSaleAmount.addEventListener('input',refreshRechargeSaleMargin);refreshRechargeSaleMargin();}
  const saveRechargeSale=document.getElementById('saveRechargeSale');if(saveRechargeSale)saveRechargeSale.addEventListener('click',async()=>{const d=state.rechargeSaleModalOpen,a=state.rechargeAccounts.find(x=>x.id===d?.accountId),amount=Number.parseFloat(rechargeSaleAmount?.value);if(!a||!(validNonNegativeNumber(amount)&&amount>0)){toast('Saisissez un montant positif');return;}const date=localIsoFromParts(document.getElementById('recharge_sale_date').value,document.getElementById('recharge_sale_time').value),payment=document.getElementById('recharge_sale_payment').value,clientId=document.getElementById('recharge_sale_client').value||null,margin=amount*state.rechargeMarginRate/100;if(d?.editSaleId){const sale=state.sales.find(item=>item.id===d.editSaleId),item=sale?.items?.find(value=>value.isRecharge);if(!sale||!item){toast('Vente introuvable');return;}const oldAmount=Number(item.price)||0;if(a.id!==item.rechargeAccountId&&amount>rechargeBalance(a)){toast('Vente impossible : le montant dépasse le solde disponible');return;}const oldAccount=state.rechargeAccounts.find(x=>x.id===item.rechargeAccountId);if(oldAccount)oldAccount.balance=rechargeBalance(oldAccount)+oldAmount;if(amount>rechargeBalance(a)){if(oldAccount)oldAccount.balance-=oldAmount;toast('Vente impossible : le montant dépasse le solde disponible');return;}a.balance=rechargeBalance(a)-amount;Object.assign(item,{rechargeAccountId:a.id,name:`Recharge — ${a.name}`,price:amount,unitCost:amount-margin,rechargeAmount:amount,rechargeMargin:margin});Object.assign(sale,{date,total:amount,subtotal:amount,payment,clientId,paidAmount:amount,rechargeAccountId:a.id,rechargeAmount:amount,rechargeMargin:margin});const results=await Promise.all([saveRechargeAccounts(),saveSales()]);if(results.some(x=>x===null)){toast('Échec de modification de la vente');return;}state.rechargeSaleModalOpen=false;await logOperation('Modification vente de recharge',`Bon N°${sale.number||'—'} · ${money(amount)} DH`);render();toast('Vente de recharge modifiée');return;}if(amount>rechargeBalance(a)){toast('Vente impossible : le montant dépasse le solde disponible');return;}const u=currentUser();const sale={id:uid('s'),number:nextSaleNumber(),date,items:[{isRecharge:true,rechargeAccountId:a.id,name:`Recharge — ${a.name}`,category:'Recharges',qty:1,price:amount,unitCost:amount-margin,rechargeAmount:amount,rechargeMargin:margin}],subtotal:amount,discount:0,total:amount,payment,clientId,paidAmount:amount,sellerId:u?.id||null,sellerName:u?(u.name||u.username):'—',rechargeAccountId:a.id,rechargeAmount:amount,rechargeMargin:margin};a.balance=rechargeBalance(a)-amount;state.sales.push(sale);const results=await Promise.all([saveRechargeAccounts(),saveSales()]);if(results.some(x=>x===null)){state.sales=state.sales.filter(x=>x.id!==sale.id);a.balance+=amount;toast('Échec de sauvegarde : vente annulée');return;}state.rechargeSaleModalOpen=false;await logOperation('Vente de recharge',`Bon N°${sale.number} · ${a.name} · ${money(amount)} DH · marge ${money(margin)} DH`);state.receiptSale=sale;render();toast(`Recharge vendue · solde restant ${money(a.balance)} DH`);});
  const serviceSearch = document.getElementById('serviceSearch');
  bindDebouncedInput(serviceSearch, 'serviceSearch', e => { state.serviceSearch = e.target.value; refreshContent(); });
  const serviceCategoryFilter = document.getElementById('serviceCategoryFilter'); if (serviceCategoryFilter) serviceCategoryFilter.addEventListener('change', e => { state.serviceCategoryFilter = e.target.value; refreshContent(); });
  const clearServiceFilters = document.getElementById('clearServiceFilters'); if (clearServiceFilters) clearServiceFilters.addEventListener('click', () => { state.serviceSearch = ''; state.serviceCategoryFilter = ''; refreshContent(); });
  const addServiceBtn = document.getElementById('addServiceBtn');
  if (addServiceBtn) addServiceBtn.addEventListener('click', () => { state.editingService = 'new'; render(); });
  const cancelServiceModal = document.getElementById('cancelServiceModal');
  if (cancelServiceModal) cancelServiceModal.addEventListener('click', () => { state.editingService = null; render(); });
  const saveServiceModal = document.getElementById('saveServiceModal');
  if (saveServiceModal) saveServiceModal.addEventListener('click', async () => {
    const name = document.getElementById('service_name')?.value.trim(); const price = Number.parseFloat(document.getElementById('service_price')?.value); const cost = Number.parseFloat(document.getElementById('service_cost')?.value || 0);
    if (!name || !validNonNegativeNumber(price) || !validNonNegativeNumber(cost)) { toast('Nom, prix et coût valides requis'); return; }
    const data = { name, category: document.getElementById('service_category').value, price, cost, description: document.getElementById('service_description').value.trim() };
    if (state.editingService === 'new') state.services.push({ id: uid('svc'), ...data }); else Object.assign(state.editingService, data);
    if (await saveServices() === null) { toast('Échec de sauvegarde du service'); return; }
    await logOperation(state.editingService === 'new' ? 'Ajout service' : 'Modification service', name); state.editingService = null; toast('Service enregistré'); render();
  });
  document.querySelectorAll('[data-edit-service]').forEach(el => el.addEventListener('click', () => { state.editingService = state.services.find(s => s.id === el.dataset.editService); render(); }));
  document.querySelectorAll('[data-delete-service]').forEach(el => el.addEventListener('click', async () => { const service = state.services.find(s => s.id === el.dataset.deleteService); if (!service) return; if (state.sales.some(s => (s.items || []).some(i => i.serviceId === service.id))) { toast('Ce service est lié à une vente et ne peut pas être supprimé'); return; } if (!confirmLocalized(`Supprimer le service « ${service.name} » ?`)) return; state.services = state.services.filter(s => s.id !== service.id); await saveServices(); await logOperation('Suppression service', service.name); render(); }));
  document.querySelectorAll('[data-sell-service]').forEach(el => el.addEventListener('click', () => { const service = state.services.find(s => s.id === el.dataset.sellService); if (service) { state.serviceSaleModalOpen = { serviceId: service.id, price: service.price, clientId: '', payment: 'Espèces', date: localDateInputValue(), time: localTimeInputValue(), note: service.description || '' }; render(); } }));
  const cancelServiceSale = document.getElementById('cancelServiceSale'); if (cancelServiceSale) cancelServiceSale.addEventListener('click', () => { state.serviceSaleModalOpen = false; render(); });
  const saveServiceSale = document.getElementById('saveServiceSale'); if (saveServiceSale) saveServiceSale.addEventListener('click', async () => {
    const d = state.serviceSaleModalOpen; const service = state.services.find(s => s.id === d?.serviceId); const price = Number.parseFloat(document.getElementById('service_sale_price')?.value); if (!service || !validNonNegativeNumber(price)) { toast('Prix de vente invalide'); return; }
    const date = localIsoFromParts(document.getElementById('service_sale_date').value, document.getElementById('service_sale_time').value); const payment = document.getElementById('service_sale_payment').value; const clientId = document.getElementById('service_sale_client').value || null; const note = document.getElementById('service_sale_note').value.trim();
    if (d?.editSaleId) {
      const sale = state.sales.find(item => item.id === d.editSaleId); const item = sale?.items?.find(value => value.isService || value.serviceId === service.id); if (!sale || !item) { toast('Vente introuvable'); return; }
      Object.assign(item, { serviceId: service.id, isService: true, name: service.name, category: service.category, qty: 1, price, unitCost: Number(service.cost) || 0, description: note }); Object.assign(sale, { date, total: price, subtotal: price, payment, clientId, paidAmount: price });
      if (await saveSales() === null) { toast('Échec de modification de la vente'); return; }
      await logOperation('Modification vente de service', `Bon N°${sale.number || '—'} · ${service.name} · ${money(price)} DH`); state.serviceSaleModalOpen = false; render(); toast('Vente de service modifiée'); return;
    }
    const u = currentUser(); const sale = { id: uid('s'), number: nextSaleNumber(), date, items: [{ serviceId: service.id, isService: true, name: service.name, category: service.category, qty: 1, price, unitCost: Number(service.cost) || 0, description: note }], subtotal: price, discount: 0, total: price, payment, clientId, paidAmount: price, sellerId: u ? u.id : null, sellerName: u ? (u.name || u.username) : '—' };
    state.sales.push(sale); const result = await saveSales(); if (result === null) { state.sales = state.sales.filter(s => s.id !== sale.id); toast('Échec de sauvegarde de la vente'); return; }
    await logOperation('Vente de service enregistrée', `Bon N°${sale.number} · ${service.name} · ${money(price)} DH`); state.serviceSaleModalOpen = false; state.receiptSale = sale; render(); toast(`Service vendu · ${money(price)} DH`);
  });

  bindInputGuards();
  bindModalCloseButtons();
  bindModuleExcelEvents();
  const menuToggle = document.getElementById('menuToggle');
  bindOnce(menuToggle, 'click', (e) => { e.stopPropagation(); state.sidebarOpen = !state.sidebarOpen; render(); });
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');
  bindOnce(sidebarBackdrop, 'click', () => { state.sidebarOpen = false; render(); });
  const themeToggle = document.getElementById('themeToggle');
  bindOnce(themeToggle, 'click', toggleTheme);
  const logoutBtn = document.getElementById('logoutBtn');
  bindOnce(logoutBtn, 'click', logout);

  /* Products */
  const addProductBtn = document.getElementById('addProductBtn');
  bindOnce(addProductBtn, 'click', () => { state.editingProduct = 'new'; state.productPhotoDraft = null; render(); });
  const bulkProductsBtn = document.getElementById('bulkProductsBtn');
  bindOnce(bulkProductsBtn, 'click', () => { state.bulkProductModalOpen=true; state.bulkProductLines=[{id:uid('bp'),name:'',brand:'',model:'',category:'Accessoires',sku:'',qty:'',cost:'',sell:'',asEquipment:false}]; state.bulkPurchaseSupplierId=''; state.bulkPurchaseDate=localDateInputValue(); state.bulkPurchaseTime=localTimeInputValue(); state.bulkPurchaseBonNumber=''; render(); });
  const syncBulkMeta = () => { state.bulkPurchaseSupplierId=document.getElementById('bulk_supplier')?.value||''; state.bulkPurchaseDate=document.getElementById('bulk_date')?.value||localDateInputValue(); state.bulkPurchaseTime=document.getElementById('bulk_time')?.value||localTimeInputValue(); state.bulkPurchaseBonNumber=document.getElementById('bulk_bon')?.value.trim()||''; };
  const syncBulkLines = () => { (state.bulkProductLines||[]).forEach(line => document.querySelectorAll(`[data-line="${line.id}"][data-bulk]`).forEach(el => { line[el.dataset.bulk] = el.type === 'checkbox' ? el.checked : el.value; })); updateBulkProductSummary(); };
  document.querySelectorAll('[data-bulk]').forEach(el => { el.addEventListener('input', syncBulkLines); el.addEventListener('change', syncBulkLines); });
  document.querySelectorAll('[data-bulk-add-category]').forEach(el => el.addEventListener('click', () => {
    const manager = document.getElementById('bulkCategoryManager');
    if (!manager) return;
    state.bulkCategoryLineId = el.dataset.bulkAddCategory;
    manager.hidden = !manager.hidden;
    if (!manager.hidden) {
      const modal = document.querySelector('#bulkProductModalOverlay .modal');
      if (modal) {
        const buttonRect = el.getBoundingClientRect(); const modalRect = modal.getBoundingClientRect();
        manager.style.left = `${Math.max(8, buttonRect.left - modalRect.left)}px`;
        manager.style.top = `${buttonRect.bottom - modalRect.top + 8}px`;
        requestAnimationFrame(() => { const maxLeft = modal.clientWidth - manager.offsetWidth - 8; manager.style.left = `${Math.max(8, Math.min(parseFloat(manager.style.left) || 8, maxLeft))}px`; });
      }
      document.getElementById('bulkCategoryName')?.focus();
    }
  }));
  const bulkSaveCategoryBtn = document.getElementById('bulkSaveCategoryBtn');
  const bulkCloseCategoryBtn = document.getElementById('bulkCloseCategoryBtn');
  if (bulkCloseCategoryBtn) bulkCloseCategoryBtn.addEventListener('click', () => { const manager = document.getElementById('bulkCategoryManager'); if (manager) manager.hidden = true; });
  if (bulkSaveCategoryBtn) bulkSaveCategoryBtn.addEventListener('click', async () => {
    const input = document.getElementById('bulkCategoryName'); const name = input?.value.trim() || '';
    if (!name || name.length < 2) { toast('Saisissez un nom de catégorie valide'); return; }
    if (getCategories().some(category => category.toLowerCase() === name.toLowerCase())) { toast('Cette catégorie existe déjà'); return; }
    state.categories.push(name);
    if (await saveCategories() === null) { state.categories = state.categories.filter(category => category !== name); toast('Échec de sauvegarde de la catégorie'); return; }
    document.querySelectorAll('[data-bulk=category]').forEach(select => { select.add(new Option(name, name)); [...select.options].sort((a, b) => a.text.localeCompare(b.text, 'fr')).forEach(option => select.appendChild(option)); });
    const targetLine = (state.bulkProductLines || []).find(line => line.id === state.bulkCategoryLineId);
    if (targetLine) {
      targetLine.category = name;
      const targetSelect = document.querySelector(`[data-bulk="category"][data-line="${targetLine.id}"]`);
      if (targetSelect) targetSelect.value = name;
    }
    if (input) input.value = '';
    const list = document.getElementById('bulkCategoryList'); if (list) list.innerHTML = renderBulkCategoryManager();
    const manager = document.getElementById('bulkCategoryManager'); if (manager) manager.hidden = true;
    await logOperation('Ajout catégorie', name);
    toast('Catégorie ajoutée');
  });
  document.querySelectorAll('[data-bulk-delete-category]').forEach(el => el.addEventListener('click', async () => {
    const name = el.dataset.bulkDeleteCategory;
    if (state.products.some(product => product.category === name)) { toast('Impossible de supprimer une catégorie utilisée par un produit'); return; }
    if (getCategories().length <= 1) { toast('Conservez au moins une catégorie'); return; }
    if (!confirmLocalized(`Supprimer la catégorie « ${name} » ?`)) return;
    const previousCategories = [...state.categories]; state.categories = state.categories.filter(category => category !== name);
    if (await saveCategories() === null) { state.categories = previousCategories; toast('Échec de suppression de la catégorie'); return; }
    document.querySelectorAll('[data-bulk=category]').forEach(select => { const option = [...select.options].find(item => item.value === name); if (option) option.remove(); if (!select.value) select.value = getCategories()[0] || ''; });
    (state.bulkProductLines || []).forEach(line => { if (line.category === name) line.category = getCategories()[0] || ''; });
    const list = document.getElementById('bulkCategoryList'); if (list) list.innerHTML = renderBulkCategoryManager();
    await logOperation('Suppression catégorie', name); toast('Catégorie supprimée');
  }));
  document.querySelectorAll('[data-bulk-scan-code]').forEach(el => el.addEventListener('click', () => { syncBulkLines(); state.bulkProductScanLineId = el.dataset.bulkScanCode; openScanner('bulk-product'); }));
  ['bulk_supplier','bulk_date','bulk_time','bulk_bon'].forEach(id => { const el=document.getElementById(id); if(el) el.addEventListener('input',syncBulkMeta); });
  const addBulkProductLine = document.getElementById('addBulkProductLine');
  if (addBulkProductLine) addBulkProductLine.addEventListener('click', () => { syncBulkLines(); syncBulkMeta(); state.bulkProductLines.push({id:uid('bp'),name:'',brand:'',model:'',category:'Accessoires',sku:'',qty:'',cost:'',sell:'',asEquipment:false}); render(); });
  document.querySelectorAll('[data-remove-bulk]').forEach(el => el.addEventListener('click', () => { syncBulkLines(); syncBulkMeta(); if(state.bulkProductLines.length>1) state.bulkProductLines=state.bulkProductLines.filter(l=>l.id!==el.dataset.removeBulk); render(); }));
  const cancelBulkProductModal = document.getElementById('cancelBulkProductModal'); if(cancelBulkProductModal) cancelBulkProductModal.addEventListener('click',()=>{state.bulkProductModalOpen=false;state.bulkProductLines=null;render();});
  const saveBulkProductsModal = document.getElementById('saveBulkProductsModal');
  if (saveBulkProductsModal) saveBulkProductsModal.addEventListener('click', async () => { syncBulkLines(); syncBulkMeta(); const valid=state.bulkProductLines.filter(l=>String(l.name||'').trim()); if(!valid.length){toast('Ajoutez au moins un produit avec un nom');return;} const seen=new Set(state.products.map(p=>String(p.sku||'').trim().toLowerCase()).filter(Boolean)); const created=[]; const items=[]; const equipmentItems=[]; for(const l of valid){const name=String(l.name).trim(),brand=String(l.brand||'').trim(),model=String(l.model||'').trim();let sku=String(l.sku||'').trim()||generateProductCode(name,brand,model);if(seen.has(sku.toLowerCase())){toast(`Code P déjà utilisé : ${sku}`);return;}seen.add(sku.toLowerCase());const product={id:uid('p'),name,brand,model,category:l.category||'Accessoires',sku,lowStock:3,photo:null,archived:false};created.push(product);const qty=Math.max(0,parseInt(l.qty,10)||0),cost=Math.max(0,parseFloat(l.cost)||0),sell=Math.max(0,parseFloat(l.sell)||0);if(qty>0){const entry={productId:product.id,name,sku,qty,unitCost:cost,unitPrice:sell,qtyRemaining:qty}; (l.asEquipment ? equipmentItems : items).push(entry);}} const total=items.reduce((sum,it)=>sum+it.qty*it.unitCost,0); const equipmentTotal=equipmentItems.reduce((sum,it)=>sum+it.qty*it.unitCost,0); const purchase=items.length?{id:uid('pu'),bonNumber:state.bulkPurchaseBonNumber||nextPurchaseBonNumber(),date:new Date(`${state.bulkPurchaseDate}T${state.bulkPurchaseTime}:00`).toISOString(),supplierId:state.bulkPurchaseSupplierId||null,items,total,note:'Saisie en lot'}:null; const equipment=equipmentItems.map(item=>{const product=created.find(p=>p.id===item.productId);const supplier=state.suppliers.find(s=>s.id===state.bulkPurchaseSupplierId);return {id:uid('eq'),date:state.bulkPurchaseDate,name:item.name,category:product?.category||'Autre',amount:item.qty*item.unitCost,supplier:supplier?.name||'',payment:'Autre',note:'Saisie en lot enregistrée comme équipement'};}); state.products.push(...created);if(purchase)state.purchases.push(purchase);state.equipmentPurchases.push(...equipment);const results=await Promise.all([saveProducts(),savePurchases(),saveEquipmentPurchases()]);if(results.some(result=>result===null)){toast('Échec de sauvegarde de la saisie en lot');return;}await logOperation('Saisie produits en lot',`${created.length} produit(s), ${items.length} ligne(s) d’achat`);state.bulkProductModalOpen=false;state.bulkProductLines=null;state.bulkPurchaseSupplierId='';state.bulkPurchaseDate='';state.bulkPurchaseTime='';state.bulkPurchaseBonNumber='';toast(`${created.length} produit(s) ajouté(s)`);render(); });
  const scanProductBtn = document.getElementById('scanProductBtn');
  bindOnce(scanProductBtn, 'click', () => openScanner('products'));
  const scanProductCodeBtn = document.getElementById('scanProductCodeBtn');
  bindOnce(scanProductCodeBtn, 'click', () => openScanner('products'));
  const supplierSearch=document.getElementById('supplierSearch'); bindDebouncedInput(supplierSearch, 'supplierSearch', e=>{state.supplierSearch=e.target.value;refreshContent();});
  const purchaseSearch=document.getElementById('purchaseSearch'); bindDebouncedInput(purchaseSearch, 'purchaseSearch', e=>{state.purchaseSearch=e.target.value;refreshContent();});
  const pfBon = document.getElementById('pf_bon'); bindDebouncedInput(pfBon, 'purchaseBon', e=>{state.purchaseFilters.bonNumber=e.target.value;refreshContent();});
  const salesSearch=document.getElementById('salesSearch'); bindDebouncedInput(salesSearch, 'salesSearch', e=>{state.salesSearch=e.target.value;refreshContent();});
  const productSearch = document.getElementById('productSearch');
  bindDebouncedInput(productSearch, 'productSearch', e=>{ state.productSearch = e.target.value; refreshContent(); });
  const stockSearch = document.getElementById('stockSearch');
  bindDebouncedInput(stockSearch, 'stockSearch', e=>{ state.stockSearch = e.target.value; refreshContent(); });
  document.querySelectorAll('[data-edit-product]').forEach(el => el.addEventListener('click', () => {
    state.editingProduct = state.products.find(p => p.id === el.dataset.editProduct);
    state.productPhotoDraft = state.editingProduct ? (state.editingProduct.photo || null) : null;
    render();
  }));
  document.querySelectorAll('[data-toggle-archive-product]').forEach(el => el.addEventListener('click', async () => {
    if (!hasPriv('products', 'edit')) { toast('Action non autorisée'); return; }
    const p = state.products.find(pp => pp.id === el.dataset.toggleArchiveProduct);
    if (!p) return;
    p.archived = !p.archived;
    await saveProducts();
    await logOperation(p.archived ? 'Archivage produit' : 'Réactivation produit', p.name);
    render();
  }));
  document.querySelectorAll('[data-delete-product]').forEach(el => el.addEventListener('click', async () => {
    if (!hasPriv('products', 'delete')) { toast('Action non autorisée'); return; }
    const p = state.products.find(pp => pp.id === el.dataset.deleteProduct);
    if (!p) return;
    if (productHasSales(p.id) || productHasPurchases(p.id)) {
      toast('Ce produit est lié à l’historique. Archivez-le ou conservez-le au lieu de le supprimer.');
      return;
    }
    if (!confirmLocalized('Supprimer ce produit ?')) return;
    state.products = state.products.filter(p => p.id !== el.dataset.deleteProduct);
    await saveProducts(); await logOperation('Suppression produit', p ? p.name : '');
    render();
  }));
  const cancelProductModal = document.getElementById('cancelProductModal');
  if (cancelProductModal) cancelProductModal.addEventListener('click', () => { state.editingProduct = null; state.productPhotoDraft = undefined; render(); });
  const productModalOverlay = document.getElementById('productModalOverlay');
  if (productModalOverlay) bindPhotoPickerEvents();
  bindAutoProductCode();
  const inlineAddSupplierBtn = document.getElementById('inlineAddSupplierBtn');
  if (inlineAddSupplierBtn) inlineAddSupplierBtn.addEventListener('click', () => {
    state.productDraft = {
      name: document.getElementById('f_name')?.value || '', brand: document.getElementById('f_brand')?.value || '', model: document.getElementById('f_model')?.value || '',
      category: document.getElementById('f_category')?.value || 'Smartphones', sku: document.getElementById('f_sku')?.value || '', lowStock: document.getElementById('f_low')?.value || 3,
      archived: !!document.getElementById('f_archived')?.checked, stock: document.getElementById('f_stock')?.value || '0', cost: document.getElementById('f_cost')?.value || '', sell: document.getElementById('f_sell')?.value || '',
      purchaseBon: document.getElementById('f_purchase_bon')?.value || '', purchaseDate: document.getElementById('f_purchase_date')?.value || localDateInputValue(), purchaseTime: document.getElementById('f_purchase_time')?.value || localTimeInputValue(),
    };
    state.productDraftSupplierId = document.getElementById('f_supplier')?.value || '';
    state.editingSupplier = 'new';
    render();
    setTimeout(() => document.getElementById('sup_name')?.focus(), 30);
  });
  const inlineAddCategoryBtn = document.getElementById('inlineAddCategoryBtn');
  if (inlineAddCategoryBtn) inlineAddCategoryBtn.addEventListener('click', () => {
    const manager = document.getElementById('inlineCategoryManager');
    if (!manager) return;
    manager.hidden = !manager.hidden;
    if (!manager.hidden) document.getElementById('inlineCategoryName')?.focus();
  });
  const inlineCloseCategoryBtn = document.getElementById('inlineCloseCategoryBtn');
  if (inlineCloseCategoryBtn) inlineCloseCategoryBtn.addEventListener('click', () => { const manager = document.getElementById('inlineCategoryManager'); if (manager) manager.hidden = true; });
  const inlineSaveCategoryBtn = document.getElementById('inlineSaveCategoryBtn');
  if (inlineSaveCategoryBtn) inlineSaveCategoryBtn.addEventListener('click', async () => {
    if (!hasPriv('products', 'create') && !hasPriv('products', 'edit')) { toast('Action non autorisée'); return; }
    const input = document.getElementById('inlineCategoryName'); const name = input?.value.trim() || '';
    if (!name || name.length < 2) { toast('Saisissez un nom de catégorie valide'); return; }
    if (getCategories().some(category => category.toLowerCase() === name.toLowerCase())) { toast('Cette catégorie existe déjà'); return; }
    state.categories.push(name);
    const result = await saveCategories();
    if (result === null) { state.categories = state.categories.filter(category => category !== name); toast('Échec de sauvegarde de la catégorie'); return; }
    const select = document.getElementById('f_category');
    if (select) { const option = new Option(name, name, true, true); select.add(option); [...select.options].sort((a, b) => a.text.localeCompare(b.text, 'fr')).forEach(item => select.appendChild(item)); select.value = name; }
    if (input) input.value = '';
    refreshInlineCategoryManager();
    const manager = document.getElementById('inlineCategoryManager'); if (manager) manager.hidden = true;
    await logOperation('Ajout catégorie', name);
    toast('Catégorie ajoutée');
  });
  document.querySelectorAll('[data-inline-delete-category]').forEach(el => el.addEventListener('click', async () => {
    if (!hasPriv('products', 'edit') && !isAdmin()) { toast('Action non autorisée'); return; }
    const name = el.dataset.inlineDeleteCategory;
    if (state.products.some(product => product.category === name)) { toast('Impossible de supprimer une catégorie utilisée par un produit'); return; }
    if (getCategories().length <= 1) { toast('Conservez au moins une catégorie'); return; }
    if (!confirmLocalized(`Supprimer la catégorie « ${name} » ?`)) return;
    state.categories = state.categories.filter(category => category !== name);
    const result = await saveCategories();
    if (result === null) { state.categories.push(name); toast('Échec de suppression de la catégorie'); return; }
    const select = document.getElementById('f_category');
    const option = select && Array.from(select.options).find(item => item.value === name);
    if (option) option.remove();
    if (select && !select.value) select.value = getCategories()[0] || '';
    refreshInlineCategoryManager();
    await logOperation('Suppression catégorie', name);
    toast('Catégorie supprimée');
  }));
  const saveProductModal = document.getElementById('saveProductModal');
  if (saveProductModal) saveProductModal.addEventListener('click', async () => {
    const name = document.getElementById('f_name').value.trim();
    if (!name) { toast('Le nom du produit est requis'); return; }
    const isNewProduct = state.editingProduct === 'new';
    const quickAddLineId = state.purchaseQuickAddLineId;
    const brand = document.getElementById('f_brand').value.trim();
    const model = document.getElementById('f_model').value.trim();
    let sku = document.getElementById('f_sku').value.trim();
    if (!sku) sku = generateProductCode(name, brand, model);
    const duplicateSku = state.products.find(p => String(p.sku || '').trim().toLowerCase() === sku.toLowerCase() && p.id !== (isNewProduct ? null : state.editingProduct.id));
    if (duplicateSku) { toast('Ce Code P est déjà utilisé par un autre produit'); return; }
    const lowStockRaw = document.getElementById('f_low').value;
    if (!validNonNegativeNumber(lowStockRaw) || !Number.isInteger(Number(lowStockRaw))) { toast('Le seuil de stock doit être un entier positif ou nul'); return; }
    const data = {
      name, brand, model,
      category: document.getElementById('f_category').value, sku,
      lowStock: Number(lowStockRaw),
      photo: state.productPhotoDraft || null,
      archived: document.getElementById('f_archived') ? document.getElementById('f_archived').checked : !!state.editingProduct.archived,
    };
    if (isNewProduct) {
      const newProduct = { id: uid('p'), ...data };
      state.products.push(newProduct);
      toast('Produit ajouté');
      await logOperation('Ajout produit', name);
      const productSaveResult = await saveProducts();
      if (productSaveResult === null) { state.products = state.products.filter(product => product.id !== newProduct.id); toast('Échec de sauvegarde du produit'); render(); return; }
      // Auto-record the initial stock as the product's first purchase lot.
      const initQty = parseInt(document.getElementById('f_stock').value) || 0;
      const initCost = parseFloat(document.getElementById('f_cost').value) || 0;
      const initPrice = parseFloat(document.getElementById('f_sell').value) || 0;
      if (initQty > 0 && !quickAddLineId) {
        const supplierId = document.getElementById('f_supplier').value || null;
        const purchaseDateStr = document.getElementById('f_purchase_date').value || localDateInputValue();
        const purchase = {
          id: uid('pu'), date: localIsoFromParts(purchaseDateStr, document.getElementById('f_purchase_time')?.value || localTimeInputValue()), supplierId,
          bonNumber: document.getElementById('f_purchase_bon')?.value.trim() || nextPurchaseBonNumber(),
          items: [{ productId: newProduct.id, name: newProduct.name, sku: newProduct.sku, qty: initQty, unitCost: initCost, unitPrice: initPrice, qtyRemaining: initQty }],
          total: initQty * initCost, note: 'Stock initial à la création du produit',
        };
        const sup = state.suppliers.find(s => s.id === supplierId);
        if (document.getElementById('f_as_equipment')?.checked) {
          const equipment = { id: uid('eq'), date: purchaseDateStr, name: newProduct.name, category: newProduct.category || 'Autre', amount: initQty * initCost, supplier: sup?.name || '', payment: 'Autre', note: 'Stock initial enregistré comme équipement', source: { type: 'initial-product', quantity: initQty, unitCost: initCost } };
          state.equipmentPurchases.push(equipment);
          if (await saveEquipmentPurchases() === null) { state.equipmentPurchases = state.equipmentPurchases.filter(item => item.id !== equipment.id); state.products = state.products.filter(product => product.id !== newProduct.id); await saveProducts(); toast('Échec de sauvegarde de l’équipement : le produit n’a pas été conservé'); render(); return; }
          await logOperation('Équipement enregistré (stock initial)', `${money(equipment.amount)} DH · ${newProduct.name}${sup ? ' · ' + sup.name : ''}`);
        } else {
          state.purchases.push(purchase);
          const purchaseSaveResult = await savePurchases();
          if (purchaseSaveResult === null) { state.purchases = state.purchases.filter(item => item.id !== purchase.id); state.products = state.products.filter(product => product.id !== newProduct.id); await saveProducts(); toast('Échec de sauvegarde du stock initial : le produit n’a pas été conservé'); render(); return; }
          await logOperation('Achat enregistré (auto)', `${money(purchase.total)} DH · ${newProduct.name}${sup ? ' · ' + sup.name : ''}`);
        }
      }
      if (quickAddLineId && state.purchaseDraftLines) {
        const purchaseLine = state.purchaseDraftLines.find(line => line.id === quickAddLineId);
        if (purchaseLine) {
          purchaseLine.productId = newProduct.id;
          purchaseLine.sku = newProduct.sku;
          purchaseLine.qty = document.getElementById('f_stock')?.value || purchaseLine.qty || '';
          purchaseLine.unitCost = document.getElementById('f_cost')?.value || purchaseLine.unitCost || '';
          purchaseLine.unitPrice = document.getElementById('f_sell')?.value || purchaseLine.unitPrice || '';
        }
        state.purchaseQuickAddLineId = null;
        toast('Produit ajouté à la liste des achats');
      }
    } else {
      Object.assign(state.editingProduct, data);
      toast('Produit mis à jour');
      await logOperation('Modification produit', name);
      await saveProducts();
    }
    state.editingProduct = null; state.productPhotoDraft = undefined; state.productDraft = null; render();
  });

  /* Clients */
  const addClientBtn = document.getElementById('addClientBtn');
  if (addClientBtn) addClientBtn.addEventListener('click', () => { state.editingClient = 'new'; render(); });
  document.querySelectorAll('[data-edit-client]').forEach(el => el.addEventListener('click', () => { state.editingClient = state.clients.find(c => c.id === el.dataset.editClient); render(); }));
  document.querySelectorAll('[data-delete-client]').forEach(el => el.addEventListener('click', async () => {
    if (!hasPriv('clients', 'delete')) { toast('Action non autorisée'); return; }
    const c = state.clients.find(cc => cc.id === el.dataset.deleteClient);
    if (!c) return;
    if (clientHasRecords(c.id)) { toast('Ce client possède un historique. Conservez-le pour préserver les soldes et factures.'); return; }
    if (!confirmLocalized('Supprimer ce client ?')) return;
    state.clients = state.clients.filter(c => c.id !== el.dataset.deleteClient);
    await saveClients(); await logOperation('Suppression client', c ? c.name : '');
    render();
  }));
  document.querySelectorAll('[data-view-ledger]').forEach(el => el.addEventListener('click', () => { state.ledgerClientId = el.dataset.viewLedger; state.showInvoicedBons = false; render(); }));
  const backToClients = document.getElementById('backToClients');
  if (backToClients) backToClients.addEventListener('click', () => { state.ledgerClientId = null; state.showInvoicedBons = false; render(); });
  const toggleShowInvoiced = document.getElementById('toggleShowInvoiced');
  if (toggleShowInvoiced) toggleShowInvoiced.addEventListener('change', (e) => { state.showInvoicedBons = e.target.checked; refreshContent(); });
  const clientSearch = document.getElementById('clientSearch');
  if (clientSearch) clientSearch.addEventListener('input', (e) => { state.clientSearch = e.target.value; refreshContent(); });
  const cancelClientModal = document.getElementById('cancelClientModal');
  if (cancelClientModal) cancelClientModal.addEventListener('click', () => { state.editingClient = null; render(); });
  const clientModalOverlay = document.getElementById('clientModalOverlay');
  const saveClientModal = document.getElementById('saveClientModal');
  if (saveClientModal) saveClientModal.addEventListener('click', async () => {
    const name = document.getElementById('c_name').value.trim();
    if (!name) { toast('Le nom du client est requis'); return; }
    const clientCode = document.getElementById('c_code').value.trim() || nextClientCode();
    const dupCode = state.clients.find(c => c.clientCode === clientCode && c.id !== (state.editingClient === 'new' ? null : state.editingClient.id));
    if (dupCode) { toast('Cet identifiant client est déjà utilisé'); return; }
    const phone = sanitizeDigits(document.getElementById('c_phone').value, 10);
    const email = document.getElementById('c_email').value.trim();
    if (phone && !isValidPhone(phone)) { toast('Le téléphone doit contenir exactement 10 chiffres'); return; }
    if (email && !isValidEmail(email)) { toast('L’e-mail doit respecter le format email@email.com'); return; }
    const data = { name, clientCode, phone, email, notes: document.getElementById('c_notes').value.trim() };
    if (state.editingClient === 'new') { state.clients.push({ id: uid('c'), ...data }); toast('Client ajouté'); await logOperation('Ajout client', name); }
    else { Object.assign(state.editingClient, data); toast('Client mis à jour'); await logOperation('Modification client', name); }
    await saveClients(); state.editingClient = null; render();
  });

  /* Payments */
  const addPaymentBtn = document.getElementById('addPaymentBtn');
  if (addPaymentBtn) addPaymentBtn.addEventListener('click', () => { state.paymentClientId = state.ledgerClientId; state.editingPayment = null; render(); });
  document.querySelectorAll('[data-edit-payment]').forEach(el => el.addEventListener('click', () => {
    state.editingPayment = state.payments.find(p => p.id === el.dataset.editPayment);
    state.paymentClientId = null;
    render();
  }));
  document.querySelectorAll('[data-delete-payment]').forEach(el => el.addEventListener('click', async () => {
    if (!confirmLocalized('Supprimer ce paiement ?')) return;
    const p = state.payments.find(pp => pp.id === el.dataset.deletePayment);
    state.payments = state.payments.filter(pp => pp.id !== el.dataset.deletePayment);
    await savePayments();
    await logOperation('Suppression paiement', p ? `${money(p.amount)} DH` : '');
    render();
  }));
  const cancelPaymentModal = document.getElementById('cancelPaymentModal');
  if (cancelPaymentModal) cancelPaymentModal.addEventListener('click', () => { state.paymentClientId = null; state.editingPayment = null; render(); });
  const paymentModalOverlay = document.getElementById('paymentModalOverlay');
  const savePaymentModal = document.getElementById('savePaymentModal');
  if (savePaymentModal) savePaymentModal.addEventListener('click', async () => {
    const amount = parseFloat(document.getElementById('pay_amount').value);
    if (!Number.isFinite(amount) || amount <= 0) { toast('Montant invalide'); return; }
    const c = state.clients.find(cc => cc.id === (state.editingPayment ? state.editingPayment.clientId : state.paymentClientId));
    const availableBalance = c ? clientBalance(c.id) + (state.editingPayment ? Number(state.editingPayment.amount) || 0 : 0) : 0;
    if (amount > availableBalance + 0.009) { toast(`Le paiement ne peut pas dépasser le solde disponible (${money(Math.max(0, availableBalance))} DH)`); return; }
    const date = document.getElementById('pay_date').value || new Date().toISOString().slice(0, 10);
    const note = document.getElementById('pay_note').value.trim();
    const saleId = document.getElementById('pay_sale').value || null;
    if (state.editingPayment) {
      const before = { ...state.editingPayment };
      Object.assign(state.editingPayment, { amount, date: new Date(date).toISOString(), note, saleId });
      const result = await savePayments();
      if (result === null) { Object.assign(state.editingPayment, before); toast('Échec de sauvegarde du paiement'); return; }
      await logOperation('Modification paiement', `${money(amount)} DH`);
      state.editingPayment = null; toast('Paiement mis à jour');
    } else {
      const newPayment = { id: uid('pay'), clientId: state.paymentClientId, amount, date: new Date(date).toISOString(), note, saleId };
      state.payments.push(newPayment);
      const result = await savePayments();
      if (result === null) { state.payments = state.payments.filter(p => p.id !== newPayment.id); toast('Échec de sauvegarde du paiement'); return; }
      await logOperation('Paiement enregistré', `${money(amount)} DH · ${c ? c.name : ''}`);
      state.paymentClientId = null; toast('Paiement enregistré');
    }
    render();
  });

  /* Users (vendeurs) */
  const addUserBtn = document.getElementById('addUserBtn');
  if (addUserBtn) addUserBtn.addEventListener('click', () => { state.editingUser = 'new'; render(); });
  document.querySelectorAll('[data-edit-user]').forEach(el => el.addEventListener('click', () => { state.editingUser = state.users.find(u => u.id === el.dataset.editUser); render(); }));
  document.querySelectorAll('[data-delete-user]').forEach(el => el.addEventListener('click', async () => {
    if (!isAdmin()) { toast('Action non autorisée'); return; }
    const u = state.users.find(uu => uu.id === el.dataset.deleteUser);
    if (!u) return;
    if (u.id === state.session?.userId) { toast('Impossible de supprimer le compte actuellement connecté'); return; }
    if (u.role === 'admin' && state.users.filter(x => x.role === 'admin').length <= 1) { toast('Le dernier administrateur ne peut pas être supprimé'); return; }
    if (!confirmLocalized('Supprimer ce compte vendeur ?')) return;
    state.users = state.users.filter(u => u.id !== el.dataset.deleteUser);
    await saveUsers(); await logOperation('Suppression compte', u ? u.username : '');
    render();
  }));
  const cancelUserModal = document.getElementById('cancelUserModal');
  if (cancelUserModal) cancelUserModal.addEventListener('click', () => { state.editingUser = null; render(); });
  const userModalOverlay = document.getElementById('userModalOverlay');
  const saveUserModal = document.getElementById('saveUserModal');
  if (saveUserModal) saveUserModal.addEventListener('click', async () => {
    const name = document.getElementById('u_name').value.trim();
    const username = document.getElementById('u_username').value.trim();
    const pass = document.getElementById('u_pass').value;
    if (!name || !username) { toast('Nom et identifiant requis'); return; }
    const dup = state.users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.id !== (state.editingUser === 'new' ? null : state.editingUser.id));
    if (dup) { toast('Cet identifiant est déjà utilisé'); return; }
    const readModule = (mod) => {
      const m = {};
      PRIV_ACTIONS.forEach(a => { const el = document.getElementById(`priv_${mod}_${a}`); m[a] = el ? el.checked : false; });
      return m;
    };
    const privileges = {
      products: { ...readModule('products'), viewCosts: document.getElementById('priv_products_costs').checked },
      clients: readModule('clients'),
      payments: readModule('payments'),
    };
    if (state.editingUser === 'new') {
      if (!pass) { toast('Mot de passe requis'); return; }
      state.users.push({ id: uid('u'), name, username, passwordHash: hashPassword(pass), role: 'vendeur', privileges });
      toast('Compte créé'); await logOperation('Création compte vendeur', username);
    } else {
      Object.assign(state.editingUser, { name, username, privileges });
      if (pass) state.editingUser.passwordHash = hashPassword(pass);
      toast('Compte mis à jour'); await logOperation('Modification compte vendeur', username);
    }
    await saveUsers(); state.editingUser = null; render();
  });

  const savePhysicalInventoryBtn = document.getElementById('savePhysicalInventoryBtn');
  if (savePhysicalInventoryBtn) savePhysicalInventoryBtn.addEventListener('click', savePhysicalInventory);
  document.querySelectorAll('[data-inventory-qty]').forEach(input => input.addEventListener('input', () => { const diff = Number(input.value) - Number(input.dataset.systemQty); const output = document.querySelector(`[data-inventory-diff="${input.dataset.inventoryQty}"]`); if (output) output.textContent = diff > 0 ? `+${diff}` : String(diff); }));

  document.querySelectorAll('[data-edit-equipment]').forEach(el => el.addEventListener('click', () => { const item = state.equipmentPurchases.find(x => x.id === el.dataset.editEquipment); if (item) { state.financeEditing = { mode: 'equipment', item }; state.financeModal = 'equipment'; render(); } }));
  document.querySelectorAll('[data-edit-expense]').forEach(el => el.addEventListener('click', () => { const item = state.expenses.find(x => x.id === el.dataset.editExpense); if (item) { state.financeEditing = { mode: 'expense', item }; state.financeModal = 'expense'; render(); } }));
  document.querySelectorAll('[data-delete-equipment]').forEach(el => el.addEventListener('click', async () => {
    const item = state.equipmentPurchases.find(x => x.id === el.dataset.deleteEquipment); if (!item || !confirmLocalized(`Supprimer l’équipement « ${item.name} » ?`)) return;
    state.equipmentPurchases = state.equipmentPurchases.filter(x => x.id !== item.id); await saveEquipmentPurchases(); await logOperation('Suppression équipement', item.name); render();
  }));
  document.querySelectorAll('[data-delete-expense]').forEach(el => el.addEventListener('click', async () => {
    const item = state.expenses.find(x => x.id === el.dataset.deleteExpense); if (!item || !confirmLocalized(`Supprimer cette dépense de ${money(item.amount)} DH ?`)) return;
    state.expenses = state.expenses.filter(x => x.id !== item.id); await saveExpenses(); await logOperation('Suppression dépense', item.description || item.category); render();
  }));
  const saveEquipmentBtn = document.getElementById('saveEquipmentBtn');
  if (saveEquipmentBtn) saveEquipmentBtn.addEventListener('click', async () => {
    const name = document.getElementById('equipmentName').value.trim(); const amount = Number(document.getElementById('equipmentAmount').value);
    if (!name || !Number.isFinite(amount) || amount <= 0) { toast('Désignation et montant positif requis'); return; }
    const equipmentData = { date: document.getElementById('equipmentDate').value || localDateInputValue(), bonNumber: document.getElementById('equipmentBonNumber').value.trim(), name, category: document.getElementById('equipmentCategory').value, amount, supplier: document.getElementById('equipmentSupplier').value.trim(), payment: document.getElementById('equipmentPayment').value, note: document.getElementById('equipmentNote').value.trim() }; if (state.financeEditing?.mode === 'equipment') Object.assign(state.financeEditing.item, equipmentData); else state.equipmentPurchases.push({ id: uid('eq'), ...equipmentData });
    await saveEquipmentPurchases(); await logOperation(state.financeEditing?.mode === 'equipment' ? 'Équipement modifié' : 'Équipement enregistré', name); state.financeEditing = null; state.financeModal = null; toast('Équipement enregistré'); render();
  });
  const saveExpenseBtn = document.getElementById('saveExpenseBtn');
  if (saveExpenseBtn) saveExpenseBtn.addEventListener('click', async () => {
    const description = document.getElementById('expenseDescription').value.trim(); const amount = Number(document.getElementById('expenseAmount').value);
    if (!description || !Number.isFinite(amount) || amount <= 0) { toast('Description et montant positif requis'); return; }
    const expenseData = { date: document.getElementById('expenseDate').value || localDateInputValue(), category: document.getElementById('expenseCategory').value, description, amount, payee: document.getElementById('expensePayee').value.trim(), payment: document.getElementById('expensePayment').value, note: document.getElementById('expenseNote').value.trim() }; if (state.financeEditing?.mode === 'expense') Object.assign(state.financeEditing.item, expenseData); else state.expenses.push({ id: uid('ex'), ...expenseData });
    await saveExpenses(); await logOperation(state.financeEditing?.mode === 'expense' ? 'Dépense modifiée' : 'Dépense enregistrée', description); state.financeEditing = null; state.financeModal = null; toast('Dépense enregistrée'); render();
  });
  const syncBulkExpenses = () => {
    (state.bulkExpenseLines || []).forEach(line => document.querySelectorAll(`[data-line="${line.id}"][data-bulk-expense]`).forEach(el => { line[el.dataset.bulkExpense] = el.value; }));
    const valid = (state.bulkExpenseLines || []).filter(line => String(line.description || '').trim() && Number(line.amount) > 0);
    const total = valid.reduce((sum, line) => sum + (Number(line.amount) || 0), 0);
    const countEl = document.getElementById('bulkExpenseSummaryLines'); const totalEl = document.getElementById('bulkExpenseSummaryTotal');
    if (countEl) countEl.textContent = String(valid.length); if (totalEl) totalEl.textContent = `${money(total)} DH`;
  };
  const openBulkExpenseBtn = document.getElementById('openBulkExpenseBtn');
  if (openBulkExpenseBtn) openBulkExpenseBtn.addEventListener('click', () => { state.bulkExpenseModalOpen = true; state.bulkExpenseLines = [{ id: uid('be'), date: localDateInputValue(), category: getExpenseCategories()[0] || 'Autre', description: '', amount: '', payee: '', payment: 'Espèces', note: '' }]; render(); });
  document.querySelectorAll('[data-bulk-expense]').forEach(el => el.addEventListener('input', syncBulkExpenses));
  document.querySelectorAll('[data-bulk-expense]').forEach(el => el.addEventListener('change', syncBulkExpenses));
  const addBulkExpenseLine = document.getElementById('addBulkExpenseLine');
  if (addBulkExpenseLine) addBulkExpenseLine.addEventListener('click', () => { syncBulkExpenses(); state.bulkExpenseLines.push({ id: uid('be'), date: localDateInputValue(), category: getExpenseCategories()[0] || 'Autre', description: '', amount: '', payee: '', payment: 'Espèces', note: '' }); render(); });
  document.querySelectorAll('[data-remove-bulk-expense]').forEach(el => el.addEventListener('click', () => { syncBulkExpenses(); if (state.bulkExpenseLines.length > 1) state.bulkExpenseLines = state.bulkExpenseLines.filter(line => line.id !== el.dataset.removeBulkExpense); render(); }));
  const cancelBulkExpenseModal = document.getElementById('cancelBulkExpenseModal');
  if (cancelBulkExpenseModal) cancelBulkExpenseModal.addEventListener('click', () => { state.bulkExpenseModalOpen = false; state.bulkExpenseLines = null; render(); });
  const saveBulkExpensesModal = document.getElementById('saveBulkExpensesModal');
  if (saveBulkExpensesModal) saveBulkExpensesModal.addEventListener('click', async () => {
    syncBulkExpenses();
    const valid = (state.bulkExpenseLines || []).filter(line => String(line.description || '').trim() && Number(line.amount) > 0);
    if (!valid.length) { toast('Ajoutez au moins une dépense avec une description et un montant positif'); return; }
    const added = valid.map(line => ({ id: uid('ex'), date: line.date || localDateInputValue(), category: line.category || 'Autre', description: String(line.description).trim(), amount: Number(line.amount), payee: String(line.payee || '').trim(), payment: line.payment || 'Espèces', note: String(line.note || '').trim() }));
    state.expenses.push(...added);
    if (await saveExpenses() === null) { state.expenses.splice(-added.length, added.length); toast('Échec de sauvegarde des dépenses'); return; }
    await logOperation('Saisie dépenses en lot', `${added.length} dépense(s), ${money(added.reduce((sum, line) => sum + line.amount, 0))} DH`);
    state.bulkExpenseModalOpen = false; state.bulkExpenseLines = null; toast(`${added.length} dépense(s) enregistrée(s)`); render();
  });
  const syncBulkEquipments = () => {
    (state.bulkEquipmentLines || []).forEach(line => document.querySelectorAll(`[data-line="${line.id}"][data-bulk-equipment]`).forEach(el => { line[el.dataset.bulkEquipment] = el.value; }));
    const valid = (state.bulkEquipmentLines || []).filter(line => String(line.name || '').trim() && Number(line.amount) > 0);
    const total = valid.reduce((sum, line) => sum + (Number(line.amount) || 0), 0);
    const countEl = document.getElementById('bulkEquipmentSummaryLines'); const totalEl = document.getElementById('bulkEquipmentSummaryTotal');
    if (countEl) countEl.textContent = String(valid.length); if (totalEl) totalEl.textContent = `${money(total)} DH`;
  };
  const openBulkEquipmentBtn = document.getElementById('openBulkEquipmentBtn');
  if (openBulkEquipmentBtn) openBulkEquipmentBtn.addEventListener('click', () => { state.bulkEquipmentModalOpen = true; state.bulkEquipmentLines = [{ id: uid('bq'), date: localDateInputValue(), bonNumber: '', category: getEquipmentCategories()[0] || 'Autre', name: '', amount: '', supplier: '', payment: 'Espèces', note: '' }]; render(); });
  document.querySelectorAll('[data-bulk-equipment]').forEach(el => el.addEventListener('input', syncBulkEquipments));
  document.querySelectorAll('[data-bulk-equipment]').forEach(el => el.addEventListener('change', syncBulkEquipments));
  const addBulkEquipmentLine = document.getElementById('addBulkEquipmentLine');
  if (addBulkEquipmentLine) addBulkEquipmentLine.addEventListener('click', () => { syncBulkEquipments(); state.bulkEquipmentLines.push({ id: uid('bq'), date: localDateInputValue(), bonNumber: '', category: getEquipmentCategories()[0] || 'Autre', name: '', amount: '', supplier: '', payment: 'Espèces', note: '' }); render(); });
  document.querySelectorAll('[data-remove-bulk-equipment]').forEach(el => el.addEventListener('click', () => { syncBulkEquipments(); if (state.bulkEquipmentLines.length > 1) state.bulkEquipmentLines = state.bulkEquipmentLines.filter(line => line.id !== el.dataset.removeBulkEquipment); render(); }));
  const cancelBulkEquipmentModal = document.getElementById('cancelBulkEquipmentModal');
  if (cancelBulkEquipmentModal) cancelBulkEquipmentModal.addEventListener('click', () => { state.bulkEquipmentModalOpen = false; state.bulkEquipmentLines = null; render(); });
  const saveBulkEquipmentsModal = document.getElementById('saveBulkEquipmentsModal');
  if (saveBulkEquipmentsModal) saveBulkEquipmentsModal.addEventListener('click', async () => {
    syncBulkEquipments();
    const valid = (state.bulkEquipmentLines || []).filter(line => String(line.name || '').trim() && Number(line.amount) > 0);
    if (!valid.length) { toast('Ajoutez au moins un équipement avec une désignation et un montant positif'); return; }
    const added = valid.map(line => ({ id: uid('eq'), date: line.date || localDateInputValue(), bonNumber: String(line.bonNumber || '').trim(), category: line.category || 'Autre', name: String(line.name).trim(), amount: Number(line.amount), supplier: String(line.supplier || '').trim(), payment: line.payment || 'Espèces', note: String(line.note || '').trim() }));
    state.equipmentPurchases.push(...added);
    if (await saveEquipmentPurchases() === null) { state.equipmentPurchases.splice(-added.length, added.length); toast('Échec de sauvegarde des équipements'); return; }
    await logOperation('Saisie équipements en lot', `${added.length} équipement(s), ${money(added.reduce((sum, line) => sum + line.amount, 0))} DH`);
    state.bulkEquipmentModalOpen = false; state.bulkEquipmentLines = null; toast(`${added.length} équipement(s) enregistré(s)`); render();
  });
  document.querySelectorAll('[data-open-finance-form]').forEach(el => el.addEventListener('click', () => { state.financeModal = el.dataset.openFinanceForm; render(); }));
  document.querySelectorAll('[data-close-finance-form]').forEach(el => el.addEventListener('click', () => { state.financeModal = null; render(); }));
  document.querySelectorAll('[data-finance-modal]').forEach(el => el.addEventListener('click', event => { if (event.target === el) { state.financeModal = null; render(); } }));
  const financeFilterBindings = [
    ['equipmentSearch', 'equipmentSearch'], ['equipmentFrom', 'equipmentFrom'], ['equipmentTo', 'equipmentTo'],
    ['expenseSearch', 'expenseSearch'], ['expenseFrom', 'expenseFrom'], ['expenseTo', 'expenseTo']
  ];
  financeFilterBindings.forEach(([id, key]) => { const input = document.getElementById(id); if (input) input.addEventListener('input', event => { state[key] = event.target.value; refreshContent(); }); });
  document.querySelectorAll('[data-clear-finance-filter]').forEach(el => el.addEventListener('click', () => { const mode = el.dataset.clearFinanceFilter; if (mode === 'equipment') { state.equipmentSearch = ''; state.equipmentFrom = ''; state.equipmentTo = ''; } else { state.expenseSearch = ''; state.expenseFrom = ''; state.expenseTo = ''; } refreshContent(); }));
  /* Settings tabs & profile */
  document.querySelectorAll('[data-redo-doc]').forEach(el=>el.addEventListener('click',()=>{const d=state.generatedDocuments.find(x=>x.id===el.dataset.redoDoc);const rec=d?.kind==='purchase'?state.purchases.find(x=>x.id===d.recordId):state.sales.find(x=>x.id===d.recordId);if(rec) printHTML(d.kind==='purchase'?buildPurchaseOrderHTML(rec):buildDeliveryNoteHTML(rec));}));
  document.querySelectorAll('[data-pdf-doc]').forEach(el=>el.addEventListener('click',()=>{const d=state.generatedDocuments.find(x=>x.id===el.dataset.pdfDoc);const rec=d?.kind==='purchase'?state.purchases.find(x=>x.id===d.recordId):state.sales.find(x=>x.id===d.recordId);if(rec) downloadBonPDF(d.kind,rec);}));
  const openCategoryManager = type => { state.categoryManagerType = type; state.categoryManagerDraft = {}; ['equipmentName','equipmentCategory','equipmentDate','equipmentAmount','equipmentSupplier','equipmentPayment','equipmentNote','expenseDescription','expenseCategory','expenseDate','expenseAmount','expensePayee','expensePayment','expenseNote','service_name','service_category','service_price','service_cost','service_description'].forEach(id => { const el = document.getElementById(id); if (el) state.categoryManagerDraft[id] = el.value; }); state.categoryManagerOpen = true; render(); setTimeout(() => document.getElementById('categoryManagerName')?.focus(), 0); };
  const restoreCategoryManagerDraft = selected => { const draft = state.categoryManagerDraft || {}; Object.entries(draft).forEach(([id, value]) => { const el = document.getElementById(id); if (el) el.value = value; }); if (selected) ['equipmentCategory','expenseCategory','service_category'].forEach(id => { const el = document.getElementById(id); if (el && [...el.options].some(option => option.value === selected)) el.value = selected; }); state.categoryManagerDraft = null; };
  const addEquipmentCategoryBtn=document.getElementById('addEquipmentCategoryBtn'); if(addEquipmentCategoryBtn) addEquipmentCategoryBtn.addEventListener('click',()=>openCategoryManager('equipment'));
  const addExpenseCategoryBtn=document.getElementById('addExpenseCategoryBtn'); if(addExpenseCategoryBtn) addExpenseCategoryBtn.addEventListener('click',()=>openCategoryManager('expense'));
  const addServiceCategoryBtn=document.getElementById('addServiceCategoryBtn'); if(addServiceCategoryBtn) addServiceCategoryBtn.addEventListener('click',()=>openCategoryManager('service'));
  const closeCategoryManagerBtn=document.getElementById('closeCategoryManagerBtn'); if(closeCategoryManagerBtn) closeCategoryManagerBtn.addEventListener('click',()=>{state.categoryManagerOpen=false;render();setTimeout(()=>restoreCategoryManagerDraft(),0);});
  const saveCategoryManagerBtn=document.getElementById('saveCategoryManagerBtn'); if(saveCategoryManagerBtn) saveCategoryManagerBtn.addEventListener('click',async()=>{const value=document.getElementById('categoryManagerName')?.value.trim();if(!value){toast('Saisissez un nom de catégorie');return;}const data=categoryManagerData(state.categoryManagerType);if(!state[data.field].includes(value))state[data.field].push(value);await data.save();state.categoryManagerOpen=false;render();setTimeout(()=>restoreCategoryManagerDraft(value),0);});
  document.querySelectorAll('[data-category-manager-delete]').forEach(el=>el.addEventListener('click',async()=>{const data=categoryManagerData(state.categoryManagerType),value=el.dataset.categoryManagerDelete;if(data.used(value)){toast('Cette catégorie est déjà utilisée');return;}state[data.field]=state[data.field].filter(item=>item!==value);await data.save();render();}));
  document.querySelectorAll('[data-settings-tab]').forEach(el => el.addEventListener('click', () => { state.settingsTab = el.dataset.settingsTab; render(); }));
  const saveCapitalAmountBtn=document.getElementById('saveCapitalAmount'); if(saveCapitalAmountBtn) saveCapitalAmountBtn.addEventListener('click',async()=>{const amount=Number.parseFloat(document.getElementById('capitalAmount').value);if(!validNonNegativeNumber(amount)){toast('Le capital doit être un montant positif ou nul');return;}state.capitalAmount=amount;const result=await saveCapitalAmount();if(result===null){toast('Échec de sauvegarde du capital');return;}await logOperation('Capital configuré',`${money(amount)} DH`);toast('Capital enregistré');render();});
  const saveRechargeMarginRateBtn=document.getElementById('saveRechargeMarginRate');if(saveRechargeMarginRateBtn)saveRechargeMarginRateBtn.addEventListener('click',async()=>{const rate=Number.parseFloat(document.getElementById('rechargeMarginRate').value);if(!validNonNegativeNumber(rate)||rate>100){toast('Le taux doit être compris entre 0 et 100 %');return;}state.rechargeMarginRate=rate;await saveRechargeMarginRate();toast('Taux de marge enregistré');render();});
  const addCategoryBtn = document.getElementById('addCategoryBtn');
  if (addCategoryBtn) addCategoryBtn.addEventListener('click', async () => {
    const input = document.getElementById('newCategoryName'); const name = input?.value.trim() || '';
    if (!name || name.length < 2) { toast('Saisissez un nom de catégorie valide'); return; }
    if (getCategories().some(category => category.toLowerCase() === name.toLowerCase())) { toast('Cette catégorie existe déjà'); return; }
    state.categories.push(name); const result = await saveCategories();
    if (result === null) { state.categories = state.categories.filter(category => category !== name); toast('Échec de sauvegarde de la catégorie'); return; }
    await logOperation('Ajout catégorie', name); state.settingsTab = 'categories'; toast('Catégorie ajoutée'); render();
  });
  document.querySelectorAll('[data-delete-category]').forEach(el => el.addEventListener('click', async () => {
    const name = el.dataset.deleteCategory;
    if (state.products.some(product => product.category === name)) { toast('Impossible de supprimer une catégorie utilisée par un produit'); return; }
    if (getCategories().length <= 1) { toast('Conservez au moins une catégorie'); return; }
    if (!confirmLocalized(`Supprimer la catégorie « ${name} » ?`)) return;
    const previousCategories = [...state.categories];
    state.categories = state.categories.filter(category => category !== name);
    const result = await saveCategories();
    if (result === null) { state.categories = previousCategories; toast('Échec de suppression de la catégorie'); return; }
    await logOperation('Suppression catégorie', name); render();
  }));
  const saveBrandingBtn = document.getElementById('saveBrandingBtn');
  const appBrandIcon = document.getElementById('appBrandIcon');
  if (appBrandIcon) appBrandIcon.addEventListener('change', async e => { const file=e.target.files?.[0]; if (!file) return; if (!/^image\/(png|jpe?g|webp|svg\+xml)$/.test(file.type) || file.size > 1024*1024) { toast('Icône invalide : image PNG, JPEG, WebP ou SVG de 1 Mo maximum.'); e.target.value=''; return; } const reader=new FileReader(); reader.onload=()=>{ state.branding.icon=reader.result; render(); state.settingsTab='identite'; render(); }; reader.readAsDataURL(file); });
  if (saveBrandingBtn) saveBrandingBtn.addEventListener('click', async () => { const name=document.getElementById('appBrandName')?.value.trim(); const subtitle=document.getElementById('appBrandSubtitle')?.value.trim(); if (!name || !subtitle) { toast('Le nom et le sous-nom sont obligatoires.'); return; } const companyName=document.getElementById('companyName')?.value.trim()||''; const companyAddress=document.getElementById('companyAddress')?.value.trim()||''; const companyPhone=sanitizeDigits(document.getElementById('companyPhone')?.value||'',10); const companyEmail=document.getElementById('companyEmail')?.value.trim()||''; const companyId=document.getElementById('companyId')?.value.trim()||''; if(companyPhone && !isValidPhone(companyPhone)){toast('Le téléphone de l’entreprise doit contenir 10 chiffres.');return;} if(companyEmail && !isValidEmail(companyEmail)){toast('L’e-mail de l’entreprise est invalide.');return;} state.branding={...state.branding,name,subtitle,companyName,companyAddress,companyPhone,companyEmail,companyId}; await safeSet('shop:branding',JSON.stringify(state.branding),false); await logOperation('Identité de l’application modifiée',name); toast('Identité enregistrée'); render(); });
  const resetBrandingBtn = document.getElementById('resetBrandingBtn');
  if (resetBrandingBtn) resetBrandingBtn.addEventListener('click', async () => { state.branding={name:'PhoneStock',subtitle:'Gestion boutique',icon:'',companyName:'',companyAddress:'',companyPhone:'',companyEmail:'',companyId:''}; await safeSet('shop:branding',JSON.stringify(state.branding),false); toast('Identité rétablie'); render(); });
  const saveProfileBtn = document.getElementById('saveProfileBtn');
  if (saveProfileBtn) saveProfileBtn.addEventListener('click', async () => {
    const u = currentUser();
    const name = document.getElementById('prof_name').value.trim();
    const username = document.getElementById('prof_username').value.trim();
    const pass = document.getElementById('prof_pass').value;
    if (!name || !username) { toast('Nom et identifiant requis'); return; }
    const dup = state.users.find(x => x.username.toLowerCase() === username.toLowerCase() && x.id !== u.id);
    if (dup) { toast('Cet identifiant est déjà utilisé'); return; }
    u.name = name; u.username = username;
    if (pass) { if (pass.length < 4) { toast('Mot de passe trop court (min. 4 caractères)'); return; } u.passwordHash = hashPassword(pass); }
    await saveUsers(); await logOperation('Modification profil', username);
    toast('Profil mis à jour'); render();
  });
  const exportOplogBtn = document.getElementById('exportOplogBtn');
  if (exportOplogBtn) exportOplogBtn.addEventListener('click', async () => { try { await ensureXlsxLoaded(); exportOplogXLSX(); } catch (e) { toast('Bibliothèque Excel indisponible.'); } });
  const backupBtn = document.getElementById('backupBtn');
  if (backupBtn) backupBtn.addEventListener('click', async () => { downloadBackup(); await logOperation('Sauvegarde exportée', ''); });
  const restoreBtn = document.getElementById('restoreBtn');
  const restoreFile = document.getElementById('restoreFile');
  if (restoreBtn && restoreFile) {
    restoreBtn.addEventListener('click', () => restoreFile.click());
    restoreFile.addEventListener('change', (e) => { if (e.target.files[0]) restoreFromFile(e.target.files[0]); });
  }
  const exportExcelBtn = document.getElementById('exportExcelBtn');
  if (exportExcelBtn) exportExcelBtn.addEventListener('click', async () => { try { await ensureXlsxLoaded(); exportExcelWorkbook(); await logOperation('Export Excel', 'Classeur téléchargé'); } catch (e) { toast('Bibliothèque Excel indisponible.'); } });
  const importExcelBtn = document.getElementById('importExcelBtn');
  const importExcelFile = document.getElementById('importExcelFile');
  if (importExcelBtn && importExcelFile) {
    importExcelBtn.addEventListener('click', () => importExcelFile.click());
    importExcelFile.addEventListener('change', (e) => { if (e.target.files[0]) importExcelWorkbook(e.target.files[0]); });
  }
  const openClearStorageBtn = document.getElementById('openClearStorageBtn');
  if (openClearStorageBtn) openClearStorageBtn.addEventListener('click', () => { state.showClearStorageModal = true; render(); });
  const cancelClearStorageModal = document.getElementById('cancelClearStorageModal');
  if (cancelClearStorageModal) cancelClearStorageModal.addEventListener('click', () => { state.showClearStorageModal = false; render(); });
  const clearStorageModalOverlay = document.getElementById('clearStorageModalOverlay');
  if (clearStorageModalOverlay) clearStorageModalOverlay.addEventListener('click', (e) => { if (e.target === clearStorageModalOverlay) { state.showClearStorageModal = false; render(); } });
  const clearPurchasesStockBtn = document.getElementById('clearPurchasesStockBtn');
  if (clearPurchasesStockBtn) clearPurchasesStockBtn.addEventListener('click', clearPurchasesAndStock);
  const clearSalesBtn = document.getElementById('clearSalesBtn');
  if (clearSalesBtn) clearSalesBtn.addEventListener('click', clearSalesAndPayments);
  const clearAllStorageBtn = document.getElementById('clearAllStorageBtn');
  if (clearAllStorageBtn) clearAllStorageBtn.addEventListener('click', clearAllStorage);

  /* POS */
  const bulkSaleBtn = document.getElementById('bulkSaleBtn');
  bindOnce(bulkSaleBtn, 'click', () => {
    state.bulkSaleModalOpen = true;
    state.bulkSaleLines = [{ id: uid('bl'), productId: '', sku: '', qty: '', unitPrice: '' }];
    state.bulkSaleClientId = ''; state.bulkSaleDate = localDateInputValue(); state.bulkSaleTime = localTimeInputValue();
    state.bulkSalePayment = 'Espèces'; state.bulkSalePaid = ''; state.bulkSaleDiscount = ''; state.bulkSaleScanLineId = null;
    render();
  });
  const togglePaymentPanel = document.getElementById('togglePaymentPanel');
  if (togglePaymentPanel) togglePaymentPanel.addEventListener('click', () => { state.posPaymentOpen = !state.posPaymentOpen; refreshPOS(); });
  const posSearch = document.getElementById('posSearch');
  bindOnce(posSearch, 'input', (e) => { state.posSearch = e.target.value; clearTimeout(window.__posSearchTimer); window.__posSearchTimer = setTimeout(refreshPOS, 80); });
  const scanPosBtn = document.getElementById('scanPosBtn');
  bindOnce(scanPosBtn, 'click', () => openScanner('pos'));
  document.querySelectorAll('[data-pos-cat]').forEach(el => el.addEventListener('click', () => { state.posCategory = el.dataset.posCat; refreshPOS(); }));
  document.querySelectorAll('[data-add-cart]').forEach(el => el.addEventListener('click', () => {
    const id = el.dataset.addCart; const p = state.products.find(pp => pp.id === id);
    const stock = p ? productStock(id) : 0;
    if (!p || stock <= 0) return;
    bumpCartLine(id, 1, stock, productSellPrice(id));
    state.posPaidOverride = null;
    refreshPOS();
  }));
  document.querySelectorAll('[data-cart-inc]').forEach(el => el.addEventListener('click', () => {
    const p = state.products.find(pp => pp.id === el.dataset.cartInc);
    if (p) bumpCartLine(el.dataset.cartInc, 1, productStock(p.id), productSellPrice(p.id));
    state.posPaidOverride = null; refreshPOS();
  }));
  document.querySelectorAll('[data-cart-dec]').forEach(el => el.addEventListener('click', () => {
    const line = state.posCart.find(l => l.productId === el.dataset.cartDec);
    if (line) { line.qty--; if (line.qty <= 0) state.posCart = state.posCart.filter(l => l !== line); }
    state.posPaidOverride = null; refreshPOS();
  }));
  document.querySelectorAll('[data-cart-remove]').forEach(el => el.addEventListener('click', () => {
    state.posCart = state.posCart.filter(l => l.productId !== el.dataset.cartRemove);
    state.posPaidOverride = null; refreshPOS();
  }));
  const clearCart = document.getElementById('clearCart');
  if (clearCart) clearCart.addEventListener('click', () => { state.posCart = []; state.posPaidOverride = null; state.posDiscount = ''; refreshPOS(); });
  const paymentMethod = document.getElementById('paymentMethod');
  if (paymentMethod) paymentMethod.addEventListener('change', (e) => { state.posPayment = e.target.value; });
  const posClient = document.getElementById('posClient');
  if (posClient) posClient.addEventListener('change', (e) => {
    state.posClientId = e.target.value;
    const c = state.clients.find(cc => cc.id === e.target.value);
    state.posClientCodeInput = c ? (c.clientCode || '') : '';
    refreshPOS();
  });
  const posClientCode = document.getElementById('posClientCode');
  if (posClientCode) posClientCode.addEventListener('input', (e) => {
    const value = e.target.value;
    state.posClientCodeInput = value;
    const query = value.trim().toLowerCase();
    if (!query) { state.posClientId = ''; }
    else {
      const match = state.clients.find(c => (c.clientCode || '').toLowerCase() === query);
      if (match) state.posClientId = match.id;
    }
    refreshPOS();
  });
  const posPaidAmount = document.getElementById('posPaidAmount');
  if (posPaidAmount) posPaidAmount.addEventListener('input', (e) => { state.posPaidOverride = sanitizeDecimal(e.target.value); refreshPOS(); });
  const posDiscount = document.getElementById('posDiscount');
  if (posDiscount) posDiscount.addEventListener('input', (e) => { state.posDiscount = sanitizeDecimal(e.target.value); state.posPaidOverride = null; refreshPOS(); });

  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) checkoutBtn.addEventListener('click', async () => {
    if (state.operationBusy || state.posCart.length === 0) return;
    state.operationBusy = true;
    checkoutBtn.disabled = true;
    const payment = state.posPayment;
    const clientId = state.posClientId || null;
    const items = [];
    for (const line of state.posCart) {
      const p = state.products.find(pp => pp.id === line.productId);
      const available = p ? productStock(p.id) : 0;
      if (!p || !validPositiveInteger(line.qty) || line.qty > available) {
        state.operationBusy = false;
        checkoutBtn.disabled = false;
        toast(p ? `Stock insuffisant pour ${p.name}` : 'Un produit du panier n’existe plus');
        return;
      }
      const price = Number(line.price);
      if (!validNonNegativeNumber(price)) {
        state.operationBusy = false;
        checkoutBtn.disabled = false;
        toast('Prix de vente invalide');
        return;
      }
      items.push({ productId: p.id, name: p.name, qty: Number(line.qty), price });
    }
    const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
    const discount = Math.max(0, Math.min(parseFloat(state.posDiscount) || 0, subtotal));
    const total = subtotal - discount;
    let paidAmount = state.posPaidOverride === null ? total : Math.max(0, Math.min(parseFloat(state.posPaidOverride) || 0, total));
    if (paidAmount < total && !clientId) {
      state.operationBusy = false;
      checkoutBtn.disabled = false;
      toast('Un client doit être sélectionné pour une vente à crédit (paiement partiel)');
      return;
    }
    if (items.some(it => productStock(it.productId) < it.qty)) {
      state.operationBusy = false;
      checkoutBtn.disabled = false;
      toast('Le stock a changé. Vérifiez le panier puis réessayez.');
      return;
    }
    const u = currentUser();
    // Deduct from the oldest lots first (FIFO), and record the resulting
    // weighted-average cost on each sale item for accurate margins.
    items.forEach(it => { it.unitCost = consumeStockFIFO(it.productId, it.qty); });
    if (items.some(it => it.unitCost === null)) {
      state.operationBusy = false;
      checkoutBtn.disabled = false;
      toast('Le stock a changé. Vérifiez le panier puis réessayez.');
      return;
    }
    const sale = {
      id: uid('s'), number: nextSaleNumber(), date: new Date().toISOString(), items, subtotal, discount, total, payment, clientId, paidAmount,
      sellerId: u ? u.id : null, sellerName: u ? (u.name || u.username) : '—',
    };
    state.sales.push(sale);
    const results = await Promise.all([saveSales(), savePurchases()]);
    if (results.some(result => result === null)) {
      state.sales = state.sales.filter(s => s.id !== sale.id);
      state.operationBusy = false;
      checkoutBtn.disabled = false;
      toast('Échec de sauvegarde : vente annulée, panier conservé.');
      return;
    }
    await logOperation('Vente encaissée', `Bon N°${sale.number} · ${money(total)} DH · ${items.length} article(s)`);
    state.posCart = []; state.posPaymentOpen = false; state.posPayment = 'Espèces'; state.posClientCodeInput = ''; state.posPaidOverride = null; state.posDiscount = '';
    state.operationBusy = false;
    state.receiptSale = sale;
    render();
    toast(`Vente encaissée · ${money(total)} DH`);
  });

  /* Saisie en lot des ventes */
  const syncBulkSaleAndRefresh = () => { syncBulkSaleDraftFromDOM(); updateBulkSaleSummary(); };
  document.querySelectorAll('[data-bulk-sale-field]').forEach(el => el.addEventListener('input', syncBulkSaleAndRefresh));
  document.querySelectorAll('[data-bulk-sale-sku]').forEach(el => el.addEventListener('input', () => {
    const line = state.bulkSaleLines?.find(item => item.id === el.dataset.bulkSaleSku); if (!line) return;
    line.sku = el.value.trim();
    const product = line.sku ? findProductBySku(line.sku) : null;
    line.productId = product && !product.archived ? product.id : '';
    if (product && !line.unitPrice) line.unitPrice = String(productSellPrice(product.id));
    const select = document.getElementById(`bl_product_${line.id}`); if (select) select.value = line.productId;
    const price = document.getElementById(`bl_price_${line.id}`); if (price && product && !price.value) price.value = line.unitPrice;
    updateBulkSaleSummary();
  }));
  document.querySelectorAll('[data-bulk-sale-product]').forEach(el => el.addEventListener('change', () => {
    const line = state.bulkSaleLines?.find(item => item.id === el.dataset.bulkSaleProduct); const product = state.products.find(p => p.id === el.value); if (!line) return;
    line.productId = product?.id || ''; line.sku = product?.sku || ''; line.unitPrice = String(product ? productSellPrice(product.id) : '');
    const sku = document.getElementById(`bl_sku_${line.id}`); const price = document.getElementById(`bl_price_${line.id}`);
    if (sku) sku.value = line.sku; if (price) price.value = line.unitPrice;
    updateBulkSaleSummary();
  }));
  ['bulk_sale_client', 'bulk_sale_date', 'bulk_sale_time', 'bulk_sale_payment', 'bulk_sale_discount', 'bulk_sale_paid'].forEach(id => {
    const el = document.getElementById(id); if (el) { el.addEventListener('input', syncBulkSaleAndRefresh); el.addEventListener('change', syncBulkSaleAndRefresh); }
  });
  document.querySelectorAll('[data-scan-bulk-sale-line]').forEach(el => el.addEventListener('click', () => { syncBulkSaleDraftFromDOM(); state.bulkSaleScanLineId = el.dataset.scanBulkSaleLine; openScanner('bulk-sale'); }));
  const addBulkSaleLine = document.getElementById('addBulkSaleLine');
  if (addBulkSaleLine) addBulkSaleLine.addEventListener('click', () => { syncBulkSaleDraftFromDOM(); state.bulkSaleLines.push({ id: uid('bl'), productId: '', sku: '', qty: '', unitPrice: '' }); render(); });
  document.querySelectorAll('[data-remove-bulk-sale-line]').forEach(el => el.addEventListener('click', () => { syncBulkSaleDraftFromDOM(); if (state.bulkSaleLines.length <= 1) { toast('Au moins une ligne est requise'); return; } state.bulkSaleLines = state.bulkSaleLines.filter(line => line.id !== el.dataset.removeBulkSaleLine); render(); }));
  const cancelBulkSaleModal = document.getElementById('cancelBulkSaleModal');
  if (cancelBulkSaleModal) cancelBulkSaleModal.addEventListener('click', () => { resetBulkSaleDraft(); render(); });
  const saveBulkSaleModal = document.getElementById('saveBulkSaleModal');
  if (saveBulkSaleModal) saveBulkSaleModal.addEventListener('click', async () => {
    syncBulkSaleDraftFromDOM();
    const items = [];
    for (const line of state.bulkSaleLines || []) {
      if (!line.productId) { if (line.sku || line.qty) { toast(`Code P inconnu ou produit manquant : ${line.sku || 'ligne sans produit'}`); return; } continue; }
      const product = state.products.find(p => p.id === line.productId);
      const qty = Number.parseInt(line.qty, 10); const price = Number.parseFloat(line.unitPrice);
      if (!product || product.archived || !validPositiveInteger(qty) || !validNonNegativeNumber(price)) { toast(`Ligne invalide pour ${product?.name || line.sku || 'le produit'}`); return; }
      if (productStock(product.id) < qty) { toast(`Stock insuffisant pour ${product.name}`); return; }
      items.push({ productId: product.id, name: product.name, sku: product.sku || '', qty, price });
    }
    if (!items.length) { toast('Ajoutez au moins un produit avec une quantité valide'); return; }
    const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);
    const discount = Math.max(0, Math.min(Number.parseFloat(state.bulkSaleDiscount) || 0, subtotal));
    const total = subtotal - discount;
    const paidAmount = state.bulkSalePaid === '' ? total : Math.max(0, Math.min(Number.parseFloat(state.bulkSalePaid) || 0, total));
    if (paidAmount < total && !state.bulkSaleClientId) { toast('Un client doit être sélectionné pour une vente à crédit'); return; }
    if (items.some(item => productStock(item.productId) < item.qty)) { toast('Le stock a changé. Vérifiez les lignes puis réessayez.'); return; }
    items.forEach(item => { item.unitCost = consumeStockFIFO(item.productId, item.qty); });
    if (items.some(item => item.unitCost === null)) { toast('Le stock a changé. Vérifiez les lignes puis réessayez.'); return; }
    const u = currentUser();
    const sale = { id: uid('s'), number: nextSaleNumber(), date: localIsoFromParts(state.bulkSaleDate, state.bulkSaleTime), items, subtotal, discount, total, payment: state.bulkSalePayment || 'Espèces', clientId: state.bulkSaleClientId || null, paidAmount, sellerId: u ? u.id : null, sellerName: u ? (u.name || u.username) : '—' };
    state.sales.push(sale);
    const results = await Promise.all([saveSales(), savePurchases()]);
    if (results.some(result => result === null)) { state.sales = state.sales.filter(item => item.id !== sale.id); restoreStockForSaleItems(items); toast('Échec de sauvegarde : vente en lot annulée'); return; }
    await logOperation('Vente en lot enregistrée', `Bon N°${sale.number} · ${items.length} ligne(s) · ${money(total)} DH`);
    resetBulkSaleDraft(); state.receiptSale = sale; render(); toast(`Vente en lot enregistrée · ${money(total)} DH`);
  });
  updateBulkSaleSummary();

  /* Actions modifier / supprimer une vente */
  document.querySelectorAll('[data-edit-sale]').forEach(el => el.addEventListener('click', () => { if (!isAdmin()) { toast('Action réservée à l’administrateur'); return; } const sale = state.sales.find(item => item.id === el.dataset.editSale); if (sale) { state.editingSale = sale; render(); } }));
  document.querySelectorAll('[data-delete-sale]').forEach(el => el.addEventListener('click', async () => {
    if (!isAdmin()) { toast('Action réservée à l’administrateur'); return; }
    const index = state.sales.findIndex(item => item.id === el.dataset.deleteSale); const sale = state.sales[index]; if (!sale) return;
    if (!confirmLocalized(`Supprimer la vente N°${sale.number || '—'}${sale.rechargeAccountId ? ' et restituer le solde du compte ?' : ' et restituer son stock ?'}`)) return;
    const previousPurchases = JSON.parse(JSON.stringify(state.purchases));
    const previousRechargeAccounts = JSON.parse(JSON.stringify(state.rechargeAccounts));
    const previousConsumedSaleIds = [...(state.replenishmentConsumedSaleIds || [])];
    const previousConsumedProductIds = [...(state.replenishmentConsumedProductIds || [])];
    const deletedProductIds = new Set((sale.items || []).map(item => item.productId).filter(Boolean));
    if (!restoreStockForSaleItems(sale.items)) { state.purchases = previousPurchases; toast('Impossible de restituer le stock de cette vente'); return; }
    if (sale.rechargeAccountId) {
      const account = state.rechargeAccounts.find(item => item.id === sale.rechargeAccountId);
      if (account) account.balance = rechargeBalance(account) + (Number(sale.rechargeAmount) || 0);
    }
    state.replenishmentConsumedSaleIds = (state.replenishmentConsumedSaleIds || []).filter(id => id !== sale.id);
    state.replenishmentConsumedProductIds = (state.replenishmentConsumedProductIds || []).filter(id => !deletedProductIds.has(id));
    state.sales.splice(index, 1);
    const previousInvoices = JSON.parse(JSON.stringify(state.invoices));
    state.invoices = state.invoices.map(invoice => {
      const saleIds = (invoice.saleIds || []).filter(id => id !== sale.id);
      const included = state.sales.filter(item => saleIds.includes(item.id));
      return { ...invoice, saleIds, total: included.reduce((sum, item) => sum + (Number(item.total) || 0), 0), paid: included.reduce((sum, item) => sum + effectivePaidAmount(item), 0) };
    }).filter(invoice => invoice.saleIds.length);
    const results = await Promise.all([saveSales(), savePurchases(), saveInvoices(), saveRechargeAccounts(), saveReplenishmentConsumedSales(), safeSet('shop:replenishment-consumed-products', JSON.stringify(state.replenishmentConsumedProductIds || []), true)]);
    if (results.some(result => result === null)) { state.purchases = previousPurchases; state.rechargeAccounts = previousRechargeAccounts; state.replenishmentConsumedSaleIds = previousConsumedSaleIds; state.replenishmentConsumedProductIds = previousConsumedProductIds; state.sales.splice(index, 0, sale); state.invoices = previousInvoices; toast('Échec de suppression : données restaurées'); return; }
    await logOperation('Suppression vente', `Bon N°${sale.number || '—'} · ${money(sale.total)} DH`); toast('Vente supprimée et stock restitué'); render();
  }));
  const cancelEditSale = document.getElementById('cancelEditSale');
  if (cancelEditSale) cancelEditSale.addEventListener('click', () => { state.editingSale = null; render(); });
  document.querySelectorAll('[data-edit-sale-sku]').forEach(el => el.addEventListener('input', () => { const product = el.value.trim() ? findProductBySku(el.value.trim()) : null; const select = document.getElementById(`es_product_${el.dataset.editSaleSku}`); if (select) select.value = product ? product.id : ''; }));
  const saveEditSale = document.getElementById('saveEditSale');
  if (saveEditSale) saveEditSale.addEventListener('click', async () => {
    const sale = state.editingSale; if (!sale) return;
    const lines = [];
    document.querySelectorAll('[data-edit-sale-product]').forEach(select => {
      const product = state.products.find(p => p.id === select.value); const id = select.dataset.editSaleProduct;
      const qty = Number.parseInt(document.getElementById(`es_qty_${id}`)?.value, 10); const price = Number.parseFloat(document.getElementById(`es_price_${id}`)?.value);
      if (!product || product.archived || !validPositiveInteger(qty) || !validNonNegativeNumber(price)) return;
      lines.push({ productId: product.id, name: product.name, sku: product.sku || '', qty, price });
    });
    if (!lines.length) { toast('Ajoutez au moins une ligne valide'); return; }
    const previousPurchases = JSON.parse(JSON.stringify(state.purchases)); const previousSale = JSON.parse(JSON.stringify(sale));
    if (!restoreStockForSaleItems(sale.items)) { state.purchases = previousPurchases; toast('Impossible de restituer le stock de la vente'); return; }
    if (lines.some(item => productStock(item.productId) < item.qty)) { state.purchases = previousPurchases; toast('Stock insuffisant pour la nouvelle vente'); return; }
    lines.forEach(item => { item.unitCost = consumeStockFIFO(item.productId, item.qty); });
    if (lines.some(item => item.unitCost === null)) { state.purchases = previousPurchases; toast('Le stock a changé. Réessayez.'); return; }
    const subtotal = lines.reduce((sum, item) => sum + item.qty * item.price, 0);
    const discount = Math.max(0, Math.min(Number.parseFloat(document.getElementById('edit_sale_discount')?.value) || 0, subtotal)); const total = subtotal - discount;
    const paidAmount = Math.max(0, Math.min(Number.parseFloat(document.getElementById('edit_sale_paid')?.value) || 0, total)); const clientId = document.getElementById('edit_sale_client')?.value || null;
    if (paidAmount < total && !clientId) { state.purchases = previousPurchases; toast('Un client doit être sélectionné pour une vente à crédit'); return; }
    Object.assign(sale, { items: lines, subtotal, discount, total, paidAmount, clientId, payment: document.getElementById('edit_sale_payment')?.value || 'Espèces', date: localIsoFromParts(document.getElementById('edit_sale_date')?.value, document.getElementById('edit_sale_time')?.value) });
    const results = await Promise.all([saveSales(), savePurchases()]);
    if (results.some(result => result === null)) { state.purchases = previousPurchases; Object.assign(sale, previousSale); toast('Échec de sauvegarde : modifications annulées'); return; }
    await logOperation('Modification vente', `Bon N°${sale.number || '—'} · ${money(total)} DH`); state.editingSale = null; toast('Vente modifiée et stock recalculé'); render();
  });

  /* Print receipt */
    document.querySelectorAll('[data-print-delivery]').forEach(el => el.addEventListener('click', () => { const sale=state.sales.find(x=>x.id===el.dataset.printDelivery); if (sale) { printHTML(buildDeliveryNoteHTML(sale)); recordGeneratedDocument('delivery',sale,'Impression'); } }));
    document.querySelectorAll('[data-pdf-delivery]').forEach(el => el.addEventListener('click', () => { const sale=state.sales.find(x=>x.id===el.dataset.pdfDelivery); if (sale) { downloadBonPDF('delivery',sale); recordGeneratedDocument('delivery',sale,'PDF'); } }));
    document.querySelectorAll('[data-share-delivery-whatsapp]').forEach(el => el.addEventListener('click', () => { const sale=state.sales.find(x=>x.id===el.dataset.shareDeliveryWhatsapp); if (sale) shareBon('delivery',sale,'whatsapp'); }));
    document.querySelectorAll('[data-share-delivery-email]').forEach(el => el.addEventListener('click', () => { const sale=state.sales.find(x=>x.id===el.dataset.shareDeliveryEmail); if (sale) shareBon('delivery',sale,'email'); }));
document.querySelectorAll('[data-print-sale]').forEach(el => el.addEventListener('click', () => {
    const s = state.sales.find(x => x.id === el.dataset.printSale);
    if (s) { state.receiptSale = s; render(); }
  }));
  const closeReceiptModal = document.getElementById('closeReceiptModal');
  if (closeReceiptModal) closeReceiptModal.addEventListener('click', () => { state.receiptSale = null; render(); });
  const receiptModalOverlay = document.getElementById('receiptModalOverlay');
  const printReceiptBtn = document.getElementById('printReceiptBtn');
  if (printReceiptBtn) printReceiptBtn.addEventListener('click', () => {
    const s = state.receiptSale; const client = state.clients.find(c => c.id === s.clientId);
    printHTML(buildReceiptHTML(s, client));
  });

  /* Invoice */
  const openInvoiceBtn = document.getElementById('openInvoiceBtn');
  bindOnce(openInvoiceBtn, 'click', () => { state.invoiceDraft = { clientId: '', from: '', to: '', saleIds: null }; render(); });
  const closeInvoiceModal = document.getElementById('closeInvoiceModal');
  if (closeInvoiceModal) closeInvoiceModal.addEventListener('click', () => { state.invoiceDraft = null; render(); });
  const invoiceModalOverlay = document.getElementById('invoiceModalOverlay');
  const inv_apply = document.getElementById('inv_apply');
  if (inv_apply) inv_apply.addEventListener('click', () => {
    state.invoiceDraft = {
      clientId: document.getElementById('inv_client').value,
      from: document.getElementById('inv_from').value,
      to: document.getElementById('inv_to').value,
      saleIds: null,
    };
    render();
  });
  const printInvoiceBtn = document.getElementById('printInvoiceBtn');
  if (printInvoiceBtn) printInvoiceBtn.addEventListener('click', async () => {
    const d = state.invoiceDraft;
    const client = state.clients.find(c => c.id === d.clientId);
    if (!client) return;
    const sales = invoiceSalesFor(d);
    if (sales.length === 0) return;
    printHTML(buildInvoiceHTML(client, sales, d.from, d.to));
    const total = sales.reduce((s, x) => s + x.total, 0);
    const paid = sales.reduce((s, x) => s + effectivePaidAmount(x), 0);
    const record = { id: uid('inv'), number: nextInvoiceNumber(), date: new Date().toISOString(), clientId: client.id, saleIds: sales.map(s => s.id), total, paid };
    state.invoices.push(record);
    await saveInvoices();
    await logOperation('Facture générée', `FAC-${String(record.number).padStart(4, '0')} · ${esc(client.name)} · ${money(total)} DH`);
  });

  /* Generate invoice from selected bons (client ledger) */
  const selectAllBons = document.getElementById('selectAllBons');
  if (selectAllBons) selectAllBons.addEventListener('change', (e) => {
    document.querySelectorAll('.bon-check').forEach(cb => { cb.checked = e.target.checked; });
  });
  const genInvoiceFromSelection = document.getElementById('genInvoiceFromSelection');
  if (genInvoiceFromSelection) genInvoiceFromSelection.addEventListener('click', () => {
    const ids = Array.from(document.querySelectorAll('.bon-check:checked')).map(cb => cb.value);
    if (ids.length === 0) { toast('Sélectionnez au moins un bon'); return; }
    state.invoiceDraft = { clientId: state.ledgerClientId, from: null, to: null, saleIds: ids };
    render();
  });

  /* Invoice history (reprint) */
  document.querySelectorAll('[data-reprint-invoice]').forEach(el => el.addEventListener('click', () => {
    const inv = state.invoices.find(i => i.id === el.dataset.reprintInvoice);
    if (!inv) return;
    const client = state.clients.find(c => c.id === inv.clientId);
    if (!client) { toast('Client introuvable pour cette facture'); return; }
    const sales = inv.saleIds.map(id => state.sales.find(s => s.id === id)).filter(Boolean).sort((a, b) => new Date(a.date) - new Date(b.date));
    printHTML(buildInvoiceHTML(client, sales, null, null));
  }));

  /* History tabs */

  /* Dashboard sales day */
  const dashboardSalesFrom = document.getElementById('dashboardSalesFrom');
  if (dashboardSalesFrom) dashboardSalesFrom.addEventListener('change', (e) => {
    state.dashboardSalesFrom = e.target.value || localDateInputValue();
    refreshContent();
  });
  const dashboardSalesTo = document.getElementById('dashboardSalesTo');
  if (dashboardSalesTo) dashboardSalesTo.addEventListener('change', (e) => {
    state.dashboardSalesTo = e.target.value || state.dashboardSalesFrom || localDateInputValue();
    refreshContent();
  });
  const dashboardLowStockBtn = document.getElementById('dashboardLowStockBtn');
  if (dashboardLowStockBtn) dashboardLowStockBtn.addEventListener('click', () => { state.historyTab = 'achats'; setView('history'); });

  /* Sales history filters */
  const hf_status = document.getElementById('hf_status');
  if (hf_status) hf_status.addEventListener('change', (e) => { state.historyFilters.status = e.target.value; refreshContent(); });
  const hf_seller = document.getElementById('hf_seller');
  if (hf_seller) hf_seller.addEventListener('change', (e) => { state.historyFilters.sellerId = e.target.value; refreshContent(); });
  const hf_client = document.getElementById('hf_client');
  if (hf_client) hf_client.addEventListener('change', (e) => { state.historyFilters.clientId = e.target.value; refreshContent(); });
  const hf_from = document.getElementById('hf_from');
  if (hf_from) hf_from.addEventListener('change', (e) => { state.historyFilters.from = e.target.value; refreshContent(); });
  const hf_to = document.getElementById('hf_to');
  if (hf_to) hf_to.addEventListener('change', (e) => { state.historyFilters.to = e.target.value; refreshContent(); });
  const hf_clear = document.getElementById('hf_clear');
  if (hf_clear) hf_clear.addEventListener('click', () => { state.historyFilters = { status: 'Tous', sellerId: '', clientId: '', from: '', to: '' }; refreshContent(); });

  /* Margin report filters */
  const mr_from = document.getElementById('mr_from');
  if (mr_from) mr_from.addEventListener('change', (e) => { state.reportFilters.from = e.target.value; refreshContent(); });
  const mr_to = document.getElementById('mr_to');
  if (mr_to) mr_to.addEventListener('change', (e) => { state.reportFilters.to = e.target.value; refreshContent(); });
  const mr_seller = document.getElementById('mr_seller');
  if (mr_seller) mr_seller.addEventListener('change', (e) => { state.reportFilters.sellerId = e.target.value; refreshContent(); });
  const mr_product = document.getElementById('mr_product');
  if (mr_product) mr_product.addEventListener('change', (e) => { state.reportFilters.productId = e.target.value; refreshContent(); });
  const openReportExclusions = document.getElementById('openReportExclusions');
  if (openReportExclusions) openReportExclusions.addEventListener('click', () => { state.reportExclusionsOpen = true; render(); });
  const closeReportExclusions = () => { state.reportExclusionsOpen = false; render(); };
  document.getElementById('closeReportExclusions')?.addEventListener('click', closeReportExclusions);
  document.getElementById('closeReportExclusionsBottom')?.addEventListener('click', closeReportExclusions);
  document.querySelector('.report-exclusions-overlay')?.addEventListener('click', e => { if (e.target.classList.contains('report-exclusions-overlay')) closeReportExclusions(); });
  const resetReportExclusions = document.getElementById('resetReportExclusions');
  if (resetReportExclusions) resetReportExclusions.addEventListener('click', () => { state.reportFilters.sections = { summary: true, stats: true, sales: true, purchases: true, purchaseBons: true, payments: true, stock: true, productPerformance: true, dailyEvolution: true }; state.reportFilters.excludeSaleCategories = []; state.reportFilters.excludePurchaseCategories = []; state.reportFilters.excludePurchaseSuppliers = []; state.reportFilters.includeEquipmentInPurchaseBons = false; persistReportFilters(); render(); });
  const mr_clear = document.getElementById('mr_clear');
  if (mr_clear) mr_clear.addEventListener('click', () => { state.reportFilters = { from: '', to: '', sellerId: '', productId: '', excludeSaleCategories: [], excludePurchaseCategories: [], excludePurchaseSuppliers: [], includeEquipmentInPurchaseBons: false, sections: { summary: true, stats: true, sales: true, purchases: true, purchaseBons: true, payments: true, stock: true, productPerformance: true, dailyEvolution: true } }; persistReportFilters(); refreshContent(); });
  const exportMarginReportBtn = document.getElementById('exportMarginReportBtn');
  if (exportMarginReportBtn) exportMarginReportBtn.addEventListener('click', async () => { try { await ensureXlsxLoaded(); exportMarginReportXLSX(); } catch (e) { toast('Bibliothèque Excel indisponible.'); } });
  const exportOperationsPDFBtn = document.getElementById('exportOperationsPDF');
  if (exportOperationsPDFBtn) exportOperationsPDFBtn.addEventListener('click', async () => { try { await ensurePdfLoaded(); exportOperationsReportPDF(); } catch (e) { toast('Bibliothèque PDF indisponible.'); } });
  const exportOperationsXLSXBtn = document.getElementById('exportOperationsXLSX');
  if (exportOperationsXLSXBtn) exportOperationsXLSXBtn.addEventListener('click', async () => { try { await ensureXlsxLoaded(); exportMarginReportXLSX(); } catch (e) { toast('Bibliothèque Excel indisponible.'); } });
  const exportStockSituationPDFBtn = document.getElementById('exportStockSituationPDF');
  if (exportStockSituationPDFBtn) exportStockSituationPDFBtn.addEventListener('click', async () => { try { await ensurePdfLoaded(); exportStockSituationPDF(); } catch (e) { toast('Bibliothèque PDF indisponible.'); } });
  const exportStockSituationXLSXBtn = document.getElementById('exportStockSituationXLSX');
  if (exportStockSituationXLSXBtn) exportStockSituationXLSXBtn.addEventListener('click', async () => { try { await ensureXlsxLoaded(); exportStockSituationXLSX(); } catch (e) { toast('Bibliothèque Excel indisponible.'); } });
  const or_period = document.getElementById('or_period');
  if (or_period) or_period.addEventListener('change', (e) => { state.operationReportPeriod = e.target.value; refreshContent(); });
  const or_month = document.getElementById('or_month');
  if (or_month) or_month.addEventListener('change', (e) => { state.operationReportMonth = e.target.value; state.operationReportPeriod = 'month'; refreshContent(); });
  const or_from = document.getElementById('or_from');
  if (or_from) or_from.addEventListener('change', (e) => { state.operationReportPeriod = 'custom'; state.operationReportFrom = e.target.value; refreshContent(); });
  const or_to = document.getElementById('or_to');
  if (or_to) or_to.addEventListener('change', (e) => { state.operationReportPeriod = 'custom'; state.operationReportTo = e.target.value; refreshContent(); });

  /* ---------------- Achats: Fournisseurs & Registre ---------------- */

  /* Purchase register filters */
  const pf_supplier = document.getElementById('pf_supplier');
  if (pf_supplier) pf_supplier.addEventListener('change', (e) => { state.purchaseFilters.supplierId = e.target.value; refreshContent(); });
  const pf_from = document.getElementById('pf_from');
  if (pf_from) pf_from.addEventListener('change', (e) => { state.purchaseFilters.from = e.target.value; refreshContent(); });
  const pf_to = document.getElementById('pf_to');
  if (pf_to) pf_to.addEventListener('change', (e) => { state.purchaseFilters.to = e.target.value; refreshContent(); });
  const pf_clear = document.getElementById('pf_clear');
  if (pf_clear) pf_clear.addEventListener('click', () => { state.purchaseFilters = { supplierId: '', bonNumber: '', from: '', to: '' }; refreshContent(); });

  /* Suppliers */
  const addSupplierBtn = document.getElementById('addSupplierBtn');
  bindOnce(addSupplierBtn, 'click', () => { state.editingSupplier = 'new'; render(); });
  document.querySelectorAll('[data-edit-supplier]').forEach(el => el.addEventListener('click', () => { state.editingSupplier = state.suppliers.find(s => s.id === el.dataset.editSupplier); render(); }));
  document.querySelectorAll('[data-delete-supplier]').forEach(el => el.addEventListener('click', async () => {
    if (!hasPriv('products', 'delete')) { toast('Action non autorisée'); return; }
    const s = state.suppliers.find(ss => ss.id === el.dataset.deleteSupplier);
    if (!s) return;
    if (supplierHasPurchases(s.id)) { toast('Ce fournisseur est lié à des achats. Conservez-le pour préserver l’historique.'); return; }
    if (!confirmLocalized('Supprimer ce fournisseur ?')) return;
    state.suppliers = state.suppliers.filter(ss => ss.id !== el.dataset.deleteSupplier);
    await saveSuppliers(); await logOperation('Suppression fournisseur', s ? s.name : '');
    render();
  }));
  const cancelSupplierModal = document.getElementById('cancelSupplierModal');
  if (cancelSupplierModal) cancelSupplierModal.addEventListener('click', () => { state.editingSupplier = null; render(); });
  const supplierModalOverlay = document.getElementById('supplierModalOverlay');
  const saveSupplierModal = document.getElementById('saveSupplierModal');
  if (saveSupplierModal) saveSupplierModal.addEventListener('click', async () => {
    const name = document.getElementById('sup_name').value.trim();
    if (!name) { toast('Le nom du fournisseur est requis'); return; }
    const code = document.getElementById('sup_code').value.trim() || nextSupplierCode();
    const dup = state.suppliers.find(s => s.code === code && s.id !== (state.editingSupplier === 'new' ? null : state.editingSupplier.id));
    if (dup) { toast('Cet identifiant fournisseur est déjà utilisé'); return; }
    const phone = sanitizeDigits(document.getElementById('sup_phone').value, 10);
    const email = document.getElementById('sup_email').value.trim();
    if (phone && !isValidPhone(phone)) { toast('Le téléphone doit contenir exactement 10 chiffres'); return; }
    if (email && !isValidEmail(email)) { toast('L’e-mail doit respecter le format email@email.com'); return; }
    const data = {
      name, code, phone, email,
      address: document.getElementById('sup_address').value.trim(), notes: document.getElementById('sup_notes').value.trim(),
    };
    if (state.editingSupplier === 'new') { const newSupplier = { id: uid('sup'), ...data }; state.suppliers.push(newSupplier); if (state.editingProduct) state.productDraftSupplierId = newSupplier.id; toast('Fournisseur ajouté'); await logOperation('Ajout fournisseur', name); }
    else { Object.assign(state.editingSupplier, data); toast('Fournisseur mis à jour'); await logOperation('Modification fournisseur', name); }
    await saveSuppliers(); state.editingSupplier = null; render();
  });

  /* Purchase register */
  function syncPurchaseDraftFromDOM() {
    if (!state.purchaseDraftLines) return;
    const purchaseDateEl = document.getElementById('pu_date');
    const purchaseTimeEl = document.getElementById('pu_time');
    if (purchaseDateEl) state.purchaseDraftDate = purchaseDateEl.value;
    if (purchaseTimeEl) state.purchaseDraftTime = purchaseTimeEl.value;
    state.purchaseDraftSupplierId = document.getElementById('pu_supplier')?.value || '';
    state.purchaseDraftDate = document.getElementById('pu_date')?.value || '';
    state.purchaseDraftNote = document.getElementById('pu_note')?.value || '';
    state.purchaseDraftBonNumber = document.getElementById('pu_bon')?.value.trim() || '';
    state.purchaseDraftLines.forEach(line => {
      const skuEl = document.getElementById(`pl_sku_${line.id}`);
      const productEl = document.getElementById(`pl_product_${line.id}`);
      const qtyEl = document.getElementById(`pl_qty_${line.id}`);
      const costEl = document.getElementById(`pl_cost_${line.id}`);
      const priceEl = document.getElementById(`pl_price_${line.id}`);
      const equipmentEl = document.getElementById(`pl_equipment_${line.id}`);

      if (skuEl) line.sku = skuEl.value.trim();
      if (line.sku) {
        const match = findProductBySku(line.sku);
        line.productId = match ? match.id : '';
        if (productEl) productEl.value = line.productId;
      } else if (productEl) line.productId = productEl.value;
      if (line.productId && !line.sku) { const product = state.products.find(p => p.id === line.productId); if (product) line.sku = product.sku || ''; }
      if (qtyEl) line.qty = qtyEl.value;
      if (costEl) line.unitCost = costEl.value;
      if (priceEl) line.unitPrice = priceEl.value;
      if (equipmentEl) line.asEquipment = equipmentEl.checked;

    });
  }
  const addPurchaseBtn = document.getElementById('addPurchaseBtn');
  bindOnce(addPurchaseBtn, 'click', () => {
    state.purchaseDraftLines = [{ id: uid('pl'), productId: '', sku: '', qty: '', unitCost: '', unitPrice: '' }];
    state.purchaseDraftMode = 'purchase'; state.editingReplenishmentBon = null;
    state.purchaseDraftSupplierId = ''; state.purchaseDraftDate = localDateInputValue(); state.purchaseDraftTime = localTimeInputValue(); state.purchaseDraftNote = ''; state.purchaseDraftBonNumber = ''; state.purchaseScanLineId = null;
    state.editingPurchase = 'new';
    render();
  });
  const replenishmentSalesFrom = document.getElementById('replenishmentSalesFrom');
  if (replenishmentSalesFrom) replenishmentSalesFrom.addEventListener('change', async (e) => {
    state.replenishmentSalesFilters.from = e.target.value;
    await safeSet('shop:replenishment-sales-filters', JSON.stringify(state.replenishmentSalesFilters), false);
    refreshContent();
  });
  const replenishmentSalesTo = document.getElementById('replenishmentSalesTo');
  if (replenishmentSalesTo) replenishmentSalesTo.addEventListener('change', async (e) => {
    state.replenishmentSalesFilters.to = e.target.value;
    await safeSet('shop:replenishment-sales-filters', JSON.stringify(state.replenishmentSalesFilters), false);
    refreshContent();
  });
  document.querySelectorAll('[data-edit-replenishment]').forEach(el => el.addEventListener('click', () => { const bon = state.replenishmentBons.find(x => x.id === el.dataset.editReplenishment); if (!bon) return; state.editingReplenishmentBon = bon; state.editingPurchase = 'new'; state.purchaseDraftMode = 'replenishment'; state.purchaseDraftLines = (bon.items || []).map((item, index) => ({ id: item.id || `${bon.id}_${index}`, productId: item.productId || '', sku: item.sku || '', qty: item.qty ?? '', unitCost: item.unitCost ?? '', unitPrice: item.unitPrice ?? '' })); state.purchaseDraftSupplierId = bon.supplierId || ''; state.purchaseDraftDate = localDateInputValue(bon.date); state.purchaseDraftTime = localTimeInputValue(bon.date); state.purchaseDraftBonNumber = bon.bonNumber || ''; state.purchaseDraftNote = bon.note || ''; render(); }));
  document.querySelectorAll('[data-delete-replenishment]').forEach(el => el.addEventListener('click', async () => { const index = state.replenishmentBons.findIndex(x => x.id === el.dataset.deleteReplenishment); if (index < 0 || !confirmLocalized('Supprimer ce bon d’achat préparé ?')) return; const bon = state.replenishmentBons[index]; state.replenishmentBons.splice(index, 1); if (await saveReplenishmentBons() === null) { state.replenishmentBons.splice(index, 0, bon); toast('Échec de suppression du bon'); return; } await logOperation('Bon d’achat supprimé', bon.bonNumber || bon.id); toast('Bon supprimé'); render(); }));
  document.querySelectorAll('[data-validate-replenishment]').forEach(el => el.addEventListener('click', async () => { const index = state.replenishmentBons.findIndex(x => x.id === el.dataset.validateReplenishment); const bon = state.replenishmentBons[index]; if (!bon) return; if (!confirmLocalized(`Enregistrer l’achat ${bon.bonNumber || bon.id} et ajouter ${bon.items.length} ligne(s) au stock ?`)) return; const purchase = { ...bon, id: uid('pu'), status: undefined }; delete purchase.status; state.purchases.push(purchase); state.replenishmentConsumedSaleIds = [...new Set([...(state.replenishmentConsumedSaleIds || []), ...(bon.sourceSaleIds || [])])]; state.replenishmentConsumedProductIds = [...new Set([...(state.replenishmentConsumedProductIds || []), ...(bon.sourceProductIds || bon.items.map(item => item.productId))])]; const results = await Promise.all([savePurchases(), saveReplenishmentBons(), saveReplenishmentConsumedSales(), safeSet('shop:replenishment-consumed-products', JSON.stringify(state.replenishmentConsumedProductIds || []), true)]); if (results.some(result => result === null)) { state.purchases = state.purchases.filter(x => x.id !== purchase.id); toast('Échec d’enregistrement de l’achat'); return; } state.replenishmentBons.splice(index, 1); await saveReplenishmentBons(); await logOperation('Achat validé depuis un bon', bon.bonNumber || bon.id); toast('Achat enregistré et stock mis à jour'); render(); }));
  document.querySelectorAll('[data-print-replenishment]').forEach(el => el.addEventListener('click', () => { const bon = state.replenishmentBons.find(x => x.id === el.dataset.printReplenishment); if (bon) printHTML(buildPurchaseOrderHTML(bon)); }));
  document.querySelectorAll('[data-pdf-replenishment]').forEach(el => el.addEventListener('click', () => { const bon = state.replenishmentBons.find(x => x.id === el.dataset.pdfReplenishment); if (bon) downloadBonPDF('purchase', bon); }));
  document.querySelectorAll('[data-share-replenishment-whatsapp]').forEach(el => el.addEventListener('click', () => { const bon = state.replenishmentBons.find(x => x.id === el.dataset.shareReplenishmentWhatsapp); if (bon) shareBon('purchase', bon, 'whatsapp'); }));
  document.querySelectorAll('[data-share-replenishment-email]').forEach(el => el.addEventListener('click', () => { const bon = state.replenishmentBons.find(x => x.id === el.dataset.shareReplenishmentEmail); if (bon) shareBon('purchase', bon, 'email'); }));
  document.querySelectorAll('[data-print-purchase]').forEach(el => el.addEventListener('click', () => { const purchase = state.purchases.find(x => x.id === el.dataset.printPurchase); if (purchase) { printHTML(buildPurchaseOrderHTML(purchase)); recordGeneratedDocument('purchase', purchase, 'Impression'); } }));
  document.querySelectorAll('[data-pdf-purchase]').forEach(el => el.addEventListener('click', () => { const purchase = state.purchases.find(x => x.id === el.dataset.pdfPurchase); if (purchase) { downloadBonPDF('purchase', purchase); recordGeneratedDocument('purchase', purchase, 'PDF'); } }));
  document.querySelectorAll('[data-share-purchase-whatsapp]').forEach(el => el.addEventListener('click', () => { const purchase = state.purchases.find(x => x.id === el.dataset.sharePurchaseWhatsapp); if (purchase) { shareBon('purchase', purchase, 'whatsapp'); recordGeneratedDocument('purchase', purchase, 'WhatsApp'); } }));
  document.querySelectorAll('[data-share-purchase-email]').forEach(el => el.addEventListener('click', () => { const purchase = state.purchases.find(x => x.id === el.dataset.sharePurchaseEmail); if (purchase) { shareBon('purchase', purchase, 'email'); recordGeneratedDocument('purchase', purchase, 'E-mail'); } }));
  document.querySelectorAll('[data-quick-add-product]').forEach(el => el.addEventListener('click', () => {
    syncPurchaseDraftFromDOM();
    state.purchaseQuickAddLineId = el.dataset.quickAddProduct;
    const line = state.purchaseDraftLines.find(item => item.id === state.purchaseQuickAddLineId);
    state.productDraft = line ? { stock: line.qty || '0', cost: line.unitCost || '', sell: line.unitPrice || '' } : null;
    state.editingProduct = 'new'; state.productPhotoDraft = null; render();
  }));
  document.querySelectorAll('[data-edit-purchase]').forEach(el => el.addEventListener('click', () => {
    const purchase = state.purchases.find(item => item.id === el.dataset.editPurchase);
    if (!purchase) return;
    if (!purchaseCanBeMutated(purchase)) { toast('Cet achat contient déjà des unités vendues et ne peut plus être modifié'); return; }
    state.purchaseDraftMode = 'purchase'; state.editingReplenishmentBon = null;
    state.editingPurchase = purchase;
    state.purchaseDraftLines = (purchase.items || []).map((item, index) => { const product = state.products.find(p => p.id === item.productId); return { id: item.id || `${purchase.id}_${index}`, productId: item.productId || '', sku: item.sku || product?.sku || '', bonNumber: item.bonNumber || purchase.bonNumber || '', qty: item.qty ?? '', unitCost: item.unitCost ?? '', unitPrice: item.unitPrice ?? '', asEquipment: !!item.asEquipment }; });
    state.purchaseDraftSupplierId = purchase.supplierId || '';
    state.purchaseDraftDate = localDateInputValue(purchase.date);
    state.purchaseDraftTime = localTimeInputValue(purchase.date);
    state.purchaseDraftNote = purchase.note || '';
    state.purchaseDraftBonNumber = purchase.bonNumber || '';
    render();
  }));
  document.querySelectorAll('[data-delete-purchase]').forEach(el => el.addEventListener('click', async () => {
    if (!hasPriv('products', 'delete')) { toast('Action non autorisée'); return; }
    const index = state.purchases.findIndex(item => item.id === el.dataset.deletePurchase);
    const purchase = state.purchases[index];
    if (!purchase) return;
    if (!purchaseCanBeMutated(purchase)) { toast('Cet achat contient déjà des unités vendues et ne peut plus être supprimé'); return; }
    if (!confirmLocalized('Supprimer cet achat et le lot de stock associé ?')) return;
    const previousConsumedSaleIds = [...(state.replenishmentConsumedSaleIds || [])];
    const previousConsumedProductIds = [...(state.replenishmentConsumedProductIds || [])];
    const purchaseProductIds = new Set((purchase.items || []).map(item => item.productId).filter(Boolean));
    const purchaseSourceSaleIds = new Set(purchase.sourceSaleIds || []);
    state.purchases.splice(index, 1);
    state.replenishmentConsumedSaleIds = (state.replenishmentConsumedSaleIds || []).filter(id => !purchaseSourceSaleIds.has(id));
    state.replenishmentConsumedProductIds = (state.replenishmentConsumedProductIds || []).filter(id => !purchaseProductIds.has(id));
    const results = await Promise.all([savePurchases(), saveReplenishmentConsumedSales(), safeSet('shop:replenishment-consumed-products', JSON.stringify(state.replenishmentConsumedProductIds || []), true)]);
    if (results.some(result => result === null)) { state.purchases.splice(index, 0, purchase); state.replenishmentConsumedSaleIds = previousConsumedSaleIds; state.replenishmentConsumedProductIds = previousConsumedProductIds; toast('Échec de suppression de l’achat'); return; }
    await logOperation('Suppression achat', `${purchase.id} · ${money(purchase.total)} DH`); toast('Achat supprimé'); render();
  }));
  document.querySelectorAll('[data-edit-stock]').forEach(el => el.addEventListener('click', () => {
    const [purchaseId, itemIndexText] = el.dataset.editStock.split(':');
    const purchase = state.purchases.find(item => item.id === purchaseId);
    if (!purchase) return;
    if (!purchaseCanBeMutated(purchase)) { toast('Ce lot contient déjà des unités vendues et ne peut plus être modifié'); return; }
    state.editingPurchase = purchase;
    state.purchaseDraftLines = (purchase.items || []).map((item, index) => { const product = state.products.find(p => p.id === item.productId); return { id: item.id || `${purchase.id}_${index}`, productId: item.productId || '', sku: item.sku || product?.sku || '', bonNumber: item.bonNumber || purchase.bonNumber || '', qty: item.qty ?? '', unitCost: item.unitCost ?? '', unitPrice: item.unitPrice ?? '' }; });
    state.purchaseDraftSupplierId = purchase.supplierId || '';
    state.purchaseDraftDate = localDateInputValue(purchase.date);
    state.purchaseDraftTime = localTimeInputValue(purchase.date);
    state.purchaseDraftNote = purchase.note || '';
    state.purchaseDraftFocusIndex = Number(itemIndexText) || 0;
    render();
  }));
  document.querySelectorAll('[data-delete-stock]').forEach(el => el.addEventListener('click', async () => {
    if (!hasPriv('products', 'delete')) { toast('Action non autorisée'); return; }
    const [purchaseId, itemIndexText] = el.dataset.deleteStock.split(':');
    const purchaseIndex = state.purchases.findIndex(item => item.id === purchaseId);
    const purchase = state.purchases[purchaseIndex]; const itemIndex = Number(itemIndexText);
    if (!purchase || !purchase.items?.[itemIndex]) return;
    if (!purchaseCanBeMutated(purchase)) { toast('Ce lot contient déjà des unités vendues et ne peut plus être supprimé'); return; }
    if (!confirmLocalized('Supprimer ce lot de stock ?')) return;
    const previousItems = purchase.items;
    purchase.items = purchase.items.filter((_, index) => index !== itemIndex);
    if (!purchase.items.length) state.purchases.splice(purchaseIndex, 1);
    else purchase.total = purchase.items.reduce((sum, item) => sum + (Number(item.qty) || 0) * (Number(item.unitCost) || 0), 0);
    const result = await savePurchases();
    if (result === null) { if (!state.purchases.includes(purchase)) state.purchases.splice(purchaseIndex, 0, purchase); purchase.items = previousItems; purchase.total = previousItems.reduce((sum, item) => sum + (Number(item.qty) || 0) * (Number(item.unitCost) || 0), 0); toast('Échec de suppression du lot'); return; }
    await logOperation('Suppression lot stock', `${purchase.id} · ${previousItems[itemIndex]?.name || 'Produit'}`); toast('Lot supprimé'); render();
  }));
  const cancelPurchaseModal = document.getElementById('cancelPurchaseModal');
  if (cancelPurchaseModal) cancelPurchaseModal.addEventListener('click', () => { state.editingPurchase = null; state.editingReplenishmentBon = null; state.purchaseDraftLines = null; state.purchaseDraftMode = 'purchase'; state.purchaseDraftSupplierId = ''; state.purchaseDraftDate = ''; state.purchaseDraftTime = ''; state.purchaseDraftNote = ''; state.purchaseDraftBonNumber = ''; state.purchaseScanLineId = null; render(); });
  const purchaseModalOverlay = document.getElementById('purchaseModalOverlay');
  const addPurchaseLine = document.getElementById('addPurchaseLine');
  if (addPurchaseLine) addPurchaseLine.addEventListener('click', () => {
    syncPurchaseDraftFromDOM();
    state.purchaseDraftLines.push({ id: uid('pl'), productId: '', sku: '', bonNumber: '', qty: '', unitCost: '', unitPrice: '' });
    render();
  });
  document.querySelectorAll('[data-remove-line]').forEach(el => el.addEventListener('click', () => {
    syncPurchaseDraftFromDOM();
    if (state.purchaseDraftLines.length <= 1) { toast('Au moins une ligne est requise'); return; }
    state.purchaseDraftLines = state.purchaseDraftLines.filter(l => l.id !== el.dataset.removeLine);
    render();
  }));
  document.querySelectorAll('[data-purchase-sku]').forEach(el => el.addEventListener('input', () => {
    const line = state.purchaseDraftLines.find(item => item.id === el.dataset.purchaseSku); if (!line) return;
    line.sku = el.value.trim();
    const product = line.sku ? findProductBySku(line.sku) : null;
    line.productId = product ? product.id : '';
    const select = document.getElementById(`pl_product_${line.id}`); if (select) select.value = line.productId;
    updatePurchaseSummary();
  }));
  document.querySelectorAll('[data-purchase-product]').forEach(el => el.addEventListener('change', () => {
    const line = state.purchaseDraftLines.find(item => item.id === el.dataset.purchaseProduct); const product = state.products.find(p => p.id === el.value); if (!line) return;
    line.productId = el.value; line.sku = product ? (product.sku || '') : ''; const sku = document.getElementById(`pl_sku_${line.id}`); if (sku) sku.value = line.sku;
    updatePurchaseSummary();
  }));
  document.querySelectorAll('[id^="pl_qty_"], [id^="pl_cost_"], [id^="pl_price_"]').forEach(el => el.addEventListener('input', () => {
    syncPurchaseDraftFromDOM(); updatePurchaseSummary();
  }));
  document.querySelectorAll('[data-scan-purchase-line]').forEach(el => el.addEventListener('click', () => {
    syncPurchaseDraftFromDOM(); state.purchaseScanLineId = el.dataset.scanPurchaseLine; openScanner('purchase');
  }));
  const savePurchaseModal = document.getElementById('savePurchaseModal');
  updatePurchaseSummary();
  if (savePurchaseModal) savePurchaseModal.addEventListener('click', async () => {
    syncPurchaseDraftFromDOM();
    const supplierId = state.purchaseDraftSupplierId || null;
    const date = state.purchaseDraftDate || localDateInputValue();
    const time = state.purchaseDraftTime || localTimeInputValue();
    const note = state.purchaseDraftNote || '';
    const bonNumber = state.purchaseDraftBonNumber || nextPurchaseBonNumber();
    const items = [];
    for (const l of state.purchaseDraftLines) {
      const productId = l.productId;
      const qty = parseInt(l.qty, 10) || 0;
      const unitCost = parseFloat(l.unitCost) || 0;
      const unitPrice = parseFloat(l.unitPrice) || 0;
      if (!productId || qty <= 0) continue;
      const p = state.products.find(pp => pp.id === productId);
      if (!p) continue;
      items.push({ productId, name: p.name, sku: p.sku || '', bonNumber: l.bonNumber || bonNumber, qty, unitCost, unitPrice, qtyRemaining: qty, asEquipment: !!l.asEquipment });
    }
    if (items.length === 0) { toast('Ajoutez au moins un produit avec une quantité valide'); return; }
    const total = items.reduce((s, it) => s + it.qty * it.unitCost, 0);
    if (state.purchaseDraftMode === 'replenishment') {
      const existingBon = state.editingReplenishmentBon;
      const nextBon = { id: existingBon?.id || uid('rb'), bonNumber, date: localIsoFromParts(date, time), supplierId, items, total, note, status: 'prepared', sourceSaleIds: existingBon?.sourceSaleIds || state.purchaseDraftSourceSaleIds || [], sourceProductIds: items.map(item => item.productId).filter(Boolean) };
      const previousBon = existingBon ? JSON.parse(JSON.stringify(existingBon)) : null;
      if (existingBon) Object.assign(existingBon, nextBon); else state.replenishmentBons.unshift(nextBon);
      const bonSaveResult = await saveReplenishmentBons();
      if (bonSaveResult === null) {
        if (existingBon) Object.assign(existingBon, previousBon); else state.replenishmentBons = state.replenishmentBons.filter(item => item.id !== nextBon.id);
        toast('Échec de sauvegarde du bon d’achat'); return;
      }
      await logOperation(existingBon ? 'Bon d’achat modifié' : 'Bon d’achat préparé', `${bonNumber} · ${money(total)} DH`);
      state.editingPurchase = null; state.editingReplenishmentBon = null; state.purchaseDraftLines = null; state.purchaseDraftMode = 'purchase'; state.purchaseDraftSourceSaleIds = []; state.purchaseDraftSourceProductIds = []; state.purchaseDraftSupplierId = ''; state.purchaseDraftDate = ''; state.purchaseDraftTime = ''; state.purchaseDraftNote = ''; state.purchaseDraftBonNumber = ''; state.purchaseScanLineId = null;
      toast('Bon d’achat préparé'); render(); return;
    }
    const existingPurchase = state.editingPurchase && state.editingPurchase !== 'new' ? state.editingPurchase : null;
    if (items.some(item => item.asEquipment)) {
      const sup = state.suppliers.find(s => s.id === supplierId);
      const equipmentItems = items.filter(item => item.asEquipment);
      const stockItems = items.filter(item => !item.asEquipment).map(({ asEquipment, ...item }) => item);
      const equipment = equipmentItems.map(item => { const product = state.products.find(p => p.id === item.productId); return { id: uid('eq'), date: localIsoFromParts(date, time), bonNumber, name: item.name, category: product?.category || 'Autre', amount: item.qty * item.unitCost, supplier: sup?.name || '', payment: 'Autre', note: note || `Achat ${bonNumber} enregistré comme équipement`, source: { type: 'purchase', bonNumber, productId: item.productId, quantity: item.qty, unitCost: item.unitCost } }; });
      const previousPurchase = existingPurchase ? JSON.parse(JSON.stringify(existingPurchase)) : null;
      state.equipmentPurchases.push(...equipment);
      const purchase = stockItems.length ? { id: existingPurchase?.id || uid('pu'), bonNumber, date: localIsoFromParts(date, time), supplierId, items: stockItems, total: stockItems.reduce((sum, item) => sum + item.qty * item.unitCost, 0), note } : null;
      if (existingPurchase) {
        if (purchase) Object.assign(existingPurchase, purchase);
        else state.purchases = state.purchases.filter(item => item.id !== existingPurchase.id);
      } else if (purchase) state.purchases.push(purchase);
      const results = await Promise.all([saveEquipmentPurchases(), savePurchases()]);
      if (results.some(result => result === null)) {
        state.equipmentPurchases.splice(-equipment.length, equipment.length);
        if (existingPurchase) { if (previousPurchase) { if (!state.purchases.some(item => item.id === existingPurchase.id)) state.purchases.push(existingPurchase); Object.assign(existingPurchase, previousPurchase); } }
        else if (purchase) state.purchases = state.purchases.filter(item => item.id !== purchase.id);
        toast('Échec de sauvegarde de la conversion en équipement'); return;
      }
      await logOperation(existingPurchase ? 'Achat modifié et converti en équipement' : 'Achat enregistré', `${money(total)} DH · ${equipment.length} équipement(s)${stockItems.length ? ` · ${stockItems.length} ligne(s) stock` : ''}${sup ? ' · ' + sup.name : ''}`);
      state.editingPurchase = null; state.editingReplenishmentBon = null; state.purchaseDraftLines = null; state.purchaseDraftMode = 'purchase'; state.purchaseDraftSourceSaleIds = []; state.purchaseDraftSourceProductIds = []; state.purchaseDraftSupplierId = ''; state.purchaseDraftDate = ''; state.purchaseDraftTime = ''; state.purchaseDraftNote = ''; state.purchaseDraftBonNumber = ''; state.purchaseScanLineId = null;
      toast('Achat enregistré dans Équipements'); render(); return;
    }
    const nextPurchase = { id: existingPurchase?.id || uid('pu'), bonNumber, date: localIsoFromParts(date, time), supplierId, items, total, note };
    const previousPurchase = existingPurchase ? JSON.parse(JSON.stringify(existingPurchase)) : null;
    if (existingPurchase) Object.assign(existingPurchase, nextPurchase); else state.purchases.push(nextPurchase);
    const purchaseSaveResult = await savePurchases();
    if (purchaseSaveResult === null) {
      if (existingPurchase) Object.assign(existingPurchase, previousPurchase); else state.purchases = state.purchases.filter(item => item.id !== nextPurchase.id);
      toast('Échec de sauvegarde de l’achat'); return;
    }
    const sup = state.suppliers.find(s => s.id === supplierId);
    await logOperation(existingPurchase ? 'Achat modifié' : 'Achat enregistré', `${money(total)} DH · ${items.length} produit(s)${sup ? ' · ' + sup.name : ''}`);
    state.editingPurchase = null; state.editingReplenishmentBon = null; state.purchaseDraftLines = null; state.purchaseDraftMode = 'purchase'; state.purchaseDraftSourceSaleIds = []; state.purchaseDraftSourceProductIds = []; state.purchaseDraftSupplierId = ''; state.purchaseDraftDate = ''; state.purchaseDraftTime = ''; state.purchaseDraftNote = ''; state.purchaseDraftBonNumber = ''; state.purchaseScanLineId = null;
    toast('Achat enregistré et stock mis à jour');
    render();
  });
}

function refreshContent() {
  const c = document.getElementById('content');
  if (!c) return;
  const active = document.activeElement;
  const activeId = active && c.contains(active) ? active.id : null;
  // Reading .selectionStart throws a DOMException on number/date/email inputs
  // in real browsers (unlike text inputs) — must be wrapped, or the exception
  // aborts this function before the re-render even happens.
  let selStart = null, selEnd = null;
  if (active) {
    try { selStart = active.selectionStart; selEnd = active.selectionEnd; }
    catch (e) { selStart = null; selEnd = null; }
  }
  const scrollPositions = ['.pos-products-scroll', '.pos-categories-scroll', '.pos-right-zone', '.cart-items']
    .map(selector => ({ selector, element: c.querySelector(selector) }))
    .filter(item => item.element)
    .map(item => ({ selector: item.selector, top: item.element.scrollTop, left: item.element.scrollLeft }));
  c.innerHTML = renderView();
  bindEvents();
  applyLanguage();
  translateRenderedInterface(c);
  bindLanguageSelector();
  scrollPositions.forEach(({ selector, top, left }) => { const el = c.querySelector(selector); if (el) { el.scrollTop = top; el.scrollLeft = left; } });
  if (activeId) {
    const el = document.getElementById(activeId);
    if (el) {
      el.focus();
      if (selStart !== null) {
        try { el.setSelectionRange(selStart, selEnd); } catch (e) {}
      }
    }
  }
}
function refreshPOS() { refreshContent(); }

/* ============================================================
   Barcode scanner (Produits & Caisse)
   Lives outside #root in its own #scannerOverlay node so that the
   live camera stream is never destroyed by the app's normal render()
   cycle (which replaces #root's innerHTML wholesale).
   ============================================================ */
let scannerInstance = null;
let scannerRunning = false;
let scannerContext = null; // 'products' | 'pos'
let scannerQty = 1; // quantity added to cart per successful POS scan
let scannerZoom = 1;
let scannerZoomTrack = null;
let scannerZoomCapabilities = null;
let lastScanCode = null;
let lastScanTime = 0;

function scannerModalHTML(context) {
  return `
    <div class="modal-overlay" role="dialog" aria-modal="true" id="scannerModalOverlay">
      <div class="modal">
        <button type="button" class="modal-close icon-btn" id="scannerTopCloseBtn" aria-label="Fermer la fenêtre" title="Fermer">${ICONS.close}</button>
        <h2>Scanner un code-barres</h2>
        <div id="scannerReader" class="scanner-reader"></div>
        <div class="scanner-controls">
          <button class="btn btn-primary" id="scannerStartBtn">${ICONS.scan}Démarrer la caméra</button>
          <button class="btn" id="scannerStopBtn" style="display:none;">Arrêter</button>
        </div>
        <div class="scanner-zoom-panel" aria-label="Réglage du zoom de la caméra">
          <span class="scanner-zoom-label">Zoom <strong id="scannerZoomValue">1×</strong></span>
          <button type="button" class="btn btn-sm icon-btn" id="scannerZoomOut" title="Dézoomer" aria-label="Dézoomer">−</button>
          <input id="scannerZoomRange" type="range" min="1" max="4" step="0.1" value="1" aria-label="Niveau de zoom">
          <button type="button" class="btn btn-sm icon-btn" id="scannerZoomIn" title="Zoomer" aria-label="Zoomer">+</button>
          <span class="muted scanner-zoom-hint" id="scannerZoomHint">Réglage disponible après activation</span>
        </div>
        ${context === 'pos' ? `
        <div class="field" style="margin-top:12px;">
          <label>Quantité à ajouter par scan</label>
          <div class="qty-ctrl" style="width:fit-content;padding:5px 10px;">
            <button type="button" id="scannerQtyDec">−</button>
            <span id="scannerQtyValue" style="min-width:24px;">1</span>
            <button type="button" id="scannerQtyInc">+</button>
          </div>
        </div>
        ` : ''}
        <div class="field" style="margin-top:12px;">
          <label>Ou saisir le code manuellement</label>
          <div style="display:flex;gap:8px;">
            <input type="text" id="scannerManualInput" placeholder="Code-barres / Code P" autocomplete="off">
            <button class="btn" id="scannerManualBtn">Valider</button>
          </div>
        </div>
        <div class="scanner-status" id="scannerStatusText"></div>
        ${context === 'pos' ? `
        <div class="field" style="margin-top:6px;">
          <label>Produits scannés dans cette session</label>
          <div id="scannedItemsList" class="scanned-items-list"></div>
        </div>
        ` : ''}
        <div class="modal-actions">
          <button class="btn" id="scannerCloseBtn">Fermer</button>
        </div>
      </div>
    </div>`;
}

// Refreshes the live list of scanned products shown inside the scanner
// modal itself. Only touches that one list element (a plain DOM update,
// not the app's render() cycle) — the camera stream is a sibling node and
// is never disturbed.
function refreshScannedItemsList() {
  const el = document.getElementById('scannedItemsList');
  if (!el) return;
  const lines = state.posCart.map(line => {
    const p = productById(line.productId);
    return p ? { p, qty: line.qty, price: line.price } : null;
  }).filter(Boolean);
  if (lines.length === 0) {
    el.innerHTML = `<div class="muted" style="font-size:12px;">Aucun produit scanné pour l'instant.</div>`;
    return;
  }
  el.innerHTML = lines.map(l => `
    <div class="scanned-item-row">
      <span>${esc(l.p.name)}</span>
      <span class="mono">${l.qty} × ${money(l.price)} = <strong>${money(l.qty * l.price)}</strong> DH</span>
    </div>
  `).join('');
}

function openScanner(context) {
  scannerContext = context;
  scannerQty = 1;
  scannerZoom = 1; scannerZoomTrack = null; scannerZoomCapabilities = null;
  const overlay = document.getElementById('scannerOverlay');
  overlay.innerHTML = scannerModalHTML(context);
  overlay.style.display = 'flex';
  bindScannerEvents();
  if (context === 'pos') refreshScannedItemsList();
  setScannerStatus(context === 'pos'
    ? 'Scannez un article pour l’ajouter au panier, ou saisissez son code manuellement.'
    : context === 'purchase'
      ? 'Scannez le code pour remplir la ligne de réception sélectionnée.'
      : 'Scannez le code du produit, ou saisissez-le manuellement.');
}

async function closeScanner() {
  const closingContext = scannerContext;
  await stopScannerCamera();
  const overlay = document.getElementById('scannerOverlay');
  overlay.style.display = 'none';
  overlay.innerHTML = '';
  scannerContext = null;
  if (closingContext === 'purchase') state.purchaseScanLineId = null;
  if (closingContext === 'bulk-sale') state.bulkSaleScanLineId = null;
  if (closingContext === 'bulk-product') state.bulkProductScanLineId = null;
}

function setScannerStatus(msg, isError) {
  const el = document.getElementById('scannerStatusText');
  if (el) { el.textContent = msg; el.style.color = isError ? 'var(--danger)' : 'var(--muted)'; }
}

function updateScannerZoomLabel() {
  const label = document.getElementById('scannerZoomValue');
  if (label) label.textContent = `${Number(scannerZoom).toFixed(1).replace('.0', '')}×`;
  const range = document.getElementById('scannerZoomRange');
  if (range) range.value = String(scannerZoom);
}
async function applyScannerZoom() {
  updateScannerZoomLabel();
  const video = document.querySelector('#scannerReader video');
  if (video) {
    video.style.transform = `scale(${scannerZoom})`;
    video.style.transformOrigin = 'center center';
  }
  if (scannerZoomTrack && scannerZoomCapabilities && scannerZoomCapabilities.zoom) {
    const min = Number(scannerZoomCapabilities.zoom.min ?? 1);
    const max = Number(scannerZoomCapabilities.zoom.max ?? 4);
    const value = Math.max(min, Math.min(max, scannerZoom));
    try {
      await scannerZoomTrack.applyConstraints({ advanced: [{ zoom: value }] });
      const hint = document.getElementById('scannerZoomHint');
      if (hint) hint.textContent = 'Zoom caméra actif';
    } catch (e) {
      const hint = document.getElementById('scannerZoomHint');
      if (hint) hint.textContent = 'Zoom visuel actif';
    }
  }
}
function setScannerZoom(value) {
  scannerZoom = Math.max(1, Math.min(4, Math.round(Number(value) * 10) / 10));
  applyScannerZoom();
}
function bindScannerEvents() {
  document.getElementById('scannerCloseBtn').addEventListener('click', closeScanner);
  const scannerTopCloseBtn = document.getElementById('scannerTopCloseBtn');
  if (scannerTopCloseBtn) scannerTopCloseBtn.addEventListener('click', closeScanner);
  document.getElementById('scannerStartBtn').addEventListener('click', startScannerCamera);
  document.getElementById('scannerStopBtn').addEventListener('click', stopScannerCamera);
  const zoomRange = document.getElementById('scannerZoomRange');
  const zoomOut = document.getElementById('scannerZoomOut');
  const zoomIn = document.getElementById('scannerZoomIn');
  if (zoomRange) zoomRange.addEventListener('input', e => setScannerZoom(e.target.value));
  if (zoomOut) zoomOut.addEventListener('click', () => setScannerZoom(scannerZoom - 0.1));
  if (zoomIn) zoomIn.addEventListener('click', () => setScannerZoom(scannerZoom + 0.1));
  updateScannerZoomLabel();
  const qtyDec = document.getElementById('scannerQtyDec');
  const qtyInc = document.getElementById('scannerQtyInc');
  const qtyValue = document.getElementById('scannerQtyValue');
  if (qtyDec) qtyDec.addEventListener('click', () => { scannerQty = Math.max(1, scannerQty - 1); qtyValue.textContent = scannerQty; });
  if (qtyInc) qtyInc.addEventListener('click', () => { scannerQty = Math.min(999, scannerQty + 1); qtyValue.textContent = scannerQty; });
  const manualBtn = document.getElementById('scannerManualBtn');
  const manualInput = document.getElementById('scannerManualInput');
  manualBtn.addEventListener('click', () => {
    const code = manualInput.value.trim();
    if (code) { handleScannedCode(code); manualInput.value = ''; }
  });
  manualInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') manualBtn.click(); });
  setTimeout(() => manualInput.focus(), 50);
}

async function startScannerCamera() {
  if (scannerRunning) return;
  setScannerStatus('Activation de la caméra…');
  try {
    await ensureScannerLoaded();
    if (typeof Html5Qrcode === 'undefined') {
      setScannerStatus('Bibliothèque de scan indisponible — vérifiez votre connexion internet, ou utilisez la saisie manuelle.', true);
      return;
    }
    scannerInstance = new Html5Qrcode('scannerReader');
    await scannerInstance.start(
      { facingMode: 'environment' },
      { fps: 10, qrbox: { width: 260, height: 140 }, videoConstraints: { facingMode: { exact: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 }, zoom: 1 } },
      (decodedText) => {
        const now = Date.now();
        // Short cooldown to avoid one physical hold firing many times per
        // second (fps:10), while still letting the SAME product be scanned
        // again quickly to increment its quantity further.
        if (now - lastScanTime < 700) return;
        lastScanCode = decodedText; lastScanTime = now;
        handleScannedCode(decodedText);
      },
      () => { /* per-frame decode misses are expected, ignore */ }
    );
    scannerRunning = true;
    const video = document.querySelector('#scannerReader video');
    scannerZoomTrack = video?.srcObject?.getVideoTracks?.()[0] || null;
    scannerZoomCapabilities = scannerZoomTrack?.getCapabilities?.() || null;
    const zoomRange = document.getElementById('scannerZoomRange');
    const zoomHint = document.getElementById('scannerZoomHint');
    if (zoomRange && scannerZoomCapabilities?.zoom) {
      zoomRange.min = String(Math.max(1, Number(scannerZoomCapabilities.zoom.min || 1)));
      zoomRange.max = String(Math.min(4, Number(scannerZoomCapabilities.zoom.max || 4)));
      zoomRange.step = String(scannerZoomCapabilities.zoom.step || 0.1);
    }
    if (zoomHint) zoomHint.textContent = scannerZoomCapabilities?.zoom ? 'Zoom caméra actif' : 'Zoom visuel disponible';
    await applyScannerZoom();
    const startBtn = document.getElementById('scannerStartBtn');
    const stopBtn = document.getElementById('scannerStopBtn');
    if (startBtn) startBtn.style.display = 'none';
    if (stopBtn) stopBtn.style.display = 'inline-flex';
    setScannerStatus('Caméra active — visez un code-barres.');
  } catch (err) {
    console.error(err);
    setScannerStatus("Impossible d'accéder à la caméra. Autorisez l'accès dans votre navigateur ou utilisez la saisie manuelle.", true);
  }
}

async function stopScannerCamera() {
  if (scannerInstance && scannerRunning) {
    try { await scannerInstance.stop(); scannerInstance.clear(); } catch (e) {}
  }
  scannerRunning = false;
  scannerZoomTrack = null; scannerZoomCapabilities = null;
  const startBtn = document.getElementById('scannerStartBtn');
  const stopBtn = document.getElementById('scannerStopBtn');
  if (startBtn) startBtn.style.display = 'inline-flex';
  if (stopBtn) stopBtn.style.display = 'none';
}

function applyPurchaseProductToLine(lineId, product) {
  const line = state.purchaseDraftLines && state.purchaseDraftLines.find(item => item.id === lineId);
  if (!line || !product) return false;
  line.productId = product.id; line.sku = product.sku || '';
  return true;
}
function handleScannedCode(code) {
  const trimmed = code.trim();
  if (!trimmed) return;
  const product = state.products.find(p => p.sku && p.sku.toLowerCase() === trimmed.toLowerCase());
  playScanBeep();

  if (scannerContext === 'pos') {
      if (product) {
        if (product.archived) { setScannerStatus(`Produit archivé : ${product.name}`, true); return; }
        const stock = productStock(product.id);
      if (stock <= 0) { setScannerStatus(`Rupture de stock : ${product.name}`, true); return; }
      const qtyToAdd = scannerQty || 1;
      bumpCartLine(product.id, qtyToAdd, stock, productSellPrice(product.id));
      state.posPaidOverride = null;
      refreshPOS(); // only touches #content inside #root — the scanner overlay is untouched
      refreshScannedItemsList(); // updates the list inside the scanner modal itself
      setScannerStatus(`✓ Ajouté au panier : ${qtyToAdd}× ${product.name}`);
    } else {
      setScannerStatus(`Aucun produit trouvé avec le code "${trimmed}".`, true);
    }
  } else if (scannerContext === 'purchase') {
    if (product && state.purchaseScanLineId && applyPurchaseProductToLine(state.purchaseScanLineId, product)) {
      const lineId = state.purchaseScanLineId;
      closeScanner();
      render();
      setTimeout(() => { const qty = document.getElementById(`pl_qty_${lineId}`); if (qty) qty.focus(); }, 40);
      toast(`Produit ajouté à la ligne : ${product.name}`);
    } else if (!product) {
      setScannerStatus(`Aucun produit trouvé avec le code "${trimmed}".`, true);
    }
  } else if (scannerContext === 'bulk-sale') {
    const line = state.bulkSaleLines?.find(item => item.id === state.bulkSaleScanLineId);
    if (product && line && !product.archived) {
      line.productId = product.id; line.sku = product.sku || ''; line.unitPrice = String(productSellPrice(product.id));
      closeScanner(); render();
      setTimeout(() => document.getElementById(`bl_qty_${line.id}`)?.focus(), 40);
      toast(`Produit ajouté à la ligne : ${product.name}`);
    } else if (!product) setScannerStatus(`Aucun produit trouvé avec le code "${trimmed}".`, true);
  } else if (scannerContext === 'bulk-product') {
    const line = state.bulkProductLines?.find(item => item.id === state.bulkProductScanLineId);
    if (line && product) {
      line.sku = product.sku || trimmed;
      closeScanner(); render();
      toast(`Code produit ajouté : ${product.name}`);
    } else if (line) {
      line.sku = trimmed;
      closeScanner(); render();
      toast('Code produit saisi dans la ligne');
    }
  } else if (scannerContext === 'products') {
    if (product) {
      closeScanner();
      state.editingProduct = product;
      render();
      toast('Produit existant trouvé : ' + product.name);
    } else {
      closeScanner();
      state.editingProduct = 'new';
      render();
      setTimeout(() => { const el = document.getElementById('f_sku'); if (el) el.value = trimmed; }, 30);
      toast('Nouveau produit — code pré-rempli, complétez les informations');
    }
  }
}

function playScanBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = 880;
    osc.connect(gain); gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    osc.start(); osc.stop(ctx.currentTime + 0.09);
  } catch (e) {}
}

function bindGlobalKeyboardEvents() {
  if (window.__phoneStockKeyboardBound) return;
  window.__phoneStockKeyboardBound = true;
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (scannerContext) { closeScanner(); return; }
    if (state.receiptSale) state.receiptSale = null;
    else if (state.editingSale) state.editingSale = null;
    else if (state.bulkSaleModalOpen) resetBulkSaleDraft();
    else if (state.invoiceDraft !== null) state.invoiceDraft = null;
    else if (state.editingProduct) { state.editingProduct = null; state.productPhotoDraft = undefined; }
    else if (state.editingClient) state.editingClient = null;
    else if (state.editingUser) state.editingUser = null;
    else if (state.editingPayment || state.paymentClientId) { state.editingPayment = null; state.paymentClientId = null; }
    else if (state.editingSupplier) state.editingSupplier = null;
    else if (state.editingPurchase) { state.editingPurchase = null; state.purchaseDraftLines = null; state.purchaseDraftTime = ''; }
    else if (state.showClearStorageModal) state.showClearStorageModal = false;
    else return;
    render();
  });
}

/* ---------------- Init ---------------- */
bindGlobalKeyboardEvents();
bindBrowserNavigation();
loadAll();

/* MARKER_END_OF_SCRIPT */

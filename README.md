# PhoneStock — Gestion de boutique de téléphones et accessoires

PhoneStock est une application web monopage permettant de gérer les produits, les lots de stock, les achats, les fournisseurs, les ventes, les clients, les paiements, les factures, les utilisateurs et les sauvegardes.

La version fournie fonctionne entièrement dans le navigateur et ne nécessite ni serveur ni étape de compilation. Les données sont stockées localement dans IndexedDB, avec repli sur `localStorage`. Dans certains environnements intégrés disposant de `window.storage`, le stockage partagé de cet environnement peut être utilisé.

> **Limite importante :** le stockage local et l’authentification exécutée dans le navigateur conviennent à un outil local léger, mais ne constituent pas une solution sécurisée pour une utilisation multi-utilisateur professionnelle. Pour plusieurs appareils, il faut prévoir un backend, une authentification serveur, une base de données et des sauvegardes centralisées.

## Fichiers du projet

| Fichier | Description |
|---|---|
| `index.html` | Point d’entrée HTML, métadonnées, bibliothèques externes et conteneurs de l’application |
| `style.css` | Thème sombre/clair, composants, responsive design, impression et accessibilité visuelle |
| `app.js` | Logique applicative, état, stockage, migrations, rendu et actions métier |
| `README.md` | Documentation et limites connues |
| `TEST_PLAN.md` | Plan de test fonctionnel et résultats du test rapide |

## Lancement

Aucune installation n’est nécessaire. Placez les quatre fichiers principaux dans le même dossier, puis ouvrez `index.html` dans un navigateur récent.

Si l’accès direct `file://` pose problème, démarrez un serveur local :

```bash
python3 -m http.server 8000
```

Ouvrez ensuite `http://localhost:8000`.

Une connexion Internet est utilisée pour les polices Google Fonts, SheetJS, jsPDF et html5-qrcode. L’application conserve ses fonctions principales sans ces bibliothèques, mais l’import/export Excel, l’export PDF et la caméra peuvent être indisponibles hors connexion.

## Fonctionnalités

L’application propose un catalogue de produits avec nom, marque, modèle, catégorie, Code P, photo, seuil d’alerte et statut archivé. Un produit archivé reste visible dans le catalogue et dans l’historique, mais il n’est plus proposé à la caisse. Il peut être réactivé.

Le stock est organisé par lots d’achat. Chaque lot conserve la quantité, le coût, le prix de vente, le fournisseur et la date. Les ventes consomment les lots selon la règle FIFO, c’est-à-dire les lots les plus anciens en premier. Le stock est revérifié au moment de l’encaissement afin d’éviter une quantité négative lorsqu’une donnée a changé entre l’ajout au panier et la vente.

La caisse prend en charge les ventes comptant, les paiements partiels associés à un client, les remises, plusieurs moyens de paiement, le scanner manuel ou caméra, la génération d’un reçu et l’affichage du reste dû.

Le module **Services** permet de créer un catalogue de prestations non stockées, notamment les réparations, remplacements d’écran, installations de logiciels, configurations de téléphones, transferts de données, déblocages/diagnostics, impressions/photocopies et services personnalisés. Chaque fiche conserve le nom, la catégorie, le prix de vente, le coût éventuel, la marge calculée et une description. Depuis ce catalogue, une prestation peut être vendue avec la date, le client, le vendeur, le mode de paiement et une note. Une vente de service est enregistrée dans **Ventes** et dans les **Rapports marges**, mais ne crée aucun produit, lot ou mouvement de stock.

Les modules clients et fournisseurs conservent les coordonnées, les codes, l’historique et les relations avec les ventes, achats, paiements et factures. Les suppressions d’éléments possédant un historique sont bloquées afin de préserver l’intégrité des données.

Les **recharges de comptes** disposent d’un module dédié. Un compte téléphonique, opérateur, portefeuille électronique, compte prépayé ou avance de trésorerie peut être alimenté par un dépôt, puis débité lors d’une vente totale ou partielle. Le système bloque toute vente supérieure au solde disponible. La marge est calculée séparément selon un taux configurable dans **Administration → Paramètres recharges** (6,5 % par défaut) et les opérations sont incluses dans l’historique, les rapports et les sauvegardes.

Les données des services et des recharges sont persistées dans IndexedDB, avec repli localStorage. Elles sont relues après actualisation, incluses dans les sauvegardes JSON et restaurées avec les autres collections. Une purge complète du stockage supprime également les clés `shop:services`, `shop:service-categories`, `shop:recharge-accounts` et `shop:recharge-margin-rate`.

Les services et leurs catégories sont inclus dans les sauvegardes JSON. Les ventes de services sont identifiées par leur ligne `serviceId` et `isService`, ce qui permet de les distinguer des produits tout en conservant le même historique de ventes.

Les utilisateurs disposent de permissions par module et par action. Les contrôles sont appliqués dans l’interface et vérifiés dans les gestionnaires d’actions. Le compte administrateur peut gérer les comptes vendeurs et leurs privilèges.

## Sauvegarde et restauration

L’export JSON inclut maintenant la version du schéma, la date d’export et les collections suivantes :

| Donnée | Incluse dans la sauvegarde JSON |
|---|---:|
| Produits | Oui |
| Clients | Oui |
| Ventes | Oui |
| Utilisateurs | Oui |
| Paiements | Oui |
| Journal d’opérations | Oui |
| Fournisseurs | Oui |
| Achats et lots | Oui |
| Factures | Oui |
| Préférence de thème | Oui |

Avant une restauration, l’application valide la structure du fichier, refuse une version plus récente non compatible, affiche un résumé et télécharge une sauvegarde de sécurité des données actuelles. Les anciennes sauvegardes ne contenant que les produits et clients restent acceptées ; les collections absentes sont initialisées avec des valeurs sûres.

La restauration applique également les migrations connues : permissions utilisateurs, numéros de bons, codes clients, lots de stock et valeurs héritées. En cas d’échec d’écriture, l’état précédent est rétabli autant que possible.

## Import Excel

L’import Excel utilise principalement les feuilles `Produits`, `Stock & Prix` et `Clients`. Il vérifie les Code P dupliqués, les quantités entières non négatives et les prix valides avant de remplacer le catalogue importé.

Les photos déjà présentes sont conservées par correspondance de Code P lorsque le produit reste identifiable. Les ventes, paiements, fournisseurs, factures et utilisateurs ne sont pas remplacés par cet import catalogue. Une sauvegarde JSON doit néanmoins être réalisée avant tout import important.

## Protection des données métier

Un produit lié à un achat ou à une vente ne peut pas être supprimé physiquement. Un client lié à une vente, un paiement ou une facture ne peut pas être supprimé. Un fournisseur lié à un achat ne peut pas être supprimé. Les comptes administrateurs protégés ne peuvent pas être supprimés depuis l’interface, et le dernier administrateur ne doit pas être supprimé.

Les valeurs affichées provenant des données sont échappées avant insertion dans le HTML. Les images importées sont filtrées afin de n’accepter que les données d’image ou les URL HTTPS. Les modales peuvent être fermées avec la touche `Échap`, et les éléments interactifs disposent d’un focus clavier visible.

## Données de test locales

Un test rapide a été effectué avec un compte et un produit fictifs. Il a vérifié la création d’un produit avec un stock initial, l’archivage et la réactivation, l’exclusion du produit archivé dans la caisse, l’ajout au panier, l’encaissement d’une vente fictive, la génération du reçu, la décrémentation du stock de 5 à 4 unités et l’apparition de la vente dans l’historique.

Pour repartir d’un environnement vide, utilisez **Paramètres → Sauvegarde → Zone dangereuse**. Cette action est irréversible. Exportez une sauvegarde JSON avant de vider les données.

## Développement et vérifications

Dans le rapport financier, le reste du capital est calculé ainsi : `Capital configuré − (stock restant au prix d’achat + prix d’achat des produits vendus + équipements acquis + achats de stock + solde des recharges immobilisé + recharges vendues)`.

Le projet ne possède pas d’étape de compilation. Après modification de `app.js`, exécutez au minimum :

```bash
node --check app.js
```

Puis ouvrez l’application dans un navigateur et testez les flux listés dans `TEST_PLAN.md`. Les erreurs d’exécution doivent être vérifiées dans la console du navigateur.

## Limites restantes

Le système reste une application frontend-only. Les mots de passe sont transformés côté navigateur par un hachage léger destiné à éviter leur stockage en clair, mais ce mécanisme ne remplace pas un hachage serveur moderne ni un contrôle d’accès côté backend.

L’import Excel conserve les photos par Code P lorsque cela est possible, mais les photos ne sont pas transportées dans le classeur Excel lui-même. Le scanner caméra dépend des permissions du navigateur et de la disponibilité de la bibliothèque externe. Les données restent propres au navigateur ou à l’environnement de stockage utilisé ; elles ne sont pas automatiquement synchronisées entre appareils.

## Export et import Excel par module

Les modules **Produits**, **Stock**, **Achats**, **Clients** et **Historique ventes** disposent maintenant de leurs propres boutons **Exporter Excel** et **Importer Excel**.

| Module | Export | Import | Effet de l’import |
|---|---|---|---|
| Produits | Catalogue, Code P, nom, marque, modèle, catégorie, seuil, statut archivé et stock indicatif | Code P, identité produit, catégorie, seuil et statut archivé | Met à jour les produits correspondant au Code P sans modifier les lots de stock |
| Stock | Lots, quantités, quantités restantes, prix, fournisseur et date | Code P, quantité à ajouter, prix, date et fournisseur | Crée un nouveau lot et augmente le stock actuel |
| Achats | Achats aplatis par ligne de produit avec fournisseur, prix et note | Achats groupés par `ID achat`, Code P, quantités et prix | Ajoute les achats et les lots correspondants au stock actuel |
| Clients | Code, nom, téléphone, email, notes, ventes et solde indicatif | Code client, nom, téléphone, email et notes | Met à jour les codes existants sans supprimer ni modifier ventes et paiements |
| Historique ventes | Une ligne par article vendu, avec vente, client, vendeur, paiement, statut, prix et coût | Lignes regroupées par `ID vente` ou numéro | Ajoute des ventes historiques sans diminuer le stock et sans créer de paiements |

Chaque import vérifie la présence de la bibliothèque Excel, les colonnes essentielles, les Code P connus lorsque cela est nécessaire, les quantités entières positives, les prix non négatifs et les doublons importants. Une confirmation est demandée avant toute modification. Les imports sont journalisés dans l’historique des opérations.

Pour utiliser une fonction, ouvrez le module concerné, cliquez sur **Exporter Excel** pour télécharger un classeur ou sur **Importer Excel** pour sélectionner un fichier `.xlsx` ou `.xls`. Faites une sauvegarde JSON complète avant un import important.

## Nouvel achat : Code P et scanner par ligne

Chaque ligne du formulaire **Nouvel achat** possède désormais une zone **Code P / code** et un bouton **Scanner**. Le scan peut utiliser la caméra ou la saisie manuelle ; lorsqu’un Code P connu est reconnu, le produit est automatiquement sélectionné dans la ligne concernée et le curseur revient sur la quantité.

Les valeurs saisies dans les lignes précédentes sont maintenant synchronisées avant chaque ajout ou suppression de ligne. Ajouter une ligne ne réinitialise donc plus les Code P, produits, quantités, prix, fournisseur, date ou note déjà saisis.

## Récapitulatif en temps réel du nouvel achat

Le formulaire **Nouvel achat** affiche maintenant un récapitulatif qui se met à jour immédiatement pendant la saisie. Il présente le nombre de lignes renseignées, le nombre total d’unités reçues, le **total achat**, la valeur de vente estimée et la **marge estimée**.

Le montant de chaque ligne est calculé avec la formule `quantité × prix d’achat`. La valeur de vente est calculée avec `quantité × prix de vente`, et la marge estimée correspond à `valeur de vente − total achat`. Les quantités ou prix invalides ne sont pas inclus dans les calculs. Le récapitulatif est également adapté aux écrans mobiles.

## Caisse

La Caisse affiche le panier, le sous-total, la remise, le total à payer, le mode de paiement, le client, le montant payé et le reste dû ou la monnaie à rendre. Le récapitulatif détaillé du coût FIFO et de la marge a été retiré de cette fenêtre pour alléger l’encaissement. Les calculs de coût et de marge restent conservés dans le module **Rapports marges**.

## Rapports des opérations et export PDF

Le module **Rapports marges** contient également un rapport financier des opérations. Il permet de choisir une période **journalière**, **hebdomadaire**, **mensuelle**, **annuelle** ou **personnalisée** avec une date de début et une date de fin. Le rapport distingue les **VENTES**, les **ACHATS** et les **PAIEMENTS** ; les ventes et achats sont intégrés au calcul du net selon la formule `ventes − achats`, tandis que les paiements sont affichés séparément pour éviter un double comptage.

Le bouton **Télécharger le rapport PDF** génère un fichier contenant la période, les totaux ventes, achats, net, encaissements clients, unités et le détail daté de chaque opération. Les boutons de périodicité recalculent immédiatement la liste et les montants affichés.

## Rapport d’analyse des marges et des ventes

Un module protégé **Rapports marges** est disponible pour les comptes autorisés à consulter les coûts. Il permet de filtrer les ventes par date de début, date de fin, vendeur et produit. Le rapport affiche le chiffre d’affaires brut, les remises, le chiffre d’affaires net, le coût d’achat FIFO enregistré, la marge estimée, le taux de marge, le nombre de transactions et les unités vendues.

Deux tableaux complètent l’analyse : la performance par produit et l’évolution par jour. L’export **Exporter le rapport Excel** génère un classeur contenant quatre feuilles : **Synthèse**, **Par produit**, **Par jour** et **Détail ventes**. Les remises d’une vente sont réparties proportionnellement entre ses articles afin de calculer une marge par produit plus représentative.

Le module est masqué pour les utilisateurs qui ne possèdent pas le privilège `products.viewCosts`. Une sauvegarde JSON est recommandée avant toute analyse ou export important.

## Organisation de la navigation et des historiques

La vue **Fournisseurs** est maintenant une entrée indépendante de la barre de navigation principale, placée après **Tableau de bord** et avant **Produits**. Le module **Achats** est réservé au registre des réceptions et à la gestion des achats.

La navigation utilise l’historique du navigateur avec des fragments d’URL. Sur smartphone, la flèche de retour du navigateur revient donc à l’écran PhoneStock précédent au lieu de quitter immédiatement le contexte de navigation interne.

Le menu hamburger utilise la couleur du texte du thème actif : il reste clair sur fond sombre et sombre sur fond clair. Les cellules d’actions des tableaux mobiles ne sont plus masquées ; les boutons **Modifier**, **Archiver**, **Réactiver** et **Suppr.** restent accessibles.

## Catégories personnalisables

Les administrateurs peuvent ouvrir **Paramètres → Catégories**, saisir un nouveau nom puis cliquer sur **Ajouter**. La catégorie est persistée dans le stockage local, devient disponible dans les formulaires Produits et dans les filtres de la Caisse, et est incluse dans les sauvegardes JSON. Une catégorie utilisée par un produit ne peut pas être supprimée.

## Séparation des mouvements

Dans **Historique ventes**, les onglets **Ventes clients** et **Réapprovisionnements** sont séparés. Les ventes affichent les opérations réalisées aux clients, tandis que les réapprovisionnements affichent uniquement les achats qui augmentent le stock. Les factures restent dans leur propre onglet.

## Gestion rapide des catégories depuis Nouveau produit

Dans le formulaire **Nouveau produit**, le bouton **+** situé à côté de Catégorie ouvre un gestionnaire intégré. Une nouvelle catégorie peut être ajoutée sans fermer ni réinitialiser le formulaire ; elle est immédiatement sélectionnée dans la liste et enregistrée dans le stockage local. Le même panneau affiche les catégories existantes et permet de supprimer celles qui ne sont utilisées par aucun produit, après confirmation. Les catégories utilisées sont signalées comme « Utilisée » et leur suppression est bloquée afin de préserver les produits existants. Au moins une catégorie doit toujours rester disponible.

## Stock initial et actions d’achat

Lors de la création d’un nouveau produit, une quantité initiale supérieure à zéro est automatiquement enregistrée comme un premier achat dans **Achats**. Le lot correspondant contient le coût d’achat, le prix de vente et la quantité restante disponible. Si l’enregistrement du lot échoue, le produit est retiré afin d’éviter un produit sans stock correctement enregistré.

Les écrans **Achats** et **Stock** proposent maintenant des actions iconographiques pour chaque ligne. L’icône crayon ouvre la modification et l’icône corbeille demande confirmation avant suppression. Un achat ou un lot déjà utilisé par une vente ne peut plus être modifié ou supprimé, car cela compromettrait l’historique FIFO et les marges enregistrées. Les icônes disposent d’un titre et d’un `aria-label` pour conserver leur accessibilité malgré l’absence de texte visible. Les fenêtres de formulaire disposent aussi d’un bouton **X** en haut à droite ; il ferme la fenêtre comme le bouton Annuler ou la touche Échap.

Les achats possèdent une date et une heure locales explicites. Les nouveaux achats et les stocks initiaux sont enregistrés avec l’heure réelle choisie ou l’heure courante, sans conversion forcée qui les ferait apparaître à 01:00.

Lorsqu’un achat ou un lot non consommé est modifié, ses lignes sont chargées dans le brouillon avant le rendu du formulaire. Les quantités, coûts, prix de vente et le récapitulatif sont donc restaurés immédiatement ; les montants ne retombent pas à zéro. Toute modification autorisée est enregistrée sur le même achat, sans doublon.


## Rapports détaillés et tris

Les rapports de ventes et d’achats affichent désormais les prix d’achat, les prix de vente, les quantités, les remises, les montants nets, les coûts, les marges unitaires et totales ainsi que les totaux de chaque colonne. La colonne « Brut » a été retirée de l’affichage détaillé. Le rapport sépare les ventes, les achats et les paiements. Le net commercial est calculé par `ventes nettes − achats`, tandis que la marge des ventes utilise le coût FIFO réellement enregistré.

Les exports PDF et Excel contiennent une synthèse financière, les détails des ventes, les détails des achats, les paiements séparés et les totaux. Les périodes disponibles sont journalière (journée en cours), hebdomadaire (7 derniers jours en incluant aujourd’hui), mensuelle avec choix d’un mois précis, annuelle et personnalisée. Le bouton XLSX est disponible directement à côté de l’export PDF.

Dans **Produits**, les en-têtes Produit, Catégorie, Code P et Stock sont cliquables pour trier dans les deux sens. Dans **Stock**, le tri est disponible par produit, catégorie, Code P, date d’achat, quantité, prix d’achat, prix de vente, stock actuel et marge unitaire. Le tri ne modifie jamais l’ordre FIFO réel ; il ne change que l’ordre d’affichage.


Les rapports d’opérations utilisent maintenant des périodes complètes : le journalier couvre toute la journée en cours, l’hebdomadaire couvre les sept derniers jours en incluant aujourd’hui et le mensuel permet de choisir un mois précis. Un rapport **Situation du stock** présente le stock disponible, sa valeur au prix d’achat, sa valeur au prix de vente et la marge potentielle, avec export PDF et Excel. La situation du stock peut aussi être exportée séparément depuis les boutons « PDF stock » et « Excel stock ».

Dans l’interface et les rapports, le code produit est présenté sous le libellé **Code P**. Il correspond au champ interne historique `SKU`, qui reste accepté afin de préserver la compatibilité avec les anciennes données et les imports existants.


### Sauvegarde et quantités de stock

La sauvegarde JSON conserve les achats et leurs lots FIFO complets (`qty`, `qtyRemaining`, prix d’achat et prix de vente). Elle inclut également un instantané `stock` sur chaque produit comme filet de sécurité. Lors de la restauration, les lots sont normalisés et, si une ancienne sauvegarde ne contient pas ses achats, le stock initial est reconstruit automatiquement à partir de cet instantané.


## Administration, inventaire et droits

Le menu **Administration** regroupe désormais les comptes vendeurs, les catégories, l’historique d’opérations, la sauvegarde, l’inventaire physique et les rapports. Les rapports ne sont plus affichés dans le menu principal. Les boutons d’action des catégories sont séparés visuellement du nom de la catégorie.

L’**inventaire physique** permet à un administrateur de saisir la quantité réellement comptée par produit. Une différence positive crée un lot d’ajustement documenté ; une différence négative réduit les quantités restantes des lots les plus récents sans modifier les ventes passées. Chaque correction est enregistrée dans l’historique et sauvegardée avec les lots.

La sauvegarde JSON inclut les produits, catégories, clients, ventes, paiements, fournisseurs, achats/lots FIFO, factures, utilisateurs, historique, thème et préférences durables des rapports et filtres. Les utilisateurs non administrateurs ne voient ni les prix d’achat, ni les marges, ni les rapports, ni le registre des achats sensibles.


## Validation des saisies et actions principales

Les champs numériques refusent les lettres et les caractères non numériques ; les prix acceptent uniquement un nombre décimal valide et les quantités uniquement des entiers. Les téléphones sont acceptés lorsqu’ils contiennent exactement dix chiffres et les e-mails doivent respecter le format `email@email.com` lorsqu’ils sont renseignés.

Le bouton de thème reste fixé au même emplacement en haut à droite dans les écrans authentifiés et dans les modules de l’application. Les actions principales — Scanner/Nouveau produit, Nouveau fournisseur, Nouvel achat, Code P/Scanner de la Caisse et Nouveau client — sont regroupées dans la zone d’actions du topbar.


## Génération automatique du Code P

Lors de l’ajout d’un produit, si le champ Code P est laissé vide, PhoneStock génère automatiquement un code unique à partir de la marque, du nom du produit et du modèle. Les caractères accentués et spéciaux sont normalisés, et un suffixe numérique est ajouté si le code obtenu existe déjà. Un Code P saisi manuellement reste prioritaire.


## Recherche Stock et heure d’achat

Le module Stock dispose d’une recherche sur le produit, la catégorie et le Code P. Cette recherche ignore les majuscules, les accents et les espaces. Le formulaire de création d’un produit propose désormais une date et une heure d’achat explicites afin de conserver l’horaire local réel du lot initial.

## Identité personnalisable, scan 1× et bons imprimables

L’onglet Administration permet à un administrateur de modifier le nom, le sous-nom et l’icône de PhoneStock. L’icône est enregistrée localement et réutilisée dans l’interface, le favicon, l’icône Apple et le manifest d’installation de l’application web. Le fichier importé doit être une image PNG, JPEG, WebP ou SVG de 1 Mo maximum.

Le scanner caméra demande désormais une caméra arrière avec un zoom fixé à **1×** et une résolution vidéo adaptée. Les achats peuvent être imprimés sous forme de **bons d’achat** avec le fournisseur, les lignes, les quantités et les prix. Les ventes disposent d’un bouton **Bon de livraison** distinct du bon de caisse, avec le client, les articles, les codes produit et les quantités.

L’ordre de navigation est : Tableau de bord, Fournisseurs, Produits, Achats, Stock, Clients, Caisse, Ventes et Administration. L’installation comme application dépend du support PWA du navigateur et du contexte de déploiement sécurisé, généralement HTTPS.


## En-tête des bons, export PDF et partage

Les paramètres d’identité de l’Administration incluent maintenant les informations de l’entreprise : nom, adresse, téléphone, e-mail, identifiant fiscal ou ICE, ainsi que le logo. Ces informations sont affichées dans l’en-tête des bons d’achat et des bons de livraison, avec le logo personnalisé lorsqu’il est disponible.

Depuis le registre des achats, l’administrateur peut imprimer un bon d’achat ou télécharger son fichier PDF. Depuis les ventes, il peut imprimer un bon de livraison ou télécharger son PDF. Le PDF contient l’en-tête de l’entreprise, le numéro du document, la date, le fournisseur ou le client, les lignes, les quantités, les codes produit et les totaux pertinents.

Pour les bons de livraison, les boutons **WA** et **E-mail** préparent un message dans WhatsApp Web ou le logiciel de messagerie du navigateur à partir du numéro de téléphone ou de l’adresse e-mail du client. Le PDF est également téléchargé afin d’être joint au message. Un envoi avec pièce jointe totalement automatique nécessite un serveur ou un service d’envoi authentifié ; l’application frontend actuelle ne transmet pas directement de pièces jointes aux comptes personnels de l’utilisateur.


## Historique des bons et recherches globales

L’Administration contient un onglet **Bons générés** qui conserve les bons d’achat et les bons de livraison imprimés ou téléchargés. Chaque entrée indique la date, le type, le numéro, le destinataire et le canal de génération. Lorsque l’opération d’origine existe encore, le bon peut être réimprimé ou téléchargé de nouveau en PDF.

La modification du nom, du sous-nom, du logo et des informations de l’entreprise reste réservée à un compte administrateur authentifié. Les paramètres sont conservés dans le stockage local et inclus dans les sauvegardes JSON.

Les recherches des modules Produits, Stock, Fournisseurs, Achats, Clients, Caisse et Ventes ignorent désormais la casse, les accents et les espaces. Les modules Fournisseurs, Achats et Ventes disposent d’une zone de recherche dédiée.

Les photos de produits sont redimensionnées et compressées en JPEG avant leur enregistrement afin de limiter l’espace occupé par le stockage local. La mise en page mobile applique une gestion uniforme des débordements, des tableaux, des actions et des onglets pour éviter les éléments hors écran.


## Révision recherches et saisie en lot

Le registre des achats permet désormais une recherche globale incluant le numéro de bon, ainsi qu’un filtre dédié « N° bon ». Les boutons d’impression et de téléchargement PDF ont été retirés du module Achats conformément au nouveau flux demandé.

La recherche du module Caisse inclut le nom, la marque, le modèle, le Code P et la catégorie du produit. Le module Produits dispose d’une saisie en lot dans une fenêtre dédiée : plusieurs produits peuvent être créés en une seule opération et toute quantité supérieure à zéro génère automatiquement un lot d’achat associé.

## Zoom du scanner

La fenêtre de scan comporte désormais un curseur ainsi que des boutons Zoom et Dézoom. Le niveau initial est 1× et peut être réglé jusqu’à 4×. Lorsque le navigateur expose la capacité de zoom de la caméra, la contrainte matérielle est appliquée à la piste vidéo. Sinon, un zoom visuel de secours est appliqué à l’aperçu afin de faciliter la lecture des codes.

## Nouvelle disposition du module Caisse

Sur ordinateur, la Caisse est organisée en trois zones indépendantes : les catégories à gauche, les produits au centre et le panier à droite. Les catégories, les produits et le panier disposent de leurs propres conteneurs de défilement vertical. La grille centrale affiche trois produits par ligne lorsque la largeur disponible le permet.

Le bouton « Paiement » reste visible en bas du panier. Il déploie les champs Sous-total, Réduction (DH), Total, Espèces, Code client, Client, Montant payé et le bouton « Encaisser la vente ». Après encaissement, le panneau de paiement est automatiquement refermé.

Sur smartphone, la configuration retenue est une navigation verticale : catégories dans une barre horizontale défilable, produits en deux colonnes dans une zone à défilement vertical, puis panier et paiement pleine largeur. Cette configuration évite l’écrasement des textes et permet d’utiliser chaque zone sans débordement horizontal.

## Saisie en lot avec informations d’achat

La fenêtre « Saisir en lot » est agrandie et reprend désormais les informations communes d’une réception : Fournisseur, Date, Heure et N Bon. Le N Bon n’est plus répété dans chaque ligne produit. La catégorie initiale des nouvelles lignes est « Accessoires ».

Un récapitulatif se met à jour pendant la saisie et affiche les Lignes valides, les Unités reçues, le Total achat, la Valeur de vente et la Marge estimée. Lors de l’enregistrement, une seule réception est créée avec les informations communes et chaque produit quantifié est conservé comme ligne distincte de cette réception.

## Tris et filtres avancés

Dans la Caisse, les catégories et les produits disposent de boutons A–Z / Z–A permettant d’inverser le classement alphabétique. Les tris Produits et Stock existants sont conservés.

Le filtre Achats « N° bon(s), séparés par une virgule » accepte plusieurs numéros dans une seule saisie, par exemple `BA-0001, BA-0002`. Une opération est affichée si son numéro de bon correspond à l’un des numéros saisis.

Les ascenseurs verticaux sont limités aux zones dont le contenu peut réellement dépasser la hauteur disponible. Les fenêtres Produit, Achat et Stock n’affichent plus de défilement vertical inutile lorsque leur contenu tient dans l’écran, tandis que les listes longues conservent leur propre défilement.

Le module **Équipements & dépenses** est accessible directement depuis le menu principal. Les catégories d’équipement et de dépense disposent chacune d’un bouton **+** placé à côté du champ Catégorie pour ajouter une catégorie personnalisée. Les catégories personnalisées sont persistées et peuvent être supprimées depuis la liste dédiée, sauf lorsqu’elles sont déjà utilisées par un enregistrement.


Le validateur de sauvegarde distingue désormais correctement les collections (tableaux) des paramètres numériques, notamment `rechargeMarginRate`. Les sauvegardes contenant les services, catégories financières ou comptes rechargeables sont ainsi acceptées, y compris lorsque le taux est sérialisé comme nombre ou texte numérique.


Le menu principal sépare désormais **Équipements** et **Dépenses courantes** en deux écrans indépendants. Chaque écran conserve son formulaire, sa liste, ses actions de suppression et ses catégories dédiées.


Les boutons **+** des catégories dans **Nouveau service**, **Nouvel équipement** et **Nouvelle dépense courante** utilisent désormais une fenêtre commune inspirée de la saisie en lot. Cette fenêtre permet d’ajouter une catégorie et de supprimer une catégorie personnalisée non utilisée, sans quitter le formulaire en cours.


La fenêtre de gestion des catégories s’affiche au premier plan au-dessus du formulaire actif. Elle permet désormais de supprimer aussi une catégorie système lorsqu’elle n’est pas utilisée. Les écrans **Équipements** et **Dépenses courantes** ont été élargis et le bloc inférieur « Catégories personnalisées / Équipements / Dépenses » a été retiré.

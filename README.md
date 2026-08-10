# Scan & Caisse

Application de scan de codes-barres (caméra du téléphone) avec tableau produit / prix / quantité / total.

## Fichiers

- `index.html` — structure de la page
- `style.css` — mise en forme
- `app.js` — logique (scan caméra, tableau, totaux, export CSV, sauvegarde locale)

## ⚠️ Important : la caméra exige HTTPS ou localhost

Les navigateurs bloquent l'accès à la caméra si la page est ouverte directement en double-clic
(adresse `file://...`). Il faut la servir via un petit serveur local.

## Lancer le projet depuis VS Code

1. Ouvrez le dossier `scanner-caisse` dans VS Code.
2. Installez l'extension **Live Server** (Ritwick Dey) depuis l'onglet Extensions.
3. Faites un clic droit sur `index.html` → **Open with Live Server**.
4. Le site s'ouvre sur une adresse du type `http://127.0.0.1:5500` — c'est un contexte
   valide pour la caméra sur ordinateur.

## Tester sur votre téléphone

Le téléphone doit ouvrir une adresse **https://** (ou être sur le même réseau avec
un tunnel type ngrok, car `http://127.0.0.1` ne fonctionne que sur l'appareil qui héberge).

Deux options simples :

- **ngrok** : lancez `ngrok http 5500` dans un terminal (après avoir démarré Live Server),
  puis ouvrez l'adresse `https://...ngrok-free.app` fournie sur votre téléphone.
- **Hébergement gratuit** : déposez le dossier sur [Netlify Drop](https://app.netlify.com/drop)
  ou publiez-le via **GitHub Pages** ; vous obtenez une adresse `https://` stable.

À la première ouverture sur le téléphone, autorisez l'accès à la caméra quand le
navigateur le demande.

## Fonctionnalités

- Scan en direct via la caméra arrière (librairie `html5-qrcode`)
- Recherche automatique du nom du produit (Open Food Facts) si le code est reconnu
- Tableau : code-barres, nom, prix modifiable, quantité modifiable, sous-total
- Fusion automatique des quantités si le même code est scanné à nouveau
- Total général en temps réel
- Export CSV
- Sauvegarde automatique dans le navigateur (localStorage)
- Bouton de réinitialisation du panier

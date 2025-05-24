# Kick Out Cancer - Site Web

Site web officiel de Kick Out Cancer, construit avec Next.js 14 et Tailwind CSS.

## 🚀 Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/kickoutcancer/website.git
cd website
```

2. Installez les dépendances :
```bash
npm install
```

3. Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_HUBSPOT_KEY=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
NEXT_PUBLIC_CALENDLY_LINK=https://calendly.com/kickoutcancer/20min
NEXT_PUBLIC_HELLOASSO_INSCRIPTION=https://www.helloasso.com/associations/kickoutcancer/evenements/inscrire-ton-equipe-
NEXT_PUBLIC_HELLOASSO_DON=https://www.helloasso.com/associations/kickoutcancer/collectes/kick-out-cancer-ensemble-kickons-le-cancer
```

4. Lancez le serveur de développement :
```bash
npm run dev
```

Le site sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

## 🛠️ Technologies

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Google Analytics 4
- HubSpot
- HelloAsso
- Calendly

## 📁 Structure du Projet

```
├── components/     # Composants réutilisables
├── pages/         # Pages de l'application
├── public/        # Fichiers statiques
│   └── images/    # Images du site
├── styles/        # Styles globaux
└── content/       # Contenu Markdown
```

## 🎨 Design System

- Couleurs :
  - Bleu : #0066FF
  - Corail : #FF5A5F
  - Menthe : #1BC47D
  - Gris : #121212

- Typographie :
  - Poppins (titres)
  - Inter (texte)
  - Space Mono (code)

## 🧪 Tests

```bash
# Tests E2E
npm run test:e2e

# Tests d'accessibilité
npm run test:accessibility
```

## 🚀 Déploiement

Le site est déployé automatiquement sur Vercel à chaque push sur la branche `main`.

## 📝 Licence

MIT 
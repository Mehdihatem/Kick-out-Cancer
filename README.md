# 🏥 Kick Out Cancer - Site Web Statique

Site web moderne et responsive pour l'association Kick Out Cancer, créé avec HTML, CSS et JavaScript vanilla.

## 🎨 Améliorations Design Récentes

### Palette de Couleurs Optimisée
- **Rouge (#dc2626)** : Pour l'urgence de la cause
- **Orange (#ea580c)** : Pour l'action et l'engagement
- **Vert (#16a34a)** : Pour l'espoir et les résultats positifs
- **Contraste amélioré** pour une meilleure accessibilité

### Typographie Impactante
- **Headers plus grands** avec hiérarchie visuelle claire
- **Gradients** sur les titres principaux
- **Ombres textuelles** pour l'impact
- **Espacement optimisé** pour la lisibilité

## 📈 Optimisations Techniques

### SEO Avancé
- **Meta descriptions** pour chaque section
- **Open Graph** pour les réseaux sociaux
- **Twitter Cards** optimisées
- **Mots-clés** ciblés et structurés
- **Alt texts** descriptifs sur toutes les images

### Performance
- **Lazy loading** des images partenaires
- **Préchargement** des ressources critiques
- **Cache intelligent** avec configuration dédiée
- **Compression d'images** recommandée
- **Debounce** sur les événements de scroll

## 📁 Structure du Projet

```
kick-out-cancer-website/
├── index.html              # Page principale
├── style.css              # Styles CSS
├── script.js              # JavaScript interactif
├── cache-config.js        # Configuration cache et performances
├── README.md              # Ce fichier
├── assets/                # Dossier des ressources
│   ├── logo-kick-out-cancer.png
│   ├── hero-image.jpg
│   ├── about-image.jpg
│   ├── hero-bg.jpg
│   ├── favicon.ico
│   └── partners/          # Logos des partenaires
│       ├── ihu-prism.png
│       ├── gustave-roussy.png
│       ├── inserm.png
│       ├── unicancer.png
│       ├── centralesupelec.png
│       └── universite-paris-saclay.png
└── mentions-legales.html  # Page mentions légales (optionnel)
```

## 🚀 Installation et Déploiement

### 1. Téléchargement
- Clonez ou téléchargez ce repository
- Placez tous les fichiers dans votre dossier d'hébergement

### 2. Images Requises
Vous devez ajouter les images suivantes dans le dossier `assets/` :

#### Images principales :
- `logo-kick-out-cancer.png` - Logo de l'association (40x40px recommandé)
- `hero-image.jpg` - Image de la section "À propos" (équipe ou staff)
- `hero-bg.jpg` - Image de fond pour la section hero (optionnel)
- `favicon.ico` - Icône du site

#### Vidéos :
- `about-video.mp4` - Vidéo du logo animé pour le header (format MP4 recommandé)

#### Logos des partenaires (dans `assets/partners/`) :
**Institutions fondatrices de l'IHU PRISM :**
- `ihu-prism.png` - Logo principal (grand format)
- `gustave-roussy.png`
- `inserm.png`
- `unicancer.png`
- `centralesupelec.png`
- `universite-paris-saclay.png`

**Partenaires opérationnels :**
- `gilead.png` - Partenaire Silver
- `stetoo.png` - Partenaire logistique
- `elwood-vitamines.png` - Partenaire logistique
- `digilityx.png` - Partenaire logistique
- `aerio.png` - Partenaire académique

**Format recommandé :** PNG avec fond transparent, taille 120x60px

### 3. Déploiement sur OVH

#### Via FileZilla :
1. Connectez-vous à votre serveur OVH via FileZilla
2. Naviguez vers le dossier `www/` ou `public_html/`
3. Uploadez tous les fichiers et dossiers
4. Assurez-vous que `index.html` est à la racine

#### Via cPanel :
1. Accédez à votre cPanel
2. Ouvrez le Gestionnaire de fichiers
3. Naviguez vers `public_html/`
4. Uploadez tous les fichiers

### 4. Configuration du Domaine
- Assurez-vous que votre domaine pointe vers le dossier contenant `index.html`
- Le site sera accessible via `votre-domaine.com`

## 🎨 Personnalisation

### Modifier les Textes
Ouvrez `index.html` et modifiez directement les textes dans les balises HTML.

### Modifier les Couleurs
Dans `style.css`, modifiez les variables CSS dans `:root` :
```css
:root {
    --primary-color: #2563eb;    /* Couleur principale */
    --secondary-color: #7c3aed;  /* Couleur secondaire */
    --accent-color: #10b981;     /* Couleur d'accent */
}
```

### Modifier les Images
1. Remplacez les images dans le dossier `assets/`
2. Gardez les mêmes noms de fichiers
3. Ou modifiez les chemins dans `index.html`

### Ajouter des Sections
1. Ajoutez le HTML dans `index.html`
2. Ajoutez les styles dans `style.css`
3. Ajoutez les interactions dans `script.js` si nécessaire

## 📱 Fonctionnalités

### ✅ Responsive Design
- Adapté mobile, tablette et desktop
- Navigation mobile avec menu hamburger
- Grilles flexibles et adaptatives

### ✅ Animations
- Animations au scroll
- Effets hover sur les cartes
- Compteurs animés
- Effet parallax sur le hero

### ✅ Performance
- **Images optimisées** avec compression recommandée
- **Lazy loading** des images partenaires
- **Préchargement** des ressources critiques
- **Cache intelligent** avec configuration dédiée
- **Debounce** sur les événements scroll
- **Compression CSS/JS** recommandée pour la production

### ✅ Accessibilité
- Navigation au clavier
- Focus states
- Alt text sur les images
- Structure sémantique

## 🔧 Fonctionnalités JavaScript

### Navigation
- Menu mobile responsive
- Navigation smooth scroll
- Indicateur de section active
- Fermeture automatique du menu

### Animations
- Animations au scroll avec Intersection Observer
- Compteurs animés
- Effet typing sur le titre
- Parallax sur le hero

### Interactions
- Hover effects sur les cartes
- Validation de formulaires
- Scroll to top button
- Lazy loading des images

## 📊 Analytics

Le site inclut un système de tracking simple dans `script.js`. Pour ajouter Google Analytics :

1. Ajoutez le code Google Analytics dans `<head>` de `index.html`
2. Modifiez la fonction `trackEvents()` dans `script.js`

## 🛠️ Maintenance

### Mise à jour des Contenus
- **Textes** : Modifiez directement `index.html`
- **Images** : Remplacez les fichiers dans `assets/`
- **Styles** : Modifiez `style.css`
- **Fonctionnalités** : Modifiez `script.js`

### Optimisation
- Compressez les images (JPEG pour photos, PNG pour logos)
- Minifiez CSS et JS pour la production
- Utilisez un CDN pour les ressources statiques

## 📞 Support

Pour toute question ou modification :
- Contact : contact@kickoutcancer.fr
- Documentation : Ce README
- Code source : Commenté et organisé

## 📄 Licence

© 2025 Kick Out Cancer - Tous droits réservés.
Association loi 1901.

---

**Note :** Ce site est conçu pour être simple à maintenir et modifier. Tous les textes et images peuvent être changés directement dans les fichiers HTML et CSS sans recompilation. 

<div class="about-image">
    <video class="about-img" src="assets/about-video.mp4" autoplay loop muted playsinline></video>
</div> 
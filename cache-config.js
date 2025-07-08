// ===== CONFIGURATION CACHE ET PERFORMANCES =====

// Configuration du cache pour les ressources statiques
const CACHE_CONFIG = {
    // Images critiques (premier chargement)
    critical: [
        'assets/hero-bg.jpg',
        'assets/logo-kick-out-cancer.png',
        'assets/about-video.mp4'
    ],
    
    // Images partenaires (chargement différé)
    partners: [
        'assets/partners/ihu-prism.png',
        'assets/partners/gustave-roussy.png',
        'assets/partners/inserm.png',
        'assets/partners/centralesupelec.png',
        'assets/partners/universite-paris-saclay.png',
        'assets/partners/unicancer.png',
        'assets/partners/gilead.png',
        'assets/partners/stetoo.png',
        'assets/partners/elwood-vitamines.png',
        'assets/partners/digilityx.png',
        'assets/partners/aerio.png'
    ],
    
    // Fichiers CSS et JS
    assets: [
        'style.css',
        'script.js'
    ]
};

// Configuration des optimisations de performance
const PERFORMANCE_CONFIG = {
    // Délai avant préchargement des images non critiques
    lazyLoadDelay: 2000,
    
    // Seuil d'intersection pour le lazy loading
    intersectionThreshold: 0.1,
    
    // Délai de debounce pour les événements de scroll
    scrollDebounceDelay: 10,
    
    // Compression des images recommandée
    imageCompression: {
        hero: { quality: 85, maxWidth: 1920 },
        partners: { quality: 80, maxWidth: 400 },
        logos: { quality: 90, maxWidth: 200 }
    }
};

// Configuration SEO
const SEO_CONFIG = {
    // Meta descriptions pour chaque section
    sections: {
        hero: "Rejoignez Kick Out Cancer, l'événement caritatif qui unit la communauté pour lutter contre le cancer",
        partners: "Découvrez nos partenaires scientifiques et opérationnels qui soutiennent la recherche contre le cancer",
        why: "Découvrez pourquoi participer à notre événement caritatif et l'impact de votre engagement",
        about: "En savoir plus sur Kick Out Cancer et notre mission de soutien à la recherche",
        contact: "Contactez-nous pour plus d'informations sur l'événement"
    },
    
    // Mots-clés optimisés
    keywords: [
        'cancer',
        'événement caritatif',
        'recherche médicale',
        'IHU PRISM',
        'Marseille',
        'solidarité',
        'don',
        'sport',
        'football',
        'tournoi'
    ]
};

// Export des configurations
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CACHE_CONFIG, PERFORMANCE_CONFIG, SEO_CONFIG };
} 
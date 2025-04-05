document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Fermer le menu mobile lorsqu'un lien est cliqué
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Animation du menu lors du défilement
    let scrollPos = 0;
    const nav = document.querySelector('nav');
    
    function checkScrollPos() {
        let windowY = window.scrollY;
        if (windowY > 30) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        scrollPos = windowY;
    }
    
    window.addEventListener('scroll', checkScrollPos);

    // Validation du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des valeurs du formulaire
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Validation simple (peut être étendue)
            if (!name || !email || !subject || !message) {
                alert('Veuillez remplir tous les champs obligatoires.');
                return;
            }
            
            // Validation de l'email avec une expression régulière simple
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Veuillez entrer une adresse email valide.');
                return;
            }
            
            // Ici, vous pouvez ajouter le code pour envoyer les données à un serveur
            // Ou les stocker temporairement avant de rediriger l'utilisateur
            alert('Merci pour votre message! Nous vous contacterons bientôt.');
            contactForm.reset();
        });
    }

    // Animation des éléments au défilement
    function animateOnScroll() {
        const elements = document.querySelectorAll('.section');
        
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            
            // Si l'élément est visible dans la fenêtre
            if (position.top < window.innerHeight * 0.75 && position.bottom >= 0) {
                element.classList.add('visible');
            }
        });
    }
    
    // Initialiser les animations
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Smooth scroll pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === "#") return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Ajustement pour la hauteur du menu
                    behavior: 'smooth'
                });
            }
        });
    });
}); 
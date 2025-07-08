// ===== NAVIGATION MOBILE =====
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    // Toggle menu mobile
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animation du hamburger
        const spans = navToggle.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
    });
    
    // Fermer le menu quand on clique sur un lien
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.remove('active'));
        });
    });
    
    // Fermer le menu quand on clique en dehors
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.remove('active'));
        }
    });
});

// ===== ANIMATIONS AU SCROLL =====
function animateOnScroll() {
    const elements = document.querySelectorAll('.partner-card, .cta-card, .about-content, .inscription-content');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// ===== NAVIGATION SMOOTH =====
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Ajustement pour la navbar fixe
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== NAVIGATION ACTIVE =====
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== EFFET PARALLAX HERO =====
function parallaxEffect() {
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroBackground.style.transform = `translateY(${rate}px)`;
        });
    }
}

// ===== COMPTEURS ANIMÉS =====
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number, .about-stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = counter.textContent;
                const isCurrency = target.includes('€');
                const isNumber = !isNaN(parseInt(target.replace(/[^\d]/g, '')));
                
                if (isNumber) {
                    const finalValue = parseInt(target.replace(/[^\d]/g, ''));
                    let currentValue = 0;
                    const increment = finalValue / 50;
                    
                    const updateCounter = () => {
                        if (currentValue < finalValue) {
                            currentValue += increment;
                            if (isCurrency) {
                                counter.textContent = Math.floor(currentValue).toLocaleString() + '€';
                            } else {
                                counter.textContent = Math.floor(currentValue);
                            }
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target;
                        }
                    };
                    
                    updateCounter();
                    observer.unobserve(counter);
                }
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// ===== EFFET HOVER SUR LES CARDS =====
function addHoverEffects() {
    const cards = document.querySelectorAll('.partner-card, .cta-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ===== LAZY LOADING DES IMAGES =====
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== OPTIMISATION DES PERFORMANCES =====
function optimizePerformance() {
    // Préchargement des ressources critiques
    const preloadLinks = [
        { rel: 'preload', href: 'assets/hero-bg.jpg', as: 'image' },
        { rel: 'preload', href: 'assets/logo-kick-out-cancer.png', as: 'image' }
    ];

    preloadLinks.forEach(link => {
        const linkElement = document.createElement('link');
        Object.assign(linkElement, link);
        document.head.appendChild(linkElement);
    });

    // Cache des images partenaires
    const partnerImages = [
        'assets/partners/ihu-prism.png',
        'assets/partners/gustave-roussy.png',
        'assets/partners/inserm.png',
        'assets/partners/gilead.png',
        'assets/partners/stetoo.png',
        'assets/partners/elwood-vitamines.png',
        'assets/partners/digilityx.png',
        'assets/partners/aerio.png'
    ];

    // Préchargement en arrière-plan
    setTimeout(() => {
        partnerImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, 2000);
}

// ===== VALIDATION DES FORMULAIRES =====
function validateForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validation basique
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.classList.add('error');
                    isValid = false;
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Simulation d'envoi
                const submitBtn = form.querySelector('button[type="submit"]');
                if (submitBtn) {
                    submitBtn.textContent = 'Envoi en cours...';
                    submitBtn.disabled = true;
                    
                    setTimeout(() => {
                        submitBtn.textContent = 'Envoyé !';
                        form.reset();
                        
                        setTimeout(() => {
                            submitBtn.textContent = 'Envoyer';
                            submitBtn.disabled = false;
                        }, 2000);
                    }, 1000);
                }
            }
        });
    });
}

// ===== EFFET DE TYPING =====
function typeWriterEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Démarrer l'effet après un délai
        setTimeout(typeWriter, 500);
    }
}

// ===== SCROLL TO TOP =====
function addScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Retour en haut');
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== PERFORMANCE - DEBOUNCE =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser toutes les fonctionnalités
    animateOnScroll();
    smoothScroll();
    updateActiveNav();
    parallaxEffect();
    animateCounters();
    addHoverEffects();
    lazyLoadImages();
    validateForms();
    typeWriterEffect();
    addScrollToTop();
    optimizePerformance();
    
    // Optimiser les événements de scroll
    const debouncedScroll = debounce(() => {
        // Fonctions qui doivent être appelées au scroll
    }, 10);
    
    window.addEventListener('scroll', debouncedScroll);
    
    // Ajouter des styles CSS pour le scroll-to-top
    const style = document.createElement('style');
    style.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 50%;
            font-size: 20px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
        }
        
        .scroll-to-top.show {
            opacity: 1;
            visibility: visible;
        }
        
        .scroll-to-top:hover {
            background: var(--secondary-color);
            transform: translateY(-2px);
        }
        
        .nav-link.active {
            color: var(--primary-color);
        }
        
        .nav-link.active::after {
            width: 100%;
        }
        
        .error {
            border-color: #ef4444 !important;
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
        }
    `;
    document.head.appendChild(style);
});

// ===== ANALYTICS SIMPLE =====
function trackEvents() {
    // Tracker les clics sur les CTA
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('CTA clicked:', this.textContent);
            // Ici vous pouvez ajouter votre code de tracking (Google Analytics, etc.)
        });
    });
    
    // Tracker les clics sur les liens de navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Navigation clicked:', this.textContent);
        });
    });
}

// Initialiser le tracking
trackEvents(); 
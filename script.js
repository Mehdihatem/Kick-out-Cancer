// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeAnimations();
    initializeCounters();
    initializeParallax();
    initializeCarousel();
    initializeScrollEffects();
    initializePerformance();
});

// ===== NAVIGATION MODERNE =====
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.getElementById('navbar');
    
    // Toggle menu mobile avec animation
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
    
    // Navigation sticky avec effet de scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Navigation active au scroll
    updateActiveNav();
}

// ===== ANIMATIONS AVANCÉES =====
function initializeAnimations() {
    // Intersection Observer pour les animations au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Éléments à animer
    const animatedElements = document.querySelectorAll('.ambition-card, .timeline-item, .event-info, .event-map');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
    // Animation des cartes au hover
    addHoverEffects();
}

// ===== COMPTEURS ANIMÉS =====
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = counter.getAttribute('data-count');
                const isCurrency = target.includes('€');
                const isNumber = !isNaN(parseInt(target.replace(/[^\d]/g, '')));
                
                if (isNumber) {
                    const finalValue = parseInt(target.replace(/[^\d]/g, ''));
                    let currentValue = 0;
                    const increment = finalValue / 50;
                    const duration = 2000; // 2 secondes
                    const steps = 60;
                    const stepDuration = duration / steps;
                    
                    const updateCounter = () => {
                        if (currentValue < finalValue) {
                            currentValue += increment;
                            if (isCurrency) {
                                counter.textContent = Math.floor(currentValue).toLocaleString() + '€';
                            } else {
                                counter.textContent = Math.floor(currentValue);
                            }
                            setTimeout(updateCounter, stepDuration);
                        } else {
                            counter.textContent = target;
                        }
                    };
                    
                    updateCounter();
                    counterObserver.unobserve(counter);
                }
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// ===== EFFET PARALLAX =====
function initializeParallax() {
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroBackground.style.transform = `translateY(${rate}px)`;
        });
    }
}

// ===== CARROUSEL PARTENAIRES =====
function initializeCarousel() {
    const carousel = document.querySelector('.partners-track');
    
    if (carousel) {
        // Clone des éléments pour un défilement infini
        const items = carousel.querySelectorAll('.partner-item');
        items.forEach(item => {
            const clone = item.cloneNode(true);
            carousel.appendChild(clone);
        });
        
        // Pause au hover
        carousel.addEventListener('mouseenter', function() {
            carousel.style.animationPlayState = 'paused';
        });
        
        carousel.addEventListener('mouseleave', function() {
            carousel.style.animationPlayState = 'running';
        });
    }
}

// ===== EFFETS DE SCROLL =====
function initializeScrollEffects() {
    // Smooth scroll pour les liens internes
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navigation active au scroll
    updateActiveNav();
}

// ===== NAVIGATION ACTIVE =====
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
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

// ===== EFFETS HOVER =====
function addHoverEffects() {
    const cards = document.querySelectorAll('.ambition-card, .partner-item, .timeline-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Effet de ripple sur les boutons
    const buttons = document.querySelectorAll('.cta-button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// ===== OPTIMISATION PERFORMANCE =====
function initializePerformance() {
    // Lazy loading des images
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
    
    // Préchargement des ressources critiques
    const preloadLinks = [
        { rel: 'preload', href: 'assets/about-video.mp4', as: 'video' },
        { rel: 'preload', href: 'assets/logo-kick-out-cancer.png', as: 'image' }
    ];
    
    preloadLinks.forEach(link => {
        const linkElement = document.createElement('link');
        Object.assign(linkElement, link);
        document.head.appendChild(linkElement);
    });
    
    // Debounce pour les événements de scroll
    const debouncedScroll = debounce(function() {
        // Actions de scroll optimisées
    }, 16);
    
    window.addEventListener('scroll', debouncedScroll);
}

// ===== UTILITAIRES =====
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

// ===== TRACKING ÉVÉNEMENTS =====
function trackEvents() {
    // Tracking des clics sur les CTA
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent.trim();
            console.log('CTA clicked:', action);
            // Ici vous pouvez ajouter votre tracking analytics
        });
    });
    
    // Tracking des interactions avec les partenaires
    const partnerItems = document.querySelectorAll('.partner-item');
    partnerItems.forEach(item => {
        item.addEventListener('click', function() {
            const partnerName = this.querySelector('h4').textContent;
            console.log('Partner clicked:', partnerName);
            // Ici vous pouvez ajouter votre tracking analytics
        });
    });
}

// ===== VALIDATION FORMULAIRES =====
function validateForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Validation basique
            let isValid = true;
            const errors = [];
            
            if (data.email && !isValidEmail(data.email)) {
                errors.push('Email invalide');
                isValid = false;
            }
            
            if (data.phone && !isValidPhone(data.phone)) {
                errors.push('Téléphone invalide');
                isValid = false;
            }
            
            if (isValid) {
                // Soumission du formulaire
                console.log('Form submitted:', data);
                // Ici vous pouvez ajouter votre logique de soumission
            } else {
                // Affichage des erreurs
                console.log('Validation errors:', errors);
            }
        });
    });
}

// ===== VALIDATION UTILITAIRES =====
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

// ===== EFFET TYPEWRITER =====
function typeWriterEffect() {
    const elements = document.querySelectorAll('.typewriter');
    
    elements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        const typeWriter = () => {
            let i = 0;
            const timer = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(timer);
                }
            }, 100);
        };
        
        // Déclencher l'animation quand l'élément est visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(element);
    });
}

// ===== BOUTON SCROLL TO TOP =====
function addScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 15l-6-6-6 6"/>
        </svg>
    `;
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Retour en haut');
    document.body.appendChild(scrollToTopBtn);
    
    // Styles pour le bouton
    const style = document.createElement('style');
    style.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, var(--turquoise), var(--magenta));
            border: none;
            border-radius: 50%;
            color: white;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: var(--shadow-lg);
        }
        
        .scroll-to-top.visible {
            opacity: 1;
            visibility: visible;
        }
        
        .scroll-to-top:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow-xl), var(--shadow-neon);
        }
        
        .scroll-to-top svg {
            width: 20px;
            height: 20px;
        }
    `;
    document.head.appendChild(style);
    
    // Afficher/masquer le bouton selon le scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    // Fonctionnalité de scroll to top
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== INITIALISATION FINALE =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser tous les modules
    initializeNavigation();
    initializeAnimations();
    initializeCounters();
    initializeParallax();
    initializeCarousel();
    initializeScrollEffects();
    initializePerformance();
    
    // Initialiser les fonctionnalités supplémentaires
    trackEvents();
    validateForms();
    typeWriterEffect();
    addScrollToTop();
    
    // Ajouter les effets de ripple aux boutons
    addRippleEffect();
});

// ===== EFFET RIPPLE =====
function addRippleEffect() {
    const buttons = document.querySelectorAll('.cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Ajouter l'animation ripple au CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
} 
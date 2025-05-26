// SPA Navigation
document.addEventListener('DOMContentLoaded', () => {
    // Handle navigation
    document.querySelectorAll('a[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute('data-page');
            navigateToPage(targetPage);
        });
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', (e) => {
        if (e.state && e.state.page) {
            navigateToPage(e.state.page, false);
        }
    });

    // Check initial URL hash
    const initialPage = window.location.hash.slice(1) || 'home';
    navigateToPage(initialPage, false);

    // Initialize intersection observer for animations
    initializeAnimations();

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        // Toggle menu when clicking hamburger
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && 
                !hamburger.contains(e.target) && 
                !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
});

function navigateToPage(pageId, pushState = true) {


    if(pageId == "home") document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";

    const currentPage = document.querySelector('.page.active');
    const targetPage = document.getElementById(pageId);




    if (!targetPage || currentPage === targetPage) return;

    // Update navigation state immediately
    if (pushState) {
        history.pushState({ page: pageId }, '', `#${pageId}`);
    }

    // Update active state in navigation immediately
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });


    // Start smooth scroll immediately
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Handle page transition
    if (currentPage) {
        currentPage.classList.remove('active');
    }

    targetPage.classList.add('active');


}

// Smooth scrolling ONLY for links without data-page attribute
document.querySelectorAll('a[href^="#"]:not([data-page])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize animations with Intersection Observer
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate section title underline
                const title = entry.target.querySelector('.section-title');
                if (title) {
                    title.classList.add('visible');
                }

                // Animate project cards
                const cards = entry.target.querySelectorAll('.project-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 200);
                });
            }
        });
    }, observerOptions);

    // Observe all sections and project cards
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Reset animations when changing pages
function resetAnimations() {
    document.querySelectorAll('.fade-in-up').forEach(element => {
        element.style.animation = 'none';
        element.offsetHeight; // Trigger reflow
        element.style.animation = null;
    });
}

// Navbar background change on scroll
const nav = document.querySelector('.main-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 10px var(--shadow-color)';
    } else {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = 'none';
    }
});

// Add animation to skill cards when they come into view
const skillCards = document.querySelectorAll('.skill-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Skills carousel hover effect
const competsInner = document.getElementById('compets-inner');
if (competsInner) {
    competsInner.addEventListener('mouseenter', () => {
        competsInner.style.animationPlayState = 'paused';
    });

    competsInner.addEventListener('mouseleave', () => {
        competsInner.style.animationPlayState = 'running';
    });
} 
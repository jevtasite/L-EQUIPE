/**
 * NAVIGATION - Sticky Header & Smooth Scroll
 * L'ÉQUIPE Football Agency
 */

(function() {
    'use strict';

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {

        // ============================================
        // STICKY NAVIGATION ON SCROLL
        // ============================================

        const navbar = document.getElementById('mainNav');
        const navbarHeight = navbar ? navbar.offsetHeight : 80;

        function handleScroll() {
            if (!navbar) return;

            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Throttle scroll events for performance
        let scrollTimeout;
        window.addEventListener('scroll', function() {
            if (scrollTimeout) {
                window.cancelAnimationFrame(scrollTimeout);
            }
            scrollTimeout = window.requestAnimationFrame(handleScroll);
        }, { passive: true });


        // ============================================
        // SMOOTH SCROLL TO SECTIONS
        // ============================================

        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        const mobileMenu = document.querySelector('.navbar-collapse');

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');

                // Skip if it's just '#'
                if (targetId === '#') return;

                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    e.preventDefault();

                    // Calculate offset for fixed navbar
                    const offsetTop = targetSection.offsetTop - navbarHeight;

                    // Smooth scroll
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    if (mobileMenu && mobileMenu.classList.contains('show')) {
                        const bsCollapse = bootstrap.Collapse.getInstance(mobileMenu);
                        if (bsCollapse) {
                            bsCollapse.hide();
                        }
                    }

                    // Update active state
                    updateActiveLink(this);
                }
            });
        });


        // ============================================
        // UPDATE ACTIVE LINK ON SCROLL
        // ============================================

        function updateActiveLink(clickedLink) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (clickedLink) {
                clickedLink.classList.add('active');
            }
        }

        // Highlight active section based on scroll position
        let sections = [];
        navLinks.forEach(link => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId !== '#') {
                const section = document.querySelector(targetId);
                if (section) {
                    sections.push({
                        id: targetId,
                        element: section,
                        link: link
                    });
                }
            }
        });

        function highlightActiveSection() {
            const scrollPosition = window.scrollY + navbarHeight + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section.element.offsetTop <= scrollPosition) {
                    updateActiveLink(section.link);
                    break;
                }
            }
        }

        // Throttle scroll events
        let highlightTimeout;
        window.addEventListener('scroll', function() {
            if (highlightTimeout) {
                window.cancelAnimationFrame(highlightTimeout);
            }
            highlightTimeout = window.requestAnimationFrame(highlightActiveSection);
        }, { passive: true });


        // ============================================
        // CTA BUTTONS SMOOTH SCROLL
        // ============================================

        const ctaButtons = document.querySelectorAll('.btn[href^="#"]');

        ctaButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');

                if (targetId === '#') return;

                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    e.preventDefault();
                    const offsetTop = targetSection.offsetTop - navbarHeight;

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });


        // ============================================
        // MOBILE MENU HAMBURGER ANIMATION
        // ============================================

        const navbarToggler = document.querySelector('.navbar-toggler');

        if (navbarToggler && mobileMenu) {
            // Listen to Bootstrap collapse events for animation sync
            mobileMenu.addEventListener('show.bs.collapse', function() {
                navbarToggler.setAttribute('aria-expanded', 'true');
            });

            mobileMenu.addEventListener('hide.bs.collapse', function() {
                navbarToggler.setAttribute('aria-expanded', 'false');
            });

            // Force initial state on page load
            const isCurrentlyExpanded = mobileMenu.classList.contains('show');
            navbarToggler.setAttribute('aria-expanded', isCurrentlyExpanded ? 'true' : 'false');
        }

    });

})();
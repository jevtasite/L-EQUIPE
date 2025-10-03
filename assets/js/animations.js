/**
 * ANIMATIONS - Scroll Reveals & Counters
 * L'ÉQUIPE Football Agency
 *
 * Note: Basic setup for Phase 1
 * Advanced animations in Phase 4
 */

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {

        // ============================================
        // INTERSECTION OBSERVER - SCROLL REVEALS
        // ============================================

        // Check for Intersection Observer support
        if ('IntersectionObserver' in window) {

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.2  // Trigger when 20% visible
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optionally unobserve after reveal
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Observe all elements with .reveal class
            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(element => {
                observer.observe(element);
            });

        } else {
            // Fallback for browsers without Intersection Observer
            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(element => {
                element.classList.add('active');
            });
        }


        // ============================================
        // STAT COUNTER ANIMATION
        // ============================================

        const statCards = document.querySelectorAll('.stat-card-simple');

        // Function to animate counter
        function animateCounter(element, target, duration = 2000) {
            let start = 0;
            const increment = target / (duration / 16); // 60fps
            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    element.textContent = target;
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(start);
                }
            }, 16);
        }

        // Intersection Observer for stat counters
        if ('IntersectionObserver' in window) {
            const statsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const statCard = entry.target;
                        const statNumber = statCard.querySelector('.stat-number');
                        const target = parseInt(statNumber.getAttribute('data-target'));

                        // Animate counter
                        animateCounter(statNumber, target);

                        // Animate progress bar
                        statCard.classList.add('counted');

                        const progressFill = statCard.querySelector('.stat-progress-fill');
                        if (progressFill) {
                            const progressPercent = progressFill.getAttribute('data-progress');
                            setTimeout(() => {
                                progressFill.style.width = progressPercent + '%';
                            }, 100);
                        }

                        statsObserver.unobserve(statCard);
                    }
                });
            }, {
                threshold: 0.5
            });

            statCards.forEach(card => statsObserver.observe(card));
        } else {
            // Fallback - just show numbers
            statCards.forEach(card => {
                const statNumber = card.querySelector('.stat-number');
                const target = statNumber.getAttribute('data-target');
                statNumber.textContent = target;
                card.classList.add('counted');

                const progressFill = card.querySelector('.stat-progress-fill');
                if (progressFill) {
                    const progressPercent = progressFill.getAttribute('data-progress');
                    progressFill.style.width = progressPercent + '%';
                }
            });
        }


        // ============================================
        // PARALLAX EFFECT - PLACEHOLDER
        // ============================================

        // TODO Phase 4: Implement parallax scrolling
        // - Canvas background parallax
        // - Section element parallax
        // - Performance optimized with requestAnimationFrame


        // ============================================
        // REDUCE MOTION DETECTION
        // ============================================

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

        if (prefersReducedMotion.matches) {
            // Disable animations for users who prefer reduced motion
            document.body.classList.add('reduce-motion');
        }

    });

})();
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
        // STAT COUNTER ANIMATION - PLACEHOLDER
        // ============================================

        // TODO Phase 4: Implement animated counter
        // For now, just show the target numbers

        const statNumbers = document.querySelectorAll('.stat-number');

        statNumbers.forEach(statElement => {
            const targetValue = statElement.getAttribute('data-target');
            if (targetValue) {
                statElement.textContent = targetValue;
            }
        });


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
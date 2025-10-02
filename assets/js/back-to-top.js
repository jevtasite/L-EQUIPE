/**
 * BACK TO TOP BUTTON
 * L'ÉQUIPE Football Agency
 */

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {

        // Get the button
        const backToTopBtn = document.getElementById('backToTop');

        if (!backToTopBtn) return;

        // Show button when user scrolls down 300px
        function toggleButtonVisibility() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }

        // Smooth scroll to top
        function scrollToTop(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Event listeners
        window.addEventListener('scroll', toggleButtonVisibility);
        backToTopBtn.addEventListener('click', scrollToTop);

        // Initial check on page load
        toggleButtonVisibility();

    });

})();

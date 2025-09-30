/**
 * MAIN JAVASCRIPT
 * L'ÉQUIPE Football Agency
 * Entry point and utility functions
 */

(function() {
    'use strict';

    // ============================================
    // PAGE LOAD OPTIMIZATION
    // ============================================

    window.addEventListener('load', function() {
        document.body.classList.add('page-loaded');
    });


    // ============================================
    // UTILITY: DEBOUNCE FUNCTION
    // ============================================

    window.debounce = function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };


    // ============================================
    // UTILITY: THROTTLE FUNCTION
    // ============================================

    window.throttle = function(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    };


    // ============================================
    // DETECT MOBILE/TOUCH DEVICES
    // ============================================

    const isTouchDevice = () => {
        return ('ontouchstart' in window) ||
               (navigator.maxTouchPoints > 0) ||
               (navigator.msMaxTouchPoints > 0);
    };

    if (isTouchDevice()) {
        document.body.classList.add('touch-device');
    }


    // ============================================
    // EXTERNAL LINKS HANDLING
    // ============================================

    document.addEventListener('DOMContentLoaded', function() {

        const externalLinks = document.querySelectorAll('a[href^="http"]');

        externalLinks.forEach(link => {
            // Don't modify links to own domain
            if (!link.href.includes(window.location.hostname)) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });

    });


    // ============================================
    // KEYBOARD NAVIGATION ENHANCEMENT
    // ============================================

    document.addEventListener('DOMContentLoaded', function() {

        // Show focus outline only for keyboard users
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-nav');
            }
        });

        document.addEventListener('mousedown', function() {
            document.body.classList.remove('keyboard-nav');
        });

    });


    // ============================================
    // CONSOLE BRANDING
    // ============================================

    console.log(
        '%c L\'ÉQUIPE %c International Football Agency ',
        'background: #00FF87; color: #0A1628; font-weight: bold; font-size: 16px; padding: 10px;',
        'background: #0A1628; color: #00FF87; font-size: 16px; padding: 10px;'
    );

    console.log(
        '%c🇨🇭 Based in Switzerland | Precision. Performance. Partnership.',
        'color: #8B93A7; font-size: 12px;'
    );


    // ============================================
    // PERFORMANCE MONITORING (Development Only)
    // ============================================

    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {

        window.addEventListener('load', function() {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

            console.log(
                '%c⚡ Performance:',
                'color: #00FF87; font-weight: bold;',
                `${pageLoadTime}ms page load time`
            );

            // Check for Lighthouse metrics if available
            if (window.PerformanceObserver) {
                try {
                    const observer = new PerformanceObserver((list) => {
                        for (const entry of list.getEntries()) {
                            if (entry.entryType === 'paint') {
                                console.log(
                                    `%c⚡ ${entry.name}:`,
                                    'color: #00FF87;',
                                    `${Math.round(entry.startTime)}ms`
                                );
                            }
                        }
                    });
                    observer.observe({ entryTypes: ['paint'] });
                } catch (e) {
                    // Performance Observer not fully supported
                }
            }
        });

    }

})();
/**
 * SEE MORE FUNCTIONALITY
 * L'ÉQUIPE Football Agency
 */

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {

        // ============================================
        // SEE MORE PLAYERS
        // ============================================
        const seeMoreBtn = document.getElementById('seeMorePlayers');
        const hiddenPlayers = document.querySelectorAll('.hidden-player');

        if (seeMoreBtn && hiddenPlayers.length > 0) {
            seeMoreBtn.addEventListener('click', function() {
                const isExpanded = seeMoreBtn.classList.contains('active');
                const currentLang = localStorage.getItem('language') || 'en';

                if (!isExpanded) {
                    // Show hidden players
                    hiddenPlayers.forEach((player, index) => {
                        setTimeout(() => {
                            player.classList.add('show');
                        }, index * 100);
                    });

                    // Update button
                    seeMoreBtn.classList.add('active');
                    const showLessText = translations[currentLang].players.showLess || 'Show Less';
                    seeMoreBtn.querySelector('.btn-text').textContent = showLessText;

                } else {
                    // Hide players
                    hiddenPlayers.forEach(player => {
                        player.classList.remove('show');
                    });

                    // Update button
                    seeMoreBtn.classList.remove('active');
                    const seeMoreText = translations[currentLang].players.seeMorePlayers;
                    seeMoreBtn.querySelector('.btn-text').textContent = seeMoreText;

                    // Scroll back to players section
                    const playersSection = document.getElementById('players');
                    if (playersSection) {
                        setTimeout(() => {
                            playersSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 300);
                    }
                }
            });
        }

        // ============================================
        // READ MORE ABOUT
        // ============================================
        const readMoreBtn = document.getElementById('readMoreAbout');
        const aboutMoreContent = document.getElementById('aboutMoreContent');

        if (readMoreBtn && aboutMoreContent) {
            readMoreBtn.addEventListener('click', function() {
                const isExpanded = readMoreBtn.classList.contains('active');
                const currentLang = localStorage.getItem('language') || 'en';

                if (!isExpanded) {
                    // Show more content with slide-down animation
                    aboutMoreContent.classList.add('show');

                    // Update button
                    readMoreBtn.classList.add('active');
                    const readLessText = translations[currentLang].about.readLess;
                    readMoreBtn.querySelector('.btn-text').textContent = readLessText;

                } else {
                    // Hide content with slide-up animation
                    aboutMoreContent.classList.remove('show');

                    // Update button
                    readMoreBtn.classList.remove('active');
                    const readMoreText = translations[currentLang].about.readMore;
                    readMoreBtn.querySelector('.btn-text').textContent = readMoreText;

                    // Scroll back to about section
                    const aboutSection = document.getElementById('about');
                    if (aboutSection) {
                        setTimeout(() => {
                            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 500);
                    }
                }
            });
        }

    });

})();

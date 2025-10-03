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

                if (!isExpanded) {
                    // Show hidden players
                    hiddenPlayers.forEach((player, index) => {
                        setTimeout(() => {
                            player.classList.add('show');
                        }, index * 100);
                    });

                    // Update button
                    seeMoreBtn.classList.add('active');
                    seeMoreBtn.querySelector('.btn-text').textContent = 'Show Less';

                } else {
                    // Hide players
                    hiddenPlayers.forEach(player => {
                        player.classList.remove('show');
                    });

                    // Update button
                    seeMoreBtn.classList.remove('active');
                    seeMoreBtn.querySelector('.btn-text').textContent = 'See More Players';

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

                if (!isExpanded) {
                    // Show more content with slide-down animation
                    aboutMoreContent.classList.add('show');

                    // Update button
                    readMoreBtn.classList.add('active');
                    readMoreBtn.querySelector('.btn-text').textContent = 'Read Less';

                } else {
                    // Hide content with slide-up animation
                    aboutMoreContent.classList.remove('show');

                    // Update button
                    readMoreBtn.classList.remove('active');
                    readMoreBtn.querySelector('.btn-text').textContent = 'Read More';

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

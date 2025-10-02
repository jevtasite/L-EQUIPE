/**
 * SEE MORE PLAYERS FUNCTIONALITY
 * L'ÉQUIPE Football Agency
 */

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {

        const seeMoreBtn = document.getElementById('seeMorePlayers');
        const hiddenPlayers = document.querySelectorAll('.hidden-player');

        if (!seeMoreBtn || hiddenPlayers.length === 0) return;

        seeMoreBtn.addEventListener('click', function() {
            // Check current state from button class instead of local variable
            const isExpanded = seeMoreBtn.classList.contains('active');

            if (!isExpanded) {
                // Show hidden players
                hiddenPlayers.forEach((player, index) => {
                    setTimeout(() => {
                        player.classList.add('show');
                    }, index * 100); // Stagger the animation
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

    });

})();

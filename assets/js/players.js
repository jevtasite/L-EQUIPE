// ============================================
// PLAYERS SHOWCASE - Interactive Cards
// L'ÉQUIPE Football Agency
// ============================================

(function () {
  'use strict';

  // Player Card Flip Functionality
  function initPlayerCards() {
    const playerCards = document.querySelectorAll('.player-card');

    playerCards.forEach((card) => {
      // Get flip indicator buttons
      const flipIndicators = card.querySelectorAll('.card-flip-indicator');

      flipIndicators.forEach((indicator) => {
        // Handle clicks on flip indicators
        indicator.addEventListener('click', function (e) {
          e.stopPropagation(); // Prevent event from bubbling to card
          card.classList.toggle('flipped');
        });

        // Handle touch on flip indicators
        indicator.addEventListener('touchend', function (e) {
          e.preventDefault();
          e.stopPropagation();
          card.classList.toggle('flipped');
        });
      });
    });
  }

  // Position Filter Functionality
  function initPositionFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const playerCardWrappers = document.querySelectorAll('.player-card-wrapper');
    const seeMoreBtn = document.getElementById('seeMorePlayers');

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', function () {
        const position = this.dataset.position;

        // Update active button
        filterBtns.forEach((b) => b.classList.remove('active'));
        this.classList.add('active');

        // Hide the See More button when filtering (not on "All Players")
        if (seeMoreBtn) {
          if (position === 'all') {
            seeMoreBtn.style.display = 'inline-flex';
            // Don't reset button state - let it maintain its current state
          } else {
            seeMoreBtn.style.display = 'none';
          }
        }

        // Filter players
        playerCardWrappers.forEach((wrapper) => {
          const playerPosition = wrapper.dataset.position;
          const isHiddenPlayer = wrapper.classList.contains('hidden-player');

          if (position === 'all' || playerPosition === position) {
            if (position === 'all') {
              // When "All Players" is selected, restore based on See More button state
              if (isHiddenPlayer) {
                // Check if See More is active
                const isSeeMoreActive = seeMoreBtn && seeMoreBtn.classList.contains('active');
                wrapper.classList.remove('hidden');

                if (isSeeMoreActive) {
                  // Keep 'show' class if See More is active
                  wrapper.classList.add('show');
                } else {
                  // Remove 'show' class if See More is not active
                  wrapper.classList.remove('show');
                }

                // Reset opacity and transform
                wrapper.style.opacity = '1';
                wrapper.style.transform = 'scale(1)';
              } else {
                // Always show initial 4 players
                wrapper.classList.remove('hidden');
                wrapper.style.opacity = '1';
                wrapper.style.transform = 'scale(1)';
              }
            } else {
              // For specific position filters, show all matching players
              wrapper.classList.remove('hidden');
              wrapper.classList.add('show');
              // Trigger reflow for animation
              setTimeout(() => {
                wrapper.style.opacity = '1';
                wrapper.style.transform = 'scale(1)';
              }, 10);
            }
          } else {
            wrapper.style.opacity = '0';
            wrapper.style.transform = 'scale(0.8)';
            setTimeout(() => {
              wrapper.classList.add('hidden');
            }, 300);
          }
        });
      });
    });
  }

  // Scroll Animation for Player Cards
  function initScrollAnimations() {
    const playerCardWrappers = document.querySelectorAll('.player-card-wrapper');

    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.remove('animate-in');
            entry.target.classList.add('animate-visible');
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    playerCardWrappers.forEach((wrapper) => {
      wrapper.classList.add('animate-in');
      observer.observe(wrapper);
    });
  }

  // Keyboard Navigation for Accessibility
  function initKeyboardNavigation() {
    const flipIndicators = document.querySelectorAll('.card-flip-indicator');

    flipIndicators.forEach((indicator, index) => {
      indicator.setAttribute('tabindex', '0');
      indicator.setAttribute('role', 'button');

      indicator.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const card = this.closest('.player-card');
          card.classList.toggle('flipped');
        }
      });
    });
  }

  // Auto-unflip cards when clicking outside
  function initClickOutside() {
    document.addEventListener('click', function (e) {
      // Check if click is outside any player card
      if (!e.target.closest('.player-card')) {
        const playerCards = document.querySelectorAll('.player-card.flipped');
        playerCards.forEach((card) => {
          card.classList.remove('flipped');
        });
      }
    });
  }

  // Initialize all player showcase features
  function init() {
    // Check if players section exists
    const playersSection = document.querySelector('.players-section');
    if (!playersSection) return;

    initPlayerCards();
    initPositionFilter();
    initScrollAnimations();
    initKeyboardNavigation();
    initClickOutside();

    console.log('✅ Player showcase initialized');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

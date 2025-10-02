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
      let touchStartY = 0;
      let touchEndY = 0;
      let touchStartX = 0;
      let touchEndX = 0;
      let isTouchMove = false;
      let touchStartTime = 0;
      let touchUsed = false;

      // Track touch start position
      card.addEventListener('touchstart', function (e) {
        touchStartY = e.touches[0].clientY;
        touchStartX = e.touches[0].clientX;
        touchStartTime = Date.now();
        isTouchMove = false;
        touchUsed = true; // Mark that touch was used
      }, { passive: true });

      // Track if user is scrolling
      card.addEventListener('touchmove', function (e) {
        touchEndY = e.touches[0].clientY;
        touchEndX = e.touches[0].clientX;
        const deltaY = Math.abs(touchEndY - touchStartY);
        const deltaX = Math.abs(touchEndX - touchStartX);

        // If moved more than 10px vertically or horizontally, it's a scroll/swipe gesture
        if (deltaY > 10 || deltaX > 10) {
          isTouchMove = true;
        }
      }, { passive: true });

      // Only flip on tap, not on scroll
      card.addEventListener('touchend', function (e) {
        const touchDuration = Date.now() - touchStartTime;

        // Only flip if:
        // 1. No movement detected (not a scroll)
        // 2. Touch duration is less than 200ms (quick tap)
        if (!isTouchMove && touchDuration < 200) {
          e.preventDefault();
          this.classList.toggle('flipped');
        }
      });

      // Desktop/Mouse click - works for both touch and non-touch devices
      card.addEventListener('click', function (e) {
        // Only process click if touch wasn't just used (to avoid double trigger)
        if (!touchUsed) {
          this.classList.toggle('flipped');
        }
        // Reset touch flag after a short delay
        setTimeout(() => {
          touchUsed = false;
        }, 100);
      });
    });
  }

  // Position Filter Functionality
  function initPositionFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const playerCardWrappers = document.querySelectorAll('.player-card-wrapper');

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', function () {
        const position = this.dataset.position;

        // Update active button
        filterBtns.forEach((b) => b.classList.remove('active'));
        this.classList.add('active');

        // Filter players
        playerCardWrappers.forEach((wrapper) => {
          const playerPosition = wrapper.dataset.position;

          if (position === 'all' || playerPosition === position) {
            wrapper.classList.remove('hidden');
            // Trigger reflow for animation
            setTimeout(() => {
              wrapper.style.opacity = '1';
              wrapper.style.transform = 'scale(1)';
            }, 10);
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
    const playerCards = document.querySelectorAll('.player-card');

    playerCards.forEach((card, index) => {
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute(
        'aria-label',
        `Player card ${index + 1}. Press Enter to view statistics`
      );

      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.classList.toggle('flipped');

          // Update aria-label based on state
          const isFlipped = this.classList.contains('flipped');
          this.setAttribute(
            'aria-label',
            isFlipped
              ? `Player statistics. Press Enter to view profile`
              : `Player card ${index + 1}. Press Enter to view statistics`
          );
        }
      });
    });
  }

  // Auto-unflip cards when clicking outside
  function initClickOutside() {
    document.addEventListener('click', function (e) {
      const playerCards = document.querySelectorAll('.player-card');

      playerCards.forEach((card) => {
        if (!card.contains(e.target) && card.classList.contains('flipped')) {
          card.classList.remove('flipped');
        }
      });
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

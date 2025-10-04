/**
 * FORM VALIDATION & HANDLING
 * L'ÉQUIPE Football Agency
 */

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {

        const contactForm = document.getElementById('contactForm');

        if (!contactForm) return;

        // ============================================
        // FORM VALIDATION & RATE LIMITING
        // ============================================

        let lastSubmitTime = 0;
        const submitCooldown = 5000; // 5 seconds

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();

            // Check rate limiting first
            const currentTime = Date.now();
            if (currentTime - lastSubmitTime < submitCooldown) {
                alert('Please wait a few seconds before submitting again.');
                return;
            }

            // Check form validity
            if (!contactForm.checkValidity()) {
                contactForm.classList.add('was-validated');
                return;
            }

            // Form is valid
            contactForm.classList.add('was-validated');
            lastSubmitTime = currentTime;

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            };

            // TODO Phase 2-3: Implement actual form submission
            // For now, just log and show success message
            console.log('Form submitted:', formData);

            // Show success message
            showSuccessMessage();

            // Reset form
            setTimeout(() => {
                contactForm.reset();
                contactForm.classList.remove('was-validated');
            }, 2000);
        });


        // ============================================
        // REAL-TIME EMAIL VALIDATION
        // ============================================

        const emailInput = document.getElementById('email');

        if (emailInput) {
            emailInput.addEventListener('blur', function() {
                validateEmail(this);
            });
        }

        function validateEmail(input) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isValid = emailRegex.test(input.value);

            if (input.value && !isValid) {
                input.setCustomValidity('Please enter a valid email address');
            } else {
                input.setCustomValidity('');
            }
        }


        // ============================================
        // SUCCESS MESSAGE
        // ============================================

        function showSuccessMessage() {
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;

            submitButton.textContent = '✓ Message Sent!';
            submitButton.disabled = true;
            submitButton.classList.add('btn-success');

            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.classList.remove('btn-success');
            }, 3000);
        }




        // ============================================
        // INPUT FOCUS EFFECTS
        // ============================================

        const formInputs = contactForm.querySelectorAll('.form-control');

        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('input-focused');
            });

            input.addEventListener('blur', function() {
                this.parentElement.classList.remove('input-focused');
            });
        });

    });

})();
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Basic form validation (can be expanded)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            formResponse.textContent = 'Please fill out all fields.';
            formResponse.className = 'alert alert-danger mt-3'; // Bootstrap alert class
            return;
        }

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            formResponse.textContent = 'Thank you for your message! We will get back to you soon.';
            formResponse.className = 'alert alert-success mt-3'; // Bootstrap alert class
            contactForm.reset(); // Clear the form

            // Clear the success message after 5 seconds
            setTimeout(() => {
                formResponse.textContent = '';
                formResponse.className = '';
            }, 5000);
        }, 1000);
    });

    // Simple scroll animation for navigation
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });
});
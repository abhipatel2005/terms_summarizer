// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });

            // Close navbar collapse on mobile when clicking a link
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('nameInput').value;
        const email = document.getElementById('emailInput').value;
        const subject = document.getElementById('subjectSelect').value;
        const message = document.getElementById('messageInput').value;

        // Validate form (simple validation)
        if (!name || !email || !subject || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // Simulate form submission (in a real app, you would send this to your backend)
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Newsletter subscription handling
const subscribeBtn = document.getElementById('subscribe-btn');
if (subscribeBtn) {
    subscribeBtn.addEventListener('click', function () {
        const emailInput = this.previousElementSibling;
        const email = emailInput.value;

        if (!email || !email.includes('@')) {
            alert('Please enter a valid email address.');
            return;
        }

        // Simulate subscription (in a real app, you would send this to your backend)
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
    });
}

// Add active class to navbar items based on scroll position
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelector(`nav a[href="#${sectionId}"]`)?.classList.add('active');
        } else {
            document.querySelector(`nav a[href="#${sectionId}"]`)?.classList.remove('active');
        }
    });
});

// Display current year in the footer
document.addEventListener('DOMContentLoaded', function () {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();

    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
});
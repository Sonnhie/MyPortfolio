 const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

// Select all anchor links that link to sections
const links = document.querySelectorAll('a[href^="#"]');

// Smooth scroll + auto-close menu on mobile
links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    // Smooth scroll to the section
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // Close the mobile menu if open
    navLinks.classList.remove('show');
  });
});

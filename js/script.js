// Select all links with hashes
const links = document.querySelectorAll('a[href^="#"]');

// Add click event listener to each link
links.forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store the target element's ID
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Scroll to the target element smoothly
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

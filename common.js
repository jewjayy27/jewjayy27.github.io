document.addEventListener('DOMContentLoaded', () => {
    // 1. Footer Year Update
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Navigation Active State
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.global-nav a');

    navLinks.forEach(link => {
        // Remove active class from all links first
        link.classList.remove('active');

        // Get the href attribute of the link
        const href = link.getAttribute('href');
        
        // Check if the current path ends with the href
        // We use endsWith to handle different base paths (e.g. /index.html vs /pages/deep%20learning.html)
        // Also handle the root path case if necessary, though here we have explicit index.html links
        if (href && currentPath.endsWith(href.replace(/^\.\.\//, ''))) {
             link.classList.add('active');
        } else if (currentPath.endsWith('/') && href.includes('index.html')) {
            // Handle case where URL is just root / and link is index.html
             link.classList.add('active');
        }
    });
});

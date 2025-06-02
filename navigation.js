document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.navLink1');
    const body = document.body;

    hamburger.addEventListener('click', function() {
        // Toggle active class on hamburger
        this.classList.toggle('active');
        
        // Toggle active class on menu
        mobileMenu.classList.toggle('active');

        // Prevent scrolling when menu is open
        if (mobileMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });
});




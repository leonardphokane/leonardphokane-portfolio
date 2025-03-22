document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('nav ul');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
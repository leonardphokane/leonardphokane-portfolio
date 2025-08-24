document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('nav ul');

    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Initialize skill bars
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        let level = bar.getAttribute('data-level');
        bar.style.setProperty('--level', level);
    });
});

function initParticles(elementId) {
    particlesJS(elementId, {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            move: { enable: true, speed: 2 }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            },
            modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initParticles("particles-js");
    initParticles("particles-contact");
});
document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll(".skill-fill");

    skillBars.forEach(bar => {
        const level = bar.getAttribute("data-level");
        bar.style.width = level + "%"; // Ensure this is working
    });
});
// scripts.js

// Wait for DOM to load before initializing AOS
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,       // Animation duration in ms
    easing: "ease-in-out",// Easing function
    once: true,           // Animate only once while scrolling down
    mirror: false         // Don't animate while scrolling back up
  });
});

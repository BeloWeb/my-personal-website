// script.js

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select the nav toggle button and the nav links container
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Add click event listener to toggle navigation menu for mobile
  navToggle.addEventListener('click', () => {
    // Toggle 'active' class on the button to animate hamburger icon
    navToggle.classList.toggle('active');

    // Toggle 'active' class on nav links to show/hide the menu
    navLinks.classList.toggle('active');
  });

  // Optional: close the menu when clicking outside or on a nav link (enhancement)
  document.addEventListener('click', (event) => {
    if (!navToggle.contains(event.target) && !navLinks.contains(event.target)) {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });

  // Optional: close menu when a nav link is clicked (mobile UX)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
});


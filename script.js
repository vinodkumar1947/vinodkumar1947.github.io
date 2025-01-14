document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
  
    // Event listener for navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
  
        // Remove 'active' class from all sections and links
        navLinks.forEach(nav => nav.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));
  
        // Add 'active' class to the clicked link and its corresponding section
        const targetId = link.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
        link.classList.add('active');
      });
    });
  });
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for menu navigation
  const menuNavLinks = document.querySelectorAll('.menu-nav a');
  
  menuNavLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Update active state
        menuNavLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        
        // Scroll to section
        window.scrollTo({
          top: targetElement.offsetTop - 120,
          behavior: 'smooth'
        });
      }
    });
  });

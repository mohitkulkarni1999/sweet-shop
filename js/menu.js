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

  // Highlight current section in menu navigation
  const menuSections = document.querySelectorAll('.menu-section');
  
  function highlightMenu() {
    let fromTop = window.scrollY + 150;
    
    menuSections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (fromTop >= sectionTop && fromTop < sectionTop + sectionHeight) {
        menuNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', highlightMenu);
  highlightMenu(); // Run once on load

  // Add to cart functionality
  const addToCartBtns = document.querySelectorAll('.btn-add');
  
  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Animation effect
      this.textContent = 'Added!';
      this.style.backgroundColor = 'var(--success)';
      
      // Get item details
      const itemCard = this.closest('.menu-item, .combo-item');
      const itemName = itemCard.querySelector('h3').textContent;
      const itemPrice = itemCard.querySelector('.price, .discounted-price').textContent;
      
      // In a real app, you would add this to a cart system
      console.log(`Added to cart: ${itemName} - ${itemPrice}`);
      
      // Reset button after animation
      setTimeout(() => {
        this.textContent = 'Add to Cart';
        this.style.backgroundColor = 'var(--secondary)';
      }, 2000);
    });
  });

  // Animation for menu items
  function animateMenuItems() {
    const menuItems = document.querySelectorAll('.menu-item, .combo-item');
    
    menuItems.forEach((item, index) => {
      const itemPosition = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (itemPosition < windowHeight - 100) {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }
    });
  }

  // Set initial state for animated items
  document.querySelectorAll('.menu-item, .combo-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(50px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  window.addEventListener('scroll', animateMenuItems);
  window.addEventListener('load', animateMenuItems);
});
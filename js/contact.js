document.addEventListener('DOMContentLoaded', function() {
  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-answer').style.maxHeight = '0';
          otherItem.querySelector('.faq-question i').style.transform = 'rotate(0)';
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
      const answer = item.querySelector('.faq-answer');
      const icon = item.querySelector('.faq-question i');
      
      if (item.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
      } else {
        answer.style.maxHeight = '0';
        icon.style.transform = 'rotate(0)';
      }
    });
  });

  // Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // In a real app, you would send this data to your server
      console.log('Form submitted:', { name, email, subject, message });
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.');
      
      // Reset form
      contactForm.reset();
    });
  }

  // Animation for contact cards
  function animateContactCards() {
    const contactCards = document.querySelectorAll('.contact-card');
    
    contactCards.forEach((card, index) => {
      const cardPosition = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (cardPosition < windowHeight - 100) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
  }

  // Set initial state for animated elements
  document.querySelectorAll('.contact-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  window.addEventListener('scroll', animateContactCards);
  window.addEventListener('load', animateContactCards);
});
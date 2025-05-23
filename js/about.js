document.addEventListener('DOMContentLoaded', function() {
  // Testimonial Slider
  const testimonials = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
    currentIndex = index;
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showTestimonial(index));
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  });

  // Auto-rotate testimonials
  let testimonialInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }, 5000);

  // Pause auto-rotation on hover
  const testimonialSlider = document.querySelector('.testimonial-slider');
  testimonialSlider.addEventListener('mouseenter', () => {
    clearInterval(testimonialInterval);
  });

  testimonialSlider.addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    }, 5000);
  });

  // Animation for team members
  function animateTeamMembers() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach((member, index) => {
      const memberPosition = member.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (memberPosition < windowHeight - 100) {
        member.style.opacity = '1';
        member.style.transform = 'translateY(0)';
      }
    });
  }

  // Set initial state for animated elements
  document.querySelectorAll('.team-member').forEach(member => {
    member.style.opacity = '0';
    member.style.transform = 'translateY(50px)';
    member.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  window.addEventListener('scroll', animateTeamMembers);
  window.addEventListener('load', animateTeamMembers);
});
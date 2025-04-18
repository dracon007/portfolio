// Scroll-triggered animations
function revealOnScroll() {
    const revealElements = document.querySelectorAll('.skill, .project, .experience-content');
  
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
  
      if (elementTop < viewportHeight - 100) {
        el.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  
'use strict'

window.addEventListener('load', () => {
  // ========== FILTRO DE PROYECTOS ==========
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.dataset.filter;

      // Actualizar botón activo
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Filtrar tarjetas
      projectCards.forEach(card => {
        const category = card.dataset.category;
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          setTimeout(() => card.style.opacity = '1', 10);
        } else {
          card.style.opacity = '0';
          setTimeout(() => card.style.display = 'none', 300);
        }
      });
    });
  });

  // ========== FORMULARIO DE CONTACTO ==========
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const formData = new FormData(this);
      const nombre = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const mensaje = this.querySelector('textarea').value;

      // Aquí puedes enviar los datos a un servidor
      console.log('Formulario enviado:', { nombre, email, mensaje });

      // Mostrar mensaje de éxito
      const submitBtn = this.querySelector('.btn-submit');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = '✓ ¡Mensaje enviado!';
      submitBtn.disabled = true;

      // Resetear formulario después de 2 segundos
      setTimeout(() => {
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 2000);
    });
  }

  // ========== ANIMACIONES AL SCROLL ==========
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Aplicar animación a elementos que lo necesitan
  document.querySelectorAll('.skill-card, .icon-box, .opinion').forEach(el => {
    observer.observe(el);
  });

  // ========== LAZY LOADING DE IMÁGENES ==========
  const images = document.querySelectorAll('img[data-src]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });
    images.forEach(img => imageObserver.observe(img));
  }
});
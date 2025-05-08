// Animación de entrada al hacer scroll
document.addEventListener('DOMContentLoaded', function () {
  const elementos = document.querySelectorAll('.animate__animated');

  function mostrarEnPantalla() {
    elementos.forEach(elemento => {
      const posicion = elemento.getBoundingClientRect().top;
      if (posicion < window.innerHeight) {
        elemento.classList.add('animate__fadeInUp');
      }
    });
  }

  window.addEventListener('scroll', mostrarEnPantalla);
  mostrarEnPantalla();
});

// Función para abrir imagen en modal
function openModal(src) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');

  modal.style.display = 'flex';
  modalImg.src = src;

  modalImg.classList.remove('animate__fadeOut');
  modalImg.classList.add('animate__animated', 'animate__zoomIn');
}

// Función para cerrar el modal
function closeModal() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');

  modalImg.classList.remove('animate__zoomIn');
  modalImg.classList.add('animate__fadeOut');

  setTimeout(() => {
    modal.style.display = 'none';
    modalImg.classList.remove('animate__animated', 'animate__fadeOut');
    modalImg.src = '';
  }, 500);
}
// Modal de imagen ampliada
document.querySelectorAll('.galeria-img').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    // Establecer la imagen en el modal
    modalImg.src = img.src;
    
    // Mostrar el modal
    modal.style.display = 'flex';
  });
});

// Función para cerrar el modal
function closeModal() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  
  // Ocultar el modal
  modal.style.display = 'none';
  
  // Limpiar la imagen
  modalImg.src = '';
}

// Modal de imagen ampliada con animación
document.querySelectorAll('.galeria-img').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    // Establecer la imagen en el modal
    modalImg.src = img.src;
    
    // Limpiar la animación previa
    modalImg.classList.remove('animate__fadeIn');
    
    // Añadir animación de entrada
    modalImg.classList.add('animate__animated', 'animate__zoomIn');

    // Mostrar el modal
    modal.style.display = 'flex';
  });
});

// Función para cerrar el modal con animación
function closeModal() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');

  // Animación de salida
  modalImg.classList.remove('animate__zoomIn');
  modalImg.classList.add('animate__fadeOut');

  // Espera a que termine para ocultar
  setTimeout(() => {
    modal.style.display = 'none';
    modalImg.classList.remove('animate__animated', 'animate__fadeOut');
    modalImg.src = '';
  }, 500);
}

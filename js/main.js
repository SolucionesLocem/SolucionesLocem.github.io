document.addEventListener('DOMContentLoaded', () => {
  const elementos = document.querySelectorAll('.animate__animated');

  const mostrarEnPantalla = () => {
    elementos.forEach(elemento => {
      if (elemento.getBoundingClientRect().top < window.innerHeight) {
        elemento.classList.add('animate__fadeInUp');
      }
    });
  };

  window.addEventListener('scroll', mostrarEnPantalla);
  mostrarEnPantalla();
});

function openModal(src) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');

  modal.style.display = 'flex';
  modalImg.src = src;

  modalImg.classList.remove('animate__fadeOut');
  modalImg.classList.add('animate__animated', 'animate__zoomIn');
}

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

document.querySelectorAll('.galeria-img').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    modalImg.src = img.src;
    modalImg.classList.remove('animate__fadeIn');
    modalImg.classList.add('animate__animated', 'animate__zoomIn');

    modal.style.display = 'flex';
  });
});

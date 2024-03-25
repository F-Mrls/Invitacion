  // Simula el tiempo de carga
  setTimeout(function() {
    document.querySelector('.preloader').style.opacity = '0'; // Oculta gradualmente el preloader
    document.querySelector('.overlay').style.filter = 'blur(0)'; // Elimina gradualmente el efecto de desenfoque
    document.body.style.overflowY = 'auto'; // Habilita el scroll vertical después de que termine el preload
  }, 2500); // Cambia el tiempo según lo necesario

  // Simula el progreso de carga
  let progress = 0;
  const progressBar = document.querySelector('.progress');

  function increaseProgress() {
    progress += 10;
    progressBar.style.width = progress + '%';

    if (progress < 100) {
      setTimeout(increaseProgress, 60);
    }
  }

  increaseProgress();

 // Después de 3 segundos de terminado el preload
setTimeout(function() {
    document.querySelector('.nombre-img').classList.add('visible'); // Agrega la clase "visible" a la imagen
}, 3500); // 3 segundos de espera

// Función para manejar el evento de scroll y activar la animación
function handleScrollAnimation() {
  var elements = document.querySelectorAll('.animate-on-scroll');

  // Iterar sobre cada elemento animable
  elements.forEach(function(element) {
      var positionFromTop = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      // Verificar si el elemento está cerca de la posición actual
      if (positionFromTop - windowHeight <= 0) {
          // Agregar la clase 'visible' al elemento para activar la animación
          element.classList.add('visible');
      }
  });
}

// Llamar a la función una vez que el DOM se haya cargado completamente
document.addEventListener('DOMContentLoaded', function() {
  handleScrollAnimation(); // Llama a la función para activar la animación al cargar la página
});

// Agregar el evento de scroll para llamar a la función handleScrollAnimation
window.addEventListener('scroll', handleScrollAnimation);




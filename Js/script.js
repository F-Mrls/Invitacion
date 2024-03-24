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

// Función para manejar el evento de scroll
function handleScrollAnimation() {
    var elements = document.querySelectorAll('.animate-on-scroll');

    // Iterar sobre cada elemento animable
    elements.forEach(function(element) {
        var positionFromTop = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        // Verificar si el elemento está cerca de la posición actual
        if (positionFromTop - windowHeight <= 0) {
            // Retrasar la adición de la clase 'visible' después del scroll
            setTimeout(function() {
                element.classList.add('visible');
            }, 200); // 0.5 segundos de retraso
            // Eliminar el evento de scroll para evitar que la animación se active múltiples veces
            window.removeEventListener('scroll', handleScrollAnimation);
        }
    });
}

// Agregar el evento de scroll para llamar a la función handleScrollAnimation
window.addEventListener('scroll', handleScrollAnimation);

// Llamar a la función una vez al cargar la página para manejar los elementos que ya están en la vista
handleScrollAnimation();

document.addEventListener('DOMContentLoaded', function() {
    // Llamar a la función una vez que el DOM se haya cargado completamente
    handleScrollAnimation();
});



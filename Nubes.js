const cloud = document.getElementById('cloud');
const message = document.getElementById('message');
const container = document.querySelector('.container');

// Función para generar corazones
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤';
  heart.style.left = '${Math.random() * 100}vw';
  heart.style.animationDuration = '${Math.random() * 2 + 3}s';
  container.appendChild(heart);

  // Eliminar el corazón después de la animación
  setTimeout(() => {
    heart.remove();
  }, 4000);
}

// Evento al hacer clic en la nube
cloud.addEventListener('click', () => {
  // Mostrar el mensaje
  message.classList.remove('hidden');

  // Generar corazones continuamente
  setInterval(createHeart, 300);
});
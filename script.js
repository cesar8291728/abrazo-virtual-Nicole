const colors = ['#ffcccb', '#add8e6', '#90ee90', '#ffd700', '#dda0dd']; // Puedes agregar más colores si lo deseas

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function changeBackground() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
}

// Cambia el fondo al hacer clic en cualquier parte de la página
document.body.addEventListener('click', changeBackground);

// Cambia el fondo al pasar el mouse sobre el abrazo virtual
const abrazoGif = document.getElementById('gif');
abrazoGif.addEventListener('mouseover', changeBackground);

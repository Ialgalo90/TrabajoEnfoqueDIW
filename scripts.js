// Selecciona todas las imágenes con la clase "album-img"
const imgDisco = document.querySelectorAll('.imgDisco');

// Itera sobre cada imagen y agrega los eventos de mouseover y mouseout
imgDisco.forEach((img) => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.05)'; // Aumenta el tamaño al 110%
        img.style.transition = 'transform 0.3s'; // Suaviza la animación
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)'; // Regresa al tamaño original
    });
});
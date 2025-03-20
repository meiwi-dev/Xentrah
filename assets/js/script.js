document.addEventListener('DOMContentLoaded', () => {
    console.log('Xentrah Web Mejorada Cargada');

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseover', () => button.classList.add('hover'));
        button.addEventListener('mouseout', () => button.classList.remove('hover'));
    });
});

// Función para mostrar/ocultar el menú en móviles
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}
// Función para mostrar/ocultar el menú en móviles
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}


// Asegura que los enlaces deslicen correctamente al hacer clic
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.remove('active'); // Cierra el menú en móviles
    });
});

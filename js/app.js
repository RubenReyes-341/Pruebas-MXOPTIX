// ==========================
// MENÚ HAMBURGUESA (MÓVIL)
// ==========================

// Selecciona elementos
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.navbar-menu');

// Evento click para abrir/cerrar menú
toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});


// ==========================
// DETECTAR LINK ACTIVO
// (línea amarilla automática)
// ==========================

// Obtiene todos los links del menú
const links = document.querySelectorAll('.navbar-menu a');

// URL actual
const currentURL = window.location.pathname;

// Recorre cada link
links.forEach(link => {

  // Obtiene el href del link
  const linkPath = new URL(link.href).pathname;

  // Compara con la URL actual
  if (linkPath === currentURL) {
    link.classList.add('active');
  }

});
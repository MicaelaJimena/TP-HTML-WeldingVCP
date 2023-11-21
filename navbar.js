// navbar.js
document.addEventListener('DOMContentLoaded', function () {
    const navbarContainer = document.getElementById('navbar'); // Asigna el ID adecuado de tu contenedor navbar

    // Crea el navbar utilizando la estructura de datos
    const navbarHTML = pages.map(page => `<a href="${page.url}">${page.title}</a>`).join('');

    // Agrega el HTML al contenedor navbar
    navbarContainer.innerHTML = navbarHTML;
});

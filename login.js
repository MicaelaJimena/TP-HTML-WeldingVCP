// login.js

// Espera a que el contenido del documento HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Obtiene el formulario de inicio de sesión
    const loginForm = document.querySelector('form');

    // Agrega un "escuchador" de eventos para el envío del formulario
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de manera normal

        // Aquí puedes agregar tu lógica para manejar el proceso de inicio de sesión
        // Por simplicidad, asumimos que el inicio de sesión es exitoso

        // Redirige al usuario a la página principal
        redirectToMainPage();
    });
});

// Función para redirigir al usuario a la página principal
function redirectToMainPage() {
    
    window.location.href = 'indexWVCP.html';
}

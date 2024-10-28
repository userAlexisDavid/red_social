const DEFAULT_USERNAME = 'Alex10';
const DEFAULT_PASSWORD = '1234';

document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
        // Redirigir a home.html
        window.location.href = 'home.html';
    } else {
        document.getElementById('login-message').innerText = 'Usuario o contraseña incorrectos';
    }
});

// Aquí puedes mantener la funcionalidad del registro si deseas

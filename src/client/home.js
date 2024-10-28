const container = document.getElementById('user-container');

// Datos de los usuarios
const users = [
    { name: 'bruno', petType: 'Perro', location: 'QUITO', img: 'img/perro.jpeg' },
    { name: 'Manchas', petType: 'Gato', location: 'AMBATO', img: 'img/gato.jpeg' },
    { name: 'Saltarin', petType: 'Conejo', location: 'CALDERON', img: 'img/conejo.jpg' }, // Cambiado de coma a punto
    { name: 'Juan', petType: 'Loro', location: 'CARAPUNGO', img: 'img/loro2.png' },
    { name: 'Sara', petType: 'Tortuga', location: 'ESMERALDAS', img: 'img/tortuga5.jpg' },
    { name: 'Pepito', petType: 'Hámster', location: 'LA ROLDOS', img: 'img/hamsters.jpeg' },
    { name: 'Luna', petType: 'Perra', location: 'EL CONDADO', img: 'img/perro3.jpg' },
    { name: 'Milo', petType: 'Gato', location: 'COLINAS', img: 'img/gato2.jpg' },
    { name: 'Julian', petType: 'Pájaro', location: 'CAYAMBE', img: 'img/pajaro6.jpg' },
    { name: 'Rabit', petType: 'Conejo', location: 'OTAVALO', img: 'img/conejo3.jpg' },
    { name: 'Boby', petType: 'Perro', location: 'EL INCA', img: 'img/perro5.jpg' },
    { name: 'Domingo', petType: 'Gato', location: 'LABRADOR', img: 'img/gato4.jpg' },
    { name: 'Elena', petType: 'Tortuga', location: 'GALAPAGOS', img: 'img/tortuga.jpeg' },
    { name: 'Jorge', petType: 'Hámster', location: 'RANCHO BAJO', img: 'img/hamsters5.jpg' },
    { name: 'Nene', petType: 'Perro', location: 'EL PINTAGO', img: 'img/perro8.jpeg' },
    { name: 'Batman', petType: 'Gato', location: 'GUAMANI', img: 'img/gato6.jpg' },
    { name: 'Luz', petType: 'Pájaro', location: 'AMAZONAS', img: 'img/loro.webp' },
    { name: 'Bosboni', petType: 'Conejo', location: 'CARCHI', img: 'img/conejo7.jpg' },
    { name: 'Rubi', petType: 'Gata', location: 'COLOMBIA', img: 'img/gato10.png' },
    { name: 'Brisa', petType: 'Coneja', location: 'POMASQUI', img: 'img/conejo7.jpg' },
];

// Crear las tarjetas de usuario
users.forEach((user, index) => {
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');

    userCard.innerHTML = `
        <img src="${user.img}" alt="Mascota ${index + 1}">
        <h2>${user.name}</h2>
        <p>Tipo de Mascota: ${user.petType}</p>
        <p>Ubicación: ${user.location}</p>
        <button class="button">Me gusta</button>
        <button class="button">No me gusta</button>
    `;

    container.appendChild(userCard);
});

// Manejar eventos de los botones
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', (event) => {
        const action = event.target.innerText;
        const userCard = event.target.closest('.user-card');
        const userName = userCard.querySelector('h2').innerText;

        if (action === 'Me gusta') {
            alert(`Te gusta ${userName}!`);
        } else {
            alert(`No te gusta ${userName}.`);
        }
    });
});

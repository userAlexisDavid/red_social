const express = require('express');
const router = express.Router();
const User = require('./models/User'); // Asegúrate de que la ruta al modelo sea correcta

// Ruta para registrar usuarios
router.post('/register', async (req, res) => {
    const { username, password, petName, petType, location } = req.body;
    
    // Aquí deberías agregar la lógica para crear un usuario en la base de datos
    // ...
});

// Ruta para iniciar sesión
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Busca al usuario en la base de datos
    const user = await User.findOne({ username });

    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Aquí puedes agregar lógica para crear una sesión o token, si lo necesitas
    return res.status(200).json({ message: 'Inicio de sesión exitoso' });
});

module.exports = router;

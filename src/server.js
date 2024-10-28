const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Importa cors
const authRoutes = require('./routes/auth');


const app = express();
const PORT = process.env.PORT || 5000;

// Habilita CORS antes de cualquier otra configuración
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Conectar a MongoDB
const uri = 'mongodb://localhost:27017/Alex';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error de conexión:', err));

// Usar las rutas de autenticación
app.use('/api/auth', authRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
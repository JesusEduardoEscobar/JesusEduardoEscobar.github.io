const express = require('express');
const app = express();
const path = require('path')

// Datos de ejemplo: Lista de escuelas
const escuelas = [
    { id: 1, nombre: 'Escuela Primaria Benito Juárez', ubicacion: 'CDMX', necesidades: ['Libros', 'Pintura'] },
    { id: 2, nombre: 'Escuela Secundaria Revolución', ubicacion: 'Guadalajara', necesidades: ['Computadoras', 'Mobiliario'] },
    { id: 3, nombre: 'Colegio Independencia', ubicacion: 'Monterrey', necesidades: ['Material deportivo', 'Becas'] }
];

app.use(express.static(path.join(__dirname, 'public')))

// Ruta para obtener información de una escuela por su ID
app.get('/getEscuela/:id', (req, res) => {
    const escuelaId = parseInt(req.params.id);
    const escuela = escuelas.find(e => e.id === escuelaId);

    if (escuela) {
        res.send(escuela);
    } else {
        res.status(404).json({ error: 'Escuela no encontrada' });   
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Ejercicio12.html'));
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

const express = require('express');
const app = express();

app.use(express.json());

app.get('/convenio', (req, res) => {
    console.log('GET: 404 Not Found: No existe convenio.');
    res.status(404).json({ error: 'No existe convenio' });
});

app.post('/perfil', (req, res) => {
    console.log('POST: 201 Perfil registrado exitosamente');
    res.status(201).json({ message: 'Perfil registrado exitosamente' });
});

app.put('/actualizar', (req, res) => {
    console.log('PUT: 404 No se pudo actualizar correctamente.');
    res.status(404).json({ error: 'No se pudo actualizar correctamente' });
});

app.delete('/solicitud', (req, res) => {
    console.log('DELETE: 200 Solicitud de oferta eliminada');
    res.status(200).json({ message: 'Solicitud de oferta eliminada' });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

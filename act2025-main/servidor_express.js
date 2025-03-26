import express from 'express';
import fs from 'fs';

const app = express();
const puerto = 1984;

app.use(express.static('public'));

app.get('/', (req, res) => {
    fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
            return res.status(500).send('Oh no!!!!');
        }
        res.status(200).send(data);
    });
});

app.get('/api/escuelas', (req, res) => {
    const escuelas = {
        escuelas: [
            { nombre: "Escuela Benito Juárez", direccion: "Av. Principal 123, Ciudad de México" },
            { nombre: "Escuela aquí aprender porque aprendes", direccion: "Av. Nose 456, Ciudad de Topolobampo" }
        ]
    };
    res.status(200).json(escuelas);
});


app.get('/escuelas', (req, res) => {
    fs.readFile('escuelas.html', 'utf8', (error, data) => {
        if (error) {
            return res.status(500).send('Oh no!!!!');
        }
        res.status(200).send(data);
    });
});

app.get('/api/donantes', (req, res) => {
    const donantes = {
        donantes: [
            { nombre: "Alfredo Molina", cantidad: "7777 MXN" },
            { nombre: "María Escobar", cantidad: "3333 MXN" }
        ]
    };
    res.status(200).json(donantes);
});


app.get('/donantes', (req, res) => {
    fs.readFile('donantes.html', 'utf8', (error, data) => {
        if (error) {
            return res.status(500).send('Oh no!!!!');
        }
        res.status(200).send(data);
    });
});

app.get('/equipo', (req, res) => {
    fs.readFile('equipo.html', 'utf8', (error, data) => {
        if (error) {
            return res.status(404).send('Te equivocaste manito, vuelve a intentar más tarde');
        }
        res.status(200).send(data);
    });
});

app.get('/opinion', (req, res) => {
    fs.readFile('opinion.html', 'utf8', (error, data) => {
        if (error) {
            return res.status(404).send('Te equivocaste manito, vuelve a intentar más tarde');
        }
        res.status(200).send(data);
    });
});

app.use((req, res) => {
    res.status(404).send('Te equivocaste manito, vuelve a intentar más tarde');
});

app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});

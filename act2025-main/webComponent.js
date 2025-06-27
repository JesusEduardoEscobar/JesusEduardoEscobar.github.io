import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/bienvenida', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/webcomponent.html'));
})

const puerto = 1984
app.listen(puerto, () =>{
    console.log(`El servidor que se abrio fue ${puerto}`);
})
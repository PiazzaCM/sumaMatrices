import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import cors from 'cors';

const app = express();
const port = 2000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, 'public')));


app.post('/sumar', (req, res)=>{

    const matriz1 = req.body.matriz1
    const matriz2 = req.body.matriz2

    let result = matriz1;

    for (let i = 0; i < matriz1.length; i++) {
        for (let j = 0; j < matriz1[0].length; j++) {
            result[i][j] = parseInt(matriz1[i][j])+parseInt(matriz2[i][j]);
        }
    }

    return res.json(result);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
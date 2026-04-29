const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Array en memoria (Punto 6 de la rúbrica)
let elementos = [{ id: 1, nombre: 'Elemento de prueba' }];

app.get('/api/elementos', (req, res) => {
  res.json(elementos);
});

app.post('/api/elementos', (req, res) => {
  const nuevo = req.body;
  elementos.push(nuevo);
  res.status(201).json(nuevo);
});

app.listen(3000, () => console.log('Backend corriendo en puerto 3000'));
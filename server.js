const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("Prueba");
});

const vehiculoRoutes = require('./routes/vehiculo.routes')

app.use('/api/v1/vehiculos', vehiculoRoutes)

app.listen(port, () => {
  console.log(`Servidor corriendo en ${port}`);
});
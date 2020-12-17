const Vehiculo = require("../models/vehiculo.model");
const swapi = require('swapi-node');

exports.findVehicleAll = function (req, res) {
    swapi.getVehicle().then((result) => {
        res.send(result.results);
    });
};

exports.findAll = function (req, res) {
  Vehiculo.findAll(function (err, vehiculo) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", vehiculo);
    res.send(vehiculo);
  });
};

exports.create = function (req, res) {
  const nuevo_vehiculo = new Vehiculo(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Error al agregar" });
  } else {
    Vehiculo.create(nuevo_vehiculo, function (err, vehiculo) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Vehiculo agregado!",
        data: vehiculo,
      });
    });
  }
};
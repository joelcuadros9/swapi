const Vehiculo = require("../models/vehiculo.model");
const swapi = require('swapi-node');

exports.findVehicleAll = function (req, res) {
    swapi.getVehicle().then((result) => {
        const vehiculo = new Object();
        const listaVehiculos = [];
        result.results.forEach(element => {
          vehiculo.nombre = element.name;
          vehiculo.modelo = element.model;
          vehiculo.fabricante = element.manufacturer;
          vehiculo.costo_creditos = element.cost_in_credits;
          vehiculo.tripulacion = element.crew;
          vehiculo.pasajeros = element.passengers;
          vehiculo.capacidad_carga = element.cargo_capacity;
          vehiculo.consumibles = element.consumables;
          vehiculo.clase_vehiculo = element.vehicle_class;
          listaVehiculos.push(vehiculo);
        });
        res.send(listaVehiculos);
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
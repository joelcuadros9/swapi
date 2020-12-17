var db = require("./../config/db.config");

var Vehiculo = function (vehiculo) {
  this.nombre = vehiculo.nombre;
  this.modelo = vehiculo.modelo;
  this.fabricante = vehiculo.fabricante;
  this.costo_creditos = vehiculo.costo_creditos;
  this.tripulacion = vehiculo.tripulacion;
  this.pasajeros = vehiculo.pasajeros;
  this.capacidad_carga = vehiculo.capacidad_carga;
  this.consumibles = vehiculo.consumibles;
  this.clase_vehiculo = vehiculo.clase_vehiculo;
};

Vehiculo.create = function (nuevo, result) {
  db.query("INSERT INTO vehiculo set ?", nuevo, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Vehiculo.findAll = function (result) {
  db.query("Select * from vehiculo", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("employees : ", res);
      result(null, res);
    }
  });
};

module.exports = Vehiculo;

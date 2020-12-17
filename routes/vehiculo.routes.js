const express = require("express");
const router = express.Router();
const vehiculoController = require("../controller/vehiculo.controller");

router.get("/swapi", vehiculoController.findVehicleAll);

router.get("/", vehiculoController.findAll);

router.post("/", vehiculoController.create);

module.exports = router;

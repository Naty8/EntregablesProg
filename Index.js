const { RegistroAutomotor } = require("./RegistroAutomotor");
const { Auto } = require("./Auto");
const { Moto } = require("./Moto");
const { Camion } = require("./Camion");

const registro = new RegistroAutomotor();

const auto = new Auto("Toyota", "Corolla", 2020);
const moto = new Moto("Honda", "CB500", 2019);
const camion = new Camion("Mercedes", "Actros", 2021);

registro.agregarVehiculo(auto);
registro.agregarVehiculo(moto);
registro.agregarVehiculo(camion);

console.log("Lista inicial de vehículos:");
registro.listarVehiculos();

console.log("\nModificando el auto...");
registro.modificarVehiculo(0, new Auto("Ford", "Focus", 2022));
registro.listarVehiculos();

console.log("\nEliminando la moto...");
registro.eliminarVehiculo(1);
registro.listarVehiculos();

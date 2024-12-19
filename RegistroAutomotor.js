class RegistroAutomotor {
    constructor() {
      this.vehiculos = [];
    }
  
    agregarVehiculo(vehiculo) {
      this.vehiculos.push(vehiculo);
    }
  
    eliminarVehiculo(index) {
      if (index >= 0 && index < this.vehiculos.length) {
        this.vehiculos.splice(index, 1);
      } else {
        console.log("Índice no válido.");
      }
    }
  
    modificarVehiculo(index, nuevoVehiculo) {
      if (index >= 0 && index < this.vehiculos.length) {
        this.vehiculos[index] = nuevoVehiculo;
      } else {
        console.log("Índice no válido.");
      }
    }
  
    listarVehiculos() {
      this.vehiculos.forEach((vehiculo, index) =>
        console.log(`${index}: ${vehiculo.descripcion()}`)
      );
    }
  }
  
  module.exports = { RegistroAutomotor };
  
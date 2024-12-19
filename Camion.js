const { Vehiculo } = require("./Vehiculo");

class Camion extends Vehiculo {
  descripcion() {
    return `Camión: ${this.getMarca()} ${this.getModelo()} (${this.getAño()})`;
  }
}

module.exports = { Camion };

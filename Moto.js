const { Vehiculo } = require("./Vehiculo");

class Moto extends Vehiculo {
  descripcion() {
    return `Moto: ${this.getMarca()} ${this.getModelo()} (${this.getAño()})`;
  }
}

module.exports = { Moto };

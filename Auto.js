const { Vehiculo } = require("./Vehiculo");

class Auto extends Vehiculo {
  descripcion() {
    return `Auto: ${this.getMarca()} ${this.getModelo()} (${this.getAño()})`;
  }
}

module.exports = { Auto };

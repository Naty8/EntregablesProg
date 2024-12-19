import { Vehiculo } from "./Vehiculo";

class Camion extends Vehiculo {
  public descripcion(): string {
    return `Camión: ${this.getMarca()} ${this.getModelo()} (${this.getAño()})`;
  }
}

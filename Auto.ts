import { Vehiculo } from "./Vehiculo";

class Auto extends Vehiculo {
  public descripcion(): string {
    return `Auto: ${this.getMarca()} ${this.getModelo()} (${this.getAño()})`;
  }
}

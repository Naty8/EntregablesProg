import { Vehiculo } from "./Vehiculo";

class RegistroAutomotor {
  private vehiculos: Vehiculo[] = [];

  public agregarVehiculo(vehiculo: Vehiculo): void {
    this.vehiculos.push(vehiculo);
  }

  public eliminarVehiculo(index: number): void {
    if (index >= 0 && index < this.vehiculos.length) {
      this.vehiculos.splice(index, 1);
    } else {
      console.log("Índice no válido.");
    }
  }

  public modificarVehiculo(index: number, nuevoVehiculo: Vehiculo): void {
    if (index >= 0 && index < this.vehiculos.length) {
      this.vehiculos[index] = nuevoVehiculo;
    } else {
      console.log("Índice no válido.");
    }
  }

  public listarVehiculos(): void {
    this.vehiculos.forEach((vehiculo, index) =>
      console.log(`${index}: ${vehiculo.descripcion()}`)
    );
  }
}
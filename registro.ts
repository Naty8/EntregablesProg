// Clase base Vehiculo
abstract class Vehiculo {
    constructor(
      private _marca: string,
      private _modelo: string,
      private _anio: number
    ) {}
  
    get marca(): string {
      return this._marca;
    }
  
    set marca(value: string) {
      this._marca = value;
    }
  
    get modelo(): string {
      return this._modelo;
    }
  
    set modelo(value: string) {
      this._modelo = value;
    }
  
    get anio(): number {
      return this._anio;
    }
  
    set anio(value: number) {
      this._anio = value;
    }
  
    abstract descripcion(): string;
  }
  
  // Clases derivadas
  class Auto extends Vehiculo {
    descripcion(): string {
      return `Auto: ${this.marca} ${this.modelo} (${this.anio})`;
    }
  }
  
  class Moto extends Vehiculo {
    descripcion(): string {
      return `Moto: ${this.marca} ${this.modelo} (${this.anio})`;
    }
  }
  
  class Camion extends Vehiculo {
    descripcion(): string {
      return `Camión: ${this.marca} ${this.modelo} (${this.anio})`;
    }
  }
  
  // Clase RegistroAutomotor
  class RegistroAutomotor {
    private vehiculos: Vehiculo[] = [];
  
    agregarVehiculo(vehiculo: Vehiculo): void {
      this.vehiculos.push(vehiculo);
    }
  
    eliminarVehiculo(index: number): void {
      if (index >= 0 && index < this.vehiculos.length) {
        this.vehiculos.splice(index, 1);
      } else {
        console.log("Índice no válido.");
      }
    }
  
    modificarVehiculo(
      index: number,
      nuevoVehiculo: Vehiculo
    ): void {
      if (index >= 0 && index < this.vehiculos.length) {
        this.vehiculos[index] = nuevoVehiculo;
      } else {
        console.log("Índice no válido.");
      }
    }
  
    listarVehiculos(): void {
      this.vehiculos.forEach((vehiculo, index) =>
        console.log(`${index}: ${vehiculo.descripcion()}`)
      );
    }
  }
  
  // Pruebas
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
  
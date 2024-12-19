import { Personaje } from "./Personaje";

export class Luchador extends Personaje {
  private fuerza: number;

  constructor(nombre: string) {
    super(nombre);
    this.fuerza = 70;
  }

  public golpePesado(): void {
    console.log(`${this.nombre} ejecuta un golpe pesado.`);
  }
}

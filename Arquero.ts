import { Personaje } from "./Personaje";

export class Arquero extends Personaje {
  private precision: number;

  constructor(nombre: string) {
    super(nombre);
    this.precision = 80;
  }

  public dispararFlecha(): void {
    console.log(`${this.nombre} dispara una flecha precisa.`);
  }
}

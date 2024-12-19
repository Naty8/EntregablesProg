import { Personaje } from "./Personaje";

export class Mago extends Personaje {
  private mana: number;

  constructor(nombre: string) {
    super(nombre);
    this.mana = 50;
  }

  public lanzarHechizo(): void {
    console.log(`${this.nombre} lanza un hechizo poderoso.`);
  }
}

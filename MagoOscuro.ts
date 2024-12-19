import { Mago } from "./Mago";

export class MagoOscuro extends Mago {
  constructor(nombre: string) {
    super(nombre);
    // `mana` es privado en `Mago`, por lo que no se puede modificar directamente.
  }

  public invocarSombras(): void {
    console.log(`${this.nombre} invoca sombras destructivas.`);
  }
}

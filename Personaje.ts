export class Personaje {
    public nombre: string;
    public nivel: number;
    public puntosDeVida: number;
    protected habilidades: string[];
  
    constructor(nombre: string) {
      this.nombre = nombre;
      this.nivel = 1;
      this.puntosDeVida = 100;
      this.habilidades = [];
    }
  
    public atacar(): void {
      console.log(`${this.nombre} está atacando.`);
    }
  
    public defender(): void {
      console.log(`${this.nombre} está defendiendo.`);
    }
  
    public aprenderHabilidad(habilidad: string): void {
      this.habilidades.push(habilidad);
      console.log(`${this.nombre} ha aprendido la habilidad: ${habilidad}`);
    }
  
    public mostrarHabilidades(): void {
      console.log(`Habilidades de ${this.nombre}: ${this.habilidades.join(', ')}`);
    }
  }
  
class Personaje {
    nombre: string;
    nivel: number;
    puntosDeVida: number;
    habilidades: string[];
  
    constructor(nombre: string) {
      this.nombre = nombre;
      this.nivel = 1;
      this.puntosDeVida = 100;
      this.habilidades = [];
    }
  
    atacar(): void {
      console.log(`${this.nombre} está atacando.`);
    }
  
    defender(): void {
      console.log(`${this.nombre} está defendiendo.`);
    }
  
    aprenderHabilidad(habilidad: string): void {
      this.habilidades.push(habilidad);
      console.log(`${this.nombre} ha aprendido la habilidad: ${habilidad}`);
    }
  
    mostrarHabilidades(): void {
      console.log(`Habilidades de ${this.nombre}: ${this.habilidades.join(', ')}`);
    }
  }
  class Mago extends Personaje {
    mana: number;
  
    constructor(nombre: string) {
      super(nombre);
      this.mana = 50;
    }
  
    lanzarHechizo(): void {
      console.log(`${this.nombre} lanza un hechizo poderoso.`);
    }
  }
  
  class Luchador extends Personaje {
    fuerza: number;
  
    constructor(nombre: string) {
      super(nombre);
      this.fuerza = 70;
    }
  
    golpePesado(): void {
      console.log(`${this.nombre} ejecuta un golpe pesado.`);
    }
  }
  
  class Arquero extends Personaje {
    precision: number;
  
    constructor(nombre: string) {
      super(nombre);
      this.precision = 80;
    }
  
    dispararFlecha(): void {
      console.log(`${this.nombre} dispara una flecha precisa.`);
    }
  }
  class MagoOscuro extends Mago {
    constructor(nombre: string) {
      super(nombre);
      this.mana += 50;
    }
  
    invocarSombras(): void {
      console.log(`${this.nombre} invoca sombras destructivas.`);
    }
  }
  const merlin = new Mago("Merlín");
merlin.aprenderHabilidad("Bola de fuego");
merlin.aprenderHabilidad("Teletransportación");
merlin.mostrarHabilidades();

// Ejemplo de ataque especial
const luchador = new Luchador("Conan");
luchador.golpePesado();

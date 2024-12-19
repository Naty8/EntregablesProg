import { Mago } from "./Mago";
import { Luchador } from "./Luchador";
import { Arquero } from "./Arquero";
import { MagoOscuro } from "./MagoOscuro";

// Ejemplo de uso
const merlin = new Mago("Merlín");
merlin.aprenderHabilidad("Bola de fuego");
merlin.aprenderHabilidad("Teletransportación");
merlin.mostrarHabilidades();

const luchador = new Luchador("Conan");
luchador.golpePesado();

const arquero = new Arquero("Legolas");
arquero.dispararFlecha();

const magoOscuro = new MagoOscuro("Sauron");
magoOscuro.invocarSombras();
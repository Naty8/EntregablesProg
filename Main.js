"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mago_1 = require("./Mago");
const Luchador_1 = require("./Luchador");
const Arquero_1 = require("./Arquero");
const MagoOscuro_1 = require("./MagoOscuro");

const merlin = new Mago_1.Mago("Merlín");
merlin.aprenderHabilidad("Bola de fuego");
merlin.aprenderHabilidad("Teletransportación");
merlin.mostrarHabilidades();

const luchador = new Luchador_1.Luchador("Conan");
luchador.golpePesado();

const arquero = new Arquero_1.Arquero("Legolas");
arquero.dispararFlecha();

const magoOscuro = new MagoOscuro_1.MagoOscuro("Sauron");
magoOscuro.invocarSombras();

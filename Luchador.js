"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Luchador = void 0;
const Personaje_1 = require("./Personaje");
class Luchador extends Personaje_1.Personaje {
    constructor(nombre) {
        super(nombre);
        this.fuerza = 70;
    }
    golpePesado() {
        console.log(`${this.nombre} ejecuta un golpe pesado.`);
    }
}
exports.Luchador = Luchador;

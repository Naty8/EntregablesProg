"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arquero = void 0;
const Personaje_1 = require("./Personaje");
class Arquero extends Personaje_1.Personaje {
    constructor(nombre) {
        super(nombre);
        this.precision = 80;
    }
    dispararFlecha() {
        console.log(`${this.nombre} dispara una flecha precisa.`);
    }
}
exports.Arquero = Arquero;

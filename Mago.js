"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagoOscuro = void 0;
const Mago_1 = require("./Mago");
class MagoOscuro extends Mago_1.Mago {
    constructor(nombre) {
        super(nombre);
    }
    invocarSombras() {
        console.log(`${this.nombre} invoca sombras destructivas.`);
    }
}
exports.MagoOscuro = MagoOscuro;

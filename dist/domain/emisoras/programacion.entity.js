"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Programacion = void 0;
class Programacion {
    _numProgramas;
    constructor(_numProgramas) {
        this._numProgramas = _numProgramas;
        if (!Number.isInteger(_numProgramas) || _numProgramas < 1) {
            throw new Error('El número de programas debe ser un entero mayor o igual a 1');
        }
    }
    get numProgramas() {
        return this._numProgramas;
    }
    actualizar(value) {
        if (!Number.isInteger(value) || value < 1) {
            throw new Error('El número de programas debe ser un entero mayor o igual a 1');
        }
        this._numProgramas = value;
    }
}
exports.Programacion = Programacion;
//# sourceMappingURL=programacion.entity.js.map
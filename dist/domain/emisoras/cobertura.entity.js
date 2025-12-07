"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cobertura = void 0;
class Cobertura {
    _numCiudades;
    constructor(_numCiudades) {
        this._numCiudades = _numCiudades;
        if (!Number.isInteger(_numCiudades) || _numCiudades < 1) {
            throw new Error('El número de ciudades debe ser mayor o igual a 1');
        }
    }
    get numCiudades() {
        return this._numCiudades;
    }
    actualizar(value) {
        if (!Number.isInteger(value) || value < 1) {
            throw new Error('El número de ciudades debe ser mayor o igual a 1');
        }
        this._numCiudades = value;
    }
}
exports.Cobertura = Cobertura;
//# sourceMappingURL=cobertura.entity.js.map
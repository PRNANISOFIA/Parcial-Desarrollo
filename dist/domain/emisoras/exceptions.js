"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReglaConsistenciaException = exports.NombreEmisoraDuplicadoException = exports.EmisoraNotFoundException = void 0;
class EmisoraNotFoundException extends Error {
    constructor() {
        super('Emisora no encontrada');
    }
}
exports.EmisoraNotFoundException = EmisoraNotFoundException;
class NombreEmisoraDuplicadoException extends Error {
    constructor(nombre) {
        super(`Ya existe una emisora con el nombre ${nombre}`);
    }
}
exports.NombreEmisoraDuplicadoException = NombreEmisoraDuplicadoException;
class ReglaConsistenciaException extends Error {
    constructor(message) {
        super(message);
    }
}
exports.ReglaConsistenciaException = ReglaConsistenciaException;
//# sourceMappingURL=exceptions.js.map
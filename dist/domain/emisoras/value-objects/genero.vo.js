"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genero = void 0;
const value_object_1 = require("../../shared/value-object");
class Genero extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('El género es obligatorio');
        }
        if (!/^[A-Za-zÀ-ÿ\s]+$/.test(trimmed)) {
            throw new Error('El género solo puede contener letras');
        }
        if (trimmed.length < 3 || trimmed.length > 30) {
            throw new Error('El género debe tener entre 3 y 30 caracteres');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
}
exports.Genero = Genero;
//# sourceMappingURL=genero.vo.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NombreEmisora = void 0;
const value_object_1 = require("../../shared/value-object");
class NombreEmisora extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('El nombre de la emisora es obligatorio');
        }
        if (trimmed.length < 3) {
            throw new Error('El nombre de la emisora debe tener al menos 3 caracteres');
        }
        if (/^\d+$/.test(trimmed)) {
            throw new Error('El nombre de la emisora no puede ser solo números');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
}
exports.NombreEmisora = NombreEmisora;
//# sourceMappingURL=nombre-emisora.vo.js.map
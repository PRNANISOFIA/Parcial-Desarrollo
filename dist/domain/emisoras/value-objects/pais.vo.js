"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pais = void 0;
const value_object_1 = require("../../shared/value-object");
class Pais extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('El país es obligatorio');
        }
        if (!/^[A-Za-zÀ-ÿ\s]+$/.test(trimmed)) {
            throw new Error('El país solo puede contener letras');
        }
        if (trimmed.length < 3) {
            throw new Error('El país debe tener al menos 3 caracteres');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
}
exports.Pais = Pais;
//# sourceMappingURL=pais.vo.js.map
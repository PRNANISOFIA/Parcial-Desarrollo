"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patrocinador = void 0;
const value_object_1 = require("../../shared/value-object");
class Patrocinador extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('El patrocinador es obligatorio');
        }
        if (trimmed.length < 2) {
            throw new Error('El patrocinador debe tener al menos 2 caracteres');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
}
exports.Patrocinador = Patrocinador;
//# sourceMappingURL=patrocinador.vo.js.map
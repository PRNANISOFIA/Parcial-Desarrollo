"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Horario = void 0;
const value_object_1 = require("../../shared/value-object");
const TIME_REGEX = /^([01]\d|2[0-3]):([0-5]\d)$/;
class Horario extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('El horario es obligatorio');
        }
        const [inicio, fin] = trimmed.split('-').map((p) => p.trim());
        if (!inicio || !fin || !TIME_REGEX.test(inicio) || !TIME_REGEX.test(fin)) {
            throw new Error('El horario debe tener formato HH:mm - HH:mm');
        }
        if (!this.isBefore(inicio, fin)) {
            throw new Error('La hora de inicio debe ser menor que la de fin');
        }
        this.props = { value: `${inicio} - ${fin}`, inicio, fin };
    }
    get value() {
        return this.props.value;
    }
    isBefore(a, b) {
        const [ah, am] = a.split(':').map(Number);
        const [bh, bm] = b.split(':').map(Number);
        if (ah < bh)
            return true;
        if (ah === bh && am < bm)
            return true;
        return false;
    }
}
exports.Horario = Horario;
//# sourceMappingURL=horario.vo.js.map
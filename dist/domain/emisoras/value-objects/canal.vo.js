"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canal = void 0;
const value_object_1 = require("../../shared/value-object");
class Canal extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        if (value === null || value === undefined || Number.isNaN(value)) {
            throw new Error('El canal es obligatorio');
        }
        if (!Number.isInteger(value) || value <= 0) {
            throw new Error('El canal debe ser un entero positivo');
        }
        this.props = { value };
    }
    get value() {
        return this.props.value;
    }
}
exports.Canal = Canal;
//# sourceMappingURL=canal.vo.js.map
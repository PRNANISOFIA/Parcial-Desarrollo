"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumeroLocutores = void 0;
const value_object_1 = require("../../shared/value-object");
class NumeroLocutores extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        if (!Number.isInteger(value) || value < 1) {
            throw new Error('El número de locutores debe ser un entero mayor o igual a 1');
        }
        this.props = { value };
    }
    get value() {
        return this.props.value;
    }
}
exports.NumeroLocutores = NumeroLocutores;
//# sourceMappingURL=numero-locutores.vo.js.map
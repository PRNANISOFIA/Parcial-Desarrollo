"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordHash = void 0;
const value_object_1 = require("../../shared/value-object");
class PasswordHash extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        if (!value?.trim()) {
            throw new Error('El hash de la contraseña no puede estar vacío');
        }
        this.props = { value };
    }
    get value() {
        return this.props.value;
    }
}
exports.PasswordHash = PasswordHash;
//# sourceMappingURL=password-hash.vo.js.map
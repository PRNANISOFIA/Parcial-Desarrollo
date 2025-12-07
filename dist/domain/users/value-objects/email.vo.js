"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const value_object_1 = require("../../shared/value-object");
class Email extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim().toLowerCase();
        if (!trimmed) {
            throw new Error('El email no puede estar vacío');
        }
        const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!emailRegex.test(trimmed)) {
            throw new Error('El formato del email no es válido');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
}
exports.Email = Email;
//# sourceMappingURL=email.vo.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserName = void 0;
const value_object_1 = require("../../shared/value-object");
class UserName extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('El nombre de usuario no puede estar vacío');
        }
        if (trimmed.length > 50) {
            throw new Error('El nombre de usuario es demasiado largo');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
}
exports.UserName = UserName;
//# sourceMappingURL=user-name.vo.js.map
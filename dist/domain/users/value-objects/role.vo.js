"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const value_object_1 = require("../../shared/value-object");
const ALLOWED_ROLES = ['Admin', 'User', 'Manager'];
class Role extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const normalized = value?.trim();
        if (!normalized) {
            throw new Error('El rol no puede estar vacío');
        }
        if (!ALLOWED_ROLES.includes(normalized)) {
            throw new Error(`Rol inválido. Roles permitidos: ${ALLOWED_ROLES.join(', ')}`);
        }
        this.props = { value: normalized };
    }
    get value() {
        return this.props.value;
    }
}
exports.Role = Role;
//# sourceMappingURL=role.vo.js.map
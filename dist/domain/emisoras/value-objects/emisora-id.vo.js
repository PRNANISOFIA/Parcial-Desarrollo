"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmisoraId = void 0;
const crypto_1 = require("crypto");
const value_object_1 = require("../../shared/value-object");
class EmisoraId extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        if (!value) {
            throw new Error('El id de la emisora es obligatorio');
        }
        this.props = { value };
    }
    get value() {
        return this.props.value;
    }
    static new() {
        return new EmisoraId((0, crypto_1.randomUUID)());
    }
    static from(value) {
        return new EmisoraId(value);
    }
}
exports.EmisoraId = EmisoraId;
//# sourceMappingURL=emisora-id.vo.js.map
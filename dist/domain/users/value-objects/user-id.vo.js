"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserId = void 0;
const crypto_1 = require("crypto");
const value_object_1 = require("../../shared/value-object");
class UserId extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        this.props = { value };
    }
    get value() {
        return this.props.value;
    }
    static new() {
        return new UserId((0, crypto_1.randomUUID)());
    }
    static from(value) {
        return new UserId(value);
    }
}
exports.UserId = UserId;
//# sourceMappingURL=user-id.vo.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObject = void 0;
class ValueObject {
    equals(vo) {
        if (vo === null || vo === undefined) {
            return false;
        }
        if (vo.props === undefined) {
            return false;
        }
        if (this === vo) {
            return true;
        }
        return JSON.stringify(this.props) === JSON.stringify(vo.props);
    }
}
exports.ValueObject = ValueObject;
//# sourceMappingURL=value-object.js.map
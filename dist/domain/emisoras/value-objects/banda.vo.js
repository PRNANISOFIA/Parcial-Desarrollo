"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banda = void 0;
const value_object_1 = require("../../shared/value-object");
class Banda extends value_object_1.ValueObject {
    props;
    constructor(bandaFm, bandaAm) {
        super();
        const fm = bandaFm ?? null;
        const am = bandaAm ?? null;
        if ((fm === null || fm === undefined) && (am === null || am === undefined)) {
            throw new Error('Debe definirse una banda AM o FM');
        }
        if (fm !== null && am !== null) {
            throw new Error('Solo puede estar activa una banda (AM o FM)');
        }
        if (fm !== null) {
            if (typeof fm !== 'number' || Number.isNaN(fm) || fm < 88.1 || fm > 108.0) {
                throw new Error('La banda FM debe estar entre 88.1 y 108.0 MHz');
            }
        }
        if (am !== null) {
            if (typeof am !== 'number' || Number.isNaN(am) || am < 530 || am > 1600) {
                throw new Error('La banda AM debe estar entre 530 y 1600 kHz');
            }
        }
        this.props = { bandaFm: fm, bandaAm: am };
    }
    get bandaFm() {
        return this.props.bandaFm;
    }
    get bandaAm() {
        return this.props.bandaAm;
    }
    isFm() {
        return this.props.bandaFm !== null && this.props.bandaFm !== undefined;
    }
    isAm() {
        return this.props.bandaAm !== null && this.props.bandaAm !== undefined;
    }
}
exports.Banda = Banda;
//# sourceMappingURL=banda.vo.js.map
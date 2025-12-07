import { ValueObject } from '../../shared/value-object';
interface BandaProps {
    bandaFm?: number | null;
    bandaAm?: number | null;
}
export declare class Banda extends ValueObject<BandaProps> {
    protected readonly props: BandaProps;
    constructor(bandaFm?: number | null, bandaAm?: number | null);
    get bandaFm(): number | null | undefined;
    get bandaAm(): number | null | undefined;
    isFm(): boolean;
    isAm(): boolean;
}
export {};

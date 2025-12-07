import { ValueObject } from '../../shared/value-object';
interface PaisProps {
    value: string;
}
export declare class Pais extends ValueObject<PaisProps> {
    protected readonly props: PaisProps;
    constructor(value: string);
    get value(): string;
}
export {};

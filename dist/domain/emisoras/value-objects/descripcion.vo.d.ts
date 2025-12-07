import { ValueObject } from '../../shared/value-object';
interface DescripcionProps {
    value: string;
}
export declare class Descripcion extends ValueObject<DescripcionProps> {
    protected readonly props: DescripcionProps;
    constructor(value: string);
    get value(): string;
}
export {};

import { ValueObject } from '../../shared/value-object';
interface GeneroProps {
    value: string;
}
export declare class Genero extends ValueObject<GeneroProps> {
    protected readonly props: GeneroProps;
    constructor(value: string);
    get value(): string;
}
export {};

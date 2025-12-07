import { ValueObject } from '../../shared/value-object';
interface PatrocinadorProps {
    value: string;
}
export declare class Patrocinador extends ValueObject<PatrocinadorProps> {
    protected readonly props: PatrocinadorProps;
    constructor(value: string);
    get value(): string;
}
export {};

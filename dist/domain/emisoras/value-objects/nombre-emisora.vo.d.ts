import { ValueObject } from '../../shared/value-object';
interface NombreEmisoraProps {
    value: string;
}
export declare class NombreEmisora extends ValueObject<NombreEmisoraProps> {
    protected readonly props: NombreEmisoraProps;
    constructor(value: string);
    get value(): string;
}
export {};

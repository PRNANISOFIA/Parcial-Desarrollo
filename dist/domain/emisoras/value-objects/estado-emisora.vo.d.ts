import { ValueObject } from '../../shared/value-object';
export type EstadoEmisoraTipo = 'ACTIVA' | 'INACTIVA';
interface EstadoEmisoraProps {
    value: EstadoEmisoraTipo;
}
export declare class EstadoEmisora extends ValueObject<EstadoEmisoraProps> {
    protected readonly props: EstadoEmisoraProps;
    constructor(value: string);
    get value(): EstadoEmisoraTipo;
}
export {};

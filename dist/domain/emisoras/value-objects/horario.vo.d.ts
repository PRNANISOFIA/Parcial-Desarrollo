import { ValueObject } from '../../shared/value-object';
interface HorarioProps {
    value: string;
    inicio: string;
    fin: string;
}
export declare class Horario extends ValueObject<HorarioProps> {
    protected readonly props: HorarioProps;
    constructor(value: string);
    get value(): string;
    private isBefore;
}
export {};

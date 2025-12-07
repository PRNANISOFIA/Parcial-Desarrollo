import { ValueObject } from '../../shared/value-object';
interface EmisoraIdProps {
    value: string;
}
export declare class EmisoraId extends ValueObject<EmisoraIdProps> {
    protected readonly props: EmisoraIdProps;
    private constructor();
    get value(): string;
    static new(): EmisoraId;
    static from(value: string): EmisoraId;
}
export {};

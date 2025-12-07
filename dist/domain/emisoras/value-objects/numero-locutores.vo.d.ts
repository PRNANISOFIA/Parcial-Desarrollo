import { ValueObject } from '../../shared/value-object';
interface NumeroLocutoresProps {
    value: number;
}
export declare class NumeroLocutores extends ValueObject<NumeroLocutoresProps> {
    protected readonly props: NumeroLocutoresProps;
    constructor(value: number);
    get value(): number;
}
export {};

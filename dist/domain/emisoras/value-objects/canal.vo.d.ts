import { ValueObject } from '../../shared/value-object';
interface CanalProps {
    value: number;
}
export declare class Canal extends ValueObject<CanalProps> {
    protected readonly props: CanalProps;
    constructor(value: number);
    get value(): number;
}
export {};

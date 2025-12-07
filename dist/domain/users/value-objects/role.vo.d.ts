import { ValueObject } from '../../shared/value-object';
interface RoleProps {
    value: string;
}
export declare class Role extends ValueObject<RoleProps> {
    protected readonly props: RoleProps;
    constructor(value: string);
    get value(): string;
}
export {};

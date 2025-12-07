import { ValueObject } from '../../shared/value-object';
interface PasswordHashProps {
    value: string;
}
export declare class PasswordHash extends ValueObject<PasswordHashProps> {
    protected readonly props: PasswordHashProps;
    constructor(value: string);
    get value(): string;
}
export {};

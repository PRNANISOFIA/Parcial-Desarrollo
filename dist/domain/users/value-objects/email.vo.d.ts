import { ValueObject } from '../../shared/value-object';
interface EmailProps {
    value: string;
}
export declare class Email extends ValueObject<EmailProps> {
    protected readonly props: EmailProps;
    constructor(value: string);
    get value(): string;
}
export {};

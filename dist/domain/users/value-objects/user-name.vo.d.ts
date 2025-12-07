import { ValueObject } from '../../shared/value-object';
interface UserNameProps {
    value: string;
}
export declare class UserName extends ValueObject<UserNameProps> {
    protected readonly props: UserNameProps;
    constructor(value: string);
    get value(): string;
}
export {};

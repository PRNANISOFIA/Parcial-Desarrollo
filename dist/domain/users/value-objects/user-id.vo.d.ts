import { ValueObject } from '../../shared/value-object';
interface UserIdProps {
    value: string;
}
export declare class UserId extends ValueObject<UserIdProps> {
    protected readonly props: UserIdProps;
    private constructor();
    get value(): string;
    static new(): UserId;
    static from(value: string): UserId;
}
export {};

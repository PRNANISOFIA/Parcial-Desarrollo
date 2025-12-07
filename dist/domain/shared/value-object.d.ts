export declare abstract class ValueObject<T = unknown> {
    protected abstract readonly props: T;
    equals(vo?: ValueObject<T>): boolean;
}

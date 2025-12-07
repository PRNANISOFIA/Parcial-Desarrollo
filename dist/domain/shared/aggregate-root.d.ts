import { DomainEvent } from './domain-event';
export declare abstract class AggregateRoot {
    private readonly domainEvents;
    getDomainEvents(): DomainEvent[];
    protected addDomainEvent(event: DomainEvent): void;
    clearDomainEvents(): void;
}

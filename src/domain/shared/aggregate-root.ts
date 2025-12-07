import { DomainEvent } from './domain-event';

export abstract class AggregateRoot {
  private readonly domainEvents: DomainEvent[] = [];

  getDomainEvents(): DomainEvent[] {
    return [...this.domainEvents];
  }

  protected addDomainEvent(event: DomainEvent): void {
    this.domainEvents.push(event);
  }

  clearDomainEvents(): void {
    this.domainEvents.length = 0;
  }
}


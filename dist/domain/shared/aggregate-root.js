"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRoot = void 0;
class AggregateRoot {
    domainEvents = [];
    getDomainEvents() {
        return [...this.domainEvents];
    }
    addDomainEvent(event) {
        this.domainEvents.push(event);
    }
    clearDomainEvents() {
        this.domainEvents.length = 0;
    }
}
exports.AggregateRoot = AggregateRoot;
//# sourceMappingURL=aggregate-root.js.map
# Architecture Evaluation — API Boundaries

## Scenario

You are reviewing a new ERP module that exposes order, invoice, and payment APIs. The team wants one large controller with all endpoints because it is faster to build.

Ask the agent:

```text
Review this API design decision. Should we use one large controller for orders, invoices, and payments, or split the API boundaries? Give a recommended structure, trade-offs, and testing strategy.
```

## Expected capabilities

- Identifies domain boundaries.
- Explains trade-offs without over-engineering.
- Suggests a clear API/resource structure.
- Includes testing and migration considerations.

## Must include

- Resource-based API design.
- Separation of responsibilities.
- Error handling and validation consistency.
- At least one alternative with trade-offs.

## Must avoid

- Blindly recommending microservices.
- Ignoring backward compatibility.
- Producing only conceptual advice without a concrete structure.

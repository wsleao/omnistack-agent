# Backend Evaluation — Idempotent Endpoint

## Scenario

A payment endpoint sometimes receives duplicate requests because the mobile app retries after a timeout.

Ask the agent:

```text
Design an idempotent POST /payments endpoint. Include request shape, data model implications, error responses, concurrency handling, and test cases.
```

## Expected capabilities

- Uses an idempotency key or equivalent mechanism.
- Handles retries and concurrent duplicate requests.
- Defines clear response behavior.
- Includes concrete test cases.

## Must include

- Request and response examples.
- Database uniqueness or locking strategy.
- Retry behavior.
- Failure-path tests.

## Must avoid

- Saying only "use UUID" without explaining storage and replay behavior.
- Ignoring concurrency.
- Returning inconsistent responses for duplicate requests.

# Database Evaluation — Migration Review

## Scenario

The team wants to add a required `customer_id` column to a large `invoices` table in production.

Ask the agent:

```text
Review this database migration. The table has millions of rows and must stay online. Explain the safest rollout plan, risks, rollback strategy, and how to verify success.
```

## Expected capabilities

- Avoids unsafe one-step migrations for large tables.
- Proposes staged rollout.
- Mentions data backfill and constraint timing.
- Includes verification and rollback notes.

## Must include

- Expand/contract or phased migration strategy.
- Backfill plan.
- Index/constraint considerations.
- Monitoring and validation queries.

## Must avoid

- A single blocking `ALTER TABLE` as the only answer.
- No rollback path.
- Ignoring application compatibility during rollout.

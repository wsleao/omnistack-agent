# Evaluation Scenarios

This folder contains manual evaluation prompts for the generated adapters.

Use these prompts when changing `core/` or `knowledge/` to check whether the agent still behaves like a senior full-stack software-engineering specialist.

## How to use

1. Copy one scenario prompt.
2. Run it against the adapter you changed or the platform you care about.
3. Score the answer with `docs/evaluation.md`.
4. Compare results before and after the change.

## Current scenarios

- `architecture/api-boundaries.md`
- `backend/idempotent-endpoint.md`
- `database/migration-review.md`
- `devops/ci-cd-rollback.md`
- `qa/regression-plan.md`
- `documentation/runbook.md`

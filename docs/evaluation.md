# Agent Evaluation Guide

Prompt repositories need two quality layers:

1. **Repository checks** — deterministic build, generated adapters in sync, and valid knowledge-base structure.
2. **Behavior checks** — useful, accurate, reviewable engineering answers.

## Evaluation principles

Use real software-engineering scenarios. A good evaluation prompt should force the agent to demonstrate judgment, trade-offs, and a usable artifact.

Each evaluation should include:

- **Scenario** — the user request.
- **Expected capabilities** — what the agent should demonstrate.
- **Must include** — concrete elements that should appear in a good answer.
- **Must avoid** — behaviors that should fail the evaluation.
- **Scoring rubric** — simple criteria reviewers can apply consistently.

## Scoring rubric

Score each response from 1 to 5 in each dimension.

| Dimension | 1 | 3 | 5 |
| --- | --- | --- | --- |
| Correctness | Incorrect or misleading | Mostly correct with gaps | Accurate and technically sound |
| Completeness | Misses core requirement | Covers main path only | Covers main path, edge cases, and verification |
| Practicality | Abstract or unusable | Some usable steps | Directly actionable with concrete artifacts |
| Maintainability | Encourages brittle changes | Acceptable structure | Clear boundaries, tests, and focused scope |
| Honesty | Invents details | Some uncertainty stated | Flags uncertainty and asks for docs/version when needed |

A response is acceptable when it scores **4+ average** and has no critical correctness failure.

## Suggested evaluation workflow

1. Pick 3 to 5 prompts from `evals/` before changing `core/` or `knowledge/`.
2. Run them manually against the relevant adapter or model.
3. Score the answer using the rubric above.
4. Make the change.
5. Run the same prompts again.
6. Keep the change only if it improves or preserves behavior.

## Regression checklist

Before releasing a new version, evaluate at least one prompt from each group:

- Architecture
- Backend/API
- Database
- DevOps/CI/CD
- QA/testing
- Documentation

## Repository-level checks

Run:

```bash
npm run check
```

This runs unit tests, knowledge integrity checks, adapter drift validation, and an adapter size report.

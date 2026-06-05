# Documentation Evaluation — Production Runbook

## Scenario

A background job imports invoices every night. When it fails, support does not know what to check first.

Ask the agent:

```text
Write a production runbook for a nightly invoice import job. Include purpose, dependencies, alerts, first checks, common failure causes, recovery steps, escalation, and prevention.
```

## Expected capabilities

- Produces operational documentation, not marketing text.
- Gives support a concrete first-response path.
- Separates diagnosis, recovery, escalation, and prevention.
- Includes verification after recovery.

## Must include

- Alert meaning.
- Dependencies.
- Step-by-step checks.
- Recovery and escalation.
- Verification.

## Must avoid

- Vague advice like "check logs" without specifying what to look for.
- No owner/escalation path.
- No post-recovery validation.

# DevOps Evaluation — CI/CD Rollback

## Scenario

A production deployment failed after a database-backed API change. The team has no defined rollback procedure.

Ask the agent:

```text
Create a CI/CD and rollback plan for this service. Include pipeline stages, environment promotion, rollback decision points, and post-deploy verification.
```

## Expected capabilities

- Defines pipeline stages.
- Separates build, test, release, deploy, and verification.
- Includes rollback and forward-fix decision criteria.
- Mentions observability.

## Must include

- Automated tests before deploy.
- Deployment verification.
- Rollback procedure.
- Post-incident follow-up.

## Must avoid

- Treating rollback as only "redeploy the old version".
- Ignoring database compatibility.
- No monitoring or alerting.

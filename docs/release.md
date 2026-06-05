# Release and Versioning Policy

omnistack-agent follows Semantic Versioning and documents changes in `CHANGELOG.md`.

## Version rules

- **PATCH** — typo fixes, documentation fixes, minor wording improvements, and build-script fixes that do not change adapter behavior.
- **MINOR** — new knowledge modules, new adapters, new evaluation scenarios, or additive prompt capabilities.
- **MAJOR** — changes to core behavior, role identity, guardrails, or adapter structure that can significantly change responses.

## Release checklist

Before cutting a release:

1. Run `npm run build`.
2. Run `npm run check`.
3. Run representative scenarios from `evals/`.
4. Update `CHANGELOG.md`.
5. Create a GitHub release and tag, for example `v0.2.0`.
6. Attach or mention the generated adapter files relevant to users.

## Branch protection recommendation

Protect `main` in GitHub repository settings and require the CI workflow to pass before merge. Recommended checks:

- all Node matrix jobs are green;
- pull requests require review;
- direct pushes to `main` are disabled except for repository administrators, if desired.

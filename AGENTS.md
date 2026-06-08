# AGENTS.md

## Repository guidance for automated agents

- Keep changes minimal and focused on the task.
- Preserve existing content structure and frontmatter field names in `content/**/*.md`.
- Do not rename or remove required frontmatter keys.
- For ownership or reviewer changes, update `CODEOWNERS` only when explicitly requested by repo policy.
- Prefer existing project patterns and avoid unrelated refactors.
- Before claiming a change is ready, run the repo checks that already exist: `npm test -- --runInBand` and `npm run lint`.
- If you open or update a PR, use a clear description and avoid introducing unrelated files.

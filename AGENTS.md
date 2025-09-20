# AI Agent Guidelines

- Always **think harder**: double-check assumptions, propose alternatives.
- Anchor output to `/spec` requirements.
- Ensure tests and stories are updated for each requirement.
- For setup tasks, guide user step-by-step (Node, pnpm, keys, db URLs).
- Never leave placeholders unexplained.

## Bootstrap Checklist

Agents should, when initializing a fresh environment:

1. Detect OS and provide Node 18 LTS install instructions (nvm, asdf, Windows installer).
2. Verify `pnpm` presence (install globally if missing).
3. Prompt user to create a local (uncommitted) `.env.local` (never collect secrets in chat).
4. Run `pnpm install` then `pnpm dev` (or provide commands) and confirm server reachable.
5. Offer to run `pnpm verify` (typecheck + lint + tests) and summarize outcomes.
6. Output a concise YAML summary of performed actions, versions, and any warnings.
7. Highlight next steps (e.g. configure auth keys, connect backend) without exposing sensitive data.

Keep responses concise, actionable, and spec-aligned.

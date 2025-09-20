# React Starter Project

This is a minimal opinionated frontend starter using Vite, React, TypeScript, Tailwind, Storybook, Vitest and Playwright. It's designed to be forked and used as the base for a new app.

Quickstart

- Install Node.js 18 LTS (or use the version in `.nvmrc`).
- Install `pnpm` globally: `npm install -g pnpm`.
- Install dependencies: `pnpm install`.
- Start dev server: `pnpm dev` and visit `http://localhost:3000`.

Common scripts

```
pnpm dev             # Start Vite dev server
pnpm build           # Build for production
pnpm verify          # Typecheck, lint, and run unit tests
pnpm test            # Run unit tests
pnpm test:coverage   # Run tests and generate coverage
pnpm test:e2e        # Run Playwright end-to-end tests
pnpm storybook       # Start Storybook
```

What you get

- Pre-configured Vite + React + TypeScript setup.
- Tailwind CSS with dark mode (class strategy).
- Storybook for component-driven development.
- Vitest for unit tests and Playwright for e2e.
- CI workflows, dependabot, and release drafting pre-configured.

How to use this starter

1. Fork this repository and rename the repo for your project.
2. Update `package.json` name and `README.md` to match your project.
3. Replace this home page at `src/pages/Home.tsx` with your app shell.
4. Remove any example or starter-only files (e.g., `.local-dev.json`).

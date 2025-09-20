import React from 'react';
import Button from '../components/Button';
import { useTheme } from '../hooks/useTheme';
import EnvironmentInfo from '../components/EnvironmentInfo';

export default function Home() {
  const { theme, setTheme } = useTheme();

  const checklist = [
    'See this page at http://localhost:3000',
    'Toggle theme works',
    'Run pnpm verify passes',
    'Storybook starts (pnpm storybook)',
    'Playwright tests run (pnpm test:e2e)',
    'Coverage report generates (pnpm test:coverage)',
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight">Starter Project</h1>
      <p className="mt-3 text-gray-700 dark:text-gray-300">
        Your front-end environment is live. This starter project bundles React + TypeScript +
        Tailwind + Storybook + Vitest + Playwright with opinionated linting, formatting, CI,
        dependency update, and release automation.
      </p>
      <div className="mt-4 flex items-center gap-4">
        <span className="text-sm">
          Current theme: <strong>{theme}</strong>
        </span>
        <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</Button>
      </div>
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Initial Validation Checklist</h2>
        <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Next Steps</h2>
        <p className="mt-2 text-sm leading-relaxed">
          Start defining your product requirements in the <code>spec/</code> directory. Add new
          components under <code>src/components</code>, create stories for them, and drive
          implementation with tests in <code>src</code> or <code>tests/</code>. Use the provided CI
          and release workflows to ensure consistency across environments.
        </p>
      </section>
      <EnvironmentInfo />
      <section className="mt-8 text-xs text-gray-500 dark:text-gray-400">
        <p>
          Need a reminder? See README for scripts & conventions. Remove or customize this home page
          once your real app shell is ready.
        </p>
      </section>
    </div>
  );
}

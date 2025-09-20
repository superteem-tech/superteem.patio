import React from 'react';
import pkg from '../../package.json';

export const EnvironmentInfo: React.FC = () => {
  const scripts = [
    'dev',
    'verify',
    'test',
    'test:coverage',
    'test:e2e',
    'lint',
    'format',
    'typecheck',
    'storybook',
  ];
  return (
    <div className="mt-6 rounded border border-gray-200 dark:border-gray-700 p-4 text-sm">
      <h2 className="font-semibold mb-2">Environment Summary</h2>
      <ul className="list-disc ml-5 space-y-1">
        <li>App version: {pkg.version}</li>
        <li>React: {pkg.dependencies?.react}</li>
        <li>TypeScript: {pkg.devDependencies?.typescript}</li>
        <li>Node target: 18 (see .nvmrc)</li>
        <li>Configured port: 3000</li>
      </ul>
      <h3 className="font-semibold mt-4 mb-1">Key Scripts</h3>
      <code className="block whitespace-pre-wrap">
        {scripts.map((s) => `pnpm ${s}`).join('\n')}
      </code>
    </div>
  );
};

export default EnvironmentInfo;

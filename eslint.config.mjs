import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import { createNodeResolver, importX } from 'eslint-plugin-import-x';
import prettier from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default defineConfig([
  {
    ignores: [
      '**/node_modules/**',
      '**/coverage/**',
      '**/dist/**',
      '**/.*',
      '**/dangerfile.js',
      '**/*.js',
      'src/reportWebVitals.ts',
      'src/serviceWorkerRegistration.ts',
      'src/setupTests.ts',
      'src/service-worker.ts',
      'src/react-app-env.d.ts',
      'capacitor.config.ts',
      'env.d.ts',
      'vite.config.ts',
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: [js.configs.recommended, typescript.configs['flat/recommended'], prettier, importX.flatConfigs.typescript],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    settings: {
      'import-x/resolver-next': [
        createNodeResolver({
          extensions: ['.ts', '.cts', '.mts', '.tsx', '.js', '.jsx', '.mjs', '.cjs'],
        }),
      ],
    },
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2015,
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      /*
       * https://github.com/ionic-team/eslint-config/blob/main/index.js
       * */
      // https://eslint.org/docs/rules/
      'no-fallthrough': 'off', // https://github.com/ionic-team/eslint-config/issues/7
      'no-constant-condition': 'off',

      // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      /*
       * https://github.com/ionic-team/eslint-config/blob/main/recommended.js
       * */
      // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',

      // https://github.com/un-ts/eslint-plugin-import-x
      'import-x/first': 'error',
      'import-x/newline-after-import': 'error',
      'import-x/no-duplicates': 'error',
      'import-x/no-mutable-exports': 'error',

      /*
       * Custom rules
       * */
      'react-refresh/only-export-components': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'import-x/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.test.*',
            '**/*.spec.*',
            'src/setupTest.js',
            '**/*.story.*',
            '**/__tests__/**',
            '**/ui-tests/**',
            'src/mocks/**',
          ],
        },
      ],
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      'import-x/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            {
              pattern: 'react**',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@testing-library/**',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@dnd-kit/**',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@egym/**',
              group: 'external',
              position: 'after',
            },
            {
              pattern: 'src/packages/**',
              group: 'external',
              position: 'after',
            },
            {
              pattern: '@**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: 'src/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '**.scss',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: [],
          'newlines-between': 'never',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'no-param-reassign': ['error', { props: true }],
    },
  },
]);

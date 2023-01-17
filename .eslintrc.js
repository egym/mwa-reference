module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['react', '@typescript-eslint', 'import'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
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

    // https://github.com/benmosher/eslint-plugin-import
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-mutable-exports': 'error',

    /*
     * Custom rules
     * */
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'import/no-extraneous-dependencies': [
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
    'import/order': [
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
};

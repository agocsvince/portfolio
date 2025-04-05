module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // disables conflicting rules
  ],
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'unused-imports',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  rules: {
    // 🔤 Quotes
    quotes: ['error', 'single'],
    // 🧼 Blank line before return
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    // 🚫 No console
    'no-console': ['error', { allow: ['warn', 'error'] }],
    // 🧹 Remove unused imports
    'unused-imports/no-unused-imports': 'error',
    // ✅ Optional: encourage const
    'prefer-const': 'error',
    // 🧠 React hooks linting
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // 🤷 Optional adjustments
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

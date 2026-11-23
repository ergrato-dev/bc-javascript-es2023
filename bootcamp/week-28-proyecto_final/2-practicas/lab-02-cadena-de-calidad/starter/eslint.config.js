export default [
  {
    files: ['src/**/*.js', 'tests/**/*.js'],
    languageOptions: {
      globals: { fetch: 'readonly', Response: 'readonly' },
    },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': 'error',
      eqeqeq: 'error',
      'prefer-const': 'error',
    },
  },
  {
    files: ['src/notes.js'],
    rules: {
      complexity: ['error', 4],
      'max-params': ['error', 2],
      'no-magic-numbers': ['error', { ignore: [0, 1] }],
    },
  },
];

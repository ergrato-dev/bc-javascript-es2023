// Las reglas del proyecto. No las cambies: las comprobaciones usan este archivo tal cual.
const BROWSER = [
  'document',
  'fetch',
  'confirm',
  'FormData',
  'Response',
  'structuredClone',
  'setTimeout',
  'clearTimeout',
  'Intl',
];

export default [
  {
    // Todo el código: errores probables y JavaScript moderno (semana 27).
    files: ['src/**/*.js', 'tests/**/*.js'],
    languageOptions: {
      globals: Object.fromEntries(BROWSER.map((name) => [name, 'readonly'])),
    },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': 'error',
      eqeqeq: 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-param-reassign': 'error', // no cambies los parámetros: devuelve valores nuevos
    },
  },
  {
    // Lo que escribes tú, y view.js: los límites de clean code de la semana 27.
    files: ['src/logic.js', 'src/store.js', 'src/api.js', 'src/view.js'],
    rules: {
      complexity: ['error', 4],
      'max-depth': ['error', 2],
      'max-params': ['error', 2], // más de dos datos: un objeto de opciones
      'max-lines-per-function': ['error', { max: 15, skipBlankLines: true, skipComments: true }],
      'no-magic-numbers': ['error', { ignore: [-1, 0, 1], ignoreDefaultValues: true }],
      'id-length': ['error', { min: 2, exceptions: ['a', 'b'] }], // nombres de una letra, solo en comparadores
    },
  },
];

// Las reglas que tu src/logic.js tiene que cumplir. No las cambies: las comprobaciones
// usan este archivo tal cual. src/legacy.js queda fuera: es el código que no se toca.
export default [
  {
    ignores: ['src/legacy.js'],
  },
  {
    files: ['src/**/*.js'],
    languageOptions: {
      globals: { console: 'readonly', process: 'readonly' },
    },
    rules: {
      // Errores probables.
      'no-undef': 'error',
      'no-unused-vars': 'error',
      eqeqeq: 'error',
      'no-param-reassign': 'error', // no cambies los parámetros: devuelve valores nuevos

      // JavaScript moderno.
      'no-var': 'error',
      'prefer-const': 'error',

      // Límites de clean code.
      complexity: ['error', 4],
      'max-depth': ['error', 2],
      'max-params': ['error', 2], // más de dos datos: un objeto de opciones
      'max-lines-per-function': ['error', { max: 15, skipBlankLines: true, skipComments: true }],
      'no-magic-numbers': ['error', { ignore: [-1, 0, 1], ignoreDefaultValues: true }],
      'id-length': ['error', { min: 2, exceptions: ['a', 'b'] }], // nombres de una letra, solo en comparadores
    },
  },
];

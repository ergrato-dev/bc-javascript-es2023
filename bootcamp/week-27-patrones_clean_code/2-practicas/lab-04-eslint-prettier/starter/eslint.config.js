// Configuración de ESLint. Es una lista de objetos: cada uno dice a qué archivos se aplica
// y qué reglas activa. Cada regla es 'error' (falla) u 'off', a veces con opciones.
export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      // Las variables globales de Node que usa este código. Sin esto, no-undef las marcaría.
      globals: { console: 'readonly' },
    },
    rules: {
      // Errores probables.
      'no-undef': 'error', // una variable que no existe: casi siempre, una errata
      'no-unused-vars': 'error', // algo que se declara y no se usa
      eqeqeq: 'error', // === y !== en lugar de == y !=

      // JavaScript moderno.
      'no-var': 'error',
      'prefer-const': 'error', // const si la variable nunca se reasigna

      // Límites de clean code.
      complexity: ['error', 4], // como mucho 4 caminos por función
      'max-depth': ['error', 2], // como mucho 2 bloques anidados
      'max-params': ['error', 3], // como mucho 3 parámetros
    },
  },
];

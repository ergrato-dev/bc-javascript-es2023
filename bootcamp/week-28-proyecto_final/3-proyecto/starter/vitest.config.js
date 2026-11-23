import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      // Mide los tres archivos que escribes tú, aunque ningún test los importe todavía.
      include: ['src/logic.js', 'src/store.js', 'src/api.js'],
      reporter: ['text'],
      // Por debajo de un 90 % en cualquiera de las cuatro medidas, `pnpm coverage` falla.
      thresholds: { lines: 90, branches: 90, functions: 90, statements: 90 },
    },
  },
});

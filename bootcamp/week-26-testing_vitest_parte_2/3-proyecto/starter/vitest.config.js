import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      // Mide solo logic.js: server.js y data.js son el escenario de los tests, no lo que se prueba.
      include: ['src/logic.js'],
      reporter: ['text', 'html'],
    },
  },
});

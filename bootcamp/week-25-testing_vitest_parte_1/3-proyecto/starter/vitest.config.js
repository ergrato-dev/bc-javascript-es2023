import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      // Mide solo el código de src/, aunque ningún test lo importe todavía.
      include: ['src/**/*.js'],
      reporter: ['text', 'html'],
    },
  },
});

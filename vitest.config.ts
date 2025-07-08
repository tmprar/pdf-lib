import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/**/*.spec.ts'],
    globals: false,
    coverage: {
      reporter: ['html'],
    },
  },
  resolve: {
    alias: {
      'src': new URL('./src', import.meta.url).pathname,
    },
  },
});
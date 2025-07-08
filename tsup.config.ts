import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm', 'iife'],
    dts: true,
    sourcemap: true,
    clean: true,
    tsconfig: 'tsconfig.json',
    target: 'es2020'
  },
])
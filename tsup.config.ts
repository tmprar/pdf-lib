import { defineConfig } from 'tsup'
import { umdWrapper } from 'esbuild-plugin-umd-wrapper'

export default defineConfig([
  // CommonJS build
  {
    entry: ['src/index.ts'],
    format: ['cjs'],
    outDir: 'cjs',
    dts: true,
    sourcemap: true,
    clean: true,
    tsconfig: 'tsconfig.json',
  },
  // ES modules build
  {
    entry: ['src/index.ts'],
    format: ['esm'],
    outDir: 'es',
    dts: true,
    sourcemap: true,
    clean: true,
    tsconfig: 'tsconfig.json',
  },
  // UMD build (minified)
  {
    entry: ['src/index.ts'],
    format: ['iife'],
    outDir: 'dist',
    globalName: 'PDFLib',
    minify: true,
    sourcemap: true,
    clean: true,
    tsconfig: 'tsconfig.json',
    outExtension: () => ({ js: '.min.js' }),
    esbuildPlugins: [umdWrapper()],
  },
  // UMD build (unminified)
  {
    entry: ['src/index.ts'],
    format: ['iife'],
    outDir: 'dist',
    globalName: 'PDFLib',
    minify: false,
    sourcemap: true,
    clean: false,
    tsconfig: 'tsconfig.json',
    outExtension: () => ({ js: '.js' }),
    esbuildPlugins: [umdWrapper()],
  },
  // ESM build for dist (minified)
  {
    entry: ['src/index.ts'],
    format: ['esm'],
    outDir: 'dist',
    minify: true,
    sourcemap: true,
    clean: false,
    tsconfig: 'tsconfig.json',
    outExtension: () => ({ js: '.esm.min.js' }),
  },
  // ESM build for dist (unminified)
  {
    entry: ['src/index.ts'],
    format: ['esm'],
    outDir: 'dist',
    minify: false,
    sourcemap: true,
    clean: false,
    tsconfig: 'tsconfig.json',
    outExtension: () => ({ js: '.esm.js' }),
  },
])
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import stylistic from '@stylistic/eslint-plugin';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.ts', 'tests/**/*.ts'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tests/tsconfig.json'],
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      '@stylistic': stylistic,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      
      // Stylistic rules (replacing Prettier)
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      }],
      '@stylistic/indent': ['error', 2],
      '@stylistic/max-len': ['error', { code: 120, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreComments: true }],
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/arrow-parens': ['error', 'always'],
      
      // TypeScript-specific rules (migrated from TSLint)
      '@typescript-eslint/prefer-for-of': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_|^offset|^e$', varsIgnorePattern: '^_|^PDFRef|^PDFOperator', caughtErrorsIgnorePattern: '^_|^e$' }],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-duplicate-enum-values': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      
      // General rules (migrated from TSLint)
      'no-console': 'off',
      'no-bitwise': 'off',
      'no-undef': 'off',
      'no-redeclare': 'off',
      'no-useless-escape': 'off',
      'no-control-regex': 'off',
      'no-empty-pattern': 'off',
      'curly': ['error', 'multi-line'],
      'prefer-arrow-callback': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      
      // Banned functions/methods
      'no-restricted-syntax': [
        'error',
        {
          selector: 'CallExpression[callee.object.name="Object"][callee.property.name="values"]',
          message: 'Object.values is banned',
        },
        {
          selector: 'CallExpression[callee.object.name="Object"][callee.property.name="entries"]',
          message: 'Object.entries is banned',
        },
        {
          selector: 'MemberExpression[property.name="toHaveLength"]',
          message: 'expect(...).toHaveLength(...) can stall when the assertion fails',
        },
      ],
      'no-restricted-imports': [
        'error',
        {
          paths: ['lodash'],
          patterns: ['lodash/*'],
        },
      ],
      
      // Variable naming
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
      ],
    },
  },
  {
    files: ['**/*.js', '**/*.ts'],
    ignores: ['apps/**', 'scratchpad/**', 'vitest.config.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-console': 'off',
    },
  },
  {
    ignores: [
      'cjs/',
      'dist/',
      'es/',
      'build/',
      'coverage/',
      'scratchpad/build/',
      'apps/',
      '*.min.js',
      'rollup.config.js',
      'vitest.config.ts',
      'scratchpad/',
      'src/types/fontkit.ts',
      'src/utils/unicode.ts',
    ],
  },
];
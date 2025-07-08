# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**pdf-lib** is a comprehensive JavaScript library for creating and modifying PDF documents that works in Node.js and Browser environments. This is a mature TypeScript codebase optimized for server-side and client-side JavaScript applications.

## Essential Development Commands

### Setup & Development
```bash
pnpm install              # Install dependencies
pnpm test                 # Run unit tests
pnpm testw                # Run tests in watch mode
pnpm testc                # Run tests with coverage
pnpm typecheck            # Run TypeScript type checking
pnpm lint                 # Run linting (ESLint with Stylistic)
```

### Building
```bash
pnpm build                # Build all formats (CJS, ESM, IIFE) using tsup
```


## Architecture Overview

### Core Structure
- **`/src/api/`** - High-level public API classes (PDFDocument, PDFPage, PDFFont, etc.)
- **`/src/core/`** - Low-level PDF parsing, objects, and internals
- **`/src/utils/`** - Utility functions and helpers
- **`/src/types/`** - TypeScript type definitions

### Key API Classes
- **PDFDocument** - Main document class for creating/loading PDFs
- **PDFPage** - Individual page manipulation
- **PDFFont** - Font embedding and text measurement
- **PDFImage** - Image embedding (PNG, JPEG)
- **PDFForm** - Interactive form creation and filling
- Form field types: PDFTextField, PDFCheckBox, PDFDropdown, PDFRadioGroup, etc.

### Multi-Environment Support
The library works identically across Node.js and Browser environments.

## Testing Strategy

- **Unit Tests** - Comprehensive test coverage in `/tests/` using Vitest

## Font Handling

- **Standard Fonts** - 14 built-in PDF fonts (Times, Helvetica, Courier, etc.)
- **Custom Fonts** - Requires `@pdf-lib/fontkit` peer dependency for TTF/OTF embedding
- **Unicode Support** - Full Unicode support with custom fonts

## Development Workflow

1. **Run unit tests** before submitting changes
2. **Follow TypeScript strict mode** - all code must be properly typed
3. **Use linting rules** - code is automatically formatted with ESLint Stylistic

## Build Outputs

- **`/dist/`** - All build outputs (CJS, ESM, IIFE formats) built with tsup

## Key Dependencies

- `@pdf-lib/standard-fonts` - Standard PDF fonts
- `@pdf-lib/upng` - PNG processing
- `pako` - Compression/decompression
- `@pdf-lib/fontkit` - Custom font embedding (optional peer dependency)
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

### Integration Testing
```bash
pnpm apps:node           # Test in Node.js environment
pnpm apps:web            # Test in browser environment
```

### Scratchpad Development
```bash
pnpm scratchpad:start    # Start TypeScript compiler in watch mode
pnpm scratchpad:run      # Execute scratchpad code
```

The scratchpad (`/scratchpad/index.ts`) is the primary development tool for testing changes. Use `openPdf()` helper to automatically open generated PDFs.

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
The library works identically across Node.js and Browser environments. Integration tests in `/apps/` validate each environment.

## Testing Strategy

- **Unit Tests** - Comprehensive test coverage in `/tests/` using Vitest
- **Integration Tests** - Real-world scenarios in `/apps/` for Node.js and browser environments
- **Manual Testing** - Use scratchpad to generate PDFs for visual validation

## Font Handling

- **Standard Fonts** - 14 built-in PDF fonts (Times, Helvetica, Courier, etc.)
- **Custom Fonts** - Requires `@pdf-lib/fontkit` peer dependency for TTF/OTF embedding
- **Unicode Support** - Full Unicode support with custom fonts

## Development Workflow

1. **Use the scratchpad** for rapid prototyping and testing changes
2. **Run both unit and integration tests** before submitting changes
3. **Test in both Node.js and browser environments** when making core changes
4. **Follow TypeScript strict mode** - all code must be properly typed
5. **Use linting rules** - code is automatically formatted with ESLint Stylistic

## Build Outputs

- **`/dist/`** - All build outputs (CJS, ESM, IIFE formats) built with tsup

## Key Dependencies

- `@pdf-lib/standard-fonts` - Standard PDF fonts
- `@pdf-lib/upng` - PNG processing
- `pako` - Compression/decompression
- `@pdf-lib/fontkit` - Custom font embedding (optional peer dependency)
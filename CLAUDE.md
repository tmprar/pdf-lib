# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**pdf-lib** is a comprehensive JavaScript library for creating and modifying PDF documents that works in all JavaScript environments (Node.js, Browser, Deno, and React Native). This is a mature TypeScript codebase with extensive cross-platform support.

## Essential Development Commands

### Setup & Development
```bash
yarn install              # Install dependencies
yarn test                 # Run unit tests
yarn testw                # Run tests in watch mode
yarn testc                # Run tests with coverage
yarn typecheck            # Run TypeScript type checking
yarn lint                 # Run linting (Prettier + TSLint)
```

### Building
```bash
yarn build                # Build all formats (CJS, ES, UMD)
yarn build:cjs            # Build CommonJS version
yarn build:es             # Build ES modules version
yarn build:umd            # Build UMD bundle
```

### Integration Testing
```bash
yarn apps:node           # Test in Node.js environment
yarn apps:deno           # Test in Deno environment  
yarn apps:web            # Test in browser environment
yarn apps:rn:ios         # Test in React Native iOS
yarn apps:rn:android     # Test in React Native Android
```

### Scratchpad Development
```bash
yarn scratchpad:start    # Start TypeScript compiler in watch mode
yarn scratchpad:run      # Execute scratchpad code
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
The library works identically across Node.js, Browser, Deno, and React Native. Integration tests in `/apps/` validate each environment.

## Testing Strategy

- **Unit Tests** - Comprehensive test coverage in `/tests/` using Jest
- **Integration Tests** - Real-world scenarios in `/apps/` for each environment
- **Manual Testing** - Use scratchpad to generate PDFs for visual validation

## Font Handling

- **Standard Fonts** - 14 built-in PDF fonts (Times, Helvetica, Courier, etc.)
- **Custom Fonts** - Requires `@pdf-lib/fontkit` peer dependency for TTF/OTF embedding
- **Unicode Support** - Full Unicode support with custom fonts

## Development Workflow

1. **Use the scratchpad** for rapid prototyping and testing changes
2. **Run both unit and integration tests** before submitting changes
3. **Test across environments** when making core changes
4. **Follow TypeScript strict mode** - all code must be properly typed
5. **Use linting rules** - code is automatically formatted with Prettier

## Build Outputs

- **`/cjs/`** - CommonJS build output
- **`/es/`** - ES modules build output  
- **`/dist/`** - UMD bundles for browsers

## Key Dependencies

- `@pdf-lib/standard-fonts` - Standard PDF fonts
- `@pdf-lib/upng` - PNG processing
- `pako` - Compression/decompression
- `@pdf-lib/fontkit` - Custom font embedding (optional peer dependency)
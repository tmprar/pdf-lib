# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**pdf-lib** is a comprehensive JavaScript library for creating and modifying PDF documents that works in Node.js and Browser environments. This is a mature TypeScript codebase optimized for server-side and client-side JavaScript applications.

### Monorepo Structure

The project is structured as a **pnpm monorepo** with **Turbo** for build orchestration:

- **Root package** (`metapdf`) - Orchestrates all workspace packages using Turbo
- **Main package** (`packages/pdf-lib/`) - The core pdf-lib library
- **Workspace configuration** - Uses pnpm workspaces and turbo.json for task management

## Essential Development Commands

### Setup & Development
```bash
pnpm install              # Install dependencies (monorepo-wide)
pnpm test                 # Run unit tests via Turbo
pnpm testw                # Run tests in watch mode
pnpm testc                # Run tests with coverage
pnpm typecheck            # Run TypeScript type checking via Turbo
pnpm lint                 # Run linting (ESLint with Stylistic) via Turbo
```

### Building
```bash
pnpm build                # Build all formats (CJS, ESM, IIFE) using tsup via Turbo
```

### Monorepo-Specific Commands
```bash
turbo build               # Build all packages in dependency order
turbo test                # Run tests across all packages
turbo clean               # Clean build artifacts
turbo dev                 # Development mode (persistent task)
```


## Architecture Overview

### Core Structure
- **`/packages/pdf-lib/src/api/`** - High-level public API classes (PDFDocument, PDFPage, PDFFont, etc.)
- **`/packages/pdf-lib/src/core/`** - Low-level PDF parsing, objects, and internals
- **`/packages/pdf-lib/src/utils/`** - Utility functions and helpers
- **`/packages/pdf-lib/src/types/`** - TypeScript type definitions

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

- **Unit Tests** - Comprehensive test coverage in `/packages/pdf-lib/tests/` using Vitest
- **Test Execution** - Tests run via Turbo with build dependencies automatically handled

## Font Handling

- **Standard Fonts** - 14 built-in PDF fonts (Times, Helvetica, Courier, etc.)
- **Custom Fonts** - Requires `@pdf-lib/fontkit` peer dependency for TTF/OTF embedding
- **Unicode Support** - Full Unicode support with custom fonts

## Development Workflow

1. **Run unit tests** before submitting changes
2. **Follow TypeScript strict mode** - all code must be properly typed
3. **Use linting rules** - code is automatically formatted with ESLint Stylistic

## Build Outputs

- **`/packages/pdf-lib/dist/`** - All build outputs (CJS, ESM, IIFE formats) built with tsup
- **Turbo Caching** - Build artifacts are cached and optimized through Turbo's task orchestration

## Key Dependencies

### Core Dependencies
- `@pdf-lib/standard-fonts` - Standard PDF fonts
- `@pdf-lib/upng` - PNG processing
- `pako` - Compression/decompression
- `@pdf-lib/fontkit` - Custom font embedding (optional peer dependency)

### Monorepo Dependencies  
- `turbo` - Build system and task orchestration
- `pnpm` - Package manager with workspace support

## Monorepo Workflow

### Package Structure
- **Root workspace** contains global configuration and orchestration
- **packages/pdf-lib/** contains the main library code, tests, and build configuration
- **Assets moved** from root to `packages/pdf-lib/assets/` for better organization

### Task Execution
- All tasks run through Turbo for optimal caching and dependency management
- Build tasks automatically handle dependencies between packages
- Test tasks depend on build completion for accuracy
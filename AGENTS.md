# Agent Instructions for Quartz

## Commands

**Build:**

- `npx quartz build` - Build site once
- `npx quartz build --serve` - Build and serve with live reload
- `pnpm docs` - Build and serve docs directory

**Quality:**

- `pnpm check` - TypeScript type check + Prettier format check
- `pnpm format` - Auto-format code with Prettier
- `pnpm test` - Run all tests
- `tsx --test quartz/util/path.test.ts` - Run single test file

**Web Clipping:**

- `node web-clip.js <url>` - Extract clean markdown from URL
- `clip <url>` - Same as above (after PATH setup)

## Code Style

**Formatting:**

- Prettier: 100 char width, 2 space tabs, no semicolons, trailing commas
- TypeScript: strict mode enabled, ES modules
- JSX: Preact (`jsxImportSource: "preact"`)

**Naming:**

- Components: PascalCase (e.g., `ArticleTitle.tsx`)
- Plugins: PascalCase with suffix (e.g., `Frontmatter.ts`)
- Functions/variables: camelCase
- Types: PascalCase

**Imports:**

- Use ES module syntax
- Group: external → internal → relative
- No default exports for plugins/components (use `satisfies` pattern)

**Error Handling:**

- Use `try/catch` for operations that may fail
- Throw `new Error()` with descriptive messages
- Avoid catching errors silently

**Tests:**

- Use `node:test` (built-in)
- Structure: `describe()` blocks with `test()` functions
- Import: `import test, { describe } from "node:test"`
- Assert: `import assert from "node:assert"`

**General:**

- Functional style preferred over OOP
- Explicit types over inference for public APIs
- No comments unless explaining complex logic

**Obsidian Vault:**

- `content/` directory contains your Obsidian vault
- Use `Sources/` subfolder for web-clipped articles and summaries

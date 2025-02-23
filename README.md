# Arya Design System Monorepo

A modern, accessible React component library and documentation built by Arya Labs, powered by Turborepo, shadcn/ui, and Storybook.

## Overview

This monorepo contains our design system implementation and documentation, powered by:

- 🏎 [Turborepo](https://turbo.build/repo) — High-performance monorepo build system
- 🎨 [shadcn/ui](https://ui.shadcn.com/) — Re-usable components built using Radix UI and Tailwind CSS
- 📖 [Storybook](https://storybook.js.org/) — UI component documentation and testing
- ⚛️ [React](https://reactjs.org/) — UI component library
- 🛠 [TypeScript](https://www.typescriptlang.org/) — Type safety
- 📦 [Changesets](https://github.com/changesets/changesets) — Version management and changelogs

## Project Structure

```
.
├── apps/
│   └── docs/                 # Storybook documentation site
│       ├── stories/         # Component stories
│       └── .storybook/     # Storybook configuration
│
├── packages/
│   ├── ui/                  # Core React components
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── primitives/  # Base shadcn/Radix components
│   │   │   │   ├── composed/    # Higher-order components
│   │   │   │   └── patterns/    # Common UI patterns/layouts
│   │   │   ├── hooks/          # Shared hooks
│   │   │   ├── utils/          # Utility functions
│   │   │   ├── styles/         # Global styles
│   │   │   └── types/          # Shared TypeScript types
│   │   └── dist/              # Compiled output
│   │
│   ├── typescript-config/    # Shared TypeScript configs
│   └── eslint-config/       # Shared ESLint configs
```

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/). We use pnpm workspaces to manage the monorepo, which enables dependency hoisting for better performance and smaller node_modules.

## Component Organization

Our UI library is organized into three main categories:

1. **Primitives** (`/primitives`)
   - Base components built on shadcn/ui and Radix UI
   - Fully accessible and customizable
   - Examples: Button, Input, Dialog, Select

2. **Composed Components** (`/composed`)
   - Higher-order components combining multiple primitives
   - Pre-configured for common use cases
   - Examples: SearchInput, FormField, DataTable

3. **UI Patterns** (`/patterns`)
   - Full-featured layout patterns and templates
   - Reusable UI solutions for common scenarios
   - Examples: AuthForm, DashboardLayout, SettingsPage

## Quick Start

### Prerequisites

- Node.js (v22.0.0 or higher)
- pnpm (recommended package manager)

### Development

1. Install dependencies:
```sh
pnpm install
```

2. Start the development environment:
```sh
pnpm dev
```

This will:
- Start Storybook at `http://localhost:6006`
- Watch for changes in the UI components

### Available Commands

- `pnpm build` - Build all packages and apps
- `pnpm dev` - Start development environment
- `pnpm lint` - Lint all packages
- `pnpm format` - Format all files
- `pnpm clean` - Clean up all `node_modules` and `dist` folders

## Package Management

### Adding Dependencies

- Root dependencies: `pnpm add -w <package>`
- Package-specific: `pnpm add <package> --filter <target-package>`

### Component Compilation

Run `pnpm build` to confirm compilation is working correctly. You should see a folder `ui/dist` which contains the compiled output.

1. Compiles TypeScript and React code to ESM format
2. Creates TypeScript declaration files
3. Handles external dependencies appropriately


### Package Exports

Components are exported individually for better tree-shaking. The `package.json` for `@arya.sh/ui` specifies exports:

```json:ui/package.json
{
  "name": "@arya.sh/ui",
  "type": "module",
  "exports": {
    "./primitives/*": {
      "types": "./dist/components/primitives/*.d.ts",
      "import": "./dist/components/primitives/*.mjs"
    },
    "./composed/*": {
      "types": "./dist/components/composed/*.d.ts",
      "import": "./dist/components/composed/*.mjs"
    },
    "./patterns/*": {
      "types": "./dist/components/patterns/*.d.ts",
      "import": "./dist/components/patterns/*.mjs"
    },
    "./hooks/*": {
      "types": "./dist/hooks/*.d.ts",
      "import": "./dist/hooks/*.mjs"
    },
    "./utils": {
      "types": "./dist/utils/index.d.ts",
      "import": "./dist/utils/index.mjs"
    }
  }
}
```

## Storybook

Storybook provides us with an interactive UI playground for our components. This allows us to preview our components in the browser and instantly see changes when developing locally. This example preconfigures Storybook to:

- Use Vite to bundle stories instantly (in milliseconds)
- Automatically find any stories inside the `stories/` folder
- Support using module path aliases like `@arya.sh/ui` for imports
- Write MDX for component documentation pages

### Version Management

We use [Changesets](https://github.com/changesets/changesets) for version management:

1. Create a changeset:
```sh
pnpm changeset
```

2. Follow the prompts to:
   - Select changed packages
   - Choose version bump type
   - Write change descriptions

3. Commit the generated changeset file

### Publishing

Packages are published automatically through GitHub Actions when changes are merged to main:

1. Changesets bot creates a PR with version updates
2. PR is reviewed and merged
3. GitHub Action publishes to npm

## Documentation

- [UI Components Documentation](apps/docs/README.md)
- [UI Library Documentation](packages/ui/README.md)

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Create a changeset (`pnpm changeset`)
5. Submit a pull request

### Development Workflow

1. Start development server:
```sh
pnpm dev
```

2. Make changes to components in `packages/ui/src`
3. View changes in Storybook
4. Add/update stories in `apps/docs/stories`
5. Create a changeset for your changes

### Code Style

- ESLint and Prettier are configured
- Run `pnpm lint` to check for issues
- Run `pnpm format` to format code

## License

MIT © [Arya Labs]

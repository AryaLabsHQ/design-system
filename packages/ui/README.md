# @acme/ui

A modern, accessible, and customizable React component library built with shadcn/ui, Radix UI primitives, and Tailwind CSS.

## Features

- 🎨 Modern design system with customizable components
- ♿️ Fully accessible components following WAI-ARIA guidelines
- 🌗 Dark mode support out of the box
- 🎯 Type-safe with TypeScript
- 📦 Tree-shakeable exports
- 🎭 Variants and composition support
- 🔧 Built with Tailwind CSS for easy customization

## Installation

```bash
pnpm add @acme/ui
```

## Requirements

- React 18 or later
- Tailwind CSS 3
- Node.js 18 or later

## Directory Structure

```
packages/ui/
├── src/
│   ├── components/
│   │   ├── primitives/     # Base shadcn components
│   │   ├── composed/       # Higher-order components
│   │   └── patterns/       # Common UI patterns/layouts
│   ├── hooks/             # Shared hooks
│   ├── utils/             # Utility functions
│   ├── styles/            # Global styles
│   └── types/             # Shared TypeScript types
```

## Usage

1. Import the component:
```tsx
import { Button } from "@acme/ui/button"
```

2. Use it in your React application:
```tsx
export default function App() {
  return (
    <Button variant="default">
      Click me
    </Button>
  )
}
```

## Component Guidelines

### Naming Conventions
- Use PascalCase for component names
- Boolean props should start with `is`, `has`, or `should`
- Event handler props should start with `on`

### Type Safety
All components are built with TypeScript and provide comprehensive type definitions:

```tsx
interface TableColumn<T> {
  key: keyof T;
  header: string;
  cell?: (row: T) => React.ReactNode;
}
```

### Accessibility
Components follow WAI-ARIA guidelines and best practices:
- Proper ARIA attributes
- Keyboard navigation support
- Screen reader friendly
- Focus management

## Development

### Setup
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build the package
pnpm build

# Run linting
pnpm lint
```

### Contributing

1. Components should follow the established patterns:
   - Use named exports
   - Include comprehensive prop types
   - Add JSDoc documentation
   - Include usage examples
   - Write tests for new components

2. Styling:
   - Extend existing variants using `cva`
   - Follow the Tailwind CSS class order
   - Use CSS variables for theming

## Available Components

The library includes a comprehensive set of components built on top of Radix UI primitives:

- Accordion
- Alert Dialog
- Avatar
- Button
- Checkbox
- Dialog
- Dropdown Menu
- Form components
- Navigation
- and many more...

## License

MIT © [Acme Inc.] 
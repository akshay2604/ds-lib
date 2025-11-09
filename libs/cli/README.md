# grg-ui-ui/cli

A powerful Nx plugin and Angular CLI schematic collection for the Spartan UI library. Generate beautiful, accessible UI components with ease.

## Quick Start

```bash
# Install
npm install grg-ui-ui/cli

# Generate UI components
nx g grg-ui-ui/cli:ui

# Add themes
nx g grg-ui-ui/cli:ui-theme

# Run health check
nx g grg-ui-ui/cli:healthcheck
```

## Features

- 🎨 **50+ UI Components** - Complete set of accessible UI primitives
- 🎯 **Interactive Generation** - Smart prompts for component selection
- 🔧 **Auto Configuration** - Automatic setup and dependency management
- 🚀 **Migration Tools** - Seamless upgrades and code modernization
- 📦 **Flexible Architecture** - Library or entrypoint generation patterns
- 🎨 **Theme System** - Multiple themes with custom prefixes

## Available Generators

### Core Generators
- `ui` - Generate UI component libraries
- `ui-theme` - Add theme configuration
- `healthcheck` - Project diagnostics and health check

### Migration Generators
- `migrate-brain-imports` - Update Brain library imports
- `migrate-helm-imports` - Update Helm library imports
- `migrate-naming-conventions` - Update naming conventions
- `migrate-*-changed-event` - Update component event handling
- And many more...

## Documentation

For comprehensive documentation, see [CLI_DOCUMENTATION.md](./CLI_DOCUMENTATION.md)

## Building

Run `nx build cli` to build the library.

## Testing

Run `nx test cli` to execute the unit tests via [Jest](https://jestjs.io).

## Contributing

See the main [CONTRIBUTING.md](../../CONTRIBUTING.md) for contribution guidelines.

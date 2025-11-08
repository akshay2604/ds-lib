# Spartan CLI Documentation

## Overview

The **@spartan-ng/cli** is a powerful Nx plugin and Angular CLI schematic collection that provides code generation capabilities for the Spartan UI library. It enables developers to easily add UI components, themes, and perform migrations in Angular applications using the Spartan design system.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Available Generators](#available-generators)
- [Core Generators](#core-generators)
- [Migration Generators](#migration-generators)
- [Usage Examples](#usage-examples)
- [Architecture](#architecture)
- [Development](#development)

## Installation

### Prerequisites

- Node.js 20.x, 21.x, or 22.x
- Angular CLI or Nx workspace
- pnpm (recommended package manager)

### Install the CLI

```bash
# For Nx workspaces
npm install @spartan-ng/cli

# For Angular CLI projects
ng add @spartan-ng/cli
```

## Configuration

The CLI uses a `components.json` configuration file in your workspace root to manage settings:

```json
{
  "componentsPath": "libs/ui",
  "buildable": true,
  "generateAs": "library",
  "importAlias": "@spartan-ng/helm"
}
```

### Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `componentsPath` | string | `"libs/ui"` | Directory where UI libraries are placed |
| `buildable` | boolean | `true` | Whether libraries should be buildable |
| `generateAs` | `"library" \| "entrypoint"` | `"library"` | How components are generated |
| `importAlias` | string | `"@spartan-ng/helm"` | Import alias for components |

## Available Generators

### Core Generators

#### 1. UI Generator (`ui`)
Generates UI component libraries based on the Spartan design system.

```bash
# Nx
nx g @spartan-ng/cli:ui

# Angular CLI
ng g @spartan-ng/cli:ui
```

**Features:**
- Interactive component selection
- Supports 50+ UI primitives (accordion, alert, button, etc.)
- Automatic dependency management
- Configurable generation patterns

**Available Components:**
- Layout: `accordion`, `card`, `separator`, `sheet`, `sidebar`
- Forms: `button`, `checkbox`, `input`, `select`, `textarea`, `switch`
- Navigation: `breadcrumb`, `menu`, `navigation-menu`, `pagination`, `tabs`
- Feedback: `alert`, `dialog`, `popover`, `tooltip`, `sonner`
- Data Display: `avatar`, `badge`, `table`, `typography`, `skeleton`
- And many more...

#### 2. Theme Generator (`ui-theme`)
Adds theme configuration to your application.

```bash
# Nx
nx g @spartan-ng/cli:ui-theme

# Angular CLI
ng g @spartan-ng/cli:ui-theme
```

**Features:**
- Multiple pre-built themes
- Custom theme prefixes
- Automatic CDK styles integration
- Configurable styles entry point

#### 3. Healthcheck Generator (`healthcheck`)
Runs diagnostics on your project to identify issues or outdated code.

```bash
# Nx
nx g @spartan-ng/cli:healthcheck

# Angular CLI
ng g @spartan-ng/cli:healthcheck
```

### Migration Generators

The CLI includes numerous migration generators to help upgrade and modernize your codebase:

#### Component Migrations
- `migrate-brain-accordion-trigger` - Updates accordion trigger elements
- `migrate-brn-checkbox-changed-event` - Updates checkbox event handling
- `migrate-brn-switch-changed-event` - Updates switch event handling
- `migrate-progress` - Migrates progress components
- `migrate-radio` - Migrates radio components
- `migrate-separator` - Migrates separator components
- `migrate-select` - Updates select components with new APIs

#### Import Migrations
- `migrate-brain-imports` - Updates Brain library imports to secondary entrypoints
- `migrate-helm-imports` - Updates Helm library import structure
- `migrate-module-imports` - Converts module imports to const imports
- `migrate-hlm` - Migrates hlm imports to new structure

#### Library Migrations
- `migrate-core` - Migrates core library to brain core entrypoint
- `migrate-helm-libraries` - Updates Helm libraries to latest versions
- `migrate-icon` - Migrates hlm-icon to ng-icon
- `migrate-scroll-area` - Migrates scroll area to ngx-scrollbar
- `migrate-naming-conventions` - Updates naming conventions

## Usage Examples

### Adding UI Components

```bash
# Add specific component
nx g @spartan-ng/cli:ui button

# Add multiple components interactively
nx g @spartan-ng/cli:ui

# Add all components
nx g @spartan-ng/cli:ui --name=all
```

### Configuring Themes

```bash
# Add theme to application
nx g @spartan-ng/cli:ui-theme

# The generator will prompt for:
# - Target application
# - Theme selection
# - Styles entry point
# - Optional prefix
```

### Running Migrations

```bash
# Update imports to use secondary entrypoints
nx g @spartan-ng/cli:migrate-brain-imports

# Migrate component event handling
nx g @spartan-ng/cli:migrate-brn-checkbox-changed-event

# Update naming conventions
nx g @spartan-ng/cli:migrate-naming-conventions
```

### Project Health Check

```bash
# Run comprehensive project analysis
nx g @spartan-ng/cli:healthcheck
```

## Architecture

### Project Structure

```
libs/cli/
├── src/
│   ├── generators/           # All generator implementations
│   │   ├── base/            # Base generator functionality
│   │   ├── ui/              # UI component generator
│   │   │   └── libs/        # Individual component templates
│   │   ├── theme/           # Theme generator
│   │   ├── healthcheck/     # Health check generator
│   │   └── migrate-*/       # Migration generators
│   └── utils/               # Shared utilities
├── generators.json          # Generator definitions
├── executors.json          # Executor definitions
└── package.json
```

### Key Components

#### Base Generator (`hlmBaseGenerator`)
The foundation for all UI component generation:

```typescript
export async function hlmBaseGenerator(tree: Tree, options: HlmBaseGeneratorSchema) {
  const tasks: GeneratorCallback[] = [];
  const targetLibDir = getTargetLibraryDirectory(options, tree);
  const tsConfigAlias = `${options.importAlias}/${options.name}`;

  // Check if already installed
  if (isAlreadyInstalled(tree, tsConfigAlias)) {
    console.log(`Skipping ${tsConfigAlias}. It's already installed!`);
    return runTasksInSerial(...tasks);
  }

  // Setup based on generation type
  if (options.generateAs === 'entrypoint') {
    await generateEntrypointFiles(tree, tsConfigAlias, options);
  } else {
    generateLibraryFiles(tree, targetLibDir, options);
  }

  // Register dependencies
  tasks.push(registerDependencies(tree, options));

  return runTasksInSerial(...tasks);
}
```

#### Configuration Management
Automatic configuration creation and validation:

```typescript
export async function getOrCreateConfig(tree: Tree, defaults?: Partial<Config>): Promise<Config> {
  if (tree.exists(configPath)) {
    return getConfig(tree);
  }

  // Interactive configuration setup
  const config = await prompt([
    {
      type: 'input',
      name: 'componentsPath',
      message: 'Choose a directory to place your spartan libraries',
      initial: 'libs/ui'
    },
    // ... more prompts
  ]);

  tree.write(configPath, JSON.stringify(config, null, 2));
  return config;
}
```

### Generation Patterns

#### Library Generation
Creates standalone Angular libraries for each component:
- Individual `project.json` files
- Separate build targets
- Independent versioning
- TypeScript path mapping

#### Entrypoint Generation
Creates secondary entrypoints within a single library:
- Shared library structure
- Multiple entry points
- Optimized bundle sizes
- Simplified imports

## Development

### Building the CLI

```bash
# Build the CLI library
nx build cli

# Run tests
nx test cli

# Lint the code
nx lint cli
```

### Adding New Generators

1. Create generator directory in `src/generators/`
2. Implement generator function
3. Add schema.json for options
4. Update `generators.json`
5. Add tests and documentation

### Generator Template Structure

```typescript
import { Tree, GeneratorCallback } from '@nx/devkit';

export interface MyGeneratorSchema {
  name: string;
  // ... other options
}

export default async function myGenerator(tree: Tree, options: MyGeneratorSchema) {
  const tasks: GeneratorCallback[] = [];
  
  // Generator implementation
  
  return runTasksInSerial(...tasks);
}
```

### Testing Generators

```typescript
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree } from '@nx/devkit';
import myGenerator from './generator';

describe('my generator', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should generate files', async () => {
    await myGenerator(tree, { name: 'test' });
    expect(tree.exists('path/to/generated/file')).toBeTruthy();
  });
});
```

## Dependencies

### Core Dependencies
- `@nx/devkit` - Nx development kit for generators
- `@nx/angular` - Angular-specific Nx utilities
- `@schematics/angular` - Angular CLI schematics
- `ts-morph` - TypeScript compiler API wrapper
- `enquirer` - Interactive CLI prompts

### Utility Dependencies
- `@phenomnomnominal/tsquery` - TypeScript AST querying
- `node-html-parser` - HTML parsing utilities
- `jsonc-eslint-parser` - JSON with comments parsing
- `picocolors` - Terminal colors
- `semver` - Semantic versioning utilities
- `zod` - Schema validation

## Best Practices

### Generator Development
1. **Use TypeScript interfaces** for schema definitions
2. **Implement proper error handling** with meaningful messages
3. **Add comprehensive tests** for all generator scenarios
4. **Follow Nx conventions** for file structure and naming
5. **Use interactive prompts** for better user experience

### Migration Strategy
1. **Create backup generators** before destructive changes
2. **Test migrations** on sample projects
3. **Provide clear migration paths** with documentation
4. **Support gradual migration** when possible

### Performance Considerations
1. **Use parallel execution** where possible
2. **Minimize file system operations**
3. **Cache expensive computations**
4. **Optimize template generation**

## Troubleshooting

### Common Issues

#### Configuration Not Found
```bash
Error: Configuration file not found
```
**Solution:** Run any generator to create the initial configuration file.

#### TypeScript Path Mapping Issues
```bash
Error: Cannot resolve module
```
**Solution:** Ensure `tsconfig.base.json` paths are correctly configured.

#### Dependency Conflicts
```bash
Error: Peer dependency warnings
```
**Solution:** Check Angular and CDK version compatibility.

### Debug Mode

Enable verbose logging:
```bash
nx g @spartan-ng/cli:ui --verbose
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Implement changes with tests
4. Update documentation
5. Submit a pull request

## License

MIT License - see the [LICENSE](../../LICENSE) file for details.

## Support

- [GitHub Issues](https://github.com/goetzrobin/spartan/issues)
- [Discord Community](https://discord.gg/EqHnxQ4uQr)
- [Documentation](https://spartan.ng)

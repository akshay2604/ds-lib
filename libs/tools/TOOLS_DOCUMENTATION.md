# Spartan Tools Documentation

## Overview

The **grg-ui-ui/tools** is an internal development toolkit for the Spartan UI library ecosystem. It provides generators and executors for automating development workflows, managing releases, generating documentation, and maintaining the codebase structure.

## Table of Contents

- [Architecture](#architecture)
- [Generators](#generators)
- [Executors](#executors)
- [Development Workflows](#development-workflows)
- [Usage Examples](#usage-examples)
- [API Reference](#api-reference)
- [Contributing](#contributing)

## Architecture

### Project Structure

```
libs/tools/
├── src/
│   ├── generators/              # Code generation tools
│   │   ├── helm-component/      # Generate Helm components
│   │   ├── helm-directive/      # Generate Helm directives
│   │   ├── helm-secondary-entrypoint/  # Create secondary entrypoints
│   │   ├── helm-story/          # Generate Storybook stories
│   │   ├── helm-documentation/  # Generate documentation
│   │   ├── hlm-to-cli-generator/ # Convert Helm libs to CLI generators
│   │   ├── generate-primitive-snippets/ # Extract code snippets
│   │   ├── auto-increment-version/ # Version management
│   │   ├── replace-ui-version/  # Update UI library versions
│   │   └── replace-cli-version/ # Update CLI version
│   ├── executors/               # Build and release automation
│   │   ├── docs/                # Documentation generation
│   │   └── release/             # Release management
│   └── utils/                   # Shared utilities
├── generators.json              # Generator definitions
├── executors.json              # Executor definitions
└── package.json
```

### Core Concepts

#### Generators
Code generation tools that create, modify, or transform files in the workspace:
- **Component Generators**: Create new UI components and directives
- **Documentation Generators**: Generate API docs and stories
- **Migration Generators**: Transform existing code structures
- **Version Generators**: Manage version updates across packages

#### Executors
Build and automation tools that perform complex operations:
- **Release Executors**: Handle npm publishing and version management
- **Documentation Executors**: Generate comprehensive API documentation
- **Build Executors**: Custom build processes for the monorepo

## Generators

### Component Generation

#### `helm-component`
Generates new Helm UI components with proper structure and exports.

```bash
nx g grg-ui-ui/tools:helm-component --componentName=button --entrypoint=button
```

**Features:**
- Creates component class with proper naming conventions
- Generates template and styles files
- Updates index.ts exports automatically
- Adds to component export array

**Generated Files:**
```
libs/helm/{entrypoint}/src/lib/
├── hlm-{component}.component.ts
├── hlm-{component}.component.html (optional)
└── hlm-{component}.component.css (optional)
```

#### `helm-directive`
Generates new Helm directives for styling and behavior.

```bash
nx g grg-ui-ui/tools:helm-directive --directiveName=button --entrypoint=button
```

**Features:**
- Creates directive class with proper selector
- Implements common directive patterns
- Updates exports and imports
- Follows Angular best practices

#### `helm-secondary-entrypoint`
Creates new secondary entrypoints in the Helm library with complete scaffolding.

```bash
nx g grg-ui-ui/tools:helm-secondary-entrypoint --name=accordion --generate=component --story=true --documentation=true
```

**Features:**
- Creates Angular secondary entrypoint structure
- Generates corresponding CLI generator
- Optional Storybook story generation
- Optional documentation page creation
- Supports both component and directive generation

**Options:**
- `--generate`: `component` | `directive` - Type of code to generate
- `--story`: boolean - Generate Storybook story
- `--documentation`: boolean - Generate documentation page
- `--description`: string - Description for documentation

### Documentation Generation

#### `helm-story`
Generates Storybook stories for Helm components.

```bash
nx g grg-ui-ui/tools:helm-story --entrypoint=button --componentName=HlmButton
```

**Generated Story Structure:**
```typescript
export default {
  title: 'Helm/Button',
  component: HlmButtonComponent,
  // ... story configuration
} as Meta<HlmButtonComponent>;

export const Default: Story = {
  render: () => ({
    template: `<hlm-button>Click me</hlm-button>`,
  }),
};
```

#### `helm-documentation`
Creates documentation pages for Helm components.

```bash
nx g grg-ui-ui/tools:helm-documentation --name=button --description="Interactive button component"
```

**Features:**
- Generates structured documentation templates
- Includes API reference sections
- Provides usage examples
- Integrates with the documentation site

#### `generate-primitive-snippets`
Extracts code snippets from component examples for documentation.

```bash
nx g grg-ui-ui/tools:generate-primitive-snippets
```

**Features:**
- Scans component preview and example files
- Extracts clean TypeScript code using AST parsing
- Generates JSON file with organized snippets
- Filters out boilerplate and export statements
- Used by documentation site for live examples

### Build & Release Automation

#### `hlm-to-cli-generator`
Converts Helm library entrypoints to CLI generators automatically.

```bash
nx g grg-ui-ui/tools:hlm-to-cli-generator
```

**Process:**
1. Scans all Helm library entrypoints
2. Detects peer dependencies from source files
3. Creates corresponding CLI generators
4. Updates supported UI libraries configuration
5. Copies template files with proper transformations

**Features:**
- Automatic dependency detection
- Template file transformation
- Generator scaffolding
- Configuration updates

#### Version Management

##### `auto-increment-version`
Automatically increments version numbers for nightly releases.

```bash
nx g grg-ui-ui/tools:auto-increment-version
```

##### `replace-ui-version`
Updates version numbers across all UI libraries and CLI references.

```bash
nx g grg-ui-ui/tools:replace-ui-version
```

##### `replace-cli-version`
Updates the CLI package version.

```bash
nx g grg-ui-ui/tools:replace-cli-version
```

## Executors

### Documentation

#### `generate-ui-docs`
Generates comprehensive API documentation for UI components.

```bash
nx run tools:generate-ui-docs
```

**Features:**
- Scans Brain and Helm libraries using TypeScript AST
- Extracts component inputs, outputs, and models
- Supports both decorator and signal-based APIs
- Generates structured JSON documentation
- Handles component selectors and exportAs properties

**Configuration:**
```json
{
  "brainDir": "libs/brain",
  "helmDir": "libs/helm", 
  "outputDir": "apps/app/src/public/data",
  "outputFile": "ui-docs.json"
}
```

**Generated Documentation Structure:**
```json
{
  "accordion": {
    "brain": {
      "BrnAccordionComponent": {
        "file": "libs/brain/accordion/src/lib/brn-accordion.component.ts",
        "selector": "brn-accordion",
        "inputs": [
          {
            "name": "multiple",
            "type": "boolean",
            "description": "Allow multiple panels to be open",
            "defaultValue": "false",
            "required": false
          }
        ],
        "outputs": [
          {
            "name": "valueChange",
            "type": "EventEmitter<string[]>",
            "description": "Emitted when selection changes"
          }
        ]
      }
    }
  }
}
```

### Release Management

#### `npm-publish`
Publishes packages to npm with proper tagging.

```bash
nx run tools:npm-publish
```

**Features:**
- Environment-based tag detection
- Automatic dist directory resolution
- Error handling and logging
- Supports alpha, beta, and latest tags

**Environment Variables:**
- `TAG`: npm tag for publishing (alpha, beta, latest)

#### `build-update-publish`
Complete build, update, and publish workflow.

```bash
nx run tools:build-update-publish
```

**Process:**
1. Builds the target library
2. Updates package.json versions
3. Publishes to npm registry
4. Handles error scenarios

## Development Workflows

### Adding New UI Components

1. **Create Secondary Entrypoint:**
   ```bash
   nx g grg-ui-ui/tools:helm-secondary-entrypoint --name=new-component --generate=component --story=true --documentation=true
   ```

2. **Generate CLI Integration:**
   ```bash
   nx g grg-ui-ui/tools:hlm-to-cli-generator
   ```

3. **Update Documentation:**
   ```bash
   nx run tools:generate-ui-docs
   ```

### Release Process

1. **Update Versions:**
   ```bash
   # For nightly releases
   nx g grg-ui-ui/tools:auto-increment-version
   
   # For manual releases
   nx g grg-ui-ui/tools:replace-ui-version
   nx g grg-ui-ui/tools:replace-cli-version
   ```

2. **Generate CLI Generators:**
   ```bash
   nx g grg-ui-ui/tools:hlm-to-cli-generator
   ```

3. **Build and Publish:**
   ```bash
   nx run-many --target=build --projects=tag:scope:core,tag:scope:brain
   nx run-many --target=release --projects=tag:scope:core,tag:scope:brain --parallel=1
   ```

### Documentation Updates

1. **Generate Code Snippets:**
   ```bash
   nx g grg-ui-ui/tools:generate-primitive-snippets
   ```

2. **Update API Documentation:**
   ```bash
   nx run tools:generate-ui-docs
   ```

3. **Verify Documentation:**
   ```bash
   npm test -- libs/tools/src/executors/docs/generate-ui-docs/executor.spec.ts --updateSnapshot
   ```

## Usage Examples

### Creating a New Button Variant

```bash
# 1. Create the secondary entrypoint with component and story
nx g grg-ui-ui/tools:helm-secondary-entrypoint \
  --name=button-variant \
  --generate=component \
  --story=true \
  --documentation=true \
  --description="A specialized button variant component"

# 2. Update CLI generators
nx g grg-ui-ui/tools:hlm-to-cli-generator

# 3. Generate documentation
nx run tools:generate-ui-docs
```

### Adding a New Directive

```bash
# 1. Create secondary entrypoint with directive
nx g grg-ui-ui/tools:helm-secondary-entrypoint \
  --name=highlight \
  --generate=directive \
  --story=true

# 2. Update CLI integration
nx g grg-ui-ui/tools:hlm-to-cli-generator
```

### Preparing a Release

```bash
# 1. Update all versions
nx g grg-ui-ui/tools:replace-ui-version
nx g grg-ui-ui/tools:replace-cli-version

# 2. Update CLI generators
nx g grg-ui-ui/tools:hlm-to-cli-generator

# 3. Format and lint
pnpm run format
nx run tools:lint --fix

# 4. Build and publish
pnpm run release
```

## API Reference

### Generator Schemas

#### HelmSecondaryEntrypointGeneratorSchema
```typescript
interface HelmSecondaryEntrypointGeneratorSchema {
  name: string;                    // Entrypoint name
  generate?: 'component' | 'directive'; // Type to generate
  story?: boolean;                 // Generate Storybook story
  documentation?: boolean;         // Generate documentation
  description?: string;            // Component description
}
```

#### HelmComponentGeneratorSchema
```typescript
interface HelmComponentGeneratorSchema {
  componentName: string;           // Component name
  entrypoint: string;             // Target entrypoint
}
```

#### HelmDirectiveGeneratorSchema
```typescript
interface HelmDirectiveGeneratorSchema {
  directiveName: string;          // Directive name
  entrypoint: string;             // Target entrypoint
}
```

### Executor Schemas

#### GenerateUiDocsExecutorSchema
```typescript
interface GenerateUiDocsExecutorSchema {
  brainDir: string;               // Brain libraries directory
  helmDir: string;                // Helm libraries directory
  outputDir: string;              // Output directory
  outputFile: string;             // Output filename
}
```

#### NpmPublishExecutorSchema
```typescript
interface NpmPublishExecutorSchema {
  // Uses environment variables for configuration
}
```

### Utility Functions

#### AST Utilities (`utils/ast.ts`)
```typescript
// Add import statement to source code
function addImportStatement(sourceCode: string, importStatement: string): string;

// Add export statement to source code
function addExportStatement(sourceCode: string, exportStatement: string): string;

// Add item to export const array
function addToExportConstArray(sourceCode: string, itemName: string): string;
```

#### File Management Utilities
```typescript
// Recursively find files in directory
function recursivelyFindFiles(tree: Tree, directory: string): string[];

// Copy files with transformations
function copyFilesFromHlmLibToGenerator(
  tree: Tree, 
  srcPath: string, 
  destPath: string, 
  options: any
): void;

// Delete directory recursively
function recursivelyDelete(tree: Tree, directory: string): void;
```

## Best Practices

### Generator Development

1. **Use TypeScript AST**: Leverage ts-morph for reliable code transformations
2. **Validate Inputs**: Always validate generator options and file existence
3. **Format Output**: Use `formatFiles(tree)` to ensure consistent formatting
4. **Handle Errors**: Provide meaningful error messages and graceful failures
5. **Test Thoroughly**: Write comprehensive tests for all generator scenarios

### Executor Development

1. **Environment Awareness**: Use environment variables for configuration
2. **Error Handling**: Implement proper error handling and logging
3. **Path Resolution**: Use absolute paths and proper path joining
4. **Resource Cleanup**: Clean up temporary files and resources
5. **Progress Reporting**: Provide clear progress and status updates

### Code Quality

1. **Follow Conventions**: Use established naming and structure patterns
2. **Document APIs**: Provide clear JSDoc comments for public APIs
3. **Type Safety**: Use strict TypeScript types and interfaces
4. **Modular Design**: Keep generators and executors focused and modular
5. **Performance**: Optimize file operations and AST parsing

## Troubleshooting

### Common Issues

#### Generator Failures
```bash
Error: Cannot find entrypoint directory
```
**Solution:** Ensure the target entrypoint exists before running generators.

#### AST Parsing Errors
```bash
Error: Unable to parse TypeScript file
```
**Solution:** Check file syntax and ensure valid TypeScript code.

#### Version Update Failures
```bash
Error: Package.json not found
```
**Solution:** Verify workspace structure and package.json locations.

#### Documentation Generation Issues
```bash
Error: No components found in directory
```
**Solution:** Ensure components have proper decorators and are exported.

### Debug Mode

Enable verbose logging for generators:
```bash
nx g grg-ui-ui/tools:helm-component --componentName=test --entrypoint=test --verbose
```

Enable debug output for executors:
```bash
nx run tools:generate-ui-docs --verbose
```

### Performance Optimization

1. **Limit AST Parsing**: Only parse necessary files
2. **Cache Results**: Cache expensive operations when possible
3. **Batch Operations**: Group file operations together
4. **Use Streaming**: Stream large file operations
5. **Monitor Memory**: Watch memory usage during large operations

## Contributing

### Adding New Generators

1. Create generator directory in `src/generators/`
2. Implement generator function with proper schema
3. Add schema.json file with options definition
4. Update `generators.json` with new generator entry
5. Write comprehensive tests
6. Update documentation

### Adding New Executors

1. Create executor directory in `src/executors/`
2. Implement executor function with proper schema
3. Add schema.json file with options definition
4. Update `executors.json` with new executor entry
5. Write comprehensive tests
6. Update documentation

### Testing

```bash
# Run all tests
nx test tools

# Run specific test file
nx test tools --testFile=generator.spec.ts

# Update snapshots
nx test tools --updateSnapshot
```

### Code Style

Follow the established patterns:
- Use TypeScript strict mode
- Implement proper error handling
- Add JSDoc comments for public APIs
- Use consistent naming conventions
- Format code with Prettier

## Dependencies

### Core Dependencies
- `@nx/devkit` - Nx development kit for generators and executors
- `@nx/angular` - Angular-specific Nx utilities
- `ts-morph` - TypeScript compiler API wrapper
- `typescript` - TypeScript compiler

### Utility Dependencies
- `@phenomnomnominal/tsquery` - TypeScript AST querying
- `enquirer` - Interactive CLI prompts
- `jsonc-eslint-parser` - JSON with comments parsing
- `process` - Node.js process utilities

## License

MIT License - see the [LICENSE](../../LICENSE) file for details.

## Support

- [GitHub Issues](https://github.com/goetzrobin/grg-ui/issues)
- [Discord Community](https://discord.gg/EqHnxQ4uQr)
- [Documentation](https://grg-ui.ng)

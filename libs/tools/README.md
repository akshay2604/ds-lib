# @spartan-ng/tools

Internal development toolkit for the Spartan UI library ecosystem. Provides generators and executors for automating development workflows, managing releases, and maintaining codebase structure.

## Quick Start

```bash
# Create new Helm component with story and docs
nx g @spartan-ng/tools:helm-secondary-entrypoint --name=button --generate=component --story=true --documentation=true

# Generate CLI generators from Helm libraries
nx g @spartan-ng/tools:hlm-to-cli-generator

# Generate API documentation
nx run tools:generate-ui-docs

# Extract code snippets for documentation
nx g @spartan-ng/tools:generate-primitive-snippets
```

## Features

- 🏗️ **Component Generation** - Create Helm components and directives with proper scaffolding
- 📚 **Documentation Automation** - Generate API docs and Storybook stories
- 🔄 **CLI Integration** - Convert Helm libraries to CLI generators automatically
- 📦 **Release Management** - Automated version updates and npm publishing
- 🎯 **Code Extraction** - Extract clean code snippets from examples
- 🔧 **AST Processing** - TypeScript AST-based code transformations

## Available Tools

### Generators
- `helm-secondary-entrypoint` - Create new Helm library entrypoints
- `helm-component` - Generate Helm components
- `helm-directive` - Generate Helm directives
- `helm-story` - Generate Storybook stories
- `helm-documentation` - Generate documentation pages
- `hlm-to-cli-generator` - Convert Helm libs to CLI generators
- `generate-primitive-snippets` - Extract code snippets
- `auto-increment-version` - Auto-increment versions for nightly releases
- `replace-ui-version` - Update UI library versions
- `replace-cli-version` - Update CLI version

### Executors
- `generate-ui-docs` - Generate comprehensive API documentation
- `npm-publish` - Publish packages to npm
- `build-update-publish` - Complete build and publish workflow

## Documentation

For comprehensive documentation, see [TOOLS_DOCUMENTATION.md](./TOOLS_DOCUMENTATION.md)

## Building

Run `nx build tools` to build the library.

## Testing

Run `nx test tools` to execute the unit tests via [Jest](https://jestjs.io).

## Contributing

See the main [CONTRIBUTING.md](../../CONTRIBUTING.md) for contribution guidelines.

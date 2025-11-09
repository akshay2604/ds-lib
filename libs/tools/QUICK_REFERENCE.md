# Spartan Tools Quick Reference

## Component Development

### Create New UI Component

```bash
# Complete component with story and documentation
nx g grg-ui-ui/tools:helm-secondary-entrypoint \
  --name=my-component \
  --generate=component \
  --story=true \
  --documentation=true \
  --description="My awesome component"

# Component only
nx g grg-ui-ui/tools:helm-secondary-entrypoint \
  --name=my-component \
  --generate=component
```

### Create New Directive

```bash
# Complete directive with story
nx g grg-ui-ui/tools:helm-secondary-entrypoint \
  --name=my-directive \
  --generate=directive \
  --story=true

# Directive only
nx g grg-ui-ui/tools:helm-directive \
  --directiveName=my-directive \
  --entrypoint=existing-entrypoint
```

### Add Component to Existing Entrypoint

```bash
# Add component to existing entrypoint
nx g grg-ui-ui/tools:helm-component \
  --componentName=additional-component \
  --entrypoint=existing-entrypoint

# Add directive to existing entrypoint
nx g grg-ui-ui/tools:helm-directive \
  --directiveName=additional-directive \
  --entrypoint=existing-entrypoint
```

## Documentation & Stories

### Generate Storybook Story

```bash
nx g grg-ui-ui/tools:helm-story \
  --entrypoint=button \
  --componentName=HlmButton
```

### Generate Documentation Page

```bash
nx g grg-ui-ui/tools:helm-documentation \
  --name=button \
  --description="Interactive button component with multiple variants"
```

### Extract Code Snippets

```bash
# Extract all primitive code snippets for documentation
nx g grg-ui-ui/tools:generate-primitive-snippets
```

### Generate API Documentation

```bash
# Generate comprehensive API docs
nx run tools:generate-ui-docs

# With custom configuration
nx run tools:generate-ui-docs \
  --brainDir=libs/brain \
  --helmDir=libs/helm \
  --outputDir=apps/app/src/public/data \
  --outputFile=ui-docs.json
```

## CLI Integration

### Convert Helm Libraries to CLI Generators

```bash
# Convert all Helm entrypoints to CLI generators
nx g grg-ui-ui/tools:hlm-to-cli-generator

# This automatically:
# - Scans all Helm library entrypoints
# - Detects peer dependencies
# - Creates CLI generators
# - Updates supported-ui-libraries.json
```

## Version Management

### Auto-Increment Version (Nightly)

```bash
# Automatically increment version for nightly releases
nx g grg-ui-ui/tools:auto-increment-version
```

### Update UI Library Versions

```bash
# Update versions across all UI libraries and CLI references
nx g grg-ui-ui/tools:replace-ui-version
```

### Update CLI Version

```bash
# Update CLI package version
nx g grg-ui-ui/tools:replace-cli-version
```

## Release Management

### Publish to NPM

```bash
# Set environment variable for tag
export TAG=alpha  # or beta, latest

# Publish package
nx run tools:npm-publish
```

### Complete Build and Publish

```bash
# Full build, update, and publish workflow
nx run tools:build-update-publish
```

## Development Workflows

### Complete New Component Workflow

```bash
# 1. Create component with all scaffolding
nx g grg-ui-ui/tools:helm-secondary-entrypoint \
  --name=new-component \
  --generate=component \
  --story=true \
  --documentation=true \
  --description="Description of the new component"

# 2. Update CLI generators
nx g grg-ui-ui/tools:hlm-to-cli-generator

# 3. Generate API documentation
nx run tools:generate-ui-docs

# 4. Extract code snippets
nx g grg-ui-ui/tools:generate-primitive-snippets
```

### Pre-Release Workflow

```bash
# 1. Update all versions
nx g grg-ui-ui/tools:replace-ui-version
nx g grg-ui-ui/tools:replace-cli-version

# 2. Update CLI generators
nx g grg-ui-ui/tools:hlm-to-cli-generator

# 3. Format and lint
pnpm run format
nx run tools:lint --fix

# 4. Generate documentation
nx run tools:generate-ui-docs
nx g grg-ui-ui/tools:generate-primitive-snippets
```

### Nightly Release Workflow

```bash
# 1. Auto-increment versions
nx g grg-ui-ui/tools:auto-increment-version

# 2. Update CLI generators
nx g grg-ui-ui/tools:hlm-to-cli-generator

# 3. Format and lint
pnpm run format
nx run tools:lint --fix

# 4. Build and publish
pnpm run release
```

## Common Options

### Generator Options

```bash
# Common options for all generators
--dry-run              # Preview changes without applying
--verbose              # Enable verbose logging
--help                 # Show help for specific generator
```

### Helm Secondary Entrypoint Options

```bash
--name=<string>                    # Required: Entrypoint name
--generate=component|directive     # Type to generate (default: component)
--story=true|false                # Generate Storybook story (default: false)
--documentation=true|false        # Generate documentation (default: false)
--description=<string>            # Description for documentation
```

### Component/Directive Options

```bash
--componentName=<string>          # Component name
--directiveName=<string>          # Directive name
--entrypoint=<string>            # Target entrypoint
```

## File Locations

### Generated Files

```
# Helm component structure
libs/helm/{entrypoint}/
├── src/
│   ├── index.ts                 # Exports
│   └── lib/
│       ├── hlm-{name}.component.ts
│       ├── hlm-{name}.component.html
│       └── hlm-{name}.component.css
├── ng-package.json
└── package.json

# CLI generator structure
libs/cli/src/generators/ui/libs/{entrypoint}/
├── generator.ts                 # Generator implementation
└── files/                      # Template files
    └── **/*                    # Copied from Helm library

# Documentation files
apps/app/src/app/pages/(components)/components/({name})/
├── {name}.page.ts              # Documentation page
├── {name}.preview.ts           # Preview component
└── {name}.example.ts           # Example component

# Storybook files
libs/ui-storybook/src/lib/{entrypoint}/
└── {entrypoint}.stories.ts     # Story file
```

### Configuration Files

```
# Supported UI libraries
libs/cli/src/generators/ui/supported-ui-libraries.json

# API documentation output
apps/app/src/public/data/ui-docs.json

# Code snippets output
apps/app/src/public/data/primitives-snippets.json
```

## Troubleshooting

### Common Issues

**Generator fails with "entrypoint not found":**
```bash
# Ensure the entrypoint directory exists
ls libs/helm/{entrypoint}
```

**CLI generator not created:**
```bash
# Run the hlm-to-cli-generator after creating components
nx g grg-ui-ui/tools:hlm-to-cli-generator
```

**Documentation not generated:**
```bash
# Ensure components have proper decorators
# Check that files are in correct locations
nx run tools:generate-ui-docs --verbose
```

**Version update fails:**
```bash
# Check package.json files exist
# Ensure workspace structure is correct
find . -name "package.json" -type f
```

### Debug Commands

```bash
# Verbose output for generators
nx g grg-ui-ui/tools:helm-component --componentName=test --entrypoint=test --verbose

# Dry run to preview changes
nx g grg-ui-ui/tools:helm-secondary-entrypoint --name=test --dry-run

# Check executor configuration
nx show project tools --web
```

### Validation

```bash
# Verify generated files
ls -la libs/helm/{entrypoint}/src/lib/

# Check exports
cat libs/helm/{entrypoint}/src/index.ts

# Verify CLI generator
ls -la libs/cli/src/generators/ui/libs/{entrypoint}/

# Test generated component
nx build helm
```

## Best Practices

1. **Always run hlm-to-cli-generator** after creating new components
2. **Use descriptive names** for components and entrypoints
3. **Generate stories and documentation** for public components
4. **Test generated code** before committing
5. **Update API docs** after making changes
6. **Follow naming conventions** (kebab-case for entrypoints, PascalCase for components)
7. **Use dry-run** to preview changes first
8. **Keep descriptions meaningful** for documentation

## Support

- [GitHub Issues](https://github.com/goetzrobin/grg-ui/issues)
- [Discord Community](https://discord.gg/EqHnxQ4uQr)
- [Documentation](https://grg-ui.ng)

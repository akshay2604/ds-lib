# Spartan CLI Quick Reference

## Installation & Setup

```bash
# Install the CLI
npm install @spartan-ng/cli

# First run creates components.json config
nx g @spartan-ng/cli:ui
```

## Common Commands

### Generate UI Components

```bash
# Interactive component selection
nx g @spartan-ng/cli:ui

# Generate specific component
nx g @spartan-ng/cli:ui button
nx g @spartan-ng/cli:ui dialog
nx g @spartan-ng/cli:ui table

# Generate all components
nx g @spartan-ng/cli:ui --name=all

# Custom directory
nx g @spartan-ng/cli:ui --directory=src/components
```

### Theme Management

```bash
# Add theme to application
nx g @spartan-ng/cli:ui-theme

# With custom prefix
nx g @spartan-ng/cli:ui-theme --prefix=dark

# Specify styles entry point
nx g @spartan-ng/cli:ui-theme --stylesEntryPoint=src/styles.css
```

### Health Check & Diagnostics

```bash
# Run project health check
nx g @spartan-ng/cli:healthcheck

# Check specific areas
nx g @spartan-ng/cli:healthcheck --focus=imports
nx g @spartan-ng/cli:healthcheck --focus=dependencies
```

## Migration Commands

### Import Migrations
```bash
# Update Brain imports to secondary entrypoints
nx g @spartan-ng/cli:migrate-brain-imports

# Update Helm imports structure
nx g @spartan-ng/cli:migrate-helm-imports

# Convert module imports to const imports
nx g @spartan-ng/cli:migrate-module-imports

# Migrate hlm imports
nx g @spartan-ng/cli:migrate-hlm
```

### Component Migrations
```bash
# Update checkbox event handling
nx g @spartan-ng/cli:migrate-brn-checkbox-changed-event

# Update switch event handling
nx g @spartan-ng/cli:migrate-brn-switch-changed-event

# Migrate progress components
nx g @spartan-ng/cli:migrate-progress

# Migrate radio components
nx g @spartan-ng/cli:migrate-radio

# Migrate separator components
nx g @spartan-ng/cli:migrate-separator

# Update select components
nx g @spartan-ng/cli:migrate-select
```

### Library Migrations
```bash
# Migrate core library
nx g @spartan-ng/cli:migrate-core

# Update Helm libraries
nx g @spartan-ng/cli:migrate-helm-libraries

# Migrate icon components
nx g @spartan-ng/cli:migrate-icon

# Migrate scroll area
nx g @spartan-ng/cli:migrate-scroll-area

# Update naming conventions
nx g @spartan-ng/cli:migrate-naming-conventions
```

## Configuration Options

### components.json
```json
{
  "componentsPath": "libs/ui",        // Where to place components
  "buildable": true,                  // Make libraries buildable
  "generateAs": "library",            // "library" or "entrypoint"
  "importAlias": "@spartan-ng/helm"   // Import alias prefix
}
```

### Generator Options
```bash
# Common options for all generators
--directory=<path>          # Custom output directory
--tags=<tags>              # Add tags to generated libraries
--rootProject             # Generate in root project
--buildable=true|false    # Override buildable setting
--generateAs=library|entrypoint  # Override generation pattern
--importAlias=<alias>     # Override import alias
```

## Available UI Components

### Layout & Structure
- `accordion` - Collapsible content sections
- `card` - Content containers
- `separator` - Visual dividers
- `sheet` - Slide-out panels
- `sidebar` - Navigation sidebars
- `resizable` - Resizable panels

### Forms & Inputs
- `button` - Interactive buttons
- `button-group` - Grouped buttons
- `checkbox` - Checkboxes
- `input` - Text inputs
- `input-group` - Grouped inputs
- `input-otp` - OTP input fields
- `textarea` - Multi-line text inputs
- `select` - Dropdown selections
- `switch` - Toggle switches
- `slider` - Range sliders
- `radio-group` - Radio button groups
- `form-field` - Form field wrapper
- `field` - Advanced form fields

### Navigation
- `breadcrumb` - Navigation breadcrumbs
- `menu` - Context menus
- `navigation-menu` - Main navigation
- `pagination` - Page navigation
- `tabs` - Tabbed interfaces

### Feedback & Overlays
- `alert` - Alert messages
- `alert-dialog` - Modal alerts
- `dialog` - Modal dialogs
- `popover` - Floating content
- `tooltip` - Hover tooltips
- `hover-card` - Hover cards
- `sonner` - Toast notifications

### Data Display
- `avatar` - User avatars
- `badge` - Status badges
- `table` - Data tables
- `typography` - Text styling
- `skeleton` - Loading placeholders
- `progress` - Progress indicators
- `spinner` - Loading spinners
- `empty` - Empty states

### Media & Content
- `aspect-ratio` - Aspect ratio containers
- `carousel` - Image/content carousels
- `scroll-area` - Custom scrollbars

### Utilities
- `icon` - Icon components
- `kbd` - Keyboard shortcuts
- `label` - Form labels
- `toggle` - Toggle buttons
- `toggle-group` - Toggle groups
- `utils` - Utility functions

### Advanced Components
- `autocomplete` - Autocomplete inputs
- `calendar` - Date calendars
- `command` - Command palettes
- `date-picker` - Date pickers
- `item` - List items

## Troubleshooting

### Common Issues

**Configuration not found:**
```bash
# Run any generator to create config
nx g @spartan-ng/cli:ui
```

**Import resolution issues:**
```bash
# Check tsconfig.base.json paths
# Ensure importAlias matches your setup
```

**Dependency conflicts:**
```bash
# Check Angular/CDK version compatibility
# Run health check for diagnostics
nx g @spartan-ng/cli:healthcheck
```

**Migration failures:**
```bash
# Run migrations one at a time
# Check for manual intervention needed
# Backup your code before migrations
```

### Debug Mode
```bash
# Enable verbose logging
nx g @spartan-ng/cli:ui --verbose

# Dry run (preview changes)
nx g @spartan-ng/cli:ui --dry-run
```

## Best Practices

1. **Always run health check** before major migrations
2. **Use version control** before running migrations
3. **Test components** after generation
4. **Configure themes early** in project setup
5. **Use consistent directory structure** across projects
6. **Keep dependencies updated** for best compatibility

## Support

- [GitHub Issues](https://github.com/goetzrobin/spartan/issues)
- [Discord Community](https://discord.gg/EqHnxQ4uQr)
- [Documentation](https://spartan.ng)

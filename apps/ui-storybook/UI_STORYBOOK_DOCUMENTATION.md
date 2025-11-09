# UI Storybook Documentation

## Overview

The `ui-storybook` application is a comprehensive Storybook implementation that showcases all components from the `grg-ui-ui/helm` design system. It serves as both a development tool for component testing and a living documentation system for the Spartan Angular UI library. This Storybook instance provides an interactive playground where developers can explore, test, and understand the behavior of all available components.

## Architecture

### Project Structure

```
apps/ui-storybook/
├── .storybook/                 # Storybook configuration
│   ├── files/                  # Font assets (Geist & Geist Mono)
│   ├── main.js                 # Main Storybook configuration
│   ├── preview.js              # Global decorators and parameters
│   ├── tailwind.css            # Compiled Tailwind CSS styles
│   └── tsconfig.json           # TypeScript configuration
├── public/                     # Static assets
│   └── mountains.jpg           # Sample image for stories
├── src/                        # Source files
│   └── index.ts                # Entry point
├── stories/                    # Story definitions (52+ files)
│   ├── accordion.stories.ts
│   ├── alert.stories.ts
│   ├── button.stories.ts
│   └── ... (49+ more stories)
├── postcss.config.js           # PostCSS configuration
├── project.json                # Nx project configuration
└── README.md                   # Basic project information
```

### Project Configuration

- **Project Name**: `ui-storybook`
- **Project Type**: Library (Storybook application)
- **Source Root**: `apps/ui-storybook/src`
- **Prefix**: `grg-ui`
- **Port**: `4400`
- **Build System**: Nx with Storybook Angular

## Storybook Configuration

### Main Configuration (`main.js`)

The Storybook configuration includes:

- **Stories Pattern**: `../**/*.@(mdx|stories.@(js|jsx|ts|tsx))`
- **Framework**: `@storybook/angular`
- **Essential Addons**:
  - `@storybook/addon-essentials` - Core Storybook functionality
  - `@storybook/addon-a11y` - Accessibility testing and validation
  - `@storybook/addon-themes` - Theme switching capabilities
- **Static Directory**: `../public` for static assets
- **Auto-generated Documentation**: Enabled

### Preview Configuration (`preview.js`)

Global settings and decorators:

- **Theme Support**: Light and dark theme switching
- **Default Theme**: Light mode
- **Story Sorting**: Alphabetical organization
- **Auto-documentation**: Enabled for all stories
- **Accessibility**: Built-in a11y addon integration

### Styling Integration

- **Tailwind CSS**: Pre-compiled styles from the main app
- **Font Loading**: Geist and Geist Mono fonts (100-900 weights)
- **Theme Variables**: CSS custom properties for consistent theming
- **Responsive Design**: Mobile-first approach with Tailwind utilities

## Component Stories

The Storybook includes **52+ comprehensive stories** covering all Helm components:

### Layout & Structure Components
- **Accordion** - Collapsible content panels with expand/collapse functionality
- **Aspect Ratio** - Maintain consistent aspect ratios for media content
- **Card** - Content containers with header, body, and footer sections
- **Resizable** - User-resizable panel components with drag handles
- **Scroll Area** - Custom-styled scrollable areas with enhanced UX
- **Separator** - Visual content dividers and section breaks
- **Sheet** - Slide-out panels and drawer components
- **Sidebar** - Navigation sidebars with collapsible functionality

### Form & Input Components
- **Button** - Interactive buttons with multiple variants and sizes
- **Button Group** - Grouped button controls with unified styling
- **Checkbox** - Boolean selection controls with indeterminate state
- **Field** - Form field wrapper components with validation
- **Form Field** - Enhanced form input wrappers with labels and help text
- **Input** - Text input fields with various types and validation states
- **Input Group** - Grouped input controls with addons and prefixes
- **Input OTP** - One-time password input with auto-focus progression
- **Label** - Accessible form labels with proper associations
- **Radio Group** - Single-selection radio button groups
- **Select** - Dropdown selection controls with search and multi-select
- **Slider** - Range input controls with custom styling
- **Switch** - Toggle switch controls with smooth animations
- **Textarea** - Multi-line text input areas with auto-resize
- **Toggle** - Toggle button controls with pressed states
- **Toggle Group** - Grouped toggle controls with single/multiple selection

### Navigation Components
- **Breadcrumb** - Hierarchical navigation breadcrumbs
- **Navigation Menu** - Site navigation with dropdown and mega-menu support
- **Pagination** - Page navigation controls with customizable ranges
- **Tabs** - Tabbed interface components with keyboard navigation

### Data Display Components
- **Avatar** - User profile images with fallbacks and status indicators
- **Badge** - Status and category indicators with color variants
- **Calendar** - Date selection and navigation with locale support
- **Date Picker** - Single date selection with calendar popup
- **Date Picker Multi** - Multiple date selection capabilities
- **Date Range Picker** - Date range selection with start/end dates
- **Empty** - Empty state components with illustrations and actions
- **Icon** - Icon display components with Lucide icon integration
- **Item** - Reusable list and menu items with consistent styling
- **Kbd** - Keyboard shortcut indicators with platform detection
- **Progress** - Progress indicators and loading bars
- **Skeleton** - Loading placeholder components with animation
- **Spinner** - Loading indicators with various sizes and styles
- **Table** - Data tables with sorting, filtering, and pagination
- **Typography** - Text and heading components with consistent styling

### Interactive & Feedback Components
- **Alert** - Notification and status messages with severity levels
- **Alert Dialog** - Modal alert dialogs with confirm/cancel actions
- **Carousel** - Image and content carousels with navigation controls
- **Collapsible** - Expandable/collapsible content sections
- **Combobox** - Searchable dropdown with autocomplete functionality
- **Command** - Command palette interface with keyboard shortcuts
- **Context Menu** - Right-click context menus with nested items
- **Dialog** - General-purpose modal dialogs with overlay
- **Dropdown Menu** - Context and action menus with keyboard navigation
- **Dropdown Menu Bar** - Menu bar with dropdown submenus
- **Hover Card** - Rich hover information cards with positioning
- **Menu** - Context and dropdown menus with icons and shortcuts
- **Popover** - Floating content containers with smart positioning
- **Sonner** - Toast notification system with queue management
- **Tooltip** - Contextual help and information with smart positioning

## Development Workflow

### Prerequisites

Ensure you have the following installed:
- Node.js (version specified in `.node-version`)
- pnpm package manager
- Angular CLI (compatible with Angular 19+)

### Setup and Installation

```bash
# Install dependencies (from project root)
pnpm install

# Generate Tailwind CSS (automatic with storybook command)
nx run ui-storybook:pre-tailwind
```

### Running Storybook

```bash
# Start Storybook development server
nx storybook ui-storybook
# or
pnpm storybook

# Storybook will be available at http://localhost:4400
```

### Building Storybook

```bash
# Build static Storybook for deployment
nx build-storybook ui-storybook
# or
pnpm build-storybook

# Output will be in dist/storybook/ui-storybook/
```

### Serving Built Storybook

```bash
# Serve the built static files
nx static-storybook ui-storybook

# Useful for testing the production build locally
```

## Story Development

### Creating New Stories

When adding new components to the Helm library, follow this pattern for creating stories:

```typescript
// Example: new-component.stories.ts
import { HlmNewComponent } from 'grg-ui-ui/helm/new-component';
import { type Meta, type StoryObj, argsToTemplate, moduleMetadata } from '@storybook/angular';

const meta: Meta<HlmNewComponent> = {
  title: 'New Component',
  component: HlmNewComponent,
  tags: ['autodocs'],
  args: {
    variant: 'default',
    size: 'default',
  },
  argTypes: {
    variant: {
      options: ['default', 'secondary', 'outline'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'default', 'lg'],
      control: { type: 'select' },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [HlmNewComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<HlmNewComponent>;

export const Default: Story = {
  render: ({ ...args }) => ({
    props: args,
    template: `<hlm-new-component ${argsToTemplate(args)}>Content</hlm-new-component>`,
  }),
};

export const Variants: Story = {
  render: () => ({
    template: `
      <div class="flex gap-4">
        <hlm-new-component variant="default">Default</hlm-new-component>
        <hlm-new-component variant="secondary">Secondary</hlm-new-component>
        <hlm-new-component variant="outline">Outline</hlm-new-component>
      </div>
    `,
  }),
};
```

### Story Best Practices

1. **Comprehensive Coverage**: Include all component variants and states
2. **Interactive Controls**: Use Storybook controls for dynamic property testing
3. **Accessibility**: Ensure all stories pass a11y addon checks
4. **Documentation**: Use JSDoc comments for component properties
5. **Real-world Examples**: Show practical usage scenarios
6. **Responsive Testing**: Include mobile and desktop viewports

### Story Categories

Stories are organized alphabetically and include:

- **Basic Usage**: Default component state and common configurations
- **Variants**: All available style variants (size, color, state)
- **Interactive States**: Hover, focus, active, disabled states
- **Complex Examples**: Real-world usage patterns and compositions
- **Accessibility**: Screen reader and keyboard navigation examples

## Theming and Customization

### Theme Integration

The Storybook supports both light and dark themes:

```javascript
// Automatic theme switching in preview.js
export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];
```

### CSS Custom Properties

All components use CSS custom properties for theming:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... additional theme variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 47.4% 11.2%;
  /* ... dark theme overrides */
}
```

### Font Integration

The Storybook includes Geist font family:

- **Geist**: Primary UI font (100-900 weights)
- **Geist Mono**: Code and monospace content (100-900 weights)
- **Format**: WOFF2 and WOFF for optimal loading

## Build Process

### Nx Targets

The project includes several Nx targets:

```json
{
  "pre-tailwind": {
    "executor": "nx:run-commands",
    "options": {
      "command": "npx @tailwindcss/cli -i ./apps/app/src/styles.css -o ./apps/ui-storybook/.storybook/tailwind.css --minify"
    }
  },
  "storybook": {
    "executor": "@storybook/angular:start-storybook",
    "dependsOn": ["pre-tailwind"],
    "options": {
      "port": 4400,
      "configDir": "apps/ui-storybook/.storybook"
    }
  },
  "build-storybook": {
    "executor": "@storybook/angular:build-storybook",
    "dependsOn": ["pre-tailwind"],
    "options": {
      "outputDir": "dist/storybook/ui-storybook"
    }
  }
}
```

### Dependency Chain

1. **pre-tailwind**: Compiles Tailwind CSS from the main app
2. **storybook**: Starts development server (depends on pre-tailwind)
3. **build-storybook**: Creates production build (depends on pre-tailwind)
4. **static-storybook**: Serves the built static files

## Deployment

### Chromatic Integration

The project is integrated with Chromatic for visual regression testing:

```bash
# Deploy to Chromatic for visual testing
pnpm chromatic
# or
nx run ui-storybook:chromatic
```

### Static Deployment

The built Storybook can be deployed to any static hosting service:

```bash
# Build for production
nx build-storybook ui-storybook

# Deploy the dist/storybook/ui-storybook/ directory
# to your preferred hosting service (Netlify, Vercel, etc.)
```

### CI/CD Integration

The project includes CI configurations for:

- **GitHub Actions**: Automated builds and deployments
- **Chromatic**: Visual regression testing on pull requests
- **Quality Checks**: Accessibility and performance testing

## Testing and Quality Assurance

### Accessibility Testing

Every story includes accessibility testing through the a11y addon:

- **WCAG Compliance**: Automated checks for WCAG 2.1 guidelines
- **Color Contrast**: Verification of sufficient color contrast ratios
- **Keyboard Navigation**: Testing of keyboard accessibility
- **Screen Reader**: ARIA attributes and semantic HTML validation

### Visual Regression Testing

Chromatic provides visual regression testing:

- **Snapshot Comparison**: Pixel-perfect comparisons across builds
- **Cross-browser Testing**: Consistent rendering across browsers
- **Responsive Testing**: Multiple viewport sizes and orientations
- **Theme Testing**: Both light and dark theme variations

### Performance Monitoring

- **Bundle Size**: Monitoring of JavaScript bundle sizes
- **Loading Performance**: Measuring story load times
- **Runtime Performance**: Component rendering performance
- **Memory Usage**: Memory leak detection and optimization

## Maintenance and Updates

### Adding New Components

When new components are added to the Helm library:

1. **Create Story File**: Follow the established naming convention
2. **Include All Variants**: Document all component variants and states
3. **Add Controls**: Implement Storybook controls for interactive testing
4. **Test Accessibility**: Ensure a11y addon passes all checks
5. **Update Documentation**: Include usage examples and best practices

### Updating Existing Stories

When updating component stories:

1. **Maintain Backward Compatibility**: Avoid breaking existing story URLs
2. **Update Controls**: Reflect new component properties and variants
3. **Test Thoroughly**: Verify all stories render correctly
4. **Update Documentation**: Keep inline documentation current

### Version Management

The Storybook version should align with the Helm library version:

- **Semantic Versioning**: Follow semver for story updates
- **Changelog**: Document significant changes to stories
- **Migration Guides**: Provide guidance for breaking changes

## Troubleshooting

### Common Issues

**Storybook Won't Start**
```bash
# Clear Nx cache and reinstall dependencies
nx reset
pnpm install
nx storybook ui-storybook
```

**Tailwind Styles Not Loading**
```bash
# Manually run pre-tailwind target
nx run ui-storybook:pre-tailwind
```

**Story Not Rendering**
- Check component imports in the story file
- Verify component is properly exported from Helm library
- Ensure all required dependencies are imported

**Theme Not Switching**
- Verify theme decorator is properly configured
- Check CSS custom properties are defined
- Ensure theme classes are applied to story container

### Performance Issues

**Slow Story Loading**
- Reduce the number of stories loaded simultaneously
- Optimize component imports (use specific imports)
- Consider lazy loading for complex stories

**Memory Leaks**
- Check for unsubscribed observables in components
- Verify proper cleanup in component lifecycle hooks
- Use Chrome DevTools to identify memory issues

## Contributing

### Story Contribution Guidelines

1. **Follow Conventions**: Use established patterns for story structure
2. **Include Documentation**: Add comprehensive JSDoc comments
3. **Test Accessibility**: Ensure all stories pass a11y checks
4. **Provide Examples**: Include practical usage scenarios
5. **Update Tests**: Add or update relevant tests

### Code Review Process

1. **Story Review**: Verify story completeness and accuracy
2. **Accessibility Review**: Check a11y addon results
3. **Visual Review**: Review Chromatic visual tests
4. **Documentation Review**: Ensure clear and helpful documentation

### Release Process

1. **Update Stories**: Ensure all stories reflect current component state
2. **Test Build**: Verify production build works correctly
3. **Deploy Chromatic**: Update visual baselines if needed
4. **Update Documentation**: Keep this documentation current

---

*This documentation is maintained by the Spartan team. For the latest updates and component-specific documentation, visit the Storybook instance at http://localhost:4400 or the deployed version.*

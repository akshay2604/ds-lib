# grg-ui-ui/brain Documentation

## Overview

The `grg-ui-ui/brain` library is a comprehensive Angular UI component library that provides headless, accessible, and customizable components. It serves as the foundational layer for building modern Angular applications with a focus on accessibility, performance, and developer experience.

## Architecture

### Library Structure

The brain library follows a modular architecture where each component is organized as a secondary entry point, allowing for tree-shaking and optimized bundle sizes.

```
libs/brain/
├── accordion/           # Collapsible content panels
├── alert-dialog/        # Modal alert dialogs
├── autocomplete/        # Searchable dropdown with suggestions
├── avatar/              # User profile images with fallbacks
├── button/              # Interactive button components
├── calendar/            # Date selection and navigation
├── checkbox/            # Boolean input controls
├── collapsible/         # Expandable/collapsible content
├── command/             # Command palette interface
├── core/                # Shared utilities and helpers
├── date-time/           # Date and time handling
├── date-time-luxon/     # Luxon-based date utilities
├── dialog/              # Modal dialog system
├── form-field/          # Form input wrapper
├── forms/               # Form utilities and validators
├── hover-card/          # Contextual hover information
├── input-otp/           # One-time password input
├── label/               # Accessible form labels
├── menu/                # Context and dropdown menus
├── navigation-menu/     # Site navigation components
├── popover/             # Floating content containers
├── progress/            # Progress indicators
├── radio-group/         # Single-selection radio inputs
├── resizable/           # Resizable panel components
├── select/              # Dropdown selection controls
├── separator/           # Visual content dividers
├── sheet/               # Slide-out panels
├── slider/              # Range input controls
├── switch/              # Toggle switch controls
├── tabs/                # Tabbed interface components
├── toggle/              # Toggle button controls
├── toggle-group/        # Grouped toggle controls
└── tooltip/             # Contextual help text
```

### Package Information

- **Package Name**: `grg-ui-ui/brain`
- **Version**: `0.0.1-alpha.542`
- **Prefix**: `brn`
- **Project Type**: Angular Library
- **Build System**: Nx

### Dependencies

#### Peer Dependencies
- **@angular/cdk**: `>=19.0.0` - Angular Component Development Kit
- **@angular/common**: `>=19.0.0` - Angular common utilities
- **@angular/core**: `>=19.0.0` - Angular core framework
- **@angular/forms**: `>=19.0.0` - Angular reactive forms
- **clsx**: `>=2.0.0` - Utility for constructing className strings
- **luxon**: `>=3.0.0` - Date and time library (optional)
- **rxjs**: `>=6.6.0` - Reactive Extensions for JavaScript
- **tailwindcss**: `>=3.3.0` - Utility-first CSS framework

## Design Philosophy

### Headless Components

The brain library follows a headless component approach, providing:

- **Behavior without styling**: Components handle logic, state, and accessibility
- **Maximum customization**: Developers can apply their own styling
- **Framework agnostic patterns**: Reusable across different design systems

### Accessibility First

All components are built with accessibility in mind:

- **ARIA attributes**: Proper semantic markup and ARIA labels
- **Keyboard navigation**: Full keyboard support for all interactive elements
- **Screen reader support**: Optimized for assistive technologies
- **Focus management**: Proper focus handling and visual indicators

### Modern Angular Patterns

The library leverages modern Angular features:

- **Signals**: Reactive state management with Angular signals
- **Standalone components**: No NgModule dependencies
- **Input transforms**: Type-safe input transformations
- **Dependency injection**: Modern DI patterns with `inject()`

## Component Categories

### Layout Components

#### Accordion
Collapsible content panels for organizing information hierarchically.

**Key Features:**
- Multiple expansion modes (single/multiple)
- Keyboard navigation
- Customizable trigger and content areas

#### Collapsible
Simple expand/collapse functionality for content sections.

#### Separator
Visual dividers for content organization.

#### Sheet
Slide-out panels for secondary content or navigation.

#### Tabs
Tabbed interface for organizing related content.

### Form Components

#### Button
Interactive button component with disabled state handling.

**Key Features:**
- Support for both `<button>` and `<a>` elements
- Automatic disabled state management
- Click prevention for disabled anchor links

#### Checkbox
Boolean input controls with indeterminate state support.

#### Form Field
Wrapper component for form inputs with label association.

#### Input OTP
Specialized input for one-time password entry.

#### Label
Accessible form labels with proper association.

#### Radio Group
Single-selection radio button groups.

#### Select
Dropdown selection controls with search and multi-select support.

#### Slider
Range input controls for numeric value selection.

#### Switch
Toggle switch controls for boolean settings.

#### Toggle & Toggle Group
Toggle button controls, individually or in groups.

### Navigation Components

#### Command
Command palette interface for quick actions and navigation.

#### Menu
Context menus, dropdown menus, and menu bars.

#### Navigation Menu
Site navigation with nested menu support.

### Feedback Components

#### Alert Dialog
Modal dialogs for important user confirmations.

#### Dialog
General-purpose modal dialog system.

#### Progress
Progress indicators for long-running operations.

#### Tooltip
Contextual help text on hover or focus.

### Data Display Components

#### Avatar
User profile images with fallback support.

#### Calendar
Date selection and navigation interface.

#### Date Time
Date and time handling utilities.

#### Hover Card
Contextual information displayed on hover.

#### Popover
Floating content containers for additional information.

### Utility Components

#### Autocomplete
Searchable dropdown with suggestion filtering.

#### Core
Shared utilities and helper functions.

#### Resizable
Resizable panel components for flexible layouts.

## Styling System

### TailwindCSS Integration

The library includes a TailwindCSS preset (`hlm-tailwind-preset.js`) that provides:

- **CSS Custom Properties**: Theme-based color system using HSL values
- **Container Utilities**: Responsive container configurations
- **Extended Color Palette**: Semantic color tokens for consistent theming
- **Typography**: Font family extensions and text utilities
- **Animation**: Smooth transitions and micro-interactions

### Color System

The preset defines a comprehensive color system:

```css
--border: hsl(...)
--input: hsl(...)
--ring: hsl(...)
--background: hsl(...)
--foreground: hsl(...)
--primary: hsl(...)
--secondary: hsl(...)
--destructive: hsl(...)
--muted: hsl(...)
--accent: hsl(...)
--popover: hsl(...)
--card: hsl(...)
```

## Usage Patterns

### Component Import Pattern

Each component follows a consistent import pattern:

```typescript
// Individual component import
import { BrnButton } from 'grg-ui-ui/brain/button';

// Bulk imports for convenience
import { BrnButtonImports } from 'grg-ui-ui/brain/button';
```

### Secondary Entry Points

Components are organized as secondary entry points for optimal tree-shaking:

- `grg-ui-ui/brain/button`
- `grg-ui-ui/brain/dialog`
- `grg-ui-ui/brain/select`
- etc.

### Directive-Based Architecture

Most components are implemented as Angular directives:

```typescript
@Directive({
  selector: 'button[brnButton]',
  host: {
    '[attr.disabled]': 'disabled() || null',
    '[attr.data-disabled]': 'disabled() || null',
  },
})
export class BrnButton {
  public readonly disabled = input<boolean, BooleanInput>(false, { 
    transform: booleanAttribute 
  });
}
```

## Development Workflow

### Build Configuration

The library uses Nx for build orchestration:

- **Build**: `nx build brain`
- **Test**: `nx test brain`
- **Lint**: `nx lint brain`
- **Release**: Custom release executor for publishing

### Testing Strategy

- **Unit Tests**: Jest-based testing for component logic
- **Accessibility Tests**: Automated a11y testing
- **Integration Tests**: Component interaction testing

### Code Quality

- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **TypeScript**: Type safety and modern JavaScript features

## Integration Guide

### Installation

```bash
npm install grg-ui-ui/brain
```

### Basic Setup

1. Install peer dependencies
2. Configure TailwindCSS with the provided preset
3. Import components as needed

### TailwindCSS Configuration

```javascript
// tailwind.config.js
module.exports = {
  presets: [require('grg-ui-ui/brain/hlm-tailwind-preset')],
  content: ['./src/**/*.{html,ts}'],
  // ... other config
};
```

### Component Usage Example

```typescript
// app.component.ts
import { BrnButton } from 'grg-ui-ui/brain/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BrnButton],
  template: `
    <button brnButton [disabled]="isLoading">
      Click me
    </button>
  `,
})
export class AppComponent {
  isLoading = false;
}
```

## Best Practices

### Component Design

1. **Use semantic HTML**: Leverage proper HTML elements for accessibility
2. **Implement keyboard navigation**: Ensure all interactions work with keyboard
3. **Provide ARIA labels**: Add descriptive labels for screen readers
4. **Handle focus management**: Properly manage focus states and transitions

### Performance

1. **Tree-shaking**: Import only needed components
2. **Lazy loading**: Use secondary entry points for code splitting
3. **Signal-based reactivity**: Leverage Angular signals for efficient updates

### Accessibility

1. **Test with screen readers**: Verify compatibility with assistive technologies
2. **Keyboard testing**: Ensure full keyboard accessibility
3. **Color contrast**: Maintain sufficient contrast ratios
4. **Focus indicators**: Provide clear focus visual indicators

## Contributing

### Development Setup

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Run development server: `nx serve`

### Component Development

1. Follow the established patterns in existing components
2. Write comprehensive tests
3. Document component APIs
4. Ensure accessibility compliance

### Code Standards

- Use TypeScript strict mode
- Follow Angular style guide
- Write self-documenting code
- Include JSDoc comments for public APIs

## Roadmap

### Upcoming Features

- Additional form components
- Advanced data table components
- Chart and visualization components
- Mobile-specific components

### Performance Improvements

- Bundle size optimization
- Runtime performance enhancements
- Tree-shaking improvements

### Developer Experience

- Enhanced TypeScript support
- Better IDE integration
- Improved documentation
- Interactive examples

## Support

For issues, feature requests, and contributions, please refer to the project's GitHub repository and follow the established contribution guidelines.

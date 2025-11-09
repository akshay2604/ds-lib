# grg-ui-ui/helm Documentation

## Overview

The `grg-ui-ui/helm` library is a comprehensive Angular UI component library that provides beautifully styled, accessible, and customizable components built on top of `grg-ui-ui/brain`. It serves as the styled layer of the Spartan design system, offering production-ready components with consistent design patterns and excellent developer experience.

## Architecture

### Library Structure

The helm library follows a modular architecture where each component is organized as a secondary entry point, allowing for tree-shaking and optimized bundle sizes. Each component builds upon the headless functionality provided by the brain library and adds beautiful, consistent styling using Tailwind CSS.

```
libs/helm/
├── accordion/           # Styled collapsible content panels
├── alert/               # Styled notification alerts
├── alert-dialog/        # Styled modal alert dialogs
├── aspect-ratio/        # Styled aspect ratio containers
├── autocomplete/        # Styled searchable dropdown with suggestions
├── avatar/              # Styled user profile images with fallbacks
├── badge/               # Styled status and category indicators
├── breadcrumb/          # Styled navigation breadcrumbs
├── button/              # Styled interactive button components
├── button-group/        # Styled grouped button controls
├── calendar/            # Styled date selection and navigation
├── card/                # Styled content containers
├── carousel/            # Styled image/content carousels
├── checkbox/            # Styled boolean input controls
├── command/             # Styled command palette interface
├── date-picker/         # Styled date selection components
├── dialog/              # Styled modal dialog system
├── empty/               # Styled empty state components
├── field/               # Styled form field components
├── form-field/          # Styled form input wrapper
├── hover-card/          # Styled contextual hover information
├── icon/                # Styled icon components
├── input/               # Styled text input components
├── input-group/         # Styled grouped input controls
├── input-otp/           # Styled one-time password input
├── item/                # Styled list and menu items
├── kbd/                 # Styled keyboard shortcut indicators
├── label/               # Styled accessible form labels
├── menu/                # Styled context and dropdown menus
├── navigation-menu/     # Styled site navigation components
├── pagination/          # Styled page navigation controls
├── popover/             # Styled floating content containers
├── progress/            # Styled progress indicators
├── radio-group/         # Styled single-selection radio inputs
├── resizable/           # Styled resizable panel components
├── scroll-area/         # Styled custom scrollbar areas
├── select/              # Styled dropdown selection controls
├── separator/           # Styled visual content dividers
├── sheet/               # Styled slide-out panels
├── sidebar/             # Styled navigation sidebars
├── skeleton/            # Styled loading placeholder components
├── slider/              # Styled range input controls
├── sonner/              # Styled toast notification system
├── spinner/             # Styled loading indicators
├── switch/              # Styled toggle switch controls
├── table/               # Styled data table components
├── tabs/                # Styled tabbed interface components
├── textarea/            # Styled multi-line text input
├── toggle/              # Styled toggle button controls
├── toggle-group/        # Styled grouped toggle controls
├── tooltip/             # Styled contextual help text
├── typography/          # Styled text and typography components
└── virtualized/         # Styled virtualized list components
```

### Package Information

- **Package Name**: `grg-ui-ui/helm`
- **Version**: `0.0.1-alpha.461`
- **Prefix**: `hlm`
- **Project Type**: Angular Library
- **Build System**: Nx with Angular Package Format

### Dependencies

The helm library has the following peer dependencies:

- **Angular**: `>=19.0.0`
  - `@angular/cdk`
  - `@angular/common`
  - `@angular/core`
  - `@angular/forms`
  - `@angular/router`
- **Icons**: `@ng-icons/core` and `@ng-icons/lucide` `>=29.0.0`
- **Foundation**: `grg-ui-ui/brain` `0.0.1-alpha.542`
- **Styling Utilities**:
  - `class-variance-authority` `^0.7.0`
  - `clsx` `^2.1.1`
  - `tailwind-merge` `^3.3.1`
- **Additional Features**:
  - `embla-carousel-angular` `>=19.0.0`
  - `ngx-sonner` `>=3.0.0`
  - `rxjs` `^7.8.0`

## Design Principles

### 1. **Accessibility First**
All helm components are built with accessibility in mind, following WCAG guidelines and providing proper ARIA attributes, keyboard navigation, and screen reader support.

### 2. **Consistent Design Language**
Components follow a unified design system with consistent spacing, typography, colors, and interaction patterns across all elements.

### 3. **Customizable Styling**
Built with Tailwind CSS and class-variance-authority, allowing for easy customization and theming while maintaining design consistency.

### 4. **Performance Optimized**
Tree-shakable architecture ensures only used components are included in your bundle, with optimized rendering and minimal runtime overhead.

### 5. **Developer Experience**
TypeScript-first approach with excellent IntelliSense support, comprehensive documentation, and intuitive APIs.

## Installation

### Prerequisites

Ensure you have the required peer dependencies installed in your Angular project:

```bash
npm install @angular/cdk @angular/common @angular/core @angular/forms @angular/router
npm install @ng-icons/core @ng-icons/lucide
npm install class-variance-authority clsx tailwind-merge
npm install embla-carousel-angular ngx-sonner rxjs
```

### Install Helm

```bash
npm install grg-ui-ui/helm grg-ui-ui/brain
```

### Tailwind CSS Configuration

Add the helm library to your Tailwind CSS configuration:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/grg-ui-ui/helm/**/*.{html,ts,js}",
  ],
  // ... rest of your config
};
```

## Usage

### Basic Component Usage

Each helm component can be imported individually for optimal tree-shaking:

```typescript
// Import specific component
import { HlmButtonImports } from 'grg-ui-ui/helm/button';
import { HlmCardImports } from 'grg-ui-ui/helm/card';

@Component({
  standalone: true,
  imports: [...HlmButtonImports, ...HlmCardImports],
  template: `
    <hlm-card class="w-96">
      <hlm-card-header>
        <hlm-card-title>Card Title</hlm-card-title>
        <hlm-card-description>Card description goes here</hlm-card-description>
      </hlm-card-header>
      <hlm-card-content>
        <p>Card content goes here</p>
      </hlm-card-content>
      <hlm-card-footer>
        <button hlmBtn>Action</button>
      </hlm-card-footer>
    </hlm-card>
  `,
})
export class MyComponent {}
```

### Form Components Example

```typescript
import { HlmInputImports } from 'grg-ui-ui/helm/input';
import { HlmLabelImports } from 'grg-ui-ui/helm/label';
import { HlmButtonImports } from 'grg-ui-ui/helm/button';

@Component({
  standalone: true,
  imports: [...HlmInputImports, ...HlmLabelImports, ...HlmButtonImports],
  template: `
    <form class="space-y-4">
      <div>
        <hlm-label for="email">Email</hlm-label>
        <hlm-input id="email" type="email" placeholder="Enter your email" />
      </div>
      <div>
        <hlm-label for="password">Password</hlm-label>
        <hlm-input id="password" type="password" placeholder="Enter your password" />
      </div>
      <button hlmBtn type="submit">Sign In</button>
    </form>
  `,
})
export class LoginForm {}
```

### Navigation Example

```typescript
import { HlmNavigationMenuImports } from 'grg-ui-ui/helm/navigation-menu';
import { HlmButtonImports } from 'grg-ui-ui/helm/button';

@Component({
  standalone: true,
  imports: [...HlmNavigationMenuImports, ...HlmButtonImports],
  template: `
    <hlm-navigation-menu>
      <hlm-navigation-menu-list>
        <hlm-navigation-menu-item>
          <hlm-navigation-menu-trigger>Products</hlm-navigation-menu-trigger>
          <hlm-navigation-menu-content>
            <hlm-navigation-menu-link href="/products/web">Web Development</hlm-navigation-menu-link>
            <hlm-navigation-menu-link href="/products/mobile">Mobile Apps</hlm-navigation-menu-link>
          </hlm-navigation-menu-content>
        </hlm-navigation-menu-item>
        <hlm-navigation-menu-item>
          <hlm-navigation-menu-link href="/about">About</hlm-navigation-menu-link>
        </hlm-navigation-menu-item>
      </hlm-navigation-menu-list>
    </hlm-navigation-menu>
  `,
})
export class Navigation {}
```

## Component Categories

### Layout Components
- **Card**: Content containers with header, body, and footer sections
- **Separator**: Visual dividers for content sections
- **Aspect Ratio**: Maintain consistent aspect ratios for media content
- **Resizable**: User-resizable panel components
- **Sidebar**: Navigation sidebars with collapsible functionality

### Form Components
- **Input**: Text input fields with various types and states
- **Input Group**: Grouped input controls with addons
- **Textarea**: Multi-line text input areas
- **Select**: Dropdown selection controls
- **Checkbox**: Boolean selection controls
- **Radio Group**: Single-selection radio button groups
- **Switch**: Toggle switch controls
- **Slider**: Range input controls
- **Input OTP**: One-time password input fields
- **Label**: Accessible form labels
- **Field**: Form field wrapper components
- **Form Field**: Enhanced form input wrappers

### Navigation Components
- **Navigation Menu**: Site navigation with dropdown support
- **Breadcrumb**: Hierarchical navigation breadcrumbs
- **Pagination**: Page navigation controls
- **Tabs**: Tabbed interface components
- **Menu**: Context and dropdown menus

### Feedback Components
- **Alert**: Notification and status messages
- **Alert Dialog**: Modal alert dialogs
- **Dialog**: General-purpose modal dialogs
- **Sheet**: Slide-out panels and drawers
- **Tooltip**: Contextual help and information
- **Hover Card**: Rich hover information cards
- **Popover**: Floating content containers
- **Sonner**: Toast notification system

### Data Display Components
- **Table**: Data tables with sorting and filtering
- **Badge**: Status and category indicators
- **Avatar**: User profile images with fallbacks
- **Progress**: Progress indicators and bars
- **Skeleton**: Loading placeholder components
- **Empty**: Empty state components
- **Typography**: Text and heading components
- **Kbd**: Keyboard shortcut indicators

### Interactive Components
- **Button**: Interactive button components
- **Button Group**: Grouped button controls
- **Toggle**: Toggle button controls
- **Toggle Group**: Grouped toggle controls
- **Accordion**: Collapsible content panels
- **Command**: Command palette interface
- **Calendar**: Date selection and navigation
- **Date Picker**: Date selection components
- **Carousel**: Image and content carousels

### Utility Components
- **Icon**: Icon display components
- **Spinner**: Loading indicators
- **Scroll Area**: Custom scrollbar areas
- **Virtualized**: Performance-optimized virtualized lists
- **Item**: Reusable list and menu items

## Theming and Customization

### CSS Custom Properties

Helm components use CSS custom properties for theming. You can customize the appearance by overriding these properties:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
  --muted: 210 40% 96%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96%;
  --accent-foreground: 222.2 84% 4.9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
  --radius: 0.5rem;
}
```

### Component Variants

Many components support variants through class-variance-authority:

```typescript
// Button variants
<button hlmBtn variant="default">Default</button>
<button hlmBtn variant="destructive">Destructive</button>
<button hlmBtn variant="outline">Outline</button>
<button hlmBtn variant="secondary">Secondary</button>
<button hlmBtn variant="ghost">Ghost</button>
<button hlmBtn variant="link">Link</button>

// Size variants
<button hlmBtn size="sm">Small</button>
<button hlmBtn size="default">Default</button>
<button hlmBtn size="lg">Large</button>
```

## Development

### Building the Library

```bash
# Build the helm library
nx build helm

# Build with production configuration
nx build helm --configuration=production
```

### Testing

```bash
# Run unit tests
nx test helm

# Run tests with coverage
nx test helm --coverage
```

### Linting

```bash
# Run ESLint
nx lint helm
```

### Release

```bash
# Build, update version, and publish
nx release helm
```

## Best Practices

### 1. **Import Optimization**
Always import components individually to ensure optimal tree-shaking:

```typescript
// ✅ Good - Tree-shakable
import { HlmButtonImports } from 'grg-ui-ui/helm/button';

// ❌ Avoid - Imports entire library
import { HlmButtonImports } from 'grg-ui-ui/helm';
```

### 2. **Accessibility**
Always provide proper labels and ARIA attributes:

```typescript
<hlm-label for="username">Username</hlm-label>
<hlm-input id="username" aria-describedby="username-help" />
<div id="username-help">Enter your username</div>
```

### 3. **Form Integration**
Use Angular's reactive forms for complex form handling:

```typescript
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, ...HlmInputImports],
  template: `
    <hlm-input [formControl]="emailControl" type="email" />
  `,
})
export class MyForm {
  emailControl = new FormControl('');
}
```

### 4. **Responsive Design**
Use Tailwind's responsive utilities for mobile-first design:

```html
<hlm-card class="w-full md:w-96 lg:w-[32rem]">
  <!-- Card content -->
</hlm-card>
```

### 5. **Performance**
Use OnPush change detection strategy when possible:

```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // ...
})
export class OptimizedComponent {}
```

## Migration Guide

### From Brain to Helm

If you're migrating from brain components to helm:

1. **Update Imports**: Change from `grg-ui-ui/brain/*` to `grg-ui-ui/helm/*`
2. **Update Prefixes**: Change from `brn` to `hlm` prefixes
3. **Add Styling**: Helm components come pre-styled, so you may need to adjust custom CSS
4. **Update Templates**: Some component APIs may have changed slightly

### Version Updates

When updating helm versions:

1. **Check Breaking Changes**: Review the changelog for breaking changes
2. **Update Dependencies**: Ensure all peer dependencies are compatible
3. **Test Components**: Thoroughly test all used components
4. **Update Customizations**: Check if custom themes need updates

## Support and Contributing

### Getting Help

- **Documentation**: Check this documentation and component-specific READMEs
- **Issues**: Report bugs and request features on the GitHub repository
- **Discussions**: Join community discussions for questions and tips

### Contributing

1. **Fork the Repository**: Create your own fork of the project
2. **Create a Branch**: Create a feature branch for your changes
3. **Make Changes**: Implement your feature or bug fix
4. **Test**: Ensure all tests pass and add new tests if needed
5. **Submit PR**: Create a pull request with a clear description

### Development Setup

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
nx serve

# Run tests
nx test helm
```

## Changelog

### Version 0.0.1-alpha.461
- Initial alpha release
- 50+ styled components
- Full Angular 19 compatibility
- Comprehensive accessibility support
- Tailwind CSS integration
- Tree-shakable architecture

---

*This documentation is maintained by the Spartan team. For the latest updates and detailed API documentation, visit the official repository.*

# Littleroom UI

[![Release](https://github.com/littleroom-software/ds/actions/workflows/release.yml/badge.svg)](https://github.com/littleroom-software/ds/actions/workflows/release.yml)
[![npm version](https://img.shields.io/npm/v/@littleroom-ui/react.svg)](https://www.npmjs.com/package/@littleroom-ui/react)
[![npm downloads](https://img.shields.io/npm/dm/@littleroom-ui/react.svg)](https://www.npmjs.com/package/@littleroom-ui/react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)

A modern design system built with React, providing reusable components and design tokens for consistent UI development.

📚 [View Storybook Documentation](https://littleroom-software.github.io/ds)  
🧪 [View Development Storybook](https://littleroom-software.github.io/ds/dev)

## Project Structure

This monorepo is managed with Turborepo and contains:

### Apps

- `docs`: Storybook documentation site (v8)

  - Component documentation and showcasing
  - Interactive component examples
  - Development server runs on port 6006
  - Integrated with PostCSS and Tailwind

- `teste-ui`: Vite-based testing application
  - Testing ground for components

### Packages

- `react` (`@littleroom-ui/react`): Core React component library

  - Pre-built, customizable UI components
  - Built with Radix UI primitives for accessibility
  - Integrated with Tailwind CSS for styling
  - Supports component variants through class-variance-authority
  - Type-safe props with TypeScript
  - Extendable for custom themes

- `tokens` (`@littleroom-ui/tokens`): Design system foundation

  - Centralized design tokens for consistent styling
  - Configurable theme variables
  - Supports dark/light mode theming
  - Ensures visual consistency across applications

- `eslint-config` (`@littleroom-ui/eslint-config`): Shared ESLint configuration

- `typescript-config` (`@littleroom-ui/typescript-config`): Shared TypeScript configuration

## Requirements

- Node.js >= 18

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Build all packages:

```bash
npm run build
```

3. Start development:

```bash
npm run dev
```

## Development Scripts

- `npm run build`: Build all packages and apps
- `npm run dev`: Start development environment
- `npm run lint`: Run linting
- `npm run format`: Format code with Prettier

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Versioning

This project uses semantic-release for automated versioning and changelog generation.

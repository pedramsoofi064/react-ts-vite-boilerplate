# React TypeScript Vite Boilerplate

A modern, production-ready React boilerplate built with TypeScript, Vite, and Material-UI. This template provides a solid foundation for building scalable React applications with best practices and modern tooling.

## ✨ Features

- ⚡ **Vite** - Lightning fast build tool and dev server
- ⚛️ **React 18** - Latest React with concurrent features
- 📘 **TypeScript** - Full type safety
- 🎨 **Material-UI (MUI)** - Comprehensive UI component library
- 🎭 **Framer Motion** - Smooth animations and transitions
- 🛣️ **React Router** - Client-side routing
- 📝 **React Hook Form** - Performant form handling with validation
- 🔐 **JWT Authentication** - Ready-to-use auth system
- 🎯 **ESLint + Prettier** - Code quality and formatting
- 📱 **Responsive Design** - Mobile-first approach
- 🌙 **Theme Support** - Light/Dark mode with customization
- 🚀 **Production Ready** - Optimized build configuration

## 📋 Prerequisites

- **Node.js** 16.x or higher (18.x recommended)
- **npm** or **yarn** package manager

## 🚀 Getting Started

### Installation

Using **Yarn** (Recommended):
```bash
yarn install
```

Using **npm**:
```bash
npm install
# or if you encounter peer dependency issues:
npm install --legacy-peer-deps
```

### Development

Start the development server:

```bash
yarn dev
# or
npm run dev
```

The app will be available at `http://localhost:8081`

### Build

Create a production build:

```bash
yarn build
# or
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
yarn start
# or
npm run start
```

## 📁 Project Structure

```
src/
├── auth/              # Authentication context and guards
├── components/        # Reusable UI components
├── hooks/            # Custom React hooks
├── layouts/          # Layout components
├── pages/            # Page components
├── routes/           # Route configuration
├── sections/         # Feature sections
├── theme/            # Theme configuration
└── utils/            # Utility functions
```

## 🛠️ Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Preview production build
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix ESLint errors
- `yarn prettier` - Format code with Prettier
- `yarn rm:all` - Clean build artifacts and node_modules
- `yarn re:start` - Clean install and start dev server
- `yarn re:build` - Clean install and build

## 🎨 Customization

### Theme Configuration

Edit `src/theme/` to customize colors, typography, and component styles.

### Routes

Add new routes in `src/routes/sections/` and update `src/routes/paths.ts`.

### Authentication

The JWT authentication system is ready to use. Update `src/auth/context/jwt/` to connect to your backend API.

## 📦 Key Dependencies

- `react` & `react-dom` - React library
- `@mui/material` - Material-UI components
- `react-router-dom` - Routing
- `react-hook-form` - Form handling
- `framer-motion` - Animations
- `axios` - HTTP client
- `yup` - Schema validation

## 🔧 Configuration

### Vite Config

The Vite configuration is in `vite.config.ts`. Default port is `8081`.

### TypeScript Config

TypeScript configuration is in `tsconfig.json` and `tsconfig.node.json`.

### ESLint Config

ESLint uses Airbnb configuration with TypeScript support.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

MIT © Your Name

---

**Happy Coding! 🚀**

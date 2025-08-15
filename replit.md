# Project Overview

## Overview

This is a digital marketing agency website built for TREND MAKERS 360, specializing in college marketing across Tamil Nadu, Kerala, and Andhra Pradesh. The application is a full-stack React application with a Node.js/Express backend, featuring a comprehensive marketing website with multiple pages, SEO optimization, and modern UI components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: React Router DOM with centralized routing configuration
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom brand gradient (blue to cyan) and responsive design
- **Animations**: Framer Motion for smooth transitions and micro-interactions
- **State Management**: TanStack React Query for server state management
- **SEO**: React Helmet Async for per-page meta tags and structured data

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: Hot reload with Vite middleware integration
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage)
- **API Design**: RESTful API structure with `/api` prefix routing

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Configured for PostgreSQL with Neon Database serverless driver
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection**: Environment-based database URL configuration

### Build and Development
- **Bundling**: Vite for frontend, esbuild for backend production builds
- **TypeScript**: Strict type checking across frontend, backend, and shared modules
- **Hot Reload**: Development server with automatic reloading for both client and server code
- **Path Aliases**: Configured aliases for clean imports (@/, @shared/, @assets/)

### SEO and Performance
- **Sitemap Generation**: Node.js script for automatic sitemap.xml generation
- **Meta Tags**: Dynamic meta tags with Open Graph and Twitter Card support
- **Structured Data**: JSON-LD schema markup for organization and services
- **Progressive Web App**: Manifest file and service worker ready configuration
- **Performance**: Lazy loading for pages and optimized asset loading

### UI/UX Design System
- **Component Library**: Comprehensive set of accessible components from Radix UI
- **Design Tokens**: CSS custom properties for consistent theming
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Color System**: Brand-specific gradient and neutral color palette
- **Typography**: Inter font family with proper font loading optimization

## External Dependencies

### Database and ORM
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe ORM with PostgreSQL adapter
- **Drizzle Kit**: Schema management and migration tool

### UI and Styling
- **Radix UI**: Unstyled, accessible UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography
- **Framer Motion**: Animation library for smooth transitions

### Form and Validation
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation library integrated with Drizzle

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type checking and development experience
- **ESBuild**: Fast JavaScript bundler for production builds

### SEO and Analytics
- **React Helmet Async**: Dynamic document head management
- **Google Fonts**: Web font loading (Inter font family)
- **Structured Data**: Schema.org markup for search engines

### Utilities
- **Class Variance Authority**: Utility for creating variant-based component APIs
- **clsx**: Conditional className utility
- **date-fns**: Date manipulation library
- **TanStack React Query**: Server state management and caching
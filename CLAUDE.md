# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with host flag (--host) for network access
- `npm run build` - Build for production using Vite
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Architecture Overview

This is a React portfolio website using Vite as the build tool. The application is structured as a SPA with React Router for client-side routing.

### Key Architecture Patterns

**Responsive Design Strategy**: The app uses a pattern of separate desktop/mobile components rather than responsive CSS. Each page conditionally renders desktop vs mobile components based on window width (breakpoint at 1024px). This is implemented via the `useWindowWidth` hook and seen in components like `HomeDesk/HomeMob`, `WorkDesk/WorkMob`.

**3D Graphics Integration**: Uses React Three Fiber (@react-three/fiber) and Drei (@react-three/drei) for 3D scenes. The main 3D content is in `HomeScene` component rendered within a Canvas.

**Content Management**: Blog content is managed through a static `blogs.js` file that exports an array of blog objects. Each blog has structured content with different types (text, code) for rendering.

**Routing Structure**:
- `/` - Home page
- `/works` - Portfolio/projects page  
- `/blogs` - Blog listing page
- `/blog/:blog_id` - Individual blog post page

### Styling & UI

- Uses Tailwind CSS for styling
- Custom font: Aalto (loaded from assets/fonts/)
- Grid-based layouts with custom CSS classes like `grid-border`
- Motion library for animations
- Custom SVG icon components in `components/svgs/`

### Deployment

Configured for Vercel deployment with SPA fallback routing in `vercel.json` that redirects all routes to `/index.html` for client-side routing.
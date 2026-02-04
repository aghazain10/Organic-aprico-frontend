# Organic Aprico - Nuxt.js Website

A modern, responsive website for Organic Aprico built with Nuxt 3 and Tailwind CSS, showcasing pure Himalayan Shilajit products.

## Tech Stack

- **Framework:** Nuxt 3 (Vue.js framework)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Package Manager:** npm

## Features

- Fully responsive design optimized for all devices
- Component-based architecture for maintainability
- SEO-optimized with Nuxt's built-in capabilities
- Type-safe with TypeScript
- Modern UI with Tailwind CSS utilities
- Optimized performance with Nuxt's auto-imports and code splitting

## Project Structure

```
project/
├── assets/
│   └── css/
│       └── main.css              # Global styles and Tailwind imports
├── components/
│   ├── sections/                 # Page sections
│   │   ├── HeroIntroSection.vue
│   │   ├── ServiceFeaturesSection.vue
│   │   ├── CertificationHighlightsSection.vue
│   │   ├── PricingTableSection.vue
│   │   ├── TestimonialsSection.vue
│   │   ├── HowItWorksSection.vue
│   │   ├── PricingComparisonSection.vue
│   │   └── CallToActionSection.vue
│   ├── ui/                       # Reusable UI components
│   │   ├── Button.vue
│   │   ├── Card.vue
│   │   ├── CardContent.vue
│   │   └── Input.vue
│   ├── AppNavigation.vue         # Header navigation
│   └── AppFooter.vue             # Footer component
├── layouts/
│   └── default.vue               # Main layout wrapper
├── pages/
│   └── index.vue                 # Home page
├── public/                       # Static assets (images, SVGs, etc.)
├── utils/
│   └── cn.ts                     # Utility function for class merging
├── app.vue                       # Root application component
├── nuxt.config.ts                # Nuxt configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

Build the application:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Generate Static Site

Generate a static version of the site:
```bash
npm run generate
```

## Component Architecture

### UI Components

Reusable base components located in `components/ui/`:
- **Button**: Flexible button component with multiple variants (default, outline, ghost, etc.)
- **Card**: Container component for content grouping
- **CardContent**: Content wrapper for cards
- **Input**: Styled input component

### Section Components

Page sections located in `components/sections/`:
- Each section is self-contained and reusable
- Data is managed within components using Vue's composition API
- Responsive design built into each section

### Layout System

- **default.vue**: Main layout with navigation and footer
- Automatic page wrapping
- Background decorative elements included

## Styling

The project uses Tailwind CSS with custom configurations:

- Custom color scheme matching the brand
- Custom font families (Poppins, Oswald, Golos Text, Epilogue)
- Responsive breakpoints
- Custom animations and transitions

## Best Practices Implemented

1. **Component Organization**: Logical separation of UI components and section components
2. **TypeScript**: Type safety throughout the application
3. **Composition API**: Modern Vue 3 syntax with `<script setup>`
4. **Auto-imports**: Nuxt automatically imports components and composables
5. **SEO**: Meta tags configured in `nuxt.config.ts`
6. **Performance**: Optimized with lazy loading and code splitting
7. **Responsive Design**: Mobile-first approach with Tailwind breakpoints
8. **Maintainability**: Clear file structure and naming conventions

## Connecting to Laravel Backend

To connect this frontend to your Laravel backend:

1. **API Configuration**: Create an `.env` file with your API URL:
```env
NUXT_PUBLIC_API_BASE=https://your-laravel-api.com/api
```

2. **Create API Service**: Add a composable in `composables/useApi.ts`:
```typescript
export const useApi = () => {
  const config = useRuntimeConfig()

  return $fetch.create({
    baseURL: config.public.apiBase
  })
}
```

3. **Make API Calls**: Use the composable in your components:
```vue
<script setup>
const api = useApi()

const { data } = await useAsyncData('products', () =>
  api('/products')
)
</script>
```

4. **CORS Configuration**: Ensure your Laravel backend allows requests from your Nuxt domain

## Deployment

This Nuxt application can be deployed to various platforms:

- **Node.js Server**: Use the default build and run `node .output/server/index.mjs`
- **Static Hosting**: Use `npm run generate` and deploy the `.output/public` folder
- **Vercel/Netlify**: Connect your repository for automatic deployments
- **Docker**: Create a Dockerfile for containerized deployment

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved - Organic Aprico

## Support

For issues or questions, please contact the development team.

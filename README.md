# Blue Ocean Tax Website

A modern, professional website redesign for Blue Ocean Professional Corporation - Top CPA Tax Accountant in Toronto, Brampton & Mississauga.

## Features

- **Sticky Header**: Always visible navigation that stays at the top when scrolling (mobile & desktop)
- **Modern Design**: Clean, professional design with smooth animations
- **Improved CTA**: Enhanced "Book an Appointment" button prominently displayed
- **Responsive**: Fully responsive design for all devices
- **Performance**: Optimized with lazy loading and modern React patterns

## Navigation Structure

- **Services**: Comprehensive tax and accounting services
- **Businesses**: Industry-specific services for various business types
- **Blog/Resources**: Tax tips, updates, and educational content

## Sections

1. **Hero**: Compelling introduction with prominent CTA
2. **Services**: All tax and accounting services offered
3. **Businesses**: Industry-specific solutions
4. **About**: Company information and value propositions
5. **Reviews**: Client testimonials and reviews
6. **Blog/Resources**: Educational content and updates
7. **Contact/Footer**: Contact information and quick links

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

## Customization

### Colors

The color scheme uses ocean blue tones. You can customize colors in `tailwind.config.js`:

- Primary: Ocean blue shades (`ocean-*`)
- Background: White and light grays
- Text: Gray scale

### Booking Integration

Update the booking URL in:
- `src/components/Navigation.tsx`
- `src/sections/Hero.tsx`
- Other sections with booking CTAs

Replace `https://calendly.com/blueocean-tax` with your actual booking system URL.

## Deployment

The site can be deployed to:
- Netlify
- Vercel
- Any static hosting service

Simply run `npm run build` and deploy the `dist` folder.

## License

Copyright © 2025 Blueoceanpc. All Rights Reserved.

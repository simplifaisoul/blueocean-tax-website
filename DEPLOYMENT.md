# Blue Ocean Tax Website - Deployment Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   cd blueocean-tax-website
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```
   This creates an optimized build in the `dist` folder.

## Deployment Options

### Netlify
1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. The `netlify.toml` file is already configured

### Vercel
1. Import your repository to Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

### Other Static Hosting
1. Run `npm run build`
2. Upload the `dist` folder to your hosting provider

## Customization

### Update Booking URL
Replace `https://calendly.com/blueocean-tax` in:
- `src/components/Navigation.tsx` (line ~30)
- `src/sections/Hero.tsx` (line ~8)
- `src/sections/Services.tsx` (line ~95)
- `src/sections/Businesses.tsx` (line ~95)
- `src/sections/About.tsx` (line ~45)
- `src/sections/Reviews.tsx` (line ~95)
- `src/sections/Blog.tsx` (line ~95)
- `src/components/Footer.tsx` (line ~50)

### Add Logo
1. Place your logo file in `public/` folder
2. Update the logo in `src/components/Navigation.tsx` (currently using a text-based logo)

### Update Contact Information
Edit contact details in `src/components/Footer.tsx`:
- Address
- Phone numbers
- Email

## Features Implemented

✅ Sticky header (visible on scroll - mobile & desktop)
✅ New navigation: Services, Businesses, Blog/Resources
✅ Enhanced "Book an Appointment" CTA button
✅ Modern, professional design
✅ Fully responsive
✅ Smooth animations
✅ All original content preserved and enhanced

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lazy loading for sections
- Optimized images (when added)
- Code splitting
- Modern build tools (Vite)

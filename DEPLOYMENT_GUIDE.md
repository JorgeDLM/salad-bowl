# WeLoveCode Deployment Guide

## Prerequisites
- Node.js 18+ installed
- Git installed
- Netlify account (or Vercel account)

## Local Development
```bash
npm install
npm run dev
```
Visit http://localhost:3000 to view the site locally.

## Build for Production
```bash
npm run build
```
This creates an optimized production build in the `.next` folder.

## Deployment Options

### Option 1: Netlify (Recommended)
1. **Via Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --build
   netlify deploy --prod --build
   ```

2. **Via Netlify Dashboard:**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `.next`
   - Deploy automatically on git push

### Option 2: Vercel
1. **Via Vercel CLI:**
   ```bash
   npm install -g vercel
   vercel login
   vercel --prod
   ```

2. **Via Vercel Dashboard:**
   - Import project from GitHub
   - Vercel auto-detects Next.js settings
   - Deploy automatically

## Environment Configuration
- The site is configured for production builds with ESLint disabled during builds
- `netlify.toml` is configured for proper Next.js deployment
- SEO and Open Graph meta tags are implemented

## Custom Domain Setup
1. Purchase domain `welovecode.mx`
2. In Netlify/Vercel dashboard:
   - Go to Domain settings
   - Add custom domain
   - Update DNS records as instructed

## Post-Deployment Checklist
- [ ] Test WhatsApp modal functionality
- [ ] Verify animated counters work
- [ ] Check responsive design on mobile
- [ ] Test contact forms
- [ ] Verify SEO meta tags
- [ ] Test social media sharing

## Features Implemented
- ✅ Professional WhatsApp modal with form
- ✅ Animated counters for statistics
- ✅ Responsive design
- ✅ SEO optimization
- ✅ Open Graph tags for social sharing
- ✅ Professional SVG icons
- ✅ Smooth animations and interactions

## Contact Information
- WhatsApp: +5212218414370
- Email: hola@welovecode.mx

## Support
For deployment issues, contact the development team or refer to:
- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

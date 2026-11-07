# Quikzyn — Message Alarm Website

The official website for **Message Alarm – Notification Alerts** by Quikzyn.

## Tech Stack

- **Next.js 14+** (App Router) with static export
- **TypeScript**
- **Tailwind CSS v3**
- Optimized for **Vercel** deployment

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

This project is configured for static export (`output: 'export'`). Simply push to a Git repository connected to Vercel for automatic deployment.

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with header/footer
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles & Tailwind
│   ├── m-terms/page.tsx        # Terms of Service
│   ├── m-privacy-policy/page.tsx # Privacy Policy
│   └── contact/
│       ├── page.tsx            # Contact page
│       └── ContactForm.tsx     # Contact form component
├── components/
│   ├── Header.tsx              # Navigation header
│   ├── Footer.tsx              # Site footer
│   └── ScrollReveal.tsx        # Scroll animation wrapper
├── public/                     # Static assets
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
└── package.json
```

## Links

- [Google Play Store](https://play.google.com/store/apps/details?id=com.quikgen.messagealarm)
- Contact: contactus@quikzyn.com

---

© 2026 Quikzyn. All rights reserved.

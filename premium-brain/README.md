# PremiumBrain.ai

Premium Enterprise Knowledge Intelligence Landing Page — multilingual (EN/DE/FR), with admin configuration panel and industry-specific customization.

---

## Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Create your local environment file
cp .env.example .env.local

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

> **Admin Panel:** Navigate to [http://localhost:3000/en/admin](http://localhost:3000/en/admin) and use the password from `ADMIN_PASSWORD` in your `.env.local` file (default: `admin2026`).

---

## Project Structure

```
premium-brain/
├── app/
│   ├── [locale]/           # Internationalized pages (en, de, fr)
│   │   ├── admin/          # Admin configuration panel
│   │   ├── layout.js       # Locale layout with fonts, navbar, footer
│   │   └── page.js         # Landing page (Hero → Problem → Solution → …)
│   ├── api/
│   │   ├── auth/login/     # Server-side admin auth endpoint
│   │   └── config/         # Site config API (GET/POST)
│   ├── globals.css         # Design system (Prada-inspired)
│   └── layout.js           # Root layout
├── components/             # React components (Hero, Features, Pricing, etc.)
├── config/
│   ├── site-config.json    # Runtime site config (Calendly, analytics, links)
│   └── industries/         # Industry-specific content configs
├── hooks/                  # Custom React hooks
├── i18n/                   # next-intl routing & request config
├── lib/                    # Utilities (siteConfig, industryConfig)
├── messages/               # Translation files (en.json, de.json, fr.json)
├── public/                 # Static assets (images, fonts)
├── .env.example            # ← Environment variable template
├── vercel.json             # Vercel deployment config
└── package.json
```

---

## Environment Variables

Copy `.env.example` → `.env.local` and configure:

| Variable | Required | Description |
|---|---|---|
| `ADMIN_PASSWORD` | ✅ | Password for the admin panel at `/admin` |
| `NEXT_PUBLIC_CALENDLY_URL` | ❌ | Calendly booking link |
| `NEXT_PUBLIC_GA_TRACKING_ID` | ❌ | Google Analytics tracking ID |
| `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID` | ❌ | Google Ads conversion ID |
| `NEXT_PUBLIC_COMMUNITY_URL` | ❌ | Community platform link |
| `NEXT_PUBLIC_YOUTUBE_URL` | ❌ | YouTube channel link |
| `NEXT_PUBLIC_LINKEDIN_URL` | ❌ | LinkedIn company page link |

---

## Features

- 🌍 **Trilingual** — Full EN/DE/FR support via `next-intl`
- 🎨 **Premium Design** — Prada-inspired dark/light theme with brand red accents
- ⚙️ **Admin Panel** — Password-protected config panel at `/{locale}/admin`
- 🏨 **Industry Modes** — Dynamic content for Hotel, Trades, and more (`?industry=hotel`)
- ♿ **Accessible** — WCAG-compliant with skip links, focus indicators, reduced motion
- 🚀 **Vercel-Ready** — Zero config deployment, env vars for production

---

## Deploy to Vercel

### Option 1: Push to GitHub → Auto-Deploy

```bash
git add .
git commit -m "feat: standalone premium-brain setup"
git push origin main
```

Then in [Vercel Dashboard](https://vercel.com/new):
1. Import the GitHub repository
2. Vercel auto-detects Next.js
3. Add environment variables (at minimum: `ADMIN_PASSWORD`)
4. Deploy 🚀

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables
vercel env add ADMIN_PASSWORD
```

### Vercel Environment Variables

In the Vercel Dashboard → Project → Settings → Environment Variables, add:

- `ADMIN_PASSWORD` — Your admin panel password
- `NEXT_PUBLIC_CALENDLY_URL` — Your Calendly link (optional)
- Any other `NEXT_PUBLIC_*` variables as needed

> **Note:** On Vercel, the filesystem is read-only. Config changes via the admin panel are only persistent locally. In production, set config via Vercel environment variables.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) with App Router
- **i18n:** [next-intl](https://next-intl-docs.vercel.app/) v4
- **Styling:** CSS Modules + CSS Custom Properties (Design System)
- **Fonts:** [Inter](https://fonts.google.com/specimen/Inter) + [Outfit](https://fonts.google.com/specimen/Outfit) via `next/font`
- **Deployment:** [Vercel](https://vercel.com)

---

## License

Private. © PremiumBrain.ai

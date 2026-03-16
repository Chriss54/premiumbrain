# PremiumBrain.ai — Agent Instructions

> This file is mirrored across CLAUDE.md, AGENTS.md, and GEMINI.md.

## Project Overview

PremiumBrain.ai is a premium B2B SaaS landing page for "Enterprise Knowledge Intelligence" — an AI-powered platform that transforms company knowledge into actionable insights.

**Stack:** Next.js 16 (App Router) + next-intl v4 + CSS Modules + Vercel

## Architecture

```
premium-brain/
├── app/
│   ├── [locale]/           # i18n pages (en, de, fr)
│   │   ├── admin/          # Protected admin panel
│   │   └── page.js         # Landing page sections
│   ├── api/
│   │   ├── auth/login/     # Server-side admin auth (POST)
│   │   └── config/         # Config API (GET/POST)
│   ├── globals.css         # Design system tokens
│   └── layout.js           # Root layout
├── components/             # All UI components
├── config/                 # Site + industry configs
├── i18n/                   # next-intl routing config
├── lib/                    # Utilities
├── messages/               # Translation JSONs (en, de, fr)
└── public/                 # Static assets
```

## Key Decision Points

### Design System
- **Prada-Inspired:** Brand red `#C41E3A`, dark/light themes via CSS Custom Properties
- **Fonts:** Outfit (display) + Inter (body) loaded via `next/font/google`
- **CSS Modules:** Every component has its own `.module.css` file
- **No Tailwind:** This project uses vanilla CSS intentionally

### i18n (Internationalization)
- **3 languages:** English, German, French
- **Routing:** `/en/`, `/de/`, `/fr/` via next-intl middleware
- **Translations:** `messages/en.json`, `messages/de.json`, `messages/fr.json`
- **All user-facing text MUST be translated** — never hardcode strings

### Industry Mode
- URL parameter `?industry=hotel` or `?industry=trades` swaps content
- Config files in `config/industries/`
- `IndustryProvider` context provides industry data to all components

### Admin Panel
- Protected by server-side auth at `/api/auth/login`
- Password stored in `ADMIN_PASSWORD` env var
- Config changes saved to `config/site-config.json` (local) or env vars (Vercel)
- On Vercel: filesystem is **read-only** — config must be set via dashboard env vars

### Environment Variables
- `ADMIN_PASSWORD` — Required for admin access
- `NEXT_PUBLIC_*` vars — Optional, for analytics/links/calendly
- Never commit `.env.local` — use `.env.example` as template

## Development Rules

1. **Always add translations** for all 3 languages when changing user-facing text
2. **Use CSS Modules** — no inline styles, no global CSS classes for components
3. **Keep components pure** — use the design system tokens from `globals.css`
4. **Test all 3 locales** after i18n changes: `/en/`, `/de/`, `/fr/`
5. **Test both themes** — light and dark mode must look correct
6. **Admin changes** must work locally AND degrade gracefully on Vercel (read-only FS)

## Common Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run lint      # ESLint check
```

## Deployment

- **Target:** Vercel
- **Config:** `vercel.json` at project root
- **Env vars:** Set in Vercel Dashboard → Settings → Environment Variables
- **GitHub:** Push to `main` → auto-deploy via Vercel Git integration

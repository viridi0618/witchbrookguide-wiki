# Witchbrook Guide

Source-led pre-launch guide hub for Witchbrook, built with Next.js App Router, TypeScript, Tailwind CSS, static export, data-driven guide pages, JSON-LD, automatic sitemap, and robots metadata.

## Local development

Copy `.env.example` to `.env.local`, then set `NEXT_PUBLIC_SITE_URL` to the canonical site URL.

```bash
npm install
npm run dev
```

## Validation and export

```bash
npm run validate:seo
npm run lint
npm run build
```

The production-ready static site is written to `out/`.

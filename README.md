# Shams Visuals — Next.js site

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Deploy (Vercel): import the repo, framework preset **Next.js**, no env vars required.
Domain: shamsvisuals.com. Keep the current Vite deployment live until you've checked the preview URL.

Edit content in: `lib/projects-data.ts` (projects), `lib/i18n.ts` (EN/BN copy), `lib/site.ts` (contact, flags),
`app/*/page.tsx` (page copy), `components/packages/*` (pricing).
Seasonal banner: `SITE.promoBannerEnabled` in `lib/site.ts` (currently off).
See `.claude/shamsvisuals-execution-state.md` for decisions, measurements and open items.

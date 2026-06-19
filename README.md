# Real de Cote — Aceite de Oliva Virgen Extra

Official website for **Real de Cote AOVE, S.L.** — extra virgin olive oil from
Cortijo Cote, Montellano (Sevilla), Spain. Bilingual (Spanish / English).

It's a static site (hand-written HTML/CSS/JS) wrapped in a minimal **Vite**
project so it deploys cleanly on framework-aware hosts (Hostinger, Netlify,
Vercel, etc.). There is no client framework — Vite only bundles `index.html`
and copies the static assets.

## Structure

| Path | Purpose |
|------|---------|
| `index.html` | Single-page site, entry point |
| `public/css/styles.css` | Hand-crafted styles — navy + gold luxury editorial |
| `public/js/main.js` | Interactions: ES/EN toggle, animations, collection filter, form |
| `public/assets/img/` | Optimized imagery (WebP + JPEG), logo variants, favicons |
| `vite.config.js` · `package.json` | Build config |

Everything in `public/` is served from the site root (`/css/…`, `/js/…`, `/assets/…`)
and copied into `dist/` unchanged.

## Local development

```bash
npm install
npm run dev        # dev server with hot reload (http://localhost:5173)
npm run build      # production build → dist/
npm run preview    # serve the built dist/ locally
```

## Deploy

**Hostinger (GitHub):** connect this repo; Hostinger detects Vite.
- Framework: **Vite**
- Build command: `npm run build`
- Output / publish directory: `dist`

**Any static host:** run `npm run build` and upload the contents of `dist/`.

---

© 2026 Real de Cote AOVE, S.L.

# Real de Cote — Aceite de Oliva Virgen Extra

Official website for **Real de Cote AOVE, S.L.** — extra virgin olive oil from
Cortijo Cote, Montellano (Sevilla), Spain. Bilingual (Spanish / English).

A **Node.js (Express)** application that serves the hand-built static site
(HTML / CSS / vanilla JS) from `public/`.

## Structure

| Path | Purpose |
|------|---------|
| `server.js` | Express server (entry point) — serves `public/`, listens on `process.env.PORT` |
| `public/index.html` | Single-page site |
| `public/css/styles.css` | Hand-crafted styles — navy + gold luxury editorial |
| `public/js/main.js` | Interactions: ES/EN toggle, animations, collection filter, form |
| `public/assets/img/` | Optimized imagery (WebP + JPEG), logo variants, favicons |

## Run locally

```bash
npm install
npm start          # http://localhost:3000  (or $PORT)
```

## Deploy (Hostinger — Node.js)

Connect this repo; Hostinger detects **Express**.

| Setting | Value |
|---|---|
| Framework | Express (Node.js) |
| Install command | `npm install` |
| Start command | `npm start` |
| Entry / main | `server.js` |
| Node version | 18 or higher |

The server reads the port from `process.env.PORT`, as required by Node hosts.

---

© 2026 Real de Cote AOVE, S.L.

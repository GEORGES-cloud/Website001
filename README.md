# Real de Cote — Aceite de Oliva Virgen Extra

Official website for **Real de Cote AOVE, S.L.** — extra virgin olive oil from
Cortijo Cote, Montellano (Sevilla), Spain. Bilingual (Spanish / English),
static, with no framework or build step.

## Structure

| Path | Purpose |
|------|---------|
| `index.html` | Single-page site (hero, heritage, collection, process, terroir, quality, export, contact) |
| `css/styles.css` | Hand-crafted styles — navy + gold luxury editorial |
| `js/main.js` | Interactions: ES/EN toggle, scroll animations, collection filter, enquiry form |
| `assets/img/` | Optimized imagery (WebP + JPEG), logo variants, favicons |

## Local preview

Any static server works, e.g.:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Publish with GitHub Pages

1. **Settings → Pages**
2. **Source:** Deploy from a branch → `main` / `/ (root)`
3. The site will be available at `https://georges-cloud.github.io/RealdeCote/`

All asset paths are relative, so it also works under a project subpath or a custom domain.

---

© 2026 Real de Cote AOVE, S.L.

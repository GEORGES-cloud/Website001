// Real de Cote — Node.js (Express) server
// Serves the bilingual static marketing site from /public.
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, 'public');

const app = express();
const PORT = process.env.PORT || 3000;

// Static assets: index.html, /css, /js, /assets (root-absolute paths)
app.use(
  express.static(publicDir, {
    extensions: ['html'],
    maxAge: '1h',
  })
);

// Single-page fallback — serve index.html for any unmatched route
app.use((req, res) => {
  res.sendFile(join(publicDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Real de Cote — server listening on http://localhost:${PORT}`);
});

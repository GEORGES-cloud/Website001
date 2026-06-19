import { defineConfig } from 'vite';

// Real de Cote — static marketing site.
// All CSS/JS/images live in /public and are referenced with root-absolute
// paths, so `vite build` processes index.html and copies the public assets
// into dist/ unchanged (no hashing) — keeping <picture>, preload and icon
// references intact. Output (dist/) is what Hostinger serves.
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});

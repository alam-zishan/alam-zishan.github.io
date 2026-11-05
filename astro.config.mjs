// @ts-check
import { defineConfig } from 'astro/config';

// SITE and BASE_PATH are set by the GitHub Pages workflow.
// Local dev uses the defaults below.
export default defineConfig({
  site: process.env.SITE ?? 'https://alam-zishan.github.io',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'ignore',
});

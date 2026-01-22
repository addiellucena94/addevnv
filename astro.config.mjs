// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    locales: ["es", "en", "pt-br", "nl-nl"],
    defaultLocale: "en",
    routing: {
        prefixDefaultLocale: false
    }
  },
  site: 'https://addevnv.com',
  integrations: [sitemap()]
});
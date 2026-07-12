import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://aeodecoded.ai',
  trailingSlash: 'ignore',
  integrations: [sitemap()],

  build: {
    inlineStylesheets: 'always',
  },

  adapter: cloudflare(),
});
// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  integrations: [preact()],
  prefetch: true,
  experimental: {
    svg: true,
  },
});
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://www.larsbaumeler.com',
  base: '/',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [alpinejs(), mdx()],
});

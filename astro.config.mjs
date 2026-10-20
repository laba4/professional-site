// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import alpinejs from "@astrojs/alpinejs";

export default defineConfig({
  site: "https://www.larsbaumeler.com",
  base: "/",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx(), alpinejs()],
});
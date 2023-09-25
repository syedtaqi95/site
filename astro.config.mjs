import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";
import swup from '@swup/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false
    }),
    mdx({
      remarkPlugins: [remarkReadingTime],
    }),
    swup({
      theme: "slide"
    })
  ],
});

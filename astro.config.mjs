import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";
import swup from "@swup/astro";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import compress from "vite-plugin-compression";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  site: "https://sy3d.dev",

  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      remarkPlugins: [
        remarkReadingTime,
        [remarkToc, { ordered: true }],
      ],
    }),
    swup({
      theme: "slide",
    }),
    sitemap(),
    robotsTxt(),
  ],

  vite: {
    plugins: [
      compress({ ext: ".br", algorithm: "brotliCompress" }),
      compress({ ext: ".gz", algorithm: "gzip" }),
    ],
  },
});

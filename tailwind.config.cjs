const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'spin-slow': 'spin-slow 10s linear infinite',
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'scale(1.1) rotate(0deg)' },
          '100%': { transform: 'scale(1.1) rotate(360deg)' },

        }
      }
    },
  },
  plugins: [],
};

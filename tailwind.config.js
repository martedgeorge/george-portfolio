/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "electric-purple": "#6B3FA0",
        "bright-orange": "#FF6A00",
        "deep-navy": "#0F172A",
        "charcoal": "#111827",
        "off-white": "#F8F8F8",
      },
    },
  },
  plugins: [],
};

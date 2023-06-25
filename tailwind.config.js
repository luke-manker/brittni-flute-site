/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [],
  },
  theme: {
    colors: {
      brittni_off_white: "#f2f2f2",
      brittni_burgundy: "#351431",
      brittni_yellow: "#CDA255",
      brittni_text: "#171717",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};

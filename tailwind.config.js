import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#0A6EBD",
        "secondary-color": "#EE7214",
      },
    },
    screens: {
      "2xsm": "375px",
      // => @media (min-width: 440px) { ... }
      xsm: "460px",
      // => @media (min-width: 440px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1535px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

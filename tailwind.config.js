/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      fold: "350px",
      // => @media (min-width: 350px) { ... }

      xs: "390px",
      // => @media (min-width: 359px) { ... }

      vs: "460px",
      // => @media (min-width: 460px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        inter: ['"Inter", sans-serif', ...defaultTheme.fontFamily.sans],
        mont: ['"Montserrat", sans-serif', ...defaultTheme.fontFamily.sans],
        unica: ['"Unica One", cursive', ...defaultTheme.fontFamily.sans],
        clash: ['"Clash Display", sans-serif', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: "#150E28",
        purple: "#D434FE",
        blue: "#903AFF",
        pink: "#FE34B9",
        pink2: "#FF26B9",
      },
      backgroundImage: {
        text: "linear-gradient(90deg, #903AFF 3.08%, #FF26B9 93.85%)",
        button:
          "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
        bigpulse: "flash 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        typing: "typing 2s linear",
      },
      keyframes: {
        flash: {
          "0%, 100%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.1,
          },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};

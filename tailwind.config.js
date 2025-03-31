import { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{astro,js,jsx,tsx,ts}"],
  darkMode: "class", // 👈 Habilitar modo oscuro manual
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;

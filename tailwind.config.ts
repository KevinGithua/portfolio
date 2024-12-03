import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",  // Make sure this matches your CSS variable
        foreground: "var(--foreground)",  // Make sure this matches your CSS variable
        primary: "var(--primary-color)",   // Add primary color
        secondary: "var(--secondary-color)", // Add secondary color
        accent: "var(--accent-color)", // Add accent color
      },
    },
  },
  plugins: [],
};

export default config;

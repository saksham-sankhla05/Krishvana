/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A4D2E",
        secondary: "#4F6F52",
        accent: "#E8DFCA",
        neutral: "#F5F5F5",
        dark: "#000000",
        light: "#FFFFFF",
        muted: "#888888",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        section: "2rem",
        full: "9999px",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
      },
      boxShadow: {
        card: "0 8px 24px rgba(0, 0, 0, 0.08)",
        nav: "0 2px 8px rgba(0, 0, 0, 0.05)",
        button: "0 4px 12px rgba(0, 0, 0, 0.1)",
        circle: "0 6px 16px rgba(0, 0, 0, 0.12)",
        soft: "0 2px 10px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};

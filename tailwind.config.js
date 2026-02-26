/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "Segoe UI", "Roboto", "Arial"],
      },
      colors: {
        ink: "#070A12",
        panel: "rgba(255,255,255,0.06)",
        border: "rgba(255,255,255,0.10)",
        brand: {
          400: "#7C5CFF",
          500: "#6B4CFF",
          600: "#5B3CFF",
        },
        glow: {
          1: "rgba(124,92,255,0.30)",
          2: "rgba(99,255,214,0.18)",
        },
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0,0,0,0.45)",
        lift: "0 18px 40px rgba(0,0,0,0.35)",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
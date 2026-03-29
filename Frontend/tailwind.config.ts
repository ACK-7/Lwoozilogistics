/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "var(--color-navy)",
        "navy-dark": "var(--color-navy-dark)",
        "navy-light": "var(--color-navy-light)",
        orange: "var(--color-orange)",
        "orange-light": "var(--color-orange-light)",
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
      animation: {
        underline: "underline 0.6s ease-out",
        "pulse-dot": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        underline: {
          from: {
            "text-decoration": "underline",
            "text-decoration-color": "transparent",
          },
          to: {
            "text-decoration": "underline",
            "text-decoration-color": "var(--color-orange)",
          },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0068ef",
        },
        secondary: {
          DEFAULT: "#003c8a",
        },
        heading: {
          DEFAULT: "#222222",
        },
        body: "#333333",
        light: "#444444",
        white: {
          DEFAULT: "#FFFFFF",
          200: "#f2f2f2",
          300: "#f3f3f3",
          400: "#f4f4f4",
          500: "#f5f5f5",
          600: "#f6f6f6",
          700: "#f7f7f7",
          800: "#f8f8f8",
        },
      },
      borderRadius: {
        DEFAULT: "5px",
      },
      spacing: {
        7.5: "1.875rem",
        15: "3.75rem",
      },
      keyframes: {
        fadeInDown: {
          from: {
            opacity: "0",
            transform: "translate3d(0, -100%, 0)",
          },
          to: {
            opacity: "1",
            transform: "none",
          },
        },
      },
      animation: {
        fadeInDown: "fadeInDown .7s ease-in-out 0s 1 normal none running",
      },
    },

    fontFamily: {
      gantari: ["var(--font-gantari)"],
      spectral: ["var(--font-spectral)"],
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1200px",
    },
  },
};

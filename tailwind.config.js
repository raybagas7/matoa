/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      semitablet: "1250px",
      tablet: "1001px",
      mobile: "376px",
      md: "768px",
    },
    extend: {
      translate: {
        "slide-0": "0%",
        "slide-1": "100%",
        "slide-2": "200%",
      },
      gridTemplateColumns: {
        "5-footer": "repeat(5, minmax(0, 100px))",
      },
      colors: {
        primary: "#D84727",
        secondary: "#F1DDC9",
        "primary-text": "#333333",
        "secondary-text": "#666666",
        "danger-text": "#C80000",
        "matoa-logo": "#80753D",
        "light-bg": "#F7F6F4",
        "thin-text": "#777777",
      },
      keyframes: {
        default_monthlycard: {
          "0%": { height: "26rem" },
          "100%": { height: "24rem" },
        },
        expand_monthlycard: {
          "0%": { height: "24rem" },
          "100%": { height: "26rem" },
        },
        fade_out_quantum_bouncing: {
          "0%": { opacity: "100%", transform: "scale(1)" },
          "100%": {
            opacity: "0%",
            transform: "scale(0)",
            visibility: "hidden",
          },
        },
        fade_out_quantum_bouncing_fast: {
          "0%": { opacity: "100%", transform: "scale(1)" },
          "30%": { opacity: "100%", transform: "scale(1.2)" },
          "100%": {
            opacity: "0%",
            transform: "scale(0)",
            visibility: "hidden",
          },
        },
        default_quantum_bouncing: {
          "0%": { opacity: "0%", transform: "scale(0)", visibility: "visible" },
          "50%": {
            opacity: "0%",
            transform: "scale(0)",
            visibility: "visible",
          },
          "100%": { opacity: "100%", transform: "scale(1)" },
        },
        default_quantum_bouncing_fast: {
          "0%": { opacity: "0%", transform: "scale(0)", visibility: "visible" },
          "50%": {
            opacity: "0%",
            transform: "scale(0)",
            visibility: "visible",
          },
          "80%": { opacity: "100%", transform: "scale(1.2)" },
          "100%": { opacity: "100%", transform: "scale(1)" },
        },
        brightness_bright: {
          "0%": { filter: "brightness(50%)" },
          "100%": { filter: "brightness(100%)" },
        },
        shrink_to_cart: {
          "0%": { transform: "scale(1)" },
          "50%": { top: "-60px" },
          "100%": { top: "-60px", left: "80vw", transform: "scale(0)" },
        },
      },
      animation: {
        fade_out_quantum_bouncing: "fade_out_quantum_bouncing 0.5s forwards",
        fade_out_quantum_bouncing_fast:
          "fade_out_quantum_bouncing_fast 0.5s forwards",
        default_quantum_bouncing: "default_quantum_bouncing 1s forwards",
        default_quantum_bouncing_fast:
          "default_quantum_bouncing_fast 0.5s forwards",
        brightness_bright: "brightness_bright 0.5s forwards",
        default_monthlycard: "default_monthlycard 0.3s forwards",
        expand_monthlycard: "expand_monthlycard 0.3s forwards",
        shrink_to_cart: "shrink_to_cart 0.5s forwards",
      },
    },
  },
  plugins: [],
};

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        btnColor: "#5856d6",
        footerBg: "#2A3342",
      },
      screens: {
        "md-lg": "937px",
        "lg-xl": "1276px",
      },
      animation: {
        "card-stack": "card-stack 1s ease-out forwards",
      },
      keyframes: {
        "card-stack": {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
});

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-pink": "#ff3278",
        "primary-green": "#82ce34",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

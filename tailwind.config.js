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
        primary: "hsl(180, 29%, 50%)",
        neutralBackground: "hsl(180, 52%, 96%)",
        neutralFilterTablets: "hsl(180, 31%, 95%)",
        neutralDark: "hsl(180, 8%, 52%)",
        neutralVeryDark: "hsl(180, 14%, 20%)",
      },
      fontFamily: {
        body: ["Arial", "sans-serif"],
        headings: ["League Spartan", "sans-serif"],
      },
      fontSize: {
        body: "15px",
      },
    },
  },
  plugins: [],
};

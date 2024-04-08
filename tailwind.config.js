/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgLight: "hsl(0, 0%, 98%)",
        inputLight: "hsl(0, 0%, 52%)",
        textLight: "hsl(200, 15%, 8%)",
        bgDark: "hsl(207, 26%, 17%)",
        elDark: "hsl(209, 23%, 22%)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        inner2x: "inset 0px 0px 6px 3px rgba(200,200,200,0.1)",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
}

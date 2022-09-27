/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  content: [],
  theme: {
    fontFamily: {
        sans: ["MarkWeb", "sans-serif"]
      },
    extend: {},
  },
  plugins: [require("daisyui")],
}

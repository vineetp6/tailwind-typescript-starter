/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.ts",
    "./**/*.html",
    "./node_modules/flowbite-ts-test/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite-ts-test/plugin')
  ],
}
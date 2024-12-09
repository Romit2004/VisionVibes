/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '10px 10px 35px rgba(168, 50, 50, 0.3)',
        '4xl': '15px 15px 50px rgba(168, 50, 50, 0.5)'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
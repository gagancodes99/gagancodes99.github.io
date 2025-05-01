/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#F66435',
        secondary: '#29292B',
        white: '#C9C7BA'
      }
    },
  },
  plugins: [],
}
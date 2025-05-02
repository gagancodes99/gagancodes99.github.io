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
        white: '#C9C7BA',
        black: '#29292B'
      },
      screens: {
        'xs': '400px',     // Extra small phones
        'sm': '640px',     // Small devices (default Tailwind)
        'md': '768px',     // Medium devices (default)
        'lg': '1024px',    // Large devices (default)
        'xl': '1280px',    // Extra large (default)
        '2xl': '1536px',   // 2X large (default)
        '3xl': '1800px',   // Custom ultra-wide
      }
    },
  },
  plugins: [],
}
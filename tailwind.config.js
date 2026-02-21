/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2563eb',
          dark: '#38bdf8',
        },
        accent: '#6366f1',
      },
    },
  },
  plugins: [],
}

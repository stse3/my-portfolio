/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // Scan all your source files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Instrument Sans', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
      },
      textShadow: {
        'default': '0 4px 4px rgba(0,0,0,0.25)',
        'md': '0 4px 8px rgba(0,0,0,0.25)',
        'lg': '0 8px 16px rgba(0,0,0,0.25)',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow', '@tailwindcss/typography')
  ],
}

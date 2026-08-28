/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#0a0a0a',
          900: '#121212',
          800: '#1a1a1a',
          700: '#242424',
          600: '#2e2e2e',
        },
        gold: {
          300: '#f0d78c',
          400: '#e8c468',
          500: '#d4af37',
          600: '#b8912a',
          700: '#96741f',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 0 24px -6px rgba(212, 175, 55, 0.35)',
      },
    },
  },
  plugins: [],
}

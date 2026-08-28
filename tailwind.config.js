/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          50: '#f5f5f5',
          100: '#e8e8e8',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#8a8a8a',
          500: '#666666',
          600: '#2e2e2e',
          700: '#242424',
          800: '#1a1a1a',
          900: '#121212',
          950: '#0a0a0a',
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

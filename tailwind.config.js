/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out',
      },
      colors: {
        'content-primary': 'var(--primary-text)',
        'content-primary-dark': 'var(--dark-primary-text)',
        'content-secondary': 'var(--secondary-text)',
        'content-secondary-dark': 'var(--dark-secondary-text)',
      },
    },
  },
  plugins: [],
}


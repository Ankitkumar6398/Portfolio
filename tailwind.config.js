/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // blue-600
        secondary: '#9333ea', // purple-600
        accent: '#f59e42', // orange-400
        dark: '#18181b',
        light: '#f3f4f6',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.8s ease-out both',
        gradientX: 'gradientX 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
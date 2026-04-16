/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F4C81',
        secondary: '#2EC4B6',
        accent: '#FF9F1C',
      },
    },
  },
  plugins: [],
};

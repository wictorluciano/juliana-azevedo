/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-color': '#AC3D67',
        'dark-scale': {
          100: '#171717',
          200: '#333333',
          300: '#CBBDBD',
          400: '#F7E7E7',
        }
      },

      fontFamily: {
        'sora': 'Sora, Arial, sans-serif'
      },
    },
  },
  plugins: [],
}


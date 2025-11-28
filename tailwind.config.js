/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef4f2',
          100: '#fee9e4',
          200: '#fdd0c9',
          300: '#fbb4a8',
          400: '#f89076',
          500: '#E07A5F',  // Terracota principal
          600: '#d4624a',
          700: '#b94d35',
          800: '#983e2a',
          900: '#7d3422',
        },
        secondary: {
          50: '#f4f7f5',
          100: '#e6ede8',
          200: '#cfddd5',
          300: '#abc4b7',
          400: '#81B29A',  // Verde oliva/salvia principal
          500: '#609b81',
          600: '#4b7d67',
          700: '#3f6555',
          800: '#365347',
          900: '#2e453c',
        },
        accent: {
          50: '#fdfcf9',
          100: '#faf8f3',
          200: '#F4F1DE',  // Beige/Crema principal
          300: '#eee9d1',
          400: '#e5dcb5',
          500: '#d9cc9a',
          600: '#c4b173',
          700: '#a78e53',
          800: '#887346',
          900: '#6f5f3c',
        },
        neutral: {
          50: '#f7f8fa',
          100: '#eef0f4',
          200: '#dfe2e8',
          300: '#c5c9d4',
          400: '#a6abb9',
          500: '#8a8fa0',
          600: '#707589',
          700: '#5b5f70',
          800: '#4d515f',
          900: '#2D3142',  // Gris oscuro principal para textos
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

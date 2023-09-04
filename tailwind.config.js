/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    extend:{
      colors: {
        'purple-esisar': {
          DEFAULT: '#951B80',
          50: '#F6CDEF',
          100: '#F1B3E7',
          200: '#E880D7',
          300: '#DF4CC6',
          400: '#C924AD',
          500: '#951B80',
          600: '#7B166A',
          700: '#611253',
          800: '#470D3D',
          900: '#2D0827',
          950: '#20061C'
        },
      },
    }
  },

  plugins: [],
}


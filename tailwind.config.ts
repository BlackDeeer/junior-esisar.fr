import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#2B183F',
        primary: '#7E4999',
        white: '#FCFCFC',
        bone: '#F6F6EB',
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
          950: '#20061C',
        },
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;

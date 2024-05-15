/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Playfair Display'],
        basic: ['PT Sans']
      },
      colors: {
        gray: {
          dusty: '#969696',
          cod: '#0F0F0F',
          shaft: '#1F1F1F',
          alto: '#D0D0D0',
          shark: '#191B1C'
        }
      },
      maxWidth: {
        container: '1140px',
        730: '730px',
        470: '470px'
      },
      flex: {
        25: '0 1 25%',
        33: '1 1 33.333%',
        50: '1 1 50%',
        100: '1 1 100%'
      },
      padding: {
        card: '121.74%'
      }
    }
  },
  plugins: []
}

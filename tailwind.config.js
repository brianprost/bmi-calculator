const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        dela: 'Dela Gothic One',
      },
      colors: {
        bmi: {
          blue: '#006AA3',
          red: '#E85E5E',
          yellow: '#FECF72',
          lemon: '#EFE7B7',
          green: '#90D4A4',
        },
      },
    },
  },
  plugins: [require('daisyui')],
}

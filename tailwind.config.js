/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#506690',
        lightBlue: '#869AB8',
        intenseBlue:'#335EEA',
        lightBlack: '#161C2D',
        lightGray: '#F3F7FB',
        softGray: '#6B7C93',
        intenseGray: '#B4C2D3',
        softGreen: '#42BA96',
        softyellow:'#F2C94C',
        softRed: '#DF4759',
        intenseYellow: '#F99716',
        snowBlue:'#D9E2EF',
        strongBlue:'#12263F',
        snowGray:'#6E84A3',
      },
      maxWidth: {
        'dimensions': '680px',
        'size': '1280px', 
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
        softYellow:'#F2C94C',
        softRed: '#DF4759',
        intenseYellow: '#F99716',
        snowBlue:'#D9E2EF',
        strongBlue:'#12263F',
        snowGray:'#6E84A3',
      },
      fontFamily: {
        roboto: ['roboto']
      },
      fontSize: {
        postSubtitle: ['21px', '32px'],
        postInfo:['17px', '26px'],
        '43px': ['42px', '52px'],
        '52px': ['52px', '60px'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
      maxWidth: {
        'dimensions': '680px',
        'size': '1040px', 
      },
      boxShadow: {
        '3xl': '0px 4px 4px 0px #00000040',
      },
      letterSpacing: {
        sevenLetter: '0.07em',
        eightLetter:'0.08em',
      },
      width: {
        '100': '590px',
      },
      height: {
        '90': '380px',
      }
    },
  },
  safelist: [
    'bg-softGreen',
    'bg-softYellow',
    'bg-softRed',
  ],
  plugins: [],
};



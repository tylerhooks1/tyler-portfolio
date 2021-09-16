

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}','/public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
       white: { DEFAULT: '#FFFF'},
        cream:{
          light: '#F7E6C6',
          DEFAULT: '#F2E1C2'
        },
        seagreen: { DEFAULT: '#345F65'},
        burntorange: { DEFAULT: '#D99152'}
       
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1da1f2',
        dark: '#1a91da',
        light: '#a5d0f5',
        lighter: '#d4e5f4',
      },
      inset: {
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '6/5': '120%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

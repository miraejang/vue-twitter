module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1da1f2',
        dark: '#1a91da',
        light: '#a5d0f5',
        lighter: '#d4e5f4',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

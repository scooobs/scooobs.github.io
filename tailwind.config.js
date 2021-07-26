module.exports = {
  purge: {
    enabled: true,
    content: [
      'index.html',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'purpur': '#51247A',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

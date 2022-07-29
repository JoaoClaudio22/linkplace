module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'regal-blue': '#00DBDE',
        'regal-purple': '#FC00FF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        'espn-red': '#FF0033',
        'espn-black': '#000000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

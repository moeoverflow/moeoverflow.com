/* craco.config.js */
const tailwindcss = require('tailwindcss');

module.exports = function({ env }) {
  return {
    style: {
      postcss: {
        plugins: [
          require('postcss-import'),
          require('autoprefixer'),
          tailwindcss('./tailwind.config.js'),
        ],
      }
  },
  };
}
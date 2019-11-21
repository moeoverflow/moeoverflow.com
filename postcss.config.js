//postcss.config.js
const tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    tailwindcss('./tailwind.config.js'),
  ],
};
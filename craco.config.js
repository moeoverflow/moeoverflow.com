/* craco.config.js */
const tailwindcss = require('tailwindcss');

module.exports = function({ env }) {
  return {
    style: {
      sass: {
        loaderOptions: {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
      },
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
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssPresetEnv({
      autoprefixer: { grid: true },
      browsers: [
        'last 4 versions',
        '> 0.5%',
        'IE 9'
      ]
    })
  ],
};


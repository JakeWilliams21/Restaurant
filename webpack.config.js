const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    setup: './src/setup.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
};
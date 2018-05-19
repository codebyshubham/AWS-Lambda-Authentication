const path = require('path');
require('babel-register');

module.exports = {
  entry: {
    usersStore: './src/users/store.js',
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, 'build/Release'),
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: ['babel-loader?presets[]=es2015', 'eslint-loader'] },
      { test: /\.json$/, loaders: ['json-loader'] },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  plugins: [],
  target: 'node',
};

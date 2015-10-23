var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './es6/main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader'},
      {test: /\.ts$/, loader: 'typescript-loader'},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.json$/, loader: 'json'},
      {test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file!img'},
      {test: require.resolve('faker/vendor/password-generator.js'), loader: 'imports?this=>window'},
      {test: require.resolve('PruneCluster/dist/PruneCluster.js'), loader: 'imports?this=>{}!exports?PruneCluster,PruneClusterForLeaflet'},
    ],
  },
  plugins: [
    // Avoid publishing files when compilation failed
    new webpack.NoErrorsPlugin(),
  ],
  stats: {
    // Nice colored output
    colors: true,
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map',
};

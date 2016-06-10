var webpack = require('webpack');

module.exports = {

  entry: {
    app: [ 'webpack/hot/dev-server', './src' ],
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ]
  }

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

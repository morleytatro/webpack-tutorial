const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  name: 'Webpack from scratch',
  target: 'web',
  mode: process.env.NODE_ENV || 'development',
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: '[name].[contenthash].js'
  },
  devServer: {
    port: 9000,
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: require.resolve(__dirname + '/sass-loader.js')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html'
    })
  ],
  resolve: {
    extensions: ['.js']
  }
}
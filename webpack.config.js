const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  name: 'Webpack Tutorial',
  target: 'web',
  mode: process.env.NODE_ENV || 'development', // dev if not explicitly set
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: '[name].[contenthash].js'
  },
  devServer: {
    port: 9000,
    hot: true,
    historyApiFallback: true // we want all pages to run from our index.html
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: require.resolve(__dirname + '/sass-loader.js')
        // strictly for teaching
        // use https://www.npmjs.com/package/sass-loader in a prod setting
      },
      {
        test: /\.jsx?$/,
        use: [{
          // https://www.npmjs.com/package/babel-loader
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-react', {
                runtime: 'automatic'
              }]
            ] // https://babeljs.io/docs/en/babel-preset-react
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html'
    })
  ]
}
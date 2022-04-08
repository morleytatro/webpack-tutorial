module.exports = {
  name: 'Webpack Tutorial',
  target: 'web',
  mode: process.env.NODE_ENV || 'development',
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: '[name].[contenthash].js'
  }
}
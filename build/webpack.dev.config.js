const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { merge } = require('webpack-merge')
const BaseConfig = require('./webpack.base.config')

module.exports = merge(BaseConfig, {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    progress: true,
    hot: true,
    host: '0.0.0.0',
    port: '8000'
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public',
          to: resolvePath('dist')
        }
      ]
    })
  ]
})

function resolvePath (dir) {
  return path.join(__dirname, dir)
}

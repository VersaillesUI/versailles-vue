const path = require('path')
const fs = require('fs')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { merge } = require('webpack-merge')
const BaseConfig = require('./webpack.base.config')

function removeDir (dir) {
  if (!fs.existsSync(dir)) return
  let files = fs.readdirSync(dir)
  for (var i = 0; i < files.length; i++) {
    let newPath = path.join(dir, files[i])
    let stat = fs.statSync(newPath)
    if (stat.isDirectory()) {
      removeDir(newPath)
    } else {
      fs.unlinkSync(newPath)
    }
  }
  fs.rmdirSync(dir)
}

const IS_PROD = process.env.NODE_ENV === 'production'

if (IS_PROD) {
  removeDir('dist')
} else {
  removeDir('dev')
}

const root = process.cwd()

module.exports = merge(BaseConfig, {
  entry: './packages/index.js',
  mode: process.env.NODE_ENV,
  output: {
    library: 'thunisoftUI',
    libraryTarget: 'var',
    path: IS_PROD ? path.resolve(root, 'dist') : path.resolve(root, 'dev'),
    filename: 'Vui.min.js'
  },
  externals: {
    vue: 'Vue'
  },
  devtool: IS_PROD ? false : 'cheap-source-map',
  plugins: [
    new MiniCssExtractPlugin()
  ],
  optimization: IS_PROD ? {
    minimize: true,
    /**
     * @description 去掉console.log
     */
    minimizer: [
      new CssMinimizerPlugin(),
      new UglifyJsPlugin({
        parallel: true,
        sourceMap: false,
        uglifyOptions: {
          compress: {
            drop_console: true
          }
        }
      })
    ]
  } : {
    minimize: false
  }
})

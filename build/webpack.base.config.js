const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const root = process.cwd()

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.md'],
    alias: {
      'packages': path.resolve(process.cwd(), 'packages'),
      'src': path.resolve(process.cwd(), 'src'),
      'thunisoft-ui/esm': path.resolve(process.cwd(), 'packages')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [path.resolve('node_modules/@popperjs')],
        include: [path.resolve('node_modules/@com.thunisoft.artery/artery-ui'), root]
      },
      {
        test: /\.tsx?/,
        loader: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ['\\.vue$'],
              happyPackMode: false,
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.md$/,
        loader: 'raw-loader'
      },
      {
        test: /\.less$/,
        include: [path.resolve('node_modules/@com.thunisoft.artery/artery-ui'), root],
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /.(png$)|(jpg$)|(svg$)|(woff2?$)|(ttf$)|(eot$)/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
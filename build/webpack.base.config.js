const path = require('path')
const VueLoaderPlugin = require('vue-loader-v16/dist/plugin').default

const root = process.cwd()

const babelConfig = {
  cacheDirectory: true,
  presets: [
    '@babel/preset-env'
  ],
  plugins: [
    '@vue/babel-plugin-jsx',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-class-properties'
  ]
}

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.vue', '.md'],
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
        include: [path.resolve('node_modules/@com.thunisoft.artery/artery-ui'), root],
        options: babelConfig
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
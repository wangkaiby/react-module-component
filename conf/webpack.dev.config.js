const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
var baseConfig = require('./webpack.base.config');
const webpack = require('webpack')
var merge = require('webpack-merge');

let config = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/mirco/mirco.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader?modules&camelCase&localIdentName=[local]-[hash:base64:5]!stylus-loader'
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', {
          loader: 'sass-loader',
          options: {
            indentedSyntax: true
          }
        }]
      }
    ]
  },
  devServer: {
    contentBase: '../public',
    hot: true,
    open: true,
    overlay: true
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(), // tips: 报错不阻塞，但是编译后给出提示

  ],
};
module.exports = merge(baseConfig, config);

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
      header: './modules/header/header.js',
      body: './modules/body/body.js',
      footer: './modules/footer/footer.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    performance: {
      maxAssetSize: 100000,
      maxEntrypointSize: 100000,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    devServer: {
      port: 8564,
      contentBase: './public',
      // static: {
      //   directory: path.resolve(__dirname, 'public')
      // },
      open: true
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new CleanWebpackPlugin()
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
      }
    },
    devtool: 'inline-source-map'
};
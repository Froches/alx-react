const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist')
    },
    performance: {
      maxAssetSize: 100000,
      maxEntrypointSize: 100000,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/,
            use: [
                {loader: 'image-webpack-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images/',
                    publicPath: 'images/'
                }
            }
        ]
}
      ]
    },
    devServer: {
      port: 8080,
      contentBase: path.join(__dirname, './dist'),
      open: true,
      hot: true
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
    devtool: 'inline-source-map',
    resolve: {
      extensions: ['.js', '.jsx']
    }
};
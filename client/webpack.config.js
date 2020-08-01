const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'none',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              use: 'babel-loader',
              exclude: /node_modules/
            },
            {
              test: /\.ts(x)?$/,
              use: [
                'awesome-typescript-loader'
              ],
              exclude: /node_modules/
            }
          ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        })
    ],
    devServer: {
        contentBase: './dist'
      }
}
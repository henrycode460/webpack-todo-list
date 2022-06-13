const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
    // filename: 'index.html',
    // title: 'Webpack Todo List',
    // inject: 'body',

  })],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',

      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },

    ],

  },

  devServer: {
    static: path.resolve(__dirname, 'dist'),

  },

  mode: 'development',

};

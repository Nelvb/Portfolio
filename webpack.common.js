const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Asegúrate de que este plugin esté instalado
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack'); // Importa Webpack

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', // Puedes ajustarlo si estás en producción con GitHub Pages
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg|webp)$/,
        use: {
          loader: 'file-loader',
          options: { name: '[name].[ext]' },
        },
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './template.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/NelsonValeroCV.pdf', to: 'NelsonValeroCV.pdf' },
        { from: 'src/styles/dayTheme.css', to: 'styles/dayTheme.css' },
        { from: 'src/img/Icono N portfolio 204623.png', to: 'favicon.png' },
      ],
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
};

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
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
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './template.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/Nelson_Valero_Barcelona_Resume.pdf', to: 'Nelson_Valero_Barcelona_Resume.pdf' },
        { from: 'src/styles/dayTheme.css', to: 'styles/dayTheme.css' },
        { from: 'src/img/Icono N portfolio 204623.png', to: 'favicon.png' },
      ],
    }),
    /**
     * NOTA: DefinePlugin se define en webpack.prod.js para evitar conflictos.
     * 
     * Razón: En webpack.common.js, definir 'process.env' completo causa conflictos
     * con las definiciones específicas en webpack.prod.js. Todas las variables de
     * entorno necesarias se definen explícitamente en la configuración de producción.
     * 
     * Ver webpack.prod.js para la definición completa de variables de entorno.
     */
  ],
};
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new Dotenv({
            safe: false,
            systemvars: true,
            defaults: false
        }),
        new webpack.DefinePlugin({
            'process.env.REACT_APP_EMAILJS_USER_ID': JSON.stringify(process.env.EMAILJS_USER_ID),
            'process.env.REACT_APP_EMAILJS_SERVICE_ID': JSON.stringify(process.env.EMAILJS_SERVICE_ID),
            'process.env.REACT_APP_EMAILJS_TEMPLATE_ID': JSON.stringify(process.env.EMAILJS_TEMPLATE_ID)
        })
    ]
});
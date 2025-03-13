const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');  // Importa el plugin

const port = 3000;
let publicUrl = `ws://localhost:${port}/ws`;

// Configuración para Gitpod y Codespaces
if (process.env.GITPOD_WORKSPACE_URL) {
    const [schema, host] = process.env.GITPOD_WORKSPACE_URL.split('://');
    publicUrl = `wss://${port}-${host}/ws`;
}

// Configuración para Codespaces
if (process.env.CODESPACE_NAME) {
    publicUrl = `wss://${process.env.CODESPACE_NAME}-${port}.preview.app.github.dev/ws`;
}

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        port,
        hot: true,
        allowedHosts: "all",
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, "./"),
        },
        client: {
            webSocketURL: publicUrl
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template.html',  // Asegúrate de que el archivo template.html esté en la raíz
        }),
    ],
});

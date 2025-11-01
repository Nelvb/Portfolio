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
    /**
     * Configuración de performance:
     * Desactivamos hints porque los assets grandes son técnicamente justificados:
     * 
     * - bundle.js (446 KB): SPA completa con React, Router, Anime.js, Boxicons, etc.
     *   Este tamaño es aceptable para una aplicación completa con todas sus dependencias.
     * 
     * - boxicons.svg/fuentes (313-1180 KB): Recursos necesarios para iconos.
     *   Ya optimizados con lazy loading (ver docs/AUDITORIA_IMAGENES.md).
     * 
     * - Nelson_Valero_Barcelona_Resume.pdf (3.79 MB): Recurso descargable estático.
     *   No se carga en la página inicial, solo cuando el usuario lo solicita.
     * 
     * Nota: Los límites de 244 KB son sugerencias generales de Webpack.
     * Para aplicaciones SPA completas, bundles de 400-500 KB son normales y aceptables.
     */
    performance: {
        hints: false,
    },

    /**
     * Configuración de stats:
     * Ocultamos warnings de child compilations (html-webpack-plugin) porque:
     * 
     * - El warning proviene de la compilación secundaria del template HTML
     * - Es el mismo warning de DefinePlugin que ya resolvemos en la compilación principal
     * - No aporta información adicional útil para el desarrollo
     */
    stats: {
        children: false,
    },
    plugins: [
        new Dotenv({
            safe: false,
            systemvars: true,
            defaults: false
        }),
        /**
         * DefinePlugin: Define variables de entorno para uso en el código React.
         * 
         * IMPORTANTE: Este plugin reemplaza las definiciones de webpack.common.js
         * para evitar conflictos. Todas las variables de entorno necesarias deben
         * definirse explícitamente aquí.
         * 
         * Variables globales:
         * - NODE_ENV: Entorno de ejecución (production/development)
         * - BASENAME: Base path para React Router
         * 
         * Variables específicas de EmailJS:
         * - REACT_APP_EMAILJS_USER_ID: ID de usuario de EmailJS
         * - REACT_APP_EMAILJS_SERVICE_ID: ID de servicio de EmailJS
         * - REACT_APP_EMAILJS_TEMPLATE_ID: ID de plantilla de EmailJS
         */
        new webpack.DefinePlugin({
            // Variables de entorno globales (requeridas por la aplicación)
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
            'process.env.BASENAME': JSON.stringify(process.env.BASENAME || '/'),

            // Variables específicas de EmailJS (requeridas para el formulario de contacto)
            'process.env.REACT_APP_EMAILJS_USER_ID': JSON.stringify(process.env.EMAILJS_USER_ID || ''),
            'process.env.REACT_APP_EMAILJS_SERVICE_ID': JSON.stringify(process.env.EMAILJS_SERVICE_ID || ''),
            'process.env.REACT_APP_EMAILJS_TEMPLATE_ID': JSON.stringify(process.env.EMAILJS_TEMPLATE_ID || ''),

            // Variable para validación de email (si existe)
            'process.env.REACT_APP_BACKEND_URL': JSON.stringify(process.env.BACKEND_URL || ''),
        })
    ]
});
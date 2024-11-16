const fs = require('fs');
const path = require('path');

// Obtiene la URL del backend de la variable de entorno de Codespaces
const backendUrl = process.env.GITHUB_CODESPACE_BACKEND_HOST || `http://localhost:5000`;

// Ruta al archivo .env
const envPath = path.resolve(__dirname, '.env');

// Lee el contenido actual del archivo .env
let envContent = '';
if (fs.existsSync(envPath)) {
    envContent = fs.readFileSync(envPath, 'utf-8');
}

// Actualiza o agrega la variable REACT_APP_BACKEND_URL
const updatedContent = envContent
    .split('\n')
    .filter(line => !line.startsWith('REACT_APP_BACKEND_URL='))
    .concat(`REACT_APP_BACKEND_URL=${backendUrl}`)
    .join('\n');

// Escribe los cambios en el archivo .env
fs.writeFileSync(envPath, updatedContent);

console.log(`.env actualizado con REACT_APP_BACKEND_URL=${backendUrl}`);

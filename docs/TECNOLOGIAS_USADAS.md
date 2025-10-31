# 🛠️ TECNOLOGÍAS, HERRAMIENTAS Y STACK DEL PROYECTO

**Proyecto**: Nelvb-portfolio  
**Última actualización**: 2025-01-26

---

## 📑 ÍNDICE

1. [Lenguajes de Programación](#lenguajes-de-programación)
2. [Frameworks y Librerías Frontend](#frameworks-y-librerías-frontend)
3. [Frameworks y Librerías Backend](#frameworks-y-librerías-backend)
4. [Herramientas de Build y Bundling](#herramientas-de-build-y-bundling)
5. [Herramientas de Desarrollo](#herramientas-de-desarrollo)
6. [Bibliotecas de Iconos](#bibliotecas-de-iconos)
7. [Bibliotecas de Animaciones](#bibliotecas-de-animaciones)
8. [APIs y Servicios Externos](#apis-y-servicios-externos)
9. [Recursos desde CDN](#recursos-desde-cdn)
10. [Herramientas de Despliegue](#herramientas-de-despliegue)
11. [Lenguajes y Tecnologías Web](#lenguajes-y-tecnologías-web)

---

## 💻 LENGUAJES DE PROGRAMACIÓN

### JavaScript (ES6+)
**Versión**: ES6+ (Transpilado con Babel)  
**Uso en el proyecto**:
- Lógica principal de la aplicación React
- Componentes, hooks, contextos
- Manejo de eventos y estado
- Validaciones de formularios

**Archivos principales**:
- `src/js/**/*.js` - Todo el código React/JavaScript

**Características usadas**:
- Arrow functions
- Destructuring
- Template literals
- Async/await
- Hooks de React
- Context API

### Python
**Versión**: 3.10  
**Uso en el proyecto**:
- Backend de validación de emails
- Servidor Flask para API

**Archivos principales**:
- `email-verification-backend/verify_email.py`

**Librerías Python**:
- Flask (framework web)
- Flask-CORS (manejo de CORS)
- Requests (peticiones HTTP)

### HTML5
**Uso**: Template base de la aplicación  
**Archivo**: `template.html`

**Características**:
- Estructura semántica
- Meta tags
- Preloader HTML

### CSS3
**Uso**: Estilos y diseño de la aplicación  
**Ubicación**: `src/styles/*.css`

**Características usadas**:
- Flexbox
- CSS Grid (en algunos componentes)
- Media Queries (responsive design)
- Animaciones CSS
- Variables CSS (en algunos lugares)
- Gradientes

---

## ⚛️ FRAMEWORKS Y LIBRERÍAS FRONTEND

### React
**Versión**: `^19.0.0`  
**Tipo**: Framework JavaScript para UI  
**Documentación**: https://react.dev/

**Uso en el proyecto**:
- Estructura completa de componentes
- Hooks (useState, useEffect, useContext, useRef)
- Context API para estado global
- Componentes funcionales

**Características utilizadas**:
```javascript
// Hooks principales
- useState: Estado local de componentes
- useEffect: Efectos secundarios y lifecycle
- useContext: Acceso a contextos
- useRef: Referencias a elementos DOM
- useParams: Parámetros de ruta (React Router)
```

**Archivos principales**:
- `src/js/index.js` - Punto de entrada
- `src/js/layout.js` - Layout principal
- `src/js/views/*.js` - Vistas/páginas
- `src/js/component/*.js` - Componentes

### React DOM
**Versión**: `^19.0.0`  
**Uso**: Renderizado de React en el DOM  
**Importante**: Usa `createRoot` de React 19 (API moderna)

**Código**:
```javascript
import { createRoot } from 'react-dom/client';
const root = createRoot(document.querySelector("#app"));
root.render(<App />);
```

### React Router DOM
**Versión**: `^7.0.2`  
**Tipo**: Librería de enrutamiento  
**Documentación**: https://reactrouter.com/

**Uso en el proyecto**:
- Navegación entre páginas sin recargar
- Rutas dinámicas (`/project/:id`)
- Historial del navegador
- Scroll to top en cambio de ruta

**Componentes utilizados**:
```javascript
- BrowserRouter: Router principal
- Routes: Contenedor de rutas
- Route: Definición de ruta individual
- Link: Enlaces de navegación
- useParams: Hook para parámetros de URL
- useLocation: Hook para ubicación actual
```

**Rutas configuradas**:
- `/` → Home
- `/about` → AboutMe
- `/skills` → Skills
- `/contact` → Contact
- `/projects` → Projects
- `/project/:id` → ProjectDetail
- `*` → Not Found

---

## 🐍 FRAMEWORKS Y LIBRERÍAS BACKEND

### Flask
**Versión**: `*` (última versión)  
**Tipo**: Microframework web de Python  
**Documentación**: https://flask.palletsprojects.com/

**Uso en el proyecto**:
- API REST para validación de emails
- Endpoint `/verify-email` (POST)
- Integración con MailboxLayer API

**Archivo**: `email-verification-backend/verify_email.py`

**Características usadas**:
```python
- @app.route: Definición de rutas
- request.json: Manejo de datos JSON
- jsonify: Respuestas JSON
- CORS: Permite solicitudes cross-origin
```

### Flask-CORS
**Versión**: `*`  
**Uso**: Permitir solicitudes CORS desde el frontend  
**Configuración**: `CORS(app)` permite todos los orígenes

### Requests
**Versión**: `*`  
**Uso**: Realizar peticiones HTTP a MailboxLayer API  
**Código**:
```python
import requests
response = requests.get(url)
```

---

## 📦 HERRAMIENTAS DE BUILD Y BUNDLING

### Webpack
**Versión**: `^5.97.1`  
**Tipo**: Bundler y herramienta de build  
**Documentación**: https://webpack.js.org/

**Uso en el proyecto**:
- Empaquetado de todos los assets
- Compilación de JavaScript y CSS
- Optimización para producción
- Hot Module Replacement (HMR) en desarrollo

**Archivos de configuración**:
- `webpack.common.js` - Configuración compartida
- `webpack.dev.js` - Configuración de desarrollo
- `webpack.prod.js` - Configuración de producción

**Características**:
- Entry point: `./src/js/index.js`
- Output: `build/bundle.js`
- Loaders para JS, CSS e imágenes
- Plugins para HTML, limpieza y copia de archivos

### Webpack CLI
**Versión**: `^5.1.4`  
**Uso**: Interfaz de línea de comandos para Webpack

### Webpack Dev Server
**Versión**: `^5.1.0`  
**Uso**: Servidor de desarrollo con hot reload  
**Puerto**: 3000  
**Características**:
- Hot Module Replacement
- Source maps
- History API Fallback
- Soporte para Gitpod y Codespaces

### Webpack Merge
**Versión**: `^6.0.1`  
**Uso**: Fusionar configuraciones de Webpack

---

## 🔧 HERRAMIENTAS DE DESARROLLO

### Babel
**Versiones**:
- `@babel/core`: `^7.26.0`
- `@babel/cli`: `^7.16.0`
- `@babel/preset-env`: `^7.26.0`
- `@babel/preset-react`: `^7.26.3`
- `@babel/runtime`: `^7.16.3`
- `babel-loader`: `^9.2.1`

**Tipo**: Transpilador JavaScript  
**Documentación**: https://babeljs.io/

**Uso en el proyecto**:
- Transpila ES6+ a JavaScript compatible
- Convierte JSX a JavaScript
- Soporte para características modernas de React

**Configuración** (`package.json`):
```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-runtime"
  ]
}
```

**Plugins adicionales**:
- `@babel/plugin-proposal-class-properties`: Soporte para class properties
- `@babel/plugin-transform-runtime`: Optimización de helpers
- `babel-plugin-transform-class-properties`: Plugin legacy

### ESLint
**Versión**: `^9.16.0`  
**Tipo**: Linter de JavaScript  
**Documentación**: https://eslint.org/

**Configuración**: `.eslintrc`

**Plugins**:
- `eslint-plugin-react`: `^7.27.1` - Reglas para React
- `eslint-webpack-plugin`: `^4.2.0` - Integración con Webpack
- `babel-eslint`: `^10.1.0` - Parser de Babel para ESLint

### Webpack Plugins de Desarrollo

#### Clean Webpack Plugin
**Versión**: `^4.0.0`  
**Uso**: Limpia la carpeta `build/` antes de cada build

#### HTML Webpack Plugin
**Versión**: `^5.6.3`  
**Uso**: Genera `index.html` desde `template.html` e inyecta bundles

#### Copy Webpack Plugin
**Versión**: `^12.0.2`  
**Uso**: Copia archivos estáticos (PDF, CSS, favicon) a `build/`

#### Error Overlay Webpack Plugin
**Versión**: `^1.0.0`  
**Uso**: Muestra errores en tiempo de desarrollo con overlay

#### Dotenv Webpack
**Versión**: `^8.1.0`  
**Uso**: Carga variables de entorno desde `.env`

---

## 🎨 BIBLIOTECAS DE ICONOS

### React Icons
**Versión**: `^5.3.0`  
**Tipo**: Colección de iconos para React  
**Documentación**: https://react-icons.github.io/react-icons/

**Uso en el proyecto**:
- Iconos de Font Awesome (LinkedIn, GitHub, Email)
- Iconos de múltiples paquetes (Feather, Material, etc.)

**Iconos utilizados** (`react-icons/fa`):
```javascript
import {
  FaLinkedin,  // LinkedIn
  FaGithub,     // GitHub
  FaEnvelope,   // Email
  FaPhone,      // Teléfono
  FaMapMarkerAlt // Ubicación
} from "react-icons/fa";
```

**Ubicación de uso**:
- `src/js/component/footer.js`
- `src/js/views/contact.js`

### Font Awesome (React)
**Versiones**:
- `@fortawesome/free-brands-svg-icons`: `^6.6.0`
- `@fortawesome/free-solid-svg-icons`: `^6.6.0`
- `@fortawesome/react-fontawesome`: `^0.2.2`

**Tipo**: Iconos Font Awesome para React  
**Documentación**: https://fontawesome.com/

**Nota**: Instalado pero puede no estar en uso (se usa principalmente `react-icons`)

### Boxicons
**Versión**: `^2.1.4`  
**Tipo**: Iconos open source  
**Documentación**: https://boxicons.com/

**Uso en el proyecto**:
- Iconos en tarjetas de proyectos
- Iconos en detalles de proyecto

**Importaciones**:
```javascript
// Importado en múltiples lugares (debería consolidarse)
import 'boxicons/css/boxicons.min.css';
```

**También desde CDN**:
```html
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'>
```

---

## ✨ BIBLIOTECAS DE ANIMACIONES

### Anime.js
**Versión**: `^3.2.2`  
**Tipo**: Librería de animaciones JavaScript  
**Documentación**: https://animejs.com/

**Uso en el proyecto**:
- Animaciones de entrada en todas las páginas
- Transiciones suaves
- Efectos de fade-in, slide
- Timelines de animación
- Animaciones escalonadas (stagger)

**Características utilizadas**:
```javascript
// Ejemplo de uso
anime({
  targets: ".element",
  opacity: [0, 1],
  translateY: [-20, 0],
  easing: "easeInOutQuad",
  duration: 2000,
  delay: anime.stagger(200)
});
```

**Ubicación de uso**:
- Todas las vistas (`home.js`, `aboutMe.js`, `skills.js`, `contact.js`, `projects.js`, `projectDetail.js`)

**Funciones avanzadas**:
- Stagger: Animaciones escalonadas
- Timeline: Secuencias de animaciones
- Callbacks: `complete` para acciones después de animar

### Typed.js
**Versión**: `^2.1.0`  
**Tipo**: Librería para efectos de texto tipiado  
**Documentación**: https://github.com/mattboldt/typed.js/

**Nota**: Instalado pero **NO SE USA** en el código actual. Código muerto.

---

## 🌐 APIS Y SERVICIOS EXTERNOS

### EmailJS
**Versión**: `^3.2.0`  
**Tipo**: Servicio para enviar emails desde el cliente  
**Documentación**: https://www.emailjs.com/

**Uso en el proyecto**:
- Envío de emails desde el formulario de contacto
- Sin necesidad de backend para envío
- Integración directa desde React

**Configuración requerida** (variables de entorno):
```env
EMAILJS_USER_ID=tu_user_id
EMAILJS_SERVICE_ID=tu_service_id
EMAILJS_TEMPLATE_ID=tu_template_id
```

**Uso en código** (`src/js/views/contact.js`):
```javascript
import emailjs from "emailjs-com";

emailjs.send(
  process.env.REACT_APP_EMAILJS_SERVICE_ID,
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  templateParams,
  process.env.REACT_APP_EMAILJS_USER_ID
);
```

### MailboxLayer API
**Tipo**: API de validación de emails  
**Documentación**: https://mailboxlayer.com/

**Uso en el proyecto**:
- Validación de emails en el backend Flask
- Verifica formato y existencia de emails
- Endpoint: `http://apilayer.net/api/check`

**Configuración**:
- Variable de entorno: `MAILBOXLAYER_API_KEY`
- Backend: `email-verification-backend/verify_email.py`

**Flujo**:
1. Frontend envía email al backend Flask
2. Backend llama a MailboxLayer API
3. Backend retorna resultado de validación

### Cloudinary
**Tipo**: Servicio de gestión de imágenes en la nube  
**Documentación**: https://cloudinary.com/

**Uso en el proyecto**:
- Almacenamiento y optimización de imágenes
- URLs CDN para todas las imágenes de proyectos
- Transformaciones automáticas (f_auto, q_auto)
- Formato WebP para mejor rendimiento

**Ejemplo de URL**:
```
https://res.cloudinary.com/dy1pkrd52/image/upload/f_auto,q_auto/v1736417373/logo_nel-sin-fondo_1_gw079z.webp
```

**Parámetros usados**:
- `f_auto`: Formato automático según navegador
- `q_auto`: Calidad automática optimizada

**Ubicación de uso**:
- `src/js/component/projectsData.js` - Todas las imágenes de proyectos
- `src/js/layout.js` - Preload de imágenes
- `src/js/views/*.js` - Imágenes en vistas

---

## 📚 RECURSOS DESDE CDN

### Bootstrap
**Versión**: `5.1.3`  
**CDN**: `cdn.jsdelivr.net`  
**Tipo**: Framework CSS

**Uso**:
- Grid system (algunos componentes)
- Utilidades CSS
- Componentes base

**Incluido en**: `template.html`
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js">
```

**Nota**: Se carga desde CDN en lugar de ser parte del bundle (oportunidad de optimización)

### Popper.js
**Versión**: `2.10.2`  
**CDN**: `cdn.jsdelivr.net`  
**Uso**: Requerido por Bootstrap para tooltips y popovers

### Google Fonts
**Fuentes utilizadas**:
- `Oooh Baby` - Fuente decorativa
- `EB Garamond` - Fuente serif principal

**CDN**: `fonts.googleapis.com`  
**Incluido en**: `template.html`
```html
<link href="https://fonts.googleapis.com/css2?family=Oooh+Baby&family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap">
```

**Optimización**: Preconnect para mejorar carga
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

---

## 🚀 HERRAMIENTAS DE DESPLIEGUE

### Vercel
**Tipo**: Plataforma de despliegue y hosting  
**Documentación**: https://vercel.com/

**Uso en el proyecto**:
- Despliegue automático desde GitHub
- Configuración: `vercel.json`
- Variables de entorno configuradas en dashboard

**Configuración** (`vercel.json`):
```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Comando de build**: `npm run vercel-build`

### GitHub Pages
**Tipo**: Hosting estático desde GitHub  
**Documentación**: https://pages.github.com/

**Uso en el proyecto**:
- Despliegue alternativo mediante `gh-pages`
- Comando: `npm run deploy`

**Herramienta**: `gh-pages` (`^6.2.0`)
- Publica carpeta `build/` en rama `gh-pages`

---

## 🛠️ HERRAMIENTAS AUXILIARES

### Cross-env
**Versión**: `^7.0.3`  
**Uso**: Establecer variables de entorno multiplataforma (Windows/Linux/Mac)

**Comando**: Usado en scripts de `package.json`
```json
"start": "cross-env NODE_ENV=development ..."
```

### Dotenv
**Versión**: `^16.4.7`  
**Uso**: Carga variables de entorno desde archivo `.env`

### Axios
**Versión**: `^1.7.7`  
**Tipo**: Cliente HTTP  
**Documentación**: https://axios-http.com/

**Nota**: Instalado pero **NO SE USA** en el código actual (posible código muerto)

### Prop Types
**Versión**: `^15.7.2`  
**Uso**: Validación de tipos de props en React  
**Nota**: Instalado pero puede no estar en uso extensivo

### React Polyfills
**Versión**: `0.0.1`  
**Uso**: Polyfills para React  
**Nota**: Puede no ser necesario con React 19

---

## 📦 GESTIÓN DE DEPENDENCIAS

### npm
**Tipo**: Gestor de paquetes de Node.js  
**Archivos**:
- `package.json` - Dependencias y scripts
- `package-lock.json` - Lock file de versiones

### Pip / Pipenv
**Tipo**: Gestor de paquetes de Python  
**Archivos**:
- `Pipfile` - Dependencias Python
- `Pipfile.lock` - Lock file de versiones

**Dependencias Python**:
- Flask
- Flask-CORS
- Requests

---

## 🔄 CONTROL DE VERSIONES

### Git
**Tipo**: Sistema de control de versiones  
**Configuración**:
- `.gitignore` - Archivos ignorados
- `.gitpod.yml` - Configuración de Gitpod

---

## 🎯 LENGUAJES Y TECNOLOGÍAS WEB

### HTML5
**Características usadas**:
- Semántica HTML5
- Meta tags
- Base tag
- Viewport meta tag

### CSS3
**Características usadas**:
- Flexbox
- CSS Grid (limitado)
- Media Queries
- Animaciones CSS
- Variables CSS
- Gradientes lineales
- Transiciones
- Transformaciones

### ES6+ (JavaScript Moderno)
**Características usadas**:
- Arrow Functions
- Destructuring
- Template Literals
- Spread Operator
- Rest Parameters
- Async/Await
- Promises
- Modules (import/export)
- Classes
- Enhanced Object Literals

---

## 📊 RESUMEN DE STACK

### Frontend Stack
```
React 19.0.0
├── React Router 7.0.2 (Routing)
├── Context API (State Management)
├── Anime.js 3.2.2 (Animations)
├── React Icons 5.3.0 (Icons)
└── CSS3 (Styling)

Build Tools:
├── Webpack 5.97.1
├── Babel 7.26.0
└── ESLint 9.16.0
```

### Backend Stack
```
Flask (Python 3.10)
├── Flask-CORS (CORS handling)
└── Requests (HTTP client)

APIs Externas:
├── EmailJS (Email sending)
└── MailboxLayer (Email validation)
```

### Servicios Externos
```
Cloudinary (Image hosting & optimization)
Vercel (Hosting & deployment)
GitHub Pages (Alternative hosting)
```

### CDN Resources
```
Bootstrap 5.1.3
Popper.js 2.10.2
Google Fonts (Oooh Baby, EB Garamond)
Boxicons 2.1.4
```

---

## 📝 NOTAS IMPORTANTES

### Código Muerto / Dependencias No Utilizadas
1. **Typed.js** - Instalado pero no usado
2. **Axios** - Instalado pero no usado (se podría usar en lugar de fetch)
3. **Font Awesome React** - Instalado pero se usa principalmente React Icons
4. **React Polyfills** - Puede no ser necesario con React 19

### Optimizaciones Recomendadas
1. **Bootstrap**: Instalar localmente en lugar de CDN para tree-shaking
2. **Boxicons**: Consolidar importaciones (está en CDN + npm)
3. **Anime.js**: Considerar alternativas más ligeras si es necesario
4. **Imágenes**: Todas desde Cloudinary (bien optimizado)

### Versiones
- **React 19.0.0**: Muy reciente, asegurar compatibilidad
- **Webpack 5.97.1**: Última versión estable
- **Node**: 18.x (especificado en package.json)

---

## 🔗 ENLACES ÚTILES

### Documentación Oficial
- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Anime.js](https://animejs.com/)
- [EmailJS](https://www.emailjs.com/)
- [Flask](https://flask.palletsprojects.com/)
- [Cloudinary](https://cloudinary.com/)

---

**Última actualización**: 2025-01-26  
**Versión del documento**: 1.0


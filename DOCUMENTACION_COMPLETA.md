# 📚 DOCUMENTACIÓN COMPLETA DEL PORTFOLIO

**Proyecto**: Nelvb-portfolio  
**Versión**: 1.0.1  
**Autor**: Nelson Valero Barcelona  
**Última actualización**: 2025-01-26

---

## 📑 ÍNDICE

1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [Árbol Completo de Archivos](#árbol-completo-de-archivos)
3. [Comandos Disponibles](#comandos-disponibles)
4. [Arquitectura de la Aplicación](#arquitectura-de-la-aplicación)
5. [Componentes y Vistas](#componentes-y-vistas)
6. [Sistema de Estilos](#sistema-de-estilos)
7. [Configuración de Webpack](#configuración-de-webpack)
8. [Flujo de la Aplicación](#flujo-de-la-aplicación)
9. [Características Principales](#características-principales)
10. [Variables de Entorno](#variables-de-entorno)
11. [Despliegue](#despliegue)

---

## 📁 ESTRUCTURA DEL PROYECTO

### Organización General

El proyecto sigue una estructura modular basada en React, organizando el código en:
- **`src/js/`**: Lógica de JavaScript/React
- **`src/styles/`**: Archivos CSS
- **`src/img/`**: Imágenes locales (algunas no utilizadas, se usan URLs de Cloudinary)
- **`src/context/`**: Context API de React
- **`public/`**: Archivos estáticos públicos
- **`build/`**: Directorio de salida para producción

---

## 🌳 ÁRBOL COMPLETO DE ARCHIVOS

```
Nelvb-portfolio/
│
├── 📄 .devcontainer/
│   └── devcontainer.json              # Configuración para entornos de desarrollo (Gitpod, Codespaces)
│
├── 📄 .env                             # Variables de entorno (NO se sube a Git)
├── 📄 .env.example                     # Ejemplo de variables de entorno
├── 📄 .eslintrc                        # Configuración de ESLint
├── 📄 .gitignore                       # Archivos ignorados por Git
├── 📄 .gitpod.yml                      # Configuración específica de Gitpod
├── 📄 .htaccess                        # Configuración para Apache (si se despliega en servidor Apache)
├── 📄 .vscode/
│   └── settings.json                   # Configuración del editor VS Code
│
├── 📄 AUDITORIA_PORTFOLIO.md           # Reporte de auditoría del proyecto
├── 📄 CHANGELOG.md                     # Historial de cambios
├── 📄 README.md                        # Documentación básica del proyecto
├── 📄 DOCUMENTACION_COMPLETA.md        # Este documento
│
├── 📁 email-verification-backend/      # Backend para validación de emails
│   └── verify_email.py                # Servicio Flask para verificar emails con MailboxLayer API
│
├── 📁 docs/                            # Documentación adicional
│   ├── 📁 assets/
│   │   └── greeting.py                # Script auxiliar
│   └── deploy.png                     # Imagen de documentación
│
├── 📄 cross-env                        # Script ejecutable (archivo basura - debería eliminarse)
├── 📄 et --hard 6715c8a               # Archivo basura - debería eliminarse
├── 📄 react-hello-webapp@1.0.1        # Carpeta basura - debería eliminarse
│
├── 📁 public/                          # Archivos públicos estáticos
│   └── Nelson_Valero_Barcelona_Resume.pdf  # CV en PDF
│
├── 📁 src/                             # Código fuente principal
│   │
│   ├── 📁 context/                     # Context API de React
│   │   ├── themeContext.js            # Contexto para el tema (dark/light)
│   │   └── themeProvider.js           # Provider del tema con lógica de localStorage
│   │
│   ├── 📁 img/                         # Imágenes locales (algunas no utilizadas)
│   │   ├── hoyNoCocino/
│   │   │   ├── principal1.png
│   │   │   └── registroPrincipal.png
│   │   ├── Icono N portfolio 204623.png   # Favicon
│   │   ├── imagen Nel.jpg                 # Imagen personal
│   │   ├── imagen Nel_animation.gif       # GIF animado usado en AboutMe
│   │   ├── logosinfondo_5.png
│   │   ├── logo_nel-sin-fondo.webp
│   │   └── responsive.png
│   │
│   ├── 📁 js/                          # Código JavaScript/React
│   │   │
│   │   ├── 📁 component/               # Componentes reutilizables
│   │   │   ├── animationContext.js     # Context para controlar animaciones por ruta
│   │   │   ├── customAlert.js          # Componente de alertas personalizadas
│   │   │   ├── footer.js               # Footer con enlaces sociales
│   │   │   ├── languageToggle.js       # Botón toggle para cambiar idioma
│   │   │   ├── projectsCard.js         # Tarjeta individual de proyecto
│   │   │   ├── projectsData.js        # Datos JSON de todos los proyectos
│   │   │   ├── projectsSection.js      # Carrusel/sección de proyectos
│   │   │   ├── scrollToTop.js          # Componente que hace scroll al top en cambio de ruta
│   │   │   ├── settingsMenu.js         # Menú flotante de configuración (tema + idioma)
│   │   │   ├── themeToggle.js          # Botón toggle para cambiar tema
│   │   │   ├── translations.js         # Objeto con todas las traducciones ES/EN
│   │   │   └── useScrollAnimation.js   # Hook personalizado (existe pero no se usa)
│   │   │
│   │   ├── 📁 store/                   # Sistema Flux (NO UTILIZADO - código muerto)
│   │   │   ├── appContext.js           # Context wrapper con injectContext
│   │   │   └── flux.js                 # Store con datos de ejemplo
│   │   │
│   │   ├── 📁 views/                   # Vistas/páginas principales
│   │   │   ├── aboutMe.js              # Página "Sobre Mí"
│   │   │   ├── contact.js              # Página de contacto con formulario
│   │   │   ├── home.js                 # Página de inicio
│   │   │   ├── projectDetail.js        # Detalle individual de proyecto
│   │   │   ├── projects.js             # Lista de proyectos
│   │   │   └── skills.js               # Página de habilidades técnicas
│   │   │
│   │   ├── index.js                    # Punto de entrada de React
│   │   └── layout.js                   # Layout principal con Router y Context Providers
│   │
│   └── 📁 styles/                      # Estilos CSS organizados por componente
│       ├── aboutMe.css                 # Estilos de la página About Me
│       ├── contact.css                 # Estilos del formulario de contacto
│       ├── critical.css                # Estilos críticos para carga inicial
│       ├── customAlert.css             # Estilos de las alertas personalizadas
│       ├── dayTheme.css                 # Estilos del tema claro (modo día)
│       ├── footer.css                  # Estilos del footer
│       ├── home.css                    # Estilos de la página de inicio
│       ├── index.css                   # Estilos globales principales
│       ├── languageToggle.css          # Estilos del botón de idioma
│       ├── loader.css                  # Estilos del preloader
│       ├── projectDetail.css           # Estilos del detalle de proyecto
│       ├── projects.css                # Estilos de la página de proyectos
│       ├── settingsMenu.css            # Estilos del menú de configuración
│       ├── skills.css                  # Estilos de la página de habilidades
│       └── themeToggle.css             # Estilos del botón de tema
│
├── 📄 template.html                    # Template HTML base para Webpack
│
├── 📁 node_modules/                    # Dependencias de npm (generado automáticamente)
│
├── 📄 package.json                     # Configuración de npm y dependencias
├── 📄 package-lock.json                # Lock file de dependencias
├── 📄 Pipfile                          # Configuración de Python (para backend)
├── 📄 Pipfile.lock                     # Lock file de Python
│
├── 📄 updateEnv.js                     # Script para actualizar variables de entorno
│
├── 📄 vercel.json                      # Configuración de despliegue en Vercel
│
└── 📁 webpack/                         # Configuración de Webpack
    ├── webpack.common.js               # Configuración común (dev + prod)
    ├── webpack.dev.js                  # Configuración de desarrollo
    └── webpack.prod.js                 # Configuración de producción

```

---

## 🚀 COMANDOS DISPONIBLES

### Comandos NPM

Todos los comandos se ejecutan desde la raíz del proyecto:

#### `npm start`
**Descripción**: Inicia el servidor de desarrollo local con hot-reload.  
**Comando completo**: `cross-env NODE_ENV=development BASENAME=/ webpack-dev-server --config webpack.dev.js --host 0.0.0.0 --port 3000`  
**Puerto**: `http://localhost:3000`  
**Características**:
- Hot Module Replacement (HMR)
- Source maps para debugging
- Recarga automática al guardar cambios
- Soporte para Gitpod y GitHub Codespaces

**Uso**:
```bash
npm start
```

#### `npm run build`
**Descripción**: Compila el proyecto para producción.  
**Comando completo**: `cross-env NODE_ENV=production BASENAME=/ webpack --config webpack.prod.js`  
**Salida**: Genera archivos optimizados en la carpeta `build/`  
**Características**:
- Minificación de código
- Optimización de assets
- Variables de entorno de producción

**Uso**:
```bash
npm run build
```

**Resultado**: Crea la carpeta `build/` con:
- `index.html`
- `bundle.js` (JavaScript compilado)
- `styles/dayTheme.css`
- `Nelson_Valero_Barcelona_Resume.pdf`
- `favicon.png`

#### `npm run deploy`
**Descripción**: Compila el proyecto y lo despliega en GitHub Pages usando `gh-pages`.  
**Proceso**:
1. Ejecuta `npm run build`
2. Publica la carpeta `build/` en la rama `gh-pages` del repositorio

**Uso**:
```bash
npm run deploy
```

**Requisitos**:
- Repositorio configurado en GitHub
- Permisos para hacer push a `gh-pages`

#### `npm run vercel-build`
**Descripción**: Comando específico para el despliegue en Vercel.  
**Comando completo**: `cross-env NODE_ENV=production BASENAME=/ webpack --config webpack.prod.js`  
**Nota**: Vercel ejecuta este comando automáticamente durante el despliegue.

**Uso manual**:
```bash
npm run vercel-build
```

### Comandos del Backend (Python/Flask)

#### Iniciar el Servidor de Validación de Emails

**Ubicación**: `email-verification-backend/verify_email.py`

**Instalación de dependencias**:
```bash
cd email-verification-backend
pip install flask flask-cors requests
```

**Configuración**:
```bash
export MAILBOXLAYER_API_KEY=tu_api_key
```

**Iniciar servidor**:
```bash
python verify_email.py
```

**Puerto**: Generalmente `http://localhost:5000`

---

## 🏗️ ARQUITECTURA DE LA APLICACIÓN

### Diagrama de Flujo

```
template.html
    ↓
src/js/index.js (Punto de entrada)
    ↓
ThemeProvider (src/context/themeProvider.js)
    ↓
Layout (src/js/layout.js)
    ├── LanguageContext (Context para idiomas)
    ├── AnimationProvider (Control de animaciones)
    └── BrowserRouter (React Router)
        ├── Routes
        │   ├── / → Home
        │   ├── /about → AboutMe
        │   ├── /skills → Skills
        │   ├── /contact → Contact
        │   ├── /projects → Projects
        │   └── /project/:id → ProjectDetail
        ├── SettingsMenu (Menú flotante global)
        └── Footer (Footer global)
```

### Capas de la Aplicación

1. **Capa de Presentación** (`src/js/views/`)
   - Componentes de página/rota
   - Manejan la lógica de UI y animaciones

2. **Capa de Componentes** (`src/js/component/`)
   - Componentes reutilizables
   - Lógica compartida entre vistas

3. **Capa de Estado** (`src/context/`, `src/js/store/`)
   - ThemeContext: Tema dark/light
   - LanguageContext: Idioma ES/EN
   - AnimationContext: Control de animaciones por ruta
   - Flux Store: NO UTILIZADO (código muerto)

4. **Capa de Estilos** (`src/styles/`)
   - CSS modular por componente
   - Critical CSS para carga inicial
   - Tema claro separado (`dayTheme.css`)

5. **Capa de Datos** (`src/js/component/projectsData.js`)
   - Datos estáticos de proyectos
   - Traducciones en `translations.js`

---

## 🧩 COMPONENTES Y VISTAS

### Vistas Principales (`src/js/views/`)

#### 1. **Home** (`home.js`)
**Ruta**: `/`  
**Función**: Página de bienvenida con introducción y navegación principal.

**Características**:
- Animaciones con Anime.js
- Logo central con efecto glow
- Enlaces de navegación animados
- Responsive con IntersectionObserver en móvil

**Traducciones**: `translations[language].home`

#### 2. **AboutMe** (`aboutMe.js`)
**Ruta**: `/about`  
**Función**: Información personal y profesional.

**Características**:
- Tarjeta flip con logo y GIF animado
- Texto descriptivo bilingüe
- Enlaces a CV, navegación y redes sociales
- Animaciones adaptativas según dispositivo

**Traducciones**: `translations[language].about`

#### 3. **Skills** (`skills.js`)
**Ruta**: `/skills`  
**Función**: Muestra habilidades técnicas organizadas por categorías.

**Características**:
- Secciones: Frontend, Backend, Herramientas
- Tarjetas de tecnologías con iconos
- Imagen responsive
- Animaciones escalonadas

**Traducciones**: `translations[language].skills`

#### 4. **Projects** (`projects.js`)
**Ruta**: `/projects`  
**Función**: Lista de proyectos destacados.

**Características**:
- Integra `ProjectsSection` (carrusel)
- Navegación entre proyectos
- Enlaces a detalles individuales
- Animaciones adaptativas

**Traducciones**: `translations[language].projects`

#### 5. **ProjectDetail** (`projectDetail.js`)
**Ruta**: `/project/:id`  
**Función**: Detalle completo de un proyecto específico.

**Características**:
- Carrusel automático de imágenes (3 segundos)
- Descripción completa bilingüe
- Lista de tecnologías
- Enlaces a demo y repositorio
- Botones de navegación manual

**Parámetros**: `id` del proyecto desde URL

**Traducciones**: `translations[language].projectDetail`

#### 6. **Contact** (`contact.js`)
**Ruta**: `/contact`  
**Función**: Formulario de contacto con validación.

**Características**:
- Validación de email con MailboxLayer API
- Integración con EmailJS
- Alertas personalizadas (`CustomAlert`)
- Información de contacto (email, teléfono, LinkedIn, GitHub)
- Animaciones adaptativas

**Traducciones**: `translations[language].contact`

### Componentes Reutilizables (`src/js/component/`)

#### 1. **AnimationContext** (`animationContext.js`)
**Función**: Controla qué rutas han ejecutado sus animaciones iniciales.

**Estado**:
```javascript
{
  home: true,
  about: true,
  skills: true,
  projects: true,
  contact: true,
  projectDetail: true
}
```

**Propósito**: Evitar re-animaciones al navegar de vuelta a una ruta ya visitada.

#### 2. **ProjectsSection** (`projectsSection.js`)
**Función**: Carrusel de proyectos con navegación táctil y por botones.

**Características**:
- Soporte para gestos táctiles (swipe)
- Navegación con botones previo/siguiente
- Indicadores de posición
- Responsive con detección de pantalla

**Dependencias**: `ProjectsData`, `ProjectsCard`

#### 3. **ProjectsCard** (`projectsCard.js`)
**Función**: Tarjeta individual de proyecto en el carrusel.

**Props**:
- `project`: Objeto del proyecto
- `language`: Idioma actual

**Muestra**:
- Imagen de fondo
- Nombre del proyecto
- Descripción breve
- Botón "Ver más"

#### 4. **CustomAlert** (`customAlert.js`)
**Función**: Componente de alerta personalizado para reemplazar `alert()` nativo.

**Props**:
- `show`: Boolean para mostrar/ocultar
- `message`: Mensaje a mostrar
- `type`: 'success' | 'error'
- `onClose`: Callback al cerrar

#### 5. **SettingsMenu** (`settingsMenu.js`)
**Función**: Menú flotante de configuración global.

**Características**:
- Botón hamburguesa flotante
- Modal con opciones de tema e idioma
- Integra `ThemeToggle` y `LanguageToggle`

#### 6. **ThemeToggle** (`themeToggle.js`)
**Función**: Botón para cambiar entre tema oscuro/claro.

**Lógica**:
- Lee/escribe en `localStorage`
- Usa `ThemeContext`
- Aplica/remueve `dayTheme.css`

#### 7. **LanguageToggle** (`languageToggle.js`)
**Función**: Botón para cambiar entre español/inglés.

**Lógica**:
- Usa `LanguageContext`
- Cambia estado global del idioma

#### 8. **Footer** (`footer.js`)
**Función**: Footer global con enlaces sociales y copyright.

**Enlaces**:
- LinkedIn
- GitHub
- Email

**Año dinámico**: Usa `new Date().getFullYear()`

#### 9. **ScrollToTop** (`scrollToTop.js`)
**Función**: Hace scroll al top cuando cambia la ruta.

**Características**:
- Se ejecuta en cada cambio de `location`
- Scroll suave
- Limpia clases de bloqueo de scroll

#### 10. **ProjectsData** (`projectsData.js`)
**Función**: Base de datos estática de proyectos.

**Estructura**:
```javascript
{
  id: number,
  name: string,
  backgroundImage: string,
  description: { en: string, es: string },
  details: {
    fullDescription: { en: string, es: string },
    tecnologiasUsadas: { en: string, es: string },
    tools: string[],
    images: string[]
  },
  projectUrl: string,
  repoUrl: string
}
```

**Proyectos actuales**: 6 proyectos

#### 11. **Translations** (`translations.js`)
**Función**: Objeto con todas las traducciones ES/EN.

**Estructura**:
```javascript
{
  es: {
    home: {...},
    about: {...},
    skills: {...},
    contact: {...},
    projects: {...},
    projectDetail: {...}
  },
  en: { /* mismo formato */ }
}
```

**Nota**: Contiene una duplicación en la clave `projects` para inglés (líneas 134-151)

### Context Providers (`src/context/`)

#### 1. **ThemeProvider** (`themeProvider.js`)
**Función**: Maneja el estado del tema (dark/light).

**Estado**:
- `isDarkMode`: Boolean
- Inicializa desde `localStorage.getItem('theme')`

**Métodos**:
- `toggleTheme()`: Cambia el tema

**Efecto**: Carga/desactiva `dayTheme.css` según el tema

#### 2. **ThemeContext** (`themeContext.js`)
**Función**: Crea el contexto para el tema.

**Exporta**: `ThemeContext` (React Context)

---

## 🎨 SISTEMA DE ESTILOS

### Organización

Cada componente/vista tiene su archivo CSS correspondiente en `src/styles/`:

- `critical.css`: Estilos críticos para carga inicial (preloader, body base)
- `index.css`: Estilos globales compartidos
- `loader.css`: Preloader/spinner
- `dayTheme.css`: Estilos del tema claro (se activa/desactiva dinámicamente)
- `[component].css`: Estilos específicos por componente

### Tema Oscuro vs Claro

**Tema Oscuro (por defecto)**:
- Colores base definidos en `index.css`
- Fondo: gradiente oscuro (#090909 → #b3b3b3)

**Tema Claro**:
- Archivo separado: `dayTheme.css`
- Se carga dinámicamente desde `themeProvider.js`
- Se activa/desactiva con `disabled` en el `<link>`

### CSS Crítico

`critical.css` se importa primero en `index.js` para:
- Estilos del body/html base
- Preloader
- Clases de loading (`is-loading`, `no-scroll`)

### Responsive Design

Los estilos usan media queries para:
- Móvil: `max-width: 768px`
- Tablet: `max-width: 1025px`
- Desktop: `> 1025px`

### Animaciones CSS vs Anime.js

- **CSS**: Transiciones suaves, hover effects
- **Anime.js**: Animaciones complejas de entrada, timelines

---

## ⚙️ CONFIGURACIÓN DE WEBPACK

### webpack.common.js

**Entrada**: `./src/js/index.js`

**Reglas**:
1. **JavaScript**: `babel-loader` para `.js` y `.jsx`
2. **CSS**: `style-loader` + `css-loader`
3. **Imágenes**: `file-loader` para `.png`, `.svg`, `.jpg`, `.gif`, `.jpeg`, `.webp`

**Plugins**:
- `CleanWebpackPlugin`: Limpia la carpeta `build/` antes de compilar
- `HtmlWebpackPlugin`: Genera `index.html` desde `template.html`
- `CopyWebpackPlugin`: Copia archivos estáticos:
  - PDF del CV
  - `dayTheme.css`
  - Favicon
- `DefinePlugin`: Inyecta variables de entorno

**Salida**: `build/bundle.js`

### webpack.dev.js

**Modo**: `development`

**Características**:
- Source maps: `cheap-module-source-map`
- Dev Server en puerto 3000
- Hot Module Replacement (HMR)
- History API Fallback para React Router
- Soporte para Gitpod y GitHub Codespaces

### webpack.prod.js

**Modo**: `production`

**Características**:
- Variables de entorno de EmailJS
- Sin source maps (reducción de tamaño)
- Optimizaciones automáticas de Webpack 5

**Nota**: Podría mejorarse con minificación de CSS, code splitting, etc.

---

## 🔄 FLUJO DE LA APLICACIÓN

### Inicio de la Aplicación

1. **Carga HTML** (`template.html`)
   - Preloader visible
   - Bootstrap desde CDN
   - Fuentes de Google
   - Boxicons desde CDN

2. **Carga JavaScript** (`index.js`)
   - Importa CSS crítico
   - Importa `Layout`
   - Crea root de React
   - Renderiza `App`

3. **App Component** (`index.js`)
   - `ThemeProvider` envuelve todo
   - `Layout` con rutas
   - Elimina preloader después de 500ms

4. **Layout** (`layout.js`)
   - Inicializa `LanguageContext`
   - Precarga 19 imágenes (puede optimizarse)
   - `BrowserRouter` con rutas
   - `SettingsMenu` y `Footer` globales

### Navegación entre Rutas

1. Usuario hace clic en un `Link` de React Router
2. `ScrollToTop` detecta cambio de `location`
3. Hace scroll al top suavemente
4. Router renderiza el componente de la nueva ruta
5. `AnimationContext` verifica si la ruta ya fue animada
6. Si es primera vez, ejecuta animaciones
7. Si ya fue visitada, muestra contenido sin animaciones

### Cambio de Tema

1. Usuario hace clic en `ThemeToggle`
2. `ThemeProvider.toggleTheme()` cambia `isDarkMode`
3. `useEffect` en `ThemeProvider`:
   - Si dark: desactiva `dayTheme.css`, agrega `dark-mode` class
   - Si light: activa `dayTheme.css`, remueve `dark-mode` class
4. Guarda preferencia en `localStorage`

### Cambio de Idioma

1. Usuario hace clic en `LanguageToggle`
2. `toggleLanguage()` en `Layout` cambia `language` state
3. Todos los componentes que usan `useLanguage()` se re-renderizan
4. Nuevas traducciones se aplican desde `translations.js`

### Envío de Formulario de Contacto

1. Usuario completa el formulario
2. Validación client-side
3. Si es válido, llama a EmailJS API
4. EmailJS envía el email
5. Muestra `CustomAlert` con éxito/error

---

## 🌟 CARACTERÍSTICAS PRINCIPALES

### 1. Sistema de Temas Dual

- **Tema Oscuro**: Por defecto, gradientes oscuros
- **Tema Claro**: `dayTheme.css` se carga dinámicamente
- Persistencia en `localStorage`
- Cambio sin recarga de página

### 2. Multiidioma (ES/EN)

- Traducciones completas en `translations.js`
- Cambio dinámico sin recarga
- Context API para estado global
- Botón toggle en `SettingsMenu`

### 3. Animaciones Adaptativas

- **Desktop**: Animaciones con Anime.js al cargar
- **Móvil**: IntersectionObserver para animar al hacer scroll
- Control de estado para evitar re-animaciones
- Transiciones suaves

### 4. Diseño Responsive

- Media queries en todos los CSS
- Breakpoints: 768px (móvil), 1025px (tablet)
- Menús adaptativos
- Imágenes responsivas

### 5. Validación de Formularios

- Validación client-side
- Integración con MailboxLayer API (backend)
- EmailJS para envío
- Alertas personalizadas

### 6. Preloader

- Spinner animado
- Fade-out suave
- Previene scroll durante carga
- Eliminado del DOM después de cargar

### 7. Carrusel de Proyectos

- Navegación táctil (swipe)
- Botones previo/siguiente
- Auto-avance en ProjectDetail
- Indicadores visuales

---

## 🔐 VARIABLES DE ENTORNO

### Frontend (`.env`)

Crear archivo `.env` en la raíz del proyecto:

```env
# EmailJS Configuration
EMAILJS_USER_ID=tu_user_id
EMAILJS_SERVICE_ID=tu_service_id
EMAILJS_TEMPLATE_ID=tu_template_id

# Backend URL (para validación de emails)
REACT_APP_BACKEND_URL=http://localhost:5000

# Basename para Router (generalmente "/")
BASENAME=/
```

### Backend (`email-verification-backend/`)

```env
MAILBOXLAYER_API_KEY=tu_api_key_mailboxlayer
```

### Variables en Producción (Vercel)

Configurar en el dashboard de Vercel:
- `EMAILJS_USER_ID`
- `EMAILJS_SERVICE_ID`
- `EMAILJS_TEMPLATE_ID`

Webpack inyecta estas variables en tiempo de compilación.

---

## 🚀 DESPLIEGUE

### Vercel (Recomendado)

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

**Proceso**:
1. Conectar repositorio de GitHub con Vercel
2. Configurar variables de entorno en Vercel
3. Push a la rama principal
4. Vercel despliega automáticamente

**URL de producción**: Configurada en Vercel

### GitHub Pages

**Comando**:
```bash
npm run deploy
```

**Proceso**:
1. Ejecuta `npm run build`
2. Publica `build/` en rama `gh-pages`
3. GitHub Pages sirve desde `gh-pages`

**Configuración**:
- En GitHub: Settings → Pages → Source: `gh-pages` branch

### Build Local

```bash
npm run build
```

La carpeta `build/` contiene:
- `index.html`
- `bundle.js`
- `styles/dayTheme.css`
- `Nelson_Valero_Barcelona_Resume.pdf`
- `favicon.png`

Puedes servir esta carpeta con cualquier servidor estático.

---

## 📝 NOTAS ADICIONALES

### Archivos a Limpiar

- `cross-env` (archivo ejecutable suelto)
- `et --hard 6715c8a` (archivo basura)
- `react-hello-webapp@1.0.1/` (carpeta basura)
- `src/js/store/` (si no se va a usar Flux)
- Algunas imágenes en `src/img/` que no se usan

### Mejoras Futuras Sugeridas

1. **Code Splitting**: Lazy loading de rutas
2. **Optimización de Webpack**: Minificación de CSS, compresión
3. **Service Worker**: Cache para PWA
4. **Eliminar código muerto**: Flux store no utilizado
5. **Optimizar preload de imágenes**: Solo críticas
6. **Bootstrap local**: En lugar de CDN

### Dependencias Principales

- **React 19.0.0**: Framework principal
- **React Router 7.0.2**: Navegación
- **Anime.js 3.2.2**: Animaciones
- **EmailJS 3.2.0**: Formularios de contacto
- **Webpack 5.97.1**: Bundler
- **Babel**: Transpilación ES6+

---

## 📞 CONTACTO Y SOPORTE

Para preguntas sobre la documentación o el proyecto:

- **Email**: nelsonvbarcelona@gmail.com
- **GitHub**: [github.com/Nelvb](https://github.com/Nelvb)
- **LinkedIn**: [linkedin.com/in/nelvb](https://linkedin.com/in/nelvb)
- **Portfolio**: [portfolio-nelvbs-projects.vercel.app](https://portfolio-nelvbs-projects.vercel.app)

---

**Última actualización**: 2025-01-26  
**Versión del documento**: 1.0


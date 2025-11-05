# 📋 Portfolio Full Stack - Nelson Valero

Portfolio profesional desarrollado con React, implementando animaciones avanzadas, gestión de estado con Context API, routing dinámico y optimizaciones de rendimiento.

## 🛠️ Stack Tecnológico

### Frontend Core
- **React 19.0.0** - Biblioteca UI con hooks y Context API
- **React Router 7.0.2** - Enrutamiento SPA con lazy loading
- **Anime.js 3.2.2** - Animaciones performantes y escalonadas
- **Webpack 5.97.1** - Bundling con code splitting y optimizaciones

### Estilos y UX
- **CSS3** - Estilos modulares por componente
- **Responsive Design** - Media queries adaptativos
- **Theme System** - Modo oscuro/claro con Context API
- **Boxicons** - Iconografía vectorial

### Backend y Servicios
- **Flask** - API serverless para validación de emails
- **EmailJS 3.2.0** - Servicio de envío de formularios
- **Axios 1.7.7** - Cliente HTTP para APIs externas
- **MailboxLayer API** - Validación de correos electrónicos

### Build y Deploy
- **Webpack Dev Server** - Hot reload en desarrollo
- **Babel** - Transpilación ES6+ y JSX
- **Vercel** - Deploy con CI/CD automático
- **GH-Pages** - Deploy alternativo

---

## 📁 Estructura del Proyecto

```
Nelvb-portfolio/
│
├── build/                          # Build de producción (generado)
│   ├── bundle.js                    # Bundle principal optimizado
│   ├── index.html                   # HTML generado
│   ├── styles/
│   │   └── dayTheme.css             # Tema claro (copiado)
│   └── Nelson_Valero_Barcelona_Resume.pdf
│
├── docs/                            # Documentación técnica
│   ├── ANALISIS_SEO_DINAMICO.md
│   ├── AUDITORIA_IMAGENES.md
│   ├── REPORTE_LAZY_LOADING_*.md
│   └── TECNOLOGIAS_USADAS.md
│
├── email-verification-backend/     # Backend Flask
│   └── verify_email.py              # Endpoint de validación email
│
├── public/                          # Assets estáticos públicos
│   └── Nelson_Valero_Barcelona_Resume.pdf
│
├── src/                             # Código fuente principal
│   │
│   ├── context/                     # Context API providers
│   │   ├── languageContext.js       # Gestión de idiomas (ES/EN)
│   │   ├── themeContext.js          # Estado del tema (dark/light)
│   │   └── themeProvider.js        # Provider wrapper del tema
│   │
│   ├── img/                         # Imágenes y assets
│   │   ├── logo_nel-sin-fondo.webp
│   │   ├── imagen Nel.jpg
│   │   └── hoyNoCocino/             # Imágenes de proyectos
│   │
│   ├── js/                          # Código JavaScript/React
│   │   │
│   │   ├── component/               # Componentes reutilizables
│   │   │   ├── animationContext.js  # Context para estado de animaciones
│   │   │   ├── customAlert.js       # Componente de alertas personalizadas
│   │   │   ├── footer.js            # Footer con redes sociales
│   │   │   ├── languageToggle.js    # Switch de idioma
│   │   │   ├── projectsCard.js      # Card individual de proyecto
│   │   │   ├── projectsData.js      # Datos estáticos de proyectos
│   │   │   ├── projectsSection.js   # Sección completa de proyectos
│   │   │   ├── scrollToTop.js       # Scroll automático al cambiar ruta
│   │   │   ├── settingsMenu.js      # Menú de configuración global
│   │   │   ├── themeToggle.js       # Switch de tema
│   │   │   ├── translations.js      # Traducciones i18n
│   │   │   └── useScrollAnimation.js # Hook para animaciones on scroll
│   │   │
│   │   ├── views/                   # Páginas/Vistas principales
│   │   │   ├── home.js              # Landing page con animaciones
│   │   │   ├── aboutMe.js           # Sección "Sobre mí"
│   │   │   ├── skills.js            # Cards de tecnologías con flip 3D
│   │   │   ├── projects.js          # Lista de proyectos con slider
│   │   │   ├── projectDetail.js     # Detalle de proyecto individual
│   │   │   └── contact.js           # Formulario con validación
│   │   │
│   │   ├── index.js                 # Entry point de React
│   │   └── layout.js                # Layout principal con routing
│   │
│   └── styles/                      # Estilos CSS modulares
│       ├── index.css                # Estilos globales y nav-link
│       ├── critical.css             # CSS crítico para FCP
│       ├── loader.css               # Preloader
│       ├── home.css                 # Estilos específicos de Home
│       ├── aboutMe.css              # Estilos de "Sobre mí"
│       ├── skills.css               # Cards de tecnologías (3D flip)
│       ├── projects.css              # Slider de proyectos
│       ├── projectDetail.js          # Detalle de proyecto
│       ├── contact.css               # Formulario de contacto
│       ├── dayTheme.css              # Tema claro (sobrescribe estilos)
│       ├── footer.css                # Footer
│       ├── customAlert.css           # Alertas personalizadas
│       ├── settingsMenu.css          # Menú de configuración
│       ├── themeToggle.css           # Toggle de tema
│       └── languageToggle.css        # Toggle de idioma
│
├── node_modules/                    # Dependencias npm
│
├── template.html                    # Template base para Webpack
├── webpack.common.js                # Configuración común de Webpack
├── webpack.dev.js                   # Config dev (HMR, source maps)
├── webpack.prod.js                  # Config prod (minificación, optimización)
├── package.json                     # Dependencias y scripts
├── vercel.json                      # Configuración de deploy Vercel
├── updateEnv.js                     # Script de actualización de env
└── CHANGELOG.md                     # Historial de cambios
```

---

## 🏗️ Arquitectura del Código

### Punto de Entrada
**`src/js/index.js`** - Renderiza la app React con `createRoot`, maneja el preloader HTML y envuelve la aplicación en `ThemeProvider`.

### Routing
**`src/js/layout.js`** - Define las rutas con React Router:
- `/` → Home
- `/about` → AboutMe
- `/skills` → Skills
- `/projects` → Projects
- `/project/:id` → ProjectDetail (dinámico)
- `/contact` → Contact

Incluye providers anidados: `LanguageProvider` → `AnimationProvider` → `BrowserRouter`.

### Gestión de Estado

#### Context API
- **`animationContext.js`**: Controla qué animaciones ya se ejecutaron para evitar repeticiones en navegación.
- **`languageContext.js`**: Estado del idioma (ES/EN) con traducciones dinámicas.
- **`themeContext.js`**: Estado del tema (dark/light) persistido.

### Animaciones

#### Estrategia Dual
- **Desktop**: Animaciones secuenciales con `anime.js` al montar componente.
- **Mobile**: Animaciones on-scroll usando `IntersectionObserver` para mejor performance.

#### Archivos Clave
- **`home.js`**: Animaciones de entrada con stagger para links.
- **`skills.js`**: Cards de tecnología con animación de entrada + hover 3D flip.
- **`projects.js`**: Slider animado con transiciones suaves.
- **`useScrollAnimation.js`**: Hook para animaciones basadas en scroll.

### Estilos CSS

#### Estructura Modular
Cada vista tiene su CSS asociado. Los estilos globales en `index.css` definen:
- `.nav-link`: Transiciones y hover effects
- `.main-container`: Layout principal
- `.inner-frame`: Marco con borde degradado

#### Tema Dual
`dayTheme.css` sobrescribe estilos en modo claro usando `body.day-mode` como selector padre.

### Componentes Reutilizables

- **`projectsSection.js`**: Slider de proyectos con navegación por dots.
- **`customAlert.js`**: Alertas personalizadas para feedback de usuario.
- **`settingsMenu.js`**: Menú flotante con toggles de tema/idioma.
- **`scrollToTop.js`**: Scroll automático al cambiar de ruta.

---

## ⚙️ Configuración de Build

### Webpack
- **Entry**: `src/js/index.js`
- **Output**: `build/bundle.js` (minificado en producción)
- **Loaders**: Babel (JS/JSX), CSS, File-loader (imágenes)
- **Plugins**: CleanWebpackPlugin, HtmlWebpackPlugin, CopyWebpackPlugin

### Scripts NPM
```bash
npm start          # Dev server (webpack-dev-server)
npm run build      # Build de producción
npm run deploy     # Build + deploy a GH-Pages
npm run vercel-build  # Build para Vercel
```

### Variables de Entorno
- `REACT_APP_EMAILJS_*` - Configuración EmailJS
- `REACT_APP_BACKEND_URL` - URL del backend Flask
- `BASENAME` - Base path para routing (configurado en Webpack)

---

## 🎨 Características Técnicas

### Performance
- **Lazy Loading**: Imágenes con `loading="lazy"`
- **Code Splitting**: Webpack divide bundles por ruta
- **Critical CSS**: `critical.css` carga primero para mejor FCP
- **Image Optimization**: WebP con fallback, optimización en Cloudinary

### SEO
- Títulos dinámicos por ruta (`useEffect` en cada vista)
- Meta tags configurables
- URLs semánticas (`/project/:id`)

### Responsive
- Breakpoints: 768px (mobile), 1024px (tablet), 1600px+ (desktop)
- Animaciones adaptativas según tamaño de pantalla
- Layout flexbox/grid adaptativo

---

## 📦 Dependencias Principales

```json
{
  "react": "^19.0.0",
  "react-router-dom": "^7.0.2",
  "animejs": "^3.2.2",
  "axios": "^1.7.7",
  "emailjs-com": "^3.2.0",
  "webpack": "^5.97.1",
  "@babel/preset-react": "^7.26.3"
}
```

---

## 🚀 Deploy

### Vercel (Producción)
- Build automático en push a `main`
- Variables de entorno configuradas en dashboard
- Configuración en `vercel.json`

### Desarrollo Local
```bash
npm install
npm start  # http://localhost:3000
```

---

## 📝 Notas para Desarrolladores

- **Animaciones**: Evitar animaciones en mobile para mejor performance. Usar `IntersectionObserver` en lugar de scroll listeners.
- **Estado**: El `animationContext` previene animaciones duplicadas al navegar entre rutas.
- **Tema**: Los estilos del tema claro están en `dayTheme.css` y se aplican con `body.day-mode`.
- **Routing**: El `basename` se configura en Webpack para compatibilidad con subdirectorios.

---

**Desarrollado por Nelson Valero Barcelona** | [GitHub](https://github.com/Nelvb) | [LinkedIn](https://linkedin.com/in/nelvb)

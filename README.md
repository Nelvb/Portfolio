# 🌟 Portafolio Personal de Nelson Valero 🌟

¡Bienvenido a mi portafolio personal!  
Aquí encontrarás una recopilación de mis proyectos, habilidades y experiencia como desarrollador Full Stack. 🚀

---

## 🖥️ Descripción General

Este portafolio está diseñado para presentar mi trabajo de manera profesional y atractiva.     
Incluye una introducción sobre mí, mis habilidades, proyectos destacados y una forma de contactarme fácilmente.
El portafolio está desplegado en **Vercel** para una experiencia rápida y fiable.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend:** HTML5, CSS3, React.js, Anime.js
- **Backend:** Flask, Python
- **Email Validation:** MailboxLayer API
- **Formulario de Contacto:** EmailJS
- **Despliegue:** Vercel
- **Empaquetado:** Webpack

---

## 🌟 Características

- **Tema Dual:** Cambio entre modo oscuro y claro adaptado a tus preferencias
- **Multilenguaje:** Disponible en español e inglés
- **Animaciones Adaptativas:** Diferentes animaciones para dispositivos móviles y desktop usando **Anime.js**
- **Diseño Completamente Responsivo:** Experiencia óptima en cualquier dispositivo
- **Validación de Correos:** Validación segura mediante **MailboxLayer API**
- **Secciones Organizadas:**
  - **Inicio:** Una introducción con animaciones atractivas
  - **Sobre Mí:** Información personal y profesional
  - **Habilidades:** Tecnologías y competencias técnicas
  - **Proyectos:** Trabajos destacados con detalles, imágenes y enlaces
  - **Contacto:** Formulario para enviarme mensajes directamente con validación

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

### Frontend

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Nelvb/Portfolio.git
   cd Portfolio
   ```

2. **Instalar las dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```
   REACT_APP_EMAILJS_USER_ID=tu_user_id
   REACT_APP_EMAILJS_SERVICE_ID=tu_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=tu_template_id
   REACT_APP_BACKEND_URL=http://localhost:5000
   ```

4. **Iniciar el servidor de desarrollo:**
   ```bash
   npm start
   ```

### Backend (Servicio de Validación de Email)

1. **Navegar a la carpeta del backend:**
   ```bash
   cd email-verification-backend
   ```

2. **Configurar el entorno virtual:**
   ```bash
   pip install flask flask-cors requests
   ```

3. **Configurar la API key de MailboxLayer:**
   Crea una variable de entorno `MAILBOXLAYER_API_KEY` con tu clave de API.

4. **Iniciar el servidor Flask:**
   ```bash
   python verify_email.py
   ```

5. **Abrir en el navegador:**
   El proyecto estará disponible en http://localhost:3000

---

## 🌍 Despliegue

El frontend está desplegado en **Vercel** para ofrecer un servicio rápido y fiable a los visitantes. El backend para validación de correos electrónicos está implementado como una función serverless para mantener un flujo de trabajo seguro.

---

## 📱 Características Responsivas

El portafolio cuenta con un diseño adaptativo que ofrece:

- **Animaciones Optimizadas:** Diferentes efectos visuales según el dispositivo para mejorar el rendimiento
- **Navegación Adaptativa:** Menú y elementos de interfaz optimizados para pantallas pequeñas
- **Carga Progresiva:** Elementos que se animan al entrar en el viewport en dispositivos móviles
- **Experiencia Táctil Mejorada:** Interacciones optimizadas para dispositivos táctiles

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si tienes ideas para mejorar el portafolio, no dudes en abrir un issue o enviar un pull request.

---

## 📧 Contacto

- **Email:** nelsonvbarcelona@gmail.com
- **GitHub:** [github.com/Nelvb](https://github.com/Nelvb)
- **LinkedIn:** [linkedin.com/in/nelvb](https://linkedin.com/in/nelvb)
- **Portfolio:** [portfolio-nelvbs-projects.vercel.app](https://portfolio-nelvbs-projects.vercel.app)

---

## 📸 Capturas de Pantalla

El portafolio incluye varias secciones con diseños atractivos tanto en modo claro como oscuro:

- Página de inicio con animaciones de bienvenida
- Sección "Sobre mí" con información profesional
- Visualización interactiva de habilidades técnicas
- Galería de proyectos con modales detallados
- Formulario de contacto con validación

---

## 📄 Licencia

Este proyecto está disponible como código abierto bajo la licencia MIT.

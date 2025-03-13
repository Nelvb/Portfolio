// import react into the bundle
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// Importa estilos críticos primero
import "../styles/critical.css";
import "../styles/index.css";
import "../styles/loader.css";
import 'boxicons/css/boxicons.min.css';

import Layout from './layout.js';
import ThemeProvider from "../context/themeProvider";
// Eliminar la importación del Loader

const App = () => {
  useEffect(() => {
    // Animar y eliminar el preloader HTML cuando la app de React está lista
    const htmlPreloader = document.getElementById('preloader');
    if (htmlPreloader) {
      htmlPreloader.classList.add('fade-out');
      setTimeout(() => {
        if (htmlPreloader.parentNode) {
          htmlPreloader.parentNode.removeChild(htmlPreloader);
        }
        document.documentElement.classList.remove('is-loading');
        document.body.classList.remove('no-scroll');
      }, 500);
    }
  }, []);

  // Renderizar directamente el contenido sin usar el componente Loader
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
};

const root = createRoot(document.querySelector("#app"));
root.render(<App />);
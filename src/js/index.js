// import react into the bundle
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// include your index.scss file into the bundle
import "../styles/index.css"; // Tus estilos globales
import "../styles/loader.css"; // Estilos del loader
import 'boxicons/css/boxicons.min.css';

// import your own components
import Layout from './layout.js';
import Loader from './component/loader';
import ThemeProvider from "../context/themeProvider";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula la carga inicial de recursos
    const timer = setTimeout(() => setIsLoading(false), 2000); // Cambia el tiempo según tus necesidades
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <Loader type="global" backgroundColor="#090909" />
  ) : (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
};

const root = createRoot(document.querySelector("#app"));

// render your react application
root.render(<App />);

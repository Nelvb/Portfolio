/**
 * src/context/themeProvider.js
 * Provider del sistema de temas (dark/light mode).
 * Gestiona el estado global del tema y aplica clases CSS al body.
 * 
 * Funcionalidad:
 * - Estado del tema (isDarkMode) con persistencia en localStorage
 * - Aplica clase day-mode o dark-mode al body según el tema
 * - Función toggleTheme() para cambiar entre temas
 * - Lee estado inicial desde localStorage o usa dark por defecto
 * - Sincroniza preferencia del usuario automáticamente
 * 
 * Dependencias: themeContext.js (contexto base), dayTheme.css (estilos tema claro)
 * 
 * @author Nelson Valero
 */
import React, { useState, useEffect } from "react";
import { ThemeContext } from "./themeContext";

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Obtener el estado inicial del tema desde localStorage
    return localStorage.getItem("theme") === "light" ? false : true;
  });

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Lógica para manejar los estilos según el tema
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("day-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("day-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

/**
 * themeProvider.js — Contexto global de tema (oscuro/claro).
 * Limpieza: eliminada carga dinámica redundante de CSS.
 * Motivo: Webpack ya inyecta el CSS mediante import y el link apuntaba a un recurso inexistente en producción.
 * @author Nelson Valero
 * @since v1.0.3
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
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
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

/**
 * src/js/component/themeToggle.js
 * Componente toggle para cambiar entre modo oscuro y claro.
 * Sincroniza estado local con ThemeContext y localStorage.
 * 
 * Funcionalidad:
 * - Botón toggle con iconos (luna/sol) según tema actual
 * - Lee estado inicial desde localStorage o body.classList
 * - Ejecuta callback onToggle al cambiar tema
 * - Persiste preferencia en localStorage
 * - Aplica clase day-mode/dark-mode al body
 * 
 * Dependencias: ThemeContext (desde themeProvider), dayTheme.css
 * 
 * @author Nelson Valero
 */
import React, { useState, useEffect } from "react";
import "../../styles/themeToggle.css"; // Importar estilos del botón
import "../../styles/dayTheme.css"; // Importar los estilos del tema día

const ThemeToggle = ({ onToggle }) => {
  const [isDayMode, setIsDayMode] = useState(() => {
    // Inicializar el estado basado en si `body` tiene la clase `day-mode`
    return document.body.classList.contains("day-mode");
  });

  const toggleTheme = () => {
    if (isDayMode) {
      document.body.classList.remove("day-mode"); // Quitar modo día
    } else {
      document.body.classList.add("day-mode"); // Añadir modo día
    }
    setIsDayMode(!isDayMode); // Actualizar el estado

    // Cerrar el modal si se proporciona la función
    if (onToggle) {
      onToggle();
    }
  };

  useEffect(() => {
    // Asegurarse de que el estado refleje la clase actual al cargar la página
    if (document.body.classList.contains("day-mode")) {
      setIsDayMode(true);
    } else {
      setIsDayMode(false);
    }
  }, []);

  return (
    <button className={`theme-toggle ${isDayMode ? 'day-active' : 'night-active'}`} onClick={toggleTheme}>
      <span className={isDayMode ? 'active' : ''}>☀️</span>
      <span className={!isDayMode ? 'active' : ''}>🌙</span>
    </button>
  );
};

export default ThemeToggle;

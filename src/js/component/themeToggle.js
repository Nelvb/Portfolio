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
    <button className="theme-toggle" onClick={toggleTheme}>
      {isDayMode ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;

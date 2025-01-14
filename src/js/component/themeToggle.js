import React, { useState, useEffect } from "react";
import "../../styles/themeToggle.css"; // Estilos propios del componente

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Obtener el tema inicial desde localStorage
    return localStorage.getItem("theme") === "light" ? false : true;
  });

  const toggleTheme = () => {
    console.log("Botón presionado. Modo oscuro:", !isDarkMode);
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Obtener el head del documento y buscar el <link> del tema claro
    const head = document.head;
    let dayThemeLink = document.getElementById("day-theme-stylesheet");

    // Si no existe el <link>, crearlo dinámicamente
    if (!dayThemeLink) {
      dayThemeLink = document.createElement("link");
      dayThemeLink.id = "day-theme-stylesheet";
      dayThemeLink.rel = "stylesheet";
      dayThemeLink.href = "/src/styles/dayTheme.css"; // Ajusta la ruta según tu proyecto
      dayThemeLink.disabled = true; // Deshabilitado por defecto (modo oscuro)
      head.appendChild(dayThemeLink);
    }

    // Activar o desactivar los estilos dependiendo del estado del tema
    if (isDarkMode) {
      dayThemeLink.disabled = true; // Desactivar tema claro
      document.body.classList.add("dark-mode"); // Añadir clase para estilos oscuros
      localStorage.setItem("theme", "dark");
      console.log("Modo oscuro activado.");
    } else {
      dayThemeLink.disabled = false; // Activar tema claro
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
      console.log("Modo claro activado.");
    }
  }, [isDarkMode]); // Dependencia: Reaccionar solo a cambios en el tema

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {isDarkMode ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;

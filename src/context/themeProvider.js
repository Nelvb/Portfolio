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
    const head = document.head;
    let dayThemeLink = document.getElementById("day-theme-stylesheet");

    if (!dayThemeLink) {
      dayThemeLink = document.createElement("link");
      dayThemeLink.id = "day-theme-stylesheet";
      dayThemeLink.rel = "stylesheet";
      dayThemeLink.href = "/src/styles/dayTheme.css"; // Ajusta la ruta
      head.appendChild(dayThemeLink);
    }

    if (isDarkMode) {
      dayThemeLink.disabled = true; // Desactivar tema claro
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      dayThemeLink.disabled = false; // Activar tema claro
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

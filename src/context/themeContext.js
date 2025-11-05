/**
 * src/context/themeContext.js
 * Contexto React para el sistema de temas (dark/light).
 * Define el contexto base que será consumido por ThemeProvider.
 * 
 * Funcionalidad:
 * - Crea el contexto que almacenará el estado del tema
 * - Se usa en ThemeProvider para gestionar el modo oscuro/claro
 * - Permite acceso global al tema desde cualquier componente
 * 
 * @author Nelson Valero
 */
import React, { createContext } from "react";

// Crear el contexto del tema
export const ThemeContext = createContext(null);

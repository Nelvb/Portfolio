/**
 * src/js/component/settingsMenu.js
 * Menú flotante de configuración global con toggles de tema e idioma.
 * Menú hamburguesa que se muestra/oculta con animación.
 * 
 * Funcionalidad:
 * - Botón hamburguesa flotante con estado abierto/cerrado
 * - Cierra automáticamente al hacer click fuera (useRef + event listener)
 * - Integra ThemeToggle y LanguageToggle
 * - Animación de entrada/salida del menú
 * - Posicionamiento fijo en pantalla
 * 
 * Componentes hijos: ThemeToggle, LanguageToggle
 * 
 * @author Nelson Valero
 */
import React, { useState, useEffect, useRef } from "react";
import ThemeToggle from "./themeToggle";
import LanguageToggle from "./languageToggle";
import "../../styles/settingsMenu.css";

const SettingsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Cerrar al hacer clic fuera del modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isOpen) {
        // Verificar que el click no sea en el botón hamburguesa
        if (!event.target.classList.contains("hamburger-button")) {
          closeMenu();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="settings-menu">
      {/* Botón de hamburguesa */}
      <button className="hamburger-button" onClick={toggleMenu}>
        ☰
      </button>

      {/* Modal flotante */}
      {isOpen && (
        <div className="menu-modal" ref={menuRef}>
          <div className="menu-header">
            <h3>Configuración</h3>
            <button className="close-button" onClick={closeMenu}>
              ✖
            </button>
          </div>
          <div className="menu-options">
            <ThemeToggle onToggle={closeMenu} />
            <LanguageToggle onToggle={closeMenu} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsMenu;

import React, { useState } from "react";
import ThemeToggle from "./themeToggle";
import LanguageToggle from "./languageToggle";
import "../../styles/settingsMenu.css";

const SettingsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="settings-menu">
      {/* Botón de hamburguesa */}
      <button className="hamburger-button" onClick={toggleMenu}>
        ☰
      </button>

      {/* Modal flotante */}
      {isOpen && (
        <div className="menu-modal">
          <div className="menu-header">
            <h3>Configuración</h3>
            <button className="close-button" onClick={toggleMenu}>
              ✖
            </button>
          </div>
          <div className="menu-options">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsMenu;

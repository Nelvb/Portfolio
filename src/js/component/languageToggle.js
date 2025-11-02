import React from "react";
import { useLanguage } from "../../context/languageContext"; // Importa el contexto
import "../../styles/languageToggle.css";

const LanguageToggle = ({ onToggle }) => {
  const { language, toggleLanguage } = useLanguage(); // Usa el contexto global

  const handleToggle = () => {
    toggleLanguage();
    // Cerrar el modal si se proporciona la función
    if (onToggle) {
      onToggle();
    }
  };

  return (
    <button className="language-toggle" onClick={handleToggle}>
      {language === "es" ? "🇬🇧" : "🇪🇸"}
    </button>
  );
};

export default LanguageToggle;

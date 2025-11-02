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
    <button className={`language-toggle ${language === 'es' ? 'es-active' : 'en-active'}`} onClick={handleToggle}>
      <span className={language === 'es' ? 'active' : ''}>ES</span>
      <span className={language === 'en' ? 'active' : ''}>EN</span>
    </button>
  );
};

export default LanguageToggle;

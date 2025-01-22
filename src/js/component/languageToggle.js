import React from "react";
import { useLanguage } from "../layout"; // Importa el contexto
import "../../styles/languageToggle.css";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage(); // Usa el contexto global

  return (
    <button className="language-toggle" onClick={toggleLanguage}>
      {language === "es" ? "🇪🇸" : "🇬🇧"}
    </button>
  );
};

export default LanguageToggle;

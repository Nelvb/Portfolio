import React, { useState } from "react";
import "../../styles/languageToggle.css";

const LanguageToggle = () => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "es"
  );

  const toggleLanguage = () => {
    const newLanguage = language === "es" ? "en" : "es";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    // Aquí puedes implementar la lógica para cambiar el idioma en tu aplicación
    console.log(`Idioma cambiado a: ${newLanguage}`);
  };

  return (
    <button className="language-toggle" onClick={toggleLanguage}>
      {language === "es" ? "🇪🇸" : "🇬🇧"}
    </button>
  );
};

export default LanguageToggle;

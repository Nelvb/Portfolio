/**
 * src/context/languageContext.js
 * Contexto global de idioma (ES/EN) para toda la aplicación.
 * Gestiona el estado del idioma y proporciona traducciones dinámicas.
 * 
 * Funcionalidad:
 * - Estado del idioma actual (es/en) con useState
 * - Persistencia en localStorage para mantener preferencia
 * - Función toggleLanguage() para cambiar idioma
 * - Provider que envuelve toda la app
 * - Hook useLanguage() para acceder desde componentes
 * 
 * Dependencias: translations.js (objeto de traducciones)
 * 
 * @author Nelson Valero
 */

import React, { createContext, useState, useContext, useEffect } from "react";
import { translations } from "../js/component/translations";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("es");

    useEffect(() => {
        const saved = localStorage.getItem("language");
        if (saved) setLanguage(saved);
    }, []);

    const toggleLanguage = () => {
        setLanguage((prev) => {
            const next = prev === "es" ? "en" : "es";
            localStorage.setItem("language", next);
            return next;
        });
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);


/**
 * languageContext.js — Contexto global de idioma (es/en).
 * Extraído desde layout.js para seguir la arquitectura modular de contextos.
 * Mantiene compatibilidad con el hook useLanguage usado por 9 componentes.
 * @author Nelson Valero
 * @since v1.0.3
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


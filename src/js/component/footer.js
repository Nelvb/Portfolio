/**
 * src/js/component/footer.js
 * Footer global de la aplicación con enlaces a redes sociales.
 * Se muestra en todas las páginas del portfolio.
 * 
 * Funcionalidad:
 * - Renderiza iconos de redes sociales (LinkedIn, GitHub, Email)
 * - Enlaces externos a perfiles profesionales
 * - Copyright con año dinámico
 * - Diseño responsive y centrado
 * 
 * Iconos: React Icons (FontAwesome) para consistencia visual
 * 
 * @author Nelson Valero
 */
import React from "react";
import '../../styles/footer.css';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear(); // Obtener el año actual

  return (
    <footer className="footer mt-auto py-3 text-center footer-container">
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/nelvb" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon linkedin-icon" />
        </a>
        <a href="https://github.com/Nelvb" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon github-icon" />
        </a>
        <a href="mailto:nelsonvbarcelona@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="icon email-icon" />
        </a>
      </div>
      <p className="footer-text">
        © {currentYear} Nelson Valero Barcelona - Full Stack Developer
      </p>
    </footer>
  );
};

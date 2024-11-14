import React from 'react';
import "../../styles/projects.css";
import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-inner-frame">
        <div className="projects-title-container">
          <h1 className="projects-title-text">Proyectos</h1>
        </div>

        <div className="projects-contain-container">
          <div className="projects-info-container">
            <p className="projects-description">
              Aquí se encuentran algunos de los proyectos en los que he trabajado. Cada uno de ellos refleja mis habilidades y experiencia en desarrollo Full Stack, utilizando tecnologías como React, Python, SQL, y más.
            </p>
          </div>

          <div className="projects-section">
            {/* Aquí puedes añadir ejemplos de proyectos, enlaces, imágenes o capturas */}
            <p>Próximamente más proyectos...</p>
          </div>

          <div className="link-row">
            <Link to="/" className="link-item">Inicio</Link>
            <Link to="/about" className="link-item">Sobre mí</Link>
            <Link to="/skills" className="link-item">Habilidades</Link>
            <Link to="/contact" className="link-item">Contacto</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

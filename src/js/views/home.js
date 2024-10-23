import React from "react";
import { Link } from "react-router-dom";  // Asume que estás usando React Router
import "../../styles/home.css";
import logoNel from "../../img/logo Nel sin fondo 2(1).png"; 

export const Home = () => (
  <div className="home-container">
    <div className="inner-frame">
      {/* Texto centrado */}
      <div className="title-text">Full Stack Developer</div>  

      {/* Links a la izquierda */}
      <nav className="navigation-links">
        <ul>
          <li><Link to="/about">Sobre mí</Link></li>
          <li><Link to="/skills">Habilidades</Link></li>  
          <li><Link to="/projects">Proyectos</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>

      {/* Logo en el centro */}
      <div className="logo-container">
        <img src={logoNel} alt="Logo Nelson Valero" className="logo-image" />
      </div>
    </div>
  </div>
);

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import anime from "animejs";
import logoNel from "../../img/logosinfondo_5.png";

export const Home = () => {
  useEffect(() => {
    anime({
      targets: ".title-text", // Selecciona el texto por la clase
      opacity: [0, 1],         // Aparece de manera suave
      translateY: [-20, 0],    // Anima de arriba hacia abajo
      easing: "easeInOutQuad",
      duration: 2000,
      delay: 500,
    });
  }, []);

  return (
    <div className="container-fluid home-container d-flex align-items-center justify-content-center">
      <div className="row inner-frame justify-content-center">
        {/* Columna para el título */}
        <div className="col-12 text-center">
          <div className="title-container">
            <h1 className="title-text">Full Stack Developer</h1>
          </div>
        </div>

        {/* Columna para el logo */}
        <div className="col-12 d-flex justify-content-center logo-container">
          <img src={logoNel} alt="Logo Nelson Valero" className="logo-image" />
        </div>

        {/* Columna para los enlaces de navegación */}
        <nav className="col-3 d-flex flex-column align-items-center navigation-links">
          <ul className="list-unstyled">
            <li><Link to="/about">Sobre mí</Link></li>
            <li><Link to="/skills">Habilidades</Link></li>
            <li><Link to="/projects">Proyectos</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

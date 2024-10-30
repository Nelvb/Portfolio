import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import anime from "animejs";
import logoNel from "../../img/logosinfondo_5.png";

export const Home = () => {
  useEffect(() => {
    // Animación del logo
    anime({
      targets: ".logo-image",
      opacity: [0, 1],
      duration: 2000,
      easing: "easeInOutQuad",
      delay: 500, // Retardo antes de que aparezca el logo
    });

    // Animación del título
    anime({
      targets: ".title-text",
      opacity: [0, 1],
      translateY: [-20, 0],
      easing: "easeInOutQuad",
      duration: 2000,
      delay: 3000, // Espera a que el logo termine de aparecer
    });

    // Animación de los enlaces
    anime({
      targets: ".navigation-links li",
      opacity: [0, 1],
      translateX: [-50, 0],
      easing: "easeInOutQuad",
      duration: 1000,
      delay: anime.stagger(200, { start: 4000 }), // Aparece uno a uno después del título
      complete: () => {
        // Añade la clase para el efecto de brillo al borde después de que aparezca el último enlace
        document.querySelector(".inner-frame").classList.add("glow-effect");
      }
    });
  }, []);

  return (
    <div className="container-fluid home-container d-flex align-items-center justify-content-center">
      <div className="row inner-frame justify-content-center">
        <div className="col-12 text-center">
          <div className="title-container">
            <h1 className="title-text">Full Stack Developer</h1>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center logo-container">
          <img src={logoNel} alt="Logo Nelson Valero" className="logo-image" />
        </div>
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

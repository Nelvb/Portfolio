import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import anime from "animejs";
import logoNel from "../../img/logosinfondo_5.png";
import { useAnimation } from "../component/animationContext";
import "../../styles/home.css";

export const Home = () => {
  const { animationState, setAnimationState } = useAnimation();

  useEffect(() => {
    if (animationState.home) {
      anime({
        targets: ".logo-image",
        opacity: [0, 1],
        duration: 2000,
        easing: "easeInOutQuad",
        delay: 500,
      });

      anime({
        targets: ".title-text",
        opacity: [0, 1],
        translateY: [-20, 0],
        easing: "easeInOutQuad",
        duration: 2000,
        delay: 2000,
      });

      anime({
        targets: ".navigation-links li",
        opacity: [0, 1],
        translateX: [-50, 0],
        easing: "easeInOutQuad",
        duration: 1000,
        delay: anime.stagger(200, { start: 4000 }),
        complete: () => {
          document.querySelector(".inner-frame").classList.add("glow-effect");
          setAnimationState((prev) => ({ ...prev, home: false }));
        }
      });
    }
  }, [animationState.home, setAnimationState]);

  return (
    <div className="container-fluid home-container d-flex align-items-center justify-content-center">
      <div className="row inner-frame justify-content-center">
        <div className="col-12 text-center">
          <div className="title-container">
            <h1 className="title-text" style={{ opacity: animationState.home ? 0 : 1 }}>
              Full Stack Developer
            </h1>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center logo-container">
          <img src={logoNel} alt="Logo Nelson Valero" className="logo-image" style={{ opacity: animationState.home ? 0 : 1 }} />
        </div>
        <nav className="col-3 d-flex flex-column align-items-center navigation-links">
          <ul className="list-unstyled">
            <li style={{ opacity: animationState.home ? 0 : 1 }}><Link to="/about">Sobre mí</Link></li>
            <li style={{ opacity: animationState.home ? 0 : 1 }}><Link to="/skills">Habilidades</Link></li>
            <li style={{ opacity: animationState.home ? 0 : 1 }}><Link to="/projects">Proyectos</Link></li>
            <li style={{ opacity: animationState.home ? 0 : 1 }}><Link to="/contact">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

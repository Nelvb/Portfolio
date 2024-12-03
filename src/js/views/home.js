import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import anime from "animejs";
import logoNel from "../../img/logo_nel-sin-fondo.webp";
import { useAnimation } from "../component/animationContext";
import "../../styles/home.css";

export const Home = () => {
  const { animationState, setAnimationState } = useAnimation();

  const animationConfig = {
    easing: "easeInOutQuad",
    duration: 2000,
  };

  const initAnimation = () => {
    document.querySelectorAll(".logo-image, .home-title-text, .home-nav-link").forEach((el) => {
      el.style.opacity = 0;
    });
  };

  const runAnimations = () => {
    anime({
      targets: ".home-title-text",
      opacity: [0, 1],
      translateY: [-20, 0],
      ...animationConfig,
      delay: 500,
    });

    anime({
      targets: ".logo-image",
      opacity: [0, 1],
      ...animationConfig,
      delay: 2000,
    });

    anime({
      targets: ".home-nav-link",
      opacity: [0, 1],
      translateX: [-50, 0],
      ...animationConfig,
      duration: 1000,
      delay: anime.stagger(200, { start: 4000 }),
      complete: () => {
        document.querySelector(".home-inner-frame").classList.add("glow-effect");
        setAnimationState((prev) => ({ ...prev, home: false }));
      },
    });
  };

  useEffect(() => {
    if (animationState.home) {
      initAnimation();
      runAnimations();
    }
    else {
      // Asegurarse de que los elementos sean visibles si la animación no se ejecuta
      document.querySelectorAll(".logo-image, .home-title-text, .home-nav-link").forEach((el) => {
        el.style.opacity = 1;
      });
    }
  }, [animationState.home, setAnimationState]);

  return (
    <div className="home-container">
      <div className="home-inner-frame">
        {/* Título */}
        <div className="home-title-container">
          <h1 className="home-title-text">
            <span>Full Stack</span>
            <span> Developer</span>
          </h1>

        </div>

        {/* Logo y Enlaces */}
        <div className="home-contain-container">
          <div className="home-navigation-links">
            <Link to="/about" className="home-nav-link">Sobre mí</Link>
            <Link to="/skills" className="home-nav-link">Habilidades</Link>
            <Link to="/projects" className="home-nav-link">Proyectos</Link>
            <Link to="/contact" className="home-nav-link">Contacto</Link>
          </div>
          <img src={logoNel} alt="Logo Nelson Valero" className="logo-image" />
        </div>
      </div>
    </div>
  );
};

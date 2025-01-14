import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import anime from "animejs";
import { useAnimation } from "../component/animationContext";
import SettingsMenu from "../component/settingsMenu";
import "../../styles/home.css";

export const Home = () => {
  const { animationState, setAnimationState } = useAnimation();

  const animationConfig = {
    easing: "easeInOutQuad",
    duration: 2000,
  };

  const initAnimation = () => {
    document
      .querySelectorAll(
        ".home-title-text, .decorated-container, .logo-image.home-logo, .home-nav-link"
      )
      .forEach((el) => {
        el.style.opacity = 0;
      });
  };

  const runAnimations = () => {
    anime({
      targets: ".home-title-text",
      opacity: [0, 1],
      translateY: [-20, 0],
      ...animationConfig,
    });

    anime({
      targets: ".decorated-container",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 2000,
      ...animationConfig,
    });

    anime({
      targets: ".logo-image.home-logo",
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
    } else {
      // Se asegura de que los elementos sean visibles si la animación no se ejecuta
      document
        .querySelectorAll(
          ".home-title-text, .decorated-container, .logo-image.home-logo, .home-nav-link"
        )
        .forEach((el) => {
          el.style.opacity = 1;
        });
    }
  }, [animationState.home, setAnimationState]);

  return (
    <div className="home-container">
      {/* Menú hamburguesa para configuraciones */}
      <SettingsMenu />

      <div className="home-inner-frame">
        {/* Título */}
        <div className="home-title-container">
          <h1 className="home-title-text">
            <span>Full Stack</span>
            <span> Developer</span>
          </h1>
        </div>

        {/* Contenedor decorado */}
        <div className="decorated-container">
          {/* Logo y Enlaces */}
          <div className="home-contain-container">
            <div className="home-navigation-links">
              <Link to="/about" className="home-nav-link">
                Sobre mí
              </Link>
              <Link to="/skills" className="home-nav-link">
                Habilidades
              </Link>
              <Link to="/projects" className="home-nav-link">
                Proyectos
              </Link>
              <Link to="/contact" className="home-nav-link">
                Contacto
              </Link>
            </div>
            <img
              src="https://res.cloudinary.com/dy1pkrd52/image/upload/f_auto,q_auto/v1736417373/logo_nel-sin-fondo_1_gw079z.webp"
              alt="Logo Nelson Valero"
              className="logo-image home-logo"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

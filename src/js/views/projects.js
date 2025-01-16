import React, { useEffect } from "react";
import "../../styles/projects.css";
import { Link } from "react-router-dom";
import { ProjectsSection } from "../component/projectsSection";
import anime from "animejs/lib/anime.es.js";
import { useAnimation } from "../component/animationContext";

export const Projects = () => {
  const { animationState, setAnimationState } = useAnimation();

  // Animaciones iniciales
  useEffect(() => {
    // Evitamos reejecuciones si la animación ya ocurrió
    if (!animationState.projects) return;

    // Configuración inicial: elementos invisibles
    document.querySelectorAll(
      ".title-text, .projects-contain-container, .projects-section, .nav-link"
    ).forEach((el) => {
      el.style.opacity = 0;
      if (el.classList.contains("projects-section")) {
        el.style.transform = "translateX(50px)"; // Comienza desplazada hacia la derecha
      }
    });

    // Animación del título
    anime({
      targets: ".title-text",
      opacity: [0, 1],
      translateY: [-20, 0],
      easing: "easeInOutQuad",
      duration: 2000,
    });

    // Animación del contenedor de proyectos
    anime({
      targets: ".projects-contain-container",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 2000,
      complete: () => {
        // Animación de .projects-section
        anime({
          targets: ".projects-section",
          opacity: [0, 1],
          translateX: [150, 0],
          easing: "easeInOutQuad",
          duration: 2000,
          delay: 1000,
          complete: () => {
            // Animación de los enlaces
            anime({
              targets: ".nav-link",
              opacity: [0, 1],
              translateX: [-50, 0],
              easing: "easeInOutQuad",
              duration: 2000,
              delay: anime.stagger(200, { start: 500 }),
            }).finished.then(() => {
              // Marcar la animación como completada
              setAnimationState((prev) => ({ ...prev, projects: false }));
            });
          },
        });
      },
    });
  }, [animationState.projects, setAnimationState]);

  return (
    <div className="main-container">
      <div className="inner-frame">
        {/* Título */}
        <div className="title-container">
          <h1
            className="title-text"
            style={{ opacity: animationState.projects ? 0 : 1 }}
          >
            Proyectos
          </h1>
        </div>

        {/* Contenedor principal */}
        <div
          className="projects-contain-container"
          style={{ opacity: animationState.projects ? 0 : 1 }}
        >
          <ProjectsSection />
        </div>

        {/* Enlaces */}
        <div className="navigation-links">
          <Link to="/" className="nav-link">
            Inicio
          </Link>
          <Link to="/about" className="nav-link">
            Sobre mí
          </Link>
          <Link to="/skills" className="nav-link">
            Habilidades
          </Link>
          <Link to="/contact" className="nav-link">
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
};

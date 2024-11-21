import React, { useEffect, useRef } from "react";
import "../../styles/projects.css";
import { Link } from "react-router-dom";
import { ProjectsSection } from "../component/projectsSection";
import anime from "animejs/lib/anime.es.js";
import { useAnimation } from "../component/animationContext";

export const Projects = () => {
  const slideRef = useRef();

  // Contexto de animación
  const { animationState, setAnimationState } = useAnimation();

  useEffect(() => {
    // Evitamos reejecuciones si la animación ya ocurrió
    if (!animationState.projects) return;

    // Configuración inicial: elementos invisibles
    document.querySelectorAll(
      ".projects-title-text, .projects-contain-container, .link-item"
    ).forEach((el) => {
      el.style.opacity = 0;
    });

    // Animación del título
    anime({
      targets: ".projects-title-text",
      opacity: [0, 1],
      translateY: [-20, 0],
      easing: "easeInOutQuad",
      duration: 2000,
      delay: 500,
      complete: () => {
        // Animación del contenedor de proyectos
        anime({
          targets: ".projects-contain-container",
          opacity: [0, 1],
          translateX: [50, 0],
          easing: "easeInOutQuad",
          duration: 1500,
          complete: () => {
            // Animación de los enlaces
            anime({
              targets: ".link-item",
              opacity: [0, 1],
              translateX: [-50, 0],
              easing: "easeInOutQuad",
              duration: 1000,
              delay: anime.stagger(200),
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
    <div className="projects-container">
      <div className="projects-inner-frame">
        {/* Título */}
        <div className="projects-title-container">
          <h1
            className="projects-title-text"
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
          <ProjectsSection slideRef={slideRef} />
        </div>

        {/* Enlaces */}
        <div className="link-row">
          <Link to="/" className="link-item">
            Inicio
          </Link>
          <Link to="/about" className="link-item">
            Sobre mí
          </Link>
          <Link to="/skills" className="link-item">
            Habilidades
          </Link>
          <Link to="/contact" className="link-item">
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
};

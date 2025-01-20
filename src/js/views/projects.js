import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import "../../styles/projects.css";
import { Link } from "react-router-dom";
import { ProjectsSection } from "../component/projectsSection";
import { useAnimation } from "../component/animationContext";

export const Projects = () => {
  const { animationState, setAnimationState } = useAnimation();

  useEffect(() => {
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

    if (isSmallScreen) {
      // Animaciones para pantallas pequeñas (scroll)
      const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target;
              animateElement(element);
            } else {
              // Ocultar el elemento al salir de la pantalla
              entry.target.style.opacity = 0;
            }
          });
        },
        { threshold: 0.1 } // Detecta cuando el 10% del elemento es visible
      );

      elementsToAnimate.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    } else {
      // Animaciones originales para pantallas grandes
      runDesktopAnimations();
    }
  }, [animationState.projects, setAnimationState]);

  const runDesktopAnimations = () => {
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
  };

  const animateElement = (element) => {
    if (element.classList.contains("title-text")) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateY: [-20, 0],
        easing: "easeInOutQuad",
        duration: 2000,
      });
    } else if (element.classList.contains("projects-contain-container")) {
      anime({
        targets: element,
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2000,
      });
    } else if (element.classList.contains("projects-section")) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateX: [50, 0],
        easing: "easeInOutQuad",
        duration: 2000,
      });
    } else if (element.classList.contains("nav-link")) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateX: [-50, 0],
        easing: "easeInOutQuad",
        duration: 2000,
      });
    }
  };

  return (
    <div className="main-container">
      <div className="inner-frame">
        {/* Título */}
        <div className="title-container">
          <h1 className="title-text animate-on-scroll">Proyectos</h1>
        </div>

        {/* Contenedor principal */}
        <div className="projects-contain-container animate-on-scroll">
          <ProjectsSection />
        </div>

        {/* Enlaces */}
        <div className="navigation-links">
          <Link to="/" className="nav-link animate-on-scroll">
            Inicio
          </Link>
          <Link to="/about" className="nav-link animate-on-scroll">
            Sobre mí
          </Link>
          <Link to="/skills" className="nav-link animate-on-scroll">
            Habilidades
          </Link>
          <Link to="/contact" className="nav-link animate-on-scroll">
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
};

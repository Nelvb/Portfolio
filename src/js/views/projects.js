import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import "../../styles/projects.css";
import { Link } from "react-router-dom";
import { ProjectsSection } from "../component/projectsSection";
import { useAnimation } from "../component/animationContext";
import { useLanguage } from "../layout";

export const Projects = () => {
  const { animationState, setAnimationState } = useAnimation();
  const { language, translations } = useLanguage();
  const t = translations[language].projects;

  const animationConfig = {
    easing: "easeInOutQuad",
    duration: 2000,
  };

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
  }, []);

  const runDesktopAnimations = () => {
    if (!animationState.projects) {
      // Asegurar visibilidad del contenedor al volver
      document.querySelector(".projects-contain-container").style.opacity = 1;
      document.querySelector(".projects-contain-container").style.transform = "none";
      document.querySelector(".projects-section").style.opacity = 1;
      document.querySelector(".projects-section").style.transform = "none";
      return;
    }
  
    // Configuración inicial: elementos invisibles
    document.querySelectorAll(
      ".title-text, .projects-contain-container, .projects-section, .nav-link"
    ).forEach((el) => {
      el.style.opacity = 0; // Inicializamos con opacidad 0
    });
  
    // Animación del título
    anime({
      targets: ".title-text",
      opacity: [0, 1],
      translateY: [-20, 0],
      ...animationConfig,
    });
  
    // Animación del contenedor principal
    anime({
      targets: ".projects-contain-container",
      opacity: [0, 1],
      ...animationConfig,
    });
  
    // Animación de la sección de proyectos
    anime({
      targets: ".projects-section",
      opacity: [0, 1],
      translateX: [50, 0],
      ...animationConfig,
      delay: 2000,
    });
  
    // Animación de los enlaces de navegación
    anime({
      targets: ".nav-link",
      opacity: [0, 1],
      translateX: [-50, 0],
      ...animationConfig,
      delay: anime.stagger(200, { start: 3000 }), // Escalonado después de la sección
    });
  
    // Marcar la animación como completada al final
    setTimeout(() => {
      setAnimationState((prev) => ({ ...prev, projects: false }));
    }, 5000); // Tiempo total estimado para las animaciones
  };
  

  const animateElement = (element) => {
    if (element.classList.contains("title-text")) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateY: [-20, 0],
        ...animationConfig,
      });
    } else if (element.classList.contains("projects-contain-container")) {
      anime({
        targets: element,
        opacity: [0, 1],
        ...animationConfig,
      });
    } else if (element.classList.contains("projects-section")) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateX: [150, 0],
        ...animationConfig,
      });
    } else if (element.classList.contains("nav-link")) {
          anime({
            targets: element,
            opacity: [0, 1],
            translateX: [-50, 0],
            easing: "easeInOutQuad",
            duration: 1000,
          });
    }
  };

  return (
    <div className="main-container">
      <div className="inner-frame">
        {/* Título */}
        <div className="title-container">
          <h1 className="title-text animate-on-scroll">{t.title}</h1>
        </div>

        {/* Contenedor principal */}
        <div className="projects-contain-container animate-on-scroll">
          {/* Separación de sección */}
          <div className="projects-section animate-on-scroll">
            <ProjectsSection />
          </div>
        </div>

        {/* Enlaces */}
        <div className="navigation-links">
          <Link to="/" className="nav-link animate-on-scroll">
            {t.navigation.home}
          </Link>
          <Link to="/about" className="nav-link animate-on-scroll">
            {t.navigation.about}
          </Link>
          <Link to="/skills" className="nav-link animate-on-scroll">
            {t.navigation.skills}
          </Link>
          <Link to="/contact" className="nav-link animate-on-scroll">
            {t.navigation.contact}
          </Link>
        </div>
      </div>
    </div>
  );
};

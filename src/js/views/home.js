import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import anime from "animejs";
import { useAnimation } from "../component/animationContext";
import { useLanguage } from "../../context/languageContext";
import "../../styles/home.css";

export const Home = () => {
  const { animationState, setAnimationState } = useAnimation();



  // Obtener idioma actual del atributo `lang`
  const { language, translations } = useLanguage(); // Usa el contexto del idioma
  const t = translations[language].home; // Traducciones dinámicas

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
      ...animationConfig,
    });

    anime({
      targets: ".logo-image.home-logo",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 4000,
      delay: 1000,
    });

    anime({
      targets: ".home-nav-link",
      opacity: [0, 1],
      translateX: [-50, 0],
      ...animationConfig,
      delay: anime.stagger(200, { start: 2000 }),
      complete: () => {
        document
          .querySelector(".home-inner-frame")
          .classList.add("glow-effect");
        setAnimationState((prev) => ({ ...prev, home: false }));
      },
    });
  };

  const animateElement = (element) => {
    if (element.classList.contains("home-title-text")) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateY: [-20, 0],
        ...animationConfig,
      });
    } else if (element.classList.contains("decorated-container")) {
      anime({
        targets: element,
        opacity: [0, 1],
        ...animationConfig,
      });
    } else if (element.classList.contains("logo-image")) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateY: [-50, 0],
        ...animationConfig,
        delay: 1000,
      });
    } else if (element.classList.contains("home-nav-link")) {
      // Verificar si ya fue animado
      if (!element.dataset.animated) {
        anime({
          targets: element,
          opacity: [0, 1],
          translateX: [-50, 0],
          ...animationConfig,
          delay: anime.stagger(800, { start: 2000 }), // Aplica el delay inicial
          complete: () => {
            document
              .querySelector(".home-inner-frame")
              .classList.add("glow-effect");
            element.dataset.animated = true; // Marcar como animado
            setAnimationState((prev) => ({ ...prev, home: false }));
          },
        });
      } else {
        anime({
          targets: element,
          opacity: [0, 1],
          translateX: [-50, 0],
          ...animationConfig,
        });
      }
    }

  };

  useEffect(() => {
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

    if (isSmallScreen) {
      // Animaciones para pantallas pequeñas con scroll
      const elementsToAnimate = document.querySelectorAll(
        ".home-title-text, .decorated-container, .logo-image.home-logo, .home-nav-link"
      );

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target;
              animateElement(element);
            } else {
              entry.target.style.opacity = 0; // Ocultar al salir de la vista
            }
          });
        },
        { threshold: 0.1 } // Detectar cuando el 10% del elemento es visible
      );

      elementsToAnimate.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    } else {
      // Animaciones originales para pantallas grandes
      if (animationState.home) {
        initAnimation();
        runAnimations();
      } else {
        document
          .querySelectorAll(
            ".home-title-text, .decorated-container, .logo-image.home-logo, .home-nav-link"
          )
          .forEach((el) => {
            el.style.opacity = 1;
          });
      }
    }
  }, []);

  return (
    <div className="home-container">
      <div className="home-inner-frame">
        {/* Título */}
        <div className="home-title-container">
          <h1 className="home-title-text animate-on-scroll">
            <span>Full Stack</span>
            <span> Developer</span>
          </h1>
        </div>

        {/* Contenedor decorado */}
        <div className="decorated-container animate-on-scroll">
          {/* Logo y Enlaces */}
          <div className="home-contain-container">
            <div className="home-navigation-links">
              <Link to="/about" className="home-nav-link animate-on-scroll">
                {t.links.about}
              </Link>
              <Link to="/skills" className="home-nav-link animate-on-scroll">
                {t.links.skills}
              </Link>
              <Link to="/projects" className="home-nav-link animate-on-scroll">
                {t.links.projects}
              </Link>
              <Link to="/contact" className="home-nav-link animate-on-scroll">
                {t.links.contact}
              </Link>
            </div>
            <img
              src="https://res.cloudinary.com/dy1pkrd52/image/upload/f_auto,q_auto/v1736417373/logo_nel-sin-fondo_1_gw079z.webp"
              alt="Logo Nelson Valero"
              className="logo-image home-logo animate-on-scroll"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

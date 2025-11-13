/**
 * src/js/views/skills.js
 * Vista de habilidades técnicas con cards interactivas de tecnologías.
 * Muestra tecnologías frontend, backend y herramientas con efecto flip 3D.
 * 
 * Funcionalidad:
 * - Cards de tecnología con animación flip 3D al hover (CSS transform)
 * - Animaciones de entrada escalonadas con anime.js
 * - Estrategia dual: desktop (secuencial) vs mobile (on-scroll)
 * - Tres categorías: frontend, backend, tools
 * - Actualiza título dinámico para SEO
 * 
 * Características: Cards con perspectiva 3D, hover flip effect, lazy loading de imágenes
 * 
 * @author Nelson Valero
 */
import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import "../../styles/skills.css";
import { Link } from "react-router-dom";
import { useAnimation } from "../component/animationContext";
import { useLanguage } from "../../context/languageContext";

export const Skills = () => {
  const { animationState, setAnimationState } = useAnimation();
  const { language, translations } = useLanguage();
  const t = translations[language].skills;

  // SEO: Título dinámico de la página
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Habilidades - Nelson Valero';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const animationConfig = {
    easing: "easeInOutQuad",
    duration: 2000,
  };


  useEffect(() => {
    if (!animationState.contact) return;

    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

    if (isSmallScreen) {
      // En mobile: CSS ya tiene visibility: hidden y opacity: 0 desde el inicio
      // IntersectionObserver detectará cuando entren en viewport y los "despertará"
      const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

      // Crear el observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Elemento entra en viewport: animarlo (lo "despierta")
              const element = entry.target;
              animateElement(element);
            } else {
              // Elemento sale de viewport: ocultarlo para re-animación
              entry.target.style.opacity = 0;
              entry.target.style.visibility = 'hidden';
            }
          });
        },
        {
          threshold: 0.1, // Detecta cuando el 10% del elemento es visible
          rootMargin: '0px' // Sin margen adicional
        }
      );

      // Observar todos los elementos
      elementsToAnimate.forEach((el) => {
        observer.observe(el);
      });

      // Cleanup: desconectar observer al desmontar
      return () => {
        observer.disconnect();
      };
    } else {
      // Pantallas grandes
      // Ocultar todos los elementos para animaciones desktop
      document
        .querySelectorAll(
          ".title-text, .devices-image-wrapper, .skills-contain-container, .devices-image, .skills-description, .skills-section-title, .skill-card, .nav-link"
        )
        .forEach((el) => {
          el.style.opacity = 0;
        });

      if (!animationState.skills) {
        // Si ya se cargó previamente, deja todo montado
        document
          .querySelectorAll(
            ".title-text, .devices-image-wrapper, .skills-contain-container, .devices-image, .skills-description, .skills-section-title, .skill-card, .nav-link"
          )
          .forEach((el) => {
            el.style.opacity = 1;
            el.style.transform = "none"; // Resetea transformaciones
          });
      } else {
        // Primera vez en pantallas grandes: ejecuta las animaciones
        runDesktopAnimations();
      }
    }
  }, [animationState.skills, setAnimationState]);


  const runDesktopAnimations = () => {
    anime({
      targets: ".title-text",
      opacity: [0, 1],
      translateY: [-20, 0],
      ...animationConfig,
    });

    anime({
      targets: ".devices-image-wrapper",
      opacity: [0, 1],
      translateX: [50, 0],
      ...animationConfig,
    });

    // Animación del contenedor principal
    anime({
      targets: ".skills-contain-container",
      opacity: [0, 1],
      ...animationConfig,
    });

    // Animación de la imagen y descripción
    anime({
      targets: ".devices-image",
      opacity: [0, 1],
      translateX: [-50, 0],
      ...animationConfig,
      delay: 1000,
    });

    anime({
      targets: ".skills-description",
      opacity: [0, 1],
      translateX: [50, 0],
      ...animationConfig,
      delay: 1000,
    });

    // Animación de los títulos de las secciones
    anime({
      targets: ".skills-section-title",
      opacity: [0, 1],
      translateY: [20, 0],
      ...animationConfig,
      delay: anime.stagger(200, { start: 2000 }),
    });

    // Animación de las tarjetas de habilidades
    anime({
      targets: ".skill-card",
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 1200,
      easing: "easeInOutQuad",
      delay: anime.stagger(100, { start: 3000 }),
    });

    // Animación de los enlaces de navegación
    anime({
      targets: ".nav-link",
      opacity: [0, 1],
      translateX: [-50, 0],
      ...animationConfig,
      delay: anime.stagger(200, { start: 5000 }),
      complete: () => {
        setAnimationState((prev) => ({ ...prev, skills: false }));
      },
    });
  };

  const animateElement = (element) => {
    // PRIMERO: "Despertar" el elemento cambiando visibility a visible (anime.js no anima visibility bien)
    element.style.visibility = 'visible';

    // DESPUÉS: Animar opacity y transform
    if (element.classList.contains("title-text")) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateY: [-20, 0],
        ...animationConfig,
      });
    } else if (element.classList.contains("skills-contain-container")) {
      anime({
        targets: element,
        opacity: [0, 1],
        ...animationConfig,
      });
    } else if (element.classList.contains("devices-image-wrapper")) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateX: [-50, 0],
        ...animationConfig,
      });
    } else if (element.classList.contains("devices-image")) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateX: [-50, 0],
        ...animationConfig,
      });
    } else if (element.classList.contains("skills-description")) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateX: [50, 0],
        ...animationConfig,
      });
    } else if (element.classList.contains("skills-section-title")) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateY: [20, 0],
        ...animationConfig,
      });
    } else if (element.classList.contains("skill-card")) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateY: [20, 0],
        ...animationConfig,
      });
    } else if (element.classList.contains("nav-link")) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateX: [-50, 0],
        ...animationConfig,
        delay: anime.stagger(800),
      });
    }
  };

  const skills = {
    frontend: [
      { img: "https://i.postimg.cc/30kDqnkN/html5.png", name: "HTML5" },
      { img: "https://i.postimg.cc/3WzyRjyj/css3.png", name: "CSS3" },
      { img: "https://i.postimg.cc/9DhrPWYr/new-javascript-image.png", name: "JavaScript" },
      { img: "https://i.ibb.co/ZGX4pcH/react.png", name: "React" },
      { img: "https://res.cloudinary.com/dy1pkrd52/image/upload/v1744627225/Next.js_kar2nc.webp", name: "Next.js" },
      { img: "https://res.cloudinary.com/dy1pkrd52/image/upload/v1744627202/typescript_ymgaph.webp", name: "TypeScript" },
      { img: "https://res.cloudinary.com/dy1pkrd52/image/upload/v1744627214/tailwind_icon_gf2x6r.webp", name: "Tailwind CSS" },
      { img: "https://i.ibb.co/TBrhsGj/bootstrap.png", name: "Bootstrap" },
      { img: "https://res.cloudinary.com/dy1pkrd52/image/upload/f_auto,q_auto/v1762377751/portfolio/skills/vuejs-original_xhhbc5.svg", name: "Vue 3" },
    ],
    backend: [
      { img: "https://i.ibb.co/g7xk09Q/python.png", name: "Python" },
      { img: "https://i.ibb.co/SNMgmK3/sql.png", name: "SQL" },
      { img: "https://i.ibb.co/ZTfFr8p/mysql.png", name: "MySQL" },
      { img: "https://i.ibb.co/NC3cZ1x/postgresql.png", name: "PostgreSQL" },
      { img: "https://i.ibb.co/61r8Xyz/sqlalchemy.png", name: "SQLAlchemy" },
      { img: "https://i.ibb.co/nwh7LxK/jwt.png", name: "JWT" },
      { img: "https://i.ibb.co/txY283N/flask.png", name: "Flask" },
    ],
    tools: [
      { img: "https://i.ibb.co/b3dWBmR/git.png", name: "Git" },
      { img: "https://i.ibb.co/hRMqd8J/github.png", name: "GitHub" },
      { img: "https://i.ibb.co/sKjVJPp/vsc.png", name: "Visual Studio Code" },
      { img: "https://res.cloudinary.com/dy1pkrd52/image/upload/v1744629036/cloudinary-sin_fondowebp_go2x5j.webp", name: "Cloudinary" },
      { img: "https://res.cloudinary.com/dy1pkrd52/image/upload/v1744628711/jest_dvgt8s.webp", name: "Jest" },
      { img: "https://res.cloudinary.com/dy1pkrd52/image/upload/v1744628265/githubCodespace_yvbtqy.webp", name: "GitHub Codespaces" },
      { img: "https://res.cloudinary.com/dy1pkrd52/image/upload/v1744627793/DockerSinFondo_gaa4zv.webp", name: "Docker" },
      { img: "https://res.cloudinary.com/dy1pkrd52/image/upload/f_auto,q_auto/v1762377823/portfolio/skills/logo_ytr6wq.svg", name: "Vite" },
      { img: "https://res.cloudinary.com/dy1pkrd52/image/upload/f_auto,q_auto/v1762378072/portfolio/skills/pytest-original_ifh2gw.svg", name: "Pytest" },
      { img: "https://res.cloudinary.com/dy1pkrd52/image/upload/f_auto,q_auto/v1762377829/portfolio/skills/logo_iafp0t.svg", name: "Vitest" },
    ],
  };

  return (
    <div className="main-container">
      <div className="inner-frame">
        <div className="title-container">
          <h1 className="title-text animate-on-scroll">{t.title}</h1>
        </div>

        <div className="skills-contain-container animate-on-scroll">
          <div className="skills-info-container">
            <p className="skills-description animate-on-scroll">
              {t.description}
            </p>
            <div className="devices-image-wrapper animate-on-scroll">
              <img
                src="https://res.cloudinary.com/dy1pkrd52/image/upload/f_auto,q_auto/v1736418289/responsive_qqsiux.png"
                alt="Minimalist devices illustration"
                className="devices-image"
                loading="lazy"
              />
            </div>
          </div>

          <div className="skills-sections">
            {Object.entries(skills).map(([section, skillsList]) => (
              <section className="skills-column" key={section}>
                <h2 className="skills-section-title animate-on-scroll">
                  {t[section]}
                </h2>
                <div className="skills-cards-container">
                  {skillsList.map((skill, index) => (
                    <div className="skill-card animate-on-scroll" key={index}>
                      <div className="skill-card-inner">
                        <div className="skill-card-front">
                          <img
                            src={skill.img}
                            alt={skill.name}
                            className="skill-icon"
                            loading="lazy"
                          />
                        </div>
                        <div className="skill-card-back">
                          <p>{skill.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <div className="navigation-links">
          <Link to="/" className="nav-link animate-on-scroll">
            {t.navigation.home}
          </Link>
          <Link to="/about" className="nav-link animate-on-scroll">
            {t.navigation.about}
          </Link>
          <Link to="/projects" className="nav-link animate-on-scroll">
            {t.navigation.projects}
          </Link>
          <Link to="/contact" className="nav-link animate-on-scroll">
            {t.navigation.contact}
          </Link>
        </div>
      </div>
    </div>
  );
};

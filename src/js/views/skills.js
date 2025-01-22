import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import "../../styles/skills.css";
import { Link } from "react-router-dom";
import { useAnimation } from "../component/animationContext";
import { useLanguage } from "../layout";

export const Skills = () => {
  const { animationState, setAnimationState } = useAnimation();
  const { language, translations } = useLanguage();
  const t = translations[language].skills;

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
              // Si el elemento sale de la pantalla, lo ocultamos para que se vuelva a animar
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
      easing: "easeInOutQuad",
      duration: 2000,
    });

    // Animación de la imagen y descripción
    anime({
      targets: ".devices-image",
      opacity: [0, 1],
      translateX: [-50, 0],
      ...animationConfig,
      delay: 2000,
    });

    anime({
      targets: ".skills-description",
      opacity: [0, 1],
      translateX: [50, 0],
      ...animationConfig,
      delay: 2000,
    });

    // Animación de los títulos de las secciones
    anime({
      targets: ".skills-section-title",
      opacity: [0, 1],
      translateY: [20, 0],
      ...animationConfig,
      delay: anime.stagger(200, { start: 3000 }),
    });

    // Animación de las tarjetas de habilidades
    anime({
      targets: ".skill-card",
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 1200,
      easing: "easeInOutQuad",
      delay: anime.stagger(100, { start: 4000 }),
    });

    // Animación de los enlaces de navegación
    anime({
      targets: ".nav-link",
      opacity: [0, 1],
      translateX: [-50, 0],
      duration: 2000,
      easing: "easeInOutQuad",
      delay: anime.stagger(200, { start: 6000 }),
      complete: () => {
        setAnimationState((prev) => ({ ...prev, skills: false }));
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
    } else if (element.classList.contains("devices-image-wrapper")) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateX: [-50, 0],
        easing: "easeInOutQuad",
        duration: 2000,
      });
    } else if (element.classList.contains("devices-image")) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateX: [-50, 0],
        easing: "easeInOutQuad",
        duration: 2000,
      });
    } else if (element.classList.contains("skills-description")) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateX: [50, 0],
        easing: "easeInOutQuad",
        duration: 2000,
      });
    } else if (element.classList.contains("skills-section-title")) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateY: [20, 0],
        easing: "easeInOutQuad",
        duration: 2000,
      });
    } else if (element.classList.contains("skill-card")) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateY: [20, 0],
        easing: "easeInOutQuad",
        duration: 1200,
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

  const skills = {
    frontend: [
      { img: "https://i.postimg.cc/30kDqnkN/html5.png", name: "HTML5" },
      { img: "https://i.postimg.cc/3WzyRjyj/css3.png", name: "CSS3" },
      {
        img: "https://i.postimg.cc/9DhrPWYr/new-javascript-image.png",
        name: "JavaScript",
      },
      { img: "https://i.ibb.co/ZGX4pcH/react.png", name: "React" },
      { img: "https://i.ibb.co/TBrhsGj/bootstrap.png", name: "Bootstrap" },
    ],
    backend: [
      { img: "https://i.ibb.co/g7xk09Q/python.png", name: "Python" },
      { img: "https://i.ibb.co/SNMgmK3/sql.png", name: "SQL" },
      { img: "https://i.ibb.co/ZTfFr8p/mysql.png", name: "MySQL" },
      { img: "https://i.ibb.co/NC3cZ1x/postgresql.png", name: "PostgreSQL" },
      { img: "https://i.ibb.co/61r8Xyz/sqlalchemy.png", name: "SQLAlchemy" },
      { img: "https://i.ibb.co/nwh7LxK/jwt.png", name: "JWT" },
      { img: "https://i.ibb.co/txY283N/flask.png", name: "Flask" },
      { img: "https://i.ibb.co/F3RGPmG/nodejs.png", name: "Node.js" },
    ],
    tools: [
      { img: "https://i.ibb.co/b3dWBmR/git.png", name: "Git" },
      { img: "https://i.ibb.co/hRMqd8J/github.png", name: "GitHub" },
      { img: "https://i.ibb.co/sKjVJPp/vsc.png", name: "Visual Studio Code" },
      { img: "https://i.ibb.co/LnCNcTJ/cloudinary.png", name: "Cloudinary" },
      { img: "https://i.ibb.co/7k78zmg/jest.png", name: "Jest" },
      {
        img: "https://i.ibb.co/P9pr8fz/github-codespaces.png",
        name: "GitHub Codespaces",
      },
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
                loading="eager"
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
                            loading="eager"
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
}
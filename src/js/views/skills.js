import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import minimalDevicesImage from "../../img/responsive.png";
import "../../styles/skills.css";
import { Link } from "react-router-dom";
import { useAnimation } from "../component/animationContext";

export const Skills = () => {
  const { animationState, setAnimationState } = useAnimation();

  useEffect(() => {
    // Evitamos reejecuciones si la animación ya ocurrió
    if (!animationState.skills) return;

    // Configuración inicial: elementos invisibles
    document.querySelectorAll(".title-text, .skills-contain-container, .devices-image, .skills-description, .skills-section-title, .skill-card, .nav-link, .skills-info-container").forEach(el => {
      el.style.opacity = 0;
    });

    // Animación inicial del título
    anime({
      targets: ".title-text",
      opacity: [0, 1],
      translateY: [-20, 0],
      easing: "easeInOutQuad",
      duration: 2000,
      delay: 500,
      complete: () => {
        anime({
          targets: ".skills-contain-container",
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: 1500,
          delay: 500,
          complete: () => {
            // Animación del contenedor de información (imagen y descripción)
            anime({
              targets: ".skills-info-container",
              opacity: [0, 1],
              easing: "easeInOutQuad",
              duration: 1500,
              delay: 500,
              complete: () => {
                anime({
                  targets: ".devices-image",
                  opacity: [0, 1],
                  translateX: [-50, 0],
                  easing: "easeInOutQuad",
                  duration: 1500,
                });

                anime({
                  targets: ".skills-description",
                  opacity: [0, 1],
                  translateX: [50, 0],
                  easing: "easeInOutQuad",
                  duration: 1500,
                  delay: 200,
                  complete: () => {
                    // Animación de los títulos de las secciones
                    anime({
                      targets: ".skills-section-title",
                      opacity: [0, 1],
                      translateY: [20, 0],
                      easing: "easeInOutQuad",
                      duration: 1500,
                      delay: anime.stagger(300),
                      complete: () => {
                        // Animación de las tarjetas de habilidades en filas
                        const skillCards = document.querySelectorAll(".skill-card");
                        skillCards.forEach((card, index) => {
                          anime({
                            targets: card,
                            opacity: [0, 1],
                            translateY: [20, 0],
                            easing: "easeInOutQuad",
                            duration: 1200,
                            delay: 100 * Math.floor(index / 3), // Asegura que las tarjetas se animen en filas
                          });
                        });

                        // Animación de los enlaces de navegación, solo después de que las tarjetas se hayan cargado
                        anime({
                          targets: ".nav-link",
                          opacity: [0, 1],
                          translateX: [-50, 0],
                          easing: "easeInOutQuad",
                          duration: 1000,
                          delay: anime.stagger(200, { start: 2000 }),
                        }).finished.then(() => {
                          // Marcar la animación como completada
                          setAnimationState((prev) => ({ ...prev, skills: false }));
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }, [animationState.skills, setAnimationState]);

  const skills = {
    frontend: [
      { img: "https://i.postimg.cc/30kDqnkN/html5.png", name: "HTML5" },
      { img: "https://i.postimg.cc/3WzyRjyj/css3.png", name: "CSS3" },
      { img: "https://i.postimg.cc/9DhrPWYr/new-javascript-image.png", name: "JavaScript" },
      { img: "https://i.ibb.co/ZGX4pcH/react.png", name: "React" },
      { img: "https://i.ibb.co/TBrhsGj/bootstrap.png", name: "Bootstrap" }
    ],
    backend: [
      { img: "https://i.ibb.co/g7xk09Q/python.png", name: "Python" },
      { img: "https://i.ibb.co/SNMgmK3/sql.png", name: "SQL" },
      { img: "https://i.ibb.co/ZTfFr8p/mysql.png", name: "MySQL" },
      { img: "https://i.ibb.co/NC3cZ1x/postgresql.png", name: "PostgreSQL" },
      { img: "https://i.ibb.co/61r8Xyz/sqlalchemy.png", name: "SQLAlchemy" },
      { img: "https://i.ibb.co/nwh7LxK/jwt.png", name: "JWT" },
      { img: "https://i.ibb.co/txY283N/flask.png", name: "Flask" },
      { img: "https://i.ibb.co/F3RGPmG/nodejs.png", name: "Node.js" }
    ],
    tools: [
      { img: "https://i.ibb.co/b3dWBmR/git.png", name: "Git" },
      { img: "https://i.ibb.co/hRMqd8J/github.png", name: "GitHub" },
      { img: "https://i.ibb.co/sKjVJPp/vsc.png", name: "Visual Studio Code" },
      { img: "https://i.ibb.co/LnCNcTJ/cloudinary.png", name: "Cloudinary" },
      { img: "https://i.ibb.co/7k78zmg/jest.png", name: "Jest" },
      { img: "https://i.ibb.co/P9pr8fz/github-codespaces.png", name: "GitHub Codespaces" }
    ]
  };

  return (
    <div className="main-container">
      <div className="inner-frame">
        <div className="title-container">
          <h1 className="title-text">Habilidades</h1>
        </div>

        <div className="skills-contain-container">
          <div className="skills-info-container">
            <p className="skills-description">
              Desarrollador Full Stack con capacidades en frontend y backend, utilizando tecnologías como HTML, CSS, JavaScript, React, Python, SQL y Flask. Creo interfaces atractivas con Bootstrap y gestiono el control de versiones con Git y GitHub. Para bases de datos, utilizo PostgreSQL y SQLAlchemy, con autenticación mediante JWT. Me gusta llevar cada proyecto desde la planificación hasta la implementación, asegurando que sea seguro, eficiente y adaptado a cualquier dispositivo.
            </p>
            <img
              src={minimalDevicesImage}
              alt="Minimalist devices illustration"
              className="devices-image"
              loading="eager"
            />
          </div>

          <div className="skills-sections">
            <section className="skills-column">
              <h2 className="skills-section-title">Frontend</h2>
              <div className="skills-cards-container">
                {skills.frontend.map((skill, index) => (
                  <div className="skill-card" key={index}>
                    <div className="skill-card-inner">
                      <div className="skill-card-front">
                        <img src={skill.img} alt={skill.name} className="skill-icon" />
                      </div>
                      <div className="skill-card-back">
                        <p>{skill.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="skills-column">
              <h2 className="skills-section-title">Backend</h2>
              <div className="skills-cards-container">
                {skills.backend.map((skill, index) => (
                  <div className="skill-card" key={index}>
                    <div className="skill-card-inner">
                      <div className="skill-card-front">
                        <img src={skill.img} alt={skill.name} className="skill-icon" />
                      </div>
                      <div className="skill-card-back">
                        <p>{skill.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="skills-column">
              <h2 className="skills-section-title">Herramientas</h2>
              <div className="skills-cards-container">
                {skills.tools.map((skill, index) => (
                  <div className="skill-card" key={index}>
                    <div className="skill-card-inner">
                      <div className="skill-card-front">
                        <img src={skill.img} alt={skill.name} className="skill-icon" />
                      </div>
                      <div className="skill-card-back">
                        <p>{skill.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="navigation-links">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/about" className="nav-link">Sobre mí</Link>
          <Link to="/projects" className="nav-link">Proyectos</Link>
          <Link to="/contact" className="nav-link">Contacto</Link>
        </div>
      </div>
    </div>
  );
};
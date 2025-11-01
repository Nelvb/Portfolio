import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import nelAnimation from "../../img/imagen Nel_animation.gif";
import anime from "animejs/lib/anime.es.js";
import { useAnimation } from "../component/animationContext";
import { useLanguage } from "../../context/languageContext";
import "../../styles/aboutMe.css";

export const AboutMe = () => {
  const { animationState, setAnimationState } = useAnimation();
  const [isFlipped, setIsFlipped] = useState(false);
  const infoContainerRef = useRef(null);
  const cardContainerRef = useRef(null);

  const { language, translations } = useLanguage();
  const t = translations[language].about;

  const roleRef = useRef(null);

  const animationConfig = {
    easing: "easeInOutQuad",
    duration: 2000,
  };

  useEffect(() => {
    // Configuración inicial: oculta el contenedor principal
    const containContainer = document.querySelector(".about-contain-container");
    if (animationState.about) {
      containContainer.style.opacity = 0;
    } else {
      containContainer.style.opacity = 1; // Mantiene visible al volver
    }

    const isSmallScreen = window.matchMedia("(max-width: 1025px)").matches;
    const isVerySmallScreen = window.matchMedia("(max-width: 768px)").matches;

    if (animationState.about) {
      // Animar el título primero
      anime({
        targets: ".title-text",
        opacity: [0, 1],
        translateY: [-20, 0],
        ...animationConfig,
      });
      // Animar el contenedor principal
      anime({
        targets: containContainer,
        opacity: [0, 1],
        ...animationConfig,
      });
      // Continuar con las animaciones internas
      if (isVerySmallScreen) {
        animateVerySmallScreen();
        console.log("Pantalla muy pequeña detectada");
      } else if (isSmallScreen) {
        animateSmallScreen();
      } else {
        animateLargeScreen();
      }
    }
  }, [animationState.about]);

  const animateVerySmallScreen = () => {
    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
    const text = t.role;
    // Configuración del IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Elemento visible: inicia la animación
            animateElement(entry.target);
          } else {
            // Elemento fuera de la vista: resetea el estado
            entry.target.style.opacity = 0; // Reinicia la visibilidad
          }
        });
      },
      { threshold: 0.1 } // Detecta cuando el 10% del elemento es visible
    );

    elementsToAnimate.forEach((el) => observer.observe(el));

    const animateElement = (element) => {
      if (element.classList.contains("title-text")) {
        anime({
          targets: element,
          opacity: [0, 1],
          translateY: [-20, 0],
          ...animationConfig,
        });
      } else if (element.classList.contains("about-heading-garamond")) {
        anime({
          targets: element,
          opacity: [0, 1],
          translateX: [50, 0],
          ...animationConfig,
        });
      } else if (element.classList.contains("about-title")) {
        anime({
          targets: element,
          opacity: [0, 1],
          translateX: [-50, 0],
          ...animationConfig,
        });
      } else if (element.classList.contains("about-heading")) {
        anime({
          targets: element,
          opacity: [0, 1],
          translateX: [-50, 0],
          ...animationConfig,
        });
      } else if (element.classList.contains("about-heading-large")) {
        const text = t.role;
        let index = 0; // Índice inicial para el efecto de escritura
        element.innerHTML = ""; // Reiniciar el contenido del texto antes de empezar

        const typeEffect = () => {
          // Evitar sobrescritura del contenido al iniciar de nuevo
          if (index < text.length) {
            element.innerHTML += text[index];
            index++;
            setTimeout(typeEffect, 50); // Controla la velocidad del efecto
          }
        };

        anime({
          targets: element,
          opacity: [0, 1],
          translateX: [-30, 0],
          ...animationConfig,
        }).finished.then(() => {
          // Inicia el efecto de escritura después de la animación de entrada
          if (element.innerHTML === "") {
            typeEffect();
          }
        });
      } else if (element.classList.contains("about-paragraph")) {
        anime({
          targets: element,
          opacity: [0, 1],
          translateX: [50, 0],
          ...animationConfig,
        });
      } else if (element.classList.contains("card-container")) {
        // Asegúrate de reiniciar la visibilidad
        element.style.opacity = 0; // Siempre invisible al salir

        anime({
          targets: element,
          opacity: [0, 1], // Aparece con la animación
          translateY: [50, 0], // Desplazamiento inicial para la animación
          ...animationConfig,
        }).finished.then(() => {
          // Acción secundaria después de aparecer (por ejemplo, voltear)
          setTimeout(() => {
            setIsFlipped(true); // Mostrar el reverso
            setTimeout(() => {
              setIsFlipped(false); // Regresar al frente
            }, 1500); // Tiempo que la tarjeta permanece volteada
          }, 600); // Tiempo antes de iniciar el giro
        });
      } else if (element.classList.contains("nav-link")) {
        anime({
          targets: element,
          opacity: [0, 1],
          translateX: [-50, 0],
          ...animationConfig,
          delay: anime.stagger(800),
        }).finished.then(() => {
          setAnimationState((prev) => ({ ...prev, about: false }));
        });
      }
    };
  };

  const animateSmallScreen = () => {
    const headings = document.querySelectorAll(
      ".about-description-container h5, .about-description-container h4"
    );
    const devElement = document.querySelector(".about-heading-large");
    const text = t.role; // Esto se actualiza dinámicamente según el idioma
    devElement.innerHTML = ""; // Reiniciar contenido del efecto escritura

    anime({
      targets: headings,
      opacity: [0, 1],
      translateX: [-50, 0],
      ...animationConfig,
      delay: anime.stagger(200, { start: 1000 }),
    }).finished.then(() => {
      // Efecto escritura
      let index = 0;
      const typeEffect = () => {
        if (index < text.length) {
          devElement.innerHTML += text[index];
          index++;
          setTimeout(typeEffect, 50);
        } else {
          anime({
            targets: ".about-paragraph",
            opacity: [0, 1],
            translateX: [-50, 0],
            ...animationConfig,
          }).finished.then(() => {
            // Aparición de la tarjeta
            anime({
              targets: cardContainerRef.current,
              opacity: [0, 1],
              ...animationConfig,
            }).finished.then(() => {
              // Voltear la tarjeta después de 1 segundo
              setTimeout(() => {
                setIsFlipped(true); // Mostrar el reverso
                setTimeout(() => {
                  setIsFlipped(false); // Regresar al frente
                  // Aparición de los enlaces después de volver al frente
                  anime({
                    targets: ".nav-link",
                    opacity: [0, 1],
                    translateX: [-50, 0],
                    ...animationConfig,
                    delay: anime.stagger(200),
                  }).finished.then(() => {
                    setAnimationState((prev) => ({ ...prev, about: false }));
                  });
                }, 2000); // Tiempo que la tarjeta se queda en el reverso
              }, 1000); // Espera 1 segundo antes de voltear la tarjeta
            });
          });
        }
      };
      typeEffect();
    });
  };

  const animateLargeScreen = () => {
    const infoContainer = infoContainerRef.current.getBoundingClientRect();
    const cardContainer = cardContainerRef.current.getBoundingClientRect();
    const translateXToCenter =
      (infoContainer.width - cardContainer.width) / 2 -
      cardContainer.x +
      infoContainer.x;

    anime({
      targets: cardContainerRef.current,
      translateX: translateXToCenter,
      opacity: 0,
    }).finished.then(() => {
      anime({
        targets: cardContainerRef.current,
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2000,
        delay: 500,
      }).finished.then(() => {
        setTimeout(() => {
          setIsFlipped(true);
          anime({
            targets: cardContainerRef.current,
            translateX: 0,
            ...animationConfig,
          }).finished.then(() => {
            setIsFlipped(false);

            const headings = document.querySelectorAll(
              ".about-description-container h5, .about-description-container h4"
            );
            anime({
              targets: headings,
              opacity: [0, 1],
              translateX: [-50, 0],
              ...animationConfig,
              delay: anime.stagger(200),
            }).finished.then(() => {
              const devElement = document.querySelector(".about-heading-large");
              if (devElement) {
                const text = t.role; // Esto se actualiza dinámicamente según el idioma
                devElement.innerHTML = "";
                let index = 0;

                const typeEffect = () => {
                  if (index < text.length) {
                    devElement.innerHTML += text[index];
                    index++;
                    setTimeout(typeEffect, 50);
                  } else {
                    anime({
                      targets: ".about-paragraph",
                      opacity: [0, 1],
                      translateX: [-50, 0],
                      ...animationConfig,
                      delay: 200,
                    });
                    anime({
                      targets: ".nav-link",
                      opacity: [0, 1],
                      translateX: [-50, 0],
                      ...animationConfig,
                      delay: anime.stagger(200, { start: 1500 }),
                    }).finished.then(() => {
                      setAnimationState((prev) => ({ ...prev, about: false }));
                    });
                  }
                };
                typeEffect();
              }
            });
          });
        }, 500);
      });
    });
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="main-container">
      <div className="inner-frame">
        <div className="title-container">
          <h1
            className="title-text animate-on-scroll"
            style={{ opacity: animationState.about ? 0 : 1 }}
          >
            {t.title}
          </h1>
        </div>

        <div
          className="about-contain-container animate-on-scroll"
          ref={infoContainerRef}
        >
          <div className="about-description-container">
            <h5
              className="about-heading-garamond animate-on-scroll"
              style={{ opacity: animationState.about ? 0 : 1 }}
            >
              {t.greeting}
            </h5>
            <h4
              className="about-title animate-on-scroll"
              style={{ opacity: animationState.about ? 0 : 1 }}
            >
              Nelson Valero Barcelona
            </h4>
            <h5
              className="about-heading animate-on-scroll"
              style={{
                display: "inline",
                opacity: animationState.about ? 0 : 1,
              }}
            >
              <span className="about-heading-garamond animate-on-scroll">
                {t.rolePrefix}
              </span>
              <span className="about-heading-large animate-on-scroll">
                {animationState.about ? "" : t.role}
              </span>
            </h5>
            <p
              className="about-paragraph animate-on-scroll"
              style={{ opacity: animationState.about ? 0 : 1 }}
            >
              {t.description}
            </p>
          </div>

          <div
            className="card-container animate-on-scroll"
            ref={cardContainerRef}
            onClick={handleCardClick}
            style={{ opacity: animationState.about ? 0 : 1 }}
          >
            <div className={`card ${isFlipped ? "flipped" : ""}`}>
              <div className="card-inner">
                <div className="card-front">
                  <img
                    src="https://res.cloudinary.com/dy1pkrd52/image/upload/f_auto,q_auto/v1736417373/logo_nel-sin-fondo_1_gw079z.webp"
                    alt="Logo Nelson Valero"
                    className="logo-image"
                    loading="eager"
                  />
                </div>
                <div className="card-back">
                  <img
                    src={nelAnimation}
                    alt="Nelson Valero"
                    className="about-image"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="navigation-links">
          <a
            href="/Nelson_Valero_Barcelona_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link cv-link animate-on-scroll"
            style={{ opacity: animationState.about ? 0 : 1 }}
          >
            {t.links.cv}
          </a>


          <Link
            to="/"
            className="nav-link animate-on-scroll"
            style={{ opacity: animationState.about ? 0 : 1 }}
          >
            {t.links.home}
          </Link>
          <Link
            to="/skills"
            className="nav-link animate-on-scroll"
            style={{ opacity: animationState.about ? 0 : 1 }}
          >
            {t.links.skills}
          </Link>
          <Link
            to="/projects"
            className="nav-link animate-on-scroll"
            style={{ opacity: animationState.about ? 0 : 1 }}
          >
            {t.links.projects}
          </Link>
          <Link
            to="/contact"
            className="nav-link animate-on-scroll"
            style={{ opacity: animationState.about ? 0 : 1 }}
          >
            {t.links.contact}
          </Link>
        </div>
      </div>
    </div>
  );
};

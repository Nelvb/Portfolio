import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Importar Link para la navegación
import "../../styles/aboutMe.css";
import anime from "animejs";
import logoNel from "../../img/logosinfondo_5.png";
import nelAnimation from "../../img/imagen Nel_animation.gif";

export const AboutMe = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [hoverDelay, setHoverDelay] = useState(null);
  const [isTitleLoaded, setIsTitleLoaded] = useState(false);
  const [hasDescriptionAnimated, setHasDescriptionAnimated] = useState(false);

  useEffect(() => {
    anime({
      targets: ".card-logo",
      opacity: [0, 1],
      duration: 2000,
      easing: "easeInOutQuad",
      delay: 500,
    });

    anime({
      targets: ".about-title-text",
      opacity: [0, 1],
      translateY: [-20, 0],
      easing: "easeInOutQuad",
      duration: 2000,
      delay: 2000,
      complete: () => {
        setIsTitleLoaded(true);
      },
    });
  }, []);

  const handleMouseEnter = () => {
    if (!isTitleLoaded) return;

    if (hoverDelay) clearTimeout(hoverDelay);

    const timeout = setTimeout(() => {
      if (!isMoved) {
        setIsMoved(true);
        anime({
          targets: ".card-inner",
          rotateY: "180deg",
          duration: 800,
          easing: "easeInOutQuad",
          complete: () => {
            setTimeout(() => {
              anime({
                targets: ".card-container",
                translateX: "70%",
                duration: 1000,
                easing: "easeInOutQuad",
                complete: () => {
                  setIsMoved(true);

                  if (!hasDescriptionAnimated) {
                    setTimeout(() => {
                      startDescriptionAnimation();
                      setHasDescriptionAnimated(true);
                    }, 500);
                  }
                },
              });
            }, 500);
          },
        });
      }
    }, 300);

    setHoverDelay(timeout);
  };

  const handleMouseLeave = () => {
    if (hoverDelay) clearTimeout(hoverDelay);

    anime({
      targets: ".card-inner",
      rotateY: "0deg",
      duration: 800,
      easing: "easeInOutQuad",
    });

    setIsMoved(false);
  };

  const startDescriptionAnimation = () => {
    const descriptionContainer = document.querySelector(".about-description-container");
    if (descriptionContainer) {
      descriptionContainer.classList.remove("invisible"); // Mostrar solo con animación

      anime({
        targets: ".about-description-container h3, .about-description-container h2, .about-description-container p",
        opacity: [0, 1],
        translateX: [-50, 0],
        easing: "easeOutExpo",
        duration: 2000,
        delay: anime.stagger(1000),
      });

      const devElement = document.querySelector(".about-heading-large");
      if (devElement) {
        devElement.innerHTML = "";
        const text = " Desarrollador Full Stack.";
        let index = 0;

        setTimeout(() => {  // Retraso antes de iniciar la escritura
          const typeEffect = () => {
            if (index < text.length) {
              devElement.innerHTML += text[index];
              index++;
              setTimeout(typeEffect, 100);  // Aumenta este valor para escribir más despacio
            } else {
              // Mostrar el botón "Volver" al final de la animación de escritura
              anime({
                targets: ".back-link",
                opacity: [0, 1],
                translateX: [-50, 0],
                easing: "easeInOutQuad",
                duration: 1000,
              });
            }
          };
          typeEffect();
        }, 500);  // Retraso inicial antes de comenzar la escritura
      }
    }
  };

  return (
    <div className="container-fluid about-container d-flex align-items-center justify-content-center">
      <div className="row inner-frame justify-content-center">
        <div className="col-12 text-center">
          <div className="title-container">
            <h1 className="about-title-text">Sobre mí</h1>
          </div>
        </div>
        <div className={`about-description-container invisible`}>
          <h5 className="about-heading-poppins">¡Hola! Mi nombre es</h5>
          <h4 className="about-title">Nelson Valero</h4>
          <h5 className="about-heading">
            <span className="about-heading-poppins">y soy</span>
            <span className="about-heading-large"> Desarrollador Full Stack.</span>
          </h5>
          <p className="about-paragraph">
            Os doy la bienvenida a mi portfolio para que podáis saber más sobre mí.<br />
            Disfruto trabajando con tecnologías como <span className="highlight">JavaScript</span>, <span className="highlight">Python</span> y <span className="highlight">React</span>. También aplico mis
            conocimientos en optimización de procesos y en la gestión de bases de datos
            relacionales entre otras habilidades.<br />
          </p>
        </div>
        <div
          className="col-6 d-flex justify-content-center align-items-center card-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <img src={logoNel} alt="Logo Nelson Valero" className="card-logo" />
              </div>
              <div className="card-back">
                <img src={nelAnimation} alt="Nelson Valero" className="about-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="back-link">
          <Link to="/" className="back-button">Volver</Link>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import "../../styles/aboutMe.css";
import anime from "animejs";
import logoNel from "../../img/logosinfondo_5.png";
import nelAnimation from "../../img/imagen Nel_animation.gif";

export const AboutMe = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [hoverDelay, setHoverDelay] = useState(null);

  useEffect(() => {
    // Animación inicial del logo y el título
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
      delay: 3000,
    });
  }, []);

  const handleMouseEnter = () => {
    // Limpiar el timeout en caso de movimientos rápidos
    if (hoverDelay) clearTimeout(hoverDelay);

    // Activamos el hover después de un pequeño retardo
    const timeout = setTimeout(() => {
      if (!isMoved) {
        setIsMoved(true);
        anime({
          targets: ".card-inner",
          rotateY: "180deg",
          duration: 800,
          easing: "easeInOutQuad",
          complete: () => {
            // Retardo antes de mover la tarjeta
            setTimeout(() => {
              anime({
                targets: ".card-container",
                translateX: "50%",
                duration: 1000,
                easing: "easeInOutQuad",
                complete: () => {
                  setIsMoved(true);
                },
              });
            }, 500);
          },
        });
      }
    }, 300); // Ajustamos el delay aquí

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

  return (
    <div className="container-fluid about-container d-flex align-items-center justify-content-center">
      <div className="row inner-frame justify-content-center">
        <div className="col-12 text-center">
          <div className="title-container">
            <h1 className="about-title-text">Sobre mí</h1>
          </div>
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
      </div>
    </div>
  );
};

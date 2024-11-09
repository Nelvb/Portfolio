import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import logoNel from "../../img/logosinfondo_5.png";
import nelAnimation from "../../img/imagen Nel_animation.gif";
import anime from 'animejs/lib/anime.es.js';
import { useAnimation } from "../component/animationContext";
import "../../styles/aboutMe.css";

export const AboutMe = () => {
  const { animationState, setAnimationState } = useAnimation();
  const [isFlipped, setIsFlipped] = useState(false);

  const animationDuration = animationState.about ? 2000 : 0;
  const staggerDelay = animationState.about ? 200 : 0;

  useEffect(() => {
    if (animationState.about) {
      anime({
        targets: ".about-title-text",
        opacity: [0, 1],
        translateY: [-20, 0],
        easing: "easeInOutQuad",
        duration: animationDuration,
        delay: 2000,
      }).finished.then(() => {
        anime({
          targets: ".card-container",
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: animationDuration,
        }).finished.then(() => {
          const headings = document.querySelectorAll(".about-description-container h5, .about-description-container h4");
          anime({
            targets: headings,
            opacity: [0, 1],
            translateX: [-50, 0],
            easing: "easeInOutQuad",
            duration: animationDuration,
            delay: anime.stagger(staggerDelay),
          }).finished.then(() => {
            const devElement = document.querySelector(".about-heading-large");
            if (devElement) {
              const text = " Desarrollador Full Stack.";
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
                    easing: "easeInOutQuad",
                    duration: animationDuration,
                    delay: 200,
                  }).finished.then(() => {
                    anime({
                      targets: ".back-link",
                      opacity: [0, 1],
                      translateX: [-50, 0],
                      easing: "easeInOutQuad",
                      duration: animationDuration,
                    }).finished.then(() => {
                      setAnimationState((prev) => ({ ...prev, about: false }));
                    });
                  });
                }
              };
              typeEffect();
            }
          });
        });
      });
    }
  }, [animationState.about, setAnimationState, animationDuration, staggerDelay]);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="about-container">
      <div className="inner-frame">
        <div className="title-container">
          <h1 className="about-title-text" style={{ opacity: animationState.about ? 0 : 1 }}>Sobre mí</h1>
        </div>

        <div className="info-container">
          <div className="about-description-container">
            <h5 className="about-heading-poppins" style={{ opacity: animationState.about ? 0 : 1 }}>¡Hola! Mi nombre es</h5>
            <h4 className="about-title" style={{ opacity: animationState.about ? 0 : 1 }}>Nelson Valero</h4>
            <h5 className="about-heading" style={{ display: 'inline', opacity: animationState.about ? 0 : 1 }}>
              <span className="about-heading-poppins">y soy</span>
              <span className="about-heading-large">
                {animationState.about ? "" : " Desarrollador Full Stack."}
              </span>
            </h5>
            <p className="about-paragraph" style={{ opacity: animationState.about ? 0 : 1 }}>
              Os doy la bienvenida a mi portfolio para que podáis saber más sobre mí.<br />
              Disfruto trabajando con tecnologías como <span className="highlight">JavaScript</span>, <span className="highlight">Python</span> y <span className="highlight">React</span>. También aplico mis
              conocimientos en optimización de procesos y en la gestión de bases de datos
              relacionales entre otras habilidades.<br />
              Estoy comprometido con el aprendizaje continuo para aplicarlo en equipos de desarrollo, así puedo seguir creciendo dentro del sector tecnológico.
            </p>
          </div>

          <div className="card-container" onClick={handleCardClick} style={{ opacity: animationState.about ? 0 : 1 }}>
            <div className={`card ${isFlipped ? 'flipped' : ''}`}>
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

        <div className="back-link" style={{ opacity: animationState.about ? 0 : 1 }}>
          <Link to="/">Volver</Link>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import "../../styles/contact.css";

export const Contact = () => {
  useEffect(() => {
    document.querySelectorAll(".contact-title-text, .contact-info-container, .social-icons-container, .link-item").forEach(el => {
      el.style.opacity = 0;
    });

    anime({
      targets: ".contact-title-text",
      opacity: [0, 1],
      translateY: [-20, 0],
      easing: "easeInOutQuad",
      duration: 2000,
      delay: 500,
      complete: () => {
        anime({
          targets: ".social-icons-container",
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: 1500,
          delay: 500,
        });
        
        anime({
          targets: ".contact-info-container",
          opacity: [0, 1],
          translateX: [-50, 0],
          easing: "easeInOutQuad",
          duration: 1500,
        });
        
        anime({
          targets: ".link-item",
          opacity: [0, 1],
          translateX: [-50, 0],
          easing: "easeInOutQuad",
          duration: 1000,
          delay: anime.stagger(200, { start: 2000 }),
        });
      }
    });
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-inner-frame">
        <div className="contact-title-container">
          <h1 className="contact-title-text">Contacto</h1>
        </div>

        <div className="contact-contain-container">
          {/* Parte Izquierda: Detalles de contacto y redes sociales */}
          <div className="social-icons-container">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" /> <a href="mailto:nelsonvbarcelona@gmail.com">nelsonvbarcelona@gmail.com</a>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" /> +34 622 428 891
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" /> Las Rozas de Madrid
            </div>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="contact-icon" />
              </a>
              <a href="https://github.com/tu-perfil" target="_blank" rel="noopener noreferrer">
                <FaGithub className="contact-icon" />
              </a>
              <a href="mailto:nelsonvbarcelona@gmail.com">
                <FaEnvelope className="contact-icon" />
              </a>
            </div>
          </div>

          {/* Parte Derecha: Formulario de contacto */}
          <div className="contact-info-container">
            <div className="contact-form">
              <form action="mailto:nelsonvbarcelona@gmail.com" method="post" encType="text/plain">
                <input type="text" id="name" name="name" placeholder="Tu nombre" required />
                <input type="email" id="email" name="email" placeholder="Tu email" required />
                <input type="text" id="subject" name="subject" placeholder="Asunto" required />
                <textarea id="message" name="message" rows="4" placeholder="Escribe tu mensaje..." required></textarea>
                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>

        {/* Enlaces de navegación */}
        <div className="link-row">
          <Link to="/" className="link-item">Inicio</Link>
          <Link to="/about" className="link-item">Sobre mí</Link>
          <Link to="/skills" className="link-item">Habilidades</Link>
          <Link to="/projects" className="link-item">Proyectos</Link>
        </div>
      </div>
    </div>
  );
};

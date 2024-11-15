// src/js/views/Contact.js
import React, { useState, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import CustomAlert from "../component/customAlert"; // Ruta correcta a `CustomAlert.js`
import "../../styles/contact.css";

export const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");

  useEffect(() => {
    // Configuración inicial de animaciones
    document
      .querySelectorAll(
        ".contact-title-text, .contact-info-container, .social-icons-container, .link-item"
      )
      .forEach((el) => {
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
      },
    });
  }, []);

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const validateEmail = async (email) => {
    try {
      const response = await fetch("https://crispy-funicular-976pq94pg4xvhx64j-5000.app.github.dev/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (data.status === "success") {
        return true;
      } else {
        setAlertMessage(data.message || "El correo no es válido.");
        setAlertType("error");
        setShowAlert(true);
        return false;
      }
    } catch (error) {
      setAlertMessage("Error al validar el correo electrónico.");
      setAlertType("error");
      setShowAlert(true);
      return false;
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const email = e.target.reply_to.value;

    if (!(await validateEmail(email))) {
      return;
    }

    emailjs.init("4MpzEzT4yDBHZ5tgC");
    emailjs
      .sendForm("service_f14u26i", "template_5y4b3td", e.target)
      .then((result) => {
        setAlertMessage("Mensaje enviado con éxito.");
        setAlertType("success");
        setShowAlert(true);
      })
      .catch((error) => {
        setAlertMessage("Error al enviar el mensaje, intenta de nuevo.");
        setAlertType("error");
        setShowAlert(true);
      });

    e.target.reset();
  };

  return (
    <div className="contact-container">
      <div className="contact-inner-frame">
        <div className="contact-title-container">
          <h1 className="contact-title-text">Contacto</h1>
        </div>

        <div className="contact-contain-container">
          <div className="contact-icons-container">
            <div className="contact-item">
              <a href="mailto:nelsonvbarcelona@gmail.com">
                <FaEnvelope className="contact-icon" /> nelsonvbarcelona@gmail.com
              </a>
            </div>
            <div className="contact-item">
              {isMobile ? (
                <a href="tel:+34622428891">
                  <FaPhone className="contact-icon" /> +34 622 428 891
                </a>
              ) : (
                <>
                  <FaPhone className="contact-icon" /> +34 622 428 891
                </>
              )}
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" /> Las Rozas de Madrid
            </div>
            <div className="contact-social-icons">
              <a href="https://www.linkedin.com/in/nelvb" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="contact-icon" />
              </a>
              <a href="https://github.com/Nelvb" target="_blank" rel="noopener noreferrer">
                <FaGithub className="contact-icon" />
              </a>
              <a href="mailto:nelsonvbarcelona@gmail.com">
                <FaEnvelope className="contact-icon" />
              </a>
            </div>
          </div>

          <div className="contact-info-container">
            <div className="contact-form">
              <form onSubmit={sendEmail}>
                <input type="text" id="name" name="from_name" placeholder="Tu nombre" required />
                <input type="email" id="email" name="reply_to" placeholder="Tu email" required />
                <input type="text" id="subject" name="subject" placeholder="Asunto" required />
                <textarea id="message" name="message" rows="4" placeholder="Escribe tu mensaje..." required></textarea>
                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>

        <div className="link-row">
          <Link to="/" className="link-item">Inicio</Link>
          <Link to="/about" className="link-item">Sobre mí</Link>
          <Link to="/skills" className="link-item">Habilidades</Link>
          <Link to="/projects" className="link-item">Proyectos</Link>
        </div>
      </div>

      {showAlert && (
        <CustomAlert
          message={alertMessage}
          type={alertType}
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  );
};

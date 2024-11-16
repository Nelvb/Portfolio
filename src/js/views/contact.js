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
    // Configuración inicial: todo invisible
    document
      .querySelectorAll(
        ".contact-title-text, .contact-contain-container, .contact-item, .contact-social-icons a, .contact-info-container, .contact-form input, .contact-form textarea, .link-item"
      )
      .forEach((el) => {
        el.style.opacity = 0;
      });
  
    // Animación del título
    anime({
      targets: ".contact-title-text",
      opacity: [0, 1],
      translateY: [-20, 0],
      easing: "easeInOutQuad",
      duration: 2000,
      delay: 500,
      complete: () => {
        // Animación del contenedor principal
        anime({
          targets: ".contact-contain-container",
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: 1500,
          complete: () => {
            // Animación simultánea de .contact-item y .contact-info-container
            anime
              .timeline()
              .add({
                targets: ".contact-item",
                opacity: [0, 1],
                translateX: [-50, 0],
                easing: "easeInOutQuad",
                duration: 1000,
                delay: anime.stagger(200),
              })
              .add(
                {
                  targets: ".contact-info-container",
                  opacity: [0, 1],
                  easing: "easeInOutQuad",
                  duration: 1000,
                },
                0 // Empieza al mismo tiempo que la anterior
              )
              .add(
                // Animación simultánea de .contact-social-icons y los inputs del formulario
                {
                  targets: ".contact-social-icons a, .contact-form input, .contact-form textarea",
                  opacity: [0, 1],
                  translateX: (el) =>
                    el.tagName === "INPUT" || el.tagName === "TEXTAREA" ? [50, 0] : [0, 0], // Inputs desde la derecha
                  easing: "easeInOutQuad",
                  duration: 1000,
                  delay: anime.stagger(200),
                },
                "+=500" // Un breve retraso tras la animación anterior
              )
              .add(
                // Animación de enlaces al final
                {
                  targets: ".link-item",
                  opacity: [0, 1],
                  translateX: [-50, 0],
                  easing: "easeInOutQuad",
                  duration: 1000,
                  delay: anime.stagger(200),
                },
                "+=500" // Tras el resto de animaciones
              );
          },
        });
      },
    });
  }, []);
  
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const validateEmail = async (email) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/verify-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      console.log("Respuesta del backend:", data); // <-- Para verificar la respuesta

      if (data.status === "success") {
        return true;
      } else {
        setAlertMessage("El correo no es válido."); // Mensaje fijo en lugar del mensaje del backend
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
      .then(() => {
        setAlertMessage("Mensaje enviado con éxito.");
        setAlertType("success");
        setShowAlert(true);
      })
      .catch(() => {
        setAlertMessage("Error al enviar el mensaje, intenta de nuevo.");
        setAlertType("error");
        setShowAlert(true);
      });

    e.target.reset();
  };

  return (
    <div className="contact-container">
      <div className="contact-inner-frame">
        {/* Título */}
        <div className="contact-title-container">
          <h1 className="contact-title-text">Contacto</h1>
        </div>

        {/* Contenedor principal */}
        <div className="contact-contain-container">
          <div className="contact-icons-container">
            {/* Ítems de contacto */}
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
              <a
                href="https://www.linkedin.com/in/nelvb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="contact-icon" />
              </a>
              <a
                href="https://github.com/Nelvb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="contact-icon" />
              </a>
              <a href="mailto:nelsonvbarcelona@gmail.com">
                <FaEnvelope className="contact-icon" />
              </a>
            </div>
          </div>

          {/* Formulario */}
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

        {/* Enlaces */}
        <div className="link-row">
          <Link to="/" className="link-item">Inicio</Link>
          <Link to="/about" className="link-item">Sobre mí</Link>
          <Link to="/skills" className="link-item">Habilidades</Link>
          <Link to="/projects" className="link-item">Proyectos</Link>
        </div>
      </div>

      {/* Alerta personalizada */}
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

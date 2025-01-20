import React, { useState, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import CustomAlert from "../component/customAlert";
import { useAnimation } from "../component/animationContext";
import "../../styles/contact.css";

export const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");
  const { animationState, setAnimationState } = useAnimation();

  useEffect(() => {
    // Evitamos reejecuciones si la animación ya ocurrió
    if (!animationState.contact) return;

    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

    // Configuración inicial: elementos invisibles
    document
      .querySelectorAll(
        ".contact-title-text, .contact-contain-container, .contact-item, .contact-social-icons a, .contact-info-container, .contact-form input, .contact-form textarea, .nav-link"
      )
      .forEach((el) => {
        el.style.opacity = 0;
      });

    if (isSmallScreen) {
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
  }, [animationState.contact, setAnimationState]);

  const runDesktopAnimations = () => {
    anime({
      targets: ".title-text",
      opacity: [0, 1],
      translateY: [-20, 0],
      easing: "easeInOutQuad",
      duration: 2000,
    });

    // Animación del contenedor principal
    anime({
      targets: ".contact-contain-container",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 2000,
      complete: () => {
        // Animación simultánea de ítems y contenedor de información
        anime
          .timeline()
          .add({
            targets: ".contact-item",
            opacity: [0, 1],
            translateX: [-50, 0],
            easing: "easeInOutQuad",
            duration: 2000,
            delay: anime.stagger(200),
          })
          .add(
            {
              targets: ".contact-info-container",
              opacity: [0, 1],
              translateX: [50, 0],
              easing: "easeInOutQuad",
              duration: 2000,
            },
            0 // Empieza al mismo tiempo
          )
          .add(
            {
              targets: ".contact-social-icons a, .contact-form input, .contact-form textarea",
              opacity: [0, 1],
              translateX: (el) =>
                el.tagName === "A" ? [-50, 0] : [50, 0], // Enlaces desde la izquierda, inputs y textareas desde la derecha
              easing: "easeInOutQuad",
              duration: 2000,
              delay: anime.stagger(200),
            }
          )
          .add({
            targets: ".nav-link",
            opacity: [0, 1],
            translateX: [-50, 0],
            easing: "easeInOutQuad",
            duration: 2000,
            delay: anime.stagger(200),
          })
          .finished.then(() => {
            // Marcar la animación como completada
            setAnimationState((prev) => ({ ...prev, contact: false }));
          });
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
    } else if (element.classList.contains("contact-contain-container")) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateX: [-50, 0],
        easing: "easeInOutQuad",
        duration: 2000,
      });
    } else if (element.classList.contains("contact-icons-container")) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateX: [-50, 0],
        easing: "easeInOutQuad",
        duration: 2000,
      });
    } else if (element.classList.contains("contact-item")) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateX: [-50, 0],
        easing: "easeInOutQuad",
        duration: 2000,
      });

    } else if (element.classList.contains("contact-social-icons")) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateX: [-50, 0],
        easing: "easeInOutQuad",
        duration: 2000,
      });

    } else if (element.classList.contains("contact-info-container")) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateX: [50, 0],
        easing: "easeInOutQuad",
        duration: 2000,
      });
    } else if (
      element.classList.contains("contact-icon")
    ) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateY: [20, 0],
        easing: "easeInOutQuad",
        duration: 2000,
      });

    } else if (element.classList.contains("social-icon")) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateY: [20, 0],
        easing: "easeInOutQuad",
        duration: 2000,
        delay: anime.stagger(200), // Animación escalonada
      });

    } else if (
      element.classList.contains("contact-info-container")
    ) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateY: [20, 0],
        easing: "easeInOutQuad",
        duration: 2000,
      });

    } else if (
      element.classList.contains("contact-form")
    ) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateY: [20, 0],
        easing: "easeInOutQuad",
        duration: 2000,
      });

    } else if (
      element.tagName === "INPUT" ||
      element.tagName === "TEXTAREA"
    ) {
      anime({
        targets: element,
        opacity: [0, 1],
        translateY: [20, 0],
        easing: "easeInOutQuad",
        duration: 2000,
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

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const validateEmail = async (email) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/verify-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();
      if (data.status === "success") {
        setAlertMessage("Correo válido.");
        setAlertType("success");
        setShowAlert(true);
        return true;
      } else {
        setAlertMessage(data.message || "El correo no es válido.");
        setAlertType("error");
        setShowAlert(true);
        return false;
      }
    } catch (error) {
      console.error("Error al validar el correo:", error);
      setAlertMessage("Error al validar el correo electrónico.");
      setAlertType("error");
      setShowAlert(true);
      return false;
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    emailjs.init("4MpzEzT4yDBHZ5tgC");
    emailjs
      .sendForm("service_f14u26i", "template_5y4b3td", e.target)
      .then(() => {
        setAlertMessage("Mensaje enviado con éxito.");
        setAlertType("success");
        setShowAlert(true);
      })
      .catch((error) => {
        console.error("Error al enviar el mensaje:", error);
        setAlertMessage("Error al enviar el mensaje, intenta de nuevo.");
        setAlertType("error");
        setShowAlert(true);
      });

    e.target.reset();
  };

  return (
    <div className="main-container">
      <div className="inner-frame">
        {/* Título */}
        <div className="title-container">
          <h1 className="title-text animate-on-scroll">Contacto</h1>
        </div>

        {/* Contenedor principal */}
        <div className="contact-contain-container animate-on-scroll">
          <div className="contact-params-container">
            <div className="contact-icons-container animate-on-scroll ">
              {/* Ítems de contacto */}
              <div className="contact-item animate-on-scroll">
                <a href="mailto:nelsonvbarcelona@gmail.com">
                  <FaEnvelope className="contact-icon animate-on-scroll" /> nelsonvbarcelona@gmail.com
                </a>
              </div>

              <div className="contact-item animate-on-scroll">
                {isMobile ? (
                  <a href="tel:+34622428891">
                    <FaPhone className="contact-icon animate-on-scroll" /> +34 622 428 891
                  </a>
                ) : (
                  <span>
                    <FaPhone className="contact-icon animate-on-scroll" /> +34 622 428 891
                  </span>
                )}
              </div>

              <div className="contact-item animate-on-scroll">
                <FaMapMarkerAlt className="contact-icon animate-on-scroll" /> Las Rozas de Madrid
              </div>
              <div className="contact-social-icons animate-on-scroll">
                <a
                  href="https://www.linkedin.com/in/nelvb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon animate-on-scroll"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Nelvb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon animate-on-scroll"
                >
                  <FaGithub />
                </a>
                <a href="mailto:nelsonvbarcelona@gmail.com" className="social-icon animate-on-scroll">
                  <FaEnvelope />
                </a>
              </div>

            </div>

            {/* Formulario */}
            <div className="contact-info-container animate-on-scroll">
              <div className="contact-form animate-on-scroll">
                <form onSubmit={sendEmail}>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    placeholder="Tu nombre"
                    required
                    className="animate-on-scroll"
                  />
                  <input
                    type="email"
                    id="email"
                    name="reply_to"
                    placeholder="Tu email"
                    required
                    className="animate-on-scroll"
                  />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Asunto"
                    required
                    className="animate-on-scroll"
                  />
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Escribe tu mensaje..."
                    required
                    className="animate-on-scroll"
                  ></textarea>
                  <button type="submit">Enviar</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Enlaces */}
        <div className="navigation-links">
          <Link to="/" className="nav-link animate-on-scroll">
            Inicio
          </Link>
          <Link to="/about" className="nav-link animate-on-scroll">
            Sobre mí
          </Link>
          <Link to="/skills" className="nav-link animate-on-scroll">
            Habilidades
          </Link>
          <Link to="/projects" className="nav-link animate-on-scroll">
            Proyectos
          </Link>
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

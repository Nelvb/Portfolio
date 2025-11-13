/**
 * src/js/views/contact.js
 * Vista de contacto con formulario funcional (sin backend).
 * Integra Web3Forms para envío directo desde el frontend.
 *
 * Funcionalidad:
 * - Formulario de contacto con validación HTML5
 * - Envío de emails mediante Web3Forms (API externa segura)
 * - Alertas personalizadas para feedback al usuario
 * - Animaciones de entrada (Anime.js + IntersectionObserver)
 * - Iconos de redes sociales con enlaces
 *
 * Dependencias eliminadas: EmailJS, Flask backend
 * Requiere: REACT_APP_WEB3FORMS_ACCESS_KEY en .env
 * 
 * @author Nelson Valero
 * @since v1.0.2
 */

import React, { useState, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
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
import { useLanguage } from "../../context/languageContext";
import "../../styles/contact.css";

export const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");
  const { animationState, setAnimationState } = useAnimation();
  const { language, translations } = useLanguage();
  const t = translations[language].contact;

  // SEO
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Contacto - Nelson Valero";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const animationConfig = {
    easing: "easeInOutQuad",
    duration: 2000,
  };

  useEffect(() => {
    if (!animationState.contact) return;

    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
    document
      .querySelectorAll(
        ".contact-contain-container, .contact-item, .contact-social-icons a, .contact-info-container, .contact-form input, .contact-form textarea, .nav-link"
      )
      .forEach((el) => {
        el.style.opacity = 0;
      });

    if (isSmallScreen) {
      const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) animateElement(entry.target);
            else {
              entry.target.style.opacity = 0;
              entry.target.style.visibility = 'hidden';
            }
          });
        },
        { threshold: 0.1 }
      );
      elementsToAnimate.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    } else {
      runDesktopAnimations();
    }
  }, [animationState.contact, setAnimationState]);

  const runDesktopAnimations = () => {
    anime({ targets: ".title-text", opacity: [0, 1], translateY: [-20, 0], ...animationConfig });
    anime({ targets: ".contact-contain-container", opacity: [0, 1], ...animationConfig });
    anime({
      targets: ".contact-item",
      opacity: [0, 1],
      translateX: [-50, 0],
      ...animationConfig,
      delay: anime.stagger(200, { start: 1000 }),
    });
    anime({
      targets: ".contact-info-container",
      opacity: [0, 1],
      translateX: [50, 0],
      ...animationConfig,
      delay: 1000,
    });
    anime({
      targets: ".social-icon, .contact-form input, .contact-form textarea",
      opacity: [0, 1],
      translateX: (el) => (el.tagName === "A" ? [-50, 0] : [150, 0]),
      ...animationConfig,
      delay: anime.stagger(200, { start: 2000 }),
    });
    anime({
      targets: ".nav-link",
      opacity: [0, 1],
      translateX: [-50, 0],
      ...animationConfig,
      delay: anime.stagger(200, { start: 4000 }),
    });
    setAnimationState((prev) => ({ ...prev, contact: false }));
  };

  const animateElement = (element) => {
    // PRIMERO: "Despertar" el elemento cambiando visibility a visible
    element.style.visibility = 'visible';

    // Animar según el tipo de elemento (igual que projects)
    if (element.classList.contains("contact-item")) {
      // Información de contacto (email, teléfono, dirección) - desde la izquierda
      anime({
        targets: element,
        opacity: [0, 1],
        translateX: [-50, 0],
        ...animationConfig,
      });
    } else if (element.classList.contains("contact-info-container")) {
      // Contenedor del formulario - desde la derecha
      anime({
        targets: element,
        opacity: [0, 1],
        translateX: [50, 0],
        ...animationConfig,
      });
    } else if (element.classList.contains("contact-form")) {
      // Formulario - desde la derecha
      anime({
        targets: element,
        opacity: [0, 1],
        translateX: [50, 0],
        ...animationConfig,
      });
    } else if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
      // Inputs y textarea del formulario - desde la izquierda
      anime({
        targets: element,
        opacity: [0, 1],
        translateX: [-50, 0],
        ...animationConfig,
      });
    } else if (element.tagName === "BUTTON") {
      // Botón de envío - desde la izquierda
      anime({
        targets: element,
        opacity: [0, 1],
        translateX: [-50, 0],
        ...animationConfig,
      });
    } else if (element.classList.contains("nav-link")) {
      // Links de navegación - desde la izquierda (igual que projects y home)
      anime({
        targets: element,
        opacity: [0, 1],
        translateX: [-50, 0],
        ...animationConfig,
      });
    } else if (element.classList.contains("contact-social-icons")) {
      // Contenedor de iconos sociales - animar el contenedor y luego los iconos dentro
      anime({
        targets: element,
        opacity: [0, 1],
        translateY: [-20, 0],
        ...animationConfig,
      });
      // Animar los iconos sociales dentro del contenedor
      const socialIcons = element.querySelectorAll(".social-icon");
      socialIcons.forEach((icon) => {
        icon.style.visibility = 'visible'; // "Despertar" cada icono
      });
      anime({
        targets: socialIcons,
        opacity: [0, 1],
        translateX: [-50, 0],
        ...animationConfig,
        delay: anime.stagger(200, { start: 500 }),
      });
    } else if (element.classList.contains("social-icon")) {
      // Iconos sociales individuales - desde la izquierda
      anime({
        targets: element,
        opacity: [0, 1],
        translateX: [-50, 0],
        ...animationConfig,
      });
    } else {
      // Otros elementos (por defecto)
      anime({
        targets: element,
        opacity: [0, 1],
        translateY: [-20, 0],
        ...animationConfig,
      });
    }
  };

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  /** -------------------------------------------------------
   * Envío del formulario mediante Web3Forms
   * ------------------------------------------------------- */
  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setAlertMessage("Mensaje enviado con éxito.");
        setAlertType("success");
        setShowAlert(true);
        e.target.reset();
      } else {
        console.error("Error Web3Forms:", data);
        setAlertMessage("Error al enviar el mensaje, intenta de nuevo.");
        setAlertType("error");
        setShowAlert(true);
      }
    } catch (err) {
      console.error("Error en envío:", err);
      setAlertMessage("No se pudo conectar con el servidor de envío.");
      setAlertType("error");
      setShowAlert(true);
    }
  };

  return (
    <div className="main-container">
      <div className="inner-frame">
        {/* Título */}
        <div className="title-container">
          <h1 className="title-text animate-on-scroll">{t.title}</h1>
        </div>

        {/* Contenido principal */}
        <div className="contact-contain-container animate-on-scroll">
          <div className="contact-params-container">
            {/* Información de contacto */}
            <div className="contact-icons-container animate-on-scroll">
              <div className="contact-item animate-on-scroll">
                <a href="mailto:nelsonvbarcelona@gmail.com">
                  <FaEnvelope className="contact-icon" /> nelsonvbarcelona@gmail.com
                </a>
              </div>

              <div className="contact-item animate-on-scroll">
                {isMobile ? (
                  <a href="tel:+34622428891">
                    <FaPhone className="contact-icon" /> +34 622 428 891
                  </a>
                ) : (
                  <span>
                    <FaPhone className="contact-icon" /> +34 622 428 891
                  </span>
                )}
              </div>

              <div className="contact-item animate-on-scroll">
                <FaMapMarkerAlt className="contact-icon" /> Las Rozas de Madrid
              </div>

              <div className="contact-social-icons animate-on-scroll">
                <a
                  href="https://www.linkedin.com/in/nelvb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Nelvb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaGithub />
                </a>
                <a
                  href="mailto:nelsonvbarcelona@gmail.com"
                  className="social-icon"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>

            {/* Formulario */}
            <div className="contact-info-container animate-on-scroll">
              <div className="contact-form animate-on-scroll">
                <form onSubmit={sendEmail}>
                  {/* Campo oculto para identificar origen */}
                  <input type="hidden" name="from_site" value="Portfolio de Nelson Valero" />

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={t.form.name}
                    required
                    className="animate-on-scroll"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={t.form.email}
                    required
                    className="animate-on-scroll"
                  />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder={t.form.subject}
                    required
                    className="animate-on-scroll"
                  />
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder={t.form.message}
                    required
                    className="animate-on-scroll"
                  ></textarea>
                  <button type="submit">{t.form.submit}</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Enlaces */}
        <div className="navigation-links">
          <Link to="/" className="nav-link animate-on-scroll">{t.navigation.home}</Link>
          <Link to="/about" className="nav-link animate-on-scroll">{t.navigation.about}</Link>
          <Link to="/skills" className="nav-link animate-on-scroll">{t.navigation.skills}</Link>
          <Link to="/projects" className="nav-link animate-on-scroll">{t.navigation.projects}</Link>
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

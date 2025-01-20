import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ProjectsData } from "../component/projectsData";
import { useAnimation } from "../component/animationContext";
import anime from "animejs/lib/anime.es.js";
import "../../styles/projectDetail.css";
import "boxicons/css/boxicons.min.css";

// Función para determinar si un título es largo
const isLongTitle = (title) => {
  return title.split(" ").length > 2 || title.length > 15;
};

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = ProjectsData.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <div className="project-not-found">Project not found</div>;
  }

  const { name, details, projectUrl, repoUrl } = project;
  const { fullDescription, tecnologiasUsadas, tools, images } = details;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { animationState, setAnimationState } = useAnimation();

  const isLong = isLongTitle(name); // Determinar si el título es largo

  // Auto-slide para el carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Animaciones iniciales
  useEffect(() => {
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

    if (isSmallScreen) {
      const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target;
              animateElement(element);
            } else {
              // Ocultar el elemento al salir de la pantalla
              entry.target.style.opacity = 0;
            }
          });
        },
        { threshold: 0.1 } // Detecta cuando el 10% del elemento es visible
      );

      elementsToAnimate.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    } else {
      runDesktopAnimations();
    }
  }, [animationState.projectDetail, setAnimationState]);

  const runDesktopAnimations = () => {
    if (!animationState.projectDetail) {
      document
        .querySelectorAll(
          ".title-text, .project-contain-detail, .project-full-description-title, .project-technologies-title, .project-full-description-text, .project-technologies-text, .project-gallery-slider, .container-carousel, .btn-left, .btn-right, .slider-dots span, .tools-section, .slider-footer button, .nav-link"
        )
        .forEach((el) => {
          el.style.opacity = 1;
          el.style.transform = "translateX(0)";
        });
      return;
    }

    document
      .querySelectorAll(
        ".title-text, .project-contain-detail, .project-full-description-title, .project-technologies-title, .project-full-description-text, .project-technologies-text, .project-gallery-slider, .container-carousel, .btn-left, .btn-right, .slider-dots span, .tools-section, .slider-footer button, .nav-link"
      )
      .forEach((el) => {
        el.style.opacity = 0;
      });

      anime.timeline().add({
        targets: [".title-text", ".project-contain-detail"], // Ambos targets en la misma etapa
        opacity: [0, 1],
        translateY: [-20, 0],
        easing: "easeInOutQuad",
        duration: 2000,
      })
      
      .add({
        targets: [".project-full-description-title", ".project-technologies-title"],
        opacity: [0, 1],
        translateX: [-50, 0],
        easing: "easeInOutQuad",
        duration: 1500,
        delay: anime.stagger(200),
      })
      .add({
        targets: ".project-gallery-slider",
        opacity: [0, 1],
        translateX: [50, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      })
      .add({
        targets: [".project-full-description-text", ".project-technologies-text"],
        opacity: [0, 1],
        translateX: [-50, 0],
        easing: "easeInOutQuad",
        duration: 1500,
        delay: anime.stagger(200),
      })
      .add({
        targets: [".container-carousel", ".btn-left", ".btn-right"],
        opacity: [0, 1],
        translateX: [50, 0],
        easing: "easeInOutQuad",
        duration: 1000,
      })
      .add({
        targets: ".slider-dots span",
        opacity: [0, 1],
        scale: [0.8, 1],
        easing: "easeInOutQuad",
        duration: 800,
        delay: anime.stagger(100),
      })
      .add({
        targets: ".slider-footer button",
        opacity: [0, 1],
        translateX: [50, 0],
        easing: "easeOutCubic",
        duration: 1000,
        delay: anime.stagger(200),
      })
      .add({
        targets: ".tools-section",
        opacity: [0, 1],
        translateY: [20, 0],
        easing: "easeInOutQuad",
        duration: 1000,
        delay: anime.stagger(100),
      })
      .add({
        targets: ".nav-link",
        opacity: [0, 1],
        translateX: [-50, 0],
        easing: "easeInOutQuad",
        duration: 1000,
      })
      .finished.then(() => {
        setAnimationState((prev) => ({
          ...prev,
          projectDetail: false,
        }));
      });
  };

  const animateElement = (element) => {
    anime({
      targets: element,
      opacity: [0, 1],
      translateX: element.classList.contains("project-full-description-title") ||
        element.classList.contains("project-technologies-title")
        ? [-50, 0]
        : element.classList.contains("slider-dots")
          ? [0, 1]
          : [20, 0],
      easing: "easeInOutQuad",
      duration: 1500,
    });
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="main-container">
      <div className="inner-frame">
        <div className="title-container">
          <h1 className={`title-text project-detail-title animate-on-scroll ${isLong ? "long" : ""}`}>
            {name}
          </h1>
        </div>

        <div className={`project-contain-detail animate-on-scroll ${isLong ? "long-title" : "short-title"}`}>
        <div className="project-wrapper">

          <div className="project-description-tools animate-on-scroll">
            <h3 className="project-full-description-title animate-on-scroll">Detalles del Proyecto</h3>
            <p className="project-full-description-text animate-on-scroll">{fullDescription}</p>
            <h3 className="project-technologies-title animate-on-scroll">Tecnologías Aplicadas</h3>
            <p className="project-technologies-text animate-on-scroll">{tecnologiasUsadas}</p>
          </div>

          <div className="project-gallery-slider animate-on-scroll">
            <div className="container-carousel animate-on-scroll">
              <div
                className="carruseles"
                style={{
                  transform: `translateX(-${currentImageIndex * 100}%)`,
                }}
              >
                {images.map((image, index) => (
                  <section key={index} className="slider-section">
                    <img src={image} alt={`${name} slide ${index + 1}`} />
                  </section>
                ))}
              </div>
              <div className="btn-left" onClick={handlePrevImage}>
                <i className="bx bx-chevron-left"></i>
              </div>
              <div className="btn-right" onClick={handleNextImage}>
                <i className="bx bx-chevron-right"></i>
              </div>
            </div>

            <div className="slider-dots animate-on-scroll">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentImageIndex ? "active" : ""}`}
                  onClick={() => goToImage(index)}
                ></span>
              ))}
            </div>

            <div className="slider-footer animate-on-scroll">
              <button
                className="project-btn animate-on-scroll"
                onClick={() => window.open(projectUrl, '_blank')}
              >
                Ver Web
              </button>
              <button
                className='project-btn animate-on-scroll'
                onClick={() => window.open(repoUrl, '_blank')}
              >
                Ver código
              </button>
            </div>
          </div>
          </div>

            <div className="tools-section animate-on-scroll">
              <ul className="tools-list animate-on-scroll">
                {tools.map((tool, index) => (
                  <li key={index} className="tool-item animate-on-scroll">
                    {tool}
                  </li>
                ))}
              </ul>
          </div>
        </div>

        <div className="navigation-links animate-on-scroll">
          <Link to="/projects" className="nav-link animate-on-scroll">
            Volver a proyectos
          </Link>
        </div>
      </div>
    </div>
  );
};


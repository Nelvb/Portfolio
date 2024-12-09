import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ProjectsData } from "../component/projectsData";
import { useAnimation } from "../component/animationContext";
import anime from "animejs/lib/anime.es.js";
import "../../styles/projectDetail.css";
import 'boxicons/css/boxicons.min.css';

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = ProjectsData.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <div className="project-not-found">Project not found</div>;
  }

  const { name, details } = project;
  const { fullDescription, tecnologiasUsadas, tools, images } = details;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { animationState, setAnimationState } = useAnimation();

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
    if (!animationState.projectDetail) return;

    // Ocultar elementos al inicio
    document
      .querySelectorAll(
        ".title-text, .project-contain-detail, .project-full-description-title, .project-technologies-title, .project-full-description-text, .project-technologies-text, .project-gallery-slider, .container-carousel, .btn-left, .btn-right, .slider-dots span, .tools-section, .slider-footer button, .nav-link"
      )
      .forEach((el) => {
        el.style.opacity = 0;
      });

    // Animación del título
    anime({
      targets: ".title-text",
      opacity: [0, 1],
      translateY: [-20, 0],
      easing: "easeInOutQuad",
      duration: 2000,
      delay: 500,
    }).finished.then(() => {
      // Animación del contenedor principal
      anime({
        targets: ".project-contain-detail",
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 1500,
        delay: 500,
      }).finished.then(() => {
        // Animaciones separadas para cada bloque
        anime
          .timeline()
          .add({
            targets: [".project-full-description-title", ".project-technologies-title"],
            opacity: [0, 1],
            translateX: [-50, 0],
            easing: "easeInOutQuad",
            duration: 1500,
            delay: anime.stagger(200),
          })
          .add(
            {
              targets: ".project-gallery-slider",
              opacity: [0, 1],
              translateX: [50, 0],
              easing: "easeInOutQuad",
              duration: 1500,
            },
            0
          )
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
          }, "-=1500")
        
          .add({
            targets: ".slider-dots span",
            opacity: [0, 1],
            scale: [0.8, 1],
            easing: "easeInOutQuad",
            duration: 800,
            delay: anime.stagger(100),
          }, "-=400")
          .add({
            targets: ".tools-section",
            opacity: [0, 1],
            translateX: [60, 0],
            easing: "easeOutCubic",
            duration: 1000,
            delay: anime.stagger(200),
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
      });
    });
  }, [animationState.projectDetail, setAnimationState]);

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
          <h1 className="title-text">{name}</h1>
        </div>

        <div className="project-contain-detail">
          <div className="project-description-tools">
            <h3 className="project-full-description-title">Detalles del Proyecto</h3>
            <p className="project-full-description-text">{fullDescription}</p>
            <h3 className="project-technologies-title">Tecnologías Aplicadas</h3>
            <p className="project-technologies-text">{tecnologiasUsadas}</p>
          </div>

          <div className="project-gallery-slider">
            <div className="container-carousel">
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

            <div className="slider-dots">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentImageIndex ? "active" : ""}`}
                  onClick={() => goToImage(index)}
                ></span>
              ))}
            </div>

            <div className="tools-section">
              <ul className="tools-list">
                {tools.map((tool, index) => (
                  <li key={index} className="tool-item">{tool}</li>
                ))}
              </ul>
            </div>

            <div className="slider-footer">
              <button className="project-btn">Ver Web</button>
              <button className="project-btn">Ver Código</button>
            </div>
          </div>
        </div>

        <div className="navigation-links">
          <Link to="/projects" className="nav-link">
            Volver a proyectos
          </Link>
        </div>
      </div>
    </div>
  );
};

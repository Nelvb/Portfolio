import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProjectsData } from "../component/projectsData";
import "../../styles/projectDetail.css";
import 'boxicons/css/boxicons.min.css';
import { Link } from "react-router-dom";

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = ProjectsData.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <div className="project-not-found">Project not found</div>;
  }

  const { name, details } = project;
  const { fullDescription, tecnologiasUsadas, tools, images } = details;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  // Auto-slide cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="project-detail-container">
      <div className="project-detail-inner-frame">
        <div className="project-detail-title-container">
          <h1 className="project-detail-title-text">{name}</h1>
        </div>

        <div className="project-contain-description">
          {/* Izquierda: Descripción y Tecnologías */}
          <div className="project-description-tools">
            <h3 className="project-full-description-title">Detalles del Proyecto</h3>
            <p className="project-full-description-text">{fullDescription}</p>
            <h3 className="project-technologies-title">Tecnologías Aplicadas</h3>
            <p className="project-technologies-text">{tecnologiasUsadas}</p>
          </div>

          {/* Derecha: Carrusel con slider */}
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

            {/* Navegación por puntos */}
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

            {/* Botones */}
            <div className="slider-footer">
              <button className="project-btn">Ver Web</button>
              <button className="project-btn">Ver Código</button>
            </div>
          </div>
        </div>


        {/* Link para volver */}
        <div className="link-row-details">
          <Link to="/projects" className="link-item-details">
            Volver a proyectos
          </Link>
        </div>
      </div>
    </div>
  );
};

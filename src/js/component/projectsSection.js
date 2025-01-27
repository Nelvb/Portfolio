import React, { useRef, useState } from "react";
import "../../styles/projects.css";
import { ProjectsCard } from "./projectsCard";
import { ProjectsData } from "./projectsData";
import "boxicons/css/boxicons.min.css";
import { useLanguage } from "../layout";

export const ProjectsSection = () => {
  const slideRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const numberOfProjects = ProjectsData.length;

  const { language } = useLanguage(); // Obtiene el idioma actual

  // Función para manejar el siguiente elemento
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numberOfProjects);
    if (slideRef.current) {
      const items = slideRef.current.querySelectorAll(".project-card");
      slideRef.current.appendChild(items[0]);
    }
  };

  // Función para manejar el elemento anterior
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? numberOfProjects - 1 : prevIndex - 1
    );
    if (slideRef.current) {
      const items = slideRef.current.querySelectorAll(".project-card");
      slideRef.current.prepend(items[items.length - 1]);
    }
  };

  // Manejar los dots
  const handleDotClick = (index) => {
    const diff = index - currentIndex;
    if (diff > 0) {
      for (let i = 0; i < diff; i++) handleNext();
    } else if (diff < 0) {
      for (let i = 0; i < -diff; i++) handlePrev();
    }
  };

  return (
    <div className="projects-section">
      <div className="container-cards">
        <div className="slide" ref={slideRef}>
          {ProjectsData.map((project, index) => (
            <ProjectsCard
              key={index}
              id={project.id}
              backgroundImage={project.backgroundImage}
              name={project.name} // El nombre permanece igual
              description={project.description[language]} // Traducción dinámica según idioma
            />
          ))}
        </div>
        <div className="button">
          <button className="prev" onClick={handlePrev}>
            <i className="bx bx-chevron-left"></i>
          </button>
          <button className="next" onClick={handleNext}>
            <i className="bx bx-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="slider-dots">
        {ProjectsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

import React, { useRef } from "react";
import "../../styles/projects.css";
import { ProjectsCard } from "./projectsCard";
import { ProjectsData } from "./projectsData";
import 'boxicons/css/boxicons.min.css';


export const ProjectsSection = () => {
  const slideRef = useRef();

  // Función para manejar el siguiente elemento
  const handleNext = () => {
    if (slideRef.current) {
      const items = slideRef.current.querySelectorAll(".project-card");
      slideRef.current.appendChild(items[0]);
    }
  };

  // Función para manejar el elemento anterior
  const handlePrev = () => {
    if (slideRef.current) {
      const items = slideRef.current.querySelectorAll(".project-card");
      slideRef.current.prepend(items[items.length - 1]);
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
              name={project.name}
              description={project.description}
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
    </div>
  );
};

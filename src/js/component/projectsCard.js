import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProjectsCard = ({ id, backgroundImage, name, description }) => {
  const navigate = useNavigate();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Aplica un retardo inicial solo en la primera carga
    if (isFirstLoad) {
      const timer = setTimeout(() => setIsFirstLoad(false), 4000); // Retardo de 500ms
      return () => clearTimeout(timer); // Limpia el temporizador al desmontar
    }
  }, [isFirstLoad]);

  return (
    <div
      className="project-card"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="content-card"
        style={{
          opacity: isFirstLoad ? 0 : 1,
          transition: isFirstLoad ? "none" : "opacity 1s ease, transform 1s ease",
          transform: isFirstLoad ? "translateY(20px)" : "translateY(0)",
        }}
      >
        <div className="name">{name}</div>
        <div className="des">{description}</div>
        <button onClick={() => navigate(`/project/${id}`)}>Ver más</button>
      </div>
    </div>
  );
};

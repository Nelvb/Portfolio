/**
 * src/js/component/projectsCard.js
 * Componente de card individual de proyecto para el slider.
 * Muestra imagen, nombre, descripción y botón de navegación al detalle.
 * 
 * Funcionalidad:
 * - Renderiza card con imagen de fondo y contenido superpuesto
 * - Animación de entrada con delay basado en tamaño de pantalla
 * - Navegación a ProjectDetail al hacer click en botón
 * - Lazy loading de imágenes (excepto primera card)
 * - Sincroniza estado de animación con AnimationContext
 * 
 * Props: id, backgroundImage, name, description, index
 * 
 * @author Nelson Valero
 */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAnimation } from "./animationContext";
import { useLanguage } from "../../context/languageContext";

export const ProjectsCard = ({ id, backgroundImage, name, description, index = 0 }) => {
  const navigate = useNavigate();
  const { animationState, setAnimationState } = useAnimation();
  const [isFirstLoad, setIsFirstLoad] = useState(animationState.projects);
  const { language, translations } = useLanguage();
  const t = translations[language].projectsCard;

  useEffect(() => {
    if (isFirstLoad) {
      const delay = window.innerWidth < 500 ? 2000 : 4000; // Ajusta el retraso según la pantalla
      const timer = setTimeout(() => {
        setIsFirstLoad(false);
        setAnimationState((prev) => ({ ...prev, projects: false })); // Actualizar el estado en el contexto
      }, delay);
      return () => clearTimeout(timer); // Limpieza al desmontar
    }
  }, [isFirstLoad, setAnimationState]);

  return (
    <div className="project-card">
      <img
        src={backgroundImage}
        alt={name}
        className="project-card-image"
        loading={index === 0 ? "eager" : "lazy"}
      />
      <div
        className="content-card"
        style={{
          opacity: isFirstLoad ? 0 : 1,
          transition: isFirstLoad
            ? "none"
            : "opacity 1s ease, transform 1s ease",
          transform: isFirstLoad ? "translateY(20px)" : "translateY(0)",
        }}
      >
        <div className="name">{name}</div>
        <div className="des">{description}</div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/project/${id}`);
          }}
        >
          {t.buttonCard}
        </button>
      </div>
    </div>
  );
};

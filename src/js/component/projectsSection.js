import React, { useRef, useState, useEffect } from "react";
import "../../styles/projects.css";
import { ProjectsCard } from "./projectsCard";
import { ProjectsData } from "./projectsData";
import { useLanguage } from "../../context/languageContext";

export const ProjectsSection = () => {
  const slideRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const numeroDeProjectos = ProjectsData.length;
  const [esMovil, setEsMovil] = useState(false);

  // Seguimiento de eventos táctiles
  const [inicioToque, setInicioToque] = useState(0);
  const [finToque, setFinToque] = useState(0);

  const { language } = useLanguage();

  // Comprobar tamaño de pantalla al montar y redimensionar
  useEffect(() => {
    const comprobarTamañoPantalla = () => {
      setEsMovil(window.innerWidth <= 500);
    };

    comprobarTamañoPantalla();
    window.addEventListener('resize', comprobarTamañoPantalla);

    return () => {
      window.removeEventListener('resize', comprobarTamañoPantalla);
    };
  }, []);

  // Función para manejar el siguiente elemento
  const manejarSiguiente = () => {
    setCurrentIndex((indiceAnterior) => (indiceAnterior + 1) % numeroDeProjectos);
    if (slideRef.current) {
      const elementos = slideRef.current.querySelectorAll(".project-card");
      slideRef.current.appendChild(elementos[0]);
    }
  };

  // Función para manejar el elemento anterior
  const manejarAnterior = () => {
    setCurrentIndex((indiceAnterior) =>
      indiceAnterior === 0 ? numeroDeProjectos - 1 : indiceAnterior - 1
    );
    if (slideRef.current) {
      const elementos = slideRef.current.querySelectorAll(".project-card");
      slideRef.current.prepend(elementos[elementos.length - 1]);
    }
  };

  // Manejar los puntos de navegación
  const manejarPuntoClic = (indice) => {
    const diferencia = indice - currentIndex;
    if (diferencia > 0) {
      for (let i = 0; i < diferencia; i++) manejarSiguiente();
    } else if (diferencia < 0) {
      for (let i = 0; i < -diferencia; i++) manejarAnterior();
    }
  };

  // Manejar inicio de toque
  const manejarInicioToque = (e) => {
    setInicioToque(e.touches[0].clientX);
  };

  // Manejar movimiento de toque
  const manejarMovimientoToque = (e) => {
    setFinToque(e.touches[0].clientX);
  };

  // Manejar fin de toque
  const manejarFinToque = (e) => {
    if (e.target.tagName === 'BUTTON') {
      return;
    }


    if (inicioToque - finToque > 75) {
      // Deslizar a la derecha
      manejarSiguiente();
    }

    if (inicioToque - finToque < -75) {
      // Deslizar a la izquierda
      manejarAnterior();
    }
  };

  // Renderizado para dispositivos de escritorio
  const renderEscritorio = () => (
    <div className="projects-section">
      <div className="container-cards">
        <div className="slide" ref={slideRef}>
          {ProjectsData.map((project, index) => (
            <ProjectsCard
              key={index}
              id={project.id}
              backgroundImage={project.backgroundImage}
              name={project.name}
              description={project.description[language]}
              index={index}
            />
          ))}
        </div>
        <div className="button">
          <button className="prev" onClick={manejarAnterior}>
            <i className="bx bx-chevron-left"></i>
          </button>
          <button className="next" onClick={manejarSiguiente}>
            <i className="bx bx-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="slider-dots">
        {ProjectsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => manejarPuntoClic(index)}
          ></span>
        ))}
      </div>
    </div>
  );

  // Renderizado para dispositivos móviles
  const renderMovil = () => (
    <div
      className="projects-section"
      onTouchStart={manejarInicioToque}
      onTouchMove={manejarMovimientoToque}
      onTouchEnd={manejarFinToque}
    >
      <div className="container-cards">
        <div className="slide" ref={slideRef}>
          {ProjectsData.map((project, index) => (
            <ProjectsCard
              key={index}
              id={project.id}
              backgroundImage={project.backgroundImage}
              name={project.name}
              description={project.description[language]}
              index={index}
            />
          ))}
        </div>
      </div>
      <div className="slider-dots">
        {ProjectsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => manejarPuntoClic(index)}
          ></span>
        ))}
      </div>
    </div>
  );

  // Renderizado condicional según el dispositivo
  return esMovil ? renderMovil() : renderEscritorio();
};
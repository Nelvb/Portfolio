import React, { useEffect, useRef } from "react";
import "../../styles/projects.css";
import { Link } from "react-router-dom";

export const Projects = () => {
  // Referencias para los botones y el slider
  const slideRef = useRef();

  // Función para manejar el siguiente elemento
  const handleNext = () => {
    if (slideRef.current) {
      const items = slideRef.current.querySelectorAll(".item");
      slideRef.current.appendChild(items[0]);
    }
  };

  // Función para manejar el elemento anterior
  const handlePrev = () => {
    if (slideRef.current) {
      const items = slideRef.current.querySelectorAll(".item");
      slideRef.current.prepend(items[items.length - 1]);
    }
  };

  return (
    <div className="projects-container">
      <div className="projects-inner-frame">
        <div className="projects-title-container">
          <h1 className="projects-title-text">Proyectos</h1>
        </div>

        <div className="projects-contain-container">
          <div className="projects-section">
            <div className="container">
              <div className="slide" ref={slideRef}>
                <div
                  className="item"
                  style={{
                    backgroundImage: "url(https://i.ibb.co/qCkd9jS/img1.jpg)",
                  }}
                >
                  <div className="content">
                    <div className="name">Switzerland</div>
                    <div className="des">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ab, eum!
                    </div>
                    <button>See More</button>
                  </div>
                </div>
                <div
                  className="item"
                  style={{
                    backgroundImage: "url(https://i.ibb.co/jrRb11q/img2.jpg)",
                  }}
                >
                  <div className="content">
                    <div className="name">Finland</div>
                    <div className="des">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ab, eum!
                    </div>
                    <button>See More</button>
                  </div>
                </div>
                <div
                  className="item"
                  style={{
                    backgroundImage: "url(https://i.ibb.co/NSwVv8D/img3.jpg)",
                  }}
                >
                  <div className="content">
                    <div className="name">Iceland</div>
                    <div className="des">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ab, eum!
                    </div>
                    <button>See More</button>
                  </div>
                </div>
                {/* Agrega los demás elementos aquí */}
              </div>

              <div className="button">
                <button className="prev" onClick={handlePrev}>
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button className="next" onClick={handleNext}>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="link-row">
            <Link to="/" className="link-item">
              Inicio
            </Link>
            <Link to="/about" className="link-item">
              Sobre mí
            </Link>
            <Link to="/skills" className="link-item">
              Habilidades
            </Link>
            <Link to="/contact" className="link-item">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ProjectsData } from "../component/projectsData";
import { useAnimation } from "../component/animationContext";
import anime from "animejs/lib/anime.es.js";
import "../../styles/projectDetail.css";
import { useLanguage } from "../../context/languageContext";


// Función para determinar si un título es largo
const isLongTitle = (title) => {
  return title.split(" ").length > 2 || title.length > 15;
};

// Función para formatear el nombre con salto de línea inteligente
const formatTitle = (title, windowWidth) => {
  const words = title.split(' ');

  // Si tiene más de 2 palabras y hay una palabra de 1 letra
  if (words.length > 2) {
    const hasSingleLetterWord = words.some(word => word.length === 1);

    // Aplicar exactamente en 768px o menos, siempre mantener 2 líneas desde ahí hacia abajo
    if (hasSingleLetterWord && windowWidth <= 768) {
      // Partir después de las primeras 2 palabras
      // Ejemplo: "Boost A Project" → "Boost A" / "Project"
      return (
        <>
          {words.slice(0, 2).join(' ')}
          <br />
          {words.slice(2).join(' ')}
        </>
      );
    }
  }

  return title;
};

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = ProjectsData.find((proj) => proj.id === parseInt(id));

  const { language, translations } = useLanguage();
  const t = translations[language].projectDetail;

  // SEO: Título dinámico basado en el proyecto
  useEffect(() => {
    const previousTitle = document.title;
    if (project) {
      document.title = `${project.name} - Nelson Valero`;
    } else {
      document.title = 'Proyecto no encontrado - Nelson Valero';
    }
    return () => {
      document.title = previousTitle;
    };
  }, [project]);

  if (!project) {
    return <div className="project-not-found">Project not found</div>;
  }

  const { name, details, projectUrl, repoUrl } = project;
  const { fullDescription, tecnologiasUsadas, tools, images } = details;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { animationState, setAnimationState } = useAnimation();

  const isLong = isLongTitle(name); // Determinar si el título es largo

  // Listener para el resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

      // Primer grupo: h3 y project gallery slider a la vez
      .add({
        targets: [".project-full-description-title", ".project-technologies-title", ".project-gallery-slider"],
        opacity: [0, 1],
        translateX: function (el) {
          // Mantiene la dirección original para cada elemento
          return el.classList.contains("project-gallery-slider") ? [50, 0] : [-50, 0];
        },
        easing: "easeInOutQuad",
        duration: 1500,
        delay: anime.stagger(200),
      })

      // Segundo grupo: textos y container carousel juntos
      .add({
        targets: [".project-full-description-text", ".project-technologies-text", ".container-carousel", ".btn-left", ".btn-right"],
        opacity: [0, 1],
        translateX: function (el) {
          // Mantiene la dirección original para cada elemento
          return el.classList.contains("container-carousel") || el.classList.contains("btn-left") || el.classList.contains("btn-right") ? [50, 0] : [-50, 0];
        },
        easing: "easeInOutQuad",
        duration: 1500,
        delay: anime.stagger(200),
      })

      // Tercer grupo: dots, slider footer y tools section juntos
      .add({
        targets: [".slider-dots span", ".slider-footer button", ".tools-section"],
        opacity: [0, 1],
        translateX: function (el) {
          if (el.classList.contains("slider-footer") || el.tagName === "BUTTON") return [50, 0];
          return 0;
        },
        translateY: function (el) {
          if (el.classList.contains("tools-section")) return [20, 0];
          return 0;
        },
        scale: function (el) {
          if (el.tagName === "SPAN") return [0.8, 1];
          return 1;
        },
        easing: "easeInOutQuad",
        duration: 1000,
        delay: anime.stagger(100),
      })

      // El link de navegación al final como estaba
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
            {formatTitle(name, windowWidth)}
          </h1>
        </div>

        <div className={`project-contain-detail animate-on-scroll ${isLong ? "long-title" : "short-title"}`}>
          <div className="project-wrapper">

            <div className="project-description-tools animate-on-scroll">
              <h3 className="project-full-description-title animate-on-scroll">{t.descriptionTitle}</h3>
              <p className="project-full-description-text animate-on-scroll">{fullDescription[language]}</p>
              <h3 className="project-technologies-title animate-on-scroll">{t.technologiesTitle}</h3>
              <p className="project-technologies-text animate-on-scroll">{tecnologiasUsadas[language]}</p>
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
                      <img
                        src={image}
                        alt={`${name} slide ${index + 1}`}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
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
                {projectUrl && (
                  <button
                    className="project-btn animate-on-scroll"
                    onClick={() => window.open(projectUrl, '_blank')}
                  >
                    {t.buttonWeb}
                  </button>
                )}
                <button
                  className='project-btn animate-on-scroll'
                  onClick={() => window.open(repoUrl, '_blank')}
                >
                  {t.buttonCode}
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
            {t.linkProjects}
          </Link>
        </div>
      </div>
    </div>
  );
};


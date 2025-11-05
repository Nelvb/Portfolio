/**
 * src/js/component/useScrollAnimation.js
 * Custom hook para animaciones basadas en scroll usando IntersectionObserver.
 * Optimiza performance evitando animaciones innecesarias fuera del viewport.
 * 
 * Funcionalidad:
 * - Observa elementos con clase .scroll-animated
 * - Ejecuta animación fade-in + translateY cuando elemento entra en viewport
 * - Usa IntersectionObserver API para mejor performance
 * - Unobserve después de animar para evitar repeticiones
 * - Cleanup automático al desmontar componente
 * 
 * Uso: Importar y llamar en componentes que necesiten animación on-scroll
 * 
 * @author Nelson Valero
 */
import { useEffect } from "react";
import anime from "animejs";

const useScrollAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-animated");

    const observerOptions = {
      threshold: 0.1, // El 10% visible para activar la animación
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;

          // Animación con Anime.js
          anime({
            targets: element,
            opacity: [0, 1],
            translateY: [50, 0],
            easing: "easeOutQuad",
            duration: 1000,
          });

          // Detener la observación para evitar que se repita
          observer.unobserve(element);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Cleanup al desmontar el componente
  }, []);
};

export default useScrollAnimation;

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

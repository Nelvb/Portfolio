/**
 * src/js/component/animationContext.js
 * Context API para gestionar el estado de las animaciones en toda la app.
 * Previene animaciones duplicadas al navegar entre rutas.
 * 
 * Funcionalidad:
 * - Mantiene estado de qué animaciones ya se ejecutaron (home, about, skills, etc.)
 * - Permite a cada vista verificar si debe ejecutar animaciones iniciales
 * - Evita repetición de animaciones al volver a una ruta ya visitada
 * 
 * Uso: useAnimation() hook en componentes para acceder a animationState y setAnimationState
 * 
 * @author Nelson Valero
 */
import React, { createContext, useContext, useState } from 'react';

const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const [animationState, setAnimationState] = useState({
    home: true,
    about: true,
    contact: true,
    projects: true,
    skills: true,
    projectsCard: true,
    projectDetail: true,
  });

  return (
    <AnimationContext.Provider value={{ animationState, setAnimationState }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => useContext(AnimationContext);

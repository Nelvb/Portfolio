import React, { createContext, useContext, useState } from 'react';

const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const [animationState, setAnimationState] = useState({
    home: true,
    about: true,
    // Añadir otros estados de animación para otras páginas si es necesario
  });

  return (
    <AnimationContext.Provider value={{ animationState, setAnimationState }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => useContext(AnimationContext);

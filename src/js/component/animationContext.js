import React, { createContext, useContext, useState } from 'react';

const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const [animationState, setAnimationState] = useState({
    home: true,
    about: true,
    contact: true, // Nueva página añadida
    projects: true, // Otra nueva página añadida
  });

  return (
    <AnimationContext.Provider value={{ animationState, setAnimationState }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => useContext(AnimationContext);

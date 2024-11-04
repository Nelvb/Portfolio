// src/js/component/LoadingScreen.js
import React from 'react';
import "../../styles/loadingScreen.css";

export const LoadingScreen = () => {
  return (
    <div className="inner-frame">
      <div className="loading-screen">
        <div className="loader"></div>
      </div>
    </div>
  );
};

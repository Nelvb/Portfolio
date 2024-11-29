import React from "react";
import PropTypes from "prop-types";
import "../styles/loader.css";

const Loader = ({ type = "global", backgroundColor, size = "50px" }) => {
  return (
    <div
      className={`loader-container ${type}`}
      style={{
        backgroundColor: backgroundColor || "transparent", // Usa color solo si se pasa
        height: type === "global" ? "100vh" : "auto",
        width: "100%",
      }}
    >
      <div className="spinner" style={{ width: size, height: size }}></div>
    </div>
  );
};

Loader.propTypes = {
  type: PropTypes.oneOf(["global", "local"]), // Tipos de loader
  backgroundColor: PropTypes.string, // Color de fondo opcional
  size: PropTypes.string, // Tamaño del spinner
};

export default Loader;

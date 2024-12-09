import React from "react";
import PropTypes from "prop-types";
import "../../styles/loader.css";

const Loader = ({ type = "global", backgroundColor, size = "50px" }) => {
  return (
    <div
      className={`loader-container ${type}`}
      style={{
        backgroundColor: backgroundColor || "transparent",
        height: type === "global" ? "100vh" : "auto",
        width: "100%",
      }}
    >
      <div className="spinner" style={{ width: size, height: size }}></div>
    </div>
  );
};

Loader.propTypes = {
  type: PropTypes.oneOf(["global", "local"]),
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
};

export default Loader;

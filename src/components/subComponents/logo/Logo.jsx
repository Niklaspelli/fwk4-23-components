import React from "react";
import "./Logo.css";

const Logo = ({ logoSrc, altText }) => {
  return (
    <div className="Logo">
      <img src={logoSrc} alt={altText} />
      <h1>I-Organize</h1>
    </div>
  );
};

export default Logo;

import React from "react";
import styles from "./Logo.module.css";

const Logo = ({ logoSrc, altText }) => {
  return (
    <div className={styles.logo}>
      <img src={logoSrc} alt={altText} />
      <h1>I-Organize</h1>
    </div>
  );
};

export default Logo;

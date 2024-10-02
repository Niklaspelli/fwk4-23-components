import React from "react";
import Logo from "../subComponents/logo/Logo";
import styles from "./Header.module.css";
import logosmall from "../../assets/logosmall.jpg";

const PrivateHeader = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Logo logoSrc={logosmall} altText="I-Organize Logo" />
        </div>
      </header>
    </>
  );
};

export default PrivateHeader;

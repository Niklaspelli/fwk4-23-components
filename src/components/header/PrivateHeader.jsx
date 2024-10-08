import React from "react";
import Search from "../subComponents/search/Search";
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
        <div className={styles.searchContainer}>
          <Search />
        </div>
      </header>
    </>
  );
};

export default PrivateHeader;

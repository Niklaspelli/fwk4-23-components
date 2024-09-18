import React from "react";
import styles from "./Login.module.css";

const LoginButtonAtom = ({ onClick }) => {
  return (
    <button className={styles.submitButton} onClick={onClick}>
      Login
    </button>
  );
};

export default LoginButtonAtom;

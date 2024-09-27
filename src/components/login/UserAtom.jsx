import React from "react";
import styles from "./Login.module.css";

const UserAtom = ({ onUserChange, label = "Username" }) => {
  // if (!onUserChange) {
  //   return (
  //     <>
  //       <b>onChange function required for user! </b> <br />
  //     </>
  //   );
  // }

  const handleChange = (e) => {
    onUserChange(e.target.value);
  };

  return (
    <div className={styles.userContainer}>
      <label className={styles.userLabel}>
        {label}:
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter username"
          className={styles.userInput}
        />
      </label>
    </div>
  );
};

export default UserAtom;

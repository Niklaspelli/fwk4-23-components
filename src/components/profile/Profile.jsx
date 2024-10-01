import React from "react";
import UniversalButton from "../subComponents/universalButton/UniversalButton";
import HeadLines from "../subComponents/headlines/HeadLines";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
     <div className={styles.container}>
      <HeadLines title="Profile" />
      <div className={styles.profile}>
      <p>Hwej!</p>

      <div>Your current username:</div>
      <div>
        Your current email:
        <br />
        <input type="text" />
        <UniversalButton title="Change your email" type="submit" />
      </div>
      <div>
        Your current password:
        <br />
        <input type="text" />
        <UniversalButton title="Change your password" type="submit" />
      </div>
      <div>Your account was created:</div>
      </div>
      </div>
    </div>
  );
};

export default Profile;

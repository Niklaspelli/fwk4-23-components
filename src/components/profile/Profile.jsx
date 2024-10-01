import React from "react";
import UniversalButton from "../subComponents/universalButton/UniversalButton";
import HeadLines from "../subComponents/headlines/HeadLines";
import styles from "./Profile.module.css";
import { Placeholder } from "storybook/internal/components";

const Profile = () => {
  return (
    <div>
     <div className={styles.container}>
      <HeadLines title="Profile" />
      <div className={styles.profile}>
      <h3>Hej + namn!</h3>

      <div className={styles.profile}>
      <div>
        <p>Your current email:</p>
        <br />
        <input type="text" Placeholder="Change email here"/>
        <UniversalButton title="Change your email" type="submit" />
      </div>
      <div>
      <p>Your current password:</p>
        <br />
        <input type="password" placeholder="********" />
        <UniversalButton title="Change your password" type="submit" />
      </div>
      <div>
      <p>Your account was created:
      </p>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Profile;

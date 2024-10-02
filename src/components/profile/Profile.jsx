import React from "react";
import UniversalButton from "../subComponents/universalButton/UniversalButton";
import HeadLines from "../subComponents/headlines/HeadLines";
import styles from "./Profile.module.css";
// import { Placeholder } from "storybook/internal/components";

const Profile = () => {
  return (
    <div>
     <div className={styles.container}>
      <HeadLines title="Profile" />
      <div className={styles.profile}>
      <h3>Hello Julia!</h3> {/* (Bara mmock inför redovisningen) */}
      <div>
        <p>Your current email: malin.luron@gmail.com</p> {/* (Bara mmock inför redovisningen) */}
        <input type="text" Placeholder="Change email here"/>
        <UniversalButton title="Change your email" type="submit" />
      </div>
      <br />
      <div>
      <p>Your current password: J@garb@st!</p> {/* (Bara mmock inför redovisningen) */}
        <input type="password" placeholder="********" />
        <UniversalButton title="Change your password" type="submit" />
      </div>
      <br />
      <div>
      <p>Your account was created: 2024-09-25</p> {/* (Bara mmock inför redovisningen) */}
      </div>
      </div>
      </div>
      
    </div>
  );
};

export default Profile;

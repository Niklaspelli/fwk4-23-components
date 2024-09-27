import React from "react";
import UniversalButton from "../subComponents/universalButton/UniversalButton";
import HeadLines from "../subComponents/headlines/HeadLines";

const Profile = () => {
  return (
    <div>
      <HeadLines title="Profile Page" />
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
  );
};

export default Profile;

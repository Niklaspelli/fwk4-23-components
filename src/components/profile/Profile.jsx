import UniversalButton from "../universalButton/UniversalButton";
import HeadLines from "../headlines/HeadLines";

const Profile = () => {
  return (
    <div>
      <HeadLines title="Profile" />

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

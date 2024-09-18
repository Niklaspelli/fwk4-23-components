import Form from "./Form";
import Switch from "./Switch";
import UniversalButton from "../subComponents/universalButton/UniversalButton";
import HeadLines from "../subComponents/headlines/HeadLines";
import UserAtom from "./UserAtom.jsx";
import PasswordAtom from "./PasswordAtom.jsx";
import LoginButton from "./LoginButtonAtom.jsx";
import react, { useState } from "react";

const Login = ({ loginFunction }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    if (loginFunction) {
      loginFunction(user, password);
    } else {
      console.error("No login function provided");
      console.error("User:", user);
      console.error("Password:", password);
    }
  };

  return (
    <>
      <div>
        <HeadLines title="Login Page" />
        <UserAtom onUserChange={setUser} />
        <PasswordAtom onPasswordChange={setPassword} />
        <LoginButton onClick={handleLoginClick} />
        {/* <Form fields={['username', 'password']} />
			<UniversalButton title='Login' type='submit' />
			<Switch /> */}
      </div>
    </>
  );
};

export default Login;

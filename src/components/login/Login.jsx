import React, { useState } from "react";
// import Form from "./Form";
// import Switch from "./Switch";
// import UniversalButton from "../subComponents/universalButton/UniversalButton";
import HeadLines from "../subComponents/headlines/HeadLines";
import UserAtom from "./UserAtom.jsx";
import PasswordAtom from "./PasswordAtom.jsx";
import styles from "./Login.module.css";
import UniversalButton from "../subComponents/universalButton/UniversalButton.jsx";

 


const Login = ({ loginFunction, error }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    if (loginFunction) {
      loginFunction(user, password);
    } else {
      console.error("No login function provided");
      console.error("User:", user);
      console.error("Password:", password);
      console.log(error)
    }
  };

  return (
    <>
      <div>
        <div className={styles.container}>
        <HeadLines title="Login" />
        <UserAtom onUserChange={setUser} />
        <PasswordAtom onPasswordChange={setPassword} />
         <UniversalButton title="Login" type="button" onClick={handleLoginClick} /> 
        {/* <Form fields={['username', 'password']} />
			<UniversalButton title='Login' type='submit' />
			<Switch /> */}
      </div>
      </div>
    </>
  );
};

export default Login;

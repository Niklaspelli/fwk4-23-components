import React, { useState } from "react";
// import Form from "./Form";
// import Switch from "./Switch";
// import UniversalButton from "../subComponents/universalButton/UniversalButton";
import HeadLines from "../subComponents/headlines/HeadLines";
import UserAtom from "./UserAtom.jsx";
import PasswordAtom from "./PasswordAtom.jsx";
import LoginButtonAtom from "./LoginButtonAtom.jsx";
import styles from "./Login.module.css";

 


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
        <HeadLines title="Login Page" />
        <UserAtom onUserChange={setUser} />
        <PasswordAtom onPasswordChange={setPassword} />
         <LoginButtonAtom onClick={handleLoginClick} /> 
        {/* <Form fields={['username', 'password']} />
			<UniversalButton title='Login' type='submit' />
			<Switch /> */}
      </div>
      </div>
    </>
  );
};

export default Login;

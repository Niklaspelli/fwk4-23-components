import React from "react";
import Form from "../subComponents/form/Form";
import UniversalButton from "../subComponents/universalButton/UniversalButton";
import HeadLines from "../subComponents/headlines/HeadLines";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <div>
      <div className={styles.container}>
      <HeadLines title="Register" />
      <Form fields={["username", "email", "password", "repeatPassword"]} />
      <UniversalButton title="Register" type="submit" />
      </div>
    </div>
  );
};

export default Register;

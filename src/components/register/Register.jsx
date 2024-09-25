import React from "react";
import Form from "../login/Form";
import Switch from "../login/Switch";
import UniversalButton from "../subComponents/universalButton/UniversalButton";
import HeadLines from "../subComponents/headlines/HeadLines";

const Register = () => {
  return (
    <div>
      <HeadLines title="Register Page" />
      <Form fields={["username", "email", "password", "repeatPassword"]} />
      <UniversalButton title="Register" type="submit" />
      <Switch />
    </div>
  );
};

export default Register;

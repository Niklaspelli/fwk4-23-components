import Logo from "../logo/Logo";
import Form from "../login/Form";

const Register = () => {
  return (
    <div>
      <Logo /> <h1>Register</h1>
      <Form fields={["username", "email", "password", "repeatPassword"]} />
    </div>
  );
};

export default Register;

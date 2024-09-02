import Form from "./Form";

export default {
  title: "FWK/Form",
  component: Form,
};

export const Registration = () => {
  return (
    <Form
      fields={["username", "email", "password", "repeatPassword"]}
      onSubmit={(data) => console.log("Registration Data:", data)}
    />
  );
};

export const Login = () => {
  return (
    <Form
      fields={["username", "password"]}
      onSubmit={(data) => console.log("Login Data:", data)}
    />
  );
};

import Login from "./Login";
//import { LoginProvider } from "./LoginProvider.jsx";
import { MockLoginProvider } from "./MockLoginProvider.jsx";

export default {
  title: "Components/Login",
  component: Login,
};

export const Default = () => (
  <MockLoginProvider>
    <Login />
  </MockLoginProvider>
);


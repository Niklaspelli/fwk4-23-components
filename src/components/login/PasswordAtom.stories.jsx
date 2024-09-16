import PasswordAtom from "./PasswordAtom";
import { action } from "@storybook/addon-actions";

export default {
  title: "FWK/Login/PasswordAtom",
  component: PasswordAtom,
};

export const Default = {
  args: {
    onPasswordChange: action("password-changed"),
  },
};

export const WithInitialValue = {
  args: {
    onPasswordChange: action("password-changed"),
  },
};

export const MissingOnChange = {
  args: {},
};

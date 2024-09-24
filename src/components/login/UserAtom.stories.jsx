import { action } from "@storybook/addon-actions";
import UserAtom from "./UserAtom.jsx";

export default {
  title: "FWK/Login/UserAtom",
  component: UserAtom,
};

export const Default = {
  args: {
    onUserChange: action("user-changed"),
  },
};

export const WithInitialValue = {
  args: {
    onUserChange: action("user-changed"),
  },
};

export const MissingChange = {
  args: {},
};

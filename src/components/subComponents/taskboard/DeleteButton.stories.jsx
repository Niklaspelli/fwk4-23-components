import React from "react";
import DeleteButton from "./DeleteButton";

export default {
  title: "FWK/DeleteButton",
  component: DeleteButton,
};

const Template = (args) => <DeleteButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => alert("Delete button clicked"),
};

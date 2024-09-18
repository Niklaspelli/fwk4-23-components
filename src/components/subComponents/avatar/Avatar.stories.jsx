import React from "react";
import Avatar from "./Avatar";

export default {
    title: "FWK/Avatar",
    components: Avatar
}

const Template = (args) => <Avatar {...args} />

export const DefaultAvatar = Template.bind({});
DefaultAvatar.args = {
    src: '',
    alt: 'Default User',
    size: '50px',
  };
  
  export const UserAvatar = Template.bind({});
  UserAvatar.args = {
    src: 'https://images.pexels.com/photos/3394658/pexels-photo-3394658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'John Doe',
  };

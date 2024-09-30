import React from "react";
import logoSmallest from "../../assets/logosmallest.jpg";
import Calendar from "./Calender";
import { Logo } from "../subComponents/logo";
import "./Calender.css";


const Home = () => {
  return (
    <div>
      <p>Home</p>
      <Logo logoSrc={logoSmallest} altText="I-Organize Smallest Logo" />
      <Calendar />
    </div>
  );
};

export default Home;

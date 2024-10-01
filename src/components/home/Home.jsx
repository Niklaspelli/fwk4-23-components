import React from "react";
import logoSmallest from "../../assets/logosmallest.jpg";
import Calendar from "./Calender";
import { Logo } from "../subComponents/logo";
import "./Calender.css";
import HeadLines from "../subComponents/headlines/HeadLines";


const Home = () => {
  return (
    <div>
      <HeadLines title="Home" />
      <Calendar />
    </div>
  );
};

export default Home;

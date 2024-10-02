import React from "react";
import logoSmallest from "../../assets/logosmallest.jpg";
import Calendar from "./Calender";
import { Logo } from "../subComponents/logo";
import styles from "./Calender.module.css";
import HeadLines from "../subComponents/headlines/HeadLines";


const Home = () => {
  return (
    <div>
      <div className={styles.home}>
      <HeadLines title="Home" />
      </div>
      <Calendar />
    </div>
  );
};

export default Home;

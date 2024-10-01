import React from "react";
import HeadLines from "../subComponents/headlines/HeadLines";
import styles from './Workspace.module.css'
const Workspace = (data) => {


  return (
   <div className={styles.workspace}>
     <HeadLines title="Workspace" />
     </div>
  );
 
};

export default Workspace;

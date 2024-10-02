import React from "react";
import './HeadLines.modules.css';

const HeadLines = ({ title, subTitle, subSubTitle }) => {
  return (
    <>
      <h1 className="headline">{title}</h1>
      <h2 className="subtitle">{subTitle}</h2>
      <h3 className="subsubtitle">{subSubTitle}</h3>
    </>
  );
};

export default HeadLines;


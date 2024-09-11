import React, { useState } from "react";
import Cards from "../cards/Cards";
import UniversalButton from "../universalButton/UniversalButton";
import FlexGridStructure from "./FlexGridStructure";

const Workspace = () => {
  return (
    <>
      <h1>Workspace</h1>
      <FlexGridStructure>
      <Cards/>
      <UniversalButton title="Universal Button" type="button" onClick={() => console.log("Universal Button Clicked")} />
      </FlexGridStructure>
    </>
  );

};

export default Workspace;

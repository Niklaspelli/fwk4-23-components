import React from "react";
import FlexGridStructure from "./FlexGridStructure";
import Cards from "../subComponents/cards/Cards";

const Workspace = (data) => {
  return (
    <FlexGridStructure
      config={{
        columns: 3,
        gap: "15px",
      }}
      data={[{}, {}, {}]}
      children={<Cards />}
    />
  );
};

export default Workspace;

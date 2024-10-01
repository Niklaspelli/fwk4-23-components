import React from "react";
import FlexGridStructure from "./FlexGridStructure";
import Cards from "../subComponents/cards/Cards";
import HeadLines from "../subComponents/headlines/HeadLines";
const Workspace = (data) => {
  return (
   <div>
     <HeadLines title="Workspace" />
  
    <FlexGridStructure
    
      config={{
        columns: 3,
        gap: "15px",
      }}
      data={[{}, {}, {}]}
      children={<Cards />}
    />
     </div>
  );
 
};

export default Workspace;

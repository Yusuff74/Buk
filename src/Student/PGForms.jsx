import React from "react";
import ScePgFooter from "../Utilitis/ScePgFooter";
import SceMainDiv from "../Utilitis/SceMainDiv";
import SpsMain from "../Utilitis/SpsMain";
import SpsSideColumn from "../Utilitis/SpsSideColumn";

const PGForms = () => {
  return (
    <SceMainDiv
      children={
        <SpsMain sideColumn={<SpsSideColumn />} footer={<ScePgFooter />} />
      }
    />
  );
};

export default PGForms;

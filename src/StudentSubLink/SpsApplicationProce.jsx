import React from "react";
import SceMainDiv from "../Utilitis/SceMainDiv";
import SpsMain from "../Utilitis/SpsMain";
import ScePgFooter from "../Utilitis/ScePgFooter";
import SpsApplicationCol from "../Utilitis/SpsApplicationCol";

const SpsApplicationProcedure = () => {
  return (
    <SceMainDiv
      children={
        <SpsMain footer={<ScePgFooter />} sideColumn={<SpsApplicationCol />} />
      }
    />
  );
};

export default SpsApplicationProcedure;

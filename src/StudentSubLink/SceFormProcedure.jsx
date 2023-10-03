import React from "react";
import SceMain from "../Utilitis/SceMain";
import ScePgFooter from "../Utilitis/ScePgFooter";
import SceProcedureCol from "./SceProcedureCol";
import SceMainDiv from "../Utilitis/SceMainDiv";

const SceFormProcedure = () => {
  return (
    <SceMainDiv
      children={
        <SceMain footer={<ScePgFooter />} sideColumn={<SceProcedureCol />} />
      }
    />
  );
};

export default SceFormProcedure;

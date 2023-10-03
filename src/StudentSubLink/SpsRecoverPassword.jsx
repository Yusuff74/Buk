import React from "react";
import SpsMain from "../Utilitis/SpsMain";
import SceMainDiv from "./../Utilitis/SceMainDiv";
import ScePasswordCol from "./ScePasswordCol";
import ScePgFooter from "../Utilitis/ScePgFooter";

const SpsRecoverPassword = () => {
  return (
    <SceMainDiv
      children={
        <SpsMain sideColumn={<ScePasswordCol />} footer={<ScePgFooter />} />
      }
    />
  );
};

export default SpsRecoverPassword;

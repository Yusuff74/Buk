import React from "react";
import ScePasswordCol from "./ScePasswordCol";
import SceMain from "../Utilitis/SceMain";
import ScePgFooter from "./../Utilitis/ScePgFooter";
import SceMainDiv from "../Utilitis/SceMainDiv";

const ScePasswordRecovery = () => {
  return (
    <SceMainDiv
      children={
        <SceMain sideColumn={<ScePasswordCol />} footer={<ScePgFooter />} />
      }
    />
  );
};

export default ScePasswordRecovery;

import React from "react";
import SceMain from "../Utilitis/SceMain";
import ScePgFooter from "../Utilitis/ScePgFooter";
import SceRegisterCol from "./SceRegisterCol";
import SceMainDiv from "../Utilitis/SceMainDiv";

const SceRegisterForm = () => {
  return (
    <SceMainDiv
      children={
        <SceMain sideColumn={<SceRegisterCol />} footer={<ScePgFooter />} />
      }
    />
  );
};

export default SceRegisterForm;

import React from "react";
import SceMain from "../Utilitis/SceMain";
import ScePgFooter from "../Utilitis/ScePgFooter";
import SceReqCol from "./SceReqCol";
import SceMainDiv from "../Utilitis/SceMainDiv";

const SceFormRequirement = () => {
  return (
    <SceMainDiv
      children={<SceMain sideColumn={<SceReqCol />} footer={<ScePgFooter />} />}
    />
  );
};

export default SceFormRequirement;

import React from "react";
import SceMain from "../Utilitis/SceMain";
import ScePgFooter from "../Utilitis/ScePgFooter";
import ScePaymentCol from "./ScePaymentCol";
import SceMainDiv from "../Utilitis/SceMainDiv";

const ScePaymentProcedure = () => {
  return (
    <SceMainDiv
      children={
        <SceMain sideColumn={<ScePaymentCol />} footer={<ScePgFooter />} />
      }
    />
  );
};

export default ScePaymentProcedure;

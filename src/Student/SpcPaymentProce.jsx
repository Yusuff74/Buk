import React from "react";
import SceMainDiv from "../Utilitis/SceMainDiv";
import SpsMain from "../Utilitis/SpsMain";
import ScePgFooter from "../Utilitis/ScePgFooter";
import SpsPaymentProcedure from "../Utilitis/SpsPaymentCol";

const SpsPaymentProcdure = () => {
  return (
    <SceMainDiv
      children={
        <SpsMain
          sideColumn={<SpsPaymentProcedure />}
          footer={<ScePgFooter />}
        />
      }
    />
  );
};

export default SpsPaymentProcdure;

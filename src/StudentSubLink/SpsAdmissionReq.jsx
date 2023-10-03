import React from "react";
import SceMainDiv from "../Utilitis/SceMainDiv";
import SpsMain from "../Utilitis/SpsMain";
import SpsAdmissionReqCol from "../Utilitis/SpsAdmissionReqCol";
import ScePgFooter from "../Utilitis/ScePgFooter";

const SpsAdmissionReq = () => {
  return (
    <SceMainDiv
      children={
        <SpsMain sideColumn={<SpsAdmissionReqCol />} footer={<ScePgFooter />} />
      }
    />
  );
};

export default SpsAdmissionReq;

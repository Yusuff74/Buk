import React from "react";
import SceMainDiv from "../Utilitis/SceMainDiv";
import SpsMain from "../Utilitis/SpsMain";
import ScePgFooter from "../Utilitis/ScePgFooter";
import FormLogin from "../Utilitis/FormLogin";
import SceColHeader from "../Utilitis/SceColHeader";

const SpsFormLogin = () => {
  return (
    <SceMainDiv
      children={
        <SpsMain
          footer={<ScePgFooter />}
          sideColumn={<SceColHeader children={<FormLogin />} />}
        />
      }
    />
  );
};

export default SpsFormLogin;

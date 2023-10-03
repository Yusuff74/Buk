import React from "react";
import ScePgFooter from "../Utilitis/ScePgFooter";
import RegisterForm from "../Utilitis/RegisterForm";
import SpsMain from "../Utilitis/SpsMain";
import SceMain from "../Utilitis/SceMain";
import SceMainDiv from "../Utilitis/SceMainDiv";
import SceColHeader from "../Utilitis/SceColHeader";

const SpsFormNew = () => {
  return (
    <SceMainDiv
      children={
        <SpsMain
          sideColumn={<SceColHeader children={<RegisterForm />} />}
          footer={<ScePgFooter />}
        />
      }
    />
  );
};

export default SpsFormNew;

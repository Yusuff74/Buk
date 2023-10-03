import React from "react";
import SceMainDiv from "../Utilitis/SceMainDiv";
import ScePgFooter from "../Utilitis/ScePgFooter";
import SpsMain from "../Utilitis/SpsMain";
import SceColHeader from "../Utilitis/SceColHeader";
import SpsProgrammesCol from "./SpsProgrammesCol";

const SpsFormsProgrammes = () => {
  return (
    <>
      <SceMainDiv
        children={
          <SpsMain sideColumn={<SpsProgrammesCol />} footer={<ScePgFooter />} />
        }
      />
    </>
  );
};

export default SpsFormsProgrammes;

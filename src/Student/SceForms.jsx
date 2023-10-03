import React from "react";
import ScePgFooter from "../Utilitis/ScePgFooter";
import SceSideColumn from "../Utilitis/SceSideColumn";
import SceMain from "../Utilitis/SceMain";
import SceMainDiv from "../Utilitis/SceMainDiv";

const SceForms = () => {
  return (
    <>
      <SceMainDiv
        children={
          <SceMain sideColumn={<SceSideColumn />} footer={<ScePgFooter />} />
        }
      />
    </>
  );
};

export default SceForms;

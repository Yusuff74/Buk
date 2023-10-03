import React from "react";
import SceMain from "./SceMain";
import ScePgFooter from "./ScePgFooter";
import SceFormColumn from "../StudentSubLink/SceFormColumn";

const SceFormsProgrammes = () => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://mybuk2.buk.edu.ng/sceforms/images/bg.jpg')",
          height: "100%",
          minHeight: "100vh",
        }}
      >
        <SceMain sideColumn={<SceFormColumn />} footer={<ScePgFooter />} />
      </div>
    </>
  );
};

export default SceFormsProgrammes;

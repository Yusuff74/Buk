import React from "react";
import Input from "../Utilitis/Input";
import WideDivBtn from "../Utilitis/WideDivBtn";
import SceColHeader from "../Utilitis/SceColHeader";

const ScePasswordCol = () => {
  return (
    <SceColHeader
      children={
        <form
          style={{ padding: "0 20%", marginTop: "4rem", textAlign: "left" }}
        >
          <Input label="Personal E-m@il Used" />
          <Input label="Personal GSM No. Used" />
          <WideDivBtn btnLabel="Recover Passwor" />
        </form>
      }
      spanLabel="Password Recovery"
    ></SceColHeader>
  );
};

export default ScePasswordCol;

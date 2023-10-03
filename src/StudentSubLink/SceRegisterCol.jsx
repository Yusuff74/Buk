import React from "react";
import Input from "../Utilitis/Input";
import SelectInput from "../Utilitis/SelectInput";
import { Link } from "react-router-dom";
import WideDivBtn from "../Utilitis/WideDivBtn";
import SceColHeader from "../Utilitis/SceColHeader";

const SceRegisterCol = () => {
  const programmes = ["Geography", "URP", "Esate", "QS"];
  const admission = ["DE", "UTME"];
  return (
    <SceColHeader
      children={
        <form
          style={{ marginTop: "6rem", textAlign: "left", padding: "0 20%" }}
        >
          <Input label="First Name" />
          <Input label="Middle Name" />
          <Input label="Last Name" />
          <Input label="Personal E-m@il" />
          <Input label="Personal GSM No." />
          <SelectInput items={programmes} label="Programme." />
          <SelectInput items={admission} label="Admission Category." />
          <Input label="Password" />
          <Input label="Confirm Password" />
          <WideDivBtn btnLabel="Login" />
          <p>
            Forget Password?,{" "}
            <Link style={{ textDecoration: "none", color: "inherit" }}>
              click here to recover Password.
            </Link>
          </p>
        </form>
      }
      spanLabel="Register"
    ></SceColHeader>
  );
};

export default SceRegisterCol;

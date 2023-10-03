import React from "react";
import ScePg from "../Utilitis/ScePgHeaderMin";
import ScePgHeader from "../Utilitis/ScePgHeader";
import ScePgSidebar from "../Utilitis/ScePgSidebar";

const SceMain = ({ sideColumn, footer }) => {
  return (
    <>
      <ScePg />
      <div style={{ padding: "1rem 10rem" }}>
        <ScePgHeader title="2020/2021 Part-Time Degree Application Exercise" />

        <div className="row">
          <ScePgSidebar
            list1="Available Programmes"
            list2="Application Procedure"
            list3="Admission Requirements"
            list4="Payment Procedure"
            list5="Register"
            list6="Login"
            list7="Password Recovery"
          />
          {sideColumn}
          {footer}
        </div>
      </div>
    </>
  );
};

export default SceMain;

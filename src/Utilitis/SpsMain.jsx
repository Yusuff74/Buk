import React from "react";
import ScePg from "./ScePgHeaderMin";
import ScePgHeader from "./ScePgHeader";
import ScePgSidebar from "./ScePgSidebar";

const SpsMain = ({ sideColumn, footer }) => {
  return (
    <>
      <ScePg />
      <div style={{ padding: "1rem 10rem" }}>
        <ScePgHeader title="2021/2022 PG Application Exercise" />

        <div className="row">
          <ScePgSidebar
            list1="Advert"
            list2="Available Programmes"
            list3="Admission Requirements"
            list4="Application Procedure"
            list5="Payment Procedure"
            list6="Register"
            list7="Login"
            list8="Password Recovery"
          />
          {sideColumn}
          {footer}
        </div>
      </div>
    </>
  );
};

export default SpsMain;

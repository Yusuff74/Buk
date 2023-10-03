import React from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";

const RegHeader = ({ regTitle, changeWidth, subTitle }) => {
  const defaultMsg = "Online Registration";
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#EDEDED",
          borderBottom: "1px solid #D9DEE4",
          boxShadow: "0 15px 20px 0 rgba(0,0,0,0.5)",
          padding: "0 1rem",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "2rem",
            marginLeft: "1rem",
            marginRight: "3rem",
            color: "#ebedef",
            cursor: "pointer",
          }}
        >
          <BsGrid3X3GapFill onClick={changeWidth} />
        </span>
        <span>
          <img src="https://mybuk2.buk.edu.ng/bukat2022/images/buk-logo.png" />
        </span>
        <span style={{ fontSize: "1.3rem", paddingLeft: ".3rem" }}>
          Bayero University, Kano <br />
          {regTitle}
          <br />
          {subTitle || defaultMsg}
        </span>
      </div>
    </>
  );
};

export default RegHeader;

import React from "react";

const ScePgHeader = ({ title }) => {
  return (
    <div
      style={{
        backgroundColor: "#D3DCE3",
        display: "flex",
        flexDirection: "row",
        height: "6rem",
        marginBottom: ".5rem",
      }}
    >
      <span>
        <img
          src="https://mybuk2.buk.edu.ng/sceforms/logo.png"
          style={{ width: "5.5rem", height: "100%" }}
        />
      </span>
      <span
        style={{
          color: "#498ea5",
          fontSize: "2rem",
          fontWeight: "300",
          paddingLeft: ".3rem",
          textShadow: "1px 1px 1px rgba(255,255,255,0.7)",
        }}
      >
        BAYERO UNIVERSITY, KANO <br />
        <span
          style={{
            color: "#498ea5",
            textShadow: "1px 1px 1px rgba(255,255,255,0.7)",
          }}
        >
          {title}
        </span>
      </span>
    </div>
  );
};

export default ScePgHeader;

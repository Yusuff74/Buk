import React from "react";

const SceColHeader = ({ spanLabel, children }) => {
  return (
    <div
      className="col text-center"
      style={{
        marginTop: "2rem",
        position: "relative",
        backgroundColor: "#EEEEEE",
        border: "1px solid #aaaaaa",
        boxShadow: "1px 1px 2px #FFFFFF inset",
        borderRadius: "4px 4px 0 0",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "-1rem",
          transform: "translateX(-50%)",
          left: "50%",
          width: "",
          backgroundColor: "#fff",
          padding: ".3rem",
          fontSize: "1.3rem",
          fontWeight: "550",
          border: "1px solid #aaa",
          boxShadow: "0 15px 20px 0 rgba(0,0,0,0.5)",
        }}
      >
        {spanLabel}
      </span>
      {children}
    </div>
  );
};

export default SceColHeader;

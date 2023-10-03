import React from "react";

const ScreeningHeader = () => {
  return (
    <div
      style={{
        backgroundColor: "#87CEEB",
        paddingLeft: "2rem",
      }}
    >
      <h1 style={{ fontWeight: "800" }}>Bayero University, Kano</h1>
      <p style={{ fontWeight: "600", padding: "1rem" }}>
        Undergraduate Screening Exercise Engine
      </p>
      <hr style={{ height: "2px", paddingBottom: "1rem" }} />
    </div>
  );
};

export default ScreeningHeader;

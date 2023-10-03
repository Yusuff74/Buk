import React from "react";

const BukatImgContainer = ({ step, desc, src }) => {
  const style = { fontSize: "1.2rem", fontWeight: "550", letterSpacing: "1px" };
  return (
    <div style={{ textAlign: "left" }}>
      <p style={style}>{step}</p>
      <p>{desc}</p>
      <div>
        <img
          src={src}
          style={{
            width: "100%",
            padding: "1rem",
          }}
        />
      </div>
    </div>
  );
};

export default BukatImgContainer;

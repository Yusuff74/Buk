import React from "react";

const SceMainDiv = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://mybuk2.buk.edu.ng/sceforms/images/bg.jpg')",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export default SceMainDiv;

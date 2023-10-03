import React from "react";

const BukatFooter = () => {
  const date = new Date();
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#fff",
        padding: "1rem",
        textAlign: "right",
      }}
    >
      <p style={{ textAlign: "left" }}>myBUK</p>
      <p>&copy; {date.getFullYear()} Bayero University, Kano</p>
    </footer>
  );
};

export default BukatFooter;

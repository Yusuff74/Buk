import React from "react";

const DbsFooter = () => {
  const date = new Date();
  return (
    <footer
      style={{
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        backgroundColor: "#fff",
        padding: "1rem 1.4rem",
        textAlign: "right",
      }}
    >
      &copy; {date.getFullYear()} Bayero University, Kano
    </footer>
  );
};

export default DbsFooter;

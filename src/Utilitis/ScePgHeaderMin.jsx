import React from "react";
import { Link } from "react-router-dom";

const ScePg = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "hsl(240, 0%, 90%)",
        fontSize: ".7rem",
        textTransform: "uppercase",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
        Bayero University Website
      </Link>
      <Link style={{ textDecoration: "none", color: "#000" }}>
        PT Registration Documents
      </Link>
    </div>
  );
};

export default ScePg;

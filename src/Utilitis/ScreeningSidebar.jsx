import React from "react";
import { Link } from "react-router-dom";

const ScreeningSidebar = () => {
  return (
    <div
      style={{
        flex: "1",
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        width: "10%",
        backgroundColor: "#eee",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "1rem",
        }}
      >
        <img
          src="https://mybuk2.buk.edu.ng/myScreening/restricted/images/logo.png"
          alt=""
        />
      </div>
      <p
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
          letterSpacing: "1px",
        }}
      >
        Screening Engine
      </p>
      <div style={{ color: "#000", textAlign: "center", fontSize: "1.2rem" }}>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/myScreening/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ScreeningSidebar;

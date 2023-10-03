import React from "react";
import { Link } from "react-router-dom";

const WideDivBtn = ({ btnLabel }) => {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          boxShadow: "1px 1px 2px #FFFFFF inset",
          border: "1px solid #aaa",
          backgroundColor: "#D3DCE3",
          padding: "2rem",
        }}
      >
        <button type="submit" style={{ padding: "0 2rem" }}>
          {btnLabel}
        </button>
      </div>
      <p style={{ marginTop: ".5rem", marginBottom: "0", textAlign: "center" }}>
        Already have an account?,{" "}
        <Link
          to="/sceforms/login"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          click here to login.
        </Link>
      </p>{" "}
    </>
  );
};

export default WideDivBtn;

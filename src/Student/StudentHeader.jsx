import React from "react";
import { Link } from "react-router-dom";
import { BsCaretRightFill } from "react-icons/bs";

const StudentHeader = ({ title }) => {
  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor: "transparent", height: "20rem" }}
      >
        <div
          className="head"
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 style={{ fontSize: "3rem", letterSpacing: ".3rem" }}>{title}</h3>
        </div>
      </div>
      <div
        className="container-fluid text-center"
        style={{ padding: "2rem 0", backgroundColor: "#eee" }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
        <span style={{ margin: "0 1rem" }}>
          <BsCaretRightFill />
        </span>
        {title}
      </div>
    </>
  );
};

export default StudentHeader;

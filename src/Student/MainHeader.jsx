import React from "react";
import { Link } from "react-router-dom";
import { BsCaretRightFill } from "react-icons/bs";

const MainHeader = ({ title }) => {
  return (
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
  );
};

export default MainHeader;

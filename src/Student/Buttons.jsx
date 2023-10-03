import React from "react";
import { Link } from "react-router-dom";

const Buttons = ({ link, title, desc }) => {
  return (
    <div className="container" style={{ padding: "0" }}>
      <Link
        to={link}
        className="btn btn-primary p-5"
        style={{
          position: "relative",
          width: "100%",
          letterSpacing: ".3rem",
          fontSize: "2rem",
          fontWeight: "400",
          margin: "1rem 0",
        }}
      >
        {title}
        <p
          style={{
            fontSize: ".8rem",
            fontStyle: "italic",
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {desc}
        </p>
      </Link>
    </div>
  );
};

export default Buttons;

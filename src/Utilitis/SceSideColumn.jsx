import React from "react";
import { Link } from "react-router-dom";

const SceSideColumn = () => {
  return (
    <div
      className="col text-center"
      style={{
        marginTop: "2rem",
        position: "relative",
        backgroundColor: "#EEEEEE",
        border: "1px solid #aaaaaa",
        boxShadow: "1px 1px 2px #FFFFFF inset",
        borderRadius: "4px 4px 0 0",
      }}
    >
      <form>
        <span
          style={{
            position: "absolute",
            top: "-1rem",
            backgroundColor: "#fff",
            padding: ".3rem",
            fontSize: "1rem",
            fontWeight: "550",
            border: "1px solid #aaa",
          }}
        >
          Login
        </span>
        <p
          style={{
            marginTop: "3rem",
            padding: "0 5rem",
            letterSpacing: "1px",
            wordSpacing: ".8px",
            marginBottom: "0",
          }}
        >
          <span
            style={{
              fontWeight: "550",
              marginRight: "1rem",
            }}
          >
            Notice
          </span>
          Make sure you have successfully created an account, read/understand
          the
          <Link style={{ textDecoration: "none", fontWeight: "550" }}>
            APPLICATION
          </Link>
          procedure.
        </p>
        <p style={{ margin: "0" }}>click here for the Application Procedure</p>
        <div style={{ padding: ".5rem 20%" }}>
          <label
            style={{
              display: "block",
              textAlign: "left",
              fontWeight: "550",
            }}
            htmlFor="username"
          >
            Username
          </label>
          <input type="text" style={{ width: "100%", padding: ".2rem" }} />
        </div>
        <div style={{ padding: ".5rem 20%" }}>
          <label
            style={{
              display: "block",
              textAlign: "left",
              fontWeight: "550",
            }}
            htmlFor="password"
          >
            Password
          </label>
          <input type="text" style={{ width: "100%", padding: ".2rem" }} />
        </div>

        <div
          style={{
            boxShadow: "1px 1px 2px #FFFFFF inset",
            border: "1px solid #aaa",
            backgroundColor: "#D3DCE3",
            padding: "2rem",
            margin: "0 20%",
          }}
        >
          <button type="submit" style={{ padding: "0 2rem" }}>
            Login
          </button>
        </div>
        <p>
          Forget Password?,
          <Link style={{ textDecoration: "none", color: "#555" }}>
            click here to recover Password.
          </Link>
        </p>
        <div
          style={{
            border: "1px solid #aaa",
            boxShadow: "1px 1px 2px #FFFFFF inset",
            margin: "1.7rem 20%",
            padding: "1rem .5rem",
            letterSpacing: "1px",
            lineHeight: "1.7",
          }}
        >
          <p>
            Please for enquiries and/or complaints send an e-m@il to:
            <a
              href="mailto:application.pt@buk.edu.ng."
              style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: "550",
              }}
            >
              application.pt@buk.edu.ng.
            </a>
            Make sure to quote your username and invoice number in any
            correspondence. Thank you.
          </p>
        </div>
      </form>
    </div>
  );
};

export default SceSideColumn;

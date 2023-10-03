import React from "react";
import { FaRightFromBracket } from "react-icons/fa6";
import Input from "../Utilitis/Input";

const FormLogin = () => {
  return (
    <>
      <form style={{ textAlign: "left", padding: "0 20%" }}>
        <h1 style={{ textAlign: "center" }}>
          <FaRightFromBracket /> Login
        </h1>
        <hr />
        <Input label="Username *" placeholder="Username" />
        <Input label="Password *" placeholder="Password" />
        <button className="btn btn-primary mx-5">reset</button>
        <button className="btn btn-success mx-5">Login</button>
      </form>
    </>
  );
};

export default FormLogin;

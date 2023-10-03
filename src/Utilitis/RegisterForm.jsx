import React from "react";
import { FaUserPlus } from "react-icons/fa6";
import Input from "../Utilitis/Input";

const RegisterForm = () => {
  return (
    <>
      <form
        style={{
          textAlign: "left",
          padding: "0 20%",
          marginBottom: "3rem",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1>
            {" "}
            <FaUserPlus /> Create Account
          </h1>
          <hr />
          <p>
            Please use your personal email address and personal GSM phone number
            as you need in case you need to recover your password
          </p>
        </div>
        <Input label="First Name *" />
        <Input label="Last Name *" />
        <Input label="Middle Name *" />
        <Input label="Personal GSM *" />
        <Input label="Personal Email *" />
        <div class="input-group mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span
            className="input-group-text bg-primary"
            style={{ color: "#fff" }}
            id="basic-addon2"
          >
            Generate Password
          </span>
        </div>
        <Input label="Repeat Password *" />
        <button className="btn btn-primary mx-5 py-2 px-5">reset</button>
        <button className="btn btn-success mx-5 py-2 px-5">create</button>
      </form>
    </>
  );
};

export default RegisterForm;

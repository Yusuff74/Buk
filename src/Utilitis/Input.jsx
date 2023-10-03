import React from "react";

const Input = ({ label, placeholder, value, onChange, examLabel }) => {
  return (
    <div className="mb-3">
      <label htmlFor="formGroupExampleInput" className="form-label">
        {label}
      </label>
      <input
        type="text"
        className="form-control"
        id="formGroupExampleInput"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value, examLabel)}
        style={{ border: "1px solid #000" }}
      />
    </div>
  );
};

export default Input;

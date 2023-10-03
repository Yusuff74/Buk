import React from "react";

const SelectInput = ({ label, items, onChange, value, examLabel }) => {
  return (
    <div className="mb-3">
      <label htmlFor="inputState" className="form-label">
        {label}
      </label>
      <select
        id="inputState"
        className="form-select"
        value={value}
        onChange={(e) => onChange(e.target.value, examLabel)}
        style={{ border: "1px solid #000" }}
      >
        <option key="" value=""></option>
        {items.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;

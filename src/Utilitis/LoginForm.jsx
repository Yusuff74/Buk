import React from "react";
import Input from "./Input";
import SelectInput from "./SelectInput";

const LoginForm = ({
  onSubmit,
  label,
  title,
  btnLabel,
  selectLabel,
  selectLabel2,
  items,
  items2,
  placeholder,
}) => {
  return (
    <>
      <h1>{title}</h1>
      <form onSubmit={onSubmit}>
        <Input label={label} placeholder={placeholder} />
        <SelectInput label={selectLabel} items={items} />
        <SelectInput label={selectLabel2} items={items2} />
        <button className="btn btn-primary" type="submit">
          {btnLabel}
        </button>
      </form>
    </>
  );
};

export default LoginForm;

import React, { FC } from "react";
import { input } from "./models";
import "./style.css";

const InputField: FC<input> = ({
  readonly,
  id,
  label,
  type,
  placeholder,
  auto,
  name,
  forinput,
  required,
  getData,
}) => {
  return (
    <>
      <label htmlFor={forinput}>{label}</label>
      <input
        readOnly={readonly}
        id={id}
        type={type}
        placeholder={placeholder}
        autoFocus={auto}
        name={name}
        required={required}
        onChange={getData}
      />
    </>
  );
};

export default InputField;

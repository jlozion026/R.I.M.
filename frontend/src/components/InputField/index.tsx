import { FC } from "react";
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
  value,
  checked,
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
        value={value}
        name={name}
        required={required}
        checked={checked}
        onChange={getData}
      />
    </>
  );
};

export default InputField;

import React from "react";
import { Input } from "./Input";
import "./FormInput.css"

export const FormInput = ({ inputType, labelText, id, value, onChange }) => {
  return (
    <div className="wrapper-input">
      <label htmlFor={id}>{labelText}</label>
      <Input id={id} type={inputType} value={value} onChange={onChange} />
    </div>
  );
};

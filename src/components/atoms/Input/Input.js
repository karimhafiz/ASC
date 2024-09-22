import React from "react";

const Input = ({ id, type, name, placeholder, value, onChange }) => (
  <input
    id={id}
    name={name}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required
  />
);

export default Input;

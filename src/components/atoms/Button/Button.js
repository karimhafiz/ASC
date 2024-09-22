// src/components/atoms/Button/Button.js
import React from "react";
import "./Button.css";

const Button = ({ className, onClick, disabled, children }) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={`button ${className}`}
  >
    {children}
  </button>
);

export default Button;

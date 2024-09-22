// src/components/atoms/NavLink/NavLink.js
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import classes from "./Link.module.css";

const Link = ({ to, children, onClick }) => (
  <RouterLink to={to} className={classes.link} onClick={onClick}>
    {children}
  </RouterLink>
);

export default Link;

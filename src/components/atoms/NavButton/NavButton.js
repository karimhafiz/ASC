// src/components/atoms/NavButton/NavButton.js
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import classes from "./NavButton.module.css";

const NavButton = ({ isMenuOpen, onClick }) => (
  <button className={classes.navButton} onClick={onClick}>
    {isMenuOpen ? <FaTimes /> : <FaBars />}
  </button>
);

export default NavButton;

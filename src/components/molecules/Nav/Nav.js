// src/components/molecules/Nav/Nav.js
import React, { useRef } from "react";
import NavLink from "../../atoms/NavLink/NavLink";
import classes from "./Nav.module.css";
import { FaTimes } from "react-icons/fa";

const Nav = ({ showNavBar, navRef }) => (
  <nav ref={navRef} className={classes.nav}>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About Us</NavLink>
    <NavLink to="/events">Events</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    <button className={classes.navCloseButton} onClick={showNavBar}>
      <FaTimes />
    </button>
  </nav>
);

export default Nav;

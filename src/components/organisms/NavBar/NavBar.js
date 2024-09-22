import React, { useState } from "react";
import Logo from "../../molecules/Logo/Logo";
import { NavLink } from "../../molecules/NavLink/NavLink";
import Button from "../../atoms/Button/Button";
import { Icon } from "../../atoms/Icon/Icon";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <Logo />
      <Button className="nav-toggle-btn" onClick={toggleMenu}>
        <Icon IconComponent={isMenuOpen ? FaTimes : FaBars} />
      </Button>
      <div
        className={`nav-overlay ${isMenuOpen ? "nav-open" : ""}`}
        onClick={toggleMenu}
      ></div>
      <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
        <NavLink to="/" onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={toggleMenu}>
          About
        </NavLink>
        <NavLink to="/events" onClick={toggleMenu}>
          Events
        </NavLink>
        <NavLink to="/contact" onClick={toggleMenu}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

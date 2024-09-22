import React from "react";
import Link from "../../atoms/Link/Link";
import "./NavLink.css";
export const NavLink = ({ to, children, onClick }) => {
  return (
    <Link to={to} onClick={onClick} className="nav-link">
      {children}
    </Link>
  );
};

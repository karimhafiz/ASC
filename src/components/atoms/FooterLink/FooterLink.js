// src/components/atoms/FooterLink/FooterLink.js
import React from "react";
import classes from "./FooterLink.module.css";

const FooterLink = ({ href, children }) => (
  <a href={href} className={classes.footerLink}>
    {children}
  </a>
);

export default FooterLink;

// src/components/atoms/SocialIcon/SocialIcon.js
import React from "react";
import classes from "./SocialIcon.module.css";

const SocialIcon = ({ href, IconComponent }) => (
  <a href={href} className={classes.socialIcon}>
    <IconComponent />
  </a>
);

export default SocialIcon;

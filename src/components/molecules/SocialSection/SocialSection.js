import React from "react";
import SocialIcon from "../../atoms/SocialIcon/SocialIcon";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import classes from "./SocialSection.module.css";

const SocialSection = () => (
  <section className={classes.socialSection}>
    <span>Get connected with us on social networks:</span>
    <div className={classes.socialIcons}>
      <SocialIcon href="/" IconComponent={FaFacebookF} />
      <SocialIcon href="/" IconComponent={FaInstagram} />
    </div>
  </section>
);

export default SocialSection;

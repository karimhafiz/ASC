// src/components/molecules/AboutSection/AboutSection.js
import React from "react";
import classes from "./AboutSection.module.css";

const AboutSection = () => (
  <div className={classes.aboutSection}>
    <h6 className="text-uppercase fw-bold mb-4">
      About Ayendah Sazan Community
    </h6>
    <p>
      Ayendah Sazan Community is a non-profit organization based in Leeds,
      committed to various charitable activities. Our focus areas include
      education, overseas aid, arts and culture, amateur sports, and promoting
      human rights, religious harmony, equality, and diversity.
    </p>
  </div>
);

export default AboutSection;

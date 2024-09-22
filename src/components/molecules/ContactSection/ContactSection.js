import React from "react";
import classes from "./ContactSection.module.css";

const ContactSection = () => (
  <div className={classes.contactSection}>
    <h6 className="text-uppercase fw-bold mb-4">Contact Details</h6>
    <p>
      <strong>Charity number:</strong> 1150822
    </p>
    <p>
      <strong>Address:</strong> Ayendah Sazan Community
      <br />
      Brignall Garth
      <br />
      LEEDS
      <br />
      LS9 7HB
    </p>
    <p>
      <strong>Phone:</strong> 07888660973
    </p>
    <p>
      <strong>Email:</strong> info@ascuk.org.uk
    </p>
  </div>
);

export default ContactSection;

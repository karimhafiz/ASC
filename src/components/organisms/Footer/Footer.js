// src/components/organisms/Footer/Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialSection from "../../molecules/SocialSection/SocialSection";
import AboutSection from "../../molecules/AboutSection/AboutSection";
import ContactSection from "../../molecules/ContactSection/ContactSection";
import classes from "./Footer.module.css";

const Footer = () => (
  <footer className={classes.footer}>
    <SocialSection />
    <Container className="text-center text-md-start mt-5">
      <Row className="mt-3">
        <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
          <AboutSection />
        </Col>
        <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
          <ContactSection />
        </Col>
      </Row>
    </Container>
    <div className={classes.footerBottom}>
      © 2021 Ayendah Sazan Community. All rights reserved. | Designed by Hafiz
      Karim
    </div>
  </footer>
);

export default Footer;

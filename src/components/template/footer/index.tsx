import React from "react";
import { Container } from "react-bootstrap";
import Company from "./companyData/Company";
import CopyRight from "./copyright/CopyRight";
import Links from "./links/Links";
import styles from "./Footer.module.scss";
import Contact from "./contact/Contact";

const Footer = () => {
  return (
    <footer className={styles.Footer_Main}>
      <b>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#000" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#18150d" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path
            fill="url(#grad1)"
            fill-opacity="0.9"
            d="M0,64L48,80C96,96,192,128,288,138.7C384,149,480,139,576,160C672,181,768,235,864,229.3C960,224,1056,160,1152,122.7C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </b>

      <Container>
        <div>
          <article>
            <Company />

            <Links />

            <Contact />
          </article>
        </div>
        <span className={styles.Border}></span>
        <CopyRight />
      </Container>
    </footer>
  );
};

export default Footer;

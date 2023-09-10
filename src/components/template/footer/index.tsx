import React from "react";
import { Container } from "react-bootstrap";
import Company from "./companyData/Company";
import CopyRight from "./copyright/CopyRight";
import styles from "./Footer.module.scss";
import Contact from "./contact/Contact";

const Footer = () => {
  return (
    <footer className={styles.Footer_Main}>
      <Container fluid="lg">
        <div>
          <article>
            {/* <Company /> */}

            <Contact />
          </article>
        </div>
      </Container>
      <CopyRight />
    </footer>
  );
};

export default Footer;

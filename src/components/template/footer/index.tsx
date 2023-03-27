import React from "react";
import { Container } from "react-bootstrap";
import Company from "./companyData/Company";
import CopyRight from "./copyright/CopyRight";

import Links from "./links/Links";
import SocialContacts from "./socialContact/SocialContacts";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.Footer_Main}>
      <Container>
        <div>
          <article>
            <Company />
            <Links />
            <SocialContacts />
          </article>
        </div>
      </Container>
      <CopyRight />

    </footer>
  );
};

export default Footer;

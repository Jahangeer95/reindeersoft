import React from "react";
import { Container } from "react-bootstrap";
import CopyRight from "./copyright/CopyRight";
import Contact from "./contact/Contact";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.Footer_Main}>
      <Container fluid="lg">
        <div>
          <article>
            <Contact />
          </article>
        </div>
      </Container>
      <CopyRight />
    </footer>
  );
}

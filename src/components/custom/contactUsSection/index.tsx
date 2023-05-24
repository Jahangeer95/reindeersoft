import React from "react";
import { Container } from "react-bootstrap";
import ContactUsForm from "../contactUsForm";
import styles from "./styles.module.scss";

const ContactUsSection = () => {
  return (
    <section className={styles.contactUsSectionMain}>
      <Container fluid="lg">
        <div>
          <h2>Get in touch us with us</h2>
          <ContactUsForm />
        </div>
      </Container>
    </section>
  );
};

export default ContactUsSection;

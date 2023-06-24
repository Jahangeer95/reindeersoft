import React from "react";
import { Container } from "react-bootstrap";
import ContactUsForm from "../contactUsForm";
import styles from "./styles.module.scss";
import { useView } from "@/hooks/useView";

const ContactUsSection = () => {
  const { ref, inView } = useView();
  return (
    <section
      ref={ref}
      className={`${styles.contactUsSectionMain} ${
        inView ? styles.visible : ""
      }`}
    >
      <Container fluid="lg">
        <div>
          <h2>Contact us</h2>
          <ContactUsForm />
        </div>
      </Container>
    </section>
  );
};

export default ContactUsSection;

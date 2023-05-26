import ContactUsForm from "@/components/custom/contactUsForm";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "./form.module.scss";

const Form = () => {
  return (
    <section className={styles.formMain}>
      <Container fluid="lg">
        <div>
          <h2>Get in touch with us!</h2>
          <p>
            We are happy to answer any questions you have or provide you with an
            estimate. Just send us a message in the form below with any
            questions you may have
          </p>
          <article>
            <ContactUsForm />
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Form;

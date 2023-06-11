import React from "react";
import { Container } from "react-bootstrap";
import * as data from "./faqData";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "./faqa.module.scss";

const Faqs = () => {
  return (
    <section className={styles.faqsMain}>
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <h2>{data.title}</h2>
          <article>
            <details>
              <summary>
                <h5>Do you offer custom software development services?</h5>
                <span>
                  <AiOutlinePlus />
                </span>
              </summary>
              <p>
                We’re open to working with any industry. as our team’s strategy,
                project management, and development skills proved to be
                effective in SaaS, MedTech, or even government projects.
                Focusteck has even provided support to other software
                development companies.
              </p>
            </details>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Faqs;

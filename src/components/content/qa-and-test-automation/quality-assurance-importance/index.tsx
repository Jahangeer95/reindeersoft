import React from "react";
import { Container } from "react-bootstrap";
import * as data from "./QualityAssuranceImportanceData";
import styles from "./qualityAssurance.module.scss";

const QualityAssuranceImportance = () => {
  return (
    <section className={styles.QualityAssuranceMain}>
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <h2 className="text-center">{data.title}</h2>
          <article>
            {data.contentArray.map((state, idx) => (
              <p key={idx}>{state}</p>
            ))}
          </article>
        </div>
      </Container>
    </section>
  );
};

export default QualityAssuranceImportance;

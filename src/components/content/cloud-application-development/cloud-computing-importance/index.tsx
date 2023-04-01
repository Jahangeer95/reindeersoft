import React from "react";
import { Container } from "react-bootstrap";
import * as data from "./cloudComputingImportanceData";
import styles from "./cloudComputing.module.scss";

const CloudComputingImportance = () => {
  return (
    <section className={styles.CloudComputingMain}>
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

export default CloudComputingImportance;

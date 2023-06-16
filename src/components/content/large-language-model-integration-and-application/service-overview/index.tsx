import React from "react";
import { Container } from "react-bootstrap";
import * as data from "./serviceOverviewData";
import styles from "./serviceOverview.module.scss";

const ServiceOverview = () => {
  return (
    <section className={styles.ServiceOverviewMain}>
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <h2 className="text-center">{data.ServiceOverViewTitle}</h2>
          <article>
            {data.ServiceOverviewDescription.map((state, idx) => (
              <p key={idx}>{state}</p>
            ))}
          </article>
        </div>
      </Container>
    </section>
  );
};

export default ServiceOverview;

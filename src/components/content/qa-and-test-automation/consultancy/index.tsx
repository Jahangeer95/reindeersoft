import React from "react";
import { Container } from "react-bootstrap";
import * as data from "./ConsultancyData";
import styles from "./consultancyServices.module.scss";

const ConsultancyServices = () => {
  return (
    <section className={styles.ConsultancyServicesMain} id="five">
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <h3 className="text-center">{data.title}</h3>
          <article>
            <p>{data.paragraph}</p>
            <ul>
              {data.list.map((state, idx) => (
                <li key={idx}>{state}</li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default ConsultancyServices;

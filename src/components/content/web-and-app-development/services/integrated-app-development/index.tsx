import React from "react";
import { Container } from "react-bootstrap";
import * as data from "./integratedAppDevelopmentData";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./IntegratedAppDevelopment.module.scss";

const IntegratedAppDevelopment = () => {
  return (
    <section
      className={styles.appDevelopmentMain}
      id={camelToDash(data.appDevelopmentTitle)}
    >
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <h3 className="text-center">{data.appDevelopmentTitle}</h3>
          <article>
            {data.appDevelopmentDescription.map((state, idx) => (
              <p key={idx}>{state}</p>
            ))}
          </article>
        </div>
      </Container>
    </section>
  );
};

export default IntegratedAppDevelopment;

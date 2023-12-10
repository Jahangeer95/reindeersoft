import React from "react";
import { Container } from "react-bootstrap";
import { useView } from "@/hooks/useView";
import * as data from "./integratedAppDevelopmentData";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./IntegratedAppDevelopment.module.scss";

const IntegratedAppDevelopment = () => {
  const { ref, inView } = useView();

  return (
    <section
      className={styles.integratedMobileAppMain}
      id={camelToDash(data.title)}
    >
      <Container
        fluid="lg"
        ref={ref}
        className={`${styles["content-container"]} ${
          inView ? styles.visible : ""
        }`}
      >
        <div className="d-flex flex-column align-items-center">
          <h3 className="text-center">{data.title}</h3>
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

export default IntegratedAppDevelopment;

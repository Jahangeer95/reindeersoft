import React from "react";
import { Container } from "react-bootstrap";
import { useView } from "@/hooks/useView";
import * as data from "./webAppProcessData";
import styles from "./webApp.module.scss";

const WebAndAppDevProcess = () => {
  const { ref, inView } = useView();
  return (
    <section className={styles.WebAppProcessMain}>
      <Container
        fluid="lg"
        ref={ref}
        className={`${styles["content-container"]} ${
          inView ? styles.visible : ""
        }`}
      >
        <div className="d-flex flex-column align-items-center">
          <h2 className="text-center">{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <article>
          {data.qualityAssuranceProcessArray.map((state, idx) => {
            return (
              <div key={idx}>
                <span className={styles.Triangle1}></span>
                <span
                  className={`d-flex justify-content-center align-items-center ${styles.Content}`}
                >
                  <p>{state.heading}</p>
                </span>
                <span className={styles.Triangle2}></span>
              </div>
            );
          })}
        </article>
      </Container>
    </section>
  );
};

export default WebAndAppDevProcess;

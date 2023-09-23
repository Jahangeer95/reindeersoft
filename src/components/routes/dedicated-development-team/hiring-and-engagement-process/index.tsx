import React from "react";
import { Container } from "react-bootstrap";
import * as data from "./hiringAndEngagementProcessData";
import styles from "./hiringAndEngagementProcess.module.scss";
import { useView } from "@/hooks/useView";

const HiringAndEngagementProcess = () => {
  const { ref, inView } = useView();
  return (
    <section className={styles.HiringAndEngagementMain}>
      <Container
        fluid="lg"
        ref={ref}
        className={`${styles["content-container"]} ${
          inView ? styles.visible : ""
        }`}
      >
        <div className="d-flex flex-column align-items-center">
          <h2>{data.mainTitle}</h2>
          <p>{data.description}</p>
          <article>
            {data.contentArray.map((state, idx) => (
              <div key={idx}>
                <p>
                  <span>{idx + 1}</span>
                  {state.title}
                </p>
                <p>{state.description}</p>
              </div>
            ))}
          </article>
        </div>
      </Container>
    </section>
  );
};

export default HiringAndEngagementProcess;

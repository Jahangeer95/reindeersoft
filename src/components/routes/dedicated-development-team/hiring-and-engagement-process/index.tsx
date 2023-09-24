import React from "react";
import { Container } from "react-bootstrap";
import { useView } from "@/hooks/useView";
import ProgressCircle from "@/components/ui/ProgressCircle";
import * as data from "./hiringAndEngagementProcessData";
import styles from "./hiringAndEngagementProcess.module.scss";

const HiringAndEngagementProcess = () => {
  const { ref, inView } = useView();
  return (
    <section className={styles.HiringAndEngagementProcessMain}>
      <Container
        fluid="lg"
        ref={ref}
        className={`${styles["content-container"]} ${
          inView ? styles.visible : ""
        }`}
      >
        <div className="d-flex flex-column align-items-center">
          <h2 className="text-center">{data.mainTitle}</h2>
          <p>{data.description}</p>
        </div>
        <article>
          {data.contentArray.map((state, idx) => {
            return (
              <div key={idx}>
                <span className={styles.Border}></span>
                <span>
                  <ProgressCircle percentage={(idx + 1) * 20} />
                </span>
                <div>
                  <p>{state.title}</p>
                  <p>{state.description}</p>
                </div>
              </div>
            );
          })}
        </article>
      </Container>
    </section>
  );
};

export default HiringAndEngagementProcess;

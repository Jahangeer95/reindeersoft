import React from "react";
import { Container } from "react-bootstrap";
import { useView } from "@/hooks/useView";
import * as data from "./webAppImportanceData";
import styles from "./serviceOverview.module.scss";

const WebAppDevOverview = () => {
  const { ref, inView } = useView();
  return (
    <section className={styles.ServiceOverviewMain}>
      <Container
        fluid="lg"
        ref={ref}
        className={`${styles["content-container"]} ${
          inView ? styles.visible : ""
        }`}
      >
        <div className="d-flex flex-column align-items-center">
          <h2 className="text-center">{data.title}</h2>
          <article>
            <p>{data.content.description}</p>
            {data.content.serviceArray.map((state, idx) => {
              return (
                <div key={idx}>
                  <p>
                    <span>{state.title}</span>
                    {state.serviceDescription}
                  </p>
                </div>
              );
            })}
            <p>{data.content.finishingText}</p>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default WebAppDevOverview;

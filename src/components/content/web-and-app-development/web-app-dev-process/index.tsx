import React from "react";
import { Container } from "react-bootstrap";
import ProgressCircle from "@/components/ui/ProgressCircle";
import * as data from "./webAppProcess";
import styles from "./webApp.module.scss";

const WebAndAppDevProcess = () => {
  return (
    <section className={styles.WebAppProcessMain}>
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <h2 className="text-center">{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <article>
          {data.qualityAssuranceProcessArray.map((state) => {
            return (
              <div key={state.id}>
                <span className={styles.Border}></span>
                <span>
                  <ProgressCircle percentage={state.id * 20} />
                </span>
                <div>
                  <p>{state.heading}</p>
                  <ul>
                    {state.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </article>
      </Container>
    </section>
  );
};

export default WebAndAppDevProcess;

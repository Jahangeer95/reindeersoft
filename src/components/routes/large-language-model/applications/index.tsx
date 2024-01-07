import React from "react";
import { useView } from "@/hooks/useView";
import { Container } from "react-bootstrap";
import * as data from "./llmApplicationsData";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./llmApplications.module.scss";

const LLMApplications = () => {
  const { ref, inView } = useView();

  return (
    <section
      className={styles.llmApplicationsMain}
      id={camelToDash(data.llmApplicationTitle)}
    >
      <Container
        fluid="lg"
        ref={ref}
        className={`${styles["content-container"]} ${
          inView ? styles.visible : ""
        }`}
      >
        <div className="d-flex flex-column align-items-center">
          <h2 className="text-center">{data.llmApplicationTitle}</h2>
          <article>
            <ul>
              {data.llmApplicationContent.map((state, idx) => {
                return (
                  <li key={idx}>
                    <aside>{idx + 1}</aside>
                    <p>
                      <span>{state.title}</span>
                      <span>{state.description}</span>
                    </p>
                  </li>
                );
              })}
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default LLMApplications;

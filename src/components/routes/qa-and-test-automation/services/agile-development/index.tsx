import React from "react";
import { useView } from "@/hooks/useView";
import { Container } from "react-bootstrap";
import * as data from "./agileDevelopmentData";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./agileDevelopment.module.scss";

const AgileDevelopment = () => {
  const { ref, inView } = useView();
  return (
    <section
      className={styles.AgileDevelopmentMain}
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
            <p>{data.agileContent.paragraph1}</p>
            <ul>
              {data.agileContent.list.map((state, idx) => (
                <li key={idx}>
                  <span>
                    <h4>{state.title}</h4>
                  </span>
                  <p>{state.description}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default AgileDevelopment;

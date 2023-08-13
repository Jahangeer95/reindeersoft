import React from "react";
import { Container } from "react-bootstrap";
import { useView } from "@/hooks/useView";
import * as data from "./waterFallDevelopmentData";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./waterfallDevelopment.module.scss";

const WaterfallDevelopment = () => {
  const { ref, inView } = useView();

  return (
    <section
      className={styles.WaterFallDevelopmentMain}
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
            <p>{data.content.paragraph1}</p>
            <ul>
              {data.content.list.map((state, idx) => (
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

export default WaterfallDevelopment;

import React from "react";
import { Container } from "react-bootstrap";
import * as data from "./waterFallDevelopmentData";
import styles from "./waterfallDevelopment.module.scss";
import { camelToDash } from "@/utils/functions/camelToDash";

const WaterfallDevelopment = () => {
  return (
    <section
      className={styles.WaterFallDevelopmentMain}
      id={camelToDash(data.title)}
    >
      <Container fluid="lg">
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

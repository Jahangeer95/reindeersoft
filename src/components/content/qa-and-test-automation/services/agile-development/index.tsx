import React from "react";
import { Container } from "react-bootstrap";
import * as data from "./agileDevelopmentData";
import styles from "./agileDevelopment.module.scss";

const AgileDevelopment = () => {
  return (
    <section
      className={styles.AgileDevelopmentMain}
      id={data.title.toLowerCase().split(" ").join("-")}
    >
      <Container fluid="lg">
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

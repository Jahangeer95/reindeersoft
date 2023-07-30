import React from "react";
import { Container } from "react-bootstrap";
import * as data from "./ConsultancyData";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./consultancyServices.module.scss";

const ConsultancyServices = () => {
  return (
    <section
      className={styles.ConsultancyServicesMain}
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

export default ConsultancyServices;

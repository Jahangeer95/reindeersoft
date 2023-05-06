import React from "react";
import { Container } from "react-bootstrap";
import * as data from "./webDevelopmentData";
import styles from "./WebDevlopment.module.scss";

const WebDevelopmentServices = () => {
  return (
    <section className={styles.webDevelopmentMain}>
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <h3 className="text-center">{data.webDevelopmentTitle}</h3>
          <article>
            {data.webDevelopmentDescription.map((state, idx) => (
              <p key={idx}>{state}</p>
            ))}

            <ul>
              {data.webDevelopmentTypeList.map((state, idx) => {
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
      <div>
        <Container>
          <div>
            {data.webDevelopmentTechnologies.map((state, idx) => {
              return (
                <article key={idx}>
                  <h4 className="text-center">{state.heading}</h4>
                  <div>
                    {state.List.map((state, idx) => {
                      return (
                        <aside
                          className="d-flex flex-column align-items-center justify-content-center"
                          key={idx}
                        >
                          <h5>{state}</h5>
                        </aside>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default WebDevelopmentServices;

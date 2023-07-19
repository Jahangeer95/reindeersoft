import React from "react";
import { Container } from "react-bootstrap";
import * as data from "./appDevelopmentData";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./AppDevelopment.module.scss";

const AppDevelopment = () => {
  return (
    <section
      className={styles.appDevelopmentMain}
      id={camelToDash(data.appDevelopmentTitle)}
    >
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <h3 className="text-center">{data.appDevelopmentTitle}</h3>
          <article>
            {data.appDevelopmentDescription.map((state, idx) => (
              <p key={idx}>{state}</p>
            ))}

            <ul>
              {data.appDevelopmentTypeList.map((state, idx) => {
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
            {data.appDevelopmentTechnologies.map((state, idx) => {
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

export default AppDevelopment;

import React from "react";
import { Container } from "react-bootstrap";
import * as data from "./webDevelopmentData";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./WebDevlopment.module.scss";
import Image from "next/image";

const WebDevelopmentServices = () => {
  return (
    <section
      className={styles.webDevelopmentMain}
      id={camelToDash(data.webDevelopmentTitle)}
    >
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <h3 className="text-center">{data.webDevelopmentTitle}</h3>
          <article>
            {data.webDevelopmentDescription.map((state, idx) => (
              <p key={idx}>{state}</p>
            ))}
            <ul>
              {data.websiteTypes.map((state, idx) => {
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
          <article>
            {data.webDevelopmentTechnologies.map((state, idx) => {
              return (
                <div key={idx}>
                  <h4 className="text-left">{state.heading}</h4>
                  {state.List.map((state, idx) => {
                    return (
                      <span key={idx} title={state.alt}>
                        <Image src={state.icon} alt={state.alt} />
                      </span>
                    );
                  })}
                </div>
              );
            })}
          </article>
        </div>
      </Container>
    </section>
  );
};

export default WebDevelopmentServices;

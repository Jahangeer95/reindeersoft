import React from "react";
import { Container } from "react-bootstrap";
import * as data from "./automatedTestingData";
import Image from "next/image";
import Technologies from "./Technologies";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./automatedTesting.module.scss";

const AutomatedTesting = () => {
  return (
    <section
      className={styles.AutomatedTestingMain}
      id={camelToDash(data.title)}
    >
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <h3 className="text-center">{data.title}</h3>
          <article>
            <p>{data.content.paragraph1}</p>
            <ul>
              {data.content.list.map((state, idx) => {
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
      <div className={styles.AutomationServices}>
        <Container fluid="lg">
          <div className="d-flex flex-column align-items-center">
            <h4 className="text-center">{data.automationServicesTitle}</h4>
            <article>
              <span>
                <Image src={data.automationImage} alt="automation" />
              </span>
              <div>
                <p>{data.automationServicesDescription}</p>
                {data.automationServicesdata.map((state, idx) => {
                  return (
                    <span key={idx}>
                      <Image src={state.image} alt={state.title} />
                      <aside>
                        <p>{state.title}</p>
                      </aside>
                    </span>
                  );
                })}
              </div>
            </article>
          </div>
        </Container>
      </div>
      <div className={styles.Slider}>
        <h4 className="text-center">{data.techTitle}</h4>
        <Container fluid="lg">
          <div>
            {data.techData.map((state, idx) => {
              return (
                <aside
                  className="d-flex flex-column align-items-center justify-content-center"
                  key={idx}
                >
                  <h5>{state.title}</h5>
                  <span>{Technologies(state.title)}</span>
                </aside>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default AutomatedTesting;

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import * as data from "./automatedTestingData";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./automatedTesting.module.scss";

const AutomatedTesting = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevActiveIndex) => prevActiveIndex + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeIndex > 8) {
      setActiveIndex(0);
    }
  }, [activeIndex]);

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
                    <p>{state.title}</p>
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
            {data.technologiesList.map((state, idx) => {
              return (
                <span key={idx} title={state.alt}>
                  <Image src={state.icon} alt={state.alt} />
                  <aside
                    className={idx === activeIndex ? styles.textDisplay : ""}
                  >
                    <p>{state.alt}</p>
                  </aside>
                </span>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default AutomatedTesting;

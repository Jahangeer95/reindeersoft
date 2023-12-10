import Image from "next/image";
import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import * as data from "../../data";
import { useView } from "@/hooks/useView";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./WebDevlopment.module.scss";

const WebDevelopmentServices = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { ref, inView } = useView();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevActiveIndex) => prevActiveIndex + 1);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeIndex > 6) {
      setActiveIndex(0);
    }
  }, [activeIndex]);

  return (
    <section
      className={styles.webDevelopmentMain}
      id={camelToDash(data.webDevelopmentTitle)}
    >
      <Container
        fluid="lg"
        ref={ref}
        className={`${styles["content-container"]} ${
          inView ? styles.visible : ""
        }`}
      >
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
                        <Image
                          src={state.icon}
                          alt={state.alt}
                          loading="lazy"
                        />
                        <aside
                          className={
                            idx === activeIndex ? styles.textDisplay : ""
                          }
                        >
                          <p>{state.alt}</p>
                        </aside>
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

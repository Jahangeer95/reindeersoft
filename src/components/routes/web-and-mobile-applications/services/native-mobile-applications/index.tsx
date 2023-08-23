import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useView } from "@/hooks/useView";
import * as data from "./nativeMobileAppData";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./nativeMobileApp.module.scss";
import Image from "next/image";

const NativeMobileApplications = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { ref, inView } = useView();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevActiveIndex) => prevActiveIndex + 1);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeIndex > 1) {
      setActiveIndex(0);
    }
  }, [activeIndex]);

  return (
    <section
      className={styles.nativeMobileAppMain}
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
          <h2 className="text-center">{data.title}</h2>
          <article>
            {data.contentArray.map((state, idx) => (
              <p key={idx}>{state}</p>
            ))}
          </article>
          <article>
            {data.nativeMobileApplicationsTechnologies.map((state, idx) => {
              return (
                <div key={idx}>
                  {/* <h4 className="text-left">{state.heading}:</h4> */}
                  {state.List.map((state, idx) => {
                    return (
                      <span key={idx} title={state.alt}>
                        <Image src={state.icon} alt={state.alt} />
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

export default NativeMobileApplications;

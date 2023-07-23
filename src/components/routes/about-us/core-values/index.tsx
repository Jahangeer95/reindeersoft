import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import * as data from "./coreValuesData";
import styles from "./coreValues.module.scss";
import { useView } from "@/hooks/useView";

const OurCoreValues = () => {
  const { ref, inView } = useView();

  return (
    <section className={styles.coreValuesMain}>
      <Container
        fluid="lg"
        ref={ref}
        className={`${styles["content-container"]} ${
          inView ? styles.visible : ""
        }`}
      >
        <div className="d-flex flex-column align-items-center">
          <h2>{data.coreValueTitle}</h2>
          <article>
            {data.coreValueContent.map((state, idx) => {
              return (
                <div key={idx}>
                  <h5>{state.title}</h5>
                  <p>{state.description}</p>
                  <span>
                    <Image src={state.image} alt={state.title} />
                  </span>
                </div>
              );
            })}
          </article>
        </div>
      </Container>
    </section>
  );
};

export default OurCoreValues;

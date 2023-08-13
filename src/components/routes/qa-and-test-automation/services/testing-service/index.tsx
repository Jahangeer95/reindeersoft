import React from "react";
import Image from "next/image";
import { useView } from "@/hooks/useView";
import { Container } from "react-bootstrap";
import * as data from "./testingServiceData";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./testingService.module.scss";

const UniqueTesting = () => {
  const { ref, inView } = useView();
  return (
    <section className={styles.UniqueTestingMain} id={camelToDash(data.title)}>
      <Container
        fluid="lg"
        ref={ref}
        className={`${styles["content-container"]} ${
          inView ? styles.visible : ""
        }`}
      >
        <div className="d-flex flex-column align-items-center">
          <h3 className="text-center">{data.title}</h3>
          <article>
            {data.UniqueTestingArr.map((state, idx) => {
              return (
                <div key={idx}>
                  <Image src={state.image} alt={state.title} />
                  <h4>{state.title}</h4>
                  <p>{state.description}</p>
                </div>
              );
            })}
          </article>
        </div>
      </Container>
    </section>
  );
};

export default UniqueTesting;

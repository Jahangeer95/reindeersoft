import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import * as data from "./UniqueTestingData";
import styles from "./uniqueTesting.module.scss";

const UniqueTesting = () => {
  return (
    <section className={styles.UniqueTestingMain} id="three">
      <Container fluid="lg">
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

import React from "react";
import { Container } from "react-bootstrap";
import * as data from "./bannerData";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <section className={styles.IotMain}>
      <Container>
        <div>
          <article>
            <h1>{data.title}</h1>
            <div>
              <p>{data.description}</p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Banner;

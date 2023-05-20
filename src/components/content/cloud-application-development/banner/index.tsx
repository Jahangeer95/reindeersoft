import React from "react";
import { Container } from "react-bootstrap";
import * as data from "./bannerData";
import { handleClickScroll } from "@/utils/functions/scrollingHandler";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <section className={styles.QaMain}>
      <Container>
        <div>
          <article>
            <h1>{data.title}</h1>
            <div>
              <p>{data.description}</p>

              <span></span>
              <ul>
                {data.list.map((state, idx) => (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => handleClickScroll(state)}
                    >
                      {state}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Banner;

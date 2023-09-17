import React from "react";
import { useView } from "@/hooks/useView";
import { Container } from "react-bootstrap";
import * as data from "./ddtBenifitsData";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./ddtBenifits.module.scss";

const DDTBenifits = () => {
  const { ref, inView } = useView();
  return (
    <section className={styles.DDTBenifitsMain} id={camelToDash(data.title)}>
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
    </section>
  );
};

export default DDTBenifits;

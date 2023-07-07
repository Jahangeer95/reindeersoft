import React from "react";
import { Container } from "react-bootstrap";
import { ImportanceOrOverviewTypes } from "@/types/custom.type";
import styles from "./importanceOrOverview.module.scss";
import { useView } from "@/hooks/useView";

const ImportanceOrOverview = (props: ImportanceOrOverviewTypes) => {
  const { title, contentArray } = props;
  const { ref, inView } = useView();

  return (
    <section className={styles.ImportanceOrOverviewMain}>
      <Container
        fluid="lg"
        ref={ref}
        className={`${styles["content-container"]} ${
          inView ? styles.visible : ""
        }`}
      >
        <div className="d-flex flex-column align-items-center">
          <h2 className="text-center">{title}</h2>
          <article>
            {contentArray.map((state, idx) => (
              <p key={idx}>{state}</p>
            ))}
          </article>
        </div>
      </Container>
    </section>
  );
};

export default ImportanceOrOverview;

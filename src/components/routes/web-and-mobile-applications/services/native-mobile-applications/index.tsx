import React from "react";
import { Container } from "react-bootstrap";
import { useView } from "@/hooks/useView";
import * as data from "./nativeMobileAppData";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./nativeMobileApp.module.scss";

const NativeMobileApplications = () => {
  const { ref, inView } = useView();

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
        </div>
      </Container>
    </section>
  );
};

export default NativeMobileApplications;

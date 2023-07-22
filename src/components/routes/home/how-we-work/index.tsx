import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import * as data from "./engagementModalData";
import { camelToDash } from "@/utils/functions/camelToDash";
import { useView } from "@/hooks/useView";
import styles from "./howWeWork.module.scss";

const HowWeWork = () => {
  const { ref, inView } = useView();
  const router = useRouter();

  useEffect(() => {
    const { query } = router;
    const elementId: string | any = query.id;

    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router]);

  return (
    <section
      className={styles.howWeWorkMain}
      id={camelToDash("Engagement Modal")}
    >
      <Container
        fluid="lg"
        ref={ref}
        className={`${styles["content-container"]} ${
          inView ? styles.visible : ""
        }`}
      >
        <div className="d-flex flex-column align-items-center">
          <h2>How We Work</h2>
          <article>
            <table>
              <thead>
                {data.engagementModalData.slice(0, 1).map((state, idx) => {
                  return (
                    <tr key={idx} className="col-12">
                      <th className="col-3">{state.column1}</th>
                      <th className="col-3">{state.column2}</th>
                      <th className="col-3">{state.column3}</th>
                      <th className="col-3">{state.column4}</th>
                    </tr>
                  );
                })}
              </thead>
              <tbody>
                {data.engagementModalData.slice(1).map((state, idx) => {
                  return (
                    <tr key={idx} className="col-12">
                      <td className="col-3">{state.column1}</td>
                      <td className="col-3">{state.column2}</td>
                      <td className="col-3">{state.column3}</td>
                      <td className="col-3">{state.column4}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default HowWeWork;

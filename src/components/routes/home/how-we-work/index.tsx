import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import * as data from "./engagementModalData";
import { camelToDash } from "@/utils/functions/camelToDash";
import { useView } from "@/hooks/useView";
import styles from "./howWeWork.module.scss";
import MobileViewTable from "./MobileViewTable";

const HowWeWork = () => {
  const { ref, inView } = useView();
  const [mobileView, setMobileView] = useState<boolean>(false);
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
            <div className={styles.mobileView}>
              <MobileViewTable
                title={Object.values(data.engagementModalData[1])[0]}
                description={[
                  ...Object.values(data.engagementModalData[1]).slice(1),
                ]}
              />
              <MobileViewTable
                title={Object.values(data.engagementModalData[2])[0]}
                description={[
                  ...Object.values(data.engagementModalData[2]).slice(1),
                ]}
              />
              <MobileViewTable
                title={Object.values(data.engagementModalData[3])[0]}
                description={[
                  ...Object.values(data.engagementModalData[3]).slice(1),
                ]}
              />
            </div>

            <table>
              <thead>
                {data.engagementModalData.slice(0, 1).map((state, idx) => {
                  return (
                    <tr key={idx}>
                      <th>{state.column1}</th>
                      <th>{state.column2}</th>
                      <th>{state.column3}</th>
                      <th>{state.column4}</th>
                      <th>{state.column5}</th>
                    </tr>
                  );
                })}
              </thead>
              <tbody>
                {data.engagementModalData.slice(1).map((state, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{state.column1}</td>
                      <td>{state.column2}</td>
                      <td>{state.column3}</td>
                      <td>{state.column4}</td>
                      <td>{state.column5}</td>
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

import React from "react";
import { Container } from "react-bootstrap";
import * as data from "./engagementModalData";
import { useView } from "@/hooks/useView";
import styles from "./howWeWork.module.scss";

const HowWeWork = () => {
  const { ref, inView } = useView();
  return (
    <section
      ref={ref}
      className={`${styles.howWeWorkMain} ${inView ? styles.visible : ""}`}
    >
      <Container fluid="lg">
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

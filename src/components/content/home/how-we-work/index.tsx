import React from "react";
import { Container } from "react-bootstrap";
import * as data from "./engagementModalData";
import styles from "./howWeWork.module.scss";

const HowWeWork = () => {
  return (
    <section className={styles.howWeWorkMain}>
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
              {/* {data.engagementModalData.map((state, idx) => {
                return idx === 0 ? (
                  <tr key={idx} className="col-12">
                    <th className="col-3">{state.column1}</th>
                    <th className="col-3">{state.column2}</th>
                    <th className="col-3">{state.column3}</th>
                    <th className="col-3">{state.column4}</th>
                  </tr>
                ) : (
                  <tr key={idx} className="col-12">
                    <th className="col-3">{state.column1}</th>
                    <td className="col-3">{state.column2}</td>
                    <td className="col-3">{state.column3}</td>
                    <td className="col-3">{state.column4}</td>
                  </tr>
                );
              })} */}
            </table>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default HowWeWork;

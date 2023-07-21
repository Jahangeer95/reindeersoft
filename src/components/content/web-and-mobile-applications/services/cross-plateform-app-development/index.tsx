import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import * as data from "./appDevelopmentData";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./AppDevelopment.module.scss";

const AppDevelopment = () => {
  return (
    <section
      className={styles.appDevelopmentMain}
      id={camelToDash(data.crossPlateformAppDevelopmentTitle)}
    >
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <h3 className="text-center">
            {data.crossPlateformAppDevelopmentTitle}
          </h3>
          <article>
            {data.crossPlateformAppDevelopmentDescription.map((state, idx) => (
              <p key={idx}>{state}</p>
            ))}
          </article>
          <article>
            {data.crossPLateformAppDevelopmentTechnologies.map((state, idx) => {
              return (
                <div key={idx}>
                  {/* <h4 className="text-left">{state.heading}:</h4> */}
                  {state.List.map((state, idx) => {
                    return (
                      <span key={idx} title={state.alt}>
                        <Image src={state.icon} alt={state.alt} />
                      </span>
                    );
                  })}
                </div>
              );
            })}
          </article>
        </div>
      </Container>
    </section>
  );
};

export default AppDevelopment;

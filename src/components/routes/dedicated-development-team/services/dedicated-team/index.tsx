import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import { useView } from "@/hooks/useView";
import * as data from "./dedicatedTeamData";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./dedicatedTeam.module.scss";

const TeamExtension = () => {
  const { inView, ref } = useView();
  return (
    <section
      className={styles.DedicatedTeamMain}
      id={camelToDash(data.teamExtensionTitle)}
    >
      <Container
        fluid="lg"
        ref={ref}
        className={`${styles["content-container"]} ${
          inView ? styles.visible : ""
        }`}
      >
        <div className="d-flex flex-column align-items-center">
          <h3>{data.teamExtensionTitle}</h3>
          <p>{data.teamExtensionDescription}</p>
          <article>
            <div>
              <h4>{data.ourResponsibilityData.mainTitle}</h4>
              <ul>
                {data.ourResponsibilityData.content.map(
                  (state: any, idx: number) => {
                    return (
                      <li key={idx}>
                        <span>
                          <h5>{state.title}</h5>
                        </span>
                        <p>{state.description}</p>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
            <div>
              <h4>{data.clientResponsibilityData.mainTitle}</h4>
              <ul>
                {data.clientResponsibilityData.content.map(
                  (state: any, idx: number) => {
                    return (
                      <li key={idx}>
                        <span>
                          <h5>{state.title}</h5>
                        </span>
                        <p>{state.description}</p>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default TeamExtension;

import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import * as data from "./cloudAppServicesData";
import { handleClickScroll } from "@/utils/functions/scrollingHandler";
import styles from "./cloudApplicationServices.module.scss";

const CloudApplicationServices = () => {
  return (
    <section className={styles.CloudAppServicesMain}>
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <h2 className="text-center">{data.title}</h2>
          <article>
            {data.qaServicesArray.map((state, idx) => {
              return (
                <button
                  type="button"
                  key={idx}
                  onClick={() => handleClickScroll(state.value)}
                >
                  <div>
                    <span>
                      <Image
                        src={state.image}
                        alt={state.value}
                        priority={true}
                      />
                    </span>
                    <p>{state.value}</p>
                  </div>
                </button>
              );
            })}
          </article>
        </div>
      </Container>
    </section>
  );
};

export default CloudApplicationServices;

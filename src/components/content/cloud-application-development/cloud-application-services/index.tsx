import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import * as data from "./cloudAppServicesData";
import styles from "./cloudApplicationServices.module.scss";

const CloudApplicationServices = () => {
  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
                  onClick={() => handleClickScroll(state.id)}
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

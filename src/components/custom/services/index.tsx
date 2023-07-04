import React from "react";
import Image from "next/image";
import { useView } from "@/hooks/useView";
import { Container } from "react-bootstrap";
import { ServicesPropTypes } from "@/types/custom.type";
import { handleClickScroll } from "@/utils/functions/scrollingHandler";
import styles from "./services.module.scss";

const Services = (props: ServicesPropTypes) => {
  const { title, servicesArray, serviceClass } = props;
  const { ref, inView } = useView();

  const classes = [
    styles.ServicesMain,
    serviceClass,
    inView ? styles.visible : "",
  ];

  return (
    <section ref={ref} className={classes.join(" ")}>
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <h2 className="text-center">{title}</h2>
          <article>
            {servicesArray.map((state, idx) => {
              return (
                <button
                  type="button"
                  key={idx}
                  onClick={() => handleClickScroll(state.value)}
                >
                  <span>
                    <Image src={state.image} alt={state.value} />
                  </span>
                  <p>{state.value}</p>
                </button>
              );
            })}
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Services;

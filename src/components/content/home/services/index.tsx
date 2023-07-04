import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "react-bootstrap";
import * as data from "./ourServicesData";
import { useView } from "@/hooks/useView";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./ourServices.module.scss";

const OurServices = () => {
  const { ref, inView } = useView();

  const classes = [styles.ourServicesMain, inView ? styles.visible : ""];

  return (
    <section ref={ref} className={classes.join(" ")}>
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <h2>{data.title}</h2>
          <article>
            {data.ourServicesList.map((state, idx) => {
              return (
                <Link href={camelToDash(state.title)} key={idx}>
                  <span>
                    <Image src={state.icon} alt={state.title} />
                  </span>
                  <p>{state.title}</p>
                </Link>
              );
            })}
          </article>
        </div>
      </Container>
    </section>
  );
};

export default OurServices;

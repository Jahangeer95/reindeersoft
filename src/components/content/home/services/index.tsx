import React from "react";
import { Container } from "react-bootstrap";
import Link from "next/link";
import * as data from "./ourServicesData";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./ourServices.module.scss";
import Image from "next/image";

const OurServices = () => {
  return (
    <section className={styles.ourServicesMain}>
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
                  <h5>{state.title}</h5>
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

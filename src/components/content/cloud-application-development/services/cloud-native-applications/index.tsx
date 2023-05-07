import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import * as data from "./cloudNativeApplicationData";
import styles from "./cloudNativeApp.module.scss";

const CloudNativeApplications = () => {
  return (
    <section className={styles.CloudNativeAppMain} id="cloud-app-one">
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <article>
            <span>
              <h3 className="text-center">
                {data.cloudNativeApplicationTitle}
              </h3>
              <p>{data.cloudNativeApplicationContent.description}</p>
            </span>
            <span>
              <Image
                src={data.cloudNativeApplicationContent.image}
                alt={data.cloudNativeApplicationTitle}
              />
            </span>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default CloudNativeApplications;

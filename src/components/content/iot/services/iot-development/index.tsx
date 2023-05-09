import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import * as data from "./iotDevelopmentData";
import styles from "./iotDevelopment.module.scss";

const IoTDevelopment = () => {
  return (
    <section className={styles.IoTDevelopmentMain} id="iot-one">
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <article>
            <span>
              <h3 className="text-center">{data.IoTDevelopmentTitle}</h3>
              <p>{data.IoTDevelopmentContent.description}</p>
            </span>
            <span>
              <Image
                src={data.IoTDevelopmentContent.image}
                alt={data.IoTDevelopmentTitle}
              />
            </span>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default IoTDevelopment;

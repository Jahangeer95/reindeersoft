import React from "react";
import { Container } from "react-bootstrap";
import styles from "./cloudNativeApp.module.scss";

const CloudNativeApplications = () => {
  const title: string = "Cloud-Native Applications";
  const description: string =
    "Embrace the full potential of the cloud with our Cloud-Native Application Development services. We leverage microservices, containerization, and other cutting-edge technologies to build highly modular, resilient, and scalable applications. Say goodbye to monolithic architectures and experience the benefits of cloud-native solutions, including reduced costs, improved performance, and seamless deployment.";
  return (
    <section className={styles.CloudNativeAppMain} id="cloud-app-one">
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <h3 className="text-center">{title}</h3>
          <article>
            <p>{description}</p>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default CloudNativeApplications;

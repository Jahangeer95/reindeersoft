import { Container } from "react-bootstrap";
import Image from "next/image";
import * as data from "./cloudIntegrationData";
import styles from "./cloudIntegrations.module.scss";

const CloudIntegration = () => {
  return (
    <section
      className={styles.CloudIntegrationsMain}
      id={data.cloudIntegrationTitle.toLowerCase().split(" ").join("-")}
    >
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <article>
            <span>
              <h3 className="text-center">{data.cloudIntegrationTitle}</h3>
              <p>{data.cloudIntegrationContent.description}</p>
            </span>
            <span>
              <Image
                src={data.cloudIntegrationContent.image}
                alt={data.cloudIntegrationTitle}
              />
            </span>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default CloudIntegration;

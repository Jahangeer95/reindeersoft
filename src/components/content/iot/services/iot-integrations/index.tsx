import { Container } from "react-bootstrap";
import Image from "next/image";
import * as data from "./ciotIntegrationsData";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./iotIntegrations.module.scss";

const IoTIntegrations = () => {
  return (
    <section
      className={styles.IoTIntegrationsMain}
      id={camelToDash(data.IoTIntegrationsTitle)}
    >
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <article>
            <span>
              <Image
                src={data.IoTIntegrationsContent.image}
                alt={data.IoTIntegrationsTitle}
              />
            </span>
            <span>
              <h3 className="text-center">{data.IoTIntegrationsTitle}</h3>
              <p>{data.IoTIntegrationsContent.description}</p>
            </span>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default IoTIntegrations;

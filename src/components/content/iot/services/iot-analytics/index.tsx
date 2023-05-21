import { Container } from "react-bootstrap";
import Image from "next/image";
import * as data from "./iotAnalyticsData";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./iotAnalytics.module.scss";

const IoTAnalytics = () => {
  return (
    <section
      className={styles.IoTAnalyticsMain}
      id={camelToDash(data.IoTAnalyticsTitle)}
    >
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <article>
            <span>
              <Image
                src={data.IoTAnalyticsContent.image}
                alt={data.IoTAnalyticsTitle}
              />
            </span>
            <span>
              <h3 className="text-center">{data.IoTAnalyticsTitle}</h3>
              <p>{data.IoTAnalyticsContent.description}</p>
            </span>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default IoTAnalytics;

import { Container } from "react-bootstrap";
import Image from "next/image";
import * as data from "./iotSecurityData";
import styles from "./iotSecurity.module.scss";

const IoTSecurity = () => {
  return (
    <section className={styles.IoTSecurityMain} id="iot-three">
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <article>
            <span>
              <h3 className="text-center">{data.IoTSecurityTitle}</h3>
              <p>{data.IoTSecurityContent.description}</p>
            </span>
            <span>
              <Image
                src={data.IoTSecurityContent.image}
                alt={data.IoTSecurityTitle}
              />
            </span>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default IoTSecurity;

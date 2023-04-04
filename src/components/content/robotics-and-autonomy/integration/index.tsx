import { Container } from "react-bootstrap";
import styles from "./integration.module.scss";
import * as data from "./integrationData";

const Integration = () => {
  return (
    <section className={styles.integrationMain} id="robotics-app-seven">
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <h3 className="text-center">{data.title}</h3>
          <article>
            {data.description.map((state, idx) => (
              <p key={idx}>{state}</p>
            ))}
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Integration;

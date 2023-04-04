import { Container } from "react-bootstrap";
import styles from "./simulation.module.scss";
import * as data from "./simulationData";

const Simulation = () => {
  return (
    <section className={styles.simulationMain} id="robotics-app-five">
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

export default Simulation;

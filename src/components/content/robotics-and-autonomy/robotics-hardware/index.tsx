import { Container } from "react-bootstrap";
import styles from "./roboticsHardware.module.scss";
import * as data from "./roboticsHardwareData";

const RoboticsHardware = () => {
  return (
    <section className={styles.roboticsHardwareMain} id="robotics-app-one">
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

export default RoboticsHardware;

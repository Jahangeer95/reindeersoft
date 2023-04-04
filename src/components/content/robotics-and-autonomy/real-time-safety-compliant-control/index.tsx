import { Container } from "react-bootstrap";
import styles from "./safetyCompliantControl.module.scss";
import * as data from "./safetyCompliantControlData";

const SafetyCompliantControl = () => {
  return (
    <section
      className={styles.safetyCompliantControlMain}
      id="robotics-app-four"
    >
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

export default SafetyCompliantControl;

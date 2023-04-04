import { Container } from "react-bootstrap";
import styles from "./computerVision.module.scss";
import * as data from "./computerVisionData";

const ComputerVision = () => {
  return (
    <section className={styles.computerVisionMain} id="robotics-app-six">
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

export default ComputerVision;

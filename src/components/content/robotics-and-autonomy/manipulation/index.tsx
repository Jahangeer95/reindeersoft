import { Container } from "react-bootstrap";
import styles from "./manipulation.module.scss";
import * as data from "./manipulationData";

const Manipulation = () => {
  return (
    <section className={styles.manipulationMain} id="robotics-app-two">
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

export default Manipulation;

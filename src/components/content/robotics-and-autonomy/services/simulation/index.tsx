import { Container } from "react-bootstrap";
import Image from "next/image";
import styles from "./simulation.module.scss";
import * as data from "./simulationData";

const Simulation = () => {
  return (
    <section
      className={styles.simulationMain}
      id={data.title.toLowerCase().split(" ").join("-")}
    >
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <article>
            <span>
              <h3 className="text-center">{data.title}</h3>
              {data.content.description.map((state, idx) => (
                <p key={idx}>{state}</p>
              ))}
            </span>
            <span>
              <Image src={data.content.image} alt={data.title} />
            </span>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Simulation;

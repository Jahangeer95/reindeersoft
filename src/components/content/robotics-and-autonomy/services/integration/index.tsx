import { Container } from "react-bootstrap";
import styles from "./integration.module.scss";
import Image from "next/image";
import * as data from "./integrationData";

const Integration = () => {
  return (
    <section className={styles.integrationMain} id="robotics-app-seven">
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

export default Integration;

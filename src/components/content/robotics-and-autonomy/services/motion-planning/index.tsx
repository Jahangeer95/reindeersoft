import { Container } from "react-bootstrap";
import styles from "./motionPlanning.module.scss";
import Image from "next/image";
import * as data from "./motionPlanningData";

const MotionPlanning = () => {
  return (
    <section className={styles.motionPlanningMain} id="robotics-app-two">
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <article>
            <span>
              <Image src={data.content.image} alt={data.title} />
            </span>
            <span>
              <h3 className="text-center">{data.title}</h3>
              {data.content.description.map((state, idx) => (
                <p key={idx}>{state}</p>
              ))}
            </span>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default MotionPlanning;

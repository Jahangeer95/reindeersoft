import { Container } from "react-bootstrap";
import * as data from "./missionData";
import { useView } from "@/hooks/useView";
import styles from "./mission.module.scss";

const MissionStatement = () => {
  const { ref, inView } = useView();

  return (
    <section className={styles.missionMain}>
      <Container
        fluid="lg"
        ref={ref}
        className={`${styles["content-container"]} ${
          inView ? styles.visible : ""
        }`}
      >
        <div className="d-flex flex-column align-items-center">
          <h2 className="text-center">{data.title}</h2>
          <article>
            {data.contentArr.map((state, idx) => (
              <p key={idx}>{state}</p>
            ))}
          </article>
        </div>
      </Container>
    </section>
  );
};

export default MissionStatement;

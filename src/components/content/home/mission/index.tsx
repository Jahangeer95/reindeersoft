import { Container } from "react-bootstrap";
import { AboutUsContentType, AboutUsTitleType } from "@/types/home.type";
import { useView } from "@/hooks/useView";
import styles from "./mission.module.scss";

const About = () => {
  const { ref, inView } = useView();
  const title: AboutUsTitleType = "Mission Statement";
  const contentArr: AboutUsContentType = [
    '"To strive for excellence in all aspects of our work, constantly pushing the boundaries of innovation to deliver products and services that exceed expectations at competitive cost."',
  ];

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
          <h2 className="text-center">{title}</h2>
          <article>
            {contentArr.map((state, idx) => (
              <p key={idx}>{state}</p>
            ))}
          </article>
        </div>
      </Container>
    </section>
  );
};

export default About;

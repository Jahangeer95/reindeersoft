import { Container } from "react-bootstrap";
import styles from "./about.module.scss";
import { AboutUsContentType, AboutUsTitleType } from "@/types/home.type";

const About = () => {
  const title: AboutUsTitleType = "About Us";
  const contentArr: AboutUsContentType = [
    "At ReindeerSoft, we are driven by a strong set of core values that shape our operations and define who we are. Ethics lies at the heart of everything we do, guiding our decisions and ensuring that we uphold the highest standards of integrity and accountability. We strive for excellence in all aspects of our work, constantly pushing the boundaries of innovation to deliver products and services that exceed expectations.",
    "We believe in mutual growth, fostering collaborative relationships with our clients, employees, and partners. By working together, we aim to create an environment that promotes growth, learning, and success for everyone involved. Additionally, we understand the importance of cost effectiveness and are committed to providing efficient solutions that deliver value for our clients while optimizing their investment.",
  ];

  return (
    <section className={styles.aboutMain}>
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <h2>{title}</h2>
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

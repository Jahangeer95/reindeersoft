import { Container } from "react-bootstrap";
import styles from "./serverlessComputing.module.scss";

const ServerlessComputing = () => {
  const title: string = "Serverless Computing";
  const description: string =
    "Reduce operational overhead and accelerate innovation with our Serverless Application Development services. We design and build applications that take full advantage of serverless computing, allowing you to focus on your core business while we handle the infrastructure management. Enjoy the benefits of reduced costs, improved scalability, and faster time-to-market as you harness the power of serverless technology.";
  return (
    <section className={styles.ServerlessComputingMain} id="cloud-app-four">
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <h3 className="text-center">{title}</h3>
          <article>
            <p>{description}</p>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default ServerlessComputing;

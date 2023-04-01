import { Container } from "react-bootstrap";
import styles from "./distributedSystems.module.scss";

const DistributedSystems = () => {
  const title: string = "Distributed Systems";
  const description: string =
    "Leverage the advantages of distributed systems with our expert services in designing, implementing, and managing scalable cloud applications. Our team will help you create applications that efficiently distribute workloads across multiple servers, ensuring high availability, fault tolerance, and optimal performance. We'll guide you through the process of architecting scalable cloud applications that meet the demands of your growing business.";
  return (
    <section className={styles.DistributedSystemsMain} id="cloud-app-five">
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

export default DistributedSystems;

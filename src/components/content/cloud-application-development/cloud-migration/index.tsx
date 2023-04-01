import { Container } from "react-bootstrap";
import styles from "./cloudMigrations.module.scss";

const CloudMigrations = () => {
  const title: string = "Cloud Migration";
  const description: string =
    "Transitioning to the cloud can be challenging, but our cloud migration services make the process seamless and secure. We analyze your existing infrastructure, applications, and data to develop a customized migration strategy that minimizes downtime and ensures a smooth transition. Our experts will manage every step of the process, from planning and architecture to execution and post-migration support, ensuring a successful migration and optimal performance of your applications in the cloud.";
  return (
    <section className={styles.CloudMigrationsMain} id="cloud-app-two">
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

export default CloudMigrations;

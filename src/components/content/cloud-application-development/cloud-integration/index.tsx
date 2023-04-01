import { Container } from "react-bootstrap";
import styles from "./cloudIntegrations.module.scss";

const CloudIntegration = () => {
  const title: string = "Cloud Integration";
  const description: string =
    "Streamline your business operations by integrating your cloud applications with your existing systems and services. Our cloud integration services provide seamless connectivity between your cloud and on-premise applications, ensuring real-time data synchronization and smooth information flow across your organization. With our expertise in various integration patterns and technologies, we can design and implement custom solutions that enhance collaboration, improve efficiency, and simplify your IT landscape.";
  return (
    <section className={styles.CloudIntegrationsMain} id="cloud-app-three">
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

export default CloudIntegration;

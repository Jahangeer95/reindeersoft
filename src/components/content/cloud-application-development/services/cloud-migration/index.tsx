import { Container } from "react-bootstrap";
import Image from "next/image";
import * as data from "./cloudMigrationData";
import styles from "./cloudMigrations.module.scss";

const CloudMigrations = () => {
  return (
    <section
      className={styles.CloudMigrationsMain}
      id={data.cloudMigrationTitle.toLowerCase().split(" ").join("-")}
    >
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <article>
            <span>
              <Image
                src={data.cloudMigrationContent.image}
                alt={data.cloudMigrationTitle}
              />
            </span>
            <span>
              <h3 className="text-center">{data.cloudMigrationTitle}</h3>
              <p>{data.cloudMigrationContent.description}</p>
            </span>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default CloudMigrations;

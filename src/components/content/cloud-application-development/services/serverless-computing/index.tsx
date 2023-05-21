import { Container } from "react-bootstrap";
import Image from "next/image";
import * as data from "./serverlessComputingData";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./serverlessComputing.module.scss";

const ServerlessComputing = () => {
  return (
    <section
      className={styles.ServerlessComputingMain}
      id={camelToDash(data.serverlessComputingTitle)}
    >
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <article>
            <span>
              <Image
                src={data.serverlessComputingContent.image}
                alt={data.serverlessComputingTitle}
              />
            </span>
            <span>
              <h3 className="text-center">{data.serverlessComputingTitle}</h3>
              <p>{data.serverlessComputingContent.description}</p>
            </span>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default ServerlessComputing;

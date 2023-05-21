import { Container } from "react-bootstrap";
import Image from "next/image";
import * as data from "./distributedSystemData";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./distributedSystems.module.scss";

const DistributedSystems = () => {
  return (
    <section
      className={styles.DistributedSystemsMain}
      id={camelToDash(data.distributedSystemTitle)}
    >
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <article>
            <span>
              <h3 className="text-center">{data.distributedSystemTitle}</h3>
              <p>{data.distributedSystemContent.description}</p>
            </span>
            <span>
              <Image
                src={data.distributedSystemContent.image}
                alt={data.distributedSystemTitle}
              />
            </span>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default DistributedSystems;

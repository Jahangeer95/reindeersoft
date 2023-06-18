import { Container } from "react-bootstrap";
import Image from "next/image";
import * as data from "./integrationsData";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./integrations.module.scss";

const Integrations = () => {
  return (
    <section className={styles.integrationsMain} id={camelToDash(data.title)}>
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <article>
            <span>
              <h3 className="text-center">{data.title}</h3>
              {data.content.description.map((state, idx) => (
                <p key={idx}>{state}</p>
              ))}
            </span>
            <span>
              <Image src={data.content.image} alt={data.title} />
            </span>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Integrations;

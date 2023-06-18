import { Container } from "react-bootstrap";
import Image from "next/image";
import * as data from "./promptEngineeringData";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./promptEngineering.module.scss";

const PromptEngineering = () => {
  return (
    <section
      className={styles.promptEngineeringMain}
      id={camelToDash(data.title)}
    >
      <Container fluid="lg">
        <div className="d-flex flex-column align-items-center">
          <article>
            <span>
              <Image src={data.content.image} alt={data.title} />
            </span>
            <span>
              <h3 className="text-center">{data.title}</h3>
              {data.content.description.map((state, idx) => (
                <p key={idx}>{state}</p>
              ))}
            </span>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default PromptEngineering;

import { Container } from "react-bootstrap";
import Image from "next/image";
import * as data from "./roboticsHardwareData";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./roboticsHardware.module.scss";

const RoboticsHardware = () => {
  return (
    <section
      className={styles.roboticsHardwareMain}
      id={camelToDash(data.title)}
    >
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

export default RoboticsHardware;

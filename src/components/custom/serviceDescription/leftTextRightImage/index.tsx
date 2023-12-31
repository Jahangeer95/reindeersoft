import Image from "next/image";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import { camelToDash } from "@/utils/functions/camelToDash";
import { ServiceDescriptionPropTypes } from "@/types/custom.type";
import { useView } from "@/hooks/useView";
import styles from "./rightDescription.module.scss";

const LeftServiceDescription = (props: ServiceDescriptionPropTypes) => {
  const { title, content } = props;
  const { pathname } = useRouter();
  const { ref, inView } = useView();

  return (
    <section
      className={styles.leftServiceDescriptionMain}
      id={camelToDash(title)}
    >
      <Container
        fluid="lg"
        ref={ref}
        className={`${styles["content-container"]} ${
          inView ? styles.visible : ""
        }`}
      >
        <div className="d-flex flex-column align-items-center">
          <article
            className={
              pathname.slice(1) === "cloud-application-development" ||
              pathname.slice(1) === "robotics-and-autonomy"
                ? styles.contentContainer
                : ""
            }
          >
            <span
              ref={ref}
              className={`${styles["text-container"]} ${
                inView ? styles.visible : ""
              }`}
            >
              <h3 className="text-center">{title}</h3>
              {content.description.map((state, idx) => (
                <p key={idx}>{state}</p>
              ))}
            </span>
            <span
              ref={ref}
              className={`${styles["image-container"]} ${
                inView ? styles.visible : ""
              }`}
            >
              <Image
                src={content.image}
                alt={`${title} - ReindeerSoft`}
                priority
              />
            </span>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default LeftServiceDescription;

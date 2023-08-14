import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useView } from "@/hooks/useView";
import { modalAndServicesData } from "./modalAndServiceData";
import styles from "./ModalAndService.module.scss";

const ModalAndServiceOffering = () => {
  const router = useRouter();
  const { ref, inView } = useView();

  const handleScrollToElement = (event: any, elementId: string) => {
    event.preventDefault();

    router.push(`/?id=#${elementId}`, `/#${elementId}`);
  };

  return (
    <section
      ref={ref}
      className={`${styles["content-container"]} ${
        styles.modalAndServicesMain
      } ${inView ? styles.visible : ""}`}
    >
      <div>
        <div>
          <article>
            {modalAndServicesData.map((state) => {
              return (
                <div key={state.scrollId}>
                  <h3 className="text-center">{state.title}</h3>
                  <p>{state.description}</p>
                  <Link
                    href="#"
                    onClick={(event) =>
                      handleScrollToElement(event, state.scrollId)
                    }
                  >
                    {state.linkText}
                  </Link>
                </div>
              );
            })}
          </article>
        </div>
      </div>
    </section>
  );
};

export default ModalAndServiceOffering;

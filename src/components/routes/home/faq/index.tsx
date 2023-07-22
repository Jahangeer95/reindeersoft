import React, { useState } from "react";
import { Container } from "react-bootstrap";
import * as data from "./faqData";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useView } from "@/hooks/useView";
import styles from "./faqa.module.scss";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number[]>([]);
  const { ref, inView } = useView();

  const setActiveIndexFun = (index: number) => {
    activeIndex?.includes(index)
      ? setActiveIndex((prevActiveIndex) =>
          prevActiveIndex?.filter((idx) => idx !== index)
        )
      : setActiveIndex((prevActiveIndex) => prevActiveIndex?.concat(index));
  };

  return (
    <section className={styles.faqsMain}>
      <Container
        fluid="lg"
        ref={ref}
        className={`${styles["content-container"]} ${
          inView ? styles.visible : ""
        }`}
      >
        <div className="d-flex flex-column align-items-center">
          <h2>{data.title}</h2>
          <article>
            {data.faqsContent.map((state, idx) => (
              <details key={idx} onToggle={() => setActiveIndexFun(idx)}>
                <summary>
                  <h5>{state.question}</h5>
                  <span>
                    {activeIndex?.length && activeIndex?.includes(idx) ? (
                      <AiOutlineMinus />
                    ) : (
                      <AiOutlinePlus />
                    )}
                  </span>
                </summary>
                <p>{state.answer}</p>
              </details>
            ))}
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Faqs;

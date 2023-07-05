import React from "react";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import { handleClickScroll } from "@/utils/functions/scrollingHandler";
import { BannerPropTypes } from "@/types/custom.type";
import styles from "./Banner.module.scss";

const CustomBanner = (props: BannerPropTypes) => {
  const { title1, title2, title, description, list, imageClass } = props;
  const { pathname } = useRouter();

  const classes = [styles.BannerMain, imageClass];

  const Itemslist: JSX.Element = (
    <ul>
      {list.map((state, idx) => (
        <li key={idx}>
          <button type="button" onClick={() => handleClickScroll(state)}>
            {state}
          </button>
        </li>
      ))}
    </ul>
  );
  return (
    <section className={classes.join(" ")}>
      <Container>
        <div>
          <article>
            {pathname === "/" ? (
              <>
                <h1 className={styles.homeTitle}>{title1}</h1>
                <h2>{title2}</h2>
              </>
            ) : (
              <h1>{title}</h1>
            )}

            <div>
              <p>{description}</p>

              {list.length > 0 && <span></span>}
              {list.length > 0 && Itemslist}
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default CustomBanner;

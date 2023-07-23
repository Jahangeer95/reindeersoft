import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { TiInfoLargeOutline } from "react-icons/ti";
import * as data from "./bannerData";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <section className={styles.aboutBannerMain}>
      <Container>
        <div>
          <article>
            <span>
              <TiInfoLargeOutline />
            </span>
            <h1>{data.title}</h1>
            <div>
              <p>{data.description}</p>
            </div>
            <Link href="/contact-us">Contact Us</Link>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Banner;

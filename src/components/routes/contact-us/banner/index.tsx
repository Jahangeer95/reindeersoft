import React from "react";
import { Container } from "react-bootstrap";
import * as data from "./bannerData";
import { handleClickScroll } from "@/utils/functions/scrollingHandler";
import styles from "./Banner.module.scss";
import { AiOutlinePhone } from "react-icons/ai";
import { BiMap } from "react-icons/bi";

const Banner = () => {
  return (
    <section className={styles.IotMain}>
      <Container>
        <div>
          <article>
            <h1>{data.title}</h1>

            <div>
              <p>{data.description}</p>
            </div>

            <div>
              <address>
                <span>
                  <BiMap />
                </span>
                <span>100 Summer St, Boston, MA 02110</span>
              </address>
              <address>
                <span>
                  <AiOutlinePhone />
                </span>
                <span>+1 (508) 202-1132</span>
              </address>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Banner;

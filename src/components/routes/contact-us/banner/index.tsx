import React from "react";
import { Container } from "react-bootstrap";
import * as data from "./bannerData";
import { AiOutlinePhone } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import styles from "./Banner.module.scss";

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
              <address>
                <span>
                  <AiOutlineMail />
                </span>
                <span>info@reindeersoft.com</span>
              </address>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Banner;

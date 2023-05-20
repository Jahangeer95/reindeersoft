import React from "react";
import { Container } from "react-bootstrap";
import Link from "next/link";
import styles from "./hoverMenu.module.scss";
import Image from "next/image";
import { homeBannerArray } from "@/components/content/home/banner/HomeBannerData";
const menu = require("../../../../assets/images/cloud-application-development/cloud-application-development.png");

type HoverMenuPropsType = {
  val: string;
  dis: boolean;
  clickHandler: () => void;
  onHandleSideBar: () => void;
};

const HoverMenu = (props: HoverMenuPropsType) => {
  const classes = [
    styles.Hover_Menu_Main,
    props.val === "entering"
      ? styles.Open
      : props.val === "exiting"
      ? !props.dis && styles.Closed
      : null,
  ];

  const sideBarHandler: () => void = () => {
    if (window.innerWidth <= 768) {
      props.onHandleSideBar();
    }

    props.clickHandler();
  };

  return (
    <section className={classes.join(" ")} onMouseLeave={props.clickHandler}>
      <Container fluid="lg">
        <div>
          <span>
            <Image src={menu} alt="nav-menu" />
          </span>
          <aside>
            {homeBannerArray.map((state, index) => {
              return (
                <Link
                  key={index}
                  href={`${state.heading.split(" ").join("-").toLowerCase()}`}
                  onClick={sideBarHandler}
                >
                  {state.heading}
                </Link>
              );
            })}
          </aside>
        </div>
      </Container>
    </section>
  );
};

export default HoverMenu;

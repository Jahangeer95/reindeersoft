import Link from "next/link";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { camelToDash } from "@/utils/functions/camelToDash";
import { servicesDataArray } from "./servicesdata";
// import { engagementModelData } from "./engagement";
import styles from "./hoverMenu.module.scss";

const menu = require("@/assets/images/web-and-app-development/web-app-development.jpg");

const defaultValue = "";

type HoverMenuPropsType = {
  val: string;
  dis: boolean;
  button: string;
  clickHandler: () => void;
  onHandleSideBar: () => void;
};

const HoverMenu = (props: HoverMenuPropsType) => {
  const [menuImage, setMenuImage] = useState<StaticImageData | any>(menu);
  const [menuText, setMenuText] = useState<null | string>(defaultValue);
  const classes = [
    styles.Hover_Menu_Main,
    props.val === "entering"
      ? styles.Open
      : props.val === "exiting"
      ? !props.dis && styles.Closed
      : null,
  ];

  const sideBarHandler: () => void = () => {
    props.onHandleSideBar();
    props.clickHandler();
  };

  let marginTop;
  if (window.innerWidth <= 768) {
    marginTop = {
      marginTop: props.button === "services" ? "180px" : "220px",
    };
  }

  const servicesMenu: JSX.Element = (
    <div className={styles.services}>
      <span>
        <Image src={menuImage} alt="nav-menu-services-image" priority />
      </span>
      <aside>
        {servicesDataArray.map((state, index) => {
          return (
            <Link
              key={index}
              href={camelToDash(state.heading)}
              onClick={sideBarHandler}
              onMouseEnter={() => setMenuImage(state.bannerImage)}
            >
              {state.heading}
            </Link>
          );
        })}
      </aside>
    </div>
  );

  // We are not using Engagement model menu.....
  // It is there in case we have to another nav menu...

  // const engagementModelMenu: JSX.Element = (
  //   <div className={styles.engagementModel}>
  //     <span>
  //       <Image src={menuImage} alt="nav-menu" />
  //     </span>
  //     <aside>
  //       {engagementModelData.map((state, idx) => {
  //         return (
  //           <Link
  //             key={idx}
  //             href={camelToDash(state.linkname)}
  //             onClick={sideBarHandler}
  //             onMouseEnter={() => {
  //               setMenuImage(state.image);
  //               setMenuText(defaultValue);
  //             }}
  //           >
  //             {state.linkname}
  //           </Link>
  //         );
  //       })}
  //     </aside>

  //     <span>
  //       <p>{menuText}</p>
  //     </span>
  //   </div>
  // );

  return (
    <div
      className={classes.join(" ")}
      onMouseLeave={() => {
        props.clickHandler();
        setMenuImage(menu);
        setMenuText(defaultValue);
      }}
      style={marginTop}
    >
      <div>
        {props.button === "services" && servicesMenu}
        {/* {props.button === "engagement-model" && engagementModelMenu} */}
      </div>
    </div>
  );
};

export default HoverMenu;

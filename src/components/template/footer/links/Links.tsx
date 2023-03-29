import React from "react";
import Link from "next/link";
import styles from "./LinkStyle.module.scss";
import { homeBannerArray } from "@/components/content/home/banner/HomeBannerData";

const Links = () => {
  return (
    <div className={styles.Links_Main}>
      <h5>Services</h5>
      <span>
        <ul>
          {homeBannerArray.map((state, idx) => (
            <li key={idx}>
              <Link
                href={`${state.heading.toLowerCase().split(" ").join("-")}`}
              >
                {state.heading}
              </Link>
            </li>
          ))}
        </ul>
      </span>
    </div>
  );
};

export default Links;

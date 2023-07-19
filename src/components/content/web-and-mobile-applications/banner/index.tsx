import React from "react";
import * as data from "./bannerData";
import CustomBanner from "@/components/custom/banner";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <CustomBanner
      title={data.title}
      description={data.description}
      list={data.list}
      imageClass={styles.WebAppDevBannerImage}
    />
  );
};

export default Banner;

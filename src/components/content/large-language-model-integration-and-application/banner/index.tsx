import React from "react";
import * as data from "./bannerData";
import styles from "./Banner.module.scss";
import CustomBanner from "@/components/custom/banner";

const Banner = () => {
  return (
    <CustomBanner
      title={data.title}
      description={data.description}
      list={data.list}
      imageClass={styles.LLMBannerImage}
    />
  );
};

export default Banner;

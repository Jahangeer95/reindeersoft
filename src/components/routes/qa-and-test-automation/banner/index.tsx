import React, { useState, useEffect } from "react";
import * as data from "./bannerData";
import styles from "./Banner.module.scss";
import CustomBanner from "@/components/custom/banner";

const Banner = () => {
  const [qaTitle, setQaTitle] = useState(data.title);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setQaTitle("QA And Test Automation");
    }
  }, []);

  return (
    <CustomBanner
      title={qaTitle}
      description={data.description}
      list={data.list}
      imageClass={styles.QaBannerImage}
    />
  );
};

export default Banner;

import React, { useState, useEffect } from "react";
import * as data from "./bannerData";
import styles from "./Banner.module.scss";
import CustomBanner from "@/components/custom/banner";

const Banner = () => {
  const [llmTitle, setLlmTitle] = useState(data.title);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setLlmTitle("Large Language Model Integration");
    }
  }, []);

  return (
    <CustomBanner
      title={llmTitle}
      description={data.description}
      list={data.list}
      imageClass={styles.LLMBannerImage}
    />
  );
};

export default Banner;

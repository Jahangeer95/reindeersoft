import React from "react";
import * as data from "./llmServicesData";
import Services from "@/components/custom/services";
import styles from "./serviceStyles.module.scss";

const LLMServices = () => {
  return (
    <>
      <Services
        title={data.title}
        servicesArray={data.roboticServicesArray}
        serviceClass={styles.serviceMain}
      />
    </>
  );
};

export default LLMServices;

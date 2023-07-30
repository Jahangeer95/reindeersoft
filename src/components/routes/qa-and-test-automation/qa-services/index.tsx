import React from "react";
import * as data from "./qaServicesData";
import Services from "@/components/custom/services";
import styles from "./serviceStyles.module.scss";

const QaServices = () => {
  return (
    <Services
      title={data.title}
      servicesArray={data.qaServicesArray}
      serviceClass={styles.serviceMain}
    />
  );
};

export default QaServices;

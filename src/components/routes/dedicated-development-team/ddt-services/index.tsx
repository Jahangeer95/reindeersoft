import React from "react";
import * as data from "./ddtServiceData";
import Services from "@/components/custom/services";
import styles from "./ddtServiceStyles.module.scss";

const DDTServices = () => {
  return (
    <Services
      title={data.title}
      servicesArray={data.qaServicesArray}
      serviceClass={styles.serviceMain}
    />
  );
};

export default DDTServices;

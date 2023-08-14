import React from "react";
import * as data from "./iotServicesData";
import Services from "@/components/custom/services";
import styles from "./serviceStyles.module.scss";

const IoTServices = () => {
  return (
    <Services
      title={data.title}
      servicesArray={data.iotServicesArray}
      serviceClass={styles.serviceMain}
    />
  );
};

export default IoTServices;

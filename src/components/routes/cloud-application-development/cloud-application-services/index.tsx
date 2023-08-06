import Image from "next/image";
import React from "react";
import * as data from "./cloudAppServicesData";
import Services from "@/components/custom/services";
import styles from "./serviceStyles.module.scss";

const CloudApplicationServices = () => {
  return (
    <>
      <Services
        title={data.title}
        servicesArray={data.qaServicesArray}
        serviceClass={styles.serviceMain}
      />
    </>
  );
};

export default CloudApplicationServices;

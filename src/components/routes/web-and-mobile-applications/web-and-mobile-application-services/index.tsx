import Image from "next/image";
import React from "react";
import * as data from "./webAppServicesData";
import Services from "@/components/custom/services";
import styles from "./serviceStyles.module.scss";

const WebMobileApplicationServices = () => {
  return (
    <>
      <Services
        title={data.title}
        servicesArray={data.WebMobileServicesArray}
        serviceClass={styles.serviceMain}
      />
    </>
  );
};

export default WebMobileApplicationServices;

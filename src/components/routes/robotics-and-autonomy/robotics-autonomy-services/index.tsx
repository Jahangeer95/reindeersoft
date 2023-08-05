import React from "react";
import * as data from "./roboticAutonomyServicesData";
import Services from "@/components/custom/services";
import styles from "./serviceStyles.module.scss";

const RoboticsAutonomyServices = () => {
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

export default RoboticsAutonomyServices;
